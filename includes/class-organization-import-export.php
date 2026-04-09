<?php
/**
 * Handles import/export functionality for organizations, clubs, and events.
 */
class UNBC_Organization_Import_Export {
    public function __construct() {
        add_action('wp_ajax_export_clubs_data', array($this, 'ajax_export_clubs_data'));
        add_action('wp_ajax_import_clubs_data', array($this, 'ajax_import_clubs_data'));
        add_action('wp_ajax_export_events_data', array($this, 'ajax_export_events_data'));
        add_action('wp_ajax_import_events_data', array($this, 'ajax_import_events_data'));
        add_action('wp_ajax_export_complete_data', array($this, 'ajax_export_complete_data'));
        add_action('wp_ajax_import_complete_data', array($this, 'ajax_import_complete_data'));
        add_action('wp_ajax_export_unified_data', array($this, 'ajax_export_unified_data'));
        add_action('wp_ajax_import_unified_data', array($this, 'ajax_import_unified_data'));
    }

    public function ajax_export_clubs_data() {
        $nonce = isset($_POST['export_clubs_nonce']) ? $_POST['export_clubs_nonce'] : (isset($_GET['export_clubs_nonce']) ? $_GET['export_clubs_nonce'] : '');

        if (!wp_verify_nonce($nonce, 'export_clubs_nonce')) {
            wp_die('Security check failed');
        }

        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }

        $request_data = $_POST ? $_POST : $_GET;
        $options = array(
            'include_clubs' => true,
            'include_events' => false,
            'export_content' => !empty($request_data['export_content']) && $request_data['export_content'] === 'true',
            'export_images' => !empty($request_data['export_images']) && $request_data['export_images'] === 'true',
            'export_meta' => !empty($request_data['export_meta']) && $request_data['export_meta'] === 'true',
            'export_relations' => !empty($request_data['export_meta']) && $request_data['export_meta'] === 'true',
        );

