<?php
/**
 * Plugin Name: Campus Manager
 * Description: Comprehensive management system for campus events and organizations
 * Version: 2.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Events_Plugin {
    public function __construct() {
        add_action('init', array($this, 'init'));
        
        // Include files immediately
        $this->include_files();
        
        // REMOVED: Minimal organization settings page override
        
        // Initialize REST API immediately after including files
        new UNBC_Events_REST_API();
    }

    public function init() {
        new UNBC_Events_Post_Types();
        new UNBC_Events_Meta_Boxes();
        new UNBC_Events_User_Roles();
        
        // Use refactored organization manager classes
        new UNBC_Organization_Manager_Admin_Refactored();
        new UNBC_Organization_Manager_Dashboard();
        
        new UNBC_Events_Blocks();
        new UNBC_Calendar_Blocks();
        new UNBC_Events_Settings();
        
        // Add custom rewrite rules for organizations/departments
        add_action('init', array($this, 'add_rewrite_rules'));
        
        // Force menu icon update
        add_action('admin_menu', array($this, 'update_menu_icons'), 999);
    }
    
    public function update_menu_icons() {
        global $menu;
        
        // Update Events menu icon
        foreach ($menu as $key => $item) {
            if (isset($item[5]) && $item[5] === 'menu-posts-event') {
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


    private function include_files() {
        $files_to_include = array(
            'includes/class-post-types.php',
            'includes/class-rest-api.php',
            'includes/class-meta-boxes.php',
            'includes/class-user-roles.php',
            // Include refactored classes
            'includes/class-organization-manager-assignment.php',
            'includes/class-organization-import-export.php',
            'includes/class-organization-template-manager.php',
            'includes/class-organization-manager-admin-refactored.php',
            'includes/class-organization-manager-dashboard.php',
            'includes/class-blocks.php',
            'includes/class-calendar-blocks.php',
            'includes/class-settings.php'
        );
        
        foreach ($files_to_include as $file) {
            $file_path = plugin_dir_path(__FILE__) . $file;
            if (file_exists($file_path)) {
                require_once $file_path;
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