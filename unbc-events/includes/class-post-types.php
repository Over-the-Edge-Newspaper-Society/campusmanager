<?php
class UNBC_Events_Post_Types {
    public function __construct() {
        // Register immediately since we're called from init already
        $this->register_post_types();
        $this->register_taxonomies();
        
        add_filter('use_block_editor_for_post_type', array($this, 'disable_gutenberg_for_events'), 10, 2);
        add_filter('post_link', array($this, 'custom_organization_permalink'), 10, 2);
        add_filter('post_type_link', array($this, 'custom_organization_permalink'), 10, 2);
        add_action('add_meta_boxes', array($this, 'add_featured_image_support'));
    }

    public function register_post_types() {
        // Check if post types already exist (from mu-plugins or theme)
        $existing_event_type = post_type_exists('unbc_event');
        $existing_org_type = post_type_exists('organization');
        
        // Only register if doesn't exist, or re-register with compatible settings
        if (!$existing_event_type) {
            register_post_type('unbc_event', array(
            'labels' => array(
                'name' => 'Events',
                'singular_name' => 'Event',
                'add_new' => 'Add New Event',
                'add_new_item' => 'Add New Event',
                'edit_item' => 'Edit Event',
                'new_item' => 'New Event',
                'view_item' => 'View Event',
                'search_items' => 'Search Events',
                'not_found' => 'No events found',
                'not_found_in_trash' => 'No events found in Trash',
                'menu_name' => 'Events',
                'all_items' => 'All Events'
            ),
            'public' => true,               // Compatible with existing setup
            'publicly_queryable' => true,   // Allow frontend access
            'show_ui' => true,               // Keep admin UI
            'show_in_menu' => true,          // Show in admin menu
            'has_archive' => true,           // Allow archive page
            'supports' => array('title', 'editor', 'excerpt', 'thumbnail'), // Full support
            'show_in_rest' => true,          // Keep REST API access for React app
            'rest_base' => 'events',
            'menu_icon' => 'dashicons-calendar-alt' // Calendar icon for events
        ));
        }

        // Organization/Clubs post type (using existing 'organization' to preserve data)
        if (!$existing_org_type) {
            register_post_type('organization', array(
            'labels' => array(
                'name' => 'Organizations',
                'singular_name' => 'Organization',
                'add_new' => 'Add New Club/Organization',
                'add_new_item' => 'Add New Organization',
                'edit_item' => 'Edit Organization',
                'new_item' => 'New Organization',
                'view_item' => 'View Organization',
                'search_items' => 'Search Organizations',
                'not_found' => 'No organizations found',
                'not_found_in_trash' => 'No organizations found in Trash',
                'menu_name' => 'Organizations',
                'all_items' => 'All Organizations'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'show_in_rest' => true,
            'rest_base' => 'organizations',
            'menu_icon' => 'dashicons-groups', // Group of people icon for organizations
            'rewrite' => array('slug' => 'clubs'),
            'publicly_queryable' => true,
            'query_var' => true
        ));
        }
    }

    public function register_taxonomies() {
        // Only register taxonomies if they don't exist
        if (!taxonomy_exists('event_category')) {
            register_taxonomy('event_category', 'unbc_event', array(
            'labels' => array(
                'name' => 'Event Categories',
                'singular_name' => 'Event Category'
            ),
            'hierarchical' => true,
            'show_in_rest' => true,
            'public' => true
        ));
        }
        
        // Organization Categories
        if (!taxonomy_exists('org_category')) {
            register_taxonomy('org_category', 'organization', array(
            'labels' => array(
                'name' => 'Organization Categories',
                'singular_name' => 'Category',
                'search_items' => 'Search Categories',
                'all_items' => 'All Categories',
                'parent_item' => 'Parent Category',
                'parent_item_colon' => 'Parent Category:',
                'edit_item' => 'Edit Category',
                'update_item' => 'Update Category',
                'add_new_item' => 'Add New Category',
                'new_item_name' => 'New Category Name',
                'menu_name' => 'Categories',
            ),
            'hierarchical' => true,
            'public' => true,
            'show_in_rest' => true,
            'rewrite' => array('slug' => 'club-category'),
        ));
        }
        
        // Organization Tags
        if (!taxonomy_exists('org_tag')) {
            register_taxonomy('org_tag', 'organization', array(
            'labels' => array(
                'name' => 'Organization Tags',
                'singular_name' => 'Tag',
                'search_items' => 'Search Tags',
                'popular_items' => 'Popular Tags',
                'all_items' => 'All Tags',
                'edit_item' => 'Edit Tag',
                'update_item' => 'Update Tag',
                'add_new_item' => 'Add New Tag',
                'new_item_name' => 'New Tag Name',
                'menu_name' => 'Tags',
            ),
            'hierarchical' => false,
            'public' => true,
            'show_in_rest' => true,
            'rewrite' => array('slug' => 'club-tag'),
        ));
        }
    }
    
    public function disable_gutenberg_for_events($use_block_editor, $post_type) {
        if ($post_type === 'unbc_event' || $post_type === 'organization') {
            return false; // Disable Gutenberg for events and organizations
        }
        return $use_block_editor;
    }
    
    public function custom_organization_permalink($permalink, $post) {
        if ($post->post_type !== 'organization') {
            return $permalink;
        }
        
        $is_department = get_post_meta($post->ID, 'org_is_department', true);
        
        if ($is_department === '1') {
            // Departments use /organization/name
            $permalink = home_url('/organization/' . $post->post_name . '/');
        } else {
            // Clubs use /clubs/name (default)
            $permalink = home_url('/clubs/' . $post->post_name . '/');
        }
        
        return $permalink;
    }
    
    public function add_featured_image_support() {
        add_meta_box(
            'postimagediv',
            __('Club/Organization Logo'),
            'post_thumbnail_meta_box',
            'organization',
            'side',
            'high'
        );
    }
}