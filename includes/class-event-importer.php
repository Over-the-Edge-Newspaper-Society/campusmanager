<?php
class UNBC_Event_Importer {
    
    public function __construct() {
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('wp_ajax_save_import_preset', array($this, 'ajax_save_preset'));
        add_action('wp_ajax_load_import_preset', array($this, 'ajax_load_preset'));
        add_action('wp_ajax_preview_import', array($this, 'ajax_preview_import'));
        add_action('wp_ajax_execute_import', array($this, 'ajax_execute_import'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
    }

    public function add_admin_menu() {
        add_submenu_page(
            'edit.php?post_type=event',
            __('Import Events'),
            __('Import Events'),
            'manage_options',
            'event-importer',
            array($this, 'admin_page')
        );
    }

    public function enqueue_admin_scripts($hook) {
        if ($hook === 'event_page_event-importer') {
            wp_enqueue_script('jquery-ui-sortable');
            wp_enqueue_script('unbc-event-importer', plugin_dir_url(__FILE__) . '../assets/js/event-importer.js', array('jquery', 'jquery-ui-sortable'), '1.0.0', true);
            wp_localize_script('unbc-event-importer', 'unbcImporter', array(
                'ajax_url' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('unbc_import_nonce')
            ));
            wp_enqueue_style('unbc-event-importer', plugin_dir_url(__FILE__) . '../assets/css/event-importer.css', array(), '1.0.0');
        }
    }

    public function admin_page() {
        $categories = get_terms(array(
            'taxonomy' => 'event_category',
            'hide_empty' => false,
        ));
        
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'posts_per_page' => -1,
            'post_status' => 'publish'
        ));

        $presets = $this->get_import_presets();
        ?>
        <div class="wrap">
            <h1><?php _e('Bulk Event Importer'); ?></h1>
            
            <div class="unbc-importer-container">
                <!-- Step 1: File Upload and Preset Selection -->
                <div class="postbox" id="step-1">
                    <h2 class="hndle"><?php _e('Step 1: Upload Events & Select Preset'); ?></h2>
                    <div class="inside">
                        <table class="form-table">
                            <tr>
                                <th scope="row"><?php _e('Import Preset'); ?></th>
                                <td>
                                    <select id="import-preset" style="min-width: 200px;">
                                        <option value=""><?php _e('Select a saved preset...'); ?></option>
                                        <?php foreach ($presets as $preset): ?>
                                            <option value="<?php echo esc_attr($preset['id']); ?>">
                                                <?php echo esc_html($preset['name']); ?>
                                                <small>(<?php echo esc_html($preset['created']); ?>)</small>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                    <button type="button" class="button" id="load-preset"><?php _e('Load Preset'); ?></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><?php _e('JSON File'); ?></th>
                                <td>
                                    <input type="file" id="json-file" accept=".json" />
                                    <p class="description"><?php _e('Upload a JSON file with event data. Expected format should contain an "events" array with UTC dates and timezone information.'); ?></p>
                                    <div id="file-info" class="notice notice-info" style="display: none; padding: 10px;">
                                        <p><strong><?php _e('File loaded:'); ?></strong> <span id="events-count"></span> <?php _e('events found'); ?></p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <p class="submit">
                            <button type="button" class="button-primary" id="analyze-file" disabled><?php _e('Analyze Events'); ?></button>
                        </p>
                    </div>
                </div>

                <!-- Step 2: Organizer Mapping -->
                <div class="postbox" id="step-2" style="display: none;">
                    <h2 class="hndle"><?php _e('Step 2: Map Organizers to Categories'); ?></h2>
                    <div class="inside">
                        <p><?php _e('Map event organizers to WordPress event categories. Drag to reorder priority.'); ?></p>
                        <div id="organizer-mappings">
                            <!-- Populated by JavaScript -->
                        </div>
                        
                        <h3><?php _e('Default Mappings'); ?></h3>
                        <table class="form-table">
                            <tr>
                                <th scope="row"><?php _e('Default Category'); ?></th>
                                <td>
                                    <select id="default-category">
                                        <option value=""><?php _e('No default category'); ?></option>
                                        <?php foreach ($categories as $category): ?>
                                            <option value="<?php echo esc_attr($category->term_id); ?>">
                                                <?php echo esc_html($category->name); ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                    <p class="description"><?php _e('Category to use for events with unmatched organizers.'); ?></p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><?php _e('Default Organization'); ?></th>
                                <td>
                                    <select id="default-organization">
                                        <option value=""><?php _e('No default organization'); ?></option>
                                        <?php foreach ($organizations as $org): ?>
                                            <option value="<?php echo esc_attr($org->ID); ?>">
                                                <?php echo esc_html($org->post_title); ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                    <p class="description"><?php _e('Organization to assign to imported events (optional).'); ?></p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <!-- Step 3: Import Options -->
                <div class="postbox" id="step-3" style="display: none;">
                    <h2 class="hndle"><?php _e('Step 3: Import Options'); ?></h2>
                    <div class="inside">
                        <table class="form-table">
                            <tr>
                                <th scope="row"><?php _e('Duplicate Handling'); ?></th>
                                <td>
                                    <label>
                                        <input type="radio" name="duplicate-handling" value="skip" checked />
                                        <?php _e('Skip existing events (match by external ID, title + date/time)'); ?>
                                    </label><br>
                                    <label>
                                        <input type="radio" name="duplicate-handling" value="update" />
                                        <?php _e('Update existing events'); ?>
                                    </label><br>
                                    <label>
                                        <input type="radio" name="duplicate-handling" value="create" />
                                        <?php _e('Always create new events (may create duplicates)'); ?>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><?php _e('Save as Preset'); ?></th>
                                <td>
                                    <input type="text" id="preset-name" placeholder="<?php _e('Preset name (optional)'); ?>" />
                                    <button type="button" class="button" id="save-preset"><?php _e('Save Current Settings'); ?></button>
                                    <p class="description"><?php _e('Save current organizer mappings and settings for future use.'); ?></p>
                                </td>
                            </tr>
                        </table>
                        
                        <div id="import-preview" style="display: none;">
                            <h3><?php _e('Import Preview'); ?></h3>
                            <div id="preview-results"></div>
                        </div>
                        
                        <p class="submit">
                            <button type="button" class="button" id="preview-import"><?php _e('Preview Import'); ?></button>
                            <button type="button" class="button-primary" id="execute-import" disabled><?php _e('Execute Import'); ?></button>
                        </p>
                    </div>
                </div>

                <!-- Import Results -->
                <div id="import-results" style="display: none !important;" class="hidden">
                    <div class="notice notice-success">
                        <h3><?php _e('Import Complete'); ?></h3>
                        <div id="results-summary"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Hidden template for organizer mapping -->
        <script type="text/template" id="organizer-mapping-template">
            <div class="organizer-mapping" data-organizer="{{organizer}}">
                <div class="mapping-header">
                    <span class="drag-handle">⋮⋮</span>
                    <strong>{{organizer}}</strong>
                    <span class="event-count">({{count}} events)</span>
                </div>
                <div class="mapping-controls">
                    <select class="category-select" data-organizer="{{organizer}}">
                        <option value=""><?php _e('Select category...'); ?></option>
                        <?php foreach ($categories as $category): ?>
                            <option value="<?php echo esc_attr($category->term_id); ?>">
                                <?php echo esc_html($category->name); ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                    <select class="organization-select" data-organizer="{{organizer}}">
                        <option value=""><?php _e('No organization'); ?></option>
                        <?php foreach ($organizations as $org): ?>
                            <option value="<?php echo esc_attr($org->ID); ?>">
                                <?php echo esc_html($org->post_title); ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                </div>
            </div>
        </script>
        <?php
    }

