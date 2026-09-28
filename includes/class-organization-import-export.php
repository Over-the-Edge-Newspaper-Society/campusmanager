<?php
/**
 * Handles import/export functionality for organizations, clubs, and events.
 */
class UNBC_Organization_Import_Export {
    private $source_site = '';
    private $organization_map = array();

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
            'version' => '2.0',
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
        global $wpdb;
        $record = array(
            'source_key' => get_post_meta($post->ID, '_campus_source_key', true) ?: untrailingslashit(get_site_url()) . '/' . $post->post_type . '/' . $post->ID,
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
            $record['series'] = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}event_series WHERE post_id=%d", $post->ID), ARRAY_A);
            $record['occurrences'] = $wpdb->get_results($wpdb->prepare("SELECT * FROM {$wpdb->prefix}event_occurrences WHERE post_id=%d ORDER BY sequence", $post->ID), ARRAY_A);
            $record['occurrence_timezone'] = wp_timezone_string();
            $record['organization_source_id'] = absint(get_post_meta($post->ID, 'organization_id', true));
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

        $this->source_site = untrailingslashit($import_data['site_url'] ?? '');
        $this->organization_map = array();
        $result = array(
            'clubs_failed' => 0, 'events_failed' => 0, 'errors' => array(),
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

    private function record_key($record, $type) {
        if (!empty($record['source_key'])) return sanitize_text_field($record['source_key']);
        if (!empty($record['ID']) && $this->source_site) return $this->source_site . '/' . $type . '/' . absint($record['ID']);
        // Legacy exports without source IDs use title + date/time, never title alone.
        return 'legacy:' . hash('sha256', wp_json_encode(array($type, $record['post_title'] ?? '', $record['meta']['event_date'] ?? '', $record['meta']['start_time'] ?? '', $record['post_name'] ?? '')));
    }

    private function existing_record($record, $type) {
        $key = $this->record_key($record, $type);
        $ids = get_posts(array('post_type'=>$type, 'post_status'=>'any', 'numberposts'=>1, 'fields'=>'ids', 'meta_key'=>'_campus_source_key', 'meta_value'=>$key));
        if (!$ids && $type === 'event' && !empty($record['meta']['external_id'][0])) {
            $ids = get_posts(array('post_type'=>$type, 'post_status'=>'any', 'numberposts'=>1, 'fields'=>'ids', 'meta_key'=>'external_id', 'meta_value'=>$record['meta']['external_id'][0]));
        }
        // Same-site exports can safely identify their original record by source ID.
        if (!$ids && $this->source_site === untrailingslashit(get_site_url()) && !empty($record['ID']) && get_post_type($record['ID']) === $type) $ids = array(absint($record['ID']));
        return $ids ? (int) $ids[0] : 0;
    }

    private function import_organization_record($record, &$result, $images_dir = null) {
        $id = $this->import_record($record, 'organization', $result, $images_dir);
        if ($id && !empty($record['ID'])) $this->organization_map[absint($record['ID'])] = $id;
    }

    private function import_event_record($record, &$result, $images_dir = null) {
        $this->import_record($record, 'event', $result, $images_dir);
    }

    private function import_record($record, $type, &$result, $images_dir) {
        global $wpdb;
        $scope = $type === 'event' ? 'events' : 'clubs'; $id = 0; $transaction = false;
        try {
            if (empty($record['post_title'])) throw new InvalidArgumentException('Missing record title.');
            $existing = $this->existing_record($record, $type);
            if ($existing) { $result[$scope . '_skipped']++; return $existing; }
            $org = 0;
            if ($type === 'event') {
                $source_org = absint($record['organization_source_id'] ?? $record['meta']['organization_id'][0] ?? 0);
                if ($source_org) {
                    $org = $this->organization_map[$source_org] ?? 0;
                    if (!$org) {
                        $org = $this->existing_record(array('ID'=>$source_org), 'organization');
                        if (!$org) throw new InvalidArgumentException('Import the referenced organization first; no destination relation was found.');
                    }
                }
                $policy = UNBC_Write_Policy::event(0, $record['post_status'] ?? 'draft', $org ?: null);
                if (is_wp_error($policy)) throw new RuntimeException($policy->get_error_message());
                if ($policy !== null) $org = $policy;
            }
            $series = UNBC_Event_Store::normalize_series($record['series'] ?? array());
            $occurrences = $record['occurrences'] ?? null;
            if ($occurrences !== null) {
                $zone = new DateTimeZone($record['occurrence_timezone'] ?? wp_timezone_string());
                foreach ($occurrences as &$row) foreach (array('start_datetime','end_datetime') as $field) if (!empty($row[$field])) $row[$field] = (new DateTimeImmutable($row[$field], $zone))->format(DATE_ATOM);
                unset($row);
                $occurrences = UNBC_Event_Store::normalize_occurrences($occurrences);
            }
            UNBC_Event_Store::checked($wpdb->query('START TRANSACTION')); $transaction = true;
            $data = array_intersect_key($record, array_flip(array('post_title','post_content','post_excerpt','post_status','post_name','post_date')));
            $data['post_type'] = $type; $data['post_status'] = $data['post_status'] ?? 'draft';
            $id = wp_insert_post($data, true);
            if (is_wp_error($id) || !$id) { $id = 0; throw new RuntimeException('Record could not be saved.'); }
            $this->import_post_meta($id, $record['meta'] ?? array(), $type);
            UNBC_Event_Store::meta($id, '_campus_source_key', $this->record_key($record, $type));
            if ($type === 'event') {
                UNBC_Event_Store::meta($id, 'organization_id', $org);
                if ($series || $occurrences !== null) UNBC_Event_Store::write($id, $series, $occurrences);
            }
            $this->import_taxonomy_terms($id, $record['taxonomies'] ?? array());
            UNBC_Event_Store::checked($wpdb->query('COMMIT')); $transaction = false;
            $this->import_featured_image_for_record($id, $record, $images_dir);
            $result[$scope . '_imported']++; return $id;
        } catch (Exception $e) {
            if ($transaction) { $wpdb->query('ROLLBACK'); if ($id) clean_post_cache($id); }
            $result[$scope . '_failed']++;
            $result['errors'][] = array('source_id'=>$record['ID'] ?? null, 'message'=>$e->getMessage());
            return 0;
        }
    }

    private function import_post_meta($post_id, $meta_values, $post_type) {
        foreach ((array) $meta_values as $key => $values) {
            if (in_array($key, array('organization_id','_thumbnail_id','_edit_lock','_edit_last','_campus_source_key'), true)) continue;
            foreach ((array) $values as $value) {
                $value = maybe_unserialize($value);
                if ($post_type === 'organization' && in_array($key, UNBC_Organization_Fields::get_meta_keys(), true) && is_scalar($value)) $value = UNBC_Organization_Fields::sanitize_value($key, (string) $value);
                if (!add_post_meta($post_id, $key, wp_slash($value))) throw new RuntimeException('Record metadata could not be saved.');
            }
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
                $saved = wp_set_post_terms($post_id, $term_slugs, $taxonomy);
                if (is_wp_error($saved)) throw new RuntimeException($saved->get_error_message());
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