        $this->export_payload_as_zip('clubs-export', 'clubs.json', $options);
        wp_die();
    }

    public function ajax_import_clubs_data() {
        check_ajax_referer('import_clubs_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }

        if (!isset($_FILES['import_file'])) {
            wp_send_json_error('No file uploaded');
            return;
        }

        $uploaded_file = $_FILES['import_file'];
        $file_type = wp_check_filetype($uploaded_file['name']);

        if ($file_type['ext'] === 'zip') {
            $result = $this->import_clubs_from_zip($uploaded_file);
        } elseif ($file_type['ext'] === 'json') {
            $result = $this->import_clubs_from_json($uploaded_file);
        } else {
            wp_send_json_error('Invalid file type. Please upload a ZIP or JSON file.');
            return;
        }

        if (is_wp_error($result)) {
            wp_send_json_error($result->get_error_message());
            return;
        }

        wp_send_json_success($result);
    }

    public function ajax_export_events_data() {
        check_ajax_referer('export_events_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }

        $payload = $this->build_export_payload(array(
            'include_clubs' => false,
            'include_events' => true,
            'export_content' => true,
            'export_images' => false,
            'export_meta' => true,
            'export_relations' => true,
        ));

        if (empty($payload['events'])) {
            wp_send_json_error('No events found to export');
            return;
        }

        $this->send_json_download('events-export', $payload);
    }

    public function ajax_import_events_data() {
        check_ajax_referer('import_events_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }

        if (!isset($_FILES['import_file'])) {
            wp_send_json_error('No file uploaded');
            return;
        }

        $import_data = $this->read_import_json($_FILES['import_file']);
        if (is_wp_error($import_data)) {
            wp_send_json_error($import_data->get_error_message());
            return;
        }

        $result = $this->import_data($import_data, null, array('events'));
        if (is_wp_error($result)) {
            wp_send_json_error($result->get_error_message());
            return;
        }

        wp_send_json_success(array(
            'imported' => $result['events_imported'],
            'skipped' => $result['events_skipped'],
        ));
    }

    public function ajax_export_complete_data() {
        check_ajax_referer('export_complete_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }

        $options = array(
            'include_clubs' => true,
            'include_events' => true,
            'export_content' => isset($_POST['export_content']) && $_POST['export_content'] === 'true',
            'export_images' => isset($_POST['export_images']) && $_POST['export_images'] === 'true',
            'export_meta' => isset($_POST['export_meta']) && $_POST['export_meta'] === 'true',
            'export_relations' => isset($_POST['export_relations']) && $_POST['export_relations'] === 'true',
        );

        $this->export_complete_as_zip(
            $options['export_content'],
            $options['export_images'],
            $options['export_meta'],
            $options['export_relations']
        );

        wp_die();
    }

    public function ajax_import_complete_data() {
        check_ajax_referer('import_complete_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }

        if (!isset($_FILES['import_file'])) {
            wp_send_json_error('No file uploaded');
            return;
        }

        $uploaded_file = $_FILES['import_file'];
        $file_type = wp_check_filetype($uploaded_file['name']);

        if ($file_type['ext'] === 'zip') {
            $result = $this->import_complete_from_zip($uploaded_file);
        } else {
            $result = $this->import_complete_from_json($uploaded_file);
        }

        if (is_wp_error($result)) {
            wp_send_json_error($result->get_error_message());
            return;
        }

        wp_send_json_success($result);
    }

    public function ajax_export_unified_data() {
        $nonce = isset($_POST['export_unified_nonce']) ? $_POST['export_unified_nonce'] : (isset($_GET['export_unified_nonce']) ? $_GET['export_unified_nonce'] : '');

        if (!wp_verify_nonce($nonce, 'export_unified_nonce')) {
            wp_die('Security check failed');
        }

        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }

        $request_data = $_POST ? $_POST : $_GET;
        $options = array(
            'include_clubs' => !empty($request_data['export_clubs']) && $request_data['export_clubs'] === 'true',
            'include_events' => !empty($request_data['export_events']) && $request_data['export_events'] === 'true',
            'export_content' => !empty($request_data['export_content']) && $request_data['export_content'] === 'true',
            'export_images' => !empty($request_data['export_images']) && $request_data['export_images'] === 'true',
            'export_meta' => !empty($request_data['export_meta']) && $request_data['export_meta'] === 'true',
            'export_relations' => true,
        );

        $this->export_unified_as_zip(
            $options['export_content'],
            $options['export_images'],
            $options['export_meta'],
            $options['include_clubs'],
            $options['include_events']
        );

        wp_die();
    }

    public function ajax_import_unified_data() {
        check_ajax_referer('import_unified_nonce', 'import_unified_nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error('You do not have permission to import data');
            return;
        }

        if (!isset($_FILES['import_file'])) {
            wp_send_json_error('No file uploaded');
            return;
        }

        $uploaded_file = $_FILES['import_file'];
        $file_type = wp_check_filetype($uploaded_file['name']);

        if ($file_type['ext'] === 'zip') {
            $result = $this->import_unified_from_zip($uploaded_file);
        } elseif ($file_type['ext'] === 'json') {
            $result = $this->import_unified_from_json($uploaded_file);
        } else {
            wp_send_json_error('Invalid file type. Please upload a ZIP or JSON file.');
            return;
        }

        if (is_wp_error($result)) {
            wp_send_json_error($result->get_error_message());
            return;
        }

        wp_send_json_success($result);
    }

    private function add_files_to_zip($dir, $zip, $base = '') {
        $files = scandir($dir);
        foreach ($files as $file) {
            if ($file === '.' || $file === '..') {
                continue;
            }

            $path = $dir . '/' . $file;
            $zip_path = $base ? $base . '/' . $file : $file;

            if (is_dir($path)) {
                $zip->addEmptyDir($zip_path);
                $this->add_files_to_zip($path, $zip, $zip_path);
            } else {
                $zip->addFile($path, $zip_path);
            }
        }
    }

    private function cleanup_temp_dir($dir) {
        if (!is_dir($dir)) {
            return;
        }

        $files = array_diff(scandir($dir), array('.', '..'));
        foreach ($files as $file) {
            $path = $dir . '/' . $file;
            if (is_dir($path)) {
                $this->cleanup_temp_dir($path);
            } else {
                unlink($path);
            }
        }

        rmdir($dir);
    }

    private function export_complete_as_zip($export_content, $export_images, $export_meta, $export_relations) {
        $this->export_payload_as_zip('complete-export', 'data.json', array(
            'include_clubs' => true,
            'include_events' => true,
            'export_content' => $export_content,
            'export_images' => $export_images,
            'export_meta' => $export_meta,
            'export_relations' => $export_relations,
        ));
    }

    private function export_complete_as_json($export_content, $export_images, $export_meta, $export_relations) {
        $payload = $this->build_export_payload(array(
            'include_clubs' => true,
            'include_events' => true,
            'export_content' => $export_content,
            'export_images' => $export_images,
            'export_meta' => $export_meta,
            'export_relations' => $export_relations,
        ));

        if (empty($payload['clubs']) && empty($payload['events'])) {
            wp_send_json_error('No data found to export');
            return;
        }

        $this->send_json_download('complete-export', $payload);
    }

    private function import_clubs_from_zip($uploaded_file) {
        return $this->import_from_zip($uploaded_file, array('clubs'));
    }

    private function import_clubs_from_json($uploaded_file) {
        $import_data = $this->read_import_json($uploaded_file);
        if (is_wp_error($import_data)) {
            return $import_data;
        }

        return $this->import_data($import_data, null, array('clubs'));
    }

    private function import_complete_from_zip($uploaded_file) {
        return $this->import_from_zip($uploaded_file, array('clubs', 'events'));
    }

    private function import_complete_from_json($uploaded_file) {
        $import_data = $this->read_import_json($uploaded_file);
        if (is_wp_error($import_data)) {
            return $import_data;
        }

        return $this->import_data($import_data, null, array('clubs', 'events'));
    }

    private function export_unified_as_zip($export_content, $export_images, $export_meta, $export_clubs, $export_events) {
        $this->export_payload_as_zip('unified-export', 'data.json', array(
            'include_clubs' => $export_clubs,
            'include_events' => $export_events,
            'export_content' => $export_content,
            'export_images' => $export_images,
            'export_meta' => $export_meta,
            'export_relations' => true,
        ));
    }

    private function import_unified_from_json($uploaded_file) {
        $import_data = $this->read_import_json($uploaded_file);
        if (is_wp_error($import_data)) {
            return $import_data;
        }

        return $this->import_data($import_data, null, array('clubs', 'events'));
    }

    private function import_unified_from_zip($uploaded_file) {
        return $this->import_from_zip($uploaded_file, array('clubs', 'events'));
    }

    private function export_payload_as_zip($filename_base, $json_filename, $options) {
        $temp_dir = wp_upload_dir()['basedir'] . '/' . sanitize_key($filename_base) . '-temp-' . time();
        wp_mkdir_p($temp_dir);
        wp_mkdir_p($temp_dir . '/images');

        if (empty($options['include_clubs']) && empty($options['include_events'])) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error('Select at least one data set to export');
            return;
        }

        $payload = $this->build_export_payload($options, $temp_dir);
        if (
            (!$options['include_clubs'] || !empty($payload['clubs'])) ||
            (!$options['include_events'] || !empty($payload['events']))
        ) {
            file_put_contents($temp_dir . '/' . $json_filename, wp_json_encode($payload, JSON_PRETTY_PRINT));
            $this->send_zip_download($filename_base, $temp_dir);
            return;
        }

        $this->cleanup_temp_dir($temp_dir);
        wp_send_json_error('No data found to export');
    }

    private function build_export_payload($options, $temp_dir = null) {
        $options = wp_parse_args($options, array(
            'include_clubs' => false,
            'include_events' => false,
            'export_content' => false,
            'export_images' => false,
            'export_meta' => false,
            'export_relations' => false,
        ));

        $payload = array(
            'version' => '1.0',
            'export_date' => current_time('mysql'),
            'site_url' => get_site_url(),
            'clubs' => array(),
            'events' => array(),
        );

        if ($options['include_clubs']) {
            $organizations = get_posts(array(
                'post_type' => 'organization',
                'numberposts' => -1,
                'post_status' => 'any',
            ));

            foreach ($organizations as $organization) {
                $payload['clubs'][] = $this->build_export_record($organization, $options, $temp_dir);
            }
        }

        if ($options['include_events']) {
            $events = get_posts(array(
                'post_type' => 'event',
                'numberposts' => -1,
                'post_status' => 'any',
            ));

            foreach ($events as $event) {
                $payload['events'][] = $this->build_export_record($event, $options, $temp_dir);
            }
        }

        return $payload;
    }

    private function build_export_record($post, $options, $temp_dir = null) {
        $record = array(
            'ID' => $post->ID,
            'post_title' => $post->post_title,
            'post_name' => $post->post_name,
            'post_status' => $post->post_status,
            'post_date' => $post->post_date,
            'post_modified' => $post->post_modified,
        );

        if ($options['export_content']) {
            $record['post_content'] = $post->post_content;
            $record['post_excerpt'] = $post->post_excerpt;
        }

        if ($options['export_meta']) {
            $record['meta'] = get_post_meta($post->ID);
        }

        if ($options['export_meta'] || $options['export_relations']) {
            $taxonomies = $this->export_post_taxonomies($post->ID, $post->post_type);
            if (!empty($taxonomies)) {
                $record['taxonomies'] = $taxonomies;
            }
        }

        if ($post->post_type === 'event') {
            $organization_id = get_post_meta($post->ID, 'organization_id', true);
            if ($organization_id) {
                $organization = get_post($organization_id);
                if ($organization) {
                    $record['organization'] = $organization->post_title;
                }
            }
        }

        if ($options['export_images']) {
            $featured_image = $this->export_featured_image($post->ID, $post->post_type, $temp_dir);
            if (!empty($featured_image['filename'])) {
                $record['featured_image'] = $featured_image['filename'];
            }
            if (!empty($featured_image['url'])) {
                $record['featured_image_url'] = $featured_image['url'];
            }
        }

        return $record;
    }

    private function export_post_taxonomies($post_id, $post_type) {
        $taxonomy_map = array(
            'organization' => array('org_category', 'org_tag', 'org_status', 'org_size', 'org_type'),
            'event' => array('event_category'),
        );

        $taxonomies = array();
        foreach ($taxonomy_map[$post_type] ?? array() as $taxonomy) {
            if (!taxonomy_exists($taxonomy)) {
                continue;
            }

            $terms = wp_get_post_terms($post_id, $taxonomy);
            if (is_wp_error($terms) || empty($terms)) {
                continue;
            }

            $taxonomies[$taxonomy] = array();
            foreach ($terms as $term) {
                $taxonomies[$taxonomy][] = array(
                    'slug' => $term->slug,
                    'name' => $term->name,
                );
            }
        }

        return $taxonomies;
    }

    private function export_featured_image($post_id, $post_type, $temp_dir = null) {
        $thumbnail_id = get_post_thumbnail_id($post_id);
        if (!$thumbnail_id) {
            return array();
        }

        $image_url = wp_get_attachment_url($thumbnail_id);
        $image_path = get_attached_file($thumbnail_id);

        if ($temp_dir && $image_path && file_exists($image_path)) {
            $filename = sanitize_file_name($post_type . '-' . $post_id . '-' . basename($image_path));
            copy($image_path, $temp_dir . '/images/' . $filename);

            return array(
                'filename' => $filename,
                'url' => $image_url,
            );
        }

        if ($image_url) {
            return array('url' => $image_url);
        }

        return array();
    }

    private function send_json_download($filename_base, $payload) {
        header('Content-Type: application/json');
        header('Content-Disposition: attachment; filename="' . $filename_base . '-' . date('Y-m-d-His') . '.json"');
        echo wp_json_encode($payload, JSON_PRETTY_PRINT);
        exit;
    }

    private function send_zip_download($filename_base, $temp_dir) {
        $zip_file = wp_upload_dir()['basedir'] . '/' . $filename_base . '-' . date('Y-m-d-His') . '.zip';
        $zip = new ZipArchive();

        if ($zip->open($zip_file, ZipArchive::CREATE) !== true) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error('Failed to create ZIP file');
            return;
        }

        $this->add_files_to_zip($temp_dir, $zip, '');
        $zip->close();
        $this->cleanup_temp_dir($temp_dir);

        header('Content-Type: application/zip');
        header('Content-Disposition: attachment; filename="' . basename($zip_file) . '"');
        header('Content-Length: ' . filesize($zip_file));
        readfile($zip_file);
        unlink($zip_file);
        exit;
    }

    private function read_import_json($uploaded_file) {
        $contents = file_get_contents($uploaded_file['tmp_name']);
        $import_data = json_decode($contents, true);

        if (!is_array($import_data)) {
            return new WP_Error('invalid_file', 'Invalid import file');
        }

        return $import_data;
    }

    private function import_from_zip($uploaded_file, $scopes) {
        $temp_dir = wp_upload_dir()['basedir'] . '/import-temp-' . time();
        wp_mkdir_p($temp_dir);

        $zip = new ZipArchive();
        if ($zip->open($uploaded_file['tmp_name']) !== true) {
            $this->cleanup_temp_dir($temp_dir);
            return new WP_Error('extract_failed', 'Failed to extract ZIP file');
        }

        $zip->extractTo($temp_dir);
        $zip->close();

        $json_file = $this->locate_import_json_file($temp_dir);
        if (!$json_file) {
            $this->cleanup_temp_dir($temp_dir);
            return new WP_Error('no_data', 'No import JSON file found in ZIP');
        }

        $result = $this->import_data($this->read_import_json(array('tmp_name' => $json_file)), $temp_dir, $scopes);
        $this->cleanup_temp_dir($temp_dir);

        return $result;
    }

    private function locate_import_json_file($temp_dir) {
        foreach (array('data.json', 'clubs.json', 'events.json') as $filename) {
            $path = $temp_dir . '/' . $filename;
            if (file_exists($path)) {
                return $path;
            }
        }

        return '';
    }

    private function import_data($import_data, $images_dir = null, $scopes = array('clubs', 'events')) {
        if (is_wp_error($import_data)) {
            return $import_data;
        }

        $result = array(
            'clubs_imported' => 0,
            'clubs_skipped' => 0,
            'events_imported' => 0,
            'events_skipped' => 0,
        );

        $has_requested_data = false;

        if (in_array('clubs', $scopes, true) && isset($import_data['clubs'])) {
            $has_requested_data = true;
            foreach ($import_data['clubs'] as $club_data) {
                $this->import_organization_record($club_data, $result, $images_dir);
            }
        }

        if (in_array('events', $scopes, true) && isset($import_data['events'])) {
            $has_requested_data = true;
            foreach ($import_data['events'] as $event_data) {
                $this->import_event_record($event_data, $result, $images_dir);
            }
        }

        if (!$has_requested_data) {
            return new WP_Error('invalid_file', 'Import file does not contain the requested data set');
        }

        return $result;
    }

    private function import_organization_record($club_data, &$result, $images_dir = null) {
        if (empty($club_data['post_title'])) {
            $result['clubs_skipped']++;
            return;
        }

        $existing = get_page_by_title($club_data['post_title'], OBJECT, 'organization');
        if ($existing) {
            $result['clubs_skipped']++;
            return;
        }

        $org_id = wp_insert_post(array(
            'post_type' => 'organization',
            'post_title' => $club_data['post_title'],
            'post_content' => isset($club_data['post_content']) ? $club_data['post_content'] : '',
            'post_excerpt' => isset($club_data['post_excerpt']) ? $club_data['post_excerpt'] : '',
            'post_status' => isset($club_data['post_status']) ? $club_data['post_status'] : 'draft',
            'post_name' => isset($club_data['post_name']) ? $club_data['post_name'] : '',
        ));

        if (!$org_id || is_wp_error($org_id)) {
            $result['clubs_skipped']++;
            return;
        }

        $this->import_post_meta($org_id, isset($club_data['meta']) ? $club_data['meta'] : array(), 'organization');
        $this->import_taxonomy_terms($org_id, isset($club_data['taxonomies']) ? $club_data['taxonomies'] : array());
        $this->import_featured_image_for_record($org_id, $club_data, $images_dir);

        $result['clubs_imported']++;
    }

    private function import_event_record($event_data, &$result, $images_dir = null) {
        if (empty($event_data['post_title'])) {
            $result['events_skipped']++;
            return;
        }

        $existing = get_page_by_title($event_data['post_title'], OBJECT, 'event');
        if ($existing) {
            $result['events_skipped']++;
            return;
        }

        $event_id = wp_insert_post(array(
            'post_type' => 'event',
            'post_title' => $event_data['post_title'],
            'post_content' => isset($event_data['post_content']) ? $event_data['post_content'] : '',
            'post_excerpt' => isset($event_data['post_excerpt']) ? $event_data['post_excerpt'] : '',
            'post_status' => isset($event_data['post_status']) ? $event_data['post_status'] : 'draft',
            'post_name' => isset($event_data['post_name']) ? $event_data['post_name'] : '',
        ));

        if (!$event_id || is_wp_error($event_id)) {
            $result['events_skipped']++;
            return;
        }

        $this->import_post_meta($event_id, isset($event_data['meta']) ? $event_data['meta'] : array(), 'event');
        $this->import_taxonomy_terms($event_id, isset($event_data['taxonomies']) ? $event_data['taxonomies'] : array());
        $this->import_featured_image_for_record($event_id, $event_data, $images_dir);

        if (!empty($event_data['organization'])) {
            $organization = get_page_by_title($event_data['organization'], OBJECT, 'organization');
            if ($organization) {
                update_post_meta($event_id, 'organization_id', $organization->ID);
            }
        }

        $result['events_imported']++;
    }

    private function import_post_meta($post_id, $meta_values, $post_type) {
        foreach ((array) $meta_values as $key => $value) {
            if (is_array($value) && count($value) === 1) {
                $value = reset($value);
            }

            $value = maybe_unserialize($value);

            if (
                $post_type === 'organization' &&
                in_array($key, UNBC_Organization_Fields::get_meta_keys(), true) &&
                is_scalar($value)
            ) {
                $value = UNBC_Organization_Fields::sanitize_value($key, (string) $value);
            }

            update_post_meta($post_id, $key, $value);
        }
    }

    private function import_taxonomy_terms($post_id, $taxonomies) {
        foreach ((array) $taxonomies as $taxonomy => $terms) {
            if (!taxonomy_exists($taxonomy)) {
                continue;
            }

            $term_slugs = array();
            foreach ((array) $terms as $term_data) {
                if (empty($term_data['slug']) || empty($term_data['name'])) {
                    continue;
                }

                $term = get_term_by('slug', $term_data['slug'], $taxonomy);
                if (!$term) {
                    $insert_result = wp_insert_term($term_data['name'], $taxonomy, array(
                        'slug' => $term_data['slug'],
                    ));
                    if (is_wp_error($insert_result)) {
                        continue;
                    }
                }

                $term_slugs[] = $term_data['slug'];
            }

            if (!empty($term_slugs)) {
                wp_set_post_terms($post_id, $term_slugs, $taxonomy);
            }
        }
    }

    private function import_featured_image_for_record($post_id, $record, $images_dir = null) {
        if (!empty($record['featured_image']) && $images_dir) {
            $this->import_featured_image_from_file($post_id, $record['featured_image'], $images_dir);
            return;
        }

        if (!empty($record['featured_image_url'])) {
            $this->import_featured_image($post_id, $record['featured_image_url']);
        }
    }

    private function import_featured_image($post_id, $image_url) {
        if (empty($image_url) || !filter_var($image_url, FILTER_VALIDATE_URL)) {
            return;
        }

        if (!function_exists('media_handle_sideload')) {
            require_once ABSPATH . 'wp-admin/includes/media.php';
            require_once ABSPATH . 'wp-admin/includes/file.php';
            require_once ABSPATH . 'wp-admin/includes/image.php';
        }

        $temp_file = download_url($image_url);
        if (is_wp_error($temp_file)) {
            return;
        }

        $file_array = array(
            'name' => basename($image_url),
            'tmp_name' => $temp_file,
        );

        $file_info = wp_check_filetype($file_array['name']);
        if ($file_info['type']) {
            $file_array['type'] = $file_info['type'];
        }

        $attachment_id = media_handle_sideload($file_array, $post_id);

        if (file_exists($temp_file)) {
            unlink($temp_file);
        }

        if (!is_wp_error($attachment_id)) {
            set_post_thumbnail($post_id, $attachment_id);
        }
    }

    private function import_featured_image_from_file($post_id, $image_filename, $images_dir) {
        if (empty($image_filename) || empty($images_dir)) {
            return;
        }

        $image_path = $images_dir . '/images/' . $image_filename;
        if (!file_exists($image_path)) {
            return;
        }

        if (!function_exists('media_handle_sideload')) {
            require_once ABSPATH . 'wp-admin/includes/media.php';
            require_once ABSPATH . 'wp-admin/includes/file.php';
            require_once ABSPATH . 'wp-admin/includes/image.php';
        }

        $temp_file = wp_tempnam($image_filename);
        copy($image_path, $temp_file);

        $file_array = array(
            'name' => $image_filename,
            'tmp_name' => $temp_file,
        );

        $file_info = wp_check_filetype($file_array['name']);
        if ($file_info['type']) {
            $file_array['type'] = $file_info['type'];
        }

        $attachment_id = media_handle_sideload($file_array, $post_id);

        if (file_exists($temp_file)) {
            unlink($temp_file);
        }

        if (!is_wp_error($attachment_id)) {
            set_post_thumbnail($post_id, $attachment_id);
        }
    }
}
