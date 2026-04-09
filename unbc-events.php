<?php
/**
 * Plugin Name: Campus Manager
 * Description: Comprehensive management system for campus events and organizations
 * Version: 2.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!defined('UNBC_EVENTS_PLUGIN_VERSION')) {
    define('UNBC_EVENTS_PLUGIN_VERSION', '2.0.0');
}

class UNBC_Events_Plugin {
    public function __construct() {
        $this->include_files();

        add_action('init', array($this, 'maybe_upgrade'), 5);
        add_action('init', array($this, 'init'));

        new UNBC_Events_REST_API();
    }

    public function init() {
        new UNBC_Events_Post_Types();
        new UNBC_Events_Meta_Boxes();
        new UNBC_Events_User_Roles();
        new UNBC_Event_Series(); // NEW: Initialize event series manager

        // Use refactored organization manager classes
        new UNBC_Organization_Manager_Admin_Refactored();
        new UNBC_Organization_Manager_Dashboard();

        new UNBC_Events_Blocks();
        new UNBC_Calendar_Blocks();
        new UNBC_Events_Settings();
        new UNBC_Events_Admin_Columns();

        // Add custom rewrite rules for organizations/departments
        add_action('init', array($this, 'add_rewrite_rules'));

        // Force menu icon update
        add_action('admin_menu', array($this, 'update_menu_icons'), 999);
    }

    public function maybe_upgrade() {
        $stored_version = get_option('unbc_events_plugin_version', '');
        if ($stored_version === UNBC_EVENTS_PLUGIN_VERSION) {
            return;
        }

        self::run_install_or_upgrade();
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
            'includes/class-organization-fields.php',
            'includes/class-organization-context.php',
            'includes/class-event-import-service.php',
            'includes/class-rest-organizations-controller.php',
            'includes/class-post-types.php',
            'includes/class-rest-api.php',
            'includes/class-meta-boxes.php',
            'includes/class-user-roles.php',
            'includes/class-event-series.php', // NEW: Event series and occurrences
            // Include refactored classes
            'includes/class-organization-manager-assignment.php',
            'includes/class-organization-import-export.php',
            'includes/class-organization-template-manager.php',
            'includes/class-organization-manager-admin-refactored.php',
            'includes/class-organization-manager-dashboard.php',
            'includes/class-blocks.php',
            'includes/class-calendar-blocks.php',
            'includes/class-settings.php',
            'includes/class-category-colors.php',
            'includes/class-event-importer.php',
            'includes/class-event-deduplicator.php',
            'includes/class-events-admin-columns.php'
        );

        foreach ($files_to_include as $file) {
            $file_path = plugin_dir_path(__FILE__) . $file;
            if (file_exists($file_path)) {
                require_once $file_path;
            }
        }
    }

    public static function run_install_or_upgrade() {
        if (class_exists('UNBC_Events_Post_Types')) {
            $post_types = new UNBC_Events_Post_Types();
            $post_types->register_post_types();
            $post_types->register_taxonomies();
        }

        if (class_exists('UNBC_Event_Series')) {
            UNBC_Event_Series::create_tables();
        }

        if (class_exists('UNBC_Events_User_Roles')) {
            UNBC_Events_User_Roles::sync_roles();
        }

        flush_rewrite_rules();
        update_option('unbc_events_plugin_version', UNBC_EVENTS_PLUGIN_VERSION);
    }
}

// Initialize plugin
$unbc_events_plugin = new UNBC_Events_Plugin();

// Plugin activation hook
register_activation_hook(__FILE__, 'unbc_events_plugin_activate');

function unbc_events_plugin_activate() {
    UNBC_Events_Plugin::run_install_or_upgrade();
}
