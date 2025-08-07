<?php
/**
 * Custom dashboard for organization managers
 * Provides a dedicated interface for managers to edit their organization
 */
class UNBC_Organization_Manager_Dashboard {
    
    public function __construct() {
        add_action('admin_menu', array($this, 'add_manager_menu'), 5);
        add_action('admin_init', array($this, 'handle_organization_update'));
        add_action('admin_init', array($this, 'redirect_managers_to_dashboard'));
        add_action('admin_init', array($this, 'block_standard_post_edit'));
        add_filter('admin_body_class', array($this, 'add_manager_body_class'));
    }
    
    /**
     * Add custom menu for organization managers
     */
    public function add_manager_menu() {
        $user_id = get_current_user_id();
        
        // Only add menu for organization managers
        if (!UNBC_Organization_Manager_Assignment::is_organization_manager($user_id)) {
            return;
        }
        
        // Get assigned organization
        $org_id = UNBC_Organization_Manager_Assignment::get_user_organization($user_id);
        if (!$org_id) {
            return;
        }
        
        $organization = get_post($org_id);
        if (!$organization) {
            return;
        }
        
        // Add main menu for organization manager - use 'read' capability to avoid loops
        add_menu_page(
            'My Organization',
            'My Organization',
            'read',
            'organization-dashboard',
            array($this, 'render_organization_dashboard'),
            'dashicons-building',
            3
        );
        
        // Add submenu for organization details
        add_submenu_page(
            'organization-dashboard',
            'Organization Details',
            'Organization Details',
            'read',
            'organization-dashboard',
            array($this, 'render_organization_dashboard')
        );
        
        // Add submenu for events
        add_submenu_page(
            'organization-dashboard',
            'Events',
            'Events',
            'read',
            'edit.php?post_type=event'
        );
        
        // Add submenu for club posts
        add_submenu_page(
            'organization-dashboard',
            'Club Posts',
            'Club Posts',
            'read',
            'edit.php?post_type=club_post'
        );
        
        // Hide the default Organizations menu for managers
        remove_menu_page('edit.php?post_type=organization');
    }
    
