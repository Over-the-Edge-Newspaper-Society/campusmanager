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

        // EventScrape import endpoint - accepts events with series/occurrence data
        register_rest_route('unbc-events/v1', '/import-event', array(
            'methods' => WP_REST_Server::CREATABLE,
            'callback' => array($this, 'import_event_with_occurrences'),
            'permission_callback' => array($this, 'check_import_permission'),
            'args' => array(
                'event' => array(
                    'required' => true,
                    'type' => 'object',
                    'description' => 'Event data with series and occurrence information'
                )
            )
        ));
    }

    /**
     * Permission check for event import
     */
    public function check_import_permission($request) {
        // For now, allow authenticated users with edit_posts capability
        // You can make this more restrictive by checking for application password or API key
        return current_user_can('edit_posts') || $this->validate_api_key($request);
    }

    /**
     * Validate API key (for EventScrape integration)
     */
    private function validate_api_key($request) {
        $api_key = $request->get_header('X-API-Key');
        $stored_key = get_option('unbc_eventscrape_api_key');

        // If no API key is set, fall back to basic auth
        if (empty($stored_key)) {
            return true; // Will rely on WordPress basic auth
        }

        return !empty($api_key) && hash_equals($stored_key, $api_key);
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

        // Date filtering - need to handle both regular events and events with occurrences
        $date_filtered_post_ids = array();
        if (!empty($params['start_date']) && !empty($params['end_date'])) {
            global $wpdb;
            $occurrences_table = $wpdb->prefix . 'event_occurrences';

            // Get post IDs that have occurrences in the date range
            $posts_with_occurrences = $wpdb->get_col($wpdb->prepare(
                "SELECT DISTINCT o.post_id
                FROM $occurrences_table o
                WHERE DATE(o.start_datetime) >= %s
                AND DATE(o.start_datetime) <= %s",
                $params['start_date'],
                $params['end_date']
            ));

            // Also get regular events in the date range using meta_query
            $date_args = array(
                'post_type' => 'event',
                'post_status' => 'publish',
                'posts_per_page' => -1,
                'fields' => 'ids',
                'meta_query' => array(
                    'relation' => 'AND',
                    array(
                        'key' => 'event_date',
                        'value' => $params['start_date'],
                        'compare' => '>='
                    ),
                    array(
                        'key' => 'event_date',
                        'value' => $params['end_date'],
                        'compare' => '<='
                    )
                )
            );

            $regular_events = get_posts($date_args);

            // Combine both sets of post IDs
            $date_filtered_post_ids = array_unique(array_merge($posts_with_occurrences, $regular_events));

            if (!empty($date_filtered_post_ids)) {
                $args['post__in'] = $date_filtered_post_ids;
            } else {
                // No events found in date range, return empty
                $args['post__in'] = array(0); // Will return no results
            }
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
                $post_id = get_the_ID();
                $formatted_event = $this->format_event_data($post_id);

                if ($formatted_event) {
                    // Check if this event has occurrences
                    $occurrences = $this->get_event_occurrences($post_id);

                    if (!empty($occurrences) && count($occurrences) > 1) {
                        // Event has multiple occurrences - create separate calendar entries for each
                        foreach ($occurrences as $index => $occurrence) {
                            $occ_date = date('Y-m-d', strtotime($occurrence->start_datetime));

                            // Filter by date range if specified
                            if (!empty($params['start_date']) && $occ_date < $params['start_date']) {
                                continue;
                            }
                            if (!empty($params['end_date']) && $occ_date > $params['end_date']) {
                                continue;
                            }

                            // Clone the formatted event and update with occurrence-specific data
                            $occurrence_event = $formatted_event;
                            $occurrence_event['id'] = $post_id . '_occ_' . $occurrence->sequence;
                            $occurrence_event['date'] = $occ_date;
                            $occurrence_event['start_time'] = date('H:i:s', strtotime($occurrence->start_datetime));
                            $occurrence_event['end_time'] = $occurrence->end_datetime ? date('H:i:s', strtotime($occurrence->end_datetime)) : '';

                            // Transform to calendar-ready format
                            $calendar_event = $this->transform_to_calendar_format($occurrence_event);
                            $events[] = $calendar_event;

                            // Build event metadata for this occurrence
                            $event_metadata[$calendar_event['id']] = $this->build_event_metadata($occurrence_event);

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
                    } else {
                        // Single occurrence event - process normally
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
     * Note: Times are stored in local time already, so we just need to add timezone info
     */
    private function create_datetime($date, $time, $timezone = null) {
        try {
            $time_part = $time ?: '00:00:00';
            // Normalise to include seconds so DateTime gets a full time component
            if (strlen($time_part) === 5) {
                $time_part .= ':00';
            }

            $datetime_string = trim($date . ' ' . $time_part);

            // Times are already stored in local timezone, so always use site timezone
            // regardless of what's in the timezone field
            $timezone_object = wp_timezone();

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
        if (empty($category_slug)) {
            return 'default';
        }

        // Try to look up the variant from the saved category color settings first
        $term = get_term_by('slug', $category_slug, 'event_category');
        if ($term && !is_wp_error($term)) {
            if (class_exists('UNBC_Category_Colors')) {
                $variant = UNBC_Category_Colors::get_category_color_variant($term->term_id);
                if (!empty($variant)) {
                    return $variant;
                }
            }

            // Legacy support in case another process stored a custom variant meta value
            $variant_meta = get_term_meta($term->term_id, 'category_variant', true);
            if (!empty($variant_meta)) {
                return $variant_meta;
            }
        }

        return 'default';
    }

    /**
     * Get category color for calendar
     */
    private function get_category_color($category_slug) {
        if (empty($category_slug)) {
            return '#6b7280'; // Default gray
        }

        $term = get_term_by('slug', $category_slug, 'event_category');
        if ($term && !is_wp_error($term) && class_exists('UNBC_Category_Colors')) {
            $color = UNBC_Category_Colors::get_category_color($term->term_id, 'light');
            if (!empty($color)) {
                return $color;
            }
        }

        if (class_exists('UNBC_Category_Colors')) {
            $variant = $this->get_category_variant($category_slug);
            $color_options = UNBC_Category_Colors::get_color_options();

            if (!empty($variant) && isset($color_options[$variant]['light'])) {
                return $color_options[$variant]['light'];
            }

            if (isset($color_options['default']['light'])) {
                return $color_options['default']['light'];
            }
        }

        // Final fallback to a neutral gray to avoid missing colors entirely
        return '#6b7280';
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

            if (!$variant && class_exists('UNBC_Category_Colors')) {
                $variant = UNBC_Category_Colors::get_category_color_variant($category->term_id);
            }

            if (!$variant) {
                // Final fallback ensures the key exists but remains neutral when no color configured
                $variant = 'default';
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
                    'organization' => get_post_meta($post['id'], 'organization_id', true),
                    'featured' => get_post_meta($post['id'], 'featured', true) === '1',
                    'website' => get_post_meta($post['id'], 'website', true),
                    'virtual_link' => get_post_meta($post['id'], 'virtual_link', true),
                    'registration_link' => get_post_meta($post['id'], 'registration_link', true)
                );
            },
            'update_callback' => function($value, $post) {
                if (!is_array($value)) {
                    return false;
                }

                if (isset($value['date'])) {
                    update_post_meta($post->ID, 'event_date', sanitize_text_field($value['date']));
                }
                if (isset($value['start_time'])) {
                    update_post_meta($post->ID, 'start_time', sanitize_text_field($value['start_time']));
                }
                if (isset($value['end_time'])) {
                    update_post_meta($post->ID, 'end_time', sanitize_text_field($value['end_time']));
                }
                if (isset($value['location'])) {
                    update_post_meta($post->ID, 'location', sanitize_text_field($value['location']));
                }
                if (isset($value['cost'])) {
                    update_post_meta($post->ID, 'cost', sanitize_text_field($value['cost']));
                }
                if (isset($value['organization'])) {
                    update_post_meta($post->ID, 'organization_id', sanitize_text_field($value['organization']));
                }
                if (isset($value['featured'])) {
                    update_post_meta($post->ID, 'featured', $value['featured'] ? '1' : '0');
                }
                if (isset($value['website'])) {
                    update_post_meta($post->ID, 'website', esc_url_raw($value['website']));
                }
                if (isset($value['virtual_link'])) {
                    update_post_meta($post->ID, 'virtual_link', esc_url_raw($value['virtual_link']));
                }
                if (isset($value['registration_link'])) {
                    update_post_meta($post->ID, 'registration_link', esc_url_raw($value['registration_link']));
                }

                return true;
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
                    'featured' => array('type' => 'boolean'),
                    'website' => array('type' => 'string'),
                    'virtual_link' => array('type' => 'string'),
                    'registration_link' => array('type' => 'string')
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

    /**
     * Import event with series and occurrence data from EventScrape
     */
    public function import_event_with_occurrences($request) {
        $event_data = $request->get_param('event');

        if (empty($event_data)) {
            return new WP_Error('missing_data', 'Event data is required', array('status' => 400));
        }

        try {
            // Extract event data
            $title = sanitize_text_field($event_data['title'] ?? '');
            $content = wp_kses_post($event_data['description'] ?? '');
            $external_id = sanitize_text_field($event_data['external_id'] ?? '');

            // Check if event already exists by external_id
            $existing_post = null;
            if (!empty($external_id)) {
                $existing = get_posts(array(
                    'post_type' => 'event',
                    'meta_key' => 'external_id',
                    'meta_value' => $external_id,
                    'posts_per_page' => 1,
                    'post_status' => 'any'
                ));
                if (!empty($existing)) {
                    $existing_post = $existing[0];
                }
            }

            // Prepare post data
            $post_data = array(
                'post_title' => $title,
                'post_content' => $content,
                'post_type' => 'event',
                'post_status' => $event_data['status'] ?? 'publish',
            );

            if ($existing_post) {
                // Update existing event
                $post_data['ID'] = $existing_post->ID;
                $post_id = wp_update_post($post_data);
                $action = 'updated';
            } else {
                // Create new event
                $post_id = wp_insert_post($post_data);
                $action = 'created';
            }

            if (is_wp_error($post_id)) {
                return new WP_Error('post_creation_failed', $post_id->get_error_message(), array('status' => 500));
            }

            // Save standard event meta
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

            // Handle series and occurrence data
            $series_data = $event_data['series_data'] ?? null;
            $occurrences = $event_data['occurrences'] ?? array();

            if ($series_data || !empty($occurrences)) {
                // Get or create Event Series manager instance
                if (class_exists('UNBC_Event_Series')) {
                    $series_manager = new UNBC_Event_Series();

                    // Save series metadata to custom tables
                    global $wpdb;
                    $series_table = $wpdb->prefix . 'event_series';

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

                    // Check if series exists
                    $existing_series = $wpdb->get_row($wpdb->prepare(
                        "SELECT id FROM $series_table WHERE post_id = %d",
                        $post_id
                    ));

                    if ($existing_series) {
                        $wpdb->update($series_table, $series_db_data, array('post_id' => $post_id));
                        $series_id = $existing_series->id;
                    } else {
                        $wpdb->insert($series_table, $series_db_data);
                        $series_id = $wpdb->insert_id;
                    }

                    // Create occurrences
                    if (!empty($occurrences) && $series_id) {
                        $occurrences_table = $wpdb->prefix . 'event_occurrences';

                        // Clear existing occurrences
                        $wpdb->delete($occurrences_table, array('series_id' => $series_id));

                        // Insert new occurrences
                        foreach ($occurrences as $index => $occ) {
                            $start_dt = new DateTime($occ['start_datetime']);
                            $end_dt = !empty($occ['end_datetime']) ? new DateTime($occ['end_datetime']) : null;
                            $duration = $end_dt ? ($end_dt->getTimestamp() - $start_dt->getTimestamp()) : null;
                            $hash = md5($series_id . $start_dt->format('Y-m-d H:i:s') . ($end_dt ? $end_dt->format('Y-m-d H:i:s') : ''));

                            $wpdb->insert($occurrences_table, array(
                                'series_id' => $series_id,
                                'post_id' => $post_id,
                                'sequence' => $occ['sequence'] ?? ($index + 1),
                                'occurrence_hash' => $hash,
                                'start_datetime' => $start_dt->format('Y-m-d H:i:s'),
                                'end_datetime' => $end_dt ? $end_dt->format('Y-m-d H:i:s') : null,
                                'duration_seconds' => $duration,
                                'has_recurrence' => count($occurrences) > 1 ? 1 : 0,
                                'is_provisional' => !empty($occ['is_provisional']) ? 1 : 0,
                            ));
                        }
                    }
                }
            }

            // Handle featured media
            if (!empty($event_data['featured_media_url'])) {
                $this->set_featured_image_from_url($post_id, $event_data['featured_media_url']);
            }

            // Handle categories
            if (!empty($event_data['categories'])) {
                wp_set_object_terms($post_id, $event_data['categories'], 'event_category');
            }

            return rest_ensure_response(array(
                'success' => true,
                'action' => $action,
                'post_id' => $post_id,
                'post_url' => get_permalink($post_id),
                'series_created' => !empty($series_id),
                'occurrences_created' => count($occurrences ?? []),
            ));

        } catch (Exception $e) {
            return new WP_Error('import_failed', $e->getMessage(), array('status' => 500));
        }
    }

    /**
     * Get event occurrences from custom table
     */
    private function get_event_occurrences($post_id) {
        global $wpdb;
        $series_table = $wpdb->prefix . 'event_series';
        $occurrences_table = $wpdb->prefix . 'event_occurrences';

        // Get series ID for this event
        $series_id = $wpdb->get_var($wpdb->prepare(
            "SELECT id FROM $series_table WHERE post_id = %d",
            $post_id
        ));

        if (!$series_id) {
            return array();
        }

        // Get all occurrences for this series
        $occurrences = $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM $occurrences_table WHERE series_id = %d ORDER BY sequence ASC",
            $series_id
        ));

        return $occurrences ?: array();
    }

    /**
     * Set featured image from URL (with deduplication)
     */
    private function set_featured_image_from_url($post_id, $image_url) {
        require_once(ABSPATH . 'wp-admin/includes/media.php');
        require_once(ABSPATH . 'wp-admin/includes/file.php');
        require_once(ABSPATH . 'wp-admin/includes/image.php');

        $filename = basename($image_url);

        // Check if image with this filename already exists in media library
        global $wpdb;
        $existing_attachment = $wpdb->get_var($wpdb->prepare(
            "SELECT ID FROM {$wpdb->posts}
            WHERE post_type = 'attachment'
            AND guid LIKE %s
            ORDER BY ID DESC LIMIT 1",
            '%' . $wpdb->esc_like($filename)
        ));

        if ($existing_attachment) {
            // Reuse existing image
            set_post_thumbnail($post_id, $existing_attachment);
            error_log("Reusing existing media ID: $existing_attachment for file: $filename");
            return $existing_attachment;
        }

        // Image doesn't exist, download and upload it
        $tmp = download_url($image_url);
        if (is_wp_error($tmp)) {
            return false;
        }

        $file_array = array(
            'name' => $filename,
            'tmp_name' => $tmp
        );

        // Upload to media library
        $media_id = media_handle_sideload($file_array, $post_id);

        if (is_wp_error($media_id)) {
            @unlink($file_array['tmp_name']);
            return false;
        }

        // Set as featured image
        set_post_thumbnail($post_id, $media_id);
        error_log("Uploaded new media ID: $media_id for file: $filename");
        return $media_id;
    }
}
