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
        add_action('wp_ajax_export_clubs_data', array($this, 'ajax_export_clubs_data'));
        add_action('wp_ajax_import_clubs_data', array($this, 'ajax_import_clubs_data'));
        add_action('wp_ajax_export_events_data', array($this, 'ajax_export_events_data'));
        add_action('wp_ajax_import_events_data', array($this, 'ajax_import_events_data'));
        add_action('wp_ajax_export_complete_data', array($this, 'ajax_export_complete_data'));
        add_action('wp_ajax_import_complete_data', array($this, 'ajax_import_complete_data'));
        
        // Register templates with WordPress Site Editor
        add_filter('theme_templates', array($this, 'register_plugin_templates'), 10, 4);
        add_filter('theme_organization_templates', array($this, 'register_plugin_templates'), 10, 4);
        
        // Ensure wp_template posts have proper taxonomy terms for Site Editor visibility
        add_action('init', array($this, 'ensure_template_taxonomy_terms'), 20);
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
        
        
        // Template import/export has been moved to separate plugin
        
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
                <h2>Clubs & Events Import/Export</h2>
                <p>Import and export clubs (organizations), their images, and events data for backup or transfer purposes.</p>
                
                <div style="margin-bottom: 30px; padding: 15px; background: #f0f8ff; border: 1px solid #0073aa; border-radius: 5px;">
                    <h3 style="margin-top: 0; color: #0073aa;">📦 Complete Campus Manager Export</h3>
                    <p><strong>Recommended:</strong> Export everything in one comprehensive package including all clubs, events, and media files.</p>
                    
                    <div id="complete-export-options" style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 10px;">
                            <input type="checkbox" id="export_complete_content" checked> Include all content and descriptions
                        </label>
                        <label style="display: block; margin-bottom: 10px;">
                            <input type="checkbox" id="export_complete_images" checked> Include all images (featured images, flyers, content media)
                        </label>
                        <label style="display: block; margin-bottom: 10px;">
                            <input type="checkbox" id="export_complete_meta" checked> Include all metadata and custom fields
                        </label>
                        <label style="display: block; margin-bottom: 10px;">
                            <input type="checkbox" id="export_complete_relations" checked> Include organization-event relationships
                        </label>
                    </div>
                    
                    <button type="button" id="export-complete-btn" class="button button-primary" style="margin-right: 10px;">Export Complete Campus Manager Data</button>
                    <span id="export-complete-status" style="margin-left: 10px;"></span>
                </div>
                
                <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 30px;">
                    <div style="flex: 1; min-width: 300px;">
                        <h3>Export Clubs Only</h3>
                        <p>Export only clubs (organizations) with their metadata and featured images.</p>
                        
                        <div id="clubs-export-options" style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 10px;">
                                <input type="checkbox" id="export_clubs_content" checked> Include club content and descriptions
                            </label>
                            <label style="display: block; margin-bottom: 10px;">
                                <input type="checkbox" id="export_clubs_images" checked> Include club featured images
                            </label>
                            <label style="display: block; margin-bottom: 10px;">
                                <input type="checkbox" id="export_clubs_meta" checked> Include club metadata (custom fields)
                            </label>
                        </div>
                        
                        <button type="button" id="export-clubs-btn" class="button button-secondary">Export Clubs Data</button>
                        <span id="export-clubs-status" style="margin-left: 10px;"></span>
                    </div>
                    
                    <div style="flex: 1; min-width: 300px;">
                        <h3>Import Clubs Data</h3>
                        <p>Import clubs data from a previously exported file.</p>
                        <form id="import-clubs-form" enctype="multipart/form-data">
                            <p>
                                <input type="file" id="clubs-import-file" name="clubs_import_file" accept=".json,.zip" required />
                                <br><small>Select a JSON or ZIP file exported from Campus Manager.</small>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox" id="overwrite_existing_clubs" value="1" />
                                    Overwrite existing clubs with same slug
                                </label>
                            </p>
                            <button type="button" id="import-clubs-btn" class="button button-secondary">Import Clubs Data</button>
                            <span id="import-clubs-status" style="margin-left: 10px;"></span>
                        </form>
                    </div>
                </div>
                
                <hr style="margin: 30px 0;">
                
                <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                    <div style="flex: 1; min-width: 300px;">
                        <h3>Export Events Only</h3>
                        <p>Export only events with their metadata and flyer images.</p>
                        
                        <div id="events-export-options" style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 10px;">
                                <input type="checkbox" id="export_events_content" checked> Include event content and descriptions
                            </label>
                            <label style="display: block; margin-bottom: 10px;">
                                <input type="checkbox" id="export_events_images" checked> Include event flyer images
                            </label>
                            <label style="display: block; margin-bottom: 10px;">
                                <input type="checkbox" id="export_events_meta" checked> Include event metadata (dates, locations, etc.)
                            </label>
                            <label style="display: block; margin-bottom: 10px;">
                                <input type="checkbox" id="export_events_organizations" checked> Include organization associations
                            </label>
                        </div>
                        
                        <button type="button" id="export-events-btn" class="button button-secondary">Export Events Data</button>
                        <span id="export-events-status" style="margin-left: 10px;"></span>
                    </div>
                    
                    <div style="flex: 1; min-width: 300px;">
                        <h3>Import Campus Manager Data</h3>
                        <p>Import clubs and/or events data from a previously exported file.</p>
                        <form id="import-complete-form" enctype="multipart/form-data">
                            <p>
                                <input type="file" id="complete-import-file" name="complete_import_file" accept=".json,.zip" required />
                                <br><small>Select a JSON or ZIP file exported from Campus Manager.</small>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox" id="overwrite_existing_complete" value="1" />
                                    Overwrite existing clubs/events with same slug
                                </label>
                            </p>
                            <button type="button" id="import-complete-btn" class="button button-primary">Import Campus Manager Data</button>
                            <span id="import-complete-status" style="margin-left: 10px;"></span>
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
            
            // Complete Export
            $('#export-complete-btn').on('click', function() {
                var button = $(this);
                var status = $('#export-complete-status');
                
                var exportContent = $('#export_complete_content').is(':checked');
                var exportImages = $('#export_complete_images').is(':checked');
                var exportMeta = $('#export_complete_meta').is(':checked');
                var exportRelations = $('#export_complete_relations').is(':checked');
                
                if (!exportContent && !exportImages && !exportMeta && !exportRelations) {
                    status.html('<span style="color: red;">Please select at least one export option.</span>');
                    return;
                }
                
                button.prop('disabled', true).text('Exporting...');
                status.html('<span style="color: blue;">Preparing complete export...</span>');
                
                $.post(ajaxurl, {
                    action: 'export_complete_data',
                    export_content: exportContent ? 1 : 0,
                    export_images: exportImages ? 1 : 0,
                    export_meta: exportMeta ? 1 : 0,
                    export_relations: exportRelations ? 1 : 0,
                    nonce: '<?php echo wp_create_nonce('export_complete_nonce'); ?>'
                }, function(response) {
                    if (response.success) {
                        if (response.data.download_url) {
                            // ZIP file created - trigger download
                            var downloadLink = document.createElement('a');
                            downloadLink.href = response.data.download_url;
                            downloadLink.download = response.data.filename;
                            document.body.appendChild(downloadLink);
                            downloadLink.click();
                            document.body.removeChild(downloadLink);
                            
                            var message = '✓ Export completed! ' + response.data.clubs_count + ' clubs and ' + response.data.events_count + ' events exported';
                            if (response.data.images_count) {
                                message += ' with ' + response.data.images_count + ' media files';
                            }
                            message += ' as ZIP file.';
                            status.html('<span style="color: green;">' + message + '</span>');
                        } else {
                            // JSON only export
                            var filename = 'campus-manager-complete-' + new Date().toISOString().slice(0,19).replace(/:/g, '-') + '.json';
                            downloadFile(JSON.stringify(response.data.content, null, 2), filename, 'application/json');
                            status.html('<span style="color: green;">✓ Export completed! ' + response.data.clubs_count + ' clubs and ' + response.data.events_count + ' events exported.</span>');
                        }
                    } else {
                        status.html('<span style="color: red;">Error: ' + response.data.message + '</span>');
                    }
                    button.prop('disabled', false).text('Export Complete Campus Manager Data');
                    
                    setTimeout(function() {
                        status.html('');
                    }, 5000);
                }).fail(function() {
                    status.html('<span style="color: red;">Error: Failed to export complete data</span>');
                    button.prop('disabled', false).text('Export Complete Campus Manager Data');
                });
            });
            
            // Clubs Export
            $('#export-clubs-btn').on('click', function() {
                var button = $(this);
                var status = $('#export-clubs-status');
                
                var exportContent = $('#export_clubs_content').is(':checked');
                var exportImages = $('#export_clubs_images').is(':checked');
                var exportMeta = $('#export_clubs_meta').is(':checked');
                
                if (!exportContent && !exportImages && !exportMeta) {
                    status.html('<span style="color: red;">Please select at least one export option.</span>');
                    return;
                }
                
                button.prop('disabled', true).text('Exporting...');
                status.html('<span style="color: blue;">Preparing clubs export...</span>');
                
                $.post(ajaxurl, {
                    action: 'export_clubs_data',
                    export_content: exportContent ? 1 : 0,
                    export_images: exportImages ? 1 : 0,
                    export_meta: exportMeta ? 1 : 0,
                    nonce: '<?php echo wp_create_nonce('export_clubs_nonce'); ?>'
                }, function(response) {
                    if (response.success) {
                        if (response.data.download_url) {
                            // ZIP file created - trigger download
                            var downloadLink = document.createElement('a');
                            downloadLink.href = response.data.download_url;
                            downloadLink.download = response.data.filename;
                            document.body.appendChild(downloadLink);
                            downloadLink.click();
                            document.body.removeChild(downloadLink);
                            
                            var message = '✓ Export completed! ' + response.data.count + ' clubs exported';
                            if (response.data.images_count) {
                                message += ' with ' + response.data.images_count + ' images';
                            }
                            message += ' as ZIP file.';
                            status.html('<span style="color: green;">' + message + '</span>');
                        } else {
                            // JSON only export
                            var filename = 'campus-manager-clubs-' + new Date().toISOString().slice(0,19).replace(/:/g, '-') + '.json';
                            downloadFile(JSON.stringify(response.data.content, null, 2), filename, 'application/json');
                            status.html('<span style="color: green;">✓ Export completed! ' + response.data.count + ' clubs exported.</span>');
                        }
                    } else {
                        status.html('<span style="color: red;">Error: ' + response.data.message + '</span>');
                    }
                    button.prop('disabled', false).text('Export Clubs Data');
                    
                    setTimeout(function() {
                        status.html('');
                    }, 5000);
                }).fail(function() {
                    status.html('<span style="color: red;">Error: Failed to export clubs data</span>');
                    button.prop('disabled', false).text('Export Clubs Data');
                });
            });
            
            // Clubs Import
            $('#import-clubs-btn').on('click', function() {
                var button = $(this);
                var status = $('#import-clubs-status');
                var fileInput = $('#clubs-import-file')[0];
                
                if (!fileInput.files[0]) {
                    status.html('<span style="color: red;">Please select a file to import.</span>');
                    return;
                }
                
                var formData = new FormData();
                formData.append('action', 'import_clubs_data');
                formData.append('clubs_import_file', fileInput.files[0]);
                formData.append('overwrite_existing', $('#overwrite_existing_clubs').is(':checked') ? 1 : 0);
                formData.append('nonce', '<?php echo wp_create_nonce('import_clubs_nonce'); ?>');
                
                button.prop('disabled', true).text('Importing...');
                status.html('<span style="color: blue;">Processing clubs import...</span>');
                
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            status.html('<span style="color: green;">✓ Import completed! ' + response.data.imported + ' clubs imported.</span>');
                            $('#clubs-import-file').val('');
                        } else {
                            status.html('<span style="color: red;">Error: ' + response.data.message + '</span>');
                        }
                        button.prop('disabled', false).text('Import Clubs Data');
                        
                        setTimeout(function() {
                            status.html('');
                        }, 5000);
                    },
                    error: function() {
                        status.html('<span style="color: red;">Error: Failed to import clubs data</span>');
                        button.prop('disabled', false).text('Import Clubs Data');
                    }
                });
            });
            
            // Events Export
            $('#export-events-btn').on('click', function() {
                var button = $(this);
                var status = $('#export-events-status');
                
                var exportContent = $('#export_events_content').is(':checked');
                var exportImages = $('#export_events_images').is(':checked');
                var exportMeta = $('#export_events_meta').is(':checked');
                var exportOrganizations = $('#export_events_organizations').is(':checked');
                
                if (!exportContent && !exportImages && !exportMeta && !exportOrganizations) {
                    status.html('<span style="color: red;">Please select at least one export option.</span>');
                    return;
                }
                
                button.prop('disabled', true).text('Exporting...');
                status.html('<span style="color: blue;">Preparing events export...</span>');
                
                $.post(ajaxurl, {
                    action: 'export_events_data',
                    export_content: exportContent ? 1 : 0,
                    export_images: exportImages ? 1 : 0,
                    export_meta: exportMeta ? 1 : 0,
                    export_organizations: exportOrganizations ? 1 : 0,
                    nonce: '<?php echo wp_create_nonce('export_events_nonce'); ?>'
                }, function(response) {
                    if (response.success) {
                        if (response.data.download_url) {
                            // ZIP file created - trigger download
                            var downloadLink = document.createElement('a');
                            downloadLink.href = response.data.download_url;
                            downloadLink.download = response.data.filename;
                            document.body.appendChild(downloadLink);
                            downloadLink.click();
                            document.body.removeChild(downloadLink);
                            
                            var message = '✓ Export completed! ' + response.data.count + ' events exported';
                            if (response.data.images_count) {
                                message += ' with ' + response.data.images_count + ' images';
                            }
                            message += ' as ZIP file.';
                            status.html('<span style="color: green;">' + message + '</span>');
                        } else {
                            // JSON only export
                            var filename = 'campus-manager-events-' + new Date().toISOString().slice(0,19).replace(/:/g, '-') + '.json';
                            downloadFile(JSON.stringify(response.data.content, null, 2), filename, 'application/json');
                            status.html('<span style="color: green;">✓ Export completed! ' + response.data.count + ' events exported.</span>');
                        }
                    } else {
                        status.html('<span style="color: red;">Error: ' + response.data.message + '</span>');
                    }
                    button.prop('disabled', false).text('Export Events Data');
                    
                    setTimeout(function() {
                        status.html('');
                    }, 5000);
                }).fail(function() {
                    status.html('<span style="color: red;">Error: Failed to export events data</span>');
                    button.prop('disabled', false).text('Export Events Data');
                });
            });
            
            // Events Import
            $('#import-events-btn').on('click', function() {
                var button = $(this);
                var status = $('#import-events-status');
                var fileInput = $('#events-import-file')[0];
                
                if (!fileInput.files[0]) {
                    status.html('<span style="color: red;">Please select a file to import.</span>');
                    return;
                }
                
                var formData = new FormData();
                formData.append('action', 'import_events_data');
                formData.append('events_import_file', fileInput.files[0]);
                formData.append('overwrite_existing', $('#overwrite_existing_events').is(':checked') ? 1 : 0);
                formData.append('nonce', '<?php echo wp_create_nonce('import_events_nonce'); ?>');
                
                button.prop('disabled', true).text('Importing...');
                status.html('<span style="color: blue;">Processing events import...</span>');
                
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            status.html('<span style="color: green;">✓ Import completed! ' + response.data.imported + ' events imported.</span>');
                            $('#events-import-file').val('');
                        } else {
                            status.html('<span style="color: red;">Error: ' + response.data.message + '</span>');
                        }
                        button.prop('disabled', false).text('Import Events Data');
                        
                        setTimeout(function() {
                            status.html('');
                        }, 5000);
                    },
                    error: function() {
                        status.html('<span style="color: red;">Error: Failed to import events data</span>');
                        button.prop('disabled', false).text('Import Events Data');
                    }
                });
            });
            
            // Complete Import
            $('#import-complete-btn').on('click', function() {
                var button = $(this);
                var status = $('#import-complete-status');
                var fileInput = $('#complete-import-file')[0];
                
                if (!fileInput.files[0]) {
                    status.html('<span style="color: red;">Please select a file to import.</span>');
                    return;
                }
                
                var formData = new FormData();
                formData.append('action', 'import_complete_data');
                formData.append('complete_import_file', fileInput.files[0]);
                formData.append('overwrite_existing', $('#overwrite_existing_complete').is(':checked') ? 1 : 0);
                formData.append('nonce', '<?php echo wp_create_nonce('import_complete_nonce'); ?>');
                
                button.prop('disabled', true).text('Importing...');
                status.html('<span style="color: blue;">Processing complete import...</span>');
                
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            var message = '✓ Import completed!';
                            if (response.data.clubs_imported) {
                                message += ' ' + response.data.clubs_imported + ' clubs imported.';
                            }
                            if (response.data.events_imported) {
                                message += ' ' + response.data.events_imported + ' events imported.';
                            }
                            status.html('<span style="color: green;">' + message + '</span>');
                            $('#complete-import-file').val('');
                        } else {
                            status.html('<span style="color: red;">Error: ' + response.data.message + '</span>');
                        }
                        button.prop('disabled', false).text('Import Campus Manager Data');
                        
                        setTimeout(function() {
                            status.html('');
                        }, 5000);
                    },
                    error: function() {
                        status.html('<span style="color: red;">Error: Failed to import complete data</span>');
                        button.prop('disabled', false).text('Import Campus Manager Data');
                    }
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
        // Simplified template list to prevent hanging
        $templates = array(
            'default' => 'Default template'
        );
        
        // Get basic theme templates only
        $theme_templates = wp_get_theme()->get_page_templates();
        foreach ($theme_templates as $template_file => $template_name) {
            $templates[$template_file] = $template_name;
        }
        
        // Add hardcoded templates that we know exist
        $templates['wp-custom-template-club-homepage-2'] = 'Club Homepage';
        $templates['wp-custom-template-clubs-droppage'] = 'Clubs Droppage';
        
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
    
    public function register_plugin_templates($templates, $theme, $post, $post_type) {
        // Only add templates for organization post type
        if ($post_type !== 'organization' && $post_type !== '') {
            return $templates;
        }
        
        // Get all available templates from our plugin
        $plugin_templates = $this->get_available_templates();
        
        // Remove 'default' as it's not a real template
        unset($plugin_templates['default']);
        
        // Merge with existing templates
        $templates = array_merge($templates, $plugin_templates);
        
        return $templates;
    }
    
    public function ensure_template_taxonomy_terms() {
        // Get all wp_template posts
        $template_posts = get_posts(array(
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
        
        if (empty($template_posts)) {
            return;
        }
        
        // Ensure wp_theme taxonomy exists
        if (!taxonomy_exists('wp_theme')) {
            return;
        }
        
        $theme_slug = get_stylesheet();
        
        foreach ($template_posts as $template_post) {
            // Check if template is related to our plugin
            if (strpos($template_post->post_name, 'club') !== false ||
                strpos($template_post->post_name, 'organization') !== false) {
                
                // Set the wp_theme taxonomy term
                wp_set_object_terms($template_post->ID, $theme_slug, 'wp_theme', false);
                
                // Ensure proper template slug in post_name
                if (strpos($template_post->post_name, 'wp-custom-template-') === false) {
                    wp_update_post(array(
                        'ID' => $template_post->ID,
                        'post_name' => 'wp-custom-template-' . $template_post->post_name
                    ));
                }
            }
        }
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
        // DISABLED - Template export moved to separate plugin
        wp_send_json_error('Template export has been moved to the "Template I/E" plugin.');
        return;
    }
    
    public function ajax_export_clubs_data() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'export_clubs_nonce')) {
            wp_send_json_error(array('message' => 'Security check failed'));
            return;
        }
        
        // Check capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Insufficient permissions'));
            return;
        }
        
        $export_content = isset($_POST['export_content']) && $_POST['export_content'] == '1';
        $export_images = isset($_POST['export_images']) && $_POST['export_images'] == '1';
        $export_meta = isset($_POST['export_meta']) && $_POST['export_meta'] == '1';
        
        // Create ZIP file if images are included
        if ($export_images) {
            $this->export_clubs_as_zip($export_content, $export_images, $export_meta);
        } else {
            $this->export_clubs_as_json($export_content, $export_images, $export_meta);
        }
    }
    
    private function export_clubs_as_zip($export_content, $export_images, $export_meta) {
        // Check if ZipArchive is available
        if (!class_exists('ZipArchive')) {
            wp_send_json_error(array('message' => 'ZIP functionality not available on this server'));
            return;
        }
        
        // Get all organizations (clubs)
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'post_status' => 'any',
            'numberposts' => -1
        ));
        
        // Create temporary directory for export
        $upload_dir = wp_upload_dir();
        $temp_dir = $upload_dir['basedir'] . '/campus-manager-export-' . time();
        $images_dir = $temp_dir . '/images';
        
        if (!wp_mkdir_p($temp_dir) || !wp_mkdir_p($images_dir)) {
            wp_send_json_error(array('message' => 'Could not create temporary directory'));
            return;
        }
        
        $clubs_data = array(
            'export_date' => current_time('mysql'),
            'export_site' => get_site_url(),
            'plugin_version' => '1.0.0',
            'clubs' => array()
        );
        
        $copied_images = array();
        
        foreach ($organizations as $org) {
            $club_data = array(
                'post_title' => $org->post_title,
                'post_slug' => $org->post_name,
                'post_status' => $org->post_status,
                'post_date' => $org->post_date,
                'post_author' => $org->post_author
            );
            
            // Include content if requested
            if ($export_content) {
                $club_data['post_content'] = $org->post_content;
                $club_data['post_excerpt'] = $org->post_excerpt;
            }
            
            // Include images if requested
            if ($export_images) {
                $featured_image_id = get_post_thumbnail_id($org->ID);
                if ($featured_image_id) {
                    $image_path = get_attached_file($featured_image_id);
                    if ($image_path && file_exists($image_path)) {
                        $image_filename = basename($image_path);
                        $unique_filename = $org->post_name . '_' . $image_filename;
                        $new_image_path = $images_dir . '/' . $unique_filename;
                        
                        if (copy($image_path, $new_image_path)) {
                            $club_data['featured_image'] = array(
                                'filename' => $unique_filename,
                                'original_filename' => $image_filename,
                                'alt' => get_post_meta($featured_image_id, '_wp_attachment_image_alt', true),
                                'title' => get_the_title($featured_image_id),
                                'caption' => wp_get_attachment_caption($featured_image_id)
                            );
                            $copied_images[] = $unique_filename;
                        }
                    }
                }
            }
            
            // Include metadata if requested
            if ($export_meta) {
                $meta_data = get_post_meta($org->ID);
                $filtered_meta = array();
                foreach ($meta_data as $key => $value) {
                    // Skip WordPress internal meta fields
                    if (!str_starts_with($key, '_') || in_array($key, ['_wp_page_template'])) {
                        $filtered_meta[$key] = is_array($value) && count($value) == 1 ? $value[0] : $value;
                    }
                }
                $club_data['meta'] = $filtered_meta;
            }
            
            $clubs_data['clubs'][] = $club_data;
        }
        
        // Save JSON data
        $json_file = $temp_dir . '/clubs-data.json';
        file_put_contents($json_file, json_encode($clubs_data, JSON_PRETTY_PRINT));
        
        // Create ZIP file
        $zip_filename = 'campus-manager-clubs-' . date('Y-m-d-H-i-s') . '.zip';
        $zip_path = $upload_dir['basedir'] . '/' . $zip_filename;
        
        $zip = new ZipArchive();
        if ($zip->open($zip_path, ZipArchive::CREATE) !== TRUE) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error(array('message' => 'Could not create ZIP file'));
            return;
        }
        
        // Add JSON file to ZIP
        $zip->addFile($json_file, 'clubs-data.json');
        
        // Add images to ZIP
        if ($export_images && !empty($copied_images)) {
            foreach ($copied_images as $image_filename) {
                $image_path = $images_dir . '/' . $image_filename;
                if (file_exists($image_path)) {
                    $zip->addFile($image_path, 'images/' . $image_filename);
                }
            }
        }
        
        $zip->close();
        
        // Clean up temporary directory
        $this->cleanup_temp_dir($temp_dir);
        
        // Generate download URL
        $zip_url = $upload_dir['baseurl'] . '/' . $zip_filename;
        
        wp_send_json_success(array(
            'download_url' => $zip_url,
            'filename' => $zip_filename,
            'count' => count($organizations),
            'images_count' => count($copied_images)
        ));
    }
    
    private function export_clubs_as_json($export_content, $export_images, $export_meta) {
        // Get all organizations (clubs)
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'post_status' => 'any',
            'numberposts' => -1
        ));
        
        $clubs_data = array(
            'export_date' => current_time('mysql'),
            'export_site' => get_site_url(),
            'plugin_version' => '1.0.0',
            'clubs' => array()
        );
        
        foreach ($organizations as $org) {
            $club_data = array(
                'post_title' => $org->post_title,
                'post_slug' => $org->post_name,
                'post_status' => $org->post_status,
                'post_date' => $org->post_date,
                'post_author' => $org->post_author
            );
            
            // Include content if requested
            if ($export_content) {
                $club_data['post_content'] = $org->post_content;
                $club_data['post_excerpt'] = $org->post_excerpt;
            }
            
            // Include metadata if requested
            if ($export_meta) {
                $meta_data = get_post_meta($org->ID);
                $filtered_meta = array();
                foreach ($meta_data as $key => $value) {
                    // Skip WordPress internal meta fields
                    if (!str_starts_with($key, '_') || in_array($key, ['_wp_page_template'])) {
                        $filtered_meta[$key] = is_array($value) && count($value) == 1 ? $value[0] : $value;
                    }
                }
                $club_data['meta'] = $filtered_meta;
            }
            
            $clubs_data['clubs'][] = $club_data;
        }
        
        wp_send_json_success(array(
            'content' => $clubs_data,
            'count' => count($organizations)
        ));
    }
    
    private function cleanup_temp_dir($dir) {
        if (!is_dir($dir)) {
            return;
        }
        
        $files = array_diff(scandir($dir), array('.', '..'));
        foreach ($files as $file) {
            $file_path = $dir . '/' . $file;
            if (is_dir($file_path)) {
                $this->cleanup_temp_dir($file_path);
            } else {
                unlink($file_path);
            }
        }
        rmdir($dir);
    }
    
    public function ajax_import_clubs_data() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'import_clubs_nonce')) {
            wp_send_json_error(array('message' => 'Security check failed'));
            return;
        }
        
        // Check capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Insufficient permissions'));
            return;
        }
        
        if (!isset($_FILES['clubs_import_file']) || $_FILES['clubs_import_file']['error'] !== UPLOAD_ERR_OK) {
            wp_send_json_error(array('message' => 'Error uploading file. Please try again.'));
            return;
        }
        
        $uploaded_file = $_FILES['clubs_import_file'];
        $file_extension = strtolower(pathinfo($uploaded_file['name'], PATHINFO_EXTENSION));
        
        if ($file_extension === 'zip') {
            $this->import_clubs_from_zip($uploaded_file);
        } else if ($file_extension === 'json') {
            $this->import_clubs_from_json($uploaded_file);
        } else {
            wp_send_json_error(array('message' => 'Invalid file format. Please upload a JSON or ZIP file.'));
        }
    }
    
    private function import_clubs_from_zip($uploaded_file) {
        // Check if ZipArchive is available
        if (!class_exists('ZipArchive')) {
            wp_send_json_error(array('message' => 'ZIP functionality not available on this server'));
            return;
        }
        
        $upload_dir = wp_upload_dir();
        $temp_dir = $upload_dir['basedir'] . '/campus-manager-import-' . time();
        
        if (!wp_mkdir_p($temp_dir)) {
            wp_send_json_error(array('message' => 'Could not create temporary directory'));
            return;
        }
        
        $zip = new ZipArchive();
        if ($zip->open($uploaded_file['tmp_name']) !== TRUE) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error(array('message' => 'Could not open ZIP file'));
            return;
        }
        
        // Extract ZIP contents
        $zip->extractTo($temp_dir);
        $zip->close();
        
        // Look for clubs-data.json
        $json_file = $temp_dir . '/clubs-data.json';
        if (!file_exists($json_file)) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error(array('message' => 'Invalid ZIP file format. clubs-data.json not found.'));
            return;
        }
        
        $file_content = file_get_contents($json_file);
        $import_data = json_decode($file_content, true);
        
        if (!$import_data || !isset($import_data['clubs'])) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error(array('message' => 'Invalid import file format. Please ensure you are importing a valid Campus Manager clubs export file.'));
            return;
        }
        
        $overwrite_existing = isset($_POST['overwrite_existing']) && $_POST['overwrite_existing'] === '1';
        $imported_count = 0;
        $skipped_count = 0;
        $images_dir = $temp_dir . '/images';
        
        foreach ($import_data['clubs'] as $club_data) {
            if (empty($club_data['post_slug']) || empty($club_data['post_title'])) {
                continue;
            }
            
            // Check if club already exists
            $existing_club = get_page_by_path($club_data['post_slug'], OBJECT, 'organization');
            
            if ($existing_club && !$overwrite_existing) {
                $skipped_count++;
                continue;
            }
            
            $post_data = array(
                'post_type' => 'organization',
                'post_title' => sanitize_text_field($club_data['post_title']),
                'post_name' => sanitize_title($club_data['post_slug']),
                'post_status' => isset($club_data['post_status']) ? $club_data['post_status'] : 'publish',
                'post_content' => isset($club_data['post_content']) ? wp_kses_post($club_data['post_content']) : '',
                'post_excerpt' => isset($club_data['post_excerpt']) ? wp_kses_post($club_data['post_excerpt']) : '',
                'post_author' => isset($club_data['post_author']) ? intval($club_data['post_author']) : get_current_user_id()
            );
            
            if ($existing_club) {
                // Update existing club
                $post_data['ID'] = $existing_club->ID;
                $post_id = wp_update_post($post_data);
            } else {
                // Create new club
                $post_id = wp_insert_post($post_data);
            }
            
            if ($post_id && !is_wp_error($post_id)) {
                // Import metadata
                if (!empty($club_data['meta'])) {
                    foreach ($club_data['meta'] as $meta_key => $meta_value) {
                        update_post_meta($post_id, $meta_key, $meta_value);
                    }
                }
                
                // Import featured image if available from ZIP
                if (!empty($club_data['featured_image']) && is_dir($images_dir)) {
                    $this->import_featured_image_from_zip($post_id, $club_data['featured_image'], $images_dir);
                }
                
                $imported_count++;
            }
        }
        
        // Clean up temporary directory
        $this->cleanup_temp_dir($temp_dir);
        
        wp_send_json_success(array(
            'imported' => $imported_count,
            'skipped' => $skipped_count
        ));
    }
    
    private function import_clubs_from_json($uploaded_file) {
        $file_content = file_get_contents($uploaded_file['tmp_name']);
        $import_data = json_decode($file_content, true);
        
        if (!$import_data || !isset($import_data['clubs'])) {
            wp_send_json_error(array('message' => 'Invalid import file format. Please ensure you are importing a valid Campus Manager clubs export file.'));
            return;
        }
        
        $overwrite_existing = isset($_POST['overwrite_existing']) && $_POST['overwrite_existing'] === '1';
        $imported_count = 0;
        $skipped_count = 0;
        
        foreach ($import_data['clubs'] as $club_data) {
            if (empty($club_data['post_slug']) || empty($club_data['post_title'])) {
                continue;
            }
            
            // Check if club already exists
            $existing_club = get_page_by_path($club_data['post_slug'], OBJECT, 'organization');
            
            if ($existing_club && !$overwrite_existing) {
                $skipped_count++;
                continue;
            }
            
            $post_data = array(
                'post_type' => 'organization',
                'post_title' => sanitize_text_field($club_data['post_title']),
                'post_name' => sanitize_title($club_data['post_slug']),
                'post_status' => isset($club_data['post_status']) ? $club_data['post_status'] : 'publish',
                'post_content' => isset($club_data['post_content']) ? wp_kses_post($club_data['post_content']) : '',
                'post_excerpt' => isset($club_data['post_excerpt']) ? wp_kses_post($club_data['post_excerpt']) : '',
                'post_author' => isset($club_data['post_author']) ? intval($club_data['post_author']) : get_current_user_id()
            );
            
            if ($existing_club) {
                // Update existing club
                $post_data['ID'] = $existing_club->ID;
                $post_id = wp_update_post($post_data);
            } else {
                // Create new club
                $post_id = wp_insert_post($post_data);
            }
            
            if ($post_id && !is_wp_error($post_id)) {
                // Import metadata
                if (!empty($club_data['meta'])) {
                    foreach ($club_data['meta'] as $meta_key => $meta_value) {
                        update_post_meta($post_id, $meta_key, $meta_value);
                    }
                }
                
                $imported_count++;
            }
        }
        
        wp_send_json_success(array(
            'imported' => $imported_count,
            'skipped' => $skipped_count
        ));
    }
    
    private function import_featured_image_from_zip($post_id, $image_data, $images_dir) {
        if (empty($image_data['filename'])) {
            return false;
        }
        
        $image_path = $images_dir . '/' . $image_data['filename'];
        
        if (!file_exists($image_path)) {
            return false;
        }
        
        $upload_dir = wp_upload_dir();
        $new_filename = $image_data['original_filename'] ?: $image_data['filename'];
        $new_file_path = $upload_dir['path'] . '/' . $new_filename;
        
        // Copy image to uploads directory
        if (!copy($image_path, $new_file_path)) {
            return false;
        }
        
        // Create attachment
        $file_type = wp_check_filetype($new_filename, null);
        $attachment_data = array(
            'post_mime_type' => $file_type['type'],
            'post_title' => isset($image_data['title']) ? $image_data['title'] : '',
            'post_content' => '',
            'post_excerpt' => isset($image_data['caption']) ? $image_data['caption'] : '',
            'post_status' => 'inherit'
        );
        
        $attachment_id = wp_insert_attachment($attachment_data, $new_file_path, $post_id);
        
        if (!is_wp_error($attachment_id)) {
            // Generate metadata
            require_once(ABSPATH . 'wp-admin/includes/image.php');
            $attachment_metadata = wp_generate_attachment_metadata($attachment_id, $new_file_path);
            wp_update_attachment_metadata($attachment_id, $attachment_metadata);
            
            // Set alt text
            if (!empty($image_data['alt'])) {
                update_post_meta($attachment_id, '_wp_attachment_image_alt', $image_data['alt']);
            }
            
            // Set as featured image
            set_post_thumbnail($post_id, $attachment_id);
            
            return $attachment_id;
        }
        
        return false;
    }
    
    private function import_featured_image($post_id, $image_data) {
        if (empty($image_data['url'])) {
            return false;
        }
        
        // Download image from URL
        $image_url = $image_data['url'];
        $upload_dir = wp_upload_dir();
        
        // Get image content
        $image_response = wp_remote_get($image_url);
        if (is_wp_error($image_response)) {
            return false;
        }
        
        $image_content = wp_remote_retrieve_body($image_response);
        if (empty($image_content)) {
            return false;
        }
        
        // Generate filename
        $filename = isset($image_data['filename']) ? $image_data['filename'] : basename($image_url);
        $file_path = $upload_dir['path'] . '/' . $filename;
        
        // Save file
        $file_saved = file_put_contents($file_path, $image_content);
        if (!$file_saved) {
            return false;
        }
        
        // Create attachment
        $file_type = wp_check_filetype($filename, null);
        $attachment_data = array(
            'post_mime_type' => $file_type['type'],
            'post_title' => isset($image_data['title']) ? $image_data['title'] : '',
            'post_content' => '',
            'post_excerpt' => isset($image_data['caption']) ? $image_data['caption'] : '',
            'post_status' => 'inherit'
        );
        
        $attachment_id = wp_insert_attachment($attachment_data, $file_path, $post_id);
        
        if (!is_wp_error($attachment_id)) {
            // Generate metadata
            require_once(ABSPATH . 'wp-admin/includes/image.php');
            $attachment_metadata = wp_generate_attachment_metadata($attachment_id, $file_path);
            wp_update_attachment_metadata($attachment_id, $attachment_metadata);
            
            // Set alt text
            if (!empty($image_data['alt'])) {
                update_post_meta($attachment_id, '_wp_attachment_image_alt', $image_data['alt']);
            }
            
            // Set as featured image
            set_post_thumbnail($post_id, $attachment_id);
            
            return $attachment_id;
        }
        
        return false;
    }
    
    public function ajax_export_complete_data() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'export_complete_nonce')) {
            wp_send_json_error(array('message' => 'Security check failed'));
            return;
        }
        
        // Check capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Insufficient permissions'));
            return;
        }
        
        $export_content = isset($_POST['export_content']) && $_POST['export_content'] == '1';
        $export_images = isset($_POST['export_images']) && $_POST['export_images'] == '1';
        $export_meta = isset($_POST['export_meta']) && $_POST['export_meta'] == '1';
        $export_relations = isset($_POST['export_relations']) && $_POST['export_relations'] == '1';
        
        // Create ZIP file if images are included
        if ($export_images) {
            $this->export_complete_as_zip($export_content, $export_images, $export_meta, $export_relations);
        } else {
            $this->export_complete_as_json($export_content, $export_images, $export_meta, $export_relations);
        }
    }
    
    private function export_complete_as_zip($export_content, $export_images, $export_meta, $export_relations) {
        // Check if ZipArchive is available
        if (!class_exists('ZipArchive')) {
            wp_send_json_error(array('message' => 'ZIP functionality not available on this server'));
            return;
        }
        
        // Get all organizations and events
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'post_status' => 'any',
            'numberposts' => -1
        ));
        
        $events = get_posts(array(
            'post_type' => 'event',
            'post_status' => 'any',
            'numberposts' => -1
        ));
        
        // Create temporary directory for export
        $upload_dir = wp_upload_dir();
        $temp_dir = $upload_dir['basedir'] . '/campus-manager-complete-export-' . time();
        $images_dir = $temp_dir . '/images';
        
        if (!wp_mkdir_p($temp_dir) || !wp_mkdir_p($images_dir)) {
            wp_send_json_error(array('message' => 'Could not create temporary directory'));
            return;
        }
        
        $complete_data = array(
            'export_date' => current_time('mysql'),
            'export_site' => get_site_url(),
            'plugin_version' => '1.0.0',
            'export_type' => 'complete',
            'clubs' => array(),
            'events' => array()
        );
        
        $copied_images = array();
        
        // Process clubs/organizations
        foreach ($organizations as $org) {
            $club_data = array(
                'post_title' => $org->post_title,
                'post_slug' => $org->post_name,
                'post_status' => $org->post_status,
                'post_date' => $org->post_date,
                'post_author' => $org->post_author
            );
            
            if ($export_content) {
                $club_data['post_content'] = $org->post_content;
                $club_data['post_excerpt'] = $org->post_excerpt;
                
                // Extract images from content
                if ($export_images) {
                    $content_images = $this->extract_content_images($org->post_content, $images_dir, $org->post_name . '_content');
                    if (!empty($content_images)) {
                        $club_data['content_images'] = $content_images;
                        $copied_images = array_merge($copied_images, array_column($content_images, 'filename'));
                    }
                }
            }
            
            if ($export_images) {
                $featured_image_id = get_post_thumbnail_id($org->ID);
                if ($featured_image_id) {
                    $image_path = get_attached_file($featured_image_id);
                    if ($image_path && file_exists($image_path)) {
                        $image_filename = basename($image_path);
                        $unique_filename = $org->post_name . '_featured_' . $image_filename;
                        $new_image_path = $images_dir . '/' . $unique_filename;
                        
                        if (copy($image_path, $new_image_path)) {
                            $club_data['featured_image'] = array(
                                'filename' => $unique_filename,
                                'original_filename' => $image_filename,
                                'alt' => get_post_meta($featured_image_id, '_wp_attachment_image_alt', true),
                                'title' => get_the_title($featured_image_id),
                                'caption' => wp_get_attachment_caption($featured_image_id)
                            );
                            $copied_images[] = $unique_filename;
                        }
                    }
                }
            }
            
            if ($export_meta) {
                $meta_data = get_post_meta($org->ID);
                $filtered_meta = array();
                foreach ($meta_data as $key => $value) {
                    if (!str_starts_with($key, '_') || in_array($key, ['_wp_page_template'])) {
                        $filtered_meta[$key] = is_array($value) && count($value) == 1 ? $value[0] : $value;
                    }
                }
                $club_data['meta'] = $filtered_meta;
            }
            
            $complete_data['clubs'][] = $club_data;
        }
        
        // Process events
        foreach ($events as $event) {
            $event_data = array(
                'post_title' => $event->post_title,
                'post_slug' => $event->post_name,
                'post_status' => $event->post_status,
                'post_date' => $event->post_date,
                'post_author' => $event->post_author
            );
            
            if ($export_content) {
                $event_data['post_content'] = $event->post_content;
                $event_data['post_excerpt'] = $event->post_excerpt;
                
                // Extract images from content
                if ($export_images) {
                    $content_images = $this->extract_content_images($event->post_content, $images_dir, $event->post_name . '_content');
                    if (!empty($content_images)) {
                        $event_data['content_images'] = $content_images;
                        $copied_images = array_merge($copied_images, array_column($content_images, 'filename'));
                    }
                }
            }
            
            if ($export_images) {
                // Export event flyer image
                $flyer_image_id = get_post_meta($event->ID, '_event_flyer', true);
                if (!$flyer_image_id) {
                    $flyer_image_id = get_post_thumbnail_id($event->ID);
                }
                
                if ($flyer_image_id) {
                    $image_path = get_attached_file($flyer_image_id);
                    if ($image_path && file_exists($image_path)) {
                        $image_filename = basename($image_path);
                        $unique_filename = $event->post_name . '_flyer_' . $image_filename;
                        $new_image_path = $images_dir . '/' . $unique_filename;
                        
                        if (copy($image_path, $new_image_path)) {
                            $event_data['flyer_image'] = array(
                                'filename' => $unique_filename,
                                'original_filename' => $image_filename,
                                'alt' => get_post_meta($flyer_image_id, '_wp_attachment_image_alt', true),
                                'title' => get_the_title($flyer_image_id),
                                'caption' => wp_get_attachment_caption($flyer_image_id)
                            );
                            $copied_images[] = $unique_filename;
                        }
                    }
                }
            }
            
            if ($export_meta) {
                $meta_data = get_post_meta($event->ID);
                $filtered_meta = array();
                foreach ($meta_data as $key => $value) {
                    if (!str_starts_with($key, '_') || in_array($key, ['_event_start_date', '_event_end_date', '_event_location', '_event_organization', '_event_flyer'])) {
                        $filtered_meta[$key] = is_array($value) && count($value) == 1 ? $value[0] : $value;
                    }
                }
                $event_data['meta'] = $filtered_meta;
            }
            
            if ($export_relations) {
                $associated_org_id = get_post_meta($event->ID, '_event_organization', true);
                if ($associated_org_id) {
                    $org = get_post($associated_org_id);
                    if ($org) {
                        $event_data['organization'] = array(
                            'id' => $org->ID,
                            'title' => $org->post_title,
                            'slug' => $org->post_name
                        );
                    }
                }
            }
            
            $complete_data['events'][] = $event_data;
        }
        
        // Save JSON data
        $json_file = $temp_dir . '/campus-manager-complete.json';
        file_put_contents($json_file, json_encode($complete_data, JSON_PRETTY_PRINT));
        
        // Create ZIP file
        $zip_filename = 'campus-manager-complete-' . date('Y-m-d-H-i-s') . '.zip';
        $zip_path = $upload_dir['basedir'] . '/' . $zip_filename;
        
        $zip = new ZipArchive();
        if ($zip->open($zip_path, ZipArchive::CREATE) !== TRUE) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error(array('message' => 'Could not create ZIP file'));
            return;
        }
        
        // Add JSON file to ZIP
        $zip->addFile($json_file, 'campus-manager-complete.json');
        
        // Add images to ZIP
        if ($export_images && !empty($copied_images)) {
            foreach ($copied_images as $image_filename) {
                $image_path = $images_dir . '/' . $image_filename;
                if (file_exists($image_path)) {
                    $zip->addFile($image_path, 'images/' . $image_filename);
                }
            }
        }
        
        $zip->close();
        
        // Clean up temporary directory
        $this->cleanup_temp_dir($temp_dir);
        
        // Generate download URL
        $zip_url = $upload_dir['baseurl'] . '/' . $zip_filename;
        
        wp_send_json_success(array(
            'download_url' => $zip_url,
            'filename' => $zip_filename,
            'clubs_count' => count($organizations),
            'events_count' => count($events),
            'images_count' => count($copied_images)
        ));
    }
    
    private function extract_content_images($content, $images_dir, $prefix) {
        $content_images = array();
        
        // Find all image URLs in content
        preg_match_all('/<img[^>]*src=["\']([^"\']*)["\'][^>]*>/i', $content, $matches);
        
        if (!empty($matches[1])) {
            foreach ($matches[1] as $index => $image_url) {
                // Check if it's a local image
                $site_url = get_site_url();
                if (strpos($image_url, $site_url) === 0) {
                    // Get attachment ID from URL
                    $attachment_id = attachment_url_to_postid($image_url);
                    if ($attachment_id) {
                        $image_path = get_attached_file($attachment_id);
                        if ($image_path && file_exists($image_path)) {
                            $image_filename = basename($image_path);
                            $unique_filename = $prefix . '_' . $index . '_' . $image_filename;
                            $new_image_path = $images_dir . '/' . $unique_filename;
                            
                            if (copy($image_path, $new_image_path)) {
                                $content_images[] = array(
                                    'filename' => $unique_filename,
                                    'original_filename' => $image_filename,
                                    'original_url' => $image_url,
                                    'alt' => get_post_meta($attachment_id, '_wp_attachment_image_alt', true),
                                    'title' => get_the_title($attachment_id),
                                    'caption' => wp_get_attachment_caption($attachment_id)
                                );
                            }
                        }
                    }
                }
            }
        }
        
        return $content_images;
    }
    
    private function export_complete_as_json($export_content, $export_images, $export_meta, $export_relations) {
        // Get all organizations and events
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'post_status' => 'any',
            'numberposts' => -1
        ));
        
        $events = get_posts(array(
            'post_type' => 'event',
            'post_status' => 'any',
            'numberposts' => -1
        ));
        
        $complete_data = array(
            'export_date' => current_time('mysql'),
            'export_site' => get_site_url(),
            'plugin_version' => '1.0.0',
            'export_type' => 'complete',
            'clubs' => array(),
            'events' => array()
        );
        
        // Process clubs/organizations (basic data only for JSON)
        foreach ($organizations as $org) {
            $club_data = array(
                'post_title' => $org->post_title,
                'post_slug' => $org->post_name,
                'post_status' => $org->post_status,
                'post_date' => $org->post_date,
                'post_author' => $org->post_author
            );
            
            if ($export_content) {
                $club_data['post_content'] = $org->post_content;
                $club_data['post_excerpt'] = $org->post_excerpt;
            }
            
            if ($export_meta) {
                $meta_data = get_post_meta($org->ID);
                $filtered_meta = array();
                foreach ($meta_data as $key => $value) {
                    if (!str_starts_with($key, '_') || in_array($key, ['_wp_page_template'])) {
                        $filtered_meta[$key] = is_array($value) && count($value) == 1 ? $value[0] : $value;
                    }
                }
                $club_data['meta'] = $filtered_meta;
            }
            
            $complete_data['clubs'][] = $club_data;
        }
        
        // Process events
        foreach ($events as $event) {
            $event_data = array(
                'post_title' => $event->post_title,
                'post_slug' => $event->post_name,
                'post_status' => $event->post_status,
                'post_date' => $event->post_date,
                'post_author' => $event->post_author
            );
            
            if ($export_content) {
                $event_data['post_content'] = $event->post_content;
                $event_data['post_excerpt'] = $event->post_excerpt;
            }
            
            if ($export_meta) {
                $meta_data = get_post_meta($event->ID);
                $filtered_meta = array();
                foreach ($meta_data as $key => $value) {
                    if (!str_starts_with($key, '_') || in_array($key, ['_event_start_date', '_event_end_date', '_event_location', '_event_organization', '_event_flyer'])) {
                        $filtered_meta[$key] = is_array($value) && count($value) == 1 ? $value[0] : $value;
                    }
                }
                $event_data['meta'] = $filtered_meta;
            }
            
            if ($export_relations) {
                $associated_org_id = get_post_meta($event->ID, '_event_organization', true);
                if ($associated_org_id) {
                    $org = get_post($associated_org_id);
                    if ($org) {
                        $event_data['organization'] = array(
                            'id' => $org->ID,
                            'title' => $org->post_title,
                            'slug' => $org->post_name
                        );
                    }
                }
            }
            
            $complete_data['events'][] = $event_data;
        }
        
        wp_send_json_success(array(
            'content' => $complete_data,
            'clubs_count' => count($organizations),
            'events_count' => count($events)
        ));
    }
    
    public function ajax_export_events_data() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'export_events_nonce')) {
            wp_send_json_error(array('message' => 'Security check failed'));
            return;
        }
        
        // Check capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Insufficient permissions'));
            return;
        }
        
        $export_content = isset($_POST['export_content']) && $_POST['export_content'] == '1';
        $export_images = isset($_POST['export_images']) && $_POST['export_images'] == '1';
        $export_meta = isset($_POST['export_meta']) && $_POST['export_meta'] == '1';
        $export_organizations = isset($_POST['export_organizations']) && $_POST['export_organizations'] == '1';
        
        // Create ZIP file if images are included
        if ($export_images) {
            $this->export_events_as_zip($export_content, $export_images, $export_meta, $export_organizations);
            return;
        }
        
        // Get all events
        $events = get_posts(array(
            'post_type' => 'event',
            'post_status' => 'any',
            'numberposts' => -1
        ));
        
        $events_data = array(
            'export_date' => current_time('mysql'),
            'export_site' => get_site_url(),
            'plugin_version' => '1.0.0',
            'events' => array()
        );
        
        foreach ($events as $event) {
            $event_data = array(
                'post_title' => $event->post_title,
                'post_slug' => $event->post_name,
                'post_status' => $event->post_status,
                'post_date' => $event->post_date,
                'post_author' => $event->post_author
            );
            
            // Include content if requested
            if ($export_content) {
                $event_data['post_content'] = $event->post_content;
                $event_data['post_excerpt'] = $event->post_excerpt;
            }
            
            // Include metadata if requested
            if ($export_meta) {
                $meta_data = get_post_meta($event->ID);
                $filtered_meta = array();
                foreach ($meta_data as $key => $value) {
                    // Skip WordPress internal meta fields but keep important ones
                    if (!str_starts_with($key, '_') || in_array($key, ['_event_start_date', '_event_end_date', '_event_location'])) {
                        $filtered_meta[$key] = is_array($value) && count($value) == 1 ? $value[0] : $value;
                    }
                }
                $event_data['meta'] = $filtered_meta;
            }
            
            // Include organization associations if requested
            if ($export_organizations) {
                $associated_org_id = get_post_meta($event->ID, '_event_organization', true);
                if ($associated_org_id) {
                    $org = get_post($associated_org_id);
                    if ($org) {
                        $event_data['organization'] = array(
                            'id' => $org->ID,
                            'title' => $org->post_title,
                            'slug' => $org->post_name
                        );
                    }
                }
            }
            
            $events_data['events'][] = $event_data;
        }
        
        wp_send_json_success(array(
            'content' => $events_data,
            'count' => count($events)
        ));
    }
    
    public function ajax_import_events_data() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'import_events_nonce')) {
            wp_send_json_error(array('message' => 'Security check failed'));
            return;
        }
        
        // Check capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Insufficient permissions'));
            return;
        }
        
        if (!isset($_FILES['events_import_file']) || $_FILES['events_import_file']['error'] !== UPLOAD_ERR_OK) {
            wp_send_json_error(array('message' => 'Error uploading file. Please try again.'));
            return;
        }
        
        $file_content = file_get_contents($_FILES['events_import_file']['tmp_name']);
        $import_data = json_decode($file_content, true);
        
        if (!$import_data || !isset($import_data['events'])) {
            wp_send_json_error(array('message' => 'Invalid import file format. Please ensure you are importing a valid Campus Manager events export file.'));
            return;
        }
        
        $overwrite_existing = isset($_POST['overwrite_existing']) && $_POST['overwrite_existing'] === '1';
        $imported_count = 0;
        $skipped_count = 0;
        
        foreach ($import_data['events'] as $event_data) {
            if (empty($event_data['post_slug']) || empty($event_data['post_title'])) {
                continue;
            }
            
            // Check if event already exists
            $existing_event = get_page_by_path($event_data['post_slug'], OBJECT, 'event');
            
            if ($existing_event && !$overwrite_existing) {
                $skipped_count++;
                continue;
            }
            
            $post_data = array(
                'post_type' => 'event',
                'post_title' => sanitize_text_field($event_data['post_title']),
                'post_name' => sanitize_title($event_data['post_slug']),
                'post_status' => isset($event_data['post_status']) ? $event_data['post_status'] : 'publish',
                'post_content' => isset($event_data['post_content']) ? wp_kses_post($event_data['post_content']) : '',
                'post_excerpt' => isset($event_data['post_excerpt']) ? wp_kses_post($event_data['post_excerpt']) : '',
                'post_author' => isset($event_data['post_author']) ? intval($event_data['post_author']) : get_current_user_id()
            );
            
            if ($existing_event) {
                // Update existing event
                $post_data['ID'] = $existing_event->ID;
                $post_id = wp_update_post($post_data);
            } else {
                // Create new event
                $post_id = wp_insert_post($post_data);
            }
            
            if ($post_id && !is_wp_error($post_id)) {
                // Import metadata
                if (!empty($event_data['meta'])) {
                    foreach ($event_data['meta'] as $meta_key => $meta_value) {
                        update_post_meta($post_id, $meta_key, $meta_value);
                    }
                }
                
                // Import organization association
                if (!empty($event_data['organization'])) {
                    $org_slug = $event_data['organization']['slug'];
                    $org = get_page_by_path($org_slug, OBJECT, 'organization');
                    if ($org) {
                        update_post_meta($post_id, '_event_organization', $org->ID);
                    }
                }
                
                $imported_count++;
            }
        }
        
        wp_send_json_success(array(
            'imported' => $imported_count,
            'skipped' => $skipped_count
        ));
    }
    
    private function export_events_as_zip($export_content, $export_images, $export_meta, $export_organizations) {
        // Check if ZipArchive is available
        if (!class_exists('ZipArchive')) {
            wp_send_json_error(array('message' => 'ZIP functionality not available on this server'));
            return;
        }
        
        // Get all events
        $events = get_posts(array(
            'post_type' => 'event',
            'post_status' => 'any',
            'numberposts' => -1
        ));
        
        // Create temporary directory for export
        $upload_dir = wp_upload_dir();
        $temp_dir = $upload_dir['basedir'] . '/campus-manager-events-export-' . time();
        $images_dir = $temp_dir . '/images';
        
        if (!wp_mkdir_p($temp_dir) || !wp_mkdir_p($images_dir)) {
            wp_send_json_error(array('message' => 'Could not create temporary directory'));
            return;
        }
        
        $events_data = array(
            'export_date' => current_time('mysql'),
            'export_site' => get_site_url(),
            'plugin_version' => '1.0.0',
            'export_type' => 'events',
            'events' => array()
        );
        
        $copied_images = array();
        
        foreach ($events as $event) {
            $event_data = array(
                'post_title' => $event->post_title,
                'post_slug' => $event->post_name,
                'post_status' => $event->post_status,
                'post_date' => $event->post_date,
                'post_author' => $event->post_author
            );
            
            if ($export_content) {
                $event_data['post_content'] = $event->post_content;
                $event_data['post_excerpt'] = $event->post_excerpt;
                
                // Extract images from content
                if ($export_images) {
                    $content_images = $this->extract_content_images($event->post_content, $images_dir, $event->post_name . '_content');
                    if (!empty($content_images)) {
                        $event_data['content_images'] = $content_images;
                        $copied_images = array_merge($copied_images, array_column($content_images, 'filename'));
                    }
                }
            }
            
            if ($export_images) {
                // Export event flyer image
                $flyer_image_id = get_post_meta($event->ID, '_event_flyer', true);
                if (!$flyer_image_id) {
                    $flyer_image_id = get_post_thumbnail_id($event->ID);
                }
                
                if ($flyer_image_id) {
                    $image_path = get_attached_file($flyer_image_id);
                    if ($image_path && file_exists($image_path)) {
                        $image_filename = basename($image_path);
                        $unique_filename = $event->post_name . '_flyer_' . $image_filename;
                        $new_image_path = $images_dir . '/' . $unique_filename;
                        
                        if (copy($image_path, $new_image_path)) {
                            $event_data['flyer_image'] = array(
                                'filename' => $unique_filename,
                                'original_filename' => $image_filename,
                                'alt' => get_post_meta($flyer_image_id, '_wp_attachment_image_alt', true),
                                'title' => get_the_title($flyer_image_id),
                                'caption' => wp_get_attachment_caption($flyer_image_id)
                            );
                            $copied_images[] = $unique_filename;
                        }
                    }
                }
            }
            
            if ($export_meta) {
                $meta_data = get_post_meta($event->ID);
                $filtered_meta = array();
                foreach ($meta_data as $key => $value) {
                    if (!str_starts_with($key, '_') || in_array($key, ['_event_start_date', '_event_end_date', '_event_location', '_event_organization', '_event_flyer'])) {
                        $filtered_meta[$key] = is_array($value) && count($value) == 1 ? $value[0] : $value;
                    }
                }
                $event_data['meta'] = $filtered_meta;
            }
            
            if ($export_organizations) {
                $associated_org_id = get_post_meta($event->ID, '_event_organization', true);
                if ($associated_org_id) {
                    $org = get_post($associated_org_id);
                    if ($org) {
                        $event_data['organization'] = array(
                            'id' => $org->ID,
                            'title' => $org->post_title,
                            'slug' => $org->post_name
                        );
                    }
                }
            }
            
            $events_data['events'][] = $event_data;
        }
        
        // Save JSON data
        $json_file = $temp_dir . '/events-data.json';
        file_put_contents($json_file, json_encode($events_data, JSON_PRETTY_PRINT));
        
        // Create ZIP file
        $zip_filename = 'campus-manager-events-' . date('Y-m-d-H-i-s') . '.zip';
        $zip_path = $upload_dir['basedir'] . '/' . $zip_filename;
        
        $zip = new ZipArchive();
        if ($zip->open($zip_path, ZipArchive::CREATE) !== TRUE) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error(array('message' => 'Could not create ZIP file'));
            return;
        }
        
        // Add JSON file to ZIP
        $zip->addFile($json_file, 'events-data.json');
        
        // Add images to ZIP
        if ($export_images && !empty($copied_images)) {
            foreach ($copied_images as $image_filename) {
                $image_path = $images_dir . '/' . $image_filename;
                if (file_exists($image_path)) {
                    $zip->addFile($image_path, 'images/' . $image_filename);
                }
            }
        }
        
        $zip->close();
        
        // Clean up temporary directory
        $this->cleanup_temp_dir($temp_dir);
        
        // Generate download URL
        $zip_url = $upload_dir['baseurl'] . '/' . $zip_filename;
        
        wp_send_json_success(array(
            'download_url' => $zip_url,
            'filename' => $zip_filename,
            'count' => count($events),
            'images_count' => count($copied_images)
        ));
    }
    
    public function ajax_import_complete_data() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'import_complete_nonce')) {
            wp_send_json_error(array('message' => 'Security check failed'));
            return;
        }
        
        // Check capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Insufficient permissions'));
            return;
        }
        
        if (!isset($_FILES['complete_import_file']) || $_FILES['complete_import_file']['error'] !== UPLOAD_ERR_OK) {
            wp_send_json_error(array('message' => 'Error uploading file. Please try again.'));
            return;
        }
        
        $uploaded_file = $_FILES['complete_import_file'];
        $file_extension = strtolower(pathinfo($uploaded_file['name'], PATHINFO_EXTENSION));
        
        if ($file_extension === 'zip') {
            $this->import_complete_from_zip($uploaded_file);
        } else if ($file_extension === 'json') {
            $this->import_complete_from_json($uploaded_file);
        } else {
            wp_send_json_error(array('message' => 'Invalid file format. Please upload a JSON or ZIP file.'));
        }
    }
    
    private function import_complete_from_zip($uploaded_file) {
        // Check if ZipArchive is available
        if (!class_exists('ZipArchive')) {
            wp_send_json_error(array('message' => 'ZIP functionality not available on this server'));
            return;
        }
        
        $upload_dir = wp_upload_dir();
        $temp_dir = $upload_dir['basedir'] . '/campus-manager-complete-import-' . time();
        
        if (!wp_mkdir_p($temp_dir)) {
            wp_send_json_error(array('message' => 'Could not create temporary directory'));
            return;
        }
        
        $zip = new ZipArchive();
        if ($zip->open($uploaded_file['tmp_name']) !== TRUE) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error(array('message' => 'Could not open ZIP file'));
            return;
        }
        
        // Extract ZIP contents
        $zip->extractTo($temp_dir);
        $zip->close();
        
        // Look for campus-manager-complete.json or other data files
        $json_file = '';
        if (file_exists($temp_dir . '/campus-manager-complete.json')) {
            $json_file = $temp_dir . '/campus-manager-complete.json';
        } elseif (file_exists($temp_dir . '/clubs-data.json')) {
            $json_file = $temp_dir . '/clubs-data.json';
        } elseif (file_exists($temp_dir . '/events-data.json')) {
            $json_file = $temp_dir . '/events-data.json';
        }
        
        if (!$json_file) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error(array('message' => 'Invalid ZIP file format. No data file found.'));
            return;
        }
        
        $file_content = file_get_contents($json_file);
        $import_data = json_decode($file_content, true);
        
        if (!$import_data) {
            $this->cleanup_temp_dir($temp_dir);
            wp_send_json_error(array('message' => 'Invalid import file format.'));
            return;
        }
        
        $result = $this->process_complete_import($import_data, $temp_dir);
        
        // Clean up temporary directory
        $this->cleanup_temp_dir($temp_dir);
        
        wp_send_json_success($result);
    }
    
    private function import_complete_from_json($uploaded_file) {
        $file_content = file_get_contents($uploaded_file['tmp_name']);
        $import_data = json_decode($file_content, true);
        
        if (!$import_data) {
            wp_send_json_error(array('message' => 'Invalid import file format.'));
            return;
        }
        
        $result = $this->process_complete_import($import_data, null);
        wp_send_json_success($result);
    }
    
    private function process_complete_import($import_data, $temp_dir) {
        $overwrite_existing = isset($_POST['overwrite_existing']) && $_POST['overwrite_existing'] === '1';
        $clubs_imported = 0;
        $events_imported = 0;
        $clubs_skipped = 0;
        $events_skipped = 0;
        $images_dir = $temp_dir ? $temp_dir . '/images' : null;
        
        // Import clubs if present
        if (isset($import_data['clubs'])) {
            foreach ($import_data['clubs'] as $club_data) {
                if (empty($club_data['post_slug']) || empty($club_data['post_title'])) {
                    continue;
                }
                
                $existing_club = get_page_by_path($club_data['post_slug'], OBJECT, 'organization');
                
                if ($existing_club && !$overwrite_existing) {
                    $clubs_skipped++;
                    continue;
                }
                
                $post_data = array(
                    'post_type' => 'organization',
                    'post_title' => sanitize_text_field($club_data['post_title']),
                    'post_name' => sanitize_title($club_data['post_slug']),
                    'post_status' => isset($club_data['post_status']) ? $club_data['post_status'] : 'publish',
                    'post_content' => isset($club_data['post_content']) ? wp_kses_post($club_data['post_content']) : '',
                    'post_excerpt' => isset($club_data['post_excerpt']) ? wp_kses_post($club_data['post_excerpt']) : '',
                    'post_author' => isset($club_data['post_author']) ? intval($club_data['post_author']) : get_current_user_id()
                );
                
                if ($existing_club) {
                    $post_data['ID'] = $existing_club->ID;
                    $post_id = wp_update_post($post_data);
                } else {
                    $post_id = wp_insert_post($post_data);
                }
                
                if ($post_id && !is_wp_error($post_id)) {
                    // Import metadata
                    if (!empty($club_data['meta'])) {
                        foreach ($club_data['meta'] as $meta_key => $meta_value) {
                            update_post_meta($post_id, $meta_key, $meta_value);
                        }
                    }
                    
                    // Import featured image
                    if (!empty($club_data['featured_image']) && $images_dir && is_dir($images_dir)) {
                        $this->import_featured_image_from_zip($post_id, $club_data['featured_image'], $images_dir);
                    }
                    
                    // Import content images
                    if (!empty($club_data['content_images']) && $images_dir && is_dir($images_dir)) {
                        $this->import_content_images($post_id, $club_data['content_images'], $images_dir, $club_data['post_content']);
                    }
                    
                    $clubs_imported++;
                }
            }
        }
        
        // Import events if present
        if (isset($import_data['events'])) {
            foreach ($import_data['events'] as $event_data) {
                if (empty($event_data['post_slug']) || empty($event_data['post_title'])) {
                    continue;
                }
                
                $existing_event = get_page_by_path($event_data['post_slug'], OBJECT, 'event');
                
                if ($existing_event && !$overwrite_existing) {
                    $events_skipped++;
                    continue;
                }
                
                $post_data = array(
                    'post_type' => 'event',
                    'post_title' => sanitize_text_field($event_data['post_title']),
                    'post_name' => sanitize_title($event_data['post_slug']),
                    'post_status' => isset($event_data['post_status']) ? $event_data['post_status'] : 'publish',
                    'post_content' => isset($event_data['post_content']) ? wp_kses_post($event_data['post_content']) : '',
                    'post_excerpt' => isset($event_data['post_excerpt']) ? wp_kses_post($event_data['post_excerpt']) : '',
                    'post_author' => isset($event_data['post_author']) ? intval($event_data['post_author']) : get_current_user_id()
                );
                
                if ($existing_event) {
                    $post_data['ID'] = $existing_event->ID;
                    $post_id = wp_update_post($post_data);
                } else {
                    $post_id = wp_insert_post($post_data);
                }
                
                if ($post_id && !is_wp_error($post_id)) {
                    // Import metadata
                    if (!empty($event_data['meta'])) {
                        foreach ($event_data['meta'] as $meta_key => $meta_value) {
                            update_post_meta($post_id, $meta_key, $meta_value);
                        }
                    }
                    
                    // Import flyer image
                    if (!empty($event_data['flyer_image']) && $images_dir && is_dir($images_dir)) {
                        $attachment_id = $this->import_featured_image_from_zip($post_id, $event_data['flyer_image'], $images_dir);
                        if ($attachment_id) {
                            update_post_meta($post_id, '_event_flyer', $attachment_id);
                        }
                    }
                    
                    // Import content images
                    if (!empty($event_data['content_images']) && $images_dir && is_dir($images_dir)) {
                        $this->import_content_images($post_id, $event_data['content_images'], $images_dir, $event_data['post_content']);
                    }
                    
                    // Import organization association
                    if (!empty($event_data['organization'])) {
                        $org_slug = $event_data['organization']['slug'];
                        $org = get_page_by_path($org_slug, OBJECT, 'organization');
                        if ($org) {
                            update_post_meta($post_id, '_event_organization', $org->ID);
                        }
                    }
                    
                    $events_imported++;
                }
            }
        }
        
        return array(
            'clubs_imported' => $clubs_imported,
            'events_imported' => $events_imported,
            'clubs_skipped' => $clubs_skipped,
            'events_skipped' => $events_skipped
        );
    }
    
    private function import_content_images($post_id, $content_images, $images_dir, $post_content) {
        // Import content images and update post content with new URLs
        $updated_content = $post_content;
        
        foreach ($content_images as $image_data) {
            if (empty($image_data['filename']) || empty($image_data['original_url'])) {
                continue;
            }
            
            $image_path = $images_dir . '/' . $image_data['filename'];
            
            if (!file_exists($image_path)) {
                continue;
            }
            
            $upload_dir = wp_upload_dir();
            $new_filename = $image_data['original_filename'] ?: $image_data['filename'];
            $new_file_path = $upload_dir['path'] . '/' . $new_filename;
            
            // Copy image to uploads directory
            if (copy($image_path, $new_file_path)) {
                // Create attachment
                $file_type = wp_check_filetype($new_filename, null);
                $attachment_data = array(
                    'post_mime_type' => $file_type['type'],
                    'post_title' => isset($image_data['title']) ? $image_data['title'] : '',
                    'post_content' => '',
                    'post_excerpt' => isset($image_data['caption']) ? $image_data['caption'] : '',
                    'post_status' => 'inherit'
                );
                
                $attachment_id = wp_insert_attachment($attachment_data, $new_file_path, $post_id);
                
                if (!is_wp_error($attachment_id)) {
                    // Generate metadata
                    require_once(ABSPATH . 'wp-admin/includes/image.php');
                    $attachment_metadata = wp_generate_attachment_metadata($attachment_id, $new_file_path);
                    wp_update_attachment_metadata($attachment_id, $attachment_metadata);
                    
                    // Set alt text
                    if (!empty($image_data['alt'])) {
                        update_post_meta($attachment_id, '_wp_attachment_image_alt', $image_data['alt']);
                    }
                    
                    // Update content with new image URL
                    $new_image_url = wp_get_attachment_url($attachment_id);
                    $updated_content = str_replace($image_data['original_url'], $new_image_url, $updated_content);
                }
            }
        }
        
        // Update post content with new image URLs
        if ($updated_content !== $post_content) {
            wp_update_post(array(
                'ID' => $post_id,
                'post_content' => $updated_content
            ));
        }
    }
}