<?php
class UNBC_Event_Importer {
    private $instagram_organization_map = null;
    private $event_category_cache = array();

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
            'edit_events',
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

                        <div id="instagram-import-note" class="notice notice-info" style="display: none;">
                            <p><?php _e('Instagram club events detected. Organizer and category assignments will be matched automatically using the club profile details. You can go straight to Preview or Execute without manual mappings.', 'unbc-events'); ?></p>
                        </div>

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
        
        if (!current_user_can('edit_events')) {
            wp_die(__('Insufficient permissions'));
        }

        $preset_name = sanitize_text_field($_POST['preset_name']);
        $mappings = $this->sanitize_mappings(json_decode(stripslashes($_POST['mappings']), true));
        $default_category = isset($_POST['default_category']) ? absint($_POST['default_category']) : 0;
        $default_organization = isset($_POST['default_organization']) ? absint($_POST['default_organization']) : 0;

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
        
        if (!current_user_can('edit_events')) {
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
        
        if (!current_user_can('edit_events')) {
            wp_die(__('Insufficient permissions'));
        }

        $events_data = json_decode(stripslashes($_POST['events']), true);
        $mappings = $this->sanitize_mappings(json_decode(stripslashes($_POST['mappings']), true));
        $default_category = isset($_POST['default_category']) ? absint($_POST['default_category']) : 0;
        $duplicate_handling = sanitize_text_field($_POST['duplicate_handling']);

        $preview = $this->preview_import($events_data, $mappings, $default_category, $duplicate_handling);

        wp_send_json_success($preview);
    }

    public function ajax_execute_import() {
        check_ajax_referer('unbc_import_nonce', 'nonce');
        
        if (!current_user_can('edit_events')) {
            wp_die(__('Insufficient permissions'));
        }

        $events_data = json_decode(stripslashes($_POST['events']), true);
        $mappings = $this->sanitize_mappings(json_decode(stripslashes($_POST['mappings']), true));
        $default_category = isset($_POST['default_category']) ? absint($_POST['default_category']) : 0;
        $default_organization = isset($_POST['default_organization']) ? absint($_POST['default_organization']) : 0;
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
            'issues' => array(),
            'categories_to_create' => array()
        );