    /**
     * Render the organization dashboard
     */
    public function render_organization_dashboard() {
        $user_id = get_current_user_id();
        
        // Simple role check without triggering capability filters
        if (!UNBC_Organization_Manager_Assignment::is_organization_manager($user_id)) {
            wp_die('Access denied');
        }
        
        $org_id = UNBC_Organization_Manager_Assignment::get_user_organization($user_id);
        
        if (!$org_id) {
            echo '<div class="wrap"><h1>No Organization Assigned</h1><p>You have not been assigned to manage any organization.</p></div>';
            return;
        }
        
        $organization = get_post($org_id);
        if (!$organization) {
            echo '<div class="wrap"><h1>Organization Not Found</h1><p>The organization you are assigned to manage could not be found.</p></div>';
            return;
        }
        
        // Get organization meta data
        $meta_fields = $this->get_organization_meta_fields($org_id);
        
        ?>
        <div class="wrap organization-manager-dashboard">
            <h1>Edit Organization: <?php echo esc_html($organization->post_title); ?></h1>
            
            <?php if (isset($_GET['updated']) && $_GET['updated'] == '1'): ?>
                <div class="notice notice-success is-dismissible">
                    <p>Organization updated successfully!</p>
                </div>
            <?php endif; ?>
            
            <form method="post" action="" enctype="multipart/form-data">
                <?php wp_nonce_field('update_organization_' . $org_id, 'organization_nonce'); ?>
                <input type="hidden" name="action" value="update_organization">
                <input type="hidden" name="organization_id" value="<?php echo $org_id; ?>">
                
                <div id="poststuff">
                    <div id="post-body" class="metabox-holder columns-2">
                        <div id="post-body-content">
                            
                            <!-- Basic Information -->
                            <div class="postbox">
                                <h2 class="hndle"><span>Basic Information</span></h2>
                                <div class="inside">
                                    <table class="form-table">
                                        <tr>
                                            <th><label>Organization Name</label></th>
                                            <td>
                                                <strong><?php echo esc_html($organization->post_title); ?></strong>
                                                <p class="description">Organization name cannot be changed. Contact administrator if needed.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label for="post_content">Description</label></th>
                                            <td>
                                                <?php 
                                                // Use classic editor (TinyMCE) without block parser
                                                wp_editor($organization->post_content, 'post_content', array(
                                                    'textarea_rows' => 10,
                                                    'media_buttons' => true,
                                                    'teeny' => false,
                                                    'tinymce' => array(
                                                        'toolbar1' => 'bold,italic,underline,strikethrough,|,bullist,numlist,|,link,unlink,|,undo,redo',
                                                        'toolbar2' => false,
                                                        'plugins' => 'lists,link,paste,textcolor',
                                                        'paste_as_text' => true,
                                                        'setup' => 'function(editor) {
                                                            editor.on("init", function() {
                                                                editor.getDoc().body.style.fontSize = "13px";
                                                                editor.getDoc().body.style.fontFamily = "Arial, sans-serif";
                                                            });
                                                        }'
                                                    ),
                                                    'quicktags' => array(
                                                        'buttons' => 'strong,em,ul,ol,li,link,close'
                                                    )
                                                ));
                                                ?>
                                                <p class="description">Use the editor above to format your organization description.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label for="post_excerpt">Short Description</label></th>
                                            <td>
                                                <textarea name="post_excerpt" id="post_excerpt" rows="3" class="large-text"><?php echo esc_textarea($organization->post_excerpt); ?></textarea>
                                                <p class="description">Brief description shown in organization listings.</p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            
                            <!-- Organization Information -->
                            <div class="postbox">
                                <h2 class="hndle"><span>Organization Information</span></h2>
                                <div class="inside">
                                    <table class="form-table compact-form">
                                        <tr>
                                            <th><label>Basic Details</label></th>
                                            <td>
                                                <div class="field-group">
                                                    <div class="field-row">
                                                        <div class="field-half">
                                                            <label for="org_email">Organization Email</label>
                                                            <input type="email" name="org_email" id="org_email" value="<?php echo esc_attr($meta_fields['org_email']); ?>" class="large-text">
                                                        </div>
                                                        <div class="field-half">
                                                            <label for="org_meeting_schedule">Meeting Schedule</label>
                                                            <input type="text" name="org_meeting_schedule" id="org_meeting_schedule" value="<?php echo esc_attr($meta_fields['org_meeting_schedule']); ?>" class="large-text" placeholder="e.g., Every Tuesday at 6 PM">
                                                        </div>
                                                    </div>
                                                    <div class="field-row">
                                                        <label for="org_membership_requirements">Membership Requirements</label>
                                                        <textarea name="org_membership_requirements" id="org_membership_requirements" rows="2" class="large-text"><?php echo esc_textarea($meta_fields['org_membership_requirements']); ?></textarea>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <!-- Contact Information -->
                            <div class="postbox">
                                <h2 class="hndle"><span>Contact Information</span></h2>
                                <div class="inside">
                                    <table class="form-table compact-form">
                                        <tr>
                                            <th><label>Leadership & Contacts</label></th>
                                            <td>
                                                <div class="field-group">
                                                    <div class="field-row">
                                                        <div class="field-half">
                                                            <label for="org_president_name">President Name</label>
                                                            <input type="text" name="org_president_name" id="org_president_name" value="<?php echo esc_attr($meta_fields['org_president_name']); ?>" class="large-text">
                                                        </div>
                                                        <div class="field-half">
                                                            <label for="org_president_email">President Email</label>
                                                            <input type="email" name="org_president_email" id="org_president_email" value="<?php echo esc_attr($meta_fields['org_president_email']); ?>" class="large-text">
                                                        </div>
                                                    </div>
                                                    <div class="field-row">
                                                        <div class="field-half">
                                                            <label for="org_contact_name">Primary Contact Name</label>
                                                            <input type="text" name="org_contact_name" id="org_contact_name" value="<?php echo esc_attr($meta_fields['org_contact_name']); ?>" class="large-text">
                                                        </div>
                                                        <div class="field-half">
                                                            <label for="org_contact_email">Primary Contact Email</label>
                                                            <input type="email" name="org_contact_email" id="org_contact_email" value="<?php echo esc_attr($meta_fields['org_contact_email']); ?>" class="large-text">
                                                        </div>
                                                    </div>
                                                    <div class="field-row">
                                                        <label for="org_office_location">Office Location</label>
                                                        <input type="text" name="org_office_location" id="org_office_location" value="<?php echo esc_attr($meta_fields['org_office_location']); ?>" class="large-text" placeholder="e.g., Student Union Building Room 205">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            
                            <!-- Social Media & Links -->
                            <div class="postbox">
                                <h2 class="hndle"><span>Social Media & Links</span></h2>
                                <div class="inside">
                                    <table class="form-table compact-form">
                                        <tr>
                                            <th><label>Online Presence</label></th>
                                            <td>
                                                <div class="field-group">
                                                    <div class="field-row">
                                                        <div class="field-half">
                                                            <label for="org_website">Website</label>
                                                            <input type="url" name="org_website" id="org_website" value="<?php echo esc_attr($meta_fields['org_website']); ?>" class="large-text">
                                                        </div>
                                                        <div class="field-half">
                                                            <label for="org_registration_link">Registration Link</label>
                                                            <input type="url" name="org_registration_link" id="org_registration_link" value="<?php echo esc_attr($meta_fields['org_registration_link']); ?>" class="large-text">
                                                        </div>
                                                    </div>
                                                    <div class="field-row">
                                                        <div class="field-half">
                                                            <label for="org_facebook">Facebook</label>
                                                            <input type="url" name="org_facebook" id="org_facebook" value="<?php echo esc_attr($meta_fields['org_facebook']); ?>" class="large-text" placeholder="https://facebook.com/yourpage">
                                                        </div>
                                                        <div class="field-half">
                                                            <label for="org_instagram">Instagram</label>
                                                            <input type="url" name="org_instagram" id="org_instagram" value="<?php echo esc_attr($meta_fields['org_instagram']); ?>" class="large-text" placeholder="https://instagram.com/username">
                                                        </div>
                                                    </div>
                                                    <div class="field-row">
                                                        <div class="field-half">
                                                            <label for="org_twitter">Twitter/X</label>
                                                            <input type="text" name="org_twitter" id="org_twitter" value="<?php echo esc_attr($meta_fields['org_twitter']); ?>" class="large-text" placeholder="@yourusername">
                                                        </div>
                                                        <div class="field-half">
                                                            <label for="org_linkedin">LinkedIn</label>
                                                            <input type="url" name="org_linkedin" id="org_linkedin" value="<?php echo esc_attr($meta_fields['org_linkedin']); ?>" class="large-text" placeholder="https://linkedin.com/company/yourcompany">
                                                        </div>
                                                    </div>
                                                    <div class="field-row">
                                                        <div class="field-half">
                                                            <label for="org_discord">Discord Server</label>
                                                            <input type="url" name="org_discord" id="org_discord" value="<?php echo esc_attr($meta_fields['org_discord']); ?>" class="large-text" placeholder="https://discord.gg/invite">
                                                        </div>
                                                        <div class="field-half">
                                                            <label for="org_youtube">YouTube Channel</label>
                                                            <input type="url" name="org_youtube" id="org_youtube" value="<?php echo esc_attr($meta_fields['org_youtube']); ?>" class="large-text" placeholder="https://youtube.com/channel/...">
                                                        </div>
                                                    </div>
                                                    <div class="field-row">
                                                        <label for="org_linktree">Linktree</label>
                                                        <input type="url" name="org_linktree" id="org_linktree" value="<?php echo esc_attr($meta_fields['org_linktree']); ?>" class="large-text" placeholder="https://linktr.ee/username">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            
                        </div><!-- /post-body-content -->
                        
