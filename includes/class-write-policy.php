<?php
/** Shared authorization for REST, imports and WordPress form writes. */
class UNBC_Write_Policy {
    public function __construct() {
        add_filter('rest_pre_insert_event', array($this, 'rest_event'), 5, 2);
        add_filter('rest_pre_insert_organization', array($this, 'rest_organization'), 5, 2);
        add_filter('wp_insert_post_data', array($this, 'protect_organization_fields'), 10, 2);
        add_filter('wp_insert_post_empty_content', array($this, 'deny_manager_organization_creation'), 10, 2);
        add_filter('add_post_metadata', array($this, 'protect_meta'), 10, 5);
        add_filter('update_post_metadata', array($this, 'protect_meta'), 10, 5);
        add_filter('delete_post_metadata', array($this, 'protect_meta'), 10, 5);
        add_action('save_post_event', array($this, 'assign_manager_event'), 20, 2);
    }

    public static function manager_org() {
        $user = wp_get_current_user();
        if (!in_array('organization_manager', (array) $user->roles, true)) return null;
        return absint(get_user_meta($user->ID, 'assigned_organization', true));
    }

    public static function event($post_id, $status, $organization_id = null, $trusted_key = false) {
        if (!in_array($status, array('draft', 'pending', 'publish', 'future', 'private'), true)) {
            return new WP_Error('invalid_event_status', 'Unsupported event status.', array('status' => 400));
        }
        // The administrator-provisioned legacy API key is an explicit trusted
        // integration policy. Application passwords always use their user's caps.
        if (!$trusted_key) {
            if (!$post_id && !current_user_can('edit_events')) return self::forbidden();
            if ($post_id && !current_user_can('edit_post', $post_id)) return self::forbidden();
            if (in_array($status, array('publish', 'future', 'private'), true) && !current_user_can('publish_events')) return self::forbidden();
            $assigned = self::manager_org();
            if ($assigned !== null) {
                if (!$assigned || ($organization_id !== null && absint($organization_id) !== $assigned)) return self::forbidden();
                return $assigned;
            }
        }
        if ($organization_id !== null && absint($organization_id) && get_post_type(absint($organization_id)) !== 'organization') {
            return new WP_Error('invalid_organization', 'Organization does not exist.', array('status' => 400));
        }
        return $organization_id === null ? null : absint($organization_id);
    }

    public static function forbidden() {
        return new WP_Error('rest_forbidden', 'You do not have permission for this event or organization change.', array('status' => 403));
    }

    public function rest_event($prepared, $request) {
        if (is_wp_error($prepared)) return $prepared;
        $id = absint($request->get_param('id'));
        $meta = $request->get_param('event_meta') ?: array();
        $organization = $meta['organization_id'] ?? $meta['organization'] ?? null;
        $policy = self::event($id, $prepared->post_status ?? ($id ? get_post_status($id) : 'draft'), $organization);
        return is_wp_error($policy) ? $policy : $prepared;
    }

    public function rest_organization($prepared, $request) {
        if (is_wp_error($prepared) || self::manager_org() === null) return $prepared;
        $id = absint($request->get_param('id'));
        if (!$id || !current_user_can('edit_post', $id)) return self::forbidden();
        $original = get_post($id);
        foreach (array('post_title', 'post_name', 'post_status', 'post_author') as $field) {
            if (isset($prepared->$field) && (string) $prepared->$field !== (string) $original->$field) return self::forbidden();
        }
        $meta = $request->get_param('meta') ?: array();
        foreach (UNBC_Organization_Fields::get_org_manager_restricted_meta_keys() as $key) {
            if ($request->has_param($key) || array_key_exists($key, $meta)) return self::forbidden();
        }
        return $prepared;
    }

    public function protect_organization_fields($data, $postarr) {
        if ($data['post_type'] === 'organization' && self::manager_org() !== null && !empty($postarr['ID'])) {
            $original = get_post($postarr['ID']);
            if ($original) foreach (array('post_title', 'post_name', 'post_status', 'post_author') as $key) $data[$key] = $original->$key;
        }
        return $data;
    }

    public function deny_manager_organization_creation($empty, $postarr) {
        return $empty || (($postarr['post_type'] ?? '') === 'organization' && empty($postarr['ID']) && self::manager_org() !== null);
    }

    public function protect_meta($check, $post_id, $key, $value, $unused) {
        $assigned = self::manager_org();
        if ($assigned === null) return $check;
        $type = get_post_type($post_id);
        if ($type === 'organization' && in_array($key, UNBC_Organization_Fields::get_org_manager_restricted_meta_keys(), true)) return false;
        if ($type === 'event' && $key === 'organization_id' && (!$assigned || absint($value) !== $assigned || current_filter() === 'delete_post_metadata')) return false;
        return $check;
    }

    public function assign_manager_event($post_id, $post) {
        $assigned = self::manager_org();
        if ($assigned && current_user_can('edit_post', $post_id)) update_post_meta($post_id, 'organization_id', $assigned);
    }
}
