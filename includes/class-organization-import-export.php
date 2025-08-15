<?php
/**
 * Handles import/export functionality for organizations, clubs, and events
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
    
    /**
     * Export clubs data via AJAX
     */
    public function ajax_export_clubs_data() {
        // Handle both GET and POST requests to fix 403 error
        $nonce = isset($_POST['export_clubs_nonce']) ? $_POST['export_clubs_nonce'] : (isset($_GET['export_clubs_nonce']) ? $_GET['export_clubs_nonce'] : '');
        
        if (!wp_verify_nonce($nonce, 'export_clubs_nonce')) {
            wp_die('Security check failed');
        }
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        // Handle both POST and GET parameters
        $request_data = $_POST ? $_POST : $_GET;
        $export_format = sanitize_text_field($request_data['format'] ?? 'json');
        $export_content = isset($request_data['export_content']) && $request_data['export_content'] === 'true';
        $export_images = isset($request_data['export_images']) && $request_data['export_images'] === 'true';
        $export_meta = isset($request_data['export_meta']) && $request_data['export_meta'] === 'true';
        
        if ($export_format === 'zip') {
            $this->export_clubs_as_zip($export_content, $export_images, $export_meta);
        } else {
            $this->export_clubs_as_json($export_content, $export_images, $export_meta);
        }
        
        wp_die();
    }
    
    /**
     * Export clubs as ZIP file
     */
    private function export_clubs_as_zip($export_content, $export_images, $export_meta) {
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'numberposts' => -1,
            'post_status' => 'any'
        ));
        
        if (empty($organizations)) {
            wp_send_json_error('No organizations found to export');
            return;
        }
        
        // Create temporary directory
        $temp_dir = wp_upload_dir()['basedir'] . '/club-export-temp-' . time();
        wp_mkdir_p($temp_dir);
        wp_mkdir_p($temp_dir . '/images');
        
        $export_data = array(
            'version' => '1.0',
            'export_date' => current_time('mysql'),
            'site_url' => get_site_url(),
            'clubs' => array()
        );
        
        foreach ($organizations as $organization) {
            $org_data = array(
                'ID' => $organization->ID,
                'post_title' => $organization->post_title,
                'post_name' => $organization->post_name,
                'post_status' => $organization->post_status,
                'post_date' => $organization->post_date,
                'post_modified' => $organization->post_modified
            );
            
            if ($export_content) {
                $org_data['post_content'] = $organization->post_content;
                $org_data['post_excerpt'] = $organization->post_excerpt;
            }
            
            if ($export_meta) {
                $org_data['meta'] = get_post_meta($organization->ID);
            }
            
            if ($export_images) {
                $thumbnail_id = get_post_thumbnail_id($organization->ID);
                if ($thumbnail_id) {
                    $image_url = wp_get_attachment_url($thumbnail_id);
                    $image_path = get_attached_file($thumbnail_id);
                    
                    if (file_exists($image_path)) {
                        $image_filename = 'org-' . $organization->ID . '-' . basename($image_path);
                        copy($image_path, $temp_dir . '/images/' . $image_filename);
                        $org_data['featured_image'] = $image_filename;
                    }
                }
            }
            
            $export_data['clubs'][] = $org_data;
        }
        
        // Save JSON data
        file_put_contents($temp_dir . '/clubs.json', json_encode($export_data, JSON_PRETTY_PRINT));
        
        // Create ZIP
        $zip_file = wp_upload_dir()['basedir'] . '/clubs-export-' . date('Y-m-d-His') . '.zip';
        $zip = new ZipArchive();
        
        if ($zip->open($zip_file, ZipArchive::CREATE) === TRUE) {
            $this->add_files_to_zip($temp_dir, $zip, '');
            $zip->close();
            
            // Clean up temp directory
            $this->cleanup_temp_dir($temp_dir);
            
            // Send file
            header('Content-Type: application/zip');
            header('Content-Disposition: attachment; filename="clubs-export-' . date('Y-m-d-His') . '.zip"');
            header('Content-Length: ' . filesize($zip_file));
            readfile($zip_file);
            unlink($zip_file);
        } else {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error('Failed to create ZIP file');
        }
    }
    
    /**
     * Export clubs as JSON
     */
    private function export_clubs_as_json($export_content, $export_images, $export_meta) {
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'numberposts' => -1,
            'post_status' => 'any'
        ));
        
        $export_data = array(
            'version' => '1.0',
            'export_date' => current_time('mysql'),
            'site_url' => get_site_url(),
            'clubs' => array()
        );
        
        foreach ($organizations as $organization) {
            $org_data = array(
                'ID' => $organization->ID,
                'post_title' => $organization->post_title,
                'post_name' => $organization->post_name,
                'post_status' => $organization->post_status,
                'post_date' => $organization->post_date,
                'post_modified' => $organization->post_modified
            );
            
            if ($export_content) {
                $org_data['post_content'] = $organization->post_content;
                $org_data['post_excerpt'] = $organization->post_excerpt;
            }
            
            if ($export_meta) {
                $org_data['meta'] = get_post_meta($organization->ID);
            }
            
            if ($export_images) {
                $thumbnail_id = get_post_thumbnail_id($organization->ID);
                if ($thumbnail_id) {
                    $org_data['featured_image_url'] = wp_get_attachment_url($thumbnail_id);
                }
            }
            
            $export_data['clubs'][] = $org_data;
        }
        
        header('Content-Type: application/json');
        header('Content-Disposition: attachment; filename="organizations-export-' . date('Y-m-d-His') . '.json"');
        echo json_encode($export_data, JSON_PRETTY_PRINT);
    }
    
    /**
     * Import clubs data via AJAX
     */
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
        } else {
            wp_send_json_success($result);
        }
    }
    
    /**
     * Export events data
     */
    public function ajax_export_events_data() {
        check_ajax_referer('export_events_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $events = get_posts(array(
            'post_type' => 'event',
            'numberposts' => -1,
            'post_status' => 'any'
        ));
        
        $export_data = array(
            'version' => '1.0',
            'export_date' => current_time('mysql'),
            'site_url' => get_site_url(),
            'events' => array()
        );
        
        foreach ($events as $event) {
            $event_data = array(
                'ID' => $event->ID,
                'post_title' => $event->post_title,
                'post_content' => $event->post_content,
                'post_excerpt' => $event->post_excerpt,
                'post_status' => $event->post_status,
                'post_date' => $event->post_date,
                'meta' => get_post_meta($event->ID)
            );
            
            // Get organization
            $org_id = get_post_meta($event->ID, 'organization_id', true);
            if ($org_id) {
                $org = get_post($org_id);
                if ($org) {
                    $event_data['organization'] = $org->post_title;
                }
            }
            
            $export_data['events'][] = $event_data;
        }
        
        header('Content-Type: application/json');
        header('Content-Disposition: attachment; filename="events-export-' . date('Y-m-d-His') . '.json"');
        echo json_encode($export_data, JSON_PRETTY_PRINT);
        wp_die();
    }
    
    /**
     * Import events data
     */
    public function ajax_import_events_data() {
        check_ajax_referer('import_events_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        if (!isset($_FILES['import_file'])) {
            wp_send_json_error('No file uploaded');
            return;
        }
        
        $uploaded_file = $_FILES['import_file'];
        $import_data = json_decode(file_get_contents($uploaded_file['tmp_name']), true);
        
        if (!$import_data || !isset($import_data['events'])) {
            wp_send_json_error('Invalid import file');
            return;
        }
        
        $imported = 0;
        $skipped = 0;
        
        foreach ($import_data['events'] as $event_data) {
            // Check if event already exists
            $existing = get_page_by_title($event_data['post_title'], OBJECT, 'event');
            if ($existing) {
                $skipped++;
                continue;
            }
            
            // Create event
            $event_id = wp_insert_post(array(
                'post_type' => 'event',
                'post_title' => $event_data['post_title'],
                'post_content' => $event_data['post_content'],
                'post_excerpt' => $event_data['post_excerpt'],
                'post_status' => $event_data['post_status']
            ));
            
            if ($event_id && !is_wp_error($event_id)) {
                // Import meta data
                if (isset($event_data['meta'])) {
                    foreach ($event_data['meta'] as $key => $value) {
                        if (is_array($value) && count($value) === 1) {
                            $value = $value[0];
                        }
                        update_post_meta($event_id, $key, maybe_unserialize($value));
                    }
                }
                
                // Link to organization if exists
                if (isset($event_data['organization'])) {
                    $org = get_page_by_title($event_data['organization'], OBJECT, 'organization');
                    if ($org) {
                        update_post_meta($event_id, 'organization_id', $org->ID);
                    }
                }
                
                $imported++;
            }
        }
        
        wp_send_json_success(array(
            'imported' => $imported,
            'skipped' => $skipped
        ));
    }
    
    /**
     * Export complete data (organizations, clubs, events)
     */
    public function ajax_export_complete_data() {
        check_ajax_referer('export_complete_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $export_format = sanitize_text_field($_POST['format']);
        $export_content = isset($_POST['export_content']) && $_POST['export_content'] === 'true';
        $export_images = isset($_POST['export_images']) && $_POST['export_images'] === 'true';
        $export_meta = isset($_POST['export_meta']) && $_POST['export_meta'] === 'true';
        $export_relations = isset($_POST['export_relations']) && $_POST['export_relations'] === 'true';
        
        if ($export_format === 'zip') {
            $this->export_complete_as_zip($export_content, $export_images, $export_meta, $export_relations);
        } else {
            $this->export_complete_as_json($export_content, $export_images, $export_meta, $export_relations);
        }
        
        wp_die();
    }
    
    /**
     * Import complete data
     */
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
        } else {
            wp_send_json_success($result);
        }
    }
    
    // Helper methods
    
    private function add_files_to_zip($dir, $zip, $base = '') {
        $files = scandir($dir);
        foreach ($files as $file) {
            if ($file === '.' || $file === '..') continue;
            
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
        if (!is_dir($dir)) return;
        
        $files = array_diff(scandir($dir), array('.', '..'));
        foreach ($files as $file) {
            $path = $dir . '/' . $file;
            is_dir($path) ? $this->cleanup_temp_dir($path) : unlink($path);
        }
        rmdir($dir);
    }
    
    // Simplified implementations - extend as needed
    private function export_complete_as_zip($export_content, $export_images, $export_meta, $export_relations) {
        // Implementation details from original file
        wp_send_json_error('ZIP export not fully implemented in refactored version');
    }
    
    private function export_complete_as_json($export_content, $export_images, $export_meta, $export_relations) {
        // Implementation details from original file
        wp_send_json_error('JSON export not fully implemented in refactored version');
    }
    
    private function import_clubs_from_zip($uploaded_file) {
        // Implementation details from original file
        return new WP_Error('not_implemented', 'ZIP import not fully implemented in refactored version');
    }
    
    private function import_clubs_from_json($uploaded_file) {
        // Implementation details from original file  
        return new WP_Error('not_implemented', 'JSON import not fully implemented in refactored version');
    }
    
    private function import_complete_from_zip($uploaded_file) {
        // Implementation details from original file
        return new WP_Error('not_implemented', 'ZIP import not fully implemented in refactored version');
    }
    
    private function import_complete_from_json($uploaded_file) {
        // Implementation details from original file
        return new WP_Error('not_implemented', 'JSON import not fully implemented in refactored version');
    }
    
    /**
     * Export unified data (organizations and events) via AJAX
     */
    public function ajax_export_unified_data() {
        // Handle both GET and POST requests
        $nonce = isset($_POST['export_unified_nonce']) ? $_POST['export_unified_nonce'] : (isset($_GET['export_unified_nonce']) ? $_GET['export_unified_nonce'] : '');
        
        if (!wp_verify_nonce($nonce, 'export_unified_nonce')) {
            wp_die('Security check failed');
        }
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        // Handle both POST and GET parameters
        $request_data = $_POST ? $_POST : $_GET;
        $export_format = sanitize_text_field($request_data['format'] ?? 'json');
        $export_content = isset($request_data['export_content']) && $request_data['export_content'] === 'true';
        $export_images = isset($request_data['export_images']) && $request_data['export_images'] === 'true';
        $export_meta = isset($request_data['export_meta']) && $request_data['export_meta'] === 'true';
        $export_clubs = isset($request_data['export_clubs']) && $request_data['export_clubs'] === 'true';
        $export_events = isset($request_data['export_events']) && $request_data['export_events'] === 'true';
        
        if ($export_format === 'zip') {
            $this->export_unified_as_zip($export_content, $export_images, $export_meta, $export_clubs, $export_events);
        } else {
            $this->export_unified_as_json($export_content, $export_images, $export_meta, $export_clubs, $export_events);
        }
        
        wp_die();
    }
    
    /**
     * Export unified data as JSON
     */
    private function export_unified_as_json($export_content, $export_images, $export_meta, $export_clubs, $export_events) {
        $export_data = array(
            'version' => '1.0',
            'export_date' => current_time('mysql'),
            'site_url' => get_site_url(),
            'clubs' => array(),
            'events' => array()
        );
        
        // Export organizations (clubs)
        if ($export_clubs) {
            $organizations = get_posts(array(
                'post_type' => 'organization',
                'numberposts' => -1,
                'post_status' => 'any'
            ));
            
            foreach ($organizations as $organization) {
                $org_data = array(
                    'ID' => $organization->ID,
                    'post_title' => $organization->post_title,
                    'post_name' => $organization->post_name,
                    'post_status' => $organization->post_status,
                    'post_date' => $organization->post_date,
                    'post_modified' => $organization->post_modified
                );
                
                if ($export_content) {
                    $org_data['post_content'] = $organization->post_content;
                    $org_data['post_excerpt'] = $organization->post_excerpt;
                }
                
                if ($export_meta) {
                    $org_data['meta'] = get_post_meta($organization->ID);
                }
                
                if ($export_images) {
                    $thumbnail_id = get_post_thumbnail_id($organization->ID);
                    if ($thumbnail_id) {
                        $org_data['featured_image_url'] = wp_get_attachment_url($thumbnail_id);
                    }
                }
                
                $export_data['clubs'][] = $org_data;
            }
        }
        
        // Export events
        if ($export_events) {
            $events = get_posts(array(
                'post_type' => 'event',
                'numberposts' => -1,
                'post_status' => 'any'
            ));
            
            foreach ($events as $event) {
                $event_data = array(
                    'ID' => $event->ID,
                    'post_title' => $event->post_title,
                    'post_name' => $event->post_name,
                    'post_status' => $event->post_status,
                    'post_date' => $event->post_date,
                    'post_modified' => $event->post_modified
                );
                
                if ($export_content) {
                    $event_data['post_content'] = $event->post_content;
                    $event_data['post_excerpt'] = $event->post_excerpt;
                }
                
                if ($export_meta) {
                    $event_data['meta'] = get_post_meta($event->ID);
                }
                
                if ($export_images) {
                    $thumbnail_id = get_post_thumbnail_id($event->ID);
                    if ($thumbnail_id) {
                        $event_data['featured_image_url'] = wp_get_attachment_url($thumbnail_id);
                    }
                }
                
                // Get organization
                $org_id = get_post_meta($event->ID, 'organization_id', true);
                if ($org_id) {
                    $org = get_post($org_id);
                    if ($org) {
                        $event_data['organization'] = $org->post_title;
                    }
                }
                
                $export_data['events'][] = $event_data;
            }
        }
        
        header('Content-Type: application/json');
        header('Content-Disposition: attachment; filename="unified-export-' . date('Y-m-d-His') . '.json"');
        echo json_encode($export_data, JSON_PRETTY_PRINT);
    }
    
    /**
     * Export unified data as ZIP
     */
    private function export_unified_as_zip($export_content, $export_images, $export_meta, $export_clubs, $export_events) {
        // Create temporary directory
        $temp_dir = wp_upload_dir()['basedir'] . '/unified-export-temp-' . time();
        wp_mkdir_p($temp_dir);
        wp_mkdir_p($temp_dir . '/images');
        
        $export_data = array(
            'version' => '1.0',
            'export_date' => current_time('mysql'),
            'site_url' => get_site_url(),
            'clubs' => array(),
            'events' => array()
        );
        
        // Export organizations (same as JSON but with image files)
        if ($export_clubs) {
            $organizations = get_posts(array(
                'post_type' => 'organization',
                'numberposts' => -1,
                'post_status' => 'any'
            ));
            
            foreach ($organizations as $organization) {
                $org_data = array(
                    'ID' => $organization->ID,
                    'post_title' => $organization->post_title,
                    'post_name' => $organization->post_name,
                    'post_status' => $organization->post_status,
                    'post_date' => $organization->post_date,
                    'post_modified' => $organization->post_modified
                );
                
                if ($export_content) {
                    $org_data['post_content'] = $organization->post_content;
                    $org_data['post_excerpt'] = $organization->post_excerpt;
                }
                
                if ($export_meta) {
                    $org_data['meta'] = get_post_meta($organization->ID);
                }
                
                if ($export_images) {
                    $thumbnail_id = get_post_thumbnail_id($organization->ID);
                    if ($thumbnail_id) {
                        $image_url = wp_get_attachment_url($thumbnail_id);
                        $image_path = get_attached_file($thumbnail_id);
                        
                        if (file_exists($image_path)) {
                            $image_filename = 'org-' . $organization->ID . '-' . basename($image_path);
                            copy($image_path, $temp_dir . '/images/' . $image_filename);
                            $org_data['featured_image'] = $image_filename;
                        }
                    }
                }
                
                $export_data['clubs'][] = $org_data;
            }
        }
        
        // Export events (same pattern)
        if ($export_events) {
            $events = get_posts(array(
                'post_type' => 'event',
                'numberposts' => -1,
                'post_status' => 'any'
            ));
            
            foreach ($events as $event) {
                $event_data = array(
                    'ID' => $event->ID,
                    'post_title' => $event->post_title,
                    'post_name' => $event->post_name,
                    'post_status' => $event->post_status,
                    'post_date' => $event->post_date,
                    'post_modified' => $event->post_modified
                );
                
                if ($export_content) {
                    $event_data['post_content'] = $event->post_content;
                    $event_data['post_excerpt'] = $event->post_excerpt;
                }
                
                if ($export_meta) {
                    $event_data['meta'] = get_post_meta($event->ID);
                }
                
                if ($export_images) {
                    $thumbnail_id = get_post_thumbnail_id($event->ID);
                    if ($thumbnail_id) {
                        $image_url = wp_get_attachment_url($thumbnail_id);
                        $image_path = get_attached_file($thumbnail_id);
                        
                        if (file_exists($image_path)) {
                            $image_filename = 'event-' . $event->ID . '-' . basename($image_path);
                            copy($image_path, $temp_dir . '/images/' . $image_filename);
                            $event_data['featured_image'] = $image_filename;
                        }
                    }
                }
                
                // Get organization
                $org_id = get_post_meta($event->ID, 'organization_id', true);
                if ($org_id) {
                    $org = get_post($org_id);
                    if ($org) {
                        $event_data['organization'] = $org->post_title;
                    }
                }
                
                $export_data['events'][] = $event_data;
            }
        }
        
        // Save JSON data
        file_put_contents($temp_dir . '/data.json', json_encode($export_data, JSON_PRETTY_PRINT));
        
        // Create ZIP
        $zip_file = wp_upload_dir()['basedir'] . '/unified-export-' . date('Y-m-d-His') . '.zip';
        $zip = new ZipArchive();
        
        if ($zip->open($zip_file, ZipArchive::CREATE) === TRUE) {
            $this->add_files_to_zip($temp_dir, $zip, '');
            $zip->close();
            
            // Clean up temp directory
            $this->cleanup_temp_dir($temp_dir);
            
            // Send file
            header('Content-Type: application/zip');
            header('Content-Disposition: attachment; filename="unified-export-' . date('Y-m-d-His') . '.zip"');
            header('Content-Length: ' . filesize($zip_file));
            readfile($zip_file);
            unlink($zip_file);
        } else {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error('Failed to create ZIP file');
        }
    }
    
    /**
     * Import unified data via AJAX
     */
    public function ajax_import_unified_data() {
        check_ajax_referer('import_unified_nonce', 'nonce');
        
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
            $result = $this->import_unified_from_zip($uploaded_file);
        } elseif ($file_type['ext'] === 'json') {
            $result = $this->import_unified_from_json($uploaded_file);
        } else {
            wp_send_json_error('Invalid file type. Please upload a ZIP or JSON file.');
            return;
        }
        
        if (is_wp_error($result)) {
            wp_send_json_error($result->get_error_message());
        } else {
            wp_send_json_success($result);
        }
    }
    
    /**
     * Import unified data from JSON
     */
    private function import_unified_from_json($uploaded_file) {
        $import_data = json_decode(file_get_contents($uploaded_file['tmp_name']), true);
        
        if (!$import_data) {
            return new WP_Error('invalid_file', 'Invalid import file');
        }
        
        $result = array(
            'clubs_imported' => 0,
            'clubs_skipped' => 0,
            'events_imported' => 0,
            'events_skipped' => 0
        );
        
        // Import organizations (clubs)
        if (isset($import_data['clubs'])) {
            foreach ($import_data['clubs'] as $club_data) {
                // Check if organization already exists
                $existing = get_page_by_title($club_data['post_title'], OBJECT, 'organization');
                if ($existing) {
                    $result['clubs_skipped']++;
                    continue;
                }
                
                // Create organization
                $org_id = wp_insert_post(array(
                    'post_type' => 'organization',
                    'post_title' => $club_data['post_title'],
                    'post_content' => isset($club_data['post_content']) ? $club_data['post_content'] : '',
                    'post_excerpt' => isset($club_data['post_excerpt']) ? $club_data['post_excerpt'] : '',
                    'post_status' => $club_data['post_status'],
                    'post_name' => $club_data['post_name']
                ));
                
                if ($org_id && !is_wp_error($org_id)) {
                    // Import meta data
                    if (isset($club_data['meta'])) {
                        foreach ($club_data['meta'] as $key => $value) {
                            if (is_array($value) && count($value) === 1) {
                                $value = $value[0];
                            }
                            update_post_meta($org_id, $key, maybe_unserialize($value));
                        }
                    }
                    
                    $result['clubs_imported']++;
                }
            }
        }
        
        // Import events
        if (isset($import_data['events'])) {
            foreach ($import_data['events'] as $event_data) {
                // Check if event already exists
                $existing = get_page_by_title($event_data['post_title'], OBJECT, 'event');
                if ($existing) {
                    $result['events_skipped']++;
                    continue;
                }
                
                // Create event
                $event_id = wp_insert_post(array(
                    'post_type' => 'event',
                    'post_title' => $event_data['post_title'],
                    'post_content' => isset($event_data['post_content']) ? $event_data['post_content'] : '',
                    'post_excerpt' => isset($event_data['post_excerpt']) ? $event_data['post_excerpt'] : '',
                    'post_status' => $event_data['post_status'],
                    'post_name' => isset($event_data['post_name']) ? $event_data['post_name'] : ''
                ));
                
                if ($event_id && !is_wp_error($event_id)) {
                    // Import meta data
                    if (isset($event_data['meta'])) {
                        foreach ($event_data['meta'] as $key => $value) {
                            if (is_array($value) && count($value) === 1) {
                                $value = $value[0];
                            }
                            update_post_meta($event_id, $key, maybe_unserialize($value));
                        }
                    }
                    
                    // Link to organization if exists
                    if (isset($event_data['organization'])) {
                        $org = get_page_by_title($event_data['organization'], OBJECT, 'organization');
                        if ($org) {
                            update_post_meta($event_id, 'organization_id', $org->ID);
                        }
                    }
                    
                    $result['events_imported']++;
                }
            }
        }
        
        return $result;
    }
    
    /**
     * Import unified data from ZIP
     */
    private function import_unified_from_zip($uploaded_file) {
        // Create temporary directory
        $temp_dir = wp_upload_dir()['basedir'] . '/import-temp-' . time();
        wp_mkdir_p($temp_dir);
        
        // Extract ZIP
        $zip = new ZipArchive();
        if ($zip->open($uploaded_file['tmp_name']) === TRUE) {
            $zip->extractTo($temp_dir);
            $zip->close();
        } else {
            $this->cleanup_temp_dir($temp_dir);
            return new WP_Error('extract_failed', 'Failed to extract ZIP file');
        }
        
        // Check for data.json file
        $json_file = $temp_dir . '/data.json';
        if (!file_exists($json_file)) {
            $this->cleanup_temp_dir($temp_dir);
            return new WP_Error('no_data', 'No data.json file found in ZIP');
        }
        
        // Import from JSON
        $fake_uploaded_file = array('tmp_name' => $json_file);
        $result = $this->import_unified_from_json($fake_uploaded_file);
        
        // Clean up
        $this->cleanup_temp_dir($temp_dir);
        
        return $result;
    }
}