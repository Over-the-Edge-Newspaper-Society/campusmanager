<?php
class UNBC_Organization_Manager_Admin {
    
    public function __construct() {
        add_action('show_user_profile', array($this, 'add_organization_assignment_field'));
        add_action('edit_user_profile', array($this, 'add_organization_assignment_field'));
        add_action('personal_options_update', array($this, 'save_organization_assignment_field'));
        add_action('edit_user_profile_update', array($this, 'save_organization_assignment_field'));
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'register_settings'));
        add_action('wp_ajax_export_organization_templates', array($this, 'ajax_export_templates'));
        add_action('wp_ajax_apply_template_to_all_orgs', array($this, 'apply_template_to_all_organizations'));
    }
    
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
    
    public function save_organization_assignment_field($user_id) {
        if (!current_user_can('manage_options')) {
            return;
        }
        
        if (isset($_POST['assigned_organization'])) {
            update_user_meta($user_id, 'assigned_organization', sanitize_text_field($_POST['assigned_organization']));
        }
    }
    
    public function add_admin_menu() {
        add_submenu_page(
            'edit.php?post_type=organization',
            'Organization Managers',
            'Managers',
            'manage_options',
            'organization-managers',
            array($this, 'organization_managers_page')
        );
        
        add_submenu_page(
            'edit.php?post_type=organization',
            'Organization Settings',
            'Settings',
            'manage_options',
            'organization-settings',
            array($this, 'organization_settings_page')
        );
        
        add_submenu_page(
            'edit.php?post_type=organization',
            'Club Posts',
            'Club Posts',
            'edit_club_posts',
            'edit.php?post_type=club_post'
        );
    }
    
    public function organization_managers_page() {
        if (isset($_POST['create_manager']) && wp_verify_nonce($_POST['org_manager_nonce'], 'create_org_manager')) {
            $this->handle_create_manager();
        }
        
        if (isset($_POST['assign_existing_user']) && wp_verify_nonce($_POST['assign_user_nonce'], 'assign_existing_user')) {
            $this->handle_assign_existing_user();
        }
        
        if (isset($_POST['remove_manager']) && wp_verify_nonce($_POST['remove_manager_nonce'], 'remove_org_manager')) {
            $this->handle_remove_manager();
        }
        
        // Get all organization managers
        $org_managers = get_users(array(
            'role' => 'organization_manager'
        ));
        
        // Get all users (excluding organization managers for the assignment dropdown)
        $all_users = get_users(array(
            'role__not_in' => array('organization_manager')
        ));
        
        // Get all organizations
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'numberposts' => -1,
            'post_status' => 'publish'
        ));
        
        ?>
        <div class="wrap">
            <h1>Organization Managers</h1>
            
            <?php if (empty($organizations)): ?>
            <div class="notice notice-warning">
                <p><strong>No organizations found!</strong> You need to create organizations first before you can assign managers. 
                <a href="<?php echo admin_url('post-new.php?post_type=organization'); ?>">Create an organization</a> or 
                <a href="<?php echo admin_url('edit.php?post_type=organization'); ?>">view existing organizations</a>.</p>
            </div>
            <?php endif; ?>
            
            <style>
            .org-manager-forms {
                display: flex;
                gap: 20px;
                margin-bottom: 30px;
            }
            .org-manager-forms .card {
                flex: 1;
                margin: 0;
            }
            @media (max-width: 782px) {
                .org-manager-forms {
                    flex-direction: column;
                }
            }
            </style>
            
            <div class="org-manager-forms">
                <div class="card">
                    <h2>Assign Existing User as Organization Manager</h2>
                <form method="post" action="">
                    <?php wp_nonce_field('assign_existing_user', 'assign_user_nonce'); ?>
                    <table class="form-table">
                        <tr>
                            <th><label for="existing_user">Select User</label></th>
                            <td>
                                <select name="existing_user" id="existing_user" required>
                                    <option value="">Select a user</option>
                                    <?php foreach ($all_users as $user): ?>
                                        <option value="<?php echo $user->ID; ?>">
                                            <?php echo esc_html($user->display_name . ' (' . $user->user_login . ') - ' . $user->user_email); ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                                <p class="description">Select an existing user to convert to Organization Manager role.</p>
                            </td>
                        </tr>
                        <tr>
                            <th><label for="assign_organization">Assigned Organization</label></th>
                            <td>
                                <select name="assign_organization" id="assign_organization" required>
                                    <option value="">Select Organization</option>
                                    <?php foreach ($organizations as $org): ?>
                                        <option value="<?php echo $org->ID; ?>"><?php echo esc_html($org->post_title); ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <?php submit_button('Assign as Organization Manager', 'primary', 'assign_existing_user'); ?>
                </form>
                </div>
                
                <div class="card">
                    <h2>Create New Organization Manager</h2>
                <form method="post" action="">
                    <?php wp_nonce_field('create_org_manager', 'org_manager_nonce'); ?>
                    <table class="form-table">
                        <tr>
                            <th><label for="username">Username</label></th>
                            <td><input type="text" name="username" id="username" class="regular-text" required /></td>
                        </tr>
                        <tr>
                            <th><label for="email">Email</label></th>
                            <td><input type="email" name="email" id="email" class="regular-text" required /></td>
                        </tr>
                        <tr>
                            <th><label for="first_name">First Name</label></th>
                            <td><input type="text" name="first_name" id="first_name" class="regular-text" /></td>
                        </tr>
                        <tr>
                            <th><label for="last_name">Last Name</label></th>
                            <td><input type="text" name="last_name" id="last_name" class="regular-text" /></td>
                        </tr>
                        <tr>
                            <th><label for="organization">Assigned Organization</label></th>
                            <td>
                                <select name="organization" id="organization" required>
                                    <option value="">Select Organization</option>
                                    <?php foreach ($organizations as $org): ?>
                                        <option value="<?php echo $org->ID; ?>"><?php echo esc_html($org->post_title); ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <?php submit_button('Create Organization Manager', 'primary', 'create_manager'); ?>
                </form>
                </div>
            </div>
            
            <h2>Existing Organization Managers</h2>
            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Assigned Organization</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (empty($org_managers)): ?>
                        <tr>
                            <td colspan="4">No organization managers found.</td>
                        </tr>
                    <?php else: ?>
                        <?php foreach ($org_managers as $manager): ?>
                            <?php
                            $assigned_org_id = get_user_meta($manager->ID, 'assigned_organization', true);
                            $assigned_org = $assigned_org_id ? get_post($assigned_org_id) : null;
                            ?>
                            <tr>
                                <td>
                                    <strong><?php echo esc_html($manager->display_name); ?></strong><br>
                                    <small><?php echo esc_html($manager->user_login); ?></small>
                                </td>
                                <td><?php echo esc_html($manager->user_email); ?></td>
                                <td>
                                    <?php if ($assigned_org): ?>
                                        <a href="<?php echo get_edit_post_link($assigned_org->ID); ?>">
                                            <?php echo esc_html($assigned_org->post_title); ?>
                                        </a>
                                    <?php else: ?>
                                        <em>No organization assigned</em>
                                    <?php endif; ?>
                                </td>
                                <td>
                                    <a href="<?php echo get_edit_user_link($manager->ID); ?>" class="button button-small">Edit User</a>
                                    <form method="post" style="display:inline-block; margin-left:10px;" onsubmit="return confirm('Are you sure you want to remove organization manager role from this user?');">
                                        <?php wp_nonce_field('remove_org_manager', 'remove_manager_nonce'); ?>
                                        <input type="hidden" name="remove_manager_id" value="<?php echo $manager->ID; ?>" />
                                        <input type="submit" name="remove_manager" value="Remove Role" class="button button-small button-link-delete" />
                                    </form>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
        <?php
    }
    
    public function organization_settings_page() {
        // Handle form submission
        if (isset($_POST['submit']) && wp_verify_nonce($_POST['_wpnonce'], 'organization_settings')) {
            update_option('campus_manager_default_org_template', sanitize_text_field($_POST['campus_manager_default_org_template']));
            echo '<div class="notice notice-success"><p>Settings saved successfully!</p></div>';
        }
        
        
        // Handle template import
        if (isset($_POST['import_templates']) && wp_verify_nonce($_POST['import_nonce'], 'import_templates')) {
            $this->handle_template_import();
        }
        
        $current_template = get_option('campus_manager_default_org_template', 'default');
        $templates = $this->get_available_templates();
        
        ?>
        <div class="wrap">
            <h1>Organization Settings</h1>
            
            <div class="card">
                <h2>Organization Templates</h2>
                <p>Configure template settings for organizations and clubs.</p>
                
                <form method="post" action="">
                    <?php wp_nonce_field('organization_settings'); ?>
                    
                    <table class="form-table">
                        <tr>
                            <th scope="row">
                                <label for="campus_manager_default_org_template">Default Template</label>
                            </th>
                            <td>
                                <select name="campus_manager_default_org_template" id="campus_manager_default_org_template" class="regular-text">
                                    <?php foreach ($templates as $template_file => $template_name): ?>
                                        <option value="<?php echo esc_attr($template_file); ?>" <?php selected($current_template, $template_file); ?>>
                                            <?php echo esc_html($template_name); ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                                <p class="description">Select the default template to apply to all organization pages.</p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Actions</th>
                            <td>
                                <button type="button" id="apply-template-to-all" class="button button-secondary">Apply Template to All Organizations</button>
                                <span id="apply-template-status" style="margin-left: 10px;"></span>
                            </td>
                        </tr>
                    </table>
                    
                    <?php submit_button('Save Template Settings'); ?>
                </form>
            </div>
            
            <div class="card">
                <h2>Template Import/Export</h2>
                <p>Export current template settings or import from another site.</p>
                
                <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 300px;">
                        <h3>Export Templates</h3>
                        <p>Select which organizations and templates to export for transfer to another site.</p>
                        
                        <div id="export-options">
                            <p><strong>What to export:</strong></p>
                            <label style="display: block; margin-bottom: 10px;">
                                <input type="checkbox" id="export_default_template" checked> Default template setting
                            </label>
                            <label style="display: block; margin-bottom: 10px;">
                                <input type="checkbox" id="export_block_templates" checked> Block templates from theme
                            </label>
                            
                            <p><strong>Templates to export:</strong></p>
                            <div style="max-height: 200px; overflow-y: auto; border: 1px solid #ddd; padding: 10px; margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 5px;">
                                    <input type="checkbox" id="select_all_templates" onchange="toggleAllTemplates(this)"> <strong>Select All Templates</strong>
                                </label>
                                <hr style="margin: 10px 0;">
                                <?php
                                // Get all available templates
                                $available_templates = $this->get_available_templates();
                                
                                // Get count of organizations using each template
                                $template_usage = array();
                                $all_organizations = get_posts(array(
                                    'post_type' => 'organization',
                                    'post_status' => 'any',
                                    'numberposts' => -1,
                                ));
                                
                                foreach ($all_organizations as $org) {
                                    $template = get_post_meta($org->ID, '_wp_page_template', true);
                                    if (empty($template)) {
                                        $template = 'default';
                                    }
                                    if (!isset($template_usage[$template])) {
                                        $template_usage[$template] = array('count' => 0, 'orgs' => array());
                                    }
                                    $template_usage[$template]['count']++;
                                    $template_usage[$template]['orgs'][] = $org->post_title;
                                }
                                
                                foreach ($available_templates as $template_file => $template_name):
                                    $usage_count = isset($template_usage[$template_file]) ? $template_usage[$template_file]['count'] : 0;
                                    $org_names = isset($template_usage[$template_file]) ? $template_usage[$template_file]['orgs'] : array();
                                ?>
                                <label style="display: block; margin-bottom: 8px;">
                                    <input type="checkbox" class="template-checkbox" value="<?php echo esc_attr($template_file); ?>" 
                                           <?php echo ($usage_count > 0) ? 'checked' : ''; ?>>
                                    <strong><?php echo esc_html($template_name); ?></strong>
                                    <?php if ($usage_count > 0): ?>
                                        <small style="color: #0073aa;"> (<?php echo $usage_count; ?> organization<?php echo $usage_count > 1 ? 's' : ''; ?>)</small>
                                        <br><small style="color: #666; margin-left: 20px;">
                                            Used by: <?php echo esc_html(implode(', ', array_slice($org_names, 0, 3))); ?>
                                            <?php if (count($org_names) > 3): ?>
                                                and <?php echo count($org_names) - 3; ?> more
                                            <?php endif; ?>
                                        </small>
                                    <?php else: ?>
                                        <small style="color: #999;"> (Not used)</small>
                                    <?php endif; ?>
                                </label>
                                <?php endforeach; ?>
                            </div>
                            
                            <button type="button" id="export-templates-btn" class="button button-secondary">Export Selected Templates</button>
                            <span id="export-status" style="margin-left: 10px;"></span>
                        </div>
                    </div>
                    
                    <div style="flex: 1; min-width: 300px;">
                        <h3>Import Templates</h3>
                        <p>Import template settings from an exported file. This will update template assignments for all organizations.</p>
                        <form method="post" action="" enctype="multipart/form-data">
                            <?php wp_nonce_field('import_templates', 'import_nonce'); ?>
                            <p>
                                <input type="file" name="import_file" accept=".json" required />
                                <br><small>Select a JSON file exported from another Campus Manager installation.</small>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox" name="overwrite_existing" value="1" />
                                    Overwrite existing template assignments
                                </label>
                            </p>
                            <input type="submit" name="import_templates" value="Import Templates" class="button button-secondary" />
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h2>Club Posts</h2>
                <p>Organizations can now create posts that are linked to their organization. These posts will have URLs like:</p>
                <code>/clubs/organization-name/post-name/</code>
                
                <h3>Features:</h3>
                <ul>
                    <li>Posts are automatically linked to the organization</li>
                    <li>Custom URL structure maintains club/organization association</li>
                    <li>Organization managers can only create posts for their assigned organization</li>
                    <li>Administrators can create posts for any organization</li>
                </ul>
                
                <p><a href="<?php echo admin_url('edit.php?post_type=club_post'); ?>" class="button button-primary">Manage Club Posts</a></p>
                <p><a href="<?php echo admin_url('post-new.php?post_type=club_post'); ?>" class="button">Create New Club Post</a></p>
            </div>
        </div>
        
        <script type="text/javascript">
        function toggleAllTemplates(checkbox) {
            var checkboxes = document.querySelectorAll('.template-checkbox');
            for (var i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = checkbox.checked;
            }
        }
        
        function downloadFile(content, filename, contentType) {
            var a = document.createElement('a');
            var file = new Blob([content], {type: contentType});
            a.href = URL.createObjectURL(file);
            a.download = filename;
            a.click();
        }
        
        jQuery(document).ready(function($) {
            $('#apply-template-to-all').on('click', function() {
                var template = $('#campus_manager_default_org_template').val();
                var button = $(this);
                var status = $('#apply-template-status');
                
                if (!template) {
                    status.html('<span style="color: red;">Please select a template first.</span>');
                    return;
                }
                
                button.prop('disabled', true).text('Applying...');
                status.html('<span style="color: blue;">Processing...</span>');
                
                $.post(ajaxurl, {
                    action: 'apply_template_to_all_orgs',
                    template: template,
                    nonce: '<?php echo wp_create_nonce('apply_template_nonce'); ?>'
                }, function(response) {
                    if (response.success) {
                        status.html('<span style="color: green;">✓ Successfully applied template to ' + response.data.count + ' organizations</span>');
                    } else {
                        status.html('<span style="color: red;">Error: ' + response.data.message + '</span>');
                    }
                    button.prop('disabled', false).text('Apply Template to All Organizations');
                    
                    setTimeout(function() {
                        status.html('');
                    }, 5000);
                }).fail(function() {
                    status.html('<span style="color: red;">Error: Failed to apply template</span>');
                    button.prop('disabled', false).text('Apply Template to All Organizations');
                });
            });
            
            $('#export-templates-btn').on('click', function() {
                var button = $(this);
                var status = $('#export-status');
                
                // Get selected options
                var selectedTemplates = [];
                $('.template-checkbox:checked').each(function() {
                    selectedTemplates.push($(this).val());
                });
                
                var exportDefault = $('#export_default_template').is(':checked');
                var exportBlockTemplates = $('#export_block_templates').is(':checked');
                
                if (selectedTemplates.length === 0 && !exportDefault && !exportBlockTemplates) {
                    status.html('<span style="color: red;">Please select at least one item to export.</span>');
                    return;
                }
                
                button.prop('disabled', true).text('Exporting...');
                status.html('<span style="color: blue;">Preparing export...</span>');
                
                $.post(ajaxurl, {
                    action: 'export_organization_templates',
                    selected_templates: selectedTemplates,
                    export_default: exportDefault ? 1 : 0,
                    export_block_templates: exportBlockTemplates ? 1 : 0,
                    nonce: '<?php echo wp_create_nonce('export_templates_nonce'); ?>'
                }, function(response) {
                    if (response.success) {
                        // Download the file
                        var filename = 'campus-manager-templates-' + new Date().toISOString().slice(0,19).replace(/:/g, '-') + '.json';
                        downloadFile(JSON.stringify(response.data.content, null, 2), filename, 'application/json');
                        status.html('<span style="color: green;">✓ Export completed! File downloaded.</span>');
                    } else {
                        status.html('<span style="color: red;">Error: ' + response.data.message + '</span>');
                    }
                    button.prop('disabled', false).text('Export Selected Templates');
                    
                    setTimeout(function() {
                        status.html('');
                    }, 5000);
                }).fail(function() {
                    status.html('<span style="color: red;">Error: Failed to export templates</span>');
                    button.prop('disabled', false).text('Export Selected Templates');
                });
            });
        });
        </script>
        <?php
    }
    
    
    private function handle_create_manager() {
        $username = sanitize_user($_POST['username']);
        $email = sanitize_email($_POST['email']);
        $first_name = sanitize_text_field($_POST['first_name']);
        $last_name = sanitize_text_field($_POST['last_name']);
        $organization_id = intval($_POST['organization']);
        
        // Ensure the organization_manager role exists before creating user
        $this->ensure_organization_manager_role_exists();
        
        // Generate random password
        $password = wp_generate_password(12, false);
        
        // Create user with subscriber role first (to avoid role issues)
        $user_data = array(
            'user_login' => $username,
            'user_email' => $email,
            'first_name' => $first_name,
            'last_name' => $last_name,
            'user_pass' => $password,
            'role' => 'subscriber'  // Create as subscriber first
        );
        
        $user_id = wp_insert_user($user_data);
        
        if (is_wp_error($user_id)) {
            echo '<div class="notice notice-error"><p>Error creating user: ' . $user_id->get_error_message() . '</p></div>';
        } else {
            // Now change to organization_manager role
            $user = new WP_User($user_id);
            $user->set_role('organization_manager');
            
            // Assign organization
            update_user_meta($user_id, 'assigned_organization', $organization_id);
            
            // Send password to user
            wp_new_user_notification($user_id, null, 'both');
            
            // Verify the role was set correctly
            $user_roles = $user->roles;
            $role_check = in_array('organization_manager', $user_roles) ? 'Organization Manager' : 'Failed to assign role';
            
            echo '<div class="notice notice-success"><p>Organization manager created successfully! Role: ' . $role_check . '. Login credentials have been sent to ' . esc_html($email) . '</p></div>';
        }
    }
    
    private function handle_assign_existing_user() {
        $user_id = intval($_POST['existing_user']);
        $organization_id = intval($_POST['assign_organization']);
        
        if (!$user_id || !$organization_id) {
            echo '<div class="notice notice-error"><p>Please select both a user and an organization.</p></div>';
            return;
        }
        
        $user = get_user_by('id', $user_id);
        $organization = get_post($organization_id);
        
        if (!$user || !$organization) {
            echo '<div class="notice notice-error"><p>Invalid user or organization selected.</p></div>';
            return;
        }
        
        // Ensure the organization_manager role exists
        $this->ensure_organization_manager_role_exists();
        
        // Change user role to organization manager
        $user->set_role('organization_manager');
        
        // Assign organization
        update_user_meta($user_id, 'assigned_organization', $organization_id);
        
        // Verify the role was set correctly
        $user = get_user_by('id', $user_id); // Refresh user data
        $user_roles = $user->roles;
        $role_check = in_array('organization_manager', $user_roles) ? 'Organization Manager' : 'Failed to assign role';
        
        echo '<div class="notice notice-success"><p>' . esc_html($user->display_name) . ' has been assigned as manager for ' . esc_html($organization->post_title) . '. Role: ' . $role_check . '</p></div>';
    }
    
    private function handle_remove_manager() {
        $user_id = intval($_POST['remove_manager_id']);
        
        if (!$user_id) {
            echo '<div class="notice notice-error"><p>Invalid user ID.</p></div>';
            return;
        }
        
        $user = get_user_by('id', $user_id);
        if (!$user) {
            echo '<div class="notice notice-error"><p>User not found.</p></div>';
            return;
        }
        
        // Change role back to subscriber (default)
        $user->set_role('subscriber');
        
        // Remove organization assignment
        delete_user_meta($user_id, 'assigned_organization');
        
        echo '<div class="notice notice-success"><p>Organization manager role removed from ' . esc_html($user->display_name) . '</p></div>';
    }
    
    private function ensure_organization_manager_role_exists() {
        // Check if the role exists, if not create it
        if (!get_role('organization_manager')) {
            add_role('organization_manager', 'Organization Manager', array(
                'read' => true,
                'upload_files' => true,
                
                // Explicitly deny general post and comment capabilities
                'edit_posts' => false,
                'delete_posts' => false,
                'publish_posts' => false,
                'edit_others_posts' => false,
                'delete_others_posts' => false,
                'edit_published_posts' => false,
                'delete_published_posts' => false,
                'moderate_comments' => false,
                'edit_comment' => false,
                
                // Organization capabilities
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
                
                // Event capabilities
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
                
                // Club post capabilities
                'edit_club_posts' => true,
                'edit_published_club_posts' => true,
                'publish_club_posts' => true,
                'delete_club_posts' => true,
                'delete_published_club_posts' => true,
                'read_club_post' => true,
                'edit_others_club_posts' => false,
                'delete_others_club_posts' => false,
            ));
        }
        
        // Also ensure administrators have the capabilities
        $this->add_admin_capabilities();
    }
    
    private function add_admin_capabilities() {
        $admin_role = get_role('administrator');
        if ($admin_role) {
            // Event capabilities for administrators
            $admin_role->add_cap('edit_events');
            $admin_role->add_cap('edit_others_events');
            $admin_role->add_cap('publish_events');
            $admin_role->add_cap('read_event');
            $admin_role->add_cap('delete_events');
            $admin_role->add_cap('delete_others_events');
            $admin_role->add_cap('delete_published_events');
            $admin_role->add_cap('edit_published_events');
            $admin_role->add_cap('manage_event_terms');
            $admin_role->add_cap('edit_event_terms');
            $admin_role->add_cap('delete_event_terms');
            $admin_role->add_cap('assign_event_terms');
            
            // Organization capabilities for administrators
            $admin_role->add_cap('edit_organizations');
            $admin_role->add_cap('edit_others_organizations');
            $admin_role->add_cap('publish_organizations');
            $admin_role->add_cap('read_organization');
            $admin_role->add_cap('delete_organizations');
            $admin_role->add_cap('delete_others_organizations');
            $admin_role->add_cap('delete_published_organizations');
            $admin_role->add_cap('edit_published_organizations');
            $admin_role->add_cap('manage_organization_terms');
            $admin_role->add_cap('edit_organization_terms');
            $admin_role->add_cap('delete_organization_terms');
            $admin_role->add_cap('assign_organization_terms');
            
            // Club post capabilities for administrators
            $admin_role->add_cap('edit_club_posts');
            $admin_role->add_cap('edit_others_club_posts');
            $admin_role->add_cap('publish_club_posts');
            $admin_role->add_cap('read_club_post');
            $admin_role->add_cap('delete_club_posts');
            $admin_role->add_cap('delete_others_club_posts');
            $admin_role->add_cap('delete_published_club_posts');
            $admin_role->add_cap('edit_published_club_posts');
        }
    }
    
    public function register_settings() {
        register_setting('campus_manager_settings', 'campus_manager_default_org_template');
    }
    
    public function get_available_templates() {
        $templates = array(
            'default' => 'Default template'
        );
        
        // Get theme templates
        $theme_templates = wp_get_theme()->get_page_templates();
        foreach ($theme_templates as $template_file => $template_name) {
            $templates[$template_file] = $template_name;
        }
        
        // Get block templates from current theme
        if (wp_is_block_theme()) {
            $block_templates = get_block_templates(array('post_type' => 'organization'), 'wp_template');
            foreach ($block_templates as $template) {
                // Check if template is for our post type by checking the slug or theme
                if (strpos($template->slug, 'organization') !== false || 
                    strpos($template->slug, 'single-organization') !== false ||
                    $template->slug === 'single' || $template->slug === 'index') {
                    $templates['wp-custom-template-' . $template->slug] = $template->title;
                }
            }
        }
        
        // Add custom templates if they exist
        $custom_templates = array(
            'wp-custom-template-club-homepage-2' => 'Club Homepage',
            'wp-custom-template-clubs-droppage' => 'Clubs Droppage'
        );
        
        foreach ($custom_templates as $template_file => $template_name) {
            if ($this->template_exists($template_file)) {
                $templates[$template_file] = $template_name;
            }
        }
        
        return $templates;
    }
    
    private function template_exists($template_file) {
        // Check if template exists in theme
        $theme_root = get_template_directory();
        $stylesheet_root = get_stylesheet_directory();
        
        return file_exists($theme_root . '/' . $template_file . '.php') || 
               file_exists($stylesheet_root . '/' . $template_file . '.php') ||
               file_exists($theme_root . '/templates/' . $template_file . '.html') ||
               file_exists($stylesheet_root . '/templates/' . $template_file . '.html');
    }
    
    public function apply_template_to_all_organizations() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'apply_template_nonce')) {
            wp_die('Security check failed');
        }
        
        // Check capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Insufficient permissions'));
            return;
        }
        
        $template = sanitize_text_field($_POST['template']);
        
        if (empty($template)) {
            wp_send_json_error(array('message' => 'No template selected'));
            return;
        }
        
        // Get all organizations
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'post_status' => 'any',
            'numberposts' => -1,
            'fields' => 'ids'
        ));
        
        $count = 0;
        foreach ($organizations as $org_id) {
            // Update the page template meta
            if ($template === 'default') {
                delete_post_meta($org_id, '_wp_page_template');
            } else {
                update_post_meta($org_id, '_wp_page_template', $template);
            }
            $count++;
        }
        
        // Update the default template setting
        update_option('campus_manager_default_org_template', $template);
        
        wp_send_json_success(array(
            'count' => $count,
            'template' => $template
        ));
    }
    
    public function ajax_export_templates() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'export_templates_nonce')) {
            wp_send_json_error(array('message' => 'Security check failed'));
            return;
        }
        
        // Check capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Insufficient permissions'));
            return;
        }
        
        $selected_templates = isset($_POST['selected_templates']) ? array_map('sanitize_text_field', $_POST['selected_templates']) : array();
        $export_default = isset($_POST['export_default']) && $_POST['export_default'] == '1';
        $export_block_templates = isset($_POST['export_block_templates']) && $_POST['export_block_templates'] == '1';
        
        $template_data = array(
            'export_date' => current_time('mysql'),
            'export_site' => get_site_url(),
            'plugin_version' => '1.0.0'
        );
        
        // Export default template setting
        if ($export_default) {
            $template_data['default_template'] = get_option('campus_manager_default_org_template', 'default');
        }
        
        // Export organizations that use selected templates
        if (!empty($selected_templates)) {
            $template_data['organization_templates'] = array();
            
            // Get all organizations
            $all_organizations = get_posts(array(
                'post_type' => 'organization',
                'post_status' => 'any',
                'numberposts' => -1
            ));
            
            foreach ($all_organizations as $org) {
                $org_template = get_post_meta($org->ID, '_wp_page_template', true);
                if (empty($org_template)) {
                    $org_template = 'default';
                }
                
                // Only include organizations that use one of the selected templates
                if (in_array($org_template, $selected_templates)) {
                    $org_data = array(
                        'post_title' => $org->post_title,
                        'post_slug' => $org->post_name,
                        'content' => $org->post_content,
                        'template' => $org_template
                    );
                    
                    $template_data['organization_templates'][] = $org_data;
                }
            }
        }
        
        // Export block templates
        if ($export_block_templates) {
            $template_data['block_templates'] = array();
            
            // Get all block templates including custom ones
            if (function_exists('get_block_templates')) {
                $all_templates = get_block_templates(array(), 'wp_template');
                
                foreach ($all_templates as $template) {
                    // Include organization-related templates and the specific club-homepage template
                    if (strpos($template->slug, 'organization') !== false || 
                        strpos($template->slug, 'single-organization') !== false ||
                        strpos($template->slug, 'club') !== false ||
                        strpos($template->slug, 'wp-custom-template-club-homepage') !== false) {
                        
                        $template_data['block_templates'][] = array(
                            'slug' => $template->slug,
                            'title' => $template->title,
                            'content' => $template->content,
                            'theme' => $template->theme,
                            'type' => $template->type,
                            'source' => $template->source,
                            'description' => isset($template->description) ? $template->description : '',
                            'status' => isset($template->status) ? $template->status : 'publish',
                            'has_theme_file' => isset($template->has_theme_file) ? $template->has_theme_file : false,
                            'is_custom' => isset($template->is_custom) ? $template->is_custom : false,
                            'author' => isset($template->author) ? $template->author : null,
                            'area' => isset($template->area) ? $template->area : '',
                        );
                    }
                }
            }
            
            // Also try to get custom templates from wp_posts table
            $custom_templates = get_posts(array(
                'post_type' => 'wp_template',
                'post_status' => 'any',
                'numberposts' => -1,
                'meta_query' => array(
                    array(
                        'key' => 'theme',
                        'value' => get_stylesheet(),
                        'compare' => '='
                    )
                )
            ));
            
            foreach ($custom_templates as $custom_template) {
                // Check if this template is related to organizations/clubs
                if (strpos($custom_template->post_name, 'club-homepage') !== false ||
                    strpos($custom_template->post_name, 'organization') !== false) {
                    
                    $template_data['block_templates'][] = array(
                        'slug' => $custom_template->post_name,
                        'title' => $custom_template->post_title,
                        'content' => $custom_template->post_content,
                        'theme' => get_post_meta($custom_template->ID, 'theme', true) ?: get_stylesheet(),
                        'type' => 'wp_template',
                        'source' => 'custom',
                        'description' => $custom_template->post_excerpt,
                        'status' => $custom_template->post_status,
                        'has_theme_file' => false,
                        'is_custom' => true,
                        'author' => $custom_template->post_author,
                        'area' => get_post_meta($custom_template->ID, 'area', true) ?: '',
                        'post_id' => $custom_template->ID
                    );
                }
            }
        }
        
        $org_count = isset($template_data['organization_templates']) ? count($template_data['organization_templates']) : 0;
        
        wp_send_json_success(array(
            'content' => $template_data,
            'count' => $org_count,
            'template_count' => count($selected_templates)
        ));
    }
    
    private function handle_template_import() {
        if (!current_user_can('manage_options')) {
            echo '<div class="notice notice-error"><p>Insufficient permissions.</p></div>';
            return;
        }
        
        if (!isset($_FILES['import_file']) || $_FILES['import_file']['error'] !== UPLOAD_ERR_OK) {
            echo '<div class="notice notice-error"><p>Error uploading file. Please try again.</p></div>';
            return;
        }
        
        $file_content = file_get_contents($_FILES['import_file']['tmp_name']);
        $template_data = json_decode($file_content, true);
        
        if (!$template_data || !isset($template_data['default_template']) || !isset($template_data['organization_templates'])) {
            echo '<div class="notice notice-error"><p>Invalid import file format. Please ensure you are importing a valid Campus Manager template export file.</p></div>';
            return;
        }
        
        $overwrite_existing = isset($_POST['overwrite_existing']) && $_POST['overwrite_existing'] === '1';
        $imported_count = 0;
        $skipped_count = 0;
        $updated_default = false;
        
        // Import default template setting
        if (!empty($template_data['default_template'])) {
            update_option('campus_manager_default_org_template', sanitize_text_field($template_data['default_template']));
            $updated_default = true;
        }
        
        // Import organization template assignments and content
        foreach ($template_data['organization_templates'] as $org_template) {
            if (empty($org_template['post_slug']) || empty($org_template['template'])) {
                continue;
            }
            
            // Try to find organization by slug first, then by title
            $org = get_page_by_path($org_template['post_slug'], OBJECT, 'organization');
            if (!$org && !empty($org_template['post_title'])) {
                $orgs = get_posts(array(
                    'post_type' => 'organization',
                    'title' => $org_template['post_title'],
                    'numberposts' => 1,
                    'post_status' => 'any'
                ));
                $org = !empty($orgs) ? $orgs[0] : null;
            }
            
            if ($org) {
                $existing_template = get_post_meta($org->ID, '_wp_page_template', true);
                
                if ($overwrite_existing || empty($existing_template)) {
                    update_post_meta($org->ID, '_wp_page_template', sanitize_text_field($org_template['template']));
                    
                    // Import block content if available
                    if (!empty($org_template['content']) && ($overwrite_existing || empty($org->post_content))) {
                        wp_update_post(array(
                            'ID' => $org->ID,
                            'post_content' => wp_kses_post($org_template['content'])
                        ));
                    }
                    
                    $imported_count++;
                } else {
                    $skipped_count++;
                }
            }
        }
        
        // Import block templates if available
        if (!empty($template_data['block_templates'])) {
            foreach ($template_data['block_templates'] as $block_template) {
                if (empty($block_template['slug']) || empty($block_template['content'])) {
                    continue;
                }
                
                // Check if template already exists in wp_posts
                $existing_post = get_posts(array(
                    'post_type' => 'wp_template',
                    'post_name' => $block_template['slug'],
                    'post_status' => 'any',
                    'numberposts' => 1
                ));
                
                if ($overwrite_existing || empty($existing_post)) {
                    $template_post_data = array(
                        'post_type' => 'wp_template',
                        'post_status' => isset($block_template['status']) ? $block_template['status'] : 'publish',
                        'post_title' => $block_template['title'],
                        'post_name' => $block_template['slug'],
                        'post_content' => $block_template['content'],
                        'post_excerpt' => isset($block_template['description']) ? $block_template['description'] : '',
                        'post_author' => isset($block_template['author']) ? $block_template['author'] : get_current_user_id(),
                    );
                    
                    if (!empty($existing_post)) {
                        // Update existing template
                        $template_post_data['ID'] = $existing_post[0]->ID;
                        $post_id = wp_update_post($template_post_data);
                    } else {
                        // Create new template
                        $post_id = wp_insert_post($template_post_data);
                    }
                    
                    if ($post_id && !is_wp_error($post_id)) {
                        // Add template metadata
                        update_post_meta($post_id, 'theme', get_stylesheet());
                        
                        if (isset($block_template['area'])) {
                            update_post_meta($post_id, 'area', $block_template['area']);
                        }
                        
                        // Add any other custom metadata
                        if (isset($block_template['is_custom'])) {
                            update_post_meta($post_id, 'is_custom', $block_template['is_custom']);
                        }
                        
                        $imported_count++;
                    }
                }
            }
        }
        
        $message = sprintf(
            'Import completed! %d template assignments imported%s%s%s',
            $imported_count,
            $skipped_count > 0 ? ", {$skipped_count} skipped (already assigned)" : '',
            $updated_default ? ', default template updated' : '',
            !empty($template_data['export_site']) ? ' from ' . esc_html($template_data['export_site']) : ''
        );
        
        echo '<div class="notice notice-success"><p>' . $message . '</p></div>';
    }
}