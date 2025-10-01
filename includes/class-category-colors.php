<?php
class UNBC_Category_Colors {
    
    // 10 predefined color options with dark mode support
    private static $color_options = array(
        'default' => array(
            'name' => 'Gray (Default)',
            'light' => '#6b7280',
            'dark' => '#9ca3af',
            'variant' => 'default'
        ),
        'primary' => array(
            'name' => 'Purple',
            'light' => '#8b5cf6',
            'dark' => '#a78bfa',
            'variant' => 'primary'
        ),
        'success' => array(
            'name' => 'Green',
            'light' => '#22c55e',
            'dark' => '#4ade80',
            'variant' => 'success'
        ),
        'danger' => array(
            'name' => 'Red',
            'light' => '#ef4444',
            'dark' => '#f87171',
            'variant' => 'danger'
        ),
        'warning' => array(
            'name' => 'Blue',
            'light' => '#3b82f6',
            'dark' => '#60a5fa',
            'variant' => 'warning'
        ),
        'orange' => array(
            'name' => 'Orange',
            'light' => '#f97316',
            'dark' => '#fb923c',
            'variant' => 'orange'
        ),
        'cyan' => array(
            'name' => 'Cyan',
            'light' => '#06b6d4',
            'dark' => '#22d3ee',
            'variant' => 'cyan'
        ),
        'pink' => array(
            'name' => 'Pink',
            'light' => '#ec4899',
            'dark' => '#f472b6',
            'variant' => 'pink'
        ),
        'indigo' => array(
            'name' => 'Indigo',
            'light' => '#6366f1',
            'dark' => '#818cf8',
            'variant' => 'indigo'
        ),
        'yellow' => array(
            'name' => 'Yellow',
            'light' => '#eab308',
            'dark' => '#facc15',
            'variant' => 'yellow'
        )
    );

    public function __construct() {
        // Add custom fields to event_category taxonomy
        add_action('event_category_add_form_fields', array($this, 'add_category_color_field'));
        add_action('event_category_edit_form_fields', array($this, 'edit_category_color_field'), 10, 2);
        
        // Save the custom fields
        add_action('created_event_category', array($this, 'save_category_fields'), 10, 2);
        add_action('edited_event_category', array($this, 'save_category_fields'), 10, 2);
        
        // Auto-assign categories when saving events
        add_action('save_post', array($this, 'auto_assign_event_category'), 20, 1);

        // Auto-assign categories when creating events via REST API
        add_action('rest_insert_event', array($this, 'auto_assign_event_category'), 20, 1);

        // Add a periodic check to ensure organization events maintain correct categorization
        add_action('wp_loaded', array($this, 'maybe_sync_organization_categories'));
        
        // Add admin scripts and styles
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
        
        // Add admin notices
        add_action('admin_notices', array($this, 'show_bulk_update_notice'));
        
        // Add custom column to categories list
        add_filter('manage_edit-event_category_columns', array($this, 'add_color_column'));
        add_filter('manage_event_category_custom_column', array($this, 'add_color_column_content'), 10, 3);
    }

    public static function get_color_options() {
        return self::$color_options;
    }

    public static function get_category_color_variant($term_id) {
        $color_key = get_term_meta($term_id, 'category_color', true);
        if (!$color_key || !isset(self::$color_options[$color_key])) {
            return 'default';
        }
        return self::$color_options[$color_key]['variant'];
    }

    public static function get_category_color($term_id, $mode = 'light') {
        $color_key = get_term_meta($term_id, 'category_color', true);
        if (!$color_key || !isset(self::$color_options[$color_key])) {
            $color_key = 'default';
        }
        return self::$color_options[$color_key][$mode];
    }

    public function add_category_color_field() {
        ?>
        <div class="form-field">
            <label for="category_color"><?php _e('Category Color'); ?></label>
            <select name="category_color" id="category_color" class="category-color-selector">
                <?php foreach (self::$color_options as $key => $color): ?>
                    <option value="<?php echo esc_attr($key); ?>" data-light="<?php echo esc_attr($color['light']); ?>" data-dark="<?php echo esc_attr($color['dark']); ?>">
                        <?php echo esc_html($color['name']); ?>
                    </option>
                <?php endforeach; ?>
            </select>
            <p class="description"><?php _e('Choose a color for this event category. The color will be used in the calendar views and event displays.'); ?></p>
            <div class="color-preview-container">
                <div class="color-preview-group">
                    <span class="color-preview-label">Light mode:</span>
                    <div class="color-preview light-preview" id="light-preview"></div>
                </div>
                <div class="color-preview-group">
                    <span class="color-preview-label">Dark mode:</span>
                    <div class="color-preview dark-preview" id="dark-preview"></div>
                </div>
            </div>
        </div>
        
        <div class="form-field">
            <label for="auto_assign_organizations"><?php _e('Auto-assign for Organizations'); ?></label>
            <input type="checkbox" name="auto_assign_organizations" id="auto_assign_organizations" value="1" />
            <p class="description"><?php _e('Automatically assign this category to all events created by organizations/clubs. Only one category can have this setting enabled.'); ?></p>
        </div>
        <?php
    }

