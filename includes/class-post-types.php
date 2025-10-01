<?php
class UNBC_Events_Post_Types {
    public function __construct() {
        // Register immediately since we're called from init already
        $this->register_post_types();
        $this->register_taxonomies();

        add_filter('use_block_editor_for_post_type', array($this, 'disable_gutenberg_for_events'), 10, 2);
        add_filter('post_link', array($this, 'custom_organization_permalink'), 10, 2);
        add_filter('post_type_link', array($this, 'custom_organization_permalink'), 10, 2);
        add_filter('post_type_link', array($this, 'custom_club_post_permalink'), 10, 2);
        add_action('init', array($this, 'add_club_post_rewrite_rules'));
        add_filter('query_vars', array($this, 'add_club_post_query_vars'));
        add_action('add_meta_boxes', array($this, 'add_featured_image_support'));
        add_action('pre_get_posts', array($this, 'restrict_organization_manager_posts'));
        add_action('pre_get_posts', array($this, 'handle_club_post_query'));
        add_action('admin_menu', array($this, 'modify_admin_menu_for_org_managers'));
        // Disabled - conflicts with organization-manager-dashboard redirects
        // add_action('admin_init', array($this, 'block_restricted_pages_for_org_managers'));
        // add_action('admin_init', array($this, 'redirect_org_managers_from_dashboard'));
        add_action('add_meta_boxes', array($this, 'remove_page_attributes_metabox'));
        add_action('admin_head', array($this, 'hide_post_attributes_css'));
        add_action('save_post', array($this, 'prevent_template_changes'), 1);
        add_action('rest_api_init', array($this, 'register_meta_fields'));
    }

