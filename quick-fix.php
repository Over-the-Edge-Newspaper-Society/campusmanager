<?php
// Quick fix for organization settings page hanging
// Add this to functions.php or create as mu-plugin to disable problematic code

add_action('admin_init', function() {
    // Remove the problematic AJAX handler
    remove_action('wp_ajax_export_organization_templates', array($GLOBALS['unbc_organization_manager_admin'], 'ajax_export_templates'));
    
    // Disable the template export JavaScript by removing the script
    add_action('admin_print_footer_scripts', function() {
        if (isset($_GET['page']) && $_GET['page'] === 'organization-settings') {
            ?>
            <script>
            // Disable template export functionality
            jQuery(document).ready(function($) {
                $('#export-templates-btn').off('click').on('click', function(e) {
                    e.preventDefault();
                    alert('Template export has been moved to the "Template I/E" plugin. Please use that instead.');
                });
            });
            </script>
            <?php
        }
    });
});