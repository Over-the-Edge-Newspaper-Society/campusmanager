<?php
/**
 * Plugin Name: UNBC Campus Manager
 * Description: Comprehensive management system for UNBC campus events and organizations
 * Version: 2.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Events_Plugin {
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('rest_api_init', array($this, 'register_rest_routes'));
        
        // Include files immediately
        $this->include_files();
        
        // Add admin notice to confirm plugin is loaded (for debugging)
        add_action('admin_notices', array($this, 'debug_admin_notice'));
    }
    
    public function debug_admin_notice() {
        if (current_user_can('manage_options')) {
            // Ensure we're checking after init has run
            if (!did_action('init')) {
                return;
            }
            
            // Check if post types exist (regardless of public setting)
            $event_exists = post_type_exists('unbc_event');
            $org_exists = post_type_exists('organization');
            
            if ($event_exists && $org_exists) {
                echo '<div class="notice notice-success"><p>UNBC Campus Manager: Post types available (Events: ' . ($event_exists ? 'Yes' : 'No') . ', Organizations: ' . ($org_exists ? 'Yes' : 'No') . ')</p></div>';
            } else {
                echo '<div class="notice notice-error"><p>UNBC Campus Manager: Post types not found. Events: ' . ($event_exists ? 'Yes' : 'No') . ', Organizations: ' . ($org_exists ? 'Yes' : 'No') . '</p></div>';
            }
        }
    }

    public function init() {
        new UNBC_Events_Post_Types();
        new UNBC_Events_Meta_Boxes();
        
        // Add custom rewrite rules for organizations/departments
        add_action('init', array($this, 'add_rewrite_rules'));
        
        // Force menu icon update
        add_action('admin_menu', array($this, 'update_menu_icons'), 999);
    }
    
    public function update_menu_icons() {
        global $menu;
        
        // Update Events menu icon
        foreach ($menu as $key => $item) {
            if (isset($item[5]) && $item[5] === 'menu-posts-unbc_event') {
                $menu[$key][6] = 'dashicons-calendar-alt';
            }
            if (isset($item[5]) && $item[5] === 'menu-posts-organization') {
                $menu[$key][6] = 'dashicons-groups';
            }
        }
    }
    
    public function add_rewrite_rules() {
        // Add rewrite rule for /organization/name
        add_rewrite_rule(
            '^organization/([^/]+)/?$',
            'index.php?post_type=organization&name=$matches[1]',
            'top'
        );
    }

    public function register_rest_routes() {
        new UNBC_Events_REST_API();
    }

    private function include_files() {
        $files_to_include = array(
            'includes/class-post-types.php',
            'includes/class-rest-api.php',
            'includes/class-meta-boxes.php'
        );
        
        foreach ($files_to_include as $file) {
            $file_path = plugin_dir_path(__FILE__) . $file;
            if (file_exists($file_path)) {
                require_once $file_path;
            } else {
                // Log error if file doesn't exist
                error_log('UNBC Events Plugin: Missing file - ' . $file_path);
            }
        }
    }
}

// Initialize plugin
$unbc_events_plugin = new UNBC_Events_Plugin();

// Plugin activation hook
register_activation_hook(__FILE__, 'unbc_events_plugin_activate');

function unbc_events_plugin_activate() {
    // Ensure our post types are registered
    require_once plugin_dir_path(__FILE__) . 'includes/class-post-types.php';
    $post_types = new UNBC_Events_Post_Types();
    $post_types->register_post_types();
    $post_types->register_taxonomies();
    
    // Flush rewrite rules
    flush_rewrite_rules();
}