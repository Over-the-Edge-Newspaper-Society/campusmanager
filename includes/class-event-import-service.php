<?php

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Event_Import_Service {
    const WARNINGS_META_KEY = '_unbc_events_import_warnings';

    public function __construct() {
        add_action('admin_notices', array($this, 'show_import_warnings'));
    }

    public function show_import_warnings() {
        $screen = get_current_screen();
        $post_id = isset($_GET['post']) ? absint($_GET['post']) : 0;
        if (!$screen || $screen->base !== 'post' || $screen->post_type !== 'event'
            || !$post_id || !current_user_can('edit_post', $post_id)) {
            return;
        }
        $warnings = get_post_meta($post_id, self::WARNINGS_META_KEY, true);
        if (!is_array($warnings) || empty($warnings)) {
            return;
        }
        echo '<div class="notice notice-warning"><p><strong>' . esc_html__('Event import warnings', 'unbc-events') . '</strong></p><ul>';
        foreach ($warnings as $warning) {
            echo '<li>' . esc_html($warning) . '</li>';
        }
        echo '</ul></div>';
    }

    public function check_import_permission($request) {
        return current_user_can('edit_events') || $this->validate_api_key($request);
    }

    public function import_event_with_occurrences($request) {
        $event_data = $request->get_param('event');
        $update_if_exists = $request->get_param('update_if_exists') ?? false;
        $warnings = array();
        $media = array('status' => 'not_requested');
        $series_id = null;
        $occurrences = array();

        if (empty($event_data)) {
            return new WP_Error('missing_data', 'Event data is required', array('status' => 400));
        }

        global $wpdb;
        $transaction = false;
        $post_id = 0;
        try {
            $title = sanitize_text_field($event_data['title'] ?? '');
            $content = wp_kses_post($event_data['description'] ?? '');
            $external_id = sanitize_text_field($event_data['external_id'] ?? '');

            $existing_post = $this->find_existing_event($title, $external_id, $event_data['meta'] ?? array());

            $meta = $event_data['meta'] ?? array();
            $permission = UNBC_Write_Policy::event($existing_post ? $existing_post->ID : 0,
                $event_data['status'] ?? 'publish', $meta['organization_id'] ?? null, $this->validate_api_key($request));
            if (is_wp_error($permission)) return $permission;
            if ($permission !== null) $event_data['meta']['organization_id'] = $permission;

            if ($existing_post && !$update_if_exists) {
                return rest_ensure_response(array(
                    'success' => true,
                    'action' => 'skipped',
                    'post_id' => $existing_post->ID,
                    'post_url' => get_permalink($existing_post->ID),
                    'series_created' => false,
                    'occurrences_created' => 0,
                    'warnings' => array(),
                    'media' => array('status' => 'not_attempted'),
                ));
            }

            $series_data = UNBC_Event_Store::normalize_series($event_data['series_data'] ?? array());
            $normalized_occurrences = array_key_exists('occurrences', $event_data)
                ? UNBC_Event_Store::normalize_occurrences($event_data['occurrences']) : null;
            UNBC_Event_Store::checked($wpdb->query('START TRANSACTION'));
            $transaction = true;

            $post_data = array(
                'post_title' => $title,
                'post_content' => $content,
                'post_type' => 'event',
                'post_status' => $event_data['status'] ?? 'publish',
            );

            if ($existing_post) {
                $post_data['ID'] = $existing_post->ID;
                $post_id = wp_update_post($post_data, true);
                $action = 'updated';
            } else {
                $post_id = wp_insert_post($post_data, true);
                $action = 'created';
            }

            if (!$post_id || is_wp_error($post_id)) {
                $post_id = 0;
                throw new RuntimeException('Event could not be saved.');
            }

            $meta = $event_data['meta'] ?? array();
            UNBC_Event_Store::meta($post_id, 'external_id', $external_id);
            UNBC_Event_Store::meta($post_id, 'event_date', sanitize_text_field($meta['date'] ?? ''));
            UNBC_Event_Store::meta($post_id, 'start_time', sanitize_text_field($meta['start_time'] ?? ''));
            UNBC_Event_Store::meta($post_id, 'end_time', sanitize_text_field($meta['end_time'] ?? ''));
            UNBC_Event_Store::meta($post_id, 'location', sanitize_text_field($meta['location'] ?? ''));
            UNBC_Event_Store::meta($post_id, 'cost', sanitize_text_field($meta['cost'] ?? ''));
            UNBC_Event_Store::meta($post_id, 'website', esc_url_raw($meta['website'] ?? ''));
            UNBC_Event_Store::meta($post_id, 'virtual_link', esc_url_raw($meta['virtual_link'] ?? ''));
            UNBC_Event_Store::meta($post_id, 'is_virtual', !empty($meta['virtual_link']) ? 1 : 0);

            if (!empty($meta['organization_id'])) {
                UNBC_Event_Store::meta($post_id, 'organization_id', absint($meta['organization_id']));
            }

            if (array_key_exists('series_data', $event_data) || $normalized_occurrences !== null) {
                $series_id = UNBC_Event_Store::write($post_id, $series_data, $normalized_occurrences);
            }
            $occurrences = $normalized_occurrences ?? array();
            if (!empty($event_data['categories'])) {
                // Category values arrive as either term IDs (integers) or term
                // names (strings). wp_set_object_terms() treats integers as term
                // IDs but strings as term *names*, auto-creating any that don't
                // exist. Running everything through sanitize_text_field()
                // stringified numeric IDs, so "191"/"193" were created as brand
                // new categories instead of assigning the existing event_category
                // terms. Keep numeric values as ints so they map to real terms.
                $categories = array_map(function ($term) {
                    if (is_int($term)) {
                        return $term;
                    }
                    $term = sanitize_text_field((string) $term);
                    return ctype_digit($term) ? (int) $term : $term;
                }, (array) $event_data['categories']);
                $saved_terms = wp_set_object_terms($post_id, $categories, 'event_category');
                if (is_wp_error($saved_terms)) throw new RuntimeException($saved_terms->get_error_message());
            }

            UNBC_Event_Store::checked($wpdb->query('COMMIT'));
            $transaction = false;
            UNBC_Events_REST_API::bump_cache_generation();

            if (!empty($event_data['featured_media_url'])) {
                if ($this->can_import_remote_media($request, $event_data['featured_media_url'])) {
                    $media_id = $this->set_featured_image_from_url($post_id, $event_data['featured_media_url']);
                    if (is_wp_error($media_id)) {
                        $warnings[] = $media_id->get_error_message();
                        $media = array('status' => 'failed', 'error_code' => $media_id->get_error_code());
                    } else {
                        $media = array('status' => 'imported', 'attachment_id' => $media_id);
                    }
                } else {
                    $warnings[] = 'featured_media_url was skipped because remote media imports are not allowed for this request.';
                    $media = array('status' => 'skipped', 'error_code' => 'remote_media_not_allowed');
                }
            }

            if ($warnings) {
                update_post_meta($post_id, self::WARNINGS_META_KEY, $warnings);
            } else {
                delete_post_meta($post_id, self::WARNINGS_META_KEY);
            }

            return rest_ensure_response(array(
                'success' => true,
                'action' => $action,
                'post_id' => $post_id,
                'post_url' => get_permalink($post_id),
                'series_created' => !empty($series_id),
                'occurrences_created' => count($occurrences),
                'warnings' => $warnings,
                'media' => $media,
            ));
        } catch (Exception $e) {
            if ($transaction) { $wpdb->query('ROLLBACK'); if ($post_id) clean_post_cache($post_id); }
            return new WP_Error('import_failed', $e->getMessage(), array('status' => $e instanceof InvalidArgumentException ? 400 : 500));
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
            return $this->attach_featured_image($post_id, (int) $existing_attachment);
        }

        $tmp = download_url($image_url);
        if (is_wp_error($tmp)) {
            // Do not expose provider error text: it can contain signed URLs or paths.
            if ($tmp->get_error_code() === 'local_copy') {
                return new WP_Error('local_copy', 'The event was saved, but its featured image was not imported because outbound requests are disabled in this local copy.');
            }
            return new WP_Error('featured_media_download_failed', 'The event was saved, but its featured image could not be downloaded. Any existing featured image was kept.');
        }

        $file_array = array(
            'name' => $filename,
            'tmp_name' => $tmp,
        );

        $media_id = media_handle_sideload($file_array, $post_id);
        if (is_wp_error($media_id)) {
            @unlink($file_array['tmp_name']);
            return new WP_Error('featured_media_sideload_failed', 'The event was saved, but WordPress could not save its featured image. Any existing featured image was kept.');
        }

        return $this->attach_featured_image($post_id, (int) $media_id);
    }

    private function attach_featured_image($post_id, $media_id) {
        if (!wp_attachment_is_image($media_id)) {
            return new WP_Error('featured_media_invalid_image', 'The event was saved, but its media attachment is not a supported image. Any existing featured image was kept.');
        }
        set_post_thumbnail($post_id, $media_id);
        // WordPress returns false for an unchanged thumbnail as well as errors.
        if ((int) get_post_thumbnail_id($post_id) !== $media_id) {
            return new WP_Error('featured_media_attach_failed', 'The event was saved, but WordPress could not attach its featured image.');
        }
        return $media_id;
    }

    private function get_image_extension($url) {
        $url_path = parse_url($url, PHP_URL_PATH);
        $extension = strtolower(pathinfo($url_path, PATHINFO_EXTENSION));
        $valid_extensions = array('jpg', 'jpeg', 'png', 'gif', 'webp', 'svg');

        return in_array($extension, $valid_extensions, true) ? $extension : 'jpg';
    }
}
