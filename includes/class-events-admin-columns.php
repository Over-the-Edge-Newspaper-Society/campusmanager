<?php

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Events_Admin_Columns {
    
    public function __construct() {
        // Add filters for events admin columns with high priority
        add_filter('manage_event_posts_columns', array($this, 'add_custom_columns'), 999);
        add_action('manage_event_posts_custom_column', array($this, 'custom_column_content'), 10, 2);
        
        // Additional hook to ensure author column is removed
        add_filter('manage_posts_columns', array($this, 'remove_author_column_global'), 999);
        
        // Make event date column sortable
        add_filter('manage_edit-event_sortable_columns', array($this, 'make_columns_sortable'));
        
        // Handle sorting for custom columns
        add_action('pre_get_posts', array($this, 'handle_custom_column_sorting'));
        
        // Add CSS to hide author column as backup
        add_action('admin_head', array($this, 'hide_author_column_css'));
    }
    
    /**
     * Add custom columns to events admin list
     */
    public function add_custom_columns($columns) {
        // Start fresh to ensure proper column control
        $new_columns = array();
        
        // Keep checkbox
        if (isset($columns['cb'])) {
            $new_columns['cb'] = $columns['cb'];
        }
        
        // Keep title  
        if (isset($columns['title'])) {
            $new_columns['title'] = $columns['title'];
        }
        
        // Add our custom columns
        $new_columns['organization'] = __('Organization', 'unbc-events');
        $new_columns['event_date'] = __('Event Date', 'unbc-events');
        
        // Add other columns we want to keep (but NOT author, article_author, or date)
        foreach ($columns as $key => $label) {
            if (!in_array($key, ['cb', 'title', 'author', 'article_author', 'date']) && !isset($new_columns[$key])) {
                $new_columns[$key] = $label;
            }
        }
        
        return $new_columns;
    }
    
    /**
     * Global removal of author column for events post type
     */
    public function remove_author_column_global($columns) {
        global $typenow;
        if ($typenow === 'event') {
            // Remove both author and article_author columns
            if (isset($columns['author'])) {
                unset($columns['author']);
            }
            if (isset($columns['article_author'])) {
                unset($columns['article_author']);
            }
        }
        return $columns;
    }
    
    /**
     * Display content for custom columns
     */
    public function custom_column_content($column, $post_id) {
        switch ($column) {
            case 'organization':
                $this->display_organization_column($post_id);
                break;
                
            case 'event_date':
                $this->display_event_date_column($post_id);
                break;
        }
    }
    
    /**
     * Display organization information
     */
    private function display_organization_column($post_id) {
        // Get organization from meta fields (correct field name)
        $organization = get_post_meta($post_id, 'organization', true);
        
        if (!empty($organization)) {
            echo esc_html($organization);
        } else {
            echo '<span style="color: #999;">—</span>';
        }
    }
    
    /**
     * Display event date and time
     */
    private function display_event_date_column($post_id) {
        // Use correct field names from REST API
        $event_date = get_post_meta($post_id, 'event_date', true);
        $start_time = get_post_meta($post_id, 'start_time', true);
        $end_time = get_post_meta($post_id, 'end_time', true);
        
        if (!empty($event_date)) {
            // Format the date
            $formatted_date = date_i18n(get_option('date_format'), strtotime($event_date));
            echo '<strong>' . esc_html($formatted_date) . '</strong>';
            
            // Add times if available
            if (!empty($start_time)) {
                echo '<br><span style="color: #666;">';
                echo esc_html(date_i18n(get_option('time_format'), strtotime($start_time)));
                
                if (!empty($end_time) && $end_time !== $start_time) {
                    echo ' - ' . esc_html(date_i18n(get_option('time_format'), strtotime($end_time)));
                }
                echo '</span>';
            }
        } else {
            echo '<span style="color: #999;">—</span>';
        }
    }
    
    /**
     * Make event date column sortable
     */
    public function make_columns_sortable($columns) {
        $columns['event_date'] = 'event_date';
        $columns['organization'] = 'organization';
        return $columns;
    }
    
    /**
     * Handle sorting for custom columns
     */
    public function handle_custom_column_sorting($query) {
        if (!is_admin() || !$query->is_main_query()) {
            return;
        }
        
        $orderby = $query->get('orderby');
        
        if ($orderby === 'event_date') {
            $query->set('meta_key', 'event_date');
            $query->set('orderby', 'meta_value');
        } elseif ($orderby === 'organization') {
            $query->set('meta_key', 'organization');
            $query->set('orderby', 'meta_value');
        }
    }
    
    /**
     * Hide author column with CSS as backup method
     */
    public function hide_author_column_css() {
        global $typenow;
        if ($typenow === 'event') {
            echo '<style>
                .wp-list-table .column-author,
                .wp-list-table th#author,
                .wp-list-table td.author,
                .wp-list-table .manage-column.column-author,
                .wp-list-table .column-article_author,
                .wp-list-table th#article_author,
                .wp-list-table td.article_author,
                .wp-list-table .manage-column.column-article_author {
                    display: none !important;
                }
            </style>';
        }
    }
}