                        <div id="postbox-container-1" class="postbox-container">
                            
                            <!-- Publish Box -->
                            <div class="postbox">
                                <h2 class="hndle"><span>Update Organization</span></h2>
                                <div class="inside">
                                    <div id="major-publishing-actions">
                                        <div id="publishing-action">
                                            <input type="submit" name="save" id="publish" class="button button-primary button-large" value="Update Organization">
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Featured Image -->
                            <div class="postbox">
                                <h2 class="hndle"><span>Organization Logo</span></h2>
                                <div class="inside">
                                    <?php
                                    $thumbnail_id = get_post_thumbnail_id($org_id);
                                    if ($thumbnail_id) {
                                        echo '<div class="current-logo">';
                                        echo wp_get_attachment_image($thumbnail_id, 'medium');
                                        echo '</div>';
                                    }
                                    ?>
                                    <p>
                                        <label for="organization_logo">Upload New Logo:</label><br>
                                        <input type="file" name="organization_logo" id="organization_logo" accept="image/*">
                                    </p>
                                    <?php if ($thumbnail_id): ?>
                                    <p>
                                        <label>
                                            <input type="checkbox" name="remove_logo" value="1"> Remove current logo
                                        </label>
                                    </p>
                                    <?php endif; ?>
                                </div>
                            </div>
                            