    public function edit_category_color_field($term, $taxonomy) {
        $current_color = get_term_meta($term->term_id, 'category_color', true);
        if (!$current_color) {
            $current_color = 'default';
        }
        
        $auto_assign = get_term_meta($term->term_id, 'auto_assign_organizations', true);
        ?>
        <tr class="form-field">
            <th scope="row">
                <label for="category_color"><?php _e('Category Color'); ?></label>
            </th>
            <td>
                <select name="category_color" id="category_color" class="category-color-selector">
                    <?php foreach (self::$color_options as $key => $color): ?>
                        <option value="<?php echo esc_attr($key); ?>" 
                                data-light="<?php echo esc_attr($color['light']); ?>" 
                                data-dark="<?php echo esc_attr($color['dark']); ?>"
                                <?php selected($current_color, $key); ?>>
                            <?php echo esc_html($color['name']); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
                <p class="description"><?php _e('Choose a color for this event category. The color will be used in the calendar views and event displays.'); ?></p>
                <div class="color-preview-container">
                    <div class="color-preview-group">
                        <span class="color-preview-label">Light mode:</span>
                        <div class="color-preview light-preview" id="light-preview"></div>
                    </div>
                    <div class="color-preview-group">
                        <span class="color-preview-label">Dark mode:</span>
                        <div class="color-preview dark-preview" id="dark-preview"></div>
                    </div>
                </div>
            </td>
        </tr>
        
        <tr class="form-field">
            <th scope="row">
                <label for="auto_assign_organizations"><?php _e('Auto-assign for Organizations'); ?></label>
            </th>
            <td>
                <input type="checkbox" name="auto_assign_organizations" id="auto_assign_organizations" value="1" <?php checked($auto_assign, '1'); ?> />
                <p class="description"><?php _e('Automatically assign this category to all events created by organizations/clubs. Only one category can have this setting enabled.'); ?></p>
                
                <label style="display: block; margin-top: 10px;">
                    <input type="checkbox" name="update_existing_events" id="update_existing_events" value="1" />
                    <?php _e('Update all existing organization events to use this category'); ?>
                </label>
                <p class="description" style="margin-top: 5px; font-style: italic;"><?php _e('Check this to retroactively apply this category to all existing events that belong to organizations/clubs.'); ?></p>
                <?php 
                // Show warning if another category already has auto-assign enabled
                $current_auto_assign = $this->get_organization_auto_assign_category();
                if ($current_auto_assign && $current_auto_assign != $term->term_id) {
                    $current_term = get_term($current_auto_assign);
                    if ($current_term) {
                        echo '<p class="description" style="color: #d63638;"><strong>Warning:</strong> The category "' . esc_html($current_term->name) . '" is currently set to auto-assign for organizations. Enabling this will disable the other category.</p>';
                    }
                }
                ?>
            </td>
        </tr>
        <?php
    }

    public function save_category_fields($term_id, $tt_id = '') {
        // Save color
        if (isset($_POST['category_color'])) {
            $color = sanitize_text_field($_POST['category_color']);
            if (array_key_exists($color, self::$color_options)) {
                update_term_meta($term_id, 'category_color', $color);
            }
        }
        
        // Save auto-assign setting
        $was_auto_assign_enabled = get_term_meta($term_id, 'auto_assign_organizations', true) === '1';
        $is_auto_assign_enabled = isset($_POST['auto_assign_organizations']) && $_POST['auto_assign_organizations'] === '1';
        $should_update_existing = isset($_POST['update_existing_events']) && $_POST['update_existing_events'] === '1';
        
        if ($is_auto_assign_enabled) {
            // First, remove auto-assign from any other categories
            $this->clear_other_auto_assign_categories($term_id);
            // Then set this category as the auto-assign category
            update_term_meta($term_id, 'auto_assign_organizations', '1');
            
            // If this is newly enabled or user requested update, bulk update existing events
            if (!$was_auto_assign_enabled || $should_update_existing) {
                $this->bulk_update_organization_events($term_id);
            }
        } else {
            // Auto-assign being disabled
            if ($was_auto_assign_enabled) {
                delete_term_meta($term_id, 'auto_assign_organizations');
                // Optionally could remove category from organization events here
                // but probably better to leave them as they are
            }
        }

        // Category appearance or auto-assign changes affect the front-end cache
        $this->clear_events_cache_transients();
    }