    public function get_import_presets() {
        $presets = get_option('unbc_import_presets', array());
        return $presets;
    }

    public function ajax_save_preset() {
        check_ajax_referer('unbc_import_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die(__('Insufficient permissions'));
        }

        $preset_name = sanitize_text_field($_POST['preset_name']);
        $mappings = json_decode(stripslashes($_POST['mappings']), true);
        $default_category = sanitize_text_field($_POST['default_category']);
        $default_organization = sanitize_text_field($_POST['default_organization']);

        if (empty($preset_name)) {
            wp_send_json_error(__('Preset name is required'));
        }

        $presets = $this->get_import_presets();
        $preset_id = sanitize_title($preset_name) . '-' . time();

        $presets[$preset_id] = array(
            'id' => $preset_id,
            'name' => $preset_name,
            'mappings' => $mappings,
            'default_category' => $default_category,
            'default_organization' => $default_organization,
            'created' => current_time('mysql')
        );

        update_option('unbc_import_presets', $presets);

        wp_send_json_success(array(
            'message' => __('Preset saved successfully'),
            'preset_id' => $preset_id
        ));
    }

    public function ajax_load_preset() {
        check_ajax_referer('unbc_import_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die(__('Insufficient permissions'));
        }

        $preset_id = sanitize_text_field($_POST['preset_id']);
        $presets = $this->get_import_presets();

        if (!isset($presets[$preset_id])) {
            wp_send_json_error(__('Preset not found'));
        }

        wp_send_json_success($presets[$preset_id]);
    }

