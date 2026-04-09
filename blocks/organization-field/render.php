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

$organization_id = UNBC_Organization_Context::resolve_current_organization_id(array(
    'block_context' => isset($block->context) && is_array($block->context) ? $block->context : array(),
));

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