    /**
     * Clear the cached REST responses so colour updates appear immediately on the calendar.
     */
    private function clear_events_cache_transients() {
        global $wpdb;

        if (!isset($wpdb->options)) {
            return;
        }

        $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_unbc_events_api_%'");
        $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_timeout_unbc_events_api_%'");
    }

    public function get_organization_auto_assign_category() {
        $terms = get_terms(array(
            'taxonomy' => 'event_category',
            'hide_empty' => false,
            'meta_query' => array(
                array(
                    'key' => 'auto_assign_organizations',
                    'value' => '1',
                    'compare' => '='
                )
            )
        ));
        
        if (!empty($terms) && !is_wp_error($terms)) {
            return $terms[0]->term_id;
        }
        
        return false;
    }

    private function clear_other_auto_assign_categories($current_term_id) {
        $terms = get_terms(array(
            'taxonomy' => 'event_category',
            'hide_empty' => false,
            'meta_query' => array(
                array(
                    'key' => 'auto_assign_organizations',
                    'value' => '1',
                    'compare' => '='
                )
            )
        ));
        
        if (!empty($terms) && !is_wp_error($terms)) {
            foreach ($terms as $term) {
                if ($term->term_id != $current_term_id) {
                    delete_term_meta($term->term_id, 'auto_assign_organizations');
                    
                    // Store the old category ID for reference
                    update_option('unbc_previous_org_category', $term->term_id);
                }
            }
        }
    }

