<?php
class UNBC_Events_REST_API {
    private $organizations_controller;
    private $event_import_service;

    public function __construct() {
        $this->organizations_controller = new UNBC_Events_REST_Organizations_Controller();
        $this->event_import_service = new UNBC_Event_Import_Service();

        add_action('rest_api_init', array($this, 'register_routes'));
        add_action('rest_api_init', array($this, 'register_meta_fields'));
        
        // Clear cache when events are modified
        add_action('save_post', array($this, 'clear_events_cache'));
        foreach (array('added_post_meta', 'updated_post_meta', 'deleted_post_meta') as $hook) {
            add_action($hook, function($meta_id, $post_id) { $this->clear_events_cache($post_id); }, 10, 2);
        }
        add_action('set_object_terms', array($this, 'clear_events_cache'));
        add_action('edited_term', array(__CLASS__, 'bump_cache_generation'));
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
            'callback' => array($this->organizations_controller, 'get_organizations'),
            'permission_callback' => '__return_true'
        ));

        register_rest_route('unbc-events/v1', '/categories', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this->organizations_controller, 'get_categories'),
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
            'callback' => array($this->organizations_controller, 'get_category_config'),
            'permission_callback' => '__return_true'
        ));

        // Category colors endpoint
        register_rest_route('unbc-events/v1', '/category-colors', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this->organizations_controller, 'get_category_colors'),
            'permission_callback' => '__return_true'
        ));

        // EventScrape import endpoint - accepts events with series/occurrence data
        register_rest_route('unbc-events/v1', '/import-event', array(
            'methods' => WP_REST_Server::CREATABLE,
            'callback' => array($this->event_import_service, 'import_event_with_occurrences'),
            'permission_callback' => array($this->event_import_service, 'check_import_permission'),
            'args' => array(
                'event' => array(
                    'required' => true,
                    'type' => 'object',
                    'description' => 'Event data with series and occurrence information'
                )
            )
        ));
    }

    public function get_events($request) {
        try {
            global $wpdb;
            $params = $request->get_params();
            if (empty($params['start_date']) && empty($params['end_date'])) $this->apply_view_based_strategy($params);
            $params['per_page'] = max(1, min(100, absint($params['per_page'] ?? 100)));
            $params['page'] = max(1, absint($params['page'] ?? 1));
            ksort($params);
            $cache_key = 'unbc_events_api_' . md5(get_option('unbc_events_cache_generation', '0') . serialize($params));
            $cached = get_transient($cache_key);
            if ($cached !== false) { $cached['performance']['cache_hit'] = true; return rest_ensure_response($cached); }
            list($rows, $total) = UNBC_Event_Query::page($params);
            $ids = array_values(array_unique(array_map(function($row) { return (int) $row->post_id; }, $rows)));
            $occurrences = array(); $series = array();
            if ($ids) {
                _prime_post_caches($ids, true, true);
                $in = implode(',', $ids);
                foreach ($wpdb->get_results("SELECT * FROM {$wpdb->prefix}event_series WHERE post_id IN ($in)") as $item) $series[$item->post_id] = $item;
                $occ_ids = array_filter(array_map(function($row) { return (int) $row->occurrence_id; }, $rows));
                if ($occ_ids) foreach ($wpdb->get_results('SELECT * FROM ' . $wpdb->prefix . 'event_occurrences WHERE id IN (' . implode(',', $occ_ids) . ')') as $item) $occurrences[$item->id] = $item;
                $org_ids = array_filter(array_map(function($id) { return absint(get_post_meta($id, 'organization_id', true)); }, $ids));
                if ($org_ids) _prime_post_caches(array_unique($org_ids), false, true);
            }
            $events = array(); $metadata = array(); $organizations = array(); $colors = array();
            foreach ($rows as $row) {
                $data = $this->format_event_data($row->post_id);
                if (!$data) continue;
                $occ = $occurrences[$row->occurrence_id] ?? null;
                $sr = $series[$row->post_id] ?? null;
                $data['id'] = $row->occurrence_id ? $row->post_id . '_occ_' . $row->sequence : $row->post_id;
                $data['date'] = substr($row->start_datetime, 0, 10);
                $data['start_time'] = substr($row->start_datetime, 11);
                $data['end_date'] = $row->end_datetime ? substr($row->end_datetime, 0, 10) : $data['date'];
                $data['end_time'] = $row->end_datetime ? substr($row->end_datetime, 11) : $data['start_time'];
                // Recurrence storage is normalized to site-local time; legacy
                // metadata carries the timezone used by its original writer.
                if ($occ) $data['timezone'] = wp_timezone_string();
                $data['event_status'] = $occ->event_status_override ?? $sr->event_status ?? 'scheduled';
                $data['status_reason'] = $occ->status_reason_override ?? $sr->status_reason ?? '';
                $data['is_all_day'] = !empty($sr->is_all_day);
                if ($occ) {
                    foreach (array('title_override'=>'title', 'description_override'=>'description', 'location_override'=>'full_location') as $from=>$to) if (!empty($occ->$from)) $data[$to] = $occ->$from;
                }
                $event = $this->transform_to_calendar_format($data);
                if ($occ && !empty($occ->start_utc)) {
                    $event['startDate'] = str_replace(' ', 'T', $occ->start_utc) . 'Z';
                    $event['endDate'] = str_replace(' ', 'T', $occ->end_utc ?: $occ->start_utc) . 'Z';
                }
                $events[] = $event; $metadata[$event['id']] = $this->build_event_metadata($data);
                if ($data['organization_id']) $organizations[$data['organization_id']] = $data['organization'];
                foreach ($data['categories'] as $cat) $colors[$cat['slug']] = $this->get_category_variant($cat['slug']);
            }
            $has_more = $params['page'] * $params['per_page'] < $total;
            $response = array('events'=>$events, 'eventMetadata'=>$metadata, 'organizations'=>$organizations, 'categoryMappings'=>$colors,
                'total'=>$total, 'pages'=>(int) ceil($total/$params['per_page']),
                'performance'=>array('server_processed'=>true, 'cache_hit'=>false),
                'pagination'=>array('hasMore'=>$has_more, 'nextPage'=>$has_more ? $params['page']+1 : null,
                    'currentPage'=>$params['page'], 'perPage'=>$params['per_page'], 'view'=>$params['view'] ?? 'month',
                    'loadedRange'=>array('start'=>$params['start_date'] ?? null, 'end'=>$params['end_date'] ?? null)));
            set_transient($cache_key, $response, 15 * MINUTE_IN_SECONDS);
            return rest_ensure_response($response);
        } catch (Exception $e) {
            return new WP_Error('events_api_error', $e->getMessage(), array('status'=>$e instanceof InvalidArgumentException ? 400 : 500));
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
        $end_datetime = $this->create_datetime($event_data['end_date'] ?? $event_data['date'], $event_data['end_time'], $event_data['timezone'] ?? null);

        return array(
            'id' => (string)$event_data['id'],
            'title' => $event_data['title'],
            'description' => $event_data['description'],
            'isAllDay' => !empty($event_data['is_all_day']),
            'status' => $event_data['event_status'] ?? 'scheduled',
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
            'categories' => $event_data['categories'],
            'status' => $event_data['event_status'] ?? 'scheduled',
            'statusReason' => $event_data['status_reason'] ?? '',
            'isAllDay' => !empty($event_data['is_all_day']),
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

            // Interpret legacy metadata in its declared timezone. Occurrences
            // have already been normalized to the site timezone.
            $timezone_object = $timezone ? new DateTimeZone($timezone) : wp_timezone();

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
                if (!is_array($value)) return false;
                $permission = UNBC_Write_Policy::event($post->ID, get_post_status($post->ID), $value['organization'] ?? null);
                if (is_wp_error($permission)) return $permission;

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
        return new WP_Error('not_implemented', 'Calendar creation is not implemented.', array('status' => 501));
    }

    /**
     * Clear events cache when events are modified
     */
    public static function bump_cache_generation() {
        update_option('unbc_events_cache_generation', wp_generate_uuid4(), false);
    }

    public function clear_events_cache($post_id) {
        if (in_array(get_post_type($post_id), array('event', 'organization'), true)) self::bump_cache_generation();
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
        $date = $params['date'] ?? current_time('Y-m-d');
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
                    $params['start_date'] = current_time('Y-m-d');
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

}