    public function ajax_preview_import() {
        check_ajax_referer('unbc_import_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die(__('Insufficient permissions'));
        }

        $events_data = json_decode(stripslashes($_POST['events']), true);
        $mappings = json_decode(stripslashes($_POST['mappings']), true);
        $default_category = sanitize_text_field($_POST['default_category']);
        $duplicate_handling = sanitize_text_field($_POST['duplicate_handling']);

        $preview = $this->preview_import($events_data, $mappings, $default_category, $duplicate_handling);

        wp_send_json_success($preview);
    }

    public function ajax_execute_import() {
        check_ajax_referer('unbc_import_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die(__('Insufficient permissions'));
        }

        $events_data = json_decode(stripslashes($_POST['events']), true);
        $mappings = json_decode(stripslashes($_POST['mappings']), true);
        $default_category = sanitize_text_field($_POST['default_category']);
        $default_organization = sanitize_text_field($_POST['default_organization']);
        $duplicate_handling = sanitize_text_field($_POST['duplicate_handling']);

        $results = $this->execute_import($events_data, $mappings, $default_category, $default_organization, $duplicate_handling);

        wp_send_json_success($results);
    }

    private function preview_import($events_data, $mappings, $default_category, $duplicate_handling) {
        $preview = array(
            'total_events' => count($events_data['events']),
            'will_create' => 0,
            'will_update' => 0,
            'will_skip' => 0,
            'category_breakdown' => array(),
            'timezone_info' => array(),
            'issues' => array()
        );

        foreach ($events_data['events'] as $event) {
            $organizer = $event['organizer'] ?? 'Unknown';
            $category_id = $mappings[$organizer] ?? $default_category ?? null;
            
            if (!$category_id) {
                $preview['issues'][] = "Event '{$event['title']}' has no category assigned (organizer: {$organizer})";
            }

            // Track timezone usage
            $timezone = $event['timezone'] ?? 'UTC';
            if (!isset($preview['timezone_info'][$timezone])) {
                $preview['timezone_info'][$timezone] = 0;
            }
            $preview['timezone_info'][$timezone]++;

            // Validate timezone conversion
            if (!empty($event['startDatetime'])) {
                try {
                    $utc_start = new DateTime($event['startDatetime'], new DateTimeZone('UTC'));
                    $local_tz = new DateTimeZone($timezone);
                    $utc_start->setTimezone($local_tz);
                } catch (Exception $e) {
                    $preview['issues'][] = "Event '{$event['title']}' has invalid timezone '{$timezone}': " . $e->getMessage();
                }
            }

            // Check for duplicates
            $existing_event = $this->find_duplicate_event($event);
            
            if ($existing_event) {
                if ($duplicate_handling === 'skip') {
                    $preview['will_skip']++;
                } else if ($duplicate_handling === 'update') {
                    $preview['will_update']++;
                } else {
                    $preview['will_create']++;
                }
            } else {
                $preview['will_create']++;
            }

            // Category breakdown
            if ($category_id) {
                $category = get_term($category_id);
                $category_name = $category ? $category->name : 'Unknown Category';
                if (!isset($preview['category_breakdown'][$category_name])) {
                    $preview['category_breakdown'][$category_name] = 0;
                }
                $preview['category_breakdown'][$category_name]++;
            }
        }

        return $preview;
    }

    private function execute_import($events_data, $mappings, $default_category, $default_organization, $duplicate_handling) {
        $results = array(
            'created' => 0,
            'updated' => 0,
            'skipped' => 0,
            'errors' => array()
        );

        foreach ($events_data['events'] as $event_data) {
            try {
                $existing_event = $this->find_duplicate_event($event_data);
                
                if ($existing_event && $duplicate_handling === 'skip') {
                    $results['skipped']++;
                    continue;
                }

                $post_id = $this->import_single_event($event_data, $mappings, $default_category, $default_organization, $existing_event);
                
                if ($existing_event && $duplicate_handling === 'update') {
                    $results['updated']++;
                } else {
                    $results['created']++;
                }
                
            } catch (Exception $e) {
                $results['errors'][] = "Error importing '{$event_data['title']}': " . $e->getMessage();
            }
        }

        return $results;
    }

