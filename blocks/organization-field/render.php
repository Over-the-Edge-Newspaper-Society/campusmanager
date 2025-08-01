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

// Get organization ID from current post context (for Query Loop)
$organization_id = 0;

// Check if we're in a block context (Query Loop)
if (isset($block->context['postId'])) {
    $current_post_id = $block->context['postId'];
    $current_post = get_post($current_post_id);
    if ($current_post && $current_post->post_type === 'organization') {
        $organization_id = $current_post_id;
    }
} else {
    // Fallback to global post
    global $post;
    if ($post && $post->post_type === 'organization') {
        $organization_id = $post->ID;
    }
}

// Get the field value
$field_name = $attributes['fieldName'] ?? 'org_email';
$field_value = '';

if ($organization_id) {
    $field_value = get_post_meta($organization_id, $field_name, true);
}

// Get attributes
$content = $attributes['content'] ?? '';
$show_label = $attributes['showLabel'] ?? true;
$custom_label = $attributes['customLabel'] ?? '';
$fallback_text = $attributes['fallbackText'] ?? '';
$make_link = $attributes['makeLink'] ?? false;
$link_text = $attributes['linkText'] ?? '';

// Field labels mapping
$field_labels = [
    'org_email' => __('Email', 'unbc-events'),
    'org_size' => __('Size', 'unbc-events'),
    'org_founded_year' => __('Founded Year', 'unbc-events'),
    'org_short_description' => __('Short Description', 'unbc-events'),
    'org_membership_requirements' => __('Membership Requirements', 'unbc-events'),
    'org_meeting_schedule' => __('Meeting Schedule', 'unbc-events'),
    'org_president_name' => __('President Name', 'unbc-events'),
    'org_president_email' => __('President Email', 'unbc-events'),
    'org_contact_name' => __('Contact Name', 'unbc-events'),
    'org_contact_email' => __('Contact Email', 'unbc-events'),
    'org_office_location' => __('Office Location', 'unbc-events'),
    'org_website' => __('Website', 'unbc-events'),
    'org_facebook' => __('Facebook', 'unbc-events'),
    'org_instagram' => __('Instagram', 'unbc-events'),
    'org_twitter' => __('Twitter/X', 'unbc-events'),
    'org_discord' => __('Discord', 'unbc-events'),
    'org_linktree' => __('Linktree', 'unbc-events'),
    'org_youtube' => __('YouTube', 'unbc-events'),
    'org_registration_link' => __('Registration Link', 'unbc-events'),
    'org_status' => __('Status', 'unbc-events'),
    'org_founded_date' => __('Founded Date', 'unbc-events'),
    'org_approval_date' => __('Approval Date', 'unbc-events'),
    'org_registration_date' => __('Registration Date', 'unbc-events')
];

// Get the label
$label = $custom_label ?: ($field_labels[$field_name] ?? '');

// Fields that can be links
$linkable_fields = [
    'org_email', 'org_president_email', 'org_contact_email',
    'org_website', 'org_facebook', 'org_instagram', 'org_discord', 
    'org_linktree', 'org_youtube', 'org_registration_link', 'org_twitter'
];

// Format the field value based on field type and link settings
$formatted_value = '';
if ($field_value) {
    $display_text = $link_text ?: $field_value; // Use custom link text if provided
    
    switch ($field_name) {
        case 'org_website':
        case 'org_facebook':
        case 'org_instagram':
        case 'org_discord':
        case 'org_linktree':
        case 'org_youtube':
        case 'org_registration_link':
            // URL fields
            if ($make_link) {
                $formatted_value = sprintf('<a href="%s" target="_blank" rel="noopener noreferrer">%s</a>', 
                    esc_url($field_value), 
                    esc_html($display_text)
                );
            } else {
                $formatted_value = esc_html($field_value);
            }
            break;
        
        case 'org_email':
        case 'org_president_email':
        case 'org_contact_email':
            // Email fields
            if ($make_link) {
                $formatted_value = sprintf('<a href="mailto:%s">%s</a>', 
                    esc_attr($field_value), 
                    esc_html($display_text)
                );
            } else {
                $formatted_value = esc_html($field_value);
            }
            break;
        
        case 'org_twitter':
            // Twitter handle
            $twitter_handle = ltrim($field_value, '@');
            if ($make_link) {
                $formatted_value = sprintf('<a href="https://twitter.com/%s" target="_blank" rel="noopener noreferrer">%s</a>', 
                    esc_attr($twitter_handle), 
                    esc_html($link_text ?: '@' . $twitter_handle)
                );
            } else {
                $formatted_value = esc_html('@' . $twitter_handle);
            }
            break;
        
        case 'org_founded_date':
        case 'org_approval_date':
        case 'org_registration_date':
            // Date fields - format nicely
            $formatted_value = esc_html(date_i18n(get_option('date_format'), strtotime($field_value)));
            break;
        
        default:
            // Regular text fields
            $formatted_value = esc_html($field_value);
            break;
    }
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