<?php

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Events_User_Roles {
    const ORGANIZATION_MANAGER_ROLE = 'organization_manager';

    public function __construct($register_hooks = true) {
        if ($register_hooks) {
            add_filter('map_meta_cap', array($this, 'map_organization_edit_capability'), 10, 4);
        }
    }

    public static function sync_roles() {
        self::sync_organization_manager_role();
        self::sync_administrator_capabilities();
    }

    public function set_user_organization($user_id, $organization_id) {
        update_user_meta($user_id, 'assigned_organization', $organization_id);
    }

    public function get_user_organization($user_id) {
        return get_user_meta($user_id, 'assigned_organization', true);
    }

    public function map_organization_edit_capability($caps, $cap, $user_id, $args) {
        static $checking = false;
        if ($checking) {
            return $caps;
        }

        if ($cap === 'edit_post' && isset($args[0])) {
            $post_id = $args[0];

            $checking = true;
            $post = get_post($post_id);
            $checking = false;

            if ($post && ($post->post_type === 'organization' || $post->post_type === 'event')) {
                $user = get_user_by('id', $user_id);

                if ($user && !empty($user->roles) && in_array(self::ORGANIZATION_MANAGER_ROLE, $user->roles, true)) {
                    $assigned_org = $this->get_user_organization($user_id);

                    if ($post->post_type === 'organization') {
                        if ($assigned_org && $assigned_org == $post_id) {
                            return array('edit_organizations');
                        }

                        return array('do_not_allow');
                    }

                    if ($post_id == 0 && $assigned_org) {
                        return array('edit_events');
                    }

                    $event_org_id = get_post_meta($post_id, 'organization_id', true);
                    if ($assigned_org && ($assigned_org == $event_org_id || empty($event_org_id))) {
                        return array('edit_events');
                    }

                    return array('do_not_allow');
                }
            }
        }

        if ($cap === 'create_posts' || $cap === 'edit_posts') {
            $user = get_user_by('id', $user_id);
            if ($user && !empty($user->roles) && in_array(self::ORGANIZATION_MANAGER_ROLE, $user->roles, true)) {
                global $pagenow, $typenow;
                if (
                    ($pagenow === 'post-new.php' && $typenow === 'event') ||
                    (isset($_GET['post_type']) && $_GET['post_type'] === 'event')
                ) {
                    return array('edit_events');
                }
            }
        }

        if ($cap === 'delete_post' && isset($args[0])) {
            $post_id = $args[0];

            $checking = true;
            $post = get_post($post_id);
            $checking = false;

            if ($post && $post->post_type === 'event') {
                $user = get_user_by('id', $user_id);

                if ($user && is_array($user->roles) && in_array(self::ORGANIZATION_MANAGER_ROLE, $user->roles, true)) {
                    $assigned_org = $this->get_user_organization($user_id);
                    $event_org_id = get_post_meta($post_id, 'organization_id', true);

                    if ($assigned_org && $assigned_org == $event_org_id) {
                        return array('delete_events');
                    }

                    return array('do_not_allow');
                }
            }
        }

        return $caps;
    }

    public function can_user_edit_organization_field($user_id, $field_name) {
        $user = get_user_by('id', $user_id);

        if (!$user || !is_array($user->roles) || !in_array(self::ORGANIZATION_MANAGER_ROLE, $user->roles, true)) {
            return true;
        }

        return !in_array($field_name, $this->get_organization_manager_restricted_fields(), true);
    }

    public function get_organization_manager_allowed_fields() {
        return array_merge(
            UNBC_Organization_Fields::get_org_manager_editable_meta_keys(),
            array(
                'post_content',
                'post_excerpt',
                '_thumbnail_id',
            )
        );
    }

    public function get_organization_manager_restricted_fields() {
        return array_merge(
            UNBC_Organization_Fields::get_org_manager_restricted_meta_keys(),
            array(
                'post_name',
                'post_status',
                'post_title',
            )
        );
    }

    private static function sync_organization_manager_role() {
        $role = get_role(self::ORGANIZATION_MANAGER_ROLE);
        if (!$role) {
            add_role(self::ORGANIZATION_MANAGER_ROLE, 'Organization Manager', array());
            $role = get_role(self::ORGANIZATION_MANAGER_ROLE);
        }

        if (!$role) {
            return;
        }

        foreach (self::get_organization_manager_capabilities() as $cap => $grant) {
            self::set_role_capability($role, $cap, $grant);
        }
    }

    private static function sync_administrator_capabilities() {
        $role = get_role('administrator');
        if (!$role) {
            return;
        }

        foreach (self::get_administrator_capabilities() as $cap => $grant) {
            self::set_role_capability($role, $cap, $grant);
        }
    }

    private static function set_role_capability($role, $cap, $grant) {
        if ($grant) {
            $role->add_cap($cap);
            return;
        }

        $role->remove_cap($cap);
    }

    private static function get_organization_manager_capabilities() {
        return array(
            'read' => true,
            'upload_files' => true,
            'edit_posts' => false,
            'delete_posts' => false,
            'publish_posts' => false,
            'edit_others_posts' => false,
            'delete_others_posts' => false,
            'edit_published_posts' => false,
            'delete_published_posts' => false,
            'moderate_comments' => false,
            'edit_comment' => false,
            'edit_organizations' => true,
            'edit_published_organizations' => true,
            'publish_organizations' => true,
            'read_organization' => true,
            'delete_organizations' => false,
            'edit_others_organizations' => false,
            'delete_published_organizations' => false,
            'delete_others_organizations' => false,
            'manage_organization_terms' => false,
            'edit_organization_terms' => false,
            'delete_organization_terms' => false,
            'assign_organization_terms' => false,
            'edit_events' => true,
            'edit_published_events' => true,
            'publish_events' => true,
            'delete_events' => true,
            'delete_published_events' => true,
            'read_event' => true,
            'edit_others_events' => false,
            'delete_others_events' => false,
            'manage_event_terms' => true,
            'edit_event_terms' => true,
            'delete_event_terms' => false,
            'assign_event_terms' => true,
            'edit_staff_profiles' => false,
            'edit_others_staff_profiles' => false,
            'publish_staff_profiles' => false,
            'read_staff_profile' => false,
            'delete_staff_profiles' => false,
            'delete_others_staff_profiles' => false,
            'delete_published_staff_profiles' => false,
            'edit_published_staff_profiles' => false,
        );
    }

    private static function get_administrator_capabilities() {
        return array_fill_keys(array(
            'edit_events',
            'edit_others_events',
            'publish_events',
            'read_event',
            'delete_events',
            'delete_others_events',
            'delete_published_events',
            'edit_published_events',
            'manage_event_terms',
            'edit_event_terms',
            'delete_event_terms',
            'assign_event_terms',
            'edit_organizations',
            'edit_others_organizations',
            'publish_organizations',
            'read_organization',
            'delete_organizations',
            'delete_others_organizations',
            'delete_published_organizations',
            'edit_published_organizations',
            'manage_organization_terms',
            'edit_organization_terms',
            'delete_organization_terms',
            'assign_organization_terms',
        ), true);
    }
}
