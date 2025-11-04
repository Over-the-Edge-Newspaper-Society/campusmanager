<?php

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Calendar_Blocks {
    
    public function __construct() {
        error_log('Campus Manager: Calendar Blocks class constructor called');
        add_action('init', array($this, 'register_blocks'), 10);
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_editor_assets'));
        add_action('admin_enqueue_scripts', array($this, 'admin_enqueue_scripts'));
        add_shortcode('unbc_calendar', array($this, 'calendar_shortcode'));
        add_shortcode('unbc_events_list', array($this, 'events_list_shortcode'));
        add_shortcode('organization_events', array($this, 'organization_events_shortcode'));
        
        // Also try registering immediately if init has already passed
        if (did_action('init')) {
            error_log('Campus Manager: init already fired, calling register_blocks immediately');
            $this->register_blocks();
        }
    }
    
    
    public function register_blocks() {
        error_log('Campus Manager: register_blocks method called');
        // Register scripts and styles first
        $script_file = plugin_dir_path(dirname(__FILE__)) . 'assets/react/dist/unbc-calendar.umd.js';
        $style_file = plugin_dir_path(dirname(__FILE__)) . 'assets/react/dist/style.css';
        $widget_script_file = plugin_dir_path(dirname(__FILE__)) . 'assets/react/dist/unbc-today-events-widget.umd.js';
        $widget_style_file = plugin_dir_path(dirname(__FILE__)) . 'assets/react/dist/widget-style.css';
        $script_version = file_exists($script_file) ? filemtime($script_file) : null;
        $style_version = file_exists($style_file) ? filemtime($style_file) : null;
        $widget_script_version = file_exists($widget_script_file) ? filemtime($widget_script_file) : null;
        $widget_style_version = file_exists($widget_style_file) ? filemtime($widget_style_file) : null;
        $localized_data = $this->get_calendar_localized_data();

        wp_register_script(
            'unbc-calendar-app',
            plugin_dir_url(dirname(__FILE__)) . 'assets/react/dist/unbc-calendar.umd.js',
            array(),
            $script_version,
            true
        );
        
        wp_register_script(
            'unbc-today-events-widget',
            plugin_dir_url(dirname(__FILE__)) . 'assets/react/dist/unbc-today-events-widget.umd.js',
            array(),
            $widget_script_version,
            true
        );
        
        wp_register_style(
            'unbc-calendar-styles',
            plugin_dir_url(dirname(__FILE__)) . 'assets/react/dist/style.css',
            array(),
            $style_version
        );

        wp_register_style(
            'unbc-today-events-widget-styles',
            plugin_dir_url(dirname(__FILE__)) . 'assets/react/dist/widget-style.css',
            array(),
            $widget_style_version
        );

        // Provide WordPress REST API data to React
        wp_localize_script('unbc-calendar-app', 'unbcCalendarData', $localized_data);
        wp_localize_script('unbc-today-events-widget', 'unbcCalendarData', $localized_data);
        
        // Register individual block types using block.json
        if (function_exists('register_block_type')) {
            // Register calendar view block from its directory
            register_block_type(
                plugin_dir_path(dirname(__FILE__)) . 'blocks/calendar-view/',
                array(
                    'render_callback' => array($this, 'render_calendar_block')
                )
            );
            
            // Register events list block from its directory 
            register_block_type(
                plugin_dir_path(dirname(__FILE__)) . 'blocks/events-list/',
                array(
                    'render_callback' => array($this, 'render_events_list_block')
                )
            );

            register_block_type(
                plugin_dir_path(dirname(__FILE__)) . 'blocks/today-events-widget/',
                array(
                    'render_callback' => array($this, 'render_today_events_widget_block')
                )
            );
            
            error_log('Campus Manager: Calendar, Events List, and Today Events Widget blocks registered from block.json');
        }
    }
    
    public function enqueue_block_editor_assets() {
        error_log('Campus Manager: enqueue_block_editor_assets called');
        // Individual blocks now handle their own editor scripts via block.json
        // Just ensure React app is available for preview
        $this->enqueue_scripts();
    }
    
    public function admin_enqueue_scripts($hook) {
        error_log('Campus Manager: admin_enqueue_scripts called on hook: ' . $hook);
        // Individual blocks now handle their own editor scripts via block.json
        // Just ensure React app is available for admin previews
        if (in_array($hook, ['post.php', 'post-new.php', 'site-editor.php', 'widgets.php'])) {
            $this->enqueue_scripts();
        }
    }
    
    public function enqueue_scripts() {
        // Always enqueue scripts/styles for blocks/shortcodes (admin and frontend)
        if (wp_script_is('unbc-calendar-app', 'registered')) {
            wp_enqueue_script('unbc-calendar-app');
        }

        if (wp_style_is('unbc-calendar-styles', 'registered')) {
            wp_enqueue_style('unbc-calendar-styles');
        }

        if (wp_script_is('unbc-today-events-widget', 'registered')) {
            wp_enqueue_script('unbc-today-events-widget');
        }

        if (wp_style_is('unbc-today-events-widget-styles', 'registered')) {
            wp_enqueue_style('unbc-today-events-widget-styles');
        }
    }
    
    private function has_calendar_content() {
        global $post;
        
        if (!$post) {
            return false;
        }
        
        // Check for blocks  
        if (has_block('unbc/calendar-view', $post) || has_block('unbc/events-list', $post) || has_block('unbc/today-events-widget', $post)) {
            return true;
        }
        
        // Check for shortcodes
        if (has_shortcode($post->post_content, 'unbc_calendar') || 
            has_shortcode($post->post_content, 'unbc_events_list') ||
            has_shortcode($post->post_content, 'organization_events')) {
            return true;
        }
        
        return false;
    }

    private function get_calendar_localized_data() {
        return array(
            'apiUrl' => rest_url('unbc-events/v1/'),
            'nonce' => wp_create_nonce('wp_rest'),
            'eventPostType' => 'event',
            'organizationPostType' => 'organization',
            'categoriesEndpoint' => rest_url('wp/v2/event-category/'),
            'eventsEndpoint' => rest_url('unbc-events/v1/events/'),
            'organizationsEndpoint' => rest_url('wp/v2/organization/')
        );
    }
    
    public function render_calendar_block($attributes) {
        // Ensure scripts are loaded
        $this->enqueue_scripts();

        $view = isset($attributes['view']) ? $attributes['view'] : 'month';
        $category_filter = isset($attributes['categoryFilter']) ? $attributes['categoryFilter'] : 'all';
        $organization_filter = isset($attributes['organizationFilter']) ? $attributes['organizationFilter'] : 'all';
        $list_initial_items = isset($attributes['listInitialItems']) ? intval($attributes['listInitialItems']) : 30;
        $list_load_more_count = isset($attributes['listLoadMoreCount']) ? intval($attributes['listLoadMoreCount']) : 15;
        $show_week_view = isset($attributes['showWeekView']) ? $attributes['showWeekView'] : true;
        $show_day_view = isset($attributes['showDayView']) ? $attributes['showDayView'] : true;
        $show_cost = isset($attributes['showCost']) ? $attributes['showCost'] : true;
        $event_sort_order = isset($attributes['eventSortOrder']) ? $attributes['eventSortOrder'] : 'asc';
        $month_display_mode = isset($attributes['monthDisplayMode']) ? $attributes['monthDisplayMode'] : 'popover';
        $month_sidebar_position = isset($attributes['monthSidebarPosition']) ? $attributes['monthSidebarPosition'] : 'right';

        if (!in_array($month_display_mode, array('popover', 'dropdown', 'sidebar'), true)) {
            $month_display_mode = 'popover';
        }

        if (!in_array($month_sidebar_position, array('left', 'right'), true)) {
            $month_sidebar_position = 'right';
        }

        return $this->render_calendar_component($view, $category_filter, $organization_filter, $list_initial_items, $list_load_more_count, $show_week_view, $show_day_view, $show_cost, $event_sort_order, $month_display_mode, $month_sidebar_position);
    }
    
    public function render_events_list_block($attributes) {
        global $post, $wp_query;
        
        // Ensure scripts are loaded
        $this->enqueue_scripts();
        
        $organization_id = isset($attributes['organizationId']) ? $attributes['organizationId'] : '';
        $organization_name = isset($attributes['organizationName']) ? $attributes['organizationName'] : '';
        $limit = isset($attributes['limit']) ? intval($attributes['limit']) : 5;
        $show_past = isset($attributes['showPastEvents']) ? $attributes['showPastEvents'] : false;
        
        // If no organization specified, try to detect from context (same logic as shortcode)
        if (empty($organization_id) && empty($organization_name)) {
            $organization_post = null;
            
            // Method 1: Check if current post is organization
            if ($post && $post->post_type === 'organization') {
                $organization_post = $post;
            }
            
            // Method 2: Check if we're on an organization single page via query vars
            if (!$organization_post && isset($wp_query->queried_object) && $wp_query->queried_object->post_type === 'organization') {
                $organization_post = $wp_query->queried_object;
            }
            
            // Method 3: Check for organization in URL path
            if (!$organization_post) {
                $request_uri = $_SERVER['REQUEST_URI'];
                $parsed_url = parse_url($request_uri);
                $path = trim($parsed_url['path'], '/');
                $path_parts = explode('/', $path);
                
                // Check for /organization/name or /clubs/name pattern
                if (count($path_parts) >= 2 && ($path_parts[0] === 'organization' || $path_parts[0] === 'clubs')) {
                    $org_slug = $path_parts[1];
                    $organization_post = get_page_by_path($org_slug, OBJECT, 'organization');
                }
            }
            
            // Method 4: Check query string for organization name/slug
            if (!$organization_post && isset($_GET['organization'])) {
                $org_slug = sanitize_text_field($_GET['organization']);
                $organization_post = get_page_by_path($org_slug, OBJECT, 'organization');
            }
            
            // If we found an organization, use it
            if ($organization_post) {
                $organization_id = $organization_post->ID;
                $organization_name = $organization_post->post_title;
            }
        }
        
        // Use React component for rendering with shared event popup
        return $this->render_events_list_component($organization_id, $organization_name, $limit, $show_past);
    }

    public function render_today_events_widget_block($attributes) {
        $this->enqueue_scripts();

        $title = isset($attributes['title']) && $attributes['title'] !== '' ? sanitize_text_field($attributes['title']) : __("Today's Events", 'unbc-events');
        $max_events = isset($attributes['maxEvents']) ? intval($attributes['maxEvents']) : 10;
        $max_events = max(1, min(50, $max_events));

        $wrapper_attributes = get_block_wrapper_attributes(array(
            'class' => 'unbc-today-events-widget',
            'data-title' => $title,
            'data-max-events' => (string) $max_events,
        ));

        return sprintf('<div %s></div>', $wrapper_attributes);
    }
    
    public function calendar_shortcode($atts) {
        $atts = shortcode_atts(array(
            'view' => 'month',
            'category' => 'all',
            'organization' => 'all',
            'list_initial_items' => 30,
            'list_load_more_count' => 15,
            'show_week_view' => 'true',
            'show_day_view' => 'true',
            'event_sort_order' => 'asc',
            'month_display_mode' => 'popover',
            'month_sidebar_position' => 'right'
        ), $atts);

        $show_week_view = ($atts['show_week_view'] !== 'false');
        $show_day_view = ($atts['show_day_view'] !== 'false');

        return $this->render_calendar_component(
            $atts['view'],
            $atts['category'],
            $atts['organization'],
            $atts['list_initial_items'],
            $atts['list_load_more_count'],
            $show_week_view,
            $show_day_view,
            $atts['event_sort_order'],
            $atts['month_display_mode'],
            $atts['month_sidebar_position']
        );
    }
    
    public function events_list_shortcode($atts) {
        $atts = shortcode_atts(array(
            'organization_id' => '',
            'organization_name' => '',
            'limit' => 5,
            'show_past' => 'false'
        ), $atts);
        
        $show_past = ($atts['show_past'] === 'true' || $atts['show_past'] === '1');
        
        // Use React component for rendering with shared event popup
        return $this->render_events_list_component(
            $atts['organization_id'], 
            $atts['organization_name'], 
            intval($atts['limit']), 
            $show_past
        );
    }
    
    public function organization_events_shortcode($atts) {
        global $post, $wp_query;
        
        $atts = shortcode_atts(array(
            'organization_id' => '',
            'organization_name' => '',
            'limit' => 5,
            'show_past' => 'false'
        ), $atts);
        
        // If no organization specified, try to detect from context
        if (empty($atts['organization_id']) && empty($atts['organization_name'])) {
            $organization_post = null;
            
            // Method 1: Check if current post is organization
            if ($post && $post->post_type === 'organization') {
                $organization_post = $post;
            }
            
            // Method 2: Check if we're on an organization single page via query vars
            if (!$organization_post && isset($wp_query->queried_object) && $wp_query->queried_object->post_type === 'organization') {
                $organization_post = $wp_query->queried_object;
            }
            
            // Method 3: Check for organization in URL path
            if (!$organization_post) {
                $request_uri = $_SERVER['REQUEST_URI'];
                $parsed_url = parse_url($request_uri);
                $path = trim($parsed_url['path'], '/');
                $path_parts = explode('/', $path);
                
                // Check for /organization/name or /clubs/name pattern
                if (count($path_parts) >= 2 && ($path_parts[0] === 'organization' || $path_parts[0] === 'clubs')) {
                    $org_slug = $path_parts[1];
                    $organization_post = get_page_by_path($org_slug, OBJECT, 'organization');
                }
            }
            
            // Method 4: Check query string for organization name/slug
            if (!$organization_post && isset($_GET['organization'])) {
                $org_slug = sanitize_text_field($_GET['organization']);
                $organization_post = get_page_by_path($org_slug, OBJECT, 'organization');
            }
            
            // If we found an organization, use it
            if ($organization_post) {
                $atts['organization_id'] = $organization_post->ID;
                $atts['organization_name'] = $organization_post->post_title;
            }
        }
        
        $show_past = ($atts['show_past'] === 'true' || $atts['show_past'] === '1');
        
        // Temporary debug info
        $debug_info = '';
        if (current_user_can('administrator')) {
            $debug_info = '<!-- DEBUG: org_id=' . $atts['organization_id'] . ', org_name=' . $atts['organization_name'] . ' -->';
        }
        
        // Use React component for rendering with shared event popup
        return $debug_info . $this->render_organization_events_react_component(
            $atts['organization_id'], 
            $atts['organization_name'], 
            intval($atts['limit']), 
            $show_past
        );
    }
    
    private function render_calendar_component($view = 'month', $category_filter = 'all', $organization_filter = 'all', $list_initial_items = 30, $list_load_more_count = 15, $show_week_view = true, $show_day_view = true, $show_cost = true, $event_sort_order = 'asc', $month_display_mode = 'popover', $month_sidebar_position = 'right') {
        $unique_id = 'unbc-calendar-' . uniqid();

        $allowed_modes = array('popover', 'dropdown', 'sidebar');
        if (!in_array($month_display_mode, $allowed_modes, true)) {
            $month_display_mode = 'popover';
        }

        $allowed_positions = array('left', 'right');
        if (!in_array($month_sidebar_position, $allowed_positions, true)) {
            $month_sidebar_position = 'right';
        }


        ob_start();
        ?>
        <div id="<?php echo esc_attr($unique_id); ?>"
             class="unbc-calendar-container"
             data-component="calendar"
             data-view="<?php echo esc_attr($view); ?>"
             data-category-filter="<?php echo esc_attr($category_filter); ?>"
             data-organization-filter="<?php echo esc_attr($organization_filter); ?>"
             data-list-initial-items="<?php echo esc_attr($list_initial_items); ?>"
             data-list-load-more-count="<?php echo esc_attr($list_load_more_count); ?>"
             data-show-week-view="<?php echo esc_attr($show_week_view ? 'true' : 'false'); ?>"
             data-show-day-view="<?php echo esc_attr($show_day_view ? 'true' : 'false'); ?>"
             data-show-cost="<?php echo esc_attr($show_cost ? 'true' : 'false'); ?>"
             data-event-sort-order="<?php echo esc_attr($event_sort_order); ?>"
             data-month-display-mode="<?php echo esc_attr($month_display_mode); ?>"
             data-month-sidebar-position="<?php echo esc_attr($month_sidebar_position); ?>">
            <div class="unbc-calendar-loading">
                <p>Loading calendar...</p>
            </div>
        </div>
        <script>
            (function() {
                var attempts = 0;
                var maxAttempts = 50; // 5 seconds max wait
                
                function initCalendar() {
                    attempts++;
                    
                    if (window.renderUNBCCalendar && typeof window.renderUNBCCalendar === 'function') {
                        try {
                            window.renderUNBCCalendar('<?php echo esc_js($unique_id); ?>');
                        } catch (e) {
                            console.error('Error rendering calendar:', e);
                        }
                    } else if (attempts < maxAttempts) {
                        setTimeout(initCalendar, 100);
                    }
                }
                
                // Ensure we wait for both DOM and the React app
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', function() {
                        setTimeout(initCalendar, 100); // Give time for scripts to load
                    });
                } else {
                    setTimeout(initCalendar, 100); // Give time for scripts to load
                }
            })();
        </script>
        <?php
        return ob_get_clean();
    }
    
    private function render_events_list_component($organization_id = '', $organization_name = '', $limit = 5, $show_past = false) {
        $unique_id = 'unbc-events-list-' . uniqid();
        
        ob_start();
        ?>
        <div id="<?php echo esc_attr($unique_id); ?>" 
             class="unbc-events-list-container"
             data-component="events-list"
             data-organization-id="<?php echo esc_attr($organization_id); ?>"
             data-organization-name="<?php echo esc_attr($organization_name); ?>"
             data-limit="<?php echo esc_attr($limit); ?>"
             data-show-past="<?php echo esc_attr($show_past ? 'true' : 'false'); ?>">
            <div class="unbc-events-loading">
                <p>Loading events...</p>
            </div>
        </div>
        <script>
            (function() {
                var attempts = 0;
                var maxAttempts = 50; // 5 seconds max wait
                
                function initEventsList() {
                    attempts++;
                    
                    if (window.renderUNBCEventsList && typeof window.renderUNBCEventsList === 'function') {
                        try {
                            window.renderUNBCEventsList('<?php echo esc_js($unique_id); ?>');
                        } catch (e) {
                            console.error('Error rendering events list:', e);
                        }
                    } else if (attempts < maxAttempts) {
                        setTimeout(initEventsList, 100);
                    }
                }
                
                // Ensure we wait for both DOM and the React app
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', function() {
                        setTimeout(initEventsList, 100); // Give time for scripts to load
                    });
                } else {
                    setTimeout(initEventsList, 100); // Give time for scripts to load
                }
            })();
        </script>
        <?php
        return ob_get_clean();
    }
    
    private function render_organization_events_react_component($organization_id = '', $organization_name = '', $limit = 5, $show_past = false) {
        $unique_id = 'unbc-organization-events-' . uniqid();
        
        ob_start();
        ?>
        <div id="<?php echo esc_attr($unique_id); ?>" 
             class="unbc-organization-events-container"
             data-component="organization-events"
             data-organization-id="<?php echo esc_attr($organization_id); ?>"
             data-organization-name="<?php echo esc_attr($organization_name); ?>"
             data-limit="<?php echo esc_attr($limit); ?>"
             data-show-past="<?php echo esc_attr($show_past ? 'true' : 'false'); ?>">
            <div class="unbc-events-loading">
                <p>Loading events...</p>
            </div>
        </div>
        <script>
            (function() {
                var attempts = 0;
                var maxAttempts = 50; // 5 seconds max wait
                
                function initOrganizationEvents() {
                    attempts++;
                    
                    if (window.renderUNBCOrganizationEvents && typeof window.renderUNBCOrganizationEvents === 'function') {
                        try {
                            window.renderUNBCOrganizationEvents('<?php echo esc_js($unique_id); ?>');
                        } catch (e) {
                            console.error('Error rendering organization events:', e);
                        }
                    } else if (attempts < maxAttempts) {
                        setTimeout(initOrganizationEvents, 100);
                    }
                }
                
                // Ensure we wait for both DOM and the React app
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', function() {
                        setTimeout(initOrganizationEvents, 100); // Give time for scripts to load
                    });
                } else {
                    setTimeout(initOrganizationEvents, 100); // Give time for scripts to load
                }
            })();
        </script>
        <?php
        return ob_get_clean();
    }
    
    private function render_php_events_list($organization_id = '', $organization_name = '', $limit = 5, $show_past = false) {
        // Query events from WordPress
        $args = array(
            'post_type' => 'event',
            'post_status' => 'publish',
            'posts_per_page' => $limit > 0 ? $limit : 10,
            'meta_query' => array(),
            'orderby' => 'meta_value',
            'meta_key' => 'event_date',
            'order' => 'ASC'
        );
        
        // Filter by organization if specified
        if (!empty($organization_id)) {
            $args['meta_query'][] = array(
                'key' => 'organization_id',
                'value' => $organization_id,
                'compare' => '='
            );
        } elseif (!empty($organization_name)) {
            // Get organization by name
            $org_query = new WP_Query(array(
                'post_type' => 'organization',
                'title' => $organization_name,
                'posts_per_page' => 1
            ));
            
            if ($org_query->have_posts()) {
                $org_post = $org_query->posts[0];
                $args['meta_query'][] = array(
                    'key' => 'organization_id',
                    'value' => $org_post->ID,
                    'compare' => '='
                );
            }
            wp_reset_postdata();
        }
        
        // Filter by date if not showing past events
        if (!$show_past) {
            $args['meta_query'][] = array(
                'key' => 'event_date',
                'value' => date('Y-m-d'),
                'compare' => '>='
            );
        }
        
        $events_query = new WP_Query($args);
        
        ob_start();
        
        if (!$events_query->have_posts()) {
            ?>
            <div class="text-center py-8 text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days mx-auto h-8 w-8 mb-3 opacity-50">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                </svg>
                <h3 class="text-base font-medium mb-1">No upcoming events</h3>
                <p class="text-sm"><?php echo $organization_name ? esc_html($organization_name) . ' has no upcoming events.' : 'No events found for this organization.'; ?></p>
            </div>
            <?php
        } else {
            // Group events by date
            $events_by_date = array();
            while ($events_query->have_posts()) {
                $events_query->the_post();
                $event_id = get_the_ID();
                $event_date = get_post_meta($event_id, 'event_date', true);
                $date_key = date('Y-m-d', strtotime($event_date));
                
                if (!isset($events_by_date[$date_key])) {
                    $events_by_date[$date_key] = array();
                }
                
                // Debug the meta fields
                $event_time = get_post_meta($event_id, 'event_time', true);
                $event_end_time = get_post_meta($event_id, 'event_end_time', true);
                $event_location = get_post_meta($event_id, 'event_location', true);
                $event_cost = get_post_meta($event_id, 'event_cost', true);
                $event_category = get_post_meta($event_id, 'event_category', true);
                
                // Try alternative meta field names if the first ones don't work
                if (!$event_time) {
                    $event_time = get_post_meta($event_id, 'start_time', true);
                }
                if (!$event_end_time) {
                    $event_end_time = get_post_meta($event_id, 'end_time', true);
                }
                if (!$event_location) {
                    $event_location = get_post_meta($event_id, 'location', true);
                }
                if (!$event_cost) {
                    $event_cost = get_post_meta($event_id, 'cost', true);
                }
                if (!$event_category) {
                    $event_category = get_post_meta($event_id, 'category', true);
                }
                
                $events_by_date[$date_key][] = array(
                    'id' => $event_id,
                    'title' => get_the_title(),
                    'date' => $event_date,
                    'time' => $event_time,
                    'end_time' => $event_end_time,
                    'location' => $event_location,
                    'cost' => $event_cost,
                    'category' => $event_category,
                    'org_id' => get_post_meta($event_id, 'organization_id', true),
                    'description' => get_the_excerpt(),
                    'registration_url' => get_post_meta($event_id, 'event_registration_url', true)
                );
            }
            wp_reset_postdata();
            
            echo '<div class="unbc-events-list" style="margin-bottom: 1.5rem;">';
                
            $today = date('Y-m-d');
            $tomorrow = date('Y-m-d', strtotime('+1 day'));
            
            foreach ($events_by_date as $date_key => $date_events) {
                $date_obj = new DateTime($date_key);
                $date_formatted = $date_obj->format('l, F j, Y');
                
                // Add Today/Tomorrow labels
                if ($date_key === $today) {
                    $date_formatted = 'Today, ' . $date_formatted;
                } elseif ($date_key === $tomorrow) {
                    $date_formatted = 'Tomorrow, ' . $date_formatted;
                }
            
                // Date Header
                echo '<div style="margin-bottom: 1rem; margin-top: 2rem;">';
                echo '<div style="display: flex; align-items: center; gap: 0.75rem;">';
                echo '<h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin: 0;">' . esc_html($date_formatted) . '</h3>';
                echo '<div style="flex: 1; height: 1px; background-color: #e5e7eb;"></div>';
                echo '<span style="font-size: 0.875rem; color: #6b7280; background-color: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 9999px; white-space: nowrap; min-width: fit-content;">';
                echo count($date_events) . ' event' . (count($date_events) > 1 ? 's' : '');
                echo '</span>';
                echo '</div>';
                echo '</div>';
            
                // Events for this date
                echo '<div style="margin-bottom: 1.5rem;">';
                
                foreach ($date_events as $event) {
                    // Get organization name
                    $event_org_name = $organization_name;
                    if (!$event_org_name && $event['org_id']) {
                        $org_post = get_post($event['org_id']);
                        $event_org_name = $org_post ? $org_post->post_title : '';
                    }
                    
                    // Format time
                    $time_formatted = '';
                    if ($event['time']) {
                        $start_time = date('g:i A', strtotime($event['time']));
                        $end_time = $event['end_time'] ? date('g:i A', strtotime($event['end_time'])) : '';
                        $time_formatted = $start_time . ($end_time ? ' - ' . $end_time : '');
                    }
                    
                    // Category colors
                    $category_colors = array(
                        'academic' => '#10b981',
                        'social' => '#f97316', 
                        'cultural' => '#8b5cf6',
                        'sports' => '#ef4444',
                        'professional' => '#14b8a6',
                        'wellness' => '#3b82f6',
                        'volunteer' => '#eab308',
                        'arts' => '#ec4899'
                    );
                    $category_color = isset($category_colors[$event['category']]) ? $category_colors[$event['category']] : '#6b7280';
                    
                    // Build event JSON for onclick
                    $event_json = json_encode(array(
                        'id' => $event['id'],
                        'title' => $event['title'],
                        'date' => $event['date'],
                        'time' => $event['time'],
                        'end_time' => $event['end_time'],
                        'location' => $event['location'] ?: 'TBD',
                        'cost' => $event['cost'] ?: 'Free',
                        'category' => $event['category'] ?: 'academic',
                        'organization' => $event_org_name ?: '',
                        'registration_url' => $event['registration_url'] ?: '',
                        'description' => $event['description'] ?: ''
                    ));
                    
                    echo '<div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.75rem; position: relative; padding-left: 1.5rem; margin-bottom: 0.5rem; cursor: pointer; transition: background-color 0.2s, box-shadow 0.2s;" ';
                    echo 'onmouseover="this.style.backgroundColor=\'#f3f4f6\'; this.style.boxShadow=\'0 4px 6px -1px rgba(0, 0, 0, 0.1)\';" ';
                    echo 'onmouseout="this.style.backgroundColor=\'#f9fafb\'; this.style.boxShadow=\'none\';" ';
                    echo 'onclick="showEventDetails(' . esc_attr($event_json) . ')">';
                    
                    // Category color bar
                    echo '<div style="position: absolute; top: 0.5rem; left: 0.5rem; width: 4px; height: calc(100% - 1rem); background-color: ' . esc_attr($category_color) . '; border-radius: 2px;"></div>';
                    
                    echo '<div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">';
                    echo '<div style="flex: 1; min-width: 0; padding-right: 1rem;">';
                    echo '<div style="font-weight: 500; color: #111827; margin-bottom: 0.5rem; font-size: 0.875rem;">' . esc_html($event['title']) . '</div>';
                        
                    if ($time_formatted) {
                        echo '<div style="font-size: 0.75rem; color: #6b7280; margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.25rem;"><svg style="width: 12px; height: 12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' . esc_html($time_formatted) . '</div>';
                    } else {
                        echo '<div style="font-size: 0.75rem; color: #6b7280; margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.25rem;"><svg style="width: 12px; height: 12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>All Day</div>';
                    }
                    
                    echo '<div style="font-size: 0.75rem; color: #6b7280; display: flex; align-items: center; gap: 0.25rem;"><svg style="width: 12px; height: 12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>' . esc_html($event['location'] ?: 'TBD') . '</div>';
                    echo '</div>';
                    
                    echo '<div style="flex-shrink: 0; text-align: right; min-width: 80px;">';
                    echo '<div style="font-size: 0.875rem; font-weight: 600; color: #10b981; margin-bottom: 0.25rem;">' . esc_html($event['cost'] ?: 'Free') . '</div>';
                    
                    if ($event['registration_url']) {
                        echo '<div style="font-size: 0.625rem; color: #3b82f6; background-color: #dbeafe; padding: 0.25rem 0.5rem; border-radius: 0.25rem; white-space: nowrap;">📝 Required</div>';
                    }
                    
                    echo '</div>';
                    echo '</div>';
                    echo '</div>';
                }
                
                echo '</div>';
            }
            
            echo '</div>';
            
            // Add styled dialog and JavaScript to wp_footer to avoid content filtering
            add_action('wp_footer', function() {
                static $script_added = false;
                if (!$script_added) {
                    $script_added = true;
                    echo '<style>
                    .unbc-event-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 9999;
                        opacity: 0;
                        visibility: hidden;
                        transition: opacity 0.2s, visibility 0.2s;
                    }
                    .unbc-event-modal.show {
                        opacity: 1;
                        visibility: visible;
                    }
                    .unbc-event-modal-content {
                        background: white;
                        border-radius: 8px;
                        padding: 24px;
                        max-width: 480px;
                        width: 90%;
                        max-height: 80vh;
                        overflow-y: auto;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                        transform: scale(0.95);
                        transition: transform 0.2s;
                    }
                    .unbc-event-modal.show .unbc-event-modal-content {
                        transform: scale(1);
                    }
                    .unbc-modal-title {
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #111827;
                        margin: 0 0 8px 0;
                    }
                    .unbc-modal-description {
                        color: #6b7280;
                        margin-bottom: 16px;
                        line-height: 1.5;
                    }
                    .unbc-modal-details {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                        margin-bottom: 24px;
                    }
                    .unbc-modal-detail-item {
                        display: flex;
                        align-items: flex-start;
                        gap: 12px;
                        font-size: 0.875rem;
                    }
                    .unbc-modal-icon {
                        width: 16px;
                        height: 16px;
                        color: #6b7280;
                        margin-top: 2px;
                        flex-shrink: 0;
                    }
                    .unbc-modal-detail-content {
                        flex: 1;
                    }
                    .unbc-modal-detail-title {
                        font-weight: 500;
                        color: #111827;
                        margin-bottom: 2px;
                    }
                    .unbc-modal-detail-subtitle {
                        color: #6b7280;
                    }
                    .unbc-modal-badge {
                        display: inline-block;
                        padding: 4px 8px;
                        border-radius: 9999px;
                        font-size: 0.75rem;
                        font-weight: 500;
                        margin-right: 8px;
                    }
                    .unbc-modal-footer {
                        display: flex;
                        gap: 8px;
                        justify-content: flex-end;
                    }
                    .unbc-modal-button {
                        padding: 8px 16px;
                        border-radius: 6px;
                        font-size: 0.875rem;
                        font-weight: 500;
                        border: none;
                        cursor: pointer;
                        transition: background-color 0.2s;
                    }
                    .unbc-modal-button-primary {
                        background: #3b82f6;
                        color: white;
                    }
                    .unbc-modal-button-primary:hover {
                        background: #2563eb;
                    }
                    .unbc-modal-button-secondary {
                        background: #f3f4f6;
                        color: #374151;
                        border: 1px solid #d1d5db;
                    }
                    .unbc-modal-button-secondary:hover {
                        background: #e5e7eb;
                    }
                    .unbc-modal-close {
                        position: absolute;
                        top: 16px;
                        right: 16px;
                        background: none;
                        border: none;
                        font-size: 24px;
                        cursor: pointer;
                        color: #6b7280;
                        width: 24px;
                        height: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .unbc-modal-close:hover {
                        color: #374151;
                    }
                    </style>
                    
                    <script type="text/javascript">
                    window.showEventDetails = function(event) {
                        // Remove existing modal if any
                        const existingModal = document.querySelector(".unbc-event-modal");
                        if (existingModal) {
                            existingModal.remove();
                        }
                        
                        const startDate = new Date(event.date + " " + (event.time || "00:00"));
                        const endDate = new Date(event.date + " " + (event.end_time || event.time || "23:59"));
                        
                        // Create modal HTML
                        const modal = document.createElement("div");
                        modal.className = "unbc-event-modal";
                        
                        const modalContent = 
                            "<div class=\"unbc-event-modal-content\" style=\"position: relative;\">" +
                                "<button class=\"unbc-modal-close\" onclick=\"closeEventModal()\">&times;</button>" +
                                "<h3 class=\"unbc-modal-title\">" + event.title + "</h3>" +
                                (event.description ? "<p class=\"unbc-modal-description\">" + event.description + "</p>" : "") +
                                
                                "<div class=\"unbc-modal-details\">" +
                                    "<div class=\"unbc-modal-detail-item\">" +
                                        "<svg class=\"unbc-modal-icon\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">" +
                                            "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"></path>" +
                                        "</svg>" +
                                        "<div class=\"unbc-modal-detail-content\">" +
                                            "<div class=\"unbc-modal-detail-title\">" + startDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) + "</div>" +
                                            "<div class=\"unbc-modal-detail-subtitle\">" + (event.time ? startDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }) + (event.end_time ? " - " + endDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }) : "") : "All Day") + "</div>" +
                                        "</div>" +
                                    "</div>" +
                                    
                                    "<div class=\"unbc-modal-detail-item\">" +
                                        "<svg class=\"unbc-modal-icon\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">" +
                                            "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\"></path>" +
                                            "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 11a3 3 0 11-6 0 3 3 0 016 0z\"></path>" +
                                        "</svg>" +
                                        "<span class=\"unbc-modal-detail-title\">" + event.location + "</span>" +
                                    "</div>" +
                                    
                                    "<div class=\"unbc-modal-detail-item\">" +
                                        "<svg class=\"unbc-modal-icon\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">" +
                                            "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4\"></path>" +
                                        "</svg>" +
                                        "<span class=\"unbc-modal-detail-title\">" + event.organization + "</span>" +
                                    "</div>" +
                                    
                                    "<div class=\"unbc-modal-detail-item\">" +
                                        "<svg class=\"unbc-modal-icon\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">" +
                                            "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1\"></path>" +
                                        "</svg>" +
                                        "<span class=\"unbc-modal-detail-title\">" + event.cost + "</span>" +
                                    "</div>" +
                                    
                                    "<div class=\"unbc-modal-detail-item\">" +
                                        "<span class=\"unbc-modal-badge\" style=\"background-color: #f3f4f6; color: #374151;\">" + event.category.charAt(0).toUpperCase() + event.category.slice(1) + "</span>" +
                                        (event.registration_url ? "<span class=\"unbc-modal-badge\" style=\"background-color: #dbeafe; color: #1e40af; border: 1px solid #93c5fd;\">Registration Required</span>" : "") +
                                    "</div>" +
                                "</div>" +
                                
                                "<div class=\"unbc-modal-footer\" style=\"flex-direction: column; gap: 16px;\">" +
                                    (event.registration_url ? "<button class=\"unbc-modal-button unbc-modal-button-primary\" onclick=\"window.open(\'" + event.registration_url + "\', \'_blank\')\">Register</button>" : "") +
                                    "<div style=\"border-top: 1px solid #e5e7eb; padding-top: 16px;\">" +
                                        "<div style=\"font-size: 0.875rem; color: #6b7280; margin-bottom: 8px;\">Add to your calendar:</div>" +
                                        "<div style=\"display: flex; gap: 8px; flex-wrap: wrap;\">" +
                                            "<button class=\"unbc-modal-button unbc-modal-button-secondary\" style=\"flex: 1; min-width: 100px;\" onclick=\"addToCalendar(\'" + event.id + "\', \'google\')\">" +
                                                "<svg style=\"width: 16px; height: 16px; margin-right: 6px;\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"></path></svg>" +
                                                "Google" +
                                            "</button>" +
                                            "<button class=\"unbc-modal-button unbc-modal-button-secondary\" style=\"flex: 1; min-width: 100px;\" onclick=\"addToCalendar(\'" + event.id + "\', \'outlook\')\">" +
                                                "<svg style=\"width: 16px; height: 16px; margin-right: 6px;\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"></path></svg>" +
                                                "Outlook" +
                                            "</button>" +
                                            "<button class=\"unbc-modal-button unbc-modal-button-secondary\" style=\"flex: 1; min-width: 100px;\" onclick=\"addToCalendar(\'" + event.id + "\', \'apple\')\">" +
                                                "<svg style=\"width: 16px; height: 16px; margin-right: 6px;\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"></path></svg>" +
                                                "Apple" +
                                            "</button>" +
                                        "</div>" +
                                    "</div>" +
                                "</div>" +
                            "</div>";
                        
                        modal.innerHTML = modalContent;
                        
                        // Add modal to page
                        document.body.appendChild(modal);
                        
                        // Show modal with animation
                        setTimeout(() => {
                            modal.classList.add("show");
                        }, 10);
                        
                        // Close on backdrop click
                        modal.addEventListener("click", function(e) {
                            if (e.target === modal) {
                                closeEventModal();
                            }
                        });
                        
                        // Close on escape key
                        document.addEventListener("keydown", function(e) {
                            if (e.key === "Escape") {
                                closeEventModal();
                            }
                        });
                    };
                    
                    window.closeEventModal = function() {
                        const modal = document.querySelector(".unbc-event-modal");
                        if (modal) {
                            modal.classList.remove("show");
                            setTimeout(() => {
                                modal.remove();
                            }, 200);
                        }
                    };
                    
                    // Store current event for calendar functions
                    window.currentEvent = null;
                    
                    // Update showEventDetails to store current event
                    const originalShowEventDetails = window.showEventDetails;
                    window.showEventDetails = function(event) {
                        window.currentEvent = event;
                        originalShowEventDetails(event);
                    };
                    
                    window.addToCalendar = function(eventId, type) {
                        const event = window.currentEvent;
                        if (!event) return;
                        
                        const startDate = new Date(event.date + " " + (event.time || "00:00"));
                        const endDate = new Date(event.date + " " + (event.end_time || event.time || "23:59"));
                        
                        const formatDateForGoogle = function(date) {
                            return date.toISOString().replace(/-|:|\\.\\d\\d\\d/g, "");
                        };
                        
                        const formatDateForOutlook = function(date) {
                            return date.toISOString();
                        };
                        
                        let url = "";
                        
                        switch (type) {
                            case "google":
                                const googleUrl = new URL("https://calendar.google.com/calendar/render");
                                googleUrl.searchParams.append("action", "TEMPLATE");
                                googleUrl.searchParams.append("text", event.title);
                                googleUrl.searchParams.append("dates", formatDateForGoogle(startDate) + "/" + formatDateForGoogle(endDate));
                                googleUrl.searchParams.append("details", event.description || "");
                                if (event.location && event.location !== "TBD") {
                                    googleUrl.searchParams.append("location", event.location);
                                }
                                url = googleUrl.toString();
                                break;
                                
                            case "outlook":
                                const outlookUrl = new URL("https://outlook.live.com/calendar/0/deeplink/compose");
                                outlookUrl.searchParams.append("subject", event.title);
                                outlookUrl.searchParams.append("body", event.description || "");
                                outlookUrl.searchParams.append("startdt", formatDateForOutlook(startDate));
                                outlookUrl.searchParams.append("enddt", formatDateForOutlook(endDate));
                                if (event.location && event.location !== "TBD") {
                                    outlookUrl.searchParams.append("location", event.location);
                                }
                                url = outlookUrl.toString();
                                break;
                                
                            case "apple":
                                const icsContent = [
                                    "BEGIN:VCALENDAR",
                                    "VERSION:2.0",
                                    "BEGIN:VEVENT",
                                    "DTSTART:" + formatDateForGoogle(startDate),
                                    "DTEND:" + formatDateForGoogle(endDate),
                                    "SUMMARY:" + event.title,
                                    "DESCRIPTION:" + (event.description || ""),
                                    event.location && event.location !== "TBD" ? "LOCATION:" + event.location : "",
                                    "END:VEVENT",
                                    "END:VCALENDAR"
                                ].filter(line => line).join("\\n");
                                
                                const link = "data:text/calendar;charset=utf8," + encodeURIComponent(icsContent);
                                const a = document.createElement("a");
                                a.href = link;
                                a.download = event.title.replace(/[^a-z0-9]/gi, "_") + ".ics";
                                a.click();
                                return;
                        }
                        
                        if (url) {
                            window.open(url, "_blank");
                        }
                    };
                    </script>';
                }
            });
        }
        
        return ob_get_clean();
    }
}
