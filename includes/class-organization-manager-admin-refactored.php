<?php
/**
 * Refactored Organization Manager Admin class
 * Delegates responsibilities to specialized classes
 */
class UNBC_Organization_Manager_Admin_Refactored {
    
    private $assignment_handler;
    private $import_export_handler;
    private $template_manager;
    
    public function __construct() {
        // Initialize component handlers
        $this->assignment_handler = new UNBC_Organization_Manager_Assignment();
        $this->import_export_handler = new UNBC_Organization_Import_Export();
        $this->template_manager = new UNBC_Organization_Template_Manager();
        
        // Register admin menu
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'register_settings'));
    }
    
    /**
     * Add admin menu items
     */
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
    
    /**
     * Organization managers page
     */
    public function organization_managers_page() {
        // Handle form submissions
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $this->handle_manager_form_submission();
        }
        
        // Get data for display
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'numberposts' => -1,
            'post_status' => 'publish',
            'orderby' => 'title',
            'order' => 'ASC'
        ));
        
        $org_managers = UNBC_Organization_Manager_Assignment::get_organization_managers();
        
        // Get existing users that can be made managers
        $existing_users = get_users(array(
            'role__not_in' => array('organization_manager', 'administrator'),
            'orderby' => 'display_name'
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
            <?php else: ?>
            
            <style>
                .org-manager-forms { 
                    display: flex; 
                    gap: 20px; 
                    margin-top: 20px;
                }
                .org-manager-forms .card {
                    flex: 1;
                    padding: 20px;
                    background: white;
                    border: 1px solid #ccc;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    overflow: visible;
                    min-height: 400px;
                }
                .org-manager-forms h2 {
                    margin-top: 0;
                }
                .org-manager-forms select {
                    width: 100%;
                    max-width: 100%;
                    min-width: 200px;
                }
                .org-manager-forms .form-table {
                    width: 100%;
                }
                .org-manager-forms .form-table th {
                    width: 30%;
                    vertical-align: top;
                    padding-top: 10px;
                }
                .org-manager-forms .form-table td {
                    padding: 10px 0;
                }
                .org-manager-forms .description {
                    margin-top: 5px;
                    color: #666;
                    font-size: 13px;
                }
                .managers-list-table {
                    margin-top: 30px;
                }
                @media screen and (max-width: 1200px) {
                    .org-manager-forms {
                        flex-direction: column;
                    }
                    .org-manager-forms .card {
                        width: 100%;
                        max-width: 600px;
                    }
                }
            </style>
            
            <div class="org-manager-forms">
                <!-- Assign Existing User Form -->
                <div class="card">
                    <h2>Assign Existing User as Organization Manager</h2>
                    <form method="post" action="">
                        <?php wp_nonce_field('assign_existing_user', 'assign_user_nonce'); ?>
                        <table class="form-table">
                            <tr>
                                <th><label for="existing_user_id">Select User</label></th>
                                <td>
                                    <select name="existing_user_id" id="existing_user_id" required>
                                        <option value="">Select a user...</option>
                                        <?php foreach ($existing_users as $user): ?>
                                            <option value="<?php echo $user->ID; ?>">
                                                <?php echo esc_html($user->display_name . ' (' . $user->user_email . ')'); ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                    <p class="description">Select an existing user to convert to Organization Manager role.</p>
                                </td>
                            </tr>
                            <tr>
                                <th><label for="existing_user_organization">Organization</label></th>
                                <td>
                                    <select name="existing_user_organization" id="existing_user_organization" required>
                                        <option value="">Select Organization...</option>
                                        <?php foreach ($organizations as $org): ?>
                                            <option value="<?php echo $org->ID; ?>">
                                                <?php echo esc_html($org->post_title); ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                </td>
                            </tr>
                        </table>
                        <?php submit_button('Assign as Organization Manager', 'primary', 'assign_existing_user'); ?>
                    </form>
                </div>
                
                <!-- Create New Manager Form -->
                <div class="card">
                    <h2>Create New Organization Manager</h2>
                    <form method="post" action="">
                        <?php wp_nonce_field('create_manager', 'create_manager_nonce'); ?>
                        <table class="form-table">
                            <tr>
                                <th><label for="manager_email">Email</label></th>
                                <td>
                                    <input type="email" name="manager_email" id="manager_email" class="regular-text" required />
                                </td>
                            </tr>
                            <tr>
                                <th><label for="manager_first_name">First Name</label></th>
                                <td>
                                    <input type="text" name="manager_first_name" id="manager_first_name" class="regular-text" required />
                                </td>
                            </tr>
                            <tr>
                                <th><label for="manager_last_name">Last Name</label></th>
                                <td>
                                    <input type="text" name="manager_last_name" id="manager_last_name" class="regular-text" required />
                                </td>
                            </tr>
                            <tr>
                                <th><label for="manager_organization">Organization</label></th>
                                <td>
                                    <select name="manager_organization" id="manager_organization" required>
                                        <option value="">Select Organization...</option>
                                        <?php foreach ($organizations as $org): ?>
                                            <option value="<?php echo $org->ID; ?>">
                                                <?php echo esc_html($org->post_title); ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                </td>
                            </tr>
                        </table>
                        <?php submit_button('Create Organization Manager', 'primary', 'create_manager'); ?>
                    </form>
                </div>
            </div>
            
            <!-- Current Managers List -->
            <div class="managers-list-table">
                <h2>Current Organization Managers</h2>
                <table class="wp-list-table widefat fixed striped">
                    <thead>
                        <tr>
                            <th>Name</th>
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
                                $assigned_org_id = UNBC_Organization_Manager_Assignment::get_user_organization($manager->ID);
                                $assigned_org = $assigned_org_id ? get_post($assigned_org_id) : null;
                                ?>
                                <tr>
                                    <td>
                                        <strong><?php echo esc_html($manager->display_name); ?></strong>
                                        <br>
                                        <a href="<?php echo get_edit_user_link($manager->ID); ?>">Edit User</a>
                                    </td>
                                    <td><?php echo esc_html($manager->user_email); ?></td>
                                    <td>
                                        <?php if ($assigned_org): ?>
                                            <a href="<?php echo get_edit_post_link($assigned_org->ID); ?>">
                                                <?php echo esc_html($assigned_org->post_title); ?>
                                            </a>
                                        <?php else: ?>
                                            <em>None assigned</em>
                                        <?php endif; ?>
                                    </td>
                                    <td>
                                        <form method="post" action="" style="display:inline;">
                                            <?php wp_nonce_field('remove_manager_' . $manager->ID, 'remove_manager_nonce'); ?>
                                            <input type="hidden" name="remove_manager_id" value="<?php echo $manager->ID; ?>">
                                            <button type="submit" name="remove_manager" class="button button-small" 
                                                    onclick="return confirm('Are you sure you want to remove this organization manager role?');">
                                                Remove Role
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
            
            <?php endif; // organizations check ?>
        </div>
        <?php
    }
    
    /**
     * Organization settings page
     */
    public function organization_settings_page() {
        $templates = $this->template_manager->get_available_templates();
        $wp_templates = get_posts(array(
            'post_type' => 'wp_template',
            'numberposts' => -1,
            'post_status' => 'publish'
        ));
        
        ?>
        <div class="wrap">
            <h1>Organization Settings</h1>
            
            <div class="card">
                <h2>Templates</h2>
                <p>Manage templates for organization pages.</p>
                
                <?php if (!empty($wp_templates)): ?>
                <h3>Apply Template to All Organizations</h3>
                <select id="template-selector">
                    <option value="">Select a template...</option>
                    <?php foreach ($wp_templates as $template): ?>
                        <option value="<?php echo $template->ID; ?>">
                            <?php echo esc_html($template->post_title); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
                <button type="button" class="button button-primary" id="apply-template-btn">
                    Apply to All Organizations
                </button>
                <?php endif; ?>
                
                <h3>Export Templates</h3>
                <button type="button" class="button" id="export-templates-btn">
                    Export All Templates
                </button>
            </div>
            
            <div class="card" style="margin-top: 20px;">
                <h2>Import/Export Data</h2>
                
                <h3>Unified Export/Import</h3>
                <p><em>Export and import both organizations and events together:</em></p>
                
                <h4>Export Data</h4>
                <form id="export-unified-form">
                    <?php wp_nonce_field('export_unified_nonce', 'export_unified_nonce'); ?>
                    
                    <fieldset style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
                        <legend><strong>What to Export:</strong></legend>
                        <label>
                            <input type="checkbox" name="export_clubs" value="true" checked> Export Organizations
                        </label><br>
                        <label>
                            <input type="checkbox" name="export_events" value="true" checked> Export Events
                        </label><br>
                    </fieldset>
                    
                    <fieldset style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
                        <legend><strong>Export Options:</strong></legend>
                        <label>
                            <input type="checkbox" name="export_content" value="true" checked> Include Content
                        </label><br>
                        <label>
                            <input type="checkbox" name="export_images" value="true" checked> Include Images
                        </label><br>
                        <label>
                            <input type="checkbox" name="export_meta" value="true" checked> Include Meta Data
                        </label><br>
                    </fieldset>
                    
                    <input type="hidden" name="format" value="zip">
                    <p><strong>Format:</strong> ZIP (includes all data, images, and taxonomy information)</p>
                    <button type="submit" class="button button-primary">Export Data</button>
                </form>
                
                <h4>Import Data</h4>
                <form id="import-unified-form" enctype="multipart/form-data">
                    <?php wp_nonce_field('import_unified_nonce', 'import_unified_nonce'); ?>
                    <input type="file" name="import_file" accept=".json,.zip" required>
                    <button type="submit" class="button button-primary">Import Data</button>
                    <p><em>Supports JSON or ZIP files exported from this system. Will import both organizations and events if present in the file.</em></p>
                </form>
            </div>
        </div>
        
        <script>
        jQuery(document).ready(function($) {
            // Apply template to all organizations
            $('#apply-template-btn').on('click', function() {
                var templateId = $('#template-selector').val();
                if (!templateId) {
                    alert('Please select a template');
                    return;
                }
                
                if (!confirm('Apply this template to all organizations?')) {
                    return;
                }
                
                $.post(ajaxurl, {
                    action: 'apply_template_to_all_orgs',
                    template_id: templateId,
                    nonce: '<?php echo wp_create_nonce('apply_template_nonce'); ?>'
                }, function(response) {
                    if (response.success) {
                        alert(response.data.message);
                    } else {
                        alert('Error: ' + response.data);
                    }
                });
            });
            
            // Export templates
            $('#export-templates-btn').on('click', function() {
                window.location.href = ajaxurl + '?action=export_organization_templates&nonce=' + 
                    '<?php echo wp_create_nonce('export_templates_nonce'); ?>';
            });
            
            // Export unified data
            $('#export-unified-form').on('submit', function(e) {
                e.preventDefault();
                
                // Check if at least one export option is selected
                var exportClubs = $('#export-unified-form input[name="export_clubs"]').is(':checked');
                var exportEvents = $('#export-unified-form input[name="export_events"]').is(':checked');
                
                if (!exportClubs && !exportEvents) {
                    alert('Please select at least one data type to export (Organizations or Events).');
                    return;
                }
                
                var formData = $(this).serialize();
                window.location.href = ajaxurl + '?action=export_unified_data&' + formData;
            });
            
            // Import unified data
            $('#import-unified-form').on('submit', function(e) {
                e.preventDefault();
                var formData = new FormData(this);
                formData.append('action', 'import_unified_data');
                // Ensure the nonce is properly included
                if (!formData.has('import_unified_nonce')) {
                    formData.append('import_unified_nonce', $('#import-unified-form input[name="import_unified_nonce"]').val());
                }
                
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            var message = 'Import successful!\\n';
                            if (response.data.clubs_imported > 0 || response.data.clubs_skipped > 0) {
                                message += 'Organizations - Imported: ' + response.data.clubs_imported + 
                                          ', Skipped: ' + response.data.clubs_skipped + '\\n';
                            }
                            if (response.data.events_imported > 0 || response.data.events_skipped > 0) {
                                message += 'Events - Imported: ' + response.data.events_imported + 
                                          ', Skipped: ' + response.data.events_skipped;
                            }
                            alert(message);
                            location.reload(); // Refresh the page to show updated data
                        } else {
                            alert('Error: ' + response.data);
                        }
                    },
                    error: function() {
                        alert('An error occurred during import. Please try again.');
                    }
                });
            });
        });
        </script>
        <?php
    }
    
    /**
     * Handle manager form submissions
     */
    private function handle_manager_form_submission() {
        if (isset($_POST['create_manager']) && wp_verify_nonce($_POST['create_manager_nonce'], 'create_manager')) {
            $this->handle_create_manager();
        } elseif (isset($_POST['assign_existing_user']) && wp_verify_nonce($_POST['assign_user_nonce'], 'assign_existing_user')) {
            $this->handle_assign_existing_user();
        } elseif (isset($_POST['remove_manager']) && isset($_POST['remove_manager_id'])) {
            $this->handle_remove_manager();
        }
    }
    
    /**
     * Handle creating new manager
     */
    private function handle_create_manager() {
        $email = sanitize_email($_POST['manager_email']);
        $first_name = sanitize_text_field($_POST['manager_first_name']);
        $last_name = sanitize_text_field($_POST['manager_last_name']);
        $organization_id = intval($_POST['manager_organization']);
        
        if (!is_email($email)) {
            echo '<div class="notice notice-error"><p>Invalid email address</p></div>';
            return;
        }
        
        if (email_exists($email)) {
            echo '<div class="notice notice-error"><p>A user with this email already exists</p></div>';
            return;
        }
        
        // Create user
        $password = wp_generate_password();
        $user_id = wp_create_user($email, $password, $email);
        
        if (is_wp_error($user_id)) {
            echo '<div class="notice notice-error"><p>' . $user_id->get_error_message() . '</p></div>';
            return;
        }
        
        // Update user details
        wp_update_user(array(
            'ID' => $user_id,
            'first_name' => $first_name,
            'last_name' => $last_name,
            'display_name' => $first_name . ' ' . $last_name
        ));
        
        // Assign as organization manager
        $result = UNBC_Organization_Manager_Assignment::assign_manager_to_organization($user_id, $organization_id);
        
        if (is_wp_error($result)) {
            echo '<div class="notice notice-error"><p>' . $result->get_error_message() . '</p></div>';
            return;
        }
        
        // Send credentials email
        wp_new_user_notification($user_id, null, 'both');
        
        $organization = get_post($organization_id);
        echo '<div class="notice notice-success"><p>Organization manager created successfully! Login credentials have been sent to ' . 
             esc_html($email) . '</p></div>';
    }
    
    /**
     * Handle assigning existing user
     */
    private function handle_assign_existing_user() {
        $user_id = intval($_POST['existing_user_id']);
        $organization_id = intval($_POST['existing_user_organization']);
        
        $result = UNBC_Organization_Manager_Assignment::assign_manager_to_organization($user_id, $organization_id);
        
        if (is_wp_error($result)) {
            echo '<div class="notice notice-error"><p>' . $result->get_error_message() . '</p></div>';
            return;
        }
        
        $user = get_user_by('id', $user_id);
        $organization = get_post($organization_id);
        
        echo '<div class="notice notice-success"><p>' . esc_html($user->display_name) . 
             ' has been assigned as manager for ' . esc_html($organization->post_title) . '</p></div>';
    }
    
    /**
     * Handle removing manager
     */
    private function handle_remove_manager() {
        $user_id = intval($_POST['remove_manager_id']);
        
        if (!wp_verify_nonce($_POST['remove_manager_nonce'], 'remove_manager_' . $user_id)) {
            echo '<div class="notice notice-error"><p>Security check failed</p></div>';
            return;
        }
        
        $result = UNBC_Organization_Manager_Assignment::remove_manager_assignment($user_id);
        
        if (is_wp_error($result)) {
            echo '<div class="notice notice-error"><p>' . $result->get_error_message() . '</p></div>';
            return;
        }
        
        $user = get_user_by('id', $user_id);
        echo '<div class="notice notice-success"><p>Organization manager role removed from ' . 
             esc_html($user->display_name) . '</p></div>';
    }
    
    /**
     * Register settings
     */
    public function register_settings() {
        // Add any settings registration here if needed
    }
}