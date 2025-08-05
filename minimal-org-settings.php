<?php
// Minimal organization settings page to replace the broken one temporarily

function minimal_organization_settings_page() {
    // Handle form submission
    if (isset($_POST['submit']) && wp_verify_nonce($_POST['_wpnonce'], 'organization_settings')) {
        update_option('campus_manager_default_org_template', sanitize_text_field($_POST['campus_manager_default_org_template']));
        echo '<div class="notice notice-success"><p>Settings saved successfully!</p></div>';
    }
    
    $current_template = get_option('campus_manager_default_org_template', 'default');
    
    // Simple template list without expensive queries
    $templates = array(
        'default' => 'Default template',
        'wp-custom-template-club-homepage-2' => 'Club Homepage',
        'wp-custom-template-clubs-droppage' => 'Clubs Droppage'
    );
    
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
        
        <div class="notice notice-info">
            <p><strong>Template Import/Export</strong> has been moved to the dedicated <strong>"Template I/E"</strong> plugin. Please activate and use that plugin for importing/exporting templates.</p>
        </div>
        
        <div class="card">
            <h2>Clubs & Events Import/Export</h2>
            <p>The clubs and events import/export functionality is still available below...</p>
            <!-- The rest of the clubs/events functionality can stay -->
        </div>
    </div>
    
    <script>
    jQuery(document).ready(function($) {
        $('#apply-template-to-all').on('click', function() {
            var button = $(this);
            var status = $('#apply-template-status');
            var template = $('#campus_manager_default_org_template').val();
            
            if (!template) {
                alert('Please select a template first.');
                return;
            }
            
            button.prop('disabled', true).text('Applying...');
            status.html('<span style="color: blue;">Applying template to all organizations...</span>');
            
            $.post(ajaxurl, {
                action: 'apply_template_to_all_orgs',
                template: template,
                nonce: '<?php echo wp_create_nonce('apply_template_nonce'); ?>'
            }, function(response) {
                if (response.success) {
                    status.html('<span style="color: green;">✓ Applied template to ' + response.data.count + ' organizations.</span>');
                } else {
                    status.html('<span style="color: red;">Error: ' + response.data.message + '</span>');
                }
                button.prop('disabled', false).text('Apply Template to All Organizations');
                
                setTimeout(function() {
                    status.html('');
                }, 5000);
            }).fail(function() {
                status.html('<span style="color: red;">Request failed. Please try again.</span>');
                button.prop('disabled', false).text('Apply Template to All Organizations');
                
                setTimeout(function() {
                    status.html('');
                }, 5000);
            });
        });
    });
    </script>
    <?php
}

// Temporarily replace the organization settings page
add_action('admin_menu', function() {
    add_submenu_page(
        'edit.php?post_type=organization',
        'Organization Settings (Minimal)',
        'Settings (Minimal)',
        'manage_options',
        'organization-settings-minimal',
        'minimal_organization_settings_page'
    );
}, 21);