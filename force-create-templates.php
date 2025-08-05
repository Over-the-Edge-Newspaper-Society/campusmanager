<?php
// Force create both templates
require_once('../../../wp-load.php');

if (!current_user_can('manage_options')) {
    die('Access denied');
}

// Read the export file
$export_file = '/Users/ahzs645/Downloads/campus-manager-templates-2025-08-05T20-27-05.json';
if (!file_exists($export_file)) {
    die("Export file not found: $export_file");
}

$template_data = json_decode(file_get_contents($export_file), true);
if (!$template_data || !isset($template_data['block_templates'])) {
    die("Invalid export file format");
}

echo "<h2>Force Creating Templates</h2>";
echo "<pre>";

// Delete any existing templates that might be conflicting
echo "Step 1: Cleaning up existing templates...\n";
$existing_templates = get_posts(array(
    'post_type' => 'wp_template',
    'post_status' => 'any',
    'numberposts' => -1
));

foreach ($existing_templates as $template) {
    if (strpos($template->post_name, 'club') !== false) {
        echo "Deleting existing template: " . $template->post_title . " (ID: " . $template->ID . ")\n";
        wp_delete_post($template->ID, true);
    }
}

echo "\nStep 2: Creating new templates...\n";

// Create each template fresh
foreach ($template_data['block_templates'] as $block_template) {
    echo "\nCreating: " . $block_template['title'] . " (" . $block_template['slug'] . ")\n";
    
    // Create new template
    $post_data = array(
        'post_type' => 'wp_template',
        'post_status' => 'publish',
        'post_title' => $block_template['title'],
        'post_name' => $block_template['slug'],
        'post_content' => $block_template['content'],
        'post_excerpt' => isset($block_template['description']) ? $block_template['description'] : '',
        'post_author' => get_current_user_id(),
        'post_date' => current_time('mysql'),
        'post_date_gmt' => current_time('mysql', 1)
    );
    
    $post_id = wp_insert_post($post_data, true);
    
    if (is_wp_error($post_id)) {
        echo "Error creating template: " . $post_id->get_error_message() . "\n";
    } else {
        echo "Created template with ID: " . $post_id . "\n";
        
        // Add metadata
        update_post_meta($post_id, 'theme', get_stylesheet());
        
        // Set taxonomy term
        if (taxonomy_exists('wp_theme')) {
            $term_result = wp_set_object_terms($post_id, get_stylesheet(), 'wp_theme', false);
            echo "Set wp_theme taxonomy: " . (is_wp_error($term_result) ? "failed" : "success") . "\n";
        }
        
        // Add additional metadata
        if (isset($block_template['is_custom'])) {
            update_post_meta($post_id, 'is_custom', true);
        }
        if (isset($block_template['area'])) {
            update_post_meta($post_id, 'area', $block_template['area']);
        }
    }
}

// Clear all caches
wp_cache_flush();
if (function_exists('wp_cache_delete')) {
    wp_cache_delete('theme_block_templates', 'themes');
    wp_cache_delete('get_block_templates', 'blocks');
}

echo "\nStep 3: Verifying templates...\n";

// Verify templates were created
$all_templates = get_posts(array(
    'post_type' => 'wp_template',
    'post_status' => 'any',
    'numberposts' => -1
));

echo "\nAll wp_template posts in database:\n";
foreach ($all_templates as $template) {
    $theme_term = wp_get_object_terms($template->ID, 'wp_theme');
    $theme_name = !empty($theme_term) && !is_wp_error($theme_term) ? $theme_term[0]->name : 'no theme';
    echo "- ID: " . $template->ID . ", Title: " . $template->post_title . ", Slug: " . $template->post_name . ", Theme: " . $theme_name . "\n";
}

echo "\nTemplates visible via get_block_templates():\n";
if (function_exists('get_block_templates')) {
    $block_templates = get_block_templates(array(), 'wp_template');
    foreach ($block_templates as $template) {
        if (strpos($template->slug, 'club') !== false) {
            echo "- Title: " . $template->title . ", Slug: " . $template->slug . ", Theme: " . $template->theme . "\n";
        }
    }
}

echo "\n\nDone! Please visit: http://scratch2.local/wp-admin/site-editor.php?p=%2Ftemplate\n";
echo "</pre>";