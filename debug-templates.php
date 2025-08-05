<?php
// Debug script to check template status
require_once('../../../wp-load.php');

if (!current_user_can('manage_options')) {
    die('Access denied');
}

echo "<h2>Template Debug Information</h2>";

// Check wp_template posts
$templates = get_posts(array(
    'post_type' => 'wp_template',
    'post_status' => 'any',
    'numberposts' => -1
));

echo "<h3>Templates in wp_posts table:</h3>";
echo "<pre>";
foreach ($templates as $template) {
    echo "Title: " . $template->post_title . "\n";
    echo "Slug: " . $template->post_name . "\n";
    echo "Status: " . $template->post_status . "\n";
    echo "Theme meta: " . get_post_meta($template->ID, 'theme', true) . "\n";
    echo "ID: " . $template->ID . "\n";
    echo "---\n";
}
echo "</pre>";

// Check with get_block_templates
echo "<h3>Templates from get_block_templates():</h3>";
echo "<pre>";
if (function_exists('get_block_templates')) {
    $block_templates = get_block_templates(array(), 'wp_template');
    foreach ($block_templates as $template) {
        echo "Title: " . $template->title . "\n";
        echo "Slug: " . $template->slug . "\n";
        echo "Theme: " . $template->theme . "\n";
        echo "Source: " . $template->source . "\n";
        echo "---\n";
    }
}
echo "</pre>";

// Check current theme
echo "<h3>Current Theme Info:</h3>";
echo "<pre>";
echo "Theme: " . get_stylesheet() . "\n";
echo "Is Block Theme: " . (wp_is_block_theme() ? 'Yes' : 'No') . "\n";
echo "</pre>";

// Check taxonomy terms
echo "<h3>wp_theme taxonomy terms:</h3>";
echo "<pre>";
if (taxonomy_exists('wp_theme')) {
    $terms = get_terms(array(
        'taxonomy' => 'wp_theme',
        'hide_empty' => false
    ));
    foreach ($terms as $term) {
        echo "Term: " . $term->name . " (ID: " . $term->term_id . ")\n";
    }
} else {
    echo "wp_theme taxonomy does not exist\n";
}
echo "</pre>";