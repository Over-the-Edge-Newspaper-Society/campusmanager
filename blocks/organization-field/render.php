<?php
/**
 * Server-side rendering for the Organization Field block
 *
 * @param array $attributes Block attributes.
 * @param string $content Block content.
 * @param WP_Block $block Block instance.
 * @return string Returns the rendered block HTML.
 */

if (!defined('ABSPATH')) {
    exit;
}

// Get organization ID from current post context
$organization_id = 0;

// Check if we're in a block context (Query Loop)
if (isset($block->context['postId'])) {
    $current_post_id = $block->context['postId'];
    $current_post = get_post($current_post_id);
    if ($current_post && $current_post->post_type === 'organization') {
        $organization_id = $current_post_id;
    }
} else {
    // Check if we're viewing an organization page directly
    if (is_singular('organization')) {
        $organization_id = get_queried_object_id();
    } else {
        // Check if we're on a page that's showing organization content via template
        $queried_object = get_queried_object();
        
        // If we're on a page that uses the organization template
        if ($queried_object && isset($queried_object->post_type)) {
            if ($queried_object->post_type === 'organization') {
                $organization_id = $queried_object->ID;
            } else if ($queried_object->post_type === 'page') {
                // Check if this page is being used as organization template
                $global_template_id = get_option('unbc_org_global_template', '');
                if ($global_template_id && $queried_object->ID == $global_template_id) {
                    // We need to detect which organization we're viewing
                    // Check URL structure for organization slug
                    $request_uri = $_SERVER['REQUEST_URI'];
                    if (preg_match('/\/clubs\/([^\/]+)/', $request_uri, $matches)) {
                        $org_slug = $matches[1];
                        $organization = get_page_by_path($org_slug, OBJECT, 'organization');
                        if ($organization) {
                            $organization_id = $organization->ID;
                        }
                    }
                }
            }
        }
        
        // Check URL for organization slug when using templates
        if (!$organization_id) {
            global $wp_query;
            if (isset($wp_query->query_vars['name']) && !empty($wp_query->query_vars['name'])) {
                $organization = get_page_by_path($wp_query->query_vars['name'], OBJECT, 'organization');
                if ($organization) {
                    $organization_id = $organization->ID;
                }
            }
        }
        
        // Check for globally stored organization data (from template handling)
        if (!$organization_id && isset($GLOBALS['current_organization'])) {
            $organization_id = $GLOBALS['current_organization']->ID;
        }
        
        // Fallback to global post
        if (!$organization_id) {
            global $post;
            if ($post && $post->post_type === 'organization') {
                $organization_id = $post->ID;
            }
        }
    }
}

// Get the field value
$field_name = $attributes['fieldName'] ?? 'org_email';
$field_value = '';

if ($organization_id) {
    $field_value = UNBC_Organization_Fields::get_value($organization_id, $field_name);
}

// Get attributes
$content = $attributes['content'] ?? '';
$show_label = $attributes['showLabel'] ?? true;
$custom_label = $attributes['customLabel'] ?? '';
$fallback_text = $attributes['fallbackText'] ?? '';
$make_link = $attributes['makeLink'] ?? false;
$link_text = $attributes['linkText'] ?? '';

// Get the label
$field_labels = UNBC_Organization_Fields::get_labels();
$label = $custom_label ?: ($field_labels[$field_name] ?? '');

// Format the field value based on field type and link settings
$formatted_value = '';
if ($field_value) {
    $formatted_value = UNBC_Organization_Fields::format_value($field_name, $field_value, $make_link, $link_text);
} else if ($fallback_text) {
    $formatted_value = esc_html($fallback_text);
}

// Determine what content to display
$display_content = '';
if ($content) {
    // If custom content is provided, use it
    $display_content = $content;
} else if ($formatted_value) {
    // Use the formatted field value
    $display_content = $formatted_value;
}

// Don't render anything if there's no content to show
if (!$display_content) {
    return '';
}

// Build the output
$wrapper_attributes = get_block_wrapper_attributes(['class' => 'organization-field-block']);
$output = '<div ' . $wrapper_attributes . '>';

if ($show_label && $label) {
    $output .= '<span class="organization-field-label">' . esc_html($label) . ': </span>';
}

$output .= '<span class="organization-field-content">' . $display_content . '</span>';
$output .= '</div>';

echo $output;
?>