    public function auto_assign_event_category($post_id) {
        // Only process events
        if (get_post_type($post_id) !== 'event') {
            return;
        }
        
        // Skip if this is an auto-save or revision
        if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id)) {
            return;
        }
        
        // Check if this event belongs to an organization
        $organization_id = get_post_meta($post_id, 'organization_id', true);
        if (!$organization_id) {
            return;
        }
        
        // Get the auto-assign category
        $auto_assign_category_id = $this->get_organization_auto_assign_category();
        if (!$auto_assign_category_id) {
            return;
        }
        
        // Check if event already has categories assigned
        $current_categories = wp_get_post_terms($post_id, 'event_category', array('fields' => 'ids'));
        
        // Only auto-assign if no categories are currently assigned
        if (empty($current_categories) || is_wp_error($current_categories)) {
            wp_set_post_terms($post_id, array($auto_assign_category_id), 'event_category');
        }
    }

    public function bulk_update_organization_events($category_id) {
        // Get all events that belong to organizations
        $organization_events = get_posts(array(
            'post_type' => 'event',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'meta_query' => array(
                array(
                    'key' => 'organization_id',
                    'compare' => 'EXISTS'
                ),
                array(
                    'key' => 'organization_id',
                    'value' => '',
                    'compare' => '!='
                )
            ),
            'fields' => 'ids'
        ));

        $updated_count = 0;
        
        if (!empty($organization_events)) {
            foreach ($organization_events as $event_id) {
                // Set the category for this event
                $result = wp_set_post_terms($event_id, array($category_id), 'event_category');
                if (!is_wp_error($result)) {
                    $updated_count++;
                }
            }
        }

        // Store a transient to show admin notice
        set_transient('unbc_category_bulk_update_result', array(
            'updated_count' => $updated_count,
            'category_name' => get_term($category_id)->name
        ), 30);
        
        // Hook to show admin notice
        add_action('admin_notices', array($this, 'show_bulk_update_notice'));
        
        return $updated_count;
    }

    public function maybe_sync_organization_categories() {
        // Only run this check occasionally (every 5 minutes max) to avoid performance issues
        $last_sync = get_transient('unbc_last_category_sync');
        if ($last_sync) {
            return; // Already synced recently
        }
        
        // Set a 5-minute transient to prevent frequent syncing
        set_transient('unbc_last_category_sync', time(), 5 * MINUTE_IN_SECONDS);
        
        $auto_assign_category = $this->get_organization_auto_assign_category();
        if (!$auto_assign_category) {
            return; // No auto-assign category set
        }
        
        // Get organization events that don't have the correct category
        $org_events = get_posts(array(
            'post_type' => 'event',
            'post_status' => 'publish',
            'posts_per_page' => 20, // Limit to avoid performance issues
            'meta_query' => array(
                array(
                    'key' => 'organization_id',
                    'compare' => 'EXISTS'
                ),
                array(
                    'key' => 'organization_id',
                    'value' => '',
                    'compare' => '!='
                )
            ),
            'tax_query' => array(
                array(
                    'taxonomy' => 'event_category',
                    'field' => 'term_id',
                    'terms' => $auto_assign_category,
                    'operator' => 'NOT IN'
                )
            ),
            'fields' => 'ids'
        ));
        
        // Update events that need the correct category
        foreach ($org_events as $event_id) {
            wp_set_post_terms($event_id, array($auto_assign_category), 'event_category');
        }
    }

    public function show_bulk_update_notice() {
        $result = get_transient('unbc_category_bulk_update_result');
        if ($result) {
            delete_transient('unbc_category_bulk_update_result');
            $class = 'notice notice-success is-dismissible';
            $message = sprintf(
                __('Successfully updated %d organization events to use the "%s" category.'),
                $result['updated_count'],
                $result['category_name']
            );
            printf('<div class="%1$s"><p>%2$s</p></div>', esc_attr($class), esc_html($message));
        }
    }

    public function enqueue_admin_scripts($hook) {
        // Only load on taxonomy edit pages
        if ($hook === 'edit-tags.php' || $hook === 'term.php') {
            $screen = get_current_screen();
            if ($screen && $screen->taxonomy === 'event_category') {
                wp_add_inline_style('wp-admin', $this->get_admin_css());
                wp_add_inline_script('jquery', $this->get_admin_js());
            }
        }
    }

    private function get_admin_css() {
        return '
        .color-preview-container {
            margin-top: 10px;
            display: flex;
            gap: 20px;
            align-items: center;
        }
        
        .color-preview-group {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .color-preview-label {
            font-size: 12px;
            color: #666;
        }
        
        .color-preview {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid #ddd;
            display: inline-block;
        }
        
        .dark-preview {
            background: #1a1a1a;
            border-color: #333;
        }
        
        .category-color-column .color-preview {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid #ddd;
            display: inline-block;
            margin-right: 8px;
            vertical-align: middle;
        }
        ';
    }

    private function get_admin_js() {
        return '
        jQuery(document).ready(function($) {
            function updateColorPreview() {
                var selected = $(".category-color-selector option:selected");
                var lightColor = selected.data("light");
                var darkColor = selected.data("dark");
                
                if (lightColor && darkColor) {
                    $("#light-preview").css("background-color", lightColor);
                    $("#dark-preview").find(".color-preview").remove();
                    $("#dark-preview").append("<div class=\"color-preview\" style=\"background-color: " + darkColor + "; border-color: #333;\"></div>");
                }
            }
            
            // Update on page load
            updateColorPreview();
            
            // Update on change
            $(".category-color-selector").change(updateColorPreview);
            
            // Handle bulk update warning
            $("#update_existing_events").change(function() {
                if ($(this).is(":checked")) {
                    if (!confirm("This will update ALL existing organization events to use this category. This action cannot be undone. Are you sure?")) {
                        $(this).prop("checked", false);
                    }
                }
            });
            
            // Auto-check update existing when auto-assign is enabled for first time
            $("#auto_assign_organizations").change(function() {
                if ($(this).is(":checked")) {
                    var wasDisabled = !$(this).data("original-state");
                    if (wasDisabled) {
                        $("#update_existing_events").prop("checked", true);
                        if (!confirm("This will automatically assign this category to ALL organization events (existing and future). Continue?")) {
                            $(this).prop("checked", false);
                            $("#update_existing_events").prop("checked", false);
                        }
                    }
                }
            });
            
            // Store original state
            $("#auto_assign_organizations").data("original-state", $("#auto_assign_organizations").is(":checked"));
        });
        ';
    }

    public function add_color_column($columns) {
        // Add color column before description
        $new_columns = array();
        foreach ($columns as $key => $value) {
            if ($key === 'description') {
                $new_columns['color'] = __('Color');
            }
            $new_columns[$key] = $value;
        }
        return $new_columns;
    }

    public function add_color_column_content($content, $column_name, $term_id) {
        if ($column_name === 'color') {
            $color_key = get_term_meta($term_id, 'category_color', true);
            if (!$color_key) {
                $color_key = 'default';
            }
            
            $color_info = self::$color_options[$color_key];
            $light_color = $color_info['light'];
            $color_name = $color_info['name'];
            
            $auto_assign = get_term_meta($term_id, 'auto_assign_organizations', true);
            $auto_assign_indicator = '';
            if ($auto_assign === '1') {
                $auto_assign_indicator = ' <span style="color: #0073aa; font-weight: bold;" title="Auto-assigned to organization events">⚡</span>';
            }
            
            $content = sprintf(
                '<div class="category-color-column"><span class="color-preview" style="background-color: %s;"></span>%s%s</div>',
                esc_attr($light_color),
                esc_html($color_name),
                $auto_assign_indicator
            );
        }
        return $content;
    }
}

// Initialize the class
new UNBC_Category_Colors();
?>
