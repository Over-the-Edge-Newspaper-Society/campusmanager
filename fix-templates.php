<?php
// Manual template fix script
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

echo "<h2>Fixing Templates</h2>";
echo "<pre>";

// First, show all existing wp_template posts
echo "Existing wp_template posts before fix:\n";
$all_before = get_posts(array(
    'post_type' => 'wp_template',
    'post_status' => 'any',
    'numberposts' => -1
));
foreach ($all_before as $template) {
    echo "- ID: " . $template->ID . ", Title: " . $template->post_title . ", Slug: " . $template->post_name . "\n";
}
echo "\n---\n\n";

foreach ($template_data['block_templates'] as $block_template) {
    echo "Processing template: " . $block_template['title'] . " (" . $block_template['slug'] . ")\n";
    
    // Check if template exists with exact slug match
    $existing_posts = get_posts(array(
        'post_type' => 'wp_template',
        'post_name' => $block_template['slug'],
        'post_status' => 'any',
        'numberposts' => -1
    ));
    
    // Filter to ensure we have exact slug match
    if (!empty($existing_posts)) {
        $existing_posts = array_filter($existing_posts, function($post) use ($block_template) {
            return $post->post_name === $block_template['slug'];
        });
        $existing_posts = array_values($existing_posts);
    }
    
    if (!empty($existing_posts)) {
        echo "Found " . count($existing_posts) . " existing template(s) with matching slug\n";
        // Only update the first one to avoid duplicates
        $existing_post = $existing_posts[0];
        
        // Update the template
        $update_result = wp_update_post(array(
            'ID' => $existing_post->ID,
            'post_content' => $block_template['content'],
            'post_title' => $block_template['title'],
            'post_status' => 'publish',
            'post_name' => $block_template['slug']
        ));
        
        // Update metadata
        update_post_meta($existing_post->ID, 'theme', get_stylesheet());
        if (taxonomy_exists('wp_theme')) {
            wp_set_object_terms($existing_post->ID, get_stylesheet(), 'wp_theme', false);
        }
        
        echo "Updated template ID: " . $existing_post->ID . " (Result: " . ($update_result ? "success" : "failed") . ")\n";
    } else {
        echo "Creating new template...\n";
        // Create new template
        $post_id = wp_insert_post(array(
            'post_type' => 'wp_template',
            'post_status' => 'publish',
            'post_title' => $block_template['title'],
            'post_name' => $block_template['slug'],
            'post_content' => $block_template['content'],
            'post_excerpt' => isset($block_template['description']) ? $block_template['description'] : '',
            'post_author' => get_current_user_id()
        ));
        
        if ($post_id && !is_wp_error($post_id)) {
            // Add metadata
            update_post_meta($post_id, 'theme', get_stylesheet());
            if (taxonomy_exists('wp_theme')) {
                wp_set_object_terms($post_id, get_stylesheet(), 'wp_theme', false);
            }
            echo "Created new template ID: " . $post_id . "\n";
        } else {
            echo "Error creating template\n";
        }
    }
    echo "---\n";
}

// Clear caches
wp_cache_flush();

echo "\nTemplates fixed! Please refresh your Site Editor.\n";
echo "</pre>";

// Show current templates
echo "<h3>Current Templates in Database:</h3>";
echo "<pre>";
$all_templates = get_posts(array(
    'post_type' => 'wp_template',
    'post_status' => 'any',
    'numberposts' => -1
));

foreach ($all_templates as $template) {
    echo "- " . $template->post_title . " (" . $template->post_name . ") - Status: " . $template->post_status . "\n";
}
echo "</pre>";