    private function find_duplicate_event($event_data) {
        // Try to find by external ID first
        if (!empty($event_data['id'])) {
            $existing = get_posts(array(
                'post_type' => 'event',
                'meta_query' => array(
                    array(
                        'key' => 'external_id',
                        'value' => $event_data['id'],
                        'compare' => '='
                    )
                ),
                'numberposts' => 1
            ));
            
            if (!empty($existing)) {
                return $existing[0]->ID;
            }
        }

        // Try to find by title + date (convert UTC to local timezone)
        if (!empty($event_data['title']) && !empty($event_data['startDatetime'])) {
            $timezone = $event_data['timezone'] ?? 'UTC';
            $utc_start = new DateTime($event_data['startDatetime'], new DateTimeZone('UTC'));
            $local_tz = new DateTimeZone($timezone);
            $utc_start->setTimezone($local_tz);
            $event_date = $utc_start->format('Y-m-d');
            
            $existing = get_posts(array(
                'post_type' => 'event',
                'title' => $event_data['title'],
                'meta_query' => array(
                    array(
                        'key' => 'event_date',
                        'value' => $event_date,
                        'compare' => '='
                    )
                ),
                'numberposts' => 1
            ));
            
            if (!empty($existing)) {
                return $existing[0]->ID;
            }
        }

        return false;
    }

    private function import_single_event($event_data, $mappings, $default_category, $default_organization, $existing_event_id = false) {
        $organizer = $event_data['organizer'] ?? 'Unknown';
        $category_id = $mappings[$organizer] ?? $default_category ?? null;

        // Prepare post data
        $post_data = array(
            'post_title' => $event_data['title'] ?? 'Untitled Event',
            'post_content' => $event_data['description'] ?? '',
            'post_type' => 'event',
            'post_status' => 'publish'
        );

        if ($existing_event_id) {
            $post_data['ID'] = $existing_event_id;
            $post_id = wp_update_post($post_data);
        } else {
            $post_id = wp_insert_post($post_data);
        }

        if (is_wp_error($post_id)) {
            throw new Exception($post_id->get_error_message());
        }

        // Set category
        if ($category_id) {
            wp_set_post_terms($post_id, array($category_id), 'event_category');
        }

        // Convert UTC dates to local timezone
        $local_start_date = '';
        $local_start_time = '';
        $local_end_time = '';
        
        if (!empty($event_data['startDatetime'])) {
            $timezone = $event_data['timezone'] ?? 'UTC';
            $utc_start = new DateTime($event_data['startDatetime'], new DateTimeZone('UTC'));
            $local_tz = new DateTimeZone($timezone);
            $utc_start->setTimezone($local_tz);
            
            $local_start_date = $utc_start->format('Y-m-d');
            $local_start_time = $utc_start->format('H:i');
        }
        
        if (!empty($event_data['endDatetime'])) {
            $timezone = $event_data['timezone'] ?? 'UTC';
            $utc_end = new DateTime($event_data['endDatetime'], new DateTimeZone('UTC'));
            $local_tz = new DateTimeZone($timezone);
            $utc_end->setTimezone($local_tz);
            
            $local_end_time = $utc_end->format('H:i');
        }

        // Set meta data
        $meta_mappings = array(
            'external_id' => $event_data['id'] ?? '',
            'event_date' => $local_start_date,
            'start_time' => $local_start_time,
            'end_time' => $local_end_time,
            'timezone' => $event_data['timezone'] ?? '',
            'location' => $event_data['venueName'] ?? '',
            'building' => $event_data['venueAddress'] ?? '',
            'room' => '', // Not in source data
            'cost' => 'Free', // Default
            'organization_id' => $default_organization ?: '',
            'contact_email' => '', // Not in source data
            'virtual_link' => $event_data['url'] ?? '',
            'website' => $event_data['url'] ?? '',
            'registration_required' => '0',
            'imported_organizer' => $organizer,
            'import_source_url' => $event_data['url'] ?? ''
        );

        foreach ($meta_mappings as $meta_key => $meta_value) {
            if ($meta_value !== '') {
                update_post_meta($post_id, $meta_key, $meta_value);
            }
        }

        // Handle image if present
        if (!empty($event_data['imageUrl'])) {
            $this->import_event_image($post_id, $event_data['imageUrl']);
        }

        return $post_id;
    }

    private function import_event_image($post_id, $image_url) {
        // Download and set featured image
        $image_id = media_sideload_image($image_url, $post_id, null, 'id');
        if (!is_wp_error($image_id)) {
            set_post_thumbnail($post_id, $image_id);
        }
    }
}

// Initialize the importer
new UNBC_Event_Importer();
?>