    public function register_post_types() {
        // Check if post types already exist (from mu-plugins or theme)
        $existing_event_type = post_type_exists('event');
        $existing_org_type = post_type_exists('organization');
        
        // Only register if doesn't exist, or re-register with compatible settings
        if (!$existing_event_type) {
            register_post_type('event', array(
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
            'menu_icon' => 'dashicons-calendar-alt', // Calendar icon for events
            'capability_type' => array('event', 'events'),
            'map_meta_cap' => true
        ));

        // Add event capabilities to editor role
        $editor = get_role('editor');
        if ($editor) {
            $editor->add_cap('edit_event');
            $editor->add_cap('read_event');
            $editor->add_cap('delete_event');
            $editor->add_cap('edit_events');
            $editor->add_cap('edit_others_events');
            $editor->add_cap('publish_events');
            $editor->add_cap('read_private_events');
            $editor->add_cap('delete_events');
            $editor->add_cap('delete_private_events');
            $editor->add_cap('delete_published_events');
            $editor->add_cap('delete_others_events');
            $editor->add_cap('edit_private_events');
            $editor->add_cap('edit_published_events');
        }
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
            'rest_base' => 'organization',
            'menu_icon' => 'dashicons-groups', // Group of people icon for organizations
            'rewrite' => array('slug' => 'clubs'),
            'publicly_queryable' => true,
            'query_var' => true,
            'capability_type' => array('organization', 'organizations'),
            'map_meta_cap' => true
        ));
        }

        // Club Posts post type
        if (!post_type_exists('club_post')) {
            register_post_type('club_post', array(
                'labels' => array(
                    'name' => 'Club Posts',
                    'singular_name' => 'Club Post',
                    'add_new' => 'Add New Post',
                    'add_new_item' => 'Add New Club Post',
                    'edit_item' => 'Edit Club Post',
                    'new_item' => 'New Club Post',
                    'view_item' => 'View Club Post',
                    'search_items' => 'Search Club Posts',
                    'not_found' => 'No club posts found',
                    'not_found_in_trash' => 'No club posts found in Trash',
                    'menu_name' => 'Club Posts',
                    'all_items' => 'All Club Posts'
                ),
                'public' => true,
                'has_archive' => false,
                'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'author'),
                'show_in_rest' => true,
                'rest_base' => 'club_posts',
                'menu_icon' => 'dashicons-admin-post',
                'publicly_queryable' => true,
                'query_var' => true,
                'rewrite' => false, // We'll handle custom URLs
                'capability_type' => array('club_post', 'club_posts'),
                'map_meta_cap' => true,
                'show_in_menu' => false // We'll add it as submenu to organizations
            ));
        }
    }

    public function register_taxonomies() {
        // Only register taxonomies if they don't exist
        if (!taxonomy_exists('event_category')) {
            register_taxonomy('event_category', 'event', array(
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
        
        // Organization Status taxonomy
        if (!taxonomy_exists('org_status')) {
            register_taxonomy('org_status', 'organization', array(
                'labels' => array(
                    'name' => 'Organization Status',
                    'singular_name' => 'Status',
                    'search_items' => 'Search Statuses',
                    'all_items' => 'All Statuses',
                    'edit_item' => 'Edit Status',
                    'update_item' => 'Update Status',
                    'add_new_item' => 'Add New Status',
                    'new_item_name' => 'New Status Name',
                    'menu_name' => 'Status',
                ),
                'hierarchical' => false,
                'public' => true,
                'show_in_rest' => true,
                'show_admin_column' => true,
                'rewrite' => array('slug' => 'org-status'),
                'meta_box_cb' => false // We'll create custom meta boxes
            ));
        }
        
        // Organization Size taxonomy
        if (!taxonomy_exists('org_size')) {
            register_taxonomy('org_size', 'organization', array(
                'labels' => array(
                    'name' => 'Organization Size',
                    'singular_name' => 'Size',
                    'search_items' => 'Search Sizes',
                    'all_items' => 'All Sizes',
                    'edit_item' => 'Edit Size',
                    'update_item' => 'Update Size',
                    'add_new_item' => 'Add New Size',
                    'new_item_name' => 'New Size Name',
                    'menu_name' => 'Size',
                ),
                'hierarchical' => false,
                'public' => true,
                'show_in_rest' => true,
                'show_admin_column' => true,
                'rewrite' => array('slug' => 'org-size'),
                'meta_box_cb' => false // We'll create custom meta boxes
            ));
        }
    }

    public function register_meta_fields() {
        // Register organization meta fields for REST API using register_rest_field
        register_rest_field('organization', 'org_instagram', array(
            'get_callback' => function($object) {
                return get_post_meta($object['id'], 'org_instagram', true);
            },
            'update_callback' => function($value, $object) {
                return update_post_meta($object->ID, 'org_instagram', $value);
            },
            'schema' => array(
                'type' => 'string',
                'context' => array('view', 'edit'),
            )
        ));

        // Register event meta fields for REST API using register_rest_field
        register_rest_field('event', 'external_id', array(
            'get_callback' => function($object) {
                return get_post_meta($object['id'], 'external_id', true);
            },
            'update_callback' => function($value, $object) {
                return update_post_meta($object->ID, 'external_id', $value);
            },
            'schema' => array(
                'type' => 'string',
                'context' => array('view', 'edit'),
            )
        ));
    }

    public function disable_gutenberg_for_events($use_block_editor, $post_type) {
        if ($post_type === 'event' || $post_type === 'organization') {
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
    
    public function custom_club_post_permalink($permalink, $post) {
        if ($post->post_type !== 'club_post') {
            return $permalink;
        }
        
        $organization_id = get_post_meta($post->ID, 'club_post_organization', true);
        if (!$organization_id) {
            return $permalink;
        }
        
        $organization = get_post($organization_id);
        if (!$organization || $organization->post_type !== 'organization') {
            return $permalink;
        }
        
        // Create URL structure: /clubs/organization-name/post-name/
        $permalink = home_url('/clubs/' . $organization->post_name . '/' . $post->post_name . '/');
        
        return $permalink;
    }
    
    public function add_club_post_rewrite_rules() {
        add_rewrite_rule(
            '^clubs/([^/]+)/([^/]+)/?$',
            'index.php?club_post_slug=$matches[2]&organization_slug=$matches[1]',
            'top'
        );
    }
    
    public function add_club_post_query_vars($vars) {
        $vars[] = 'club_post_slug';
        $vars[] = 'organization_slug';
        return $vars;
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
    
    public function restrict_organization_manager_posts($query) {
        global $pagenow;
        
        if (!is_admin() || !$query->is_main_query()) {
            return;
        }
        
        $current_user = wp_get_current_user();
        if (!in_array('organization_manager', $current_user->roles)) {
            return;
        }
        
        // Get user's assigned organization
        $assigned_org = get_user_meta($current_user->ID, 'assigned_organization', true);
        if (!$assigned_org) {
            return;
        }
        
        // Restrict organization posts to only the assigned organization
        if ($pagenow === 'edit.php' && isset($_GET['post_type']) && $_GET['post_type'] === 'organization') {
            $query->set('post__in', array($assigned_org));
        }
        
        // Restrict event posts to only events associated with their organization
        if (($pagenow === 'edit.php' && isset($_GET['post_type']) && $_GET['post_type'] === 'event') ||
            ($pagenow === 'edit.php' && !isset($_GET['post_type']))) {
            
            // Find events that belong to this organization
            $organization_events = get_posts(array(
                'post_type' => 'event',
                'numberposts' => -1,
                'meta_query' => array(
                    array(
                        'key' => 'organization_id',
                        'value' => $assigned_org,
                        'compare' => '='
                    )
                ),
                'fields' => 'ids'
            ));
            
            if (!empty($organization_events)) {
                $query->set('post__in', $organization_events);
            } else {
                // If no events found, return empty result
                $query->set('post__in', array(0));
            }
        }
        
        // Restrict club posts to only posts associated with their organization
        if ($pagenow === 'edit.php' && isset($_GET['post_type']) && $_GET['post_type'] === 'club_post') {
            // Find club posts that belong to this organization
            $organization_posts = get_posts(array(
                'post_type' => 'club_post',
                'numberposts' => -1,
                'meta_query' => array(
                    array(
                        'key' => 'club_post_organization',
                        'value' => $assigned_org,
                        'compare' => '='
                    )
                ),
                'fields' => 'ids'
            ));
            
            if (!empty($organization_posts)) {
                $query->set('post__in', $organization_posts);
            } else {
                // If no posts found, return empty result
                $query->set('post__in', array(0));
            }
        }
    }
    
    public function handle_club_post_query($query) {
        if (!$query->is_main_query() || is_admin()) {
            return;
        }
        
        $club_post_slug = get_query_var('club_post_slug');
        $organization_slug = get_query_var('organization_slug');
        
        if ($club_post_slug && $organization_slug) {
            // Find the organization by slug
            $organization = get_page_by_path($organization_slug, OBJECT, 'organization');
            if (!$organization) {
                return;
            }
            
            // Find the club post by slug and organization
            $club_posts = get_posts(array(
                'post_type' => 'club_post',
                'name' => $club_post_slug,
                'meta_query' => array(
                    array(
                        'key' => 'club_post_organization',
                        'value' => $organization->ID,
                        'compare' => '='
                    )
                ),
                'numberposts' => 1
            ));
            
            if (!empty($club_posts)) {
                $query->set('post_type', 'club_post');
                $query->set('p', $club_posts[0]->ID);
                $query->is_single = true;
                $query->is_singular = true;
            } else {
                $query->set_404();
            }
        }
    }
    
    public function modify_admin_menu_for_org_managers() {
        $current_user = wp_get_current_user();
        if (!in_array('organization_manager', $current_user->roles)) {
            return;
        }
        
        // Remove Posts menu
        remove_menu_page('edit.php');
        
        // Remove Pages menu
        remove_menu_page('edit.php?post_type=page');
        
        // Remove Comments menu
        remove_menu_page('edit-comments.php');
        
        // Remove Dashboard menu
        remove_menu_page('index.php');
        
        // Remove Media menu (they can still upload via events/organization forms)
        remove_menu_page('upload.php');
        
        // Remove Tools menu
        remove_menu_page('tools.php');
        
        // Remove ability to add new organizations
        remove_submenu_page('edit.php?post_type=organization', 'post-new.php?post_type=organization');
        
        // Also remove any "Add New" links that might appear elsewhere
        add_action('admin_head', function() {
            echo '<style>
                .page-title-action[href*="post-new.php?post_type=organization"] { display: none !important; }
                .add-new-h2[href*="post-new.php?post_type=organization"] { display: none !important; }
                a[href*="post-new.php?post_type=organization"] { display: none !important; }
            </style>';
        });
        
        // Modify menu labels for clarity
        global $submenu;
        if (isset($submenu['edit.php?post_type=organization'])) {
            foreach ($submenu['edit.php?post_type=organization'] as $key => $item) {
                if ($item[2] === 'edit.php?post_type=organization') {
                    $submenu['edit.php?post_type=organization'][$key][0] = 'My Organization';
                }
            }
        }
        
        if (isset($submenu['edit.php?post_type=event'])) {
            foreach ($submenu['edit.php?post_type=event'] as $key => $item) {
                if ($item[2] === 'edit.php?post_type=event') {
                    $submenu['edit.php?post_type=event'][$key][0] = 'My Organization Events';
                }
            }
        }
        
        // Modify club posts menu if accessible
        if (isset($submenu['edit.php?post_type=club_post'])) {
            foreach ($submenu['edit.php?post_type=club_post'] as $key => $item) {
                if ($item[2] === 'edit.php?post_type=club_post') {
                    $submenu['edit.php?post_type=club_post'][$key][0] = 'My Organization Posts';
                }
            }
        }
    }
    
    public function block_restricted_pages_for_org_managers() {
        $current_user = wp_get_current_user();
        if (!in_array('organization_manager', $current_user->roles)) {
            return;
        }
        
        global $pagenow;
        
        // List of restricted pages for organization managers
        $restricted_pages = array(
            'index.php',             // Dashboard
            'edit.php',              // Posts listing
            'post-new.php',          // New post
            'post.php',              // Edit post
            'edit-comments.php',     // Comments
            'comment.php',           // Edit comment
            'edit-tags.php',         // Tags
            'term.php',              // Edit term
            'nav-menus.php',         // Menus
            'widgets.php',           // Widgets
            'customize.php',         // Customizer
            'themes.php',            // Themes
            'plugins.php',           // Plugins
            'users.php',             // Users
            'user-new.php',          // Add user
            'profile.php',           // Profile (they can still edit their own)
            'options-general.php',   // Settings
            'options-writing.php',   // Writing settings
            'options-reading.php',   // Reading settings
            'options-discussion.php',// Discussion settings
            'options-media.php',     // Media settings
            'options-permalink.php', // Permalink settings
            'tools.php',             // Tools
            'import.php',            // Import
            'export.php',            // Export
            'upload.php'             // Media library
        );
        
        // Check if current page is restricted
        if (in_array($pagenow, $restricted_pages)) {
            // Dashboard is handled by redirect function, not blocked here
            if ($pagenow === 'index.php') {
                return;
            }
            
            // Allow editing their own profile
            if ($pagenow === 'profile.php' || ($pagenow === 'user-edit.php' && isset($_GET['user_id']) && $_GET['user_id'] == $current_user->ID)) {
                return;
            }
            
            // Allow editing posts if it's their organization's content
            if ($pagenow === 'post.php' && isset($_GET['post'])) {
                $post_id = intval($_GET['post']);
                $post = get_post($post_id);
                
                if ($post && ($post->post_type === 'organization' || $post->post_type === 'event' || $post->post_type === 'club_post')) {
                    // Let the capability system handle this
                    return;
                }
            }
            
            // Allow new posts if it's for their allowed post types
            if ($pagenow === 'post-new.php' && isset($_GET['post_type'])) {
                $post_type = $_GET['post_type'];
                if ($post_type === 'event' || $post_type === 'club_post') {
                    // Let the capability system handle this
                    return;
                }
            }
            
            // Allow edit.php for their allowed post types
            if ($pagenow === 'edit.php' && isset($_GET['post_type'])) {
                $post_type = $_GET['post_type'];
                if ($post_type === 'organization' || $post_type === 'event' || $post_type === 'club_post') {
                    // Let the capability system handle this
                    return;
                }
            }
            
            // Block access to regular posts (edit.php without post_type)
            if ($pagenow === 'edit.php' && !isset($_GET['post_type'])) {
                wp_die(__('Sorry, you are not allowed to access this page.'), 403);
            }
            
            // Block access to other restricted pages (but not edit.php, post.php, post-new.php as we handle those above)
            if (!in_array($pagenow, array('edit.php', 'post.php', 'post-new.php'))) {
                wp_die(__('Sorry, you are not allowed to access this page.'), 403);
            }
        }
        
        // Also block if they try to access regular posts directly
        if ($pagenow === 'post.php' && isset($_GET['post'])) {
            $post_id = intval($_GET['post']);
            $post = get_post($post_id);
            
            if ($post && $post->post_type === 'post') {
                wp_die(__('Sorry, you are not allowed to edit regular posts.'), 403);
            }
        }
        
        // Block creating regular posts
        if ($pagenow === 'post-new.php' && (!isset($_GET['post_type']) || $_GET['post_type'] === 'post')) {
            wp_die(__('Sorry, you are not allowed to create regular posts.'), 403);
        }
        
        // Block editing pages
        if ($pagenow === 'post.php' && isset($_GET['post'])) {
            $post_id = intval($_GET['post']);
            $post = get_post($post_id);
            
            if ($post && $post->post_type === 'page') {
                wp_die(__('Sorry, you are not allowed to edit pages.'), 403);
            }
        }
        
        // Block creating pages
        if ($pagenow === 'post-new.php' && isset($_GET['post_type']) && $_GET['post_type'] === 'page') {
            wp_die(__('Sorry, you are not allowed to create pages.'), 403);
        }
    }
    
    public function redirect_org_managers_from_dashboard() {
        $current_user = wp_get_current_user();
        if (!in_array('organization_manager', $current_user->roles)) {
            return;
        }
        
        global $pagenow;
        
        // Redirect from dashboard to their organization page
        if ($pagenow === 'index.php' || $pagenow === 'admin.php') {
            $assigned_org = get_user_meta($current_user->ID, 'assigned_organization', true);
            
            if ($assigned_org) {
                // Redirect to edit their organization
                wp_redirect(admin_url('post.php?post=' . $assigned_org . '&action=edit'));
                exit;
            } else {
                // If no organization assigned, redirect to events page
                wp_redirect(admin_url('edit.php?post_type=event'));
                exit;
            }
        }
    }
    
    public function remove_page_attributes_metabox() {
        // Remove the page attributes metabox from organization post type
        remove_meta_box('pageparentdiv', 'organization', 'side');
        remove_meta_box('pageparentdiv', 'organization', 'normal');
        remove_meta_box('pageparentdiv', 'organization', 'advanced');
        
        // Also remove any other page-related metaboxes that might appear
        remove_meta_box('page-attributes', 'organization', 'side');
        remove_meta_box('page-attributes', 'organization', 'normal');
        remove_meta_box('page-attributes', 'organization', 'advanced');
    }
    
    public function hide_post_attributes_css() {
        global $post_type;
        
        // Only apply to organization post type
        if ($post_type === 'organization') {
            ?>
            <style type="text/css">
                /* Hide any Post Attributes metaboxes that might still appear */
                #pageparentdiv,
                #page-attributes,
                .postbox[id*="pageparent"],
                .postbox[id*="page-attributes"],
                .page-template-selector,
                select[name="page_template"],
                #page_template,
                .page-template-label-wrapper,
                .post-attributes-label-wrapper.page-template-label-wrapper {
                    display: none !important;
                }
                
                /* Hide template-related fields in any form */
                tr.page-template,
                .form-field.page-template,
                input[name="_wp_page_template"],
                select[name="_wp_page_template"] {
                    display: none !important;
                }
                
                /* Hide any remaining page attribute elements */
                .components-panel__body[aria-label*="Page attributes"],
                .components-panel__body[aria-label*="Template"],
                .editor-page-attributes,
                .editor-post-template {
                    display: none !important;
                }
            </style>
            <?php
        }
    }
    
    public function prevent_template_changes($post_id) {
        // Only apply to organization post type
        if (get_post_type($post_id) !== 'organization') {
            return;
        }
        
        // Check if this is being called from our organization settings page
        $current_page = isset($_GET['page']) ? $_GET['page'] : '';
        $referer = wp_get_referer();
        
        // Allow changes from organization settings page or our AJAX call
        if ($current_page === 'organization-settings' || 
            (isset($_POST['action']) && $_POST['action'] === 'apply_template_to_all_orgs') ||
            (strpos($referer, 'organization-settings') !== false)) {
            return;
        }
        
        // Prevent any template changes from other sources
        if (isset($_POST['page_template']) || isset($_POST['_wp_page_template'])) {
            // Remove the POST data to prevent template changes
            unset($_POST['page_template']);
            unset($_POST['_wp_page_template']);
            
            // Preserve the existing template
            $existing_template = get_post_meta($post_id, '_wp_page_template', true);
            if ($existing_template) {
                update_post_meta($post_id, '_wp_page_template', $existing_template);
            }
        }
    }
}