                            <!-- Organization Info -->
                            <div class="postbox">
                                <h2 class="hndle"><span>Organization Info</span></h2>
                                <div class="inside">
                                    <p><strong>Post Status:</strong> <?php echo ucfirst($organization->post_status); ?></p>
                                    <p><strong>Created:</strong> <?php echo get_the_date('F j, Y', $org_id); ?></p>
                                    <p><strong>Last Modified:</strong> <?php echo get_the_modified_date('F j, Y', $org_id); ?></p>
                                    <?php if ($meta_fields['org_founded_date']): ?>
                                        <p><strong>Founded:</strong> <?php echo date('F j, Y', strtotime($meta_fields['org_founded_date'])); ?></p>
                                    <?php endif; ?>
                                    <?php if ($meta_fields['org_approval_date']): ?>
                                        <p><strong>Approved:</strong> <?php echo date('F j, Y', strtotime($meta_fields['org_approval_date'])); ?></p>
                                    <?php endif; ?>
                                    <?php if ($meta_fields['org_is_department'] == '1'): ?>
                                        <p><strong>Type:</strong> UNBC Department</p>
                                    <?php else: ?>
                                        <p><strong>Type:</strong> Student Organization</p>
                                    <?php endif; ?>
                                </div>
                            </div>
                            
                            <!-- Quick Stats -->
                            <div class="postbox">
                                <h2 class="hndle"><span>Quick Stats</span></h2>
                                <div class="inside">
                                    <?php
                                    // Count events
                                    $events_count = count(get_posts(array(
                                        'post_type' => 'event',
                                        'meta_key' => 'organization_id',
                                        'meta_value' => $org_id,
                                        'post_status' => 'any',
                                        'numberposts' => -1,
                                        'fields' => 'ids'
                                    )));
                                    
                                    // Count club posts
                                    $posts_count = count(get_posts(array(
                                        'post_type' => 'club_post',
                                        'meta_key' => 'club_post_organization',
                                        'meta_value' => $org_id,
                                        'post_status' => 'any',
                                        'numberposts' => -1,
                                        'fields' => 'ids'
                                    )));
                                    ?>
                                    <ul>
                                        <li><strong>Total Events:</strong> <?php echo $events_count; ?></li>
                                        <li><strong>Total Club Posts:</strong> <?php echo $posts_count; ?></li>
                                    </ul>
                                    <p>
                                        <a href="<?php echo admin_url('edit.php?post_type=event'); ?>" class="button">Manage Events</a>
                                        <a href="<?php echo admin_url('edit.php?post_type=club_post'); ?>" class="button">Manage Posts</a>
                                    </p>
                                </div>
                            </div>
                            
                        </div><!-- /postbox-container-1 -->
                        
                    </div><!-- /post-body -->
                </div><!-- /poststuff -->
                
            </form>
        </div>
        
        <style>
            /* Compact dashboard styling */
            .organization-manager-dashboard .postbox {
                margin-bottom: 15px;
            }
            
            .organization-manager-dashboard .postbox .inside {
                padding: 15px;
            }
            
            /* Compact form styling */
            .organization-manager-dashboard .compact-form th {
                width: 150px;
                vertical-align: top;
                padding-top: 10px;
            }
            
            .organization-manager-dashboard .field-group {
                max-width: 100%;
            }
            
            .organization-manager-dashboard .field-row {
                display: flex;
                gap: 15px;
                margin-bottom: 15px;
                align-items: flex-end;
            }
            
            .organization-manager-dashboard .field-row:last-child {
                margin-bottom: 0;
            }
            
