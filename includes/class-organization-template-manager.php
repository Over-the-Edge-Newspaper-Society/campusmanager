<?php
/**
 * Handles organization template management
 */
class UNBC_Organization_Template_Manager {
    
    public function __construct() {
        add_action('wp_ajax_export_organization_templates', array($this, 'ajax_export_templates'));
        add_action('wp_ajax_apply_template_to_all_orgs', array($this, 'apply_template_to_all_organizations'));
        add_filter('theme_templates', array($this, 'register_plugin_templates'), 10, 4);
        add_filter('theme_organization_templates', array($this, 'register_plugin_templates'), 10, 4);
        add_action('init', array($this, 'ensure_template_taxonomy_terms'), 20);
    }
    
    /**
     * Get available templates for organizations
     */
    public function get_available_templates() {
        $templates = array();
        
        // Check for organization templates in theme
        $theme_dir = get_stylesheet_directory();
        $template_files = array(
            'single-organization.php',
            'archive-organization.php',
            'taxonomy-organization_category.php'
        );
        
        foreach ($template_files as $file) {
            if (file_exists($theme_dir . '/' . $file)) {
                $templates[$file] = $file;
            }
        }
        
        return $templates;
    }
    
    /**
     * Check if template exists
     */
    private function template_exists($template_file) {
        $theme_dir = get_stylesheet_directory();
        $plugin_dir = plugin_dir_path(dirname(__FILE__)) . 'templates/';
        
        return file_exists($theme_dir . '/' . $template_file) || 
               file_exists($plugin_dir . $template_file);
    }
    
    /**
     * Register plugin templates with WordPress
     */
    public function register_plugin_templates($templates, $theme, $post, $post_type) {
        if ($post_type !== 'organization') {
            return $templates;
        }
        
        // Add custom templates
        $custom_templates = array(
            'template-organization-full.php' => 'Organization Full Width',
            'template-organization-sidebar.php' => 'Organization with Sidebar',
            'template-organization-minimal.php' => 'Organization Minimal'
        );
        
        foreach ($custom_templates as $file => $name) {
            if ($this->template_exists($file)) {
                $templates[$file] = $name;
            }
        }
        
        return $templates;
    }
    
    /**
     * Ensure template taxonomy terms exist
     */
    public function ensure_template_taxonomy_terms() {
        if (!taxonomy_exists('wp_theme')) {
            return;
        }
        
        // Get current theme slug
        $theme = wp_get_theme();
        $theme_slug = $theme->get_stylesheet();
        
        // Ensure the term exists
        if (!term_exists($theme_slug, 'wp_theme')) {
            wp_insert_term($theme_slug, 'wp_theme');
        }
        
        // Find all wp_template posts without proper taxonomy
        $templates = get_posts(array(
            'post_type' => 'wp_template',
            'posts_per_page' => -1,
            'post_status' => array('publish', 'draft', 'auto-draft'),
            'tax_query' => array(
                array(
                    'taxonomy' => 'wp_theme',
                    'operator' => 'NOT EXISTS'
                )
            )
        ));
        
        foreach ($templates as $template) {
            wp_set_object_terms($template->ID, $theme_slug, 'wp_theme');
        }
    }
    
    /**
     * Apply template to all organizations
     */
    public function apply_template_to_all_organizations() {
        check_ajax_referer('apply_template_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Unauthorized');
        }
        
        $template_id = intval($_POST['template_id']);
        $template = get_post($template_id);
        
        if (!$template || $template->post_type !== 'wp_template') {
            wp_send_json_error('Invalid template');
        }
        
        // Get all organizations
        $organizations = get_posts(array(
            'post_type' => 'organization',
            'numberposts' => -1,
            'post_status' => 'any'
        ));
        
        $updated = 0;
        foreach ($organizations as $org) {
            update_post_meta($org->ID, '_wp_page_template', $template->post_name);
            $updated++;
        }
        
        wp_send_json_success(array(
            'message' => sprintf('Template applied to %d organizations', $updated),
            'updated' => $updated
        ));
    }
    
    /**
     * Export templates via AJAX
     */
    public function ajax_export_templates() {
        check_ajax_referer('export_templates_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $templates = get_posts(array(
            'post_type' => 'wp_template',
            'numberposts' => -1,
            'post_status' => 'any'
        ));
        
        $export_data = array(
            'version' => '1.0',
            'export_date' => current_time('mysql'),
            'site_url' => get_site_url(),
            'templates' => array()
        );
        
        foreach ($templates as $template) {
            $export_data['templates'][] = array(
                'post_title' => $template->post_title,
                'post_name' => $template->post_name,
                'post_content' => $template->post_content,
                'post_status' => $template->post_status,
                'meta' => get_post_meta($template->ID)
            );
        }
        
        header('Content-Type: application/json');
        header('Content-Disposition: attachment; filename="templates-export-' . date('Y-m-d-His') . '.json"');
        echo json_encode($export_data, JSON_PRETTY_PRINT);
        wp_die();
    }
    
    /**
     * Create default organization template
     */
    public static function create_default_template() {
        $template_content = '<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
    <!-- wp:post-title {"level":1} /-->
    <!-- wp:post-featured-image /-->
    <!-- wp:post-content /-->
</div>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->';
        
        $template_id = wp_insert_post(array(
            'post_type' => 'wp_template',
            'post_title' => 'Single Organization',
            'post_name' => 'single-organization',
            'post_content' => $template_content,
            'post_status' => 'publish'
        ));
        
        if ($template_id && !is_wp_error($template_id)) {
            // Set taxonomy term
            $theme = wp_get_theme();
            wp_set_object_terms($template_id, $theme->get_stylesheet(), 'wp_theme');
        }
        
        return $template_id;
    }
}