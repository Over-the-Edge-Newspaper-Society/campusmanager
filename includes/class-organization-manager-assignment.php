<?php
/**
 * Handles organization manager user assignments
 */
class UNBC_Organization_Manager_Assignment {
    
    public function __construct() {
        add_action('show_user_profile', array($this, 'add_organization_assignment_field'));
        add_action('edit_user_profile', array($this, 'add_organization_assignment_field'));
        add_action('personal_options_update', array($this, 'save_organization_assignment_field'));
        add_action('edit_user_profile_update', array($this, 'save_organization_assignment_field'));
    }
    
    /**
     * Add organization assignment field to user profile
     */
    public function add_organization_assignment_field($user) {
        if (!current_user_can('manage_options')) {
            return;
        }
        
        $assigned_org = get_user_meta($user->ID, 'assigned_organization', true);
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'numberposts' => -1,
            'post_status' => 'publish'
        ));
        
        ?>
        <h3>Organization Manager Settings</h3>
        <table class="form-table">
            <tr>
                <th><label for="assigned_organization">Assigned Organization</label></th>
                <td>
                    <select name="assigned_organization" id="assigned_organization">
                        <option value="">Select Organization (None)</option>
                        <?php foreach ($organizations as $org): ?>
                            <option value="<?php echo $org->ID; ?>" <?php selected($assigned_org, $org->ID); ?>>
                                <?php echo esc_html($org->post_title); ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                    <p class="description">
                        If this user has the "Organization Manager" role, they will only be able to edit this organization and create events under it.
                    </p>
                </td>
            </tr>
        </table>
        <?php
    }
    
    /**
     * Save organization assignment field
     */
    public function save_organization_assignment_field($user_id) {
        if (!current_user_can('manage_options')) {
            return;
        }
        
        if (isset($_POST['assigned_organization'])) {
            update_user_meta($user_id, 'assigned_organization', sanitize_text_field($_POST['assigned_organization']));
        }
    }
    
    /**
     * Get user's assigned organization
     */
    public static function get_user_organization($user_id) {
        return get_user_meta($user_id, 'assigned_organization', true);
    }
    
    /**
     * Check if user is organization manager
     */
    public static function is_organization_manager($user_id = null) {
        if (!$user_id) {
            $user_id = get_current_user_id();
        }
        
        $user = get_user_by('id', $user_id);
        return $user && in_array('organization_manager', $user->roles);
    }
    
    /**
     * Get all organization managers
     */
    public static function get_organization_managers() {
        return get_users(array(
            'role' => 'organization_manager',
            'orderby' => 'display_name'
        ));
    }
    
    /**
     * Assign user as organization manager
     */
    public static function assign_manager_to_organization($user_id, $organization_id) {
        $user = get_user_by('id', $user_id);
        if (!$user) {
            return new WP_Error('invalid_user', 'Invalid user ID');
        }
        
        // Add organization manager role
        $user->set_role('organization_manager');
        
        // Save organization assignment
        update_user_meta($user_id, 'assigned_organization', $organization_id);
        
        return true;
    }
    
    /**
     * Remove manager assignment
     */
    public static function remove_manager_assignment($user_id) {
        $user = get_user_by('id', $user_id);
        if (!$user) {
            return new WP_Error('invalid_user', 'Invalid user ID');
        }
        
        // Remove role
        $user->remove_role('organization_manager');
        $user->add_role('subscriber');
        
        // Remove organization assignment
        delete_user_meta($user_id, 'assigned_organization');
        
        return true;
    }
}