            .organization-manager-dashboard .field-half {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            
            .organization-manager-dashboard .field-half label,
            .organization-manager-dashboard .field-row > label {
                font-weight: 600;
                margin-bottom: 4px;
                display: block;
                font-size: 13px;
            }
            
            .organization-manager-dashboard .field-half input,
            .organization-manager-dashboard .field-half textarea,
            .organization-manager-dashboard .field-row > input,
            .organization-manager-dashboard .field-row > textarea {
                width: 100%;
                margin: 0;
            }
            
            /* Make single-row fields full width */
            .organization-manager-dashboard .field-row > label {
                margin-bottom: 6px;
            }
            
            /* Logo styling */
            .organization-manager-dashboard .current-logo {
                margin-bottom: 10px;
                text-align: center;
            }
            
            .organization-manager-dashboard .current-logo img {
                max-width: 150px;
                height: auto;
                border: 2px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            
            /* Sidebar postboxes */
            #postbox-container-1 .postbox {
                margin-bottom: 15px;
            }
            
            /* Publishing actions */
            #major-publishing-actions {
                padding: 15px;
                background: #f9f9f9;
                border-top: 1px solid #eee;
            }
            
            #publishing-action input[type="submit"] {
                float: none;
                width: 100%;
                text-align: center;
                padding: 8px 12px;
                font-size: 14px;
            }
            
            /* Quick stats */
            .organization-manager-dashboard ul {
                margin: 10px 0;
            }
            
            .organization-manager-dashboard ul li {
                margin-bottom: 5px;
            }
            
            /* Responsive adjustments */
            @media (max-width: 782px) {
                .organization-manager-dashboard .field-row {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .organization-manager-dashboard .field-half {
                    flex: none;
                }
                
                #post-body.metabox-holder.columns-2 {
                    margin-right: 0;
                }
                
                #postbox-container-1 {
                    width: 100%;
                    float: none;
                    margin-top: 20px;
                }
            }
            
            /* Clean up spacing */
            .organization-manager-dashboard .form-table th,
            .organization-manager-dashboard .form-table td {
                padding: 10px;
            }
            
            /* Description text styling */
            .organization-manager-dashboard .description {
                font-size: 12px;
                color: #666;
                margin-top: 4px;
            }
        </style>
        <?php
    }
    
    /**
     * Get organization meta fields
     */
    private function get_organization_meta_fields($org_id) {
        $fields = array(
            // Basic org info
            'org_email' => '',
            'org_size' => '',
            'org_founded_year' => '',
            'org_short_description' => '',
            'org_membership_requirements' => '',
            'org_meeting_schedule' => '',
            'org_original_image_path' => '',
            
            // Contact information
            'org_president_name' => '',
            'org_president_email' => '',
            'org_contact_name' => '',
            'org_contact_email' => '',
            'org_office_location' => '',
            
            // Social media
            'org_website' => '',
            'org_facebook' => '',
            'org_instagram' => '',
            'org_twitter' => '',
            'org_linkedin' => '',
            'org_discord' => '',
            'org_linktree' => '',
            'org_youtube' => '',
            'org_registration_link' => '',
            
            // Additional info
            'org_status' => '',
            'org_is_department' => '',
            'org_founded_date' => '',
            'org_approval_date' => '',
            'org_registration_date' => ''
        );
        
        foreach ($fields as $key => $default) {
            $fields[$key] = get_post_meta($org_id, $key, true) ?: $default;
        }
        
        return $fields;
    }
    
    /**
     * Handle organization update form submission
     */
    public function handle_organization_update() {
        if (!isset($_POST['action']) || $_POST['action'] !== 'update_organization') {
            return;
        }
        
        // Prevent this from running during redirects
        if (isset($_GET['updated'])) {
            return;
        }
        
        $org_id = intval($_POST['organization_id']);
        
        // Verify nonce
        if (!wp_verify_nonce($_POST['organization_nonce'], 'update_organization_' . $org_id)) {
            wp_die('Security check failed');
        }
        
        // Check permissions
        $user_id = get_current_user_id();
        $assigned_org = UNBC_Organization_Manager_Assignment::get_user_organization($user_id);
        
        if ($assigned_org != $org_id) {
            wp_die('You do not have permission to edit this organization');
        }
        
        // Disable block parser temporarily
        add_filter('use_block_editor_for_post_type', '__return_false');
        remove_all_filters('content_save_pre');
        remove_all_filters('the_content');
        
        // Update post content and excerpt using wp_update_post but with block editor disabled
        wp_update_post(array(
            'ID' => $org_id,
            'post_content' => wp_kses_post($_POST['post_content']),
            'post_excerpt' => sanitize_textarea_field($_POST['post_excerpt'])
        ));
        
        // Re-enable filters
        remove_filter('use_block_editor_for_post_type', '__return_false');
        
        // Update meta fields (only those managers can edit)
        $meta_fields = array(
            // Basic org info (removed org_size and org_founded_year)
            'org_email', 'org_short_description', 'org_membership_requirements', 
            'org_meeting_schedule', 'org_original_image_path',
            
            // Contact information
            'org_president_name', 'org_president_email', 'org_contact_name', 
            'org_contact_email', 'org_office_location',
            
            // Social media
            'org_website', 'org_facebook', 'org_instagram', 'org_twitter', 
            'org_linkedin', 'org_discord', 'org_linktree', 'org_youtube', 'org_registration_link'
            
            // Note: Removed org_status, org_is_department, org_founded_date, 
            // org_approval_date, org_registration_date - these are admin-only
        );
        
        foreach ($meta_fields as $field) {
            if (isset($_POST[$field])) {
                update_post_meta($org_id, $field, sanitize_text_field($_POST[$field]));
            }
        }
        
        // Handle logo upload
        if (!empty($_FILES['organization_logo']['name'])) {
            require_once(ABSPATH . 'wp-admin/includes/file.php');
            require_once(ABSPATH . 'wp-admin/includes/media.php');
            require_once(ABSPATH . 'wp-admin/includes/image.php');
            
            $attachment_id = media_handle_upload('organization_logo', $org_id);
            if (!is_wp_error($attachment_id)) {
                set_post_thumbnail($org_id, $attachment_id);
            }
        }
        
        // Handle logo removal
        if (isset($_POST['remove_logo']) && $_POST['remove_logo'] == '1') {
            delete_post_thumbnail($org_id);
        }
        
        // Redirect with success message
        wp_redirect(admin_url('admin.php?page=organization-dashboard&updated=1'));
        exit;
    }
    
    /**
     * Block organization managers from accessing standard post edit pages
     */
    public function block_standard_post_edit() {
        global $pagenow;
        
        if (!is_admin()) {
            return;
        }
        
        $user_id = get_current_user_id();
        if (!UNBC_Organization_Manager_Assignment::is_organization_manager($user_id)) {
            return;
        }
        
        // Block access to post.php (edit post) for organizations
        if ($pagenow === 'post.php' && isset($_GET['post'])) {
            $post_id = intval($_GET['post']);
            $post = get_post($post_id);
            
            if ($post && $post->post_type === 'organization') {
                // Check if this is their assigned organization
                $assigned_org = UNBC_Organization_Manager_Assignment::get_user_organization($user_id);
                if ($assigned_org == $post_id) {
                    // Redirect to custom dashboard instead
                    wp_redirect(admin_url('admin.php?page=organization-dashboard'));
                    exit;
                } else {
                    wp_die('You can only edit your assigned organization through the Organization Dashboard.');
                }
            }
        }
        
        // Block access to post-new.php for organizations
        if ($pagenow === 'post-new.php' && isset($_GET['post_type']) && $_GET['post_type'] === 'organization') {
            wp_die('Organization managers cannot create new organizations. Contact an administrator.');
        }
    }
    
    /**
     * Redirect organization managers from default pages to custom dashboard
     */
    public function redirect_managers_to_dashboard() {
        global $pagenow;
        
        if (!is_admin()) {
            return;
        }
        
        // Don't redirect if we're already on the organization dashboard
        if ($pagenow === 'admin.php' && isset($_GET['page']) && $_GET['page'] === 'organization-dashboard') {
            return;
        }
        
        $user_id = get_current_user_id();
        if (!UNBC_Organization_Manager_Assignment::is_organization_manager($user_id)) {
            return;
        }
        
        // Redirect from dashboard to organization dashboard
        if ($pagenow === 'index.php') {
            wp_redirect(admin_url('admin.php?page=organization-dashboard'));
            exit;
        }
        
        // Redirect from organization list page
        if ($pagenow === 'edit.php' && isset($_GET['post_type']) && $_GET['post_type'] === 'organization') {
            wp_redirect(admin_url('admin.php?page=organization-dashboard'));
            exit;
        }
    }
    
    /**
     * Add body class for organization manager pages
     */
    public function add_manager_body_class($classes) {
        $user_id = get_current_user_id();
        if (UNBC_Organization_Manager_Assignment::is_organization_manager($user_id)) {
            $classes .= ' organization-manager-view';
        }
        return $classes;
    }
}