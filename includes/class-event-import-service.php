<?php

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Event_Import_Service {
    public function check_import_permission($request) {
        return current_user_can('edit_posts') || $this->validate_api_key($request);
    }

    public function import_event_with_occurrences($request) {
        $event_data = $request->get_param('event');
        $update_if_exists = $request->get_param('update_if_exists') ?? false;
        $warnings = array();
        $series_id = null;
        $occurrences = array();

        if (empty($event_data)) {
            return new WP_Error('missing_data', 'Event data is required', array('status' => 400));
        }

        try {
            $title = sanitize_text_field($event_data['title'] ?? '');
            $content = wp_kses_post($event_data['description'] ?? '');
            $external_id = sanitize_text_field($event_data['external_id'] ?? '');

            $existing_post = $this->find_existing_event($title, $external_id, $event_data['meta'] ?? array());

            if ($existing_post && !$update_if_exists) {
                return rest_ensure_response(array(
                    'success' => true,
                    'action' => 'skipped',
                    'post_id' => $existing_post->ID,
                    'post_url' => get_permalink($existing_post->ID),
                    'series_created' => false,
                    'occurrences_created' => 0,
                ));
            }

            $post_data = array(
                'post_title' => $title,
                'post_content' => $content,
                'post_type' => 'event',
                'post_status' => $event_data['status'] ?? 'publish',
            );

            if ($existing_post) {
                $post_data['ID'] = $existing_post->ID;
                $post_id = wp_update_post($post_data);
                $action = 'updated';
            } else {
                $post_id = wp_insert_post($post_data);
                $action = 'created';
            }

            if (is_wp_error($post_id)) {
                return new WP_Error('post_creation_failed', $post_id->get_error_message(), array('status' => 500));
            }

            $meta = $event_data['meta'] ?? array();
            update_post_meta($post_id, 'external_id', $external_id);
            update_post_meta($post_id, 'event_date', sanitize_text_field($meta['date'] ?? ''));
            update_post_meta($post_id, 'start_time', sanitize_text_field($meta['start_time'] ?? ''));
            update_post_meta($post_id, 'end_time', sanitize_text_field($meta['end_time'] ?? ''));
            update_post_meta($post_id, 'location', sanitize_text_field($meta['location'] ?? ''));
            update_post_meta($post_id, 'cost', sanitize_text_field($meta['cost'] ?? ''));
            update_post_meta($post_id, 'website', esc_url_raw($meta['website'] ?? ''));
            update_post_meta($post_id, 'virtual_link', esc_url_raw($meta['virtual_link'] ?? ''));
            update_post_meta($post_id, 'is_virtual', !empty($meta['virtual_link']) ? 1 : 0);

            if (!empty($meta['organization_id'])) {
                update_post_meta($post_id, 'organization_id', absint($meta['organization_id']));
            }

            $series_data = $event_data['series_data'] ?? null;
            $occurrences = $event_data['occurrences'] ?? array();
            if ($series_data || !empty($occurrences)) {
                $series_id = $this->upsert_series_data($post_id, $series_data, $occurrences);
            }

            if (!empty($event_data['featured_media_url'])) {
                if ($this->can_import_remote_media($request, $event_data['featured_media_url'])) {
                    $this->set_featured_image_from_url($post_id, $event_data['featured_media_url']);
                } else {
                    $warnings[] = 'featured_media_url was skipped because remote media imports are not allowed for this request.';
                }
            }

            if (!empty($event_data['categories'])) {
                $categories = array_map('sanitize_text_field', (array) $event_data['categories']);
                wp_set_object_terms($post_id, $categories, 'event_category');
            }

            return rest_ensure_response(array(
                'success' => true,
                'action' => $action,
                'post_id' => $post_id,
                'post_url' => get_permalink($post_id),
                'series_created' => !empty($series_id),
                'occurrences_created' => count($occurrences),
                'warnings' => $warnings,
            ));
        } catch (Exception $e) {
            return new WP_Error('import_failed', $e->getMessage(), array('status' => 500));
        }
    }

    private function find_existing_event($title, $external_id, $meta) {
        if (!empty($external_id)) {
            $existing = get_posts(array(
                'post_type' => 'event',
                'meta_key' => 'external_id',
                'meta_value' => $external_id,
                'posts_per_page' => 1,
                'post_status' => 'any',
            ));

            if (!empty($existing)) {
                return $existing[0];
            }
        }

        if (empty($title)) {
            return null;
        }

        $event_date = sanitize_text_field($meta['date'] ?? '');
        if (empty($event_date)) {
            return null;
        }

        $duplicate_args = array(
            'post_type' => 'event',
            'post_status' => 'any',
            'posts_per_page' => 1,
            'title' => $title,
            'meta_query' => array(
                'relation' => 'AND',
                array(
                    'key' => 'event_date',
                    'value' => $event_date,
                    'compare' => '=',
                ),
            ),
        );

        $start_time = sanitize_text_field($meta['start_time'] ?? '');
        if (!empty($start_time)) {
            $duplicate_args['meta_query'][] = array(
                'key' => 'start_time',
                'value' => $start_time,
                'compare' => '=',
            );
        }

        $duplicate_check = get_posts($duplicate_args);
        if (!empty($duplicate_check)) {
            return $duplicate_check[0];
        }

        return null;
    }

    private function upsert_series_data($post_id, $series_data, $occurrences) {
        if (!class_exists('UNBC_Event_Series')) {
            return null;
        }

        global $wpdb;
        $series_table = $wpdb->prefix . 'event_series';
        $occurrences_table = $wpdb->prefix . 'event_occurrences';

        $series_db_data = array(
            'post_id' => $post_id,
            'occurrence_type' => sanitize_text_field($series_data['occurrence_type'] ?? 'single'),
            'recurrence_type' => sanitize_text_field($series_data['recurrence_type'] ?? 'none'),
            'recurrence_pattern' => sanitize_text_field($series_data['recurrence_pattern'] ?? ''),
            'is_all_day' => !empty($series_data['is_all_day']) ? 1 : 0,
            'is_virtual' => !empty($series_data['is_virtual']) ? 1 : 0,
            'event_status' => sanitize_text_field($series_data['event_status'] ?? 'scheduled'),
            'status_reason' => sanitize_textarea_field($series_data['status_reason'] ?? ''),
        );

        $existing_series = $wpdb->get_row($wpdb->prepare(
            "SELECT id FROM $series_table WHERE post_id = %d",
            $post_id
        ));

        if ($existing_series) {
            $wpdb->update($series_table, $series_db_data, array('post_id' => $post_id));
            $series_id = (int) $existing_series->id;
        } else {
            $wpdb->insert($series_table, $series_db_data);
            $series_id = (int) $wpdb->insert_id;
        }

        if (empty($occurrences) || !$series_id) {
            return $series_id;
        }

        $wpdb->delete($occurrences_table, array('series_id' => $series_id));

        foreach ($occurrences as $index => $occurrence) {
            $start_dt = new DateTime($occurrence['start_datetime']);
            $end_dt = !empty($occurrence['end_datetime']) ? new DateTime($occurrence['end_datetime']) : null;
            $duration = $end_dt ? ($end_dt->getTimestamp() - $start_dt->getTimestamp()) : null;
            $hash = md5(
                $series_id .
                $start_dt->format('Y-m-d H:i:s') .
                ($end_dt ? $end_dt->format('Y-m-d H:i:s') : '')
            );

            $wpdb->insert($occurrences_table, array(
                'series_id' => $series_id,
                'post_id' => $post_id,
                'sequence' => $occurrence['sequence'] ?? ($index + 1),
                'occurrence_hash' => $hash,
                'start_datetime' => $start_dt->format('Y-m-d H:i:s'),
                'end_datetime' => $end_dt ? $end_dt->format('Y-m-d H:i:s') : null,
                'duration_seconds' => $duration,
                'has_recurrence' => count($occurrences) > 1 ? 1 : 0,
                'is_provisional' => !empty($occurrence['is_provisional']) ? 1 : 0,
            ));
        }

        return $series_id;
    }

    private function validate_api_key($request) {
        $api_key = trim((string) $request->get_header('X-API-Key'));
        $stored_key = trim((string) get_option('unbc_eventscrape_api_key'));

        if ($stored_key === '') {
            return false;
        }

        return $api_key !== '' && hash_equals($stored_key, $api_key);
    }

    private function can_import_remote_media($request, $image_url) {
        if (empty($image_url)) {
            return false;
        }

        if (current_user_can('edit_posts')) {
            return true;
        }

        if (!$this->validate_api_key($request)) {
            return false;
        }

        $host = wp_parse_url($image_url, PHP_URL_HOST);
        if (empty($host)) {
            return false;
        }

        $allowed_hosts = apply_filters('unbc_events_allowed_remote_media_hosts', array(), $request);
        $allowed_hosts = array_filter(array_map('strtolower', array_map('trim', (array) $allowed_hosts)));
        $host = strtolower($host);

        foreach ($allowed_hosts as $allowed_host) {
            $allowed_suffix = '.' . $allowed_host;
            if (
                $host === $allowed_host ||
                substr($host, -strlen($allowed_suffix)) === $allowed_suffix
            ) {
                return true;
            }
        }

        return false;
    }

    private function set_featured_image_from_url($post_id, $image_url) {
        require_once ABSPATH . 'wp-admin/includes/media.php';
        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/image.php';

        $hash = substr(md5($image_url), 0, 12);
        $extension = $this->get_image_extension($image_url);
        $filename = 'event-' . $hash . '.' . $extension;

        global $wpdb;
        $existing_attachment = $wpdb->get_var($wpdb->prepare(
            "SELECT ID FROM {$wpdb->posts}
            WHERE post_type = 'attachment'
            AND guid LIKE %s
            ORDER BY ID DESC LIMIT 1",
            '%' . $wpdb->esc_like($filename)
        ));

        if ($existing_attachment) {
            set_post_thumbnail($post_id, $existing_attachment);
            return (int) $existing_attachment;
        }

        $tmp = download_url($image_url);
        if (is_wp_error($tmp)) {
            return false;
        }

        $file_array = array(
            'name' => $filename,
            'tmp_name' => $tmp,
        );

        $media_id = media_handle_sideload($file_array, $post_id);
        if (is_wp_error($media_id)) {
            @unlink($file_array['tmp_name']);
            return false;
        }

        set_post_thumbnail($post_id, $media_id);

        return (int) $media_id;
    }

    private function get_image_extension($url) {
        $url_path = parse_url($url, PHP_URL_PATH);
        $extension = strtolower(pathinfo($url_path, PATHINFO_EXTENSION));
        $valid_extensions = array('jpg', 'jpeg', 'png', 'gif', 'webp', 'svg');

        return in_array($extension, $valid_extensions, true) ? $extension : 'jpg';
    }
}