        foreach ($events_data['events'] as $event) {
            $organizer = $this->determine_event_organizer($event);
            $mapping = $this->parse_mapping_for_organizer($mappings, $organizer);
            $is_club_event = $this->is_club_event($event);
            $category_id = $this->determine_event_category($event, $mapping, $default_category, false);
            $category_label = null;

            if (!$category_id) {
                if (!$is_club_event && !empty($event['category'])) {
                    $category_label = $event['category'] . ' (new)';
                    $preview['categories_to_create'][$event['category']] = true;
                } else if (!$is_club_event) {
                    $preview['issues'][] = "Event '{$event['title']}' has no category assigned (organizer: {$organizer})";
                }
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
            if ($category_id || $category_label) {
                if ($category_id) {
                    $category = get_term($category_id);
                    $category_label = $category ? $category->name : 'Category ID ' . $category_id;
                }

                if (!isset($preview['category_breakdown'][$category_label])) {
                    $preview['category_breakdown'][$category_label] = 0;
                }
                $preview['category_breakdown'][$category_label]++;
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
        $organizer = $this->determine_event_organizer($event_data);
        $mapping = $this->parse_mapping_for_organizer($mappings, $organizer);
        $category_id = $this->determine_event_category($event_data, $mapping, $default_category, true);

        $organization_id = $default_organization ?: 0;

        if (!empty($mapping['organization'])) {
            $organization_id = $mapping['organization'];
        } else {
            $matched_organization_id = $this->match_event_to_organization($event_data);
            if ($matched_organization_id) {
                $organization_id = $matched_organization_id;
            }
        }

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
            'organization_id' => $organization_id ?: '',
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

    private function sanitize_mappings($mappings) {
        $sanitized = array();

        if (!is_array($mappings)) {
            return $sanitized;
        }

        foreach ($mappings as $organizer => $entry) {
            if (!is_string($organizer)) {
                continue;
            }

            $organizer_key = trim(wp_strip_all_tags($organizer));

            if ($organizer_key === '') {
                continue;
            }

            if (is_array($entry)) {
                $sanitized[$organizer_key] = array(
                    'category' => isset($entry['category']) ? absint($entry['category']) : 0,
                    'organization' => isset($entry['organization']) ? absint($entry['organization']) : 0,
                );
            } else {
                $sanitized[$organizer_key] = absint($entry);
            }
        }

        return $sanitized;
    }

    private function parse_mapping_for_organizer($mappings, $organizer) {
        if (!is_array($mappings) || empty($organizer)) {
            return array(
                'category' => 0,
                'organization' => 0,
            );
        }

        $normalized_organizer = trim($organizer);

        if (isset($mappings[$normalized_organizer])) {
            $entry = $mappings[$normalized_organizer];
        } elseif (isset($mappings[$organizer])) {
            $entry = $mappings[$organizer];
        } else {
            return array(
                'category' => 0,
                'organization' => 0,
            );
        }

        if (is_array($entry)) {
            $category = isset($entry['category']) ? absint($entry['category']) : 0;
            $organization = isset($entry['organization']) ? absint($entry['organization']) : 0;
        } else {
            $category = absint($entry);
            $organization = 0;
        }

        return array(
            'category' => $category,
            'organization' => $organization,
        );
    }

    private function determine_event_category($event_data, $mapping, $default_category, $create_category = false) {
        if (!empty($mapping['category'])) {
            return (int) $mapping['category'];
        }

        $is_club_event = $this->is_club_event($event_data);

        if (!$is_club_event && !empty($event_data['category'])) {
            $resolved = $this->resolve_event_category($event_data['category'], $create_category);
            if ($resolved) {
                return $resolved;
            }
        }

        if ($default_category) {
            return (int) $default_category;
        }

        return 0;
    }

    private function resolve_event_category($category_name, $create = false) {
        if (empty($category_name)) {
            return 0;
        }

        $key = strtolower(trim(wp_strip_all_tags($category_name)));

        if ($key === '') {
            return 0;
        }

        if (isset($this->event_category_cache[$key])) {
            return $this->event_category_cache[$key];
        }

        $slug = sanitize_title($category_name);

        $term = get_term_by('slug', $slug, 'event_category');

        if (!$term) {
            $term = get_term_by('name', $category_name, 'event_category');
        }

        if ($term) {
            $term_id = (int) $term->term_id;
            $this->event_category_cache[$key] = $term_id;
            return $term_id;
        }

        if (!$create) {
            $this->event_category_cache[$key] = 0;
            return 0;
        }

        $inserted = wp_insert_term($category_name, 'event_category', array('slug' => $slug));

        if (is_wp_error($inserted)) {
            if ($inserted->get_error_code() === 'term_exists') {
                $term_id = (int) $inserted->get_error_data();
            } else {
                $term_id = 0;
            }
        } else {
            $term_id = isset($inserted['term_id']) ? (int) $inserted['term_id'] : 0;
        }

        $this->event_category_cache[$key] = $term_id;

        return $term_id;
    }

    private function determine_event_organizer($event_data) {
        if (!empty($event_data['organizer'])) {
            return trim($event_data['organizer']);
        }

        if (!empty($event_data['club']) && is_array($event_data['club']) && !empty($event_data['club']['name'])) {
            return trim($event_data['club']['name']);
        }

        return 'Unknown';
    }

    private function is_club_event($event_data) {
        if (empty($event_data['club']) || !is_array($event_data['club'])) {
            return false;
        }

        $club = $event_data['club'];

        return !empty($club['profileUrl']) || !empty($club['username']);
    }

    private function match_event_to_organization($event_data) {
        if (empty($event_data['club']) || !is_array($event_data['club'])) {
            return false;
        }

        $club = $event_data['club'];
        $candidates = array();

        if (!empty($club['profileUrl'])) {
            $candidates[] = $club['profileUrl'];
        }

        if (!empty($club['username'])) {
            $candidates[] = $club['username'];
        }

        foreach ($candidates as $candidate) {
            $organization_id = $this->find_organization_by_instagram($candidate);

            if ($organization_id) {
                return $organization_id;
            }
        }

        return false;
    }

    private function find_organization_by_instagram($value) {
        $identifier = $this->normalize_instagram_identifier($value);

        if (!$identifier) {
            return false;
        }

        $map = $this->get_instagram_organization_map();

        return $map[$identifier] ?? false;
    }

    private function get_instagram_organization_map() {
        if ($this->instagram_organization_map !== null) {
            return $this->instagram_organization_map;
        }

        $this->instagram_organization_map = array();

        $organization_ids = get_posts(array(
            'post_type' => 'organization',
            'post_status' => array('publish', 'pending', 'draft'),
            'posts_per_page' => -1,
            'fields' => 'ids',
        ));

        foreach ($organization_ids as $organization_id) {
            $instagram_value = get_post_meta($organization_id, 'org_instagram', true);
            $identifier = $this->normalize_instagram_identifier($instagram_value);

            if ($identifier && !isset($this->instagram_organization_map[$identifier])) {
                $this->instagram_organization_map[$identifier] = $organization_id;
            }
        }

        return $this->instagram_organization_map;
    }

    private function normalize_instagram_identifier($value) {
        if (empty($value) || !is_string($value)) {
            return '';
        }

        $value = trim($value);

        if ($value === '') {
            return '';
        }

        if (stripos($value, 'instagram.com') !== false) {
            $parsed = function_exists('wp_parse_url') ? wp_parse_url($value) : parse_url($value);

            if (!$parsed) {
                return '';
            }

            $path = isset($parsed['path']) ? trim($parsed['path'], '/') : '';

            if ($path === '') {
                return '';
            }

            $segments = explode('/', $path);
            $first_segment = strtolower($segments[0]);
            $disallowed = array('p', 'reel', 'stories', 'explore');

            if (in_array($first_segment, $disallowed, true)) {
                return '';
            }

            $identifier = $segments[0];
        } else {
            $identifier = ltrim($value, '@/');
            $parts = preg_split('#[/?]#', $identifier, 2);
            $identifier = $parts[0] ?? '';
        }

        $identifier = strtolower(trim($identifier));

        return $identifier;
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
