<?php
class UNBC_Events_REST_API {
    public function __construct() {
        add_action('rest_api_init', array($this, 'register_routes'));
        add_action('rest_api_init', array($this, 'register_meta_fields'));
        
        // Clear cache when events are modified
        add_action('save_post_event', array($this, 'clear_events_cache'));
        add_action('delete_post', array($this, 'clear_events_cache_on_delete'));
        add_action('trashed_post', array($this, 'clear_events_cache_on_delete'));
    }

    public function register_routes() {
        register_rest_route('unbc-events/v1', '/events', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'get_events'),
            'permission_callback' => '__return_true',
            'args' => array(
                'per_page' => array(
                    'default' => 100,
                    'sanitize_callback' => 'absint'
                ),
                'page' => array(
                    'default' => 1,
                    'sanitize_callback' => 'absint'
                ),
                'start_date' => array(
                    'sanitize_callback' => 'sanitize_text_field'
                ),
                'end_date' => array(
                    'sanitize_callback' => 'sanitize_text_field'
                ),
                'category' => array(
                    'sanitize_callback' => 'sanitize_text_field'
                ),
                'organization' => array(
                    'sanitize_callback' => 'sanitize_text_field'
                ),
                'featured' => array(
                    'sanitize_callback' => 'rest_sanitize_boolean'
                ),
                'search' => array(
                    'sanitize_callback' => 'sanitize_text_field'
                ),
                'view' => array(
                    'default' => 'month',
                    'sanitize_callback' => 'sanitize_text_field'
                ),
                'date' => array(
                    'sanitize_callback' => 'sanitize_text_field'
                )
            )
        ));

        register_rest_route('unbc-events/v1', '/organizations', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'get_organizations'),
            'permission_callback' => '__return_true'
        ));

        register_rest_route('unbc-events/v1', '/categories', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'get_categories'),
            'permission_callback' => '__return_true'
        ));

        // New endpoint for calendar events creation
        register_rest_route('unbc-events/v1', '/events/create-calendar-event', array(
            'methods' => WP_REST_Server::CREATABLE,
            'callback' => array($this, 'create_calendar_event'),
            'permission_callback' => '__return_true',
            'args' => array(
                'event_data' => array(
                    'required' => true,
                    'type' => 'object'
                )
            )
        ));

        // Category configuration endpoint
        register_rest_route('unbc-events/v1', '/category-config', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'get_category_config'),
            'permission_callback' => '__return_true'
        ));

        // Category colors endpoint
        register_rest_route('unbc-events/v1', '/category-colors', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'get_category_colors'),
            'permission_callback' => '__return_true'
        ));
    }

    public function get_events($request) {
        try {
            $params = $request->get_params();
            
            // Skip view-based strategy if we have explicit start/end dates
            if (!isset($params['start_date']) || !isset($params['end_date'])) {
                // Apply view-based loading strategy only if no explicit dates provided
                $this->apply_view_based_strategy($params);
            }
            
            // Create cache key based on parameters
            $cache_key = 'unbc_events_api_' . md5(serialize($params));
            $cached_result = get_transient($cache_key);
            
            if ($cached_result !== false && !WP_DEBUG) {
                // Add cache hit info
                $cached_result['performance']['cache_hit'] = true;
                return rest_ensure_response($cached_result);
            }
            
            $args = array(
                'post_type' => 'event',
                'post_status' => 'publish',
                'posts_per_page' => $params['per_page'],
                'paged' => $params['page'],
                'meta_query' => array(),
                'tax_query' => array()
            );

        // Date filtering
        if (!empty($params['start_date']) || !empty($params['end_date'])) {
            $date_query = array('relation' => 'AND');
            
            if (!empty($params['start_date'])) {
                $date_query[] = array(
                    'key' => 'event_date',
                    'value' => $params['start_date'],
                    'compare' => '>='
                );
            }
            
            if (!empty($params['end_date'])) {
                $date_query[] = array(
                    'key' => 'event_date',
                    'value' => $params['end_date'],
                    'compare' => '<='
                );
            }
            
            $args['meta_query'][] = $date_query;
        }

        // Category filtering
        if (!empty($params['category'])) {
            $args['tax_query'][] = array(
                'taxonomy' => 'event_category',
                'field' => 'slug',
                'terms' => $params['category']
            );
        }

        // Organization filtering
        if (!empty($params['organization'])) {
            $args['meta_query'][] = array(
                'key' => 'organization_id',
                'value' => $params['organization'],
                'compare' => '='
            );
        }

        // Featured filtering
        if (isset($params['featured']) && $params['featured']) {
            $args['meta_query'][] = array(
                'key' => 'featured',
                'value' => '1',
                'compare' => '='
            );
        }

        // Search functionality
        if (!empty($params['search'])) {
            $args['s'] = $params['search'];
        }

        $query = new WP_Query($args);
        $events = array();
        $organizations_with_events = array();
        $event_metadata = array();
        $category_mappings = array();

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $formatted_event = $this->format_event_data(get_the_ID());
                if ($formatted_event) {
                    // Transform to calendar-ready format
                    $calendar_event = $this->transform_to_calendar_format($formatted_event);
                    $events[] = $calendar_event;
                    
                    // Build event metadata
                    $event_metadata[$calendar_event['id']] = $this->build_event_metadata($formatted_event);
                    
                    // Collect organizations (only those with events)
                    if ($formatted_event['organization_id']) {
                        $organizations_with_events[$formatted_event['organization_id']] = $formatted_event['organization'];
                    }
                    
                    // Collect category mappings
                    foreach ($formatted_event['categories'] as $category) {
                        if (!isset($category_mappings[$category['slug']])) {
                            $category_mappings[$category['slug']] = $this->get_category_variant($category['slug']);
                        }
                    }
                }
            }
            wp_reset_postdata();
        }

        // Determine if there are more events available
        $hasMore = $this->has_more_events(
            $params['date'] ?? date('Y-m-d'),
            $params['view'] ?? 'month',
            $query->found_posts,
            $params['per_page'],
            $params['page']
        );

        $response = array(
            'events' => $events,
            'eventMetadata' => $event_metadata,
            'organizations' => array_values($organizations_with_events),
            'categoryMappings' => $category_mappings,
            'total' => $query->found_posts,
            'pages' => $query->max_num_pages,
            'performance' => array(
                'server_processed' => true,
                'cache_hit' => false,
                'processing_time' => 0
            ),
            'pagination' => array(
                'hasMore' => $hasMore,
                'nextPage' => $hasMore ? ($params['page'] + 1) : null,
                'currentPage' => $params['page'],
                'perPage' => $params['per_page'],
                'view' => $params['view'] ?? 'month',
                'loadedRange' => array(
                    'start' => !empty($events) ? $events[0]['startDate'] : null,
                    'end' => !empty($events) ? $events[count($events) - 1]['startDate'] : null
                )
            )
        );

        // Cache the result for 15 minutes
        set_transient($cache_key, $response, 15 * MINUTE_IN_SECONDS);
        
        return rest_ensure_response($response);
        
        } catch (Exception $e) {
            return new WP_Error('events_api_error', $e->getMessage(), array('status' => 500));
        }
    }

    private function format_event_data($event_id) {
        try {
            $event = get_post($event_id);
            if (!$event) {
                return null;
            }
            
            // Get meta data
            $event_date = get_post_meta($event_id, 'event_date', true);
        $start_time = get_post_meta($event_id, 'start_time', true) ?: '00:00';
        $end_time = get_post_meta($event_id, 'end_time', true) ?: '23:59';
        $location = get_post_meta($event_id, 'location', true);
        $building = get_post_meta($event_id, 'building', true);
        $room = get_post_meta($event_id, 'room', true);
        
        // Build full location string
        $full_location_parts = array_filter(array($location, $building, $room));
        $full_location = !empty($full_location_parts) ? implode(', ', $full_location_parts) : 'TBD';
        
        // Get organization
        $organization_id = get_post_meta($event_id, 'organization_id', true);
        $organization_name = '';
        if ($organization_id) {
            $organization = get_post($organization_id);
            $organization_name = $organization ? $organization->post_title : '';
        }
        
        // Get categories
        $categories = wp_get_post_terms($event_id, 'event_category');
        $category_data = array();
        foreach ($categories as $category) {
            $category_data[] = array(
                'id' => $category->term_id,
                'name' => $category->name,
                'slug' => $category->slug
            );
        }

        $sanitized_description = $this->sanitize_event_description($event->post_content);

        return array(
            'id' => $event_id,
            'title' => $event->post_title,
            'description' => $sanitized_description,
            'excerpt' => $event->post_excerpt ?: $sanitized_description,
            'date' => $event_date,
            'start_time' => $start_time,
            'end_time' => $end_time,
            'timezone' => get_post_meta($event_id, 'timezone', true) ?: '',
            'location' => $location,
            'building' => $building,
            'room' => $room,
            'full_location' => $full_location,
            'cost' => get_post_meta($event_id, 'cost', true) ?: 'Free',
            'organization' => $organization_name,
            'organization_id' => $organization_id,  // Add organization_id to response
            'categories' => $category_data,
            'featured_image' => get_the_post_thumbnail_url($event_id, 'large'),
            'registration_required' => get_post_meta($event_id, 'registration_required', true) === '1',
            'registration_link' => get_post_meta($event_id, 'registration_link', true),
            'contact_email' => get_post_meta($event_id, 'contact_email', true),
            'is_virtual' => get_post_meta($event_id, 'is_virtual', true) === '1',
            'virtual_link' => get_post_meta($event_id, 'virtual_link', true),
            'website' => get_post_meta($event_id, 'website', true),
            'capacity' => get_post_meta($event_id, 'capacity', true),
            'featured' => get_post_meta($event_id, 'featured', true) === '1',
            'permalink' => get_permalink($event_id)
        );
            
        } catch (Exception $e) {
            error_log('Error formatting event data for event ID ' . $event_id . ': ' . $e->getMessage());
            return null;
        }
    }

    /**
     * Transform WordPress event data to React Calendar format
     */
    private function transform_to_calendar_format($event_data) {
        // Create proper DateTime objects for React
        $start_datetime = $this->create_datetime($event_data['date'], $event_data['start_time'], $event_data['timezone'] ?? null);
        $end_datetime = $this->create_datetime($event_data['date'], $event_data['end_time'], $event_data['timezone'] ?? null);

        return array(
            'id' => (string)$event_data['id'],
            'title' => $event_data['title'],
            'description' => $event_data['description'],
            'startDate' => $start_datetime,
            'endDate' => $end_datetime,
            'category' => !empty($event_data['categories']) ? $event_data['categories'][0]['slug'] : 'academic',
            'color' => $this->get_category_color(!empty($event_data['categories']) ? $event_data['categories'][0]['slug'] : 'academic')
        );
    }

    /**
     * Build metadata object for React Calendar
     */
    private function build_event_metadata($event_data) {
        return array(
            'location' => $event_data['full_location'],
            'organization' => $event_data['organization'],
            'organization_id' => $event_data['organization_id'],
            'cost' => $event_data['cost'],
            'category' => !empty($event_data['categories']) ? $event_data['categories'][0]['slug'] : 'academic',
            'registrationRequired' => $event_data['registration_required'],
            'website' => $event_data['registration_link'] ?: $event_data['website'],
            'isVirtual' => $event_data['is_virtual'],
            'virtualLink' => $event_data['virtual_link'],
            'contactEmail' => $event_data['contact_email'],
            'capacity' => $event_data['capacity'],
            'featuredImage' => $event_data['featured_image'],
            'permalink' => $event_data['permalink'],
            'timezone' => $event_data['timezone'] ?? ''
        );
    }

    /**
     * Create proper datetime string for React
     */
    private function create_datetime($date, $time, $timezone = null) {
        try {
            $time_part = $time ?: '00:00:00';
            // Normalise to include seconds so DateTime gets a full time component
            if (strlen($time_part) === 5) {
                $time_part .= ':00';
            }

            $datetime_string = trim($date . ' ' . $time_part);

            $timezone_object = null;

            if (!empty($timezone)) {
                $timezone_object = new DateTimeZone($timezone);
            } else {
                $timezone_object = wp_timezone();
            }

            $datetime = new DateTime($datetime_string, $timezone_object);
            return $datetime->format('c'); // ISO 8601 format
        } catch (Exception $e) {
            // Fallback to date only using site timezone
            $datetime = new DateTime($date, wp_timezone());
            return $datetime->format('c');
        }
    }

    /**
     * Convert stored WordPress content into human-friendly plain text
     */
    private function sanitize_event_description($content) {
        if (empty($content)) {
            return '';
        }

        // Convert anchor tags to "text (URL)" before stripping HTML
        $content_with_links = preg_replace_callback(
            '/<a[^>]*href\s*=\s*"([^"]+)"[^>]*>(.*?)<\/a>/is',
            function ($matches) {
                $url = trim($matches[1]);
                $link_text = trim(strip_tags($matches[2]));
                if ($link_text === '') {
                    $link_text = $url;
                }
                return $link_text . ' (' . $url . ')';
            },
            $content
        );

        // Convert common block/line break tags to new lines before stripping tags
        $normalized = preg_replace('/<(\/?)(p|div|li)[^>]*>/i', "\n", $content_with_links);
        $normalized = preg_replace('/<br\s*\/?>(\s*)/i', "\n", $normalized);

        // Remove any remaining HTML while preserving entities
        $stripped = wp_strip_all_tags($normalized);

        // Decode HTML entities (e.g. &amp;) and normalise whitespace
        $decoded = html_entity_decode($stripped, ENT_QUOTES | ENT_HTML5, get_bloginfo('charset') ?: 'UTF-8');

        // Collapse excessive blank lines and trim
        $lines_collapsed = preg_replace("/\n{3,}/", "\n\n", $decoded);
        $whitespace_normalized = preg_replace('/[\t ]+/u', ' ', $lines_collapsed);

        return trim($whitespace_normalized);
    }

    /**
     * Get category variant for mapping
     */
    private function get_category_variant($category_slug) {
        // Map categories to React calendar variants
        $mapping = array(
            'academic' => 'primary',
            'sports' => 'success',
            'arts' => 'warning',
            'social' => 'info',
            'professional' => 'secondary',
            'cultural' => 'danger',
            'wellness' => 'light',
            'general' => 'default'
        );
        
        return isset($mapping[$category_slug]) ? $mapping[$category_slug] : 'default';
    }

    /**
     * Get category color for calendar
     */
    private function get_category_color($category_slug) {
        $colors = array(
            'academic' => '#007bff',
            'sports' => '#28a745',
            'arts' => '#ffc107',
            'social' => '#17a2b8',
            'professional' => '#6c757d',
            'cultural' => '#dc3545',
            'wellness' => '#f8f9fa',
            'general' => '#6c757d'
        );
        
        return isset($colors[$category_slug]) ? $colors[$category_slug] : '#6c757d';
    }

    public function get_organizations($request) {
        $args = array(
            'post_type' => 'organization',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'title',
            'order' => 'ASC'
        );

        $query = new WP_Query($args);
        $organizations = array();

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $organizations[] = array(
                    'id' => get_the_ID(),
                    'name' => get_the_title(),
                    'description' => get_the_content(),
                    'website' => get_post_meta(get_the_ID(), 'organization_website', true),
                    'contact_email' => get_post_meta(get_the_ID(), 'organization_email', true)
                );
            }
            wp_reset_postdata();
        }

        return rest_ensure_response(array(
            'organizations' => $organizations,
            'total' => count($organizations)
        ));
    }

    public function get_categories($request) {
        $categories = get_terms(array(
            'taxonomy' => 'event_category',
            'hide_empty' => false
        ));

        $category_data = array();
        foreach ($categories as $category) {
            $category_data[] = array(
                'id' => $category->term_id,
                'name' => $category->name,
                'slug' => $category->slug,
                'count' => $category->count
            );
        }

        return rest_ensure_response(array(
            'categories' => $category_data,
            'total' => count($category_data)
        ));
    }

    public function get_category_config($request) {
        // Get categories with their assigned colors/variants
        $categories = get_terms(array(
            'taxonomy' => 'event_category',
            'hide_empty' => false
        ));

        $config = array();
        foreach ($categories as $category) {
            // Get the category's assigned variant (could be stored in term meta)
            $variant = get_term_meta($category->term_id, 'category_variant', true);
            if (!$variant) {
                // Fallback to default mapping
                $variant = $this->get_category_variant($category->slug);
            }
            
            $config[$category->slug] = array(
                'name' => $category->name,
                'variant' => $variant
            );
        }

        return rest_ensure_response($config);
    }

    public function get_category_colors($request) {
        // Return the color configuration from UNBC_Category_Colors class
        if (!class_exists('UNBC_Category_Colors')) {
            return new WP_Error('missing_class', 'Category colors class not found', array('status' => 500));
        }

        // Get color options from the Category Colors class
        $reflection = new ReflectionClass('UNBC_Category_Colors');
        $color_options_property = $reflection->getProperty('color_options');
        $color_options_property->setAccessible(true);
        $color_options = $color_options_property->getValue();

        return rest_ensure_response($color_options);
    }

    public function register_meta_fields() {
        // Register REST API fields for event post type
        register_rest_field('event', 'event_meta', array(
            'get_callback' => function($post) {
                return array(
                    'date' => get_post_meta($post['id'], 'event_date', true),
                    'start_time' => get_post_meta($post['id'], 'start_time', true),
                    'end_time' => get_post_meta($post['id'], 'end_time', true),
                    'location' => get_post_meta($post['id'], 'location', true),
                    'cost' => get_post_meta($post['id'], 'cost', true),
                    'organization' => get_post_meta($post['id'], 'organization', true),
                    'featured' => get_post_meta($post['id'], 'featured', true) === '1'
                );
            },
            'schema' => array(
                'type' => 'object',
                'properties' => array(
                    'date' => array('type' => 'string'),
                    'start_time' => array('type' => 'string'),
                    'end_time' => array('type' => 'string'),
                    'location' => array('type' => 'string'),
                    'cost' => array('type' => 'string'),
                    'organization' => array('type' => 'string'),
                    'featured' => array('type' => 'boolean')
                )
            )
        ));
    }

    public function create_calendar_event($request) {
        $event_data = $request->get_param('event_data');
        
        // TODO: Add authentication check
        // if (!current_user_can('edit_posts')) {
        //     return new WP_Error('rest_forbidden', 'You do not have permissions to create events.', array('status' => 403));
        // }
        
        // Create calendar event in appropriate calendar service
        // This is a placeholder for calendar integration
        
        return rest_ensure_response(array(
            'success' => true,
            'message' => 'Calendar event created successfully',
            'calendar_url' => 'https://calendar.google.com/event/...' // Example URL
        ));
    }
    
    /**
     * Clear events cache when events are modified
     */
    public function clear_events_cache($post_id) {
        if (get_post_type($post_id) !== 'event') {
            return;
        }
        
        // Clear all event-related transients
        global $wpdb;
        $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_unbc_events_api_%'");
        $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_timeout_unbc_events_api_%'");
    }
    
    /**
     * Clear cache when post is deleted or trashed
     */
    public function clear_events_cache_on_delete($post_id) {
        $this->clear_events_cache($post_id);
    }
    
    /**
     * Apply view-based loading strategy
     */
    private function apply_view_based_strategy(&$params) {
        $view = $params['view'] ?? 'month';
        $date = $params['date'] ?? date('Y-m-d');
        $current_date = new DateTime($date);
        
        switch ($view) {
            case 'month':
                // Load 2 months of data (current + next month)
                $start_of_month = clone $current_date;
                $start_of_month->modify('first day of this month');
                
                $end_of_period = clone $current_date;
                $end_of_period->modify('last day of next month');
                
                $params['start_date'] = $start_of_month->format('Y-m-d');
                $params['end_date'] = $end_of_period->format('Y-m-d');
                $params['per_page'] = 200; // Reasonable limit for 2 months
                break;
                
            case 'week':
                // Load 3 weeks of data (current + 2 weeks ahead)
                $start_of_week = clone $current_date;
                $start_of_week->modify('monday this week');
                
                $end_of_period = clone $current_date;
                $end_of_period->modify('+2 weeks sunday');
                
                $params['start_date'] = $start_of_week->format('Y-m-d');
                $params['end_date'] = $end_of_period->format('Y-m-d');
                $params['per_page'] = 100; // Reasonable limit for 3 weeks
                break;
                
            case 'day':
                // Load 1 week around the selected day
                $start_of_period = clone $current_date;
                $start_of_period->modify('-3 days');
                
                $end_of_period = clone $current_date;
                $end_of_period->modify('+3 days');
                
                $params['start_date'] = $start_of_period->format('Y-m-d');
                $params['end_date'] = $end_of_period->format('Y-m-d');
                $params['per_page'] = 50; // Small limit for day view
                break;
                
            case 'list':
                // For list view, use pagination with reasonable per_page
                if (!isset($params['per_page']) || $params['per_page'] > 50) {
                    $params['per_page'] = 50; // First load: 50 upcoming events
                }
                
                // Set start date to today if not specified
                if (!isset($params['start_date'])) {
                    $params['start_date'] = date('Y-m-d');
                }
                break;
                
            default:
                // Default to month view strategy
                $start_of_month = clone $current_date;
                $start_of_month->modify('first day of this month');
                
                $end_of_period = clone $current_date;
                $end_of_period->modify('last day of next month');
                
                $params['start_date'] = $start_of_month->format('Y-m-d');
                $params['end_date'] = $end_of_period->format('Y-m-d');
                $params['per_page'] = 200;
                break;
        }
    }

    /**
     * Check if there are more events after the given date/view
     */
    private function has_more_events($date, $view, $total_found, $per_page, $page) {
        // Simple check: if we got a full page of results, there might be more
        $current_page_count = min($per_page, $total_found - (($page - 1) * $per_page));
        return $current_page_count >= $per_page;
    }
}
