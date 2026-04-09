<?php

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Organization_Fields {
    private static function get_definitions() {
        return array(
            'org_email' => array(
                'label' => __('Email', 'unbc-events'),
                'default' => '',
                'sanitize' => 'email',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'email',
            ),
            'org_size' => array(
                'label' => __('Size', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'taxonomy',
                'taxonomy' => 'org_size',
                'org_manager_editable' => false,
            ),
            'org_founded_year' => array(
                'label' => __('Founded Year', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => true,
            ),
            'org_short_description' => array(
                'label' => __('Short Description', 'unbc-events'),
                'default' => '',
                'sanitize' => 'textarea',
                'source' => 'meta',
                'org_manager_editable' => true,
            ),
            'org_membership_requirements' => array(
                'label' => __('Membership Requirements', 'unbc-events'),
                'default' => '',
                'sanitize' => 'textarea',
                'source' => 'meta',
                'org_manager_editable' => true,
            ),
            'org_meeting_schedule' => array(
                'label' => __('Meeting Schedule', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => true,
            ),
            'org_original_image_path' => array(
                'label' => __('Original Image Path', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => true,
            ),
            'org_president_name' => array(
                'label' => __('President Name', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => true,
            ),
            'org_president_email' => array(
                'label' => __('President Email', 'unbc-events'),
                'default' => '',
                'sanitize' => 'email',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'email',
            ),
            'org_contact_name' => array(
                'label' => __('Contact Name', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => true,
            ),
            'org_contact_email' => array(
                'label' => __('Contact Email', 'unbc-events'),
                'default' => '',
                'sanitize' => 'email',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'email',
            ),
            'org_office_location' => array(
                'label' => __('Office Location', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => true,
            ),
            'org_website' => array(
                'label' => __('Website', 'unbc-events'),
                'default' => '',
                'sanitize' => 'url',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'url',
            ),
            'org_facebook' => array(
                'label' => __('Facebook', 'unbc-events'),
                'default' => '',
                'sanitize' => 'url',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'url',
            ),
            'org_instagram' => array(
                'label' => __('Instagram', 'unbc-events'),
                'default' => '',
                'sanitize' => 'url',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'url',
            ),
            'org_twitter' => array(
                'label' => __('Twitter/X', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'twitter',
            ),
            'org_linkedin' => array(
                'label' => __('LinkedIn', 'unbc-events'),
                'default' => '',
                'sanitize' => 'url',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'url',
            ),
            'org_discord' => array(
                'label' => __('Discord', 'unbc-events'),
                'default' => '',
                'sanitize' => 'url',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'url',
            ),
            'org_linktree' => array(
                'label' => __('Linktree', 'unbc-events'),
                'default' => '',
                'sanitize' => 'url',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'url',
            ),
            'org_youtube' => array(
                'label' => __('YouTube', 'unbc-events'),
                'default' => '',
                'sanitize' => 'url',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'url',
            ),
            'org_registration_link' => array(
                'label' => __('Registration Link', 'unbc-events'),
                'default' => '',
                'sanitize' => 'url',
                'source' => 'meta',
                'org_manager_editable' => true,
                'link_type' => 'url',
            ),
            'org_status' => array(
                'label' => __('Organization Status', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'taxonomy',
                'taxonomy' => 'org_status',
                'org_manager_editable' => false,
            ),
            'org_is_department' => array(
                'label' => __('Department Flag', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => false,
            ),
            'org_founded_date' => array(
                'label' => __('Founded Date', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => false,
                'display_type' => 'date',
            ),
            'org_approval_date' => array(
                'label' => __('Approval Date', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => false,
                'display_type' => 'date',
            ),
            'org_registration_date' => array(
                'label' => __('Registration Date', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => false,
                'display_type' => 'date',
            ),
            'org_dissolution_date' => array(
                'label' => __('Dissolution Date', 'unbc-events'),
                'default' => '',
                'sanitize' => 'text',
                'source' => 'meta',
                'org_manager_editable' => false,
                'display_type' => 'date',
            ),
        );
    }

    public static function get_all_keys() {
        return array_keys(self::get_definitions());
    }

    public static function get_meta_keys() {
        return array_keys(array_filter(
            self::get_definitions(),
            function ($definition) {
                return $definition['source'] === 'meta';
            }
        ));
    }

    public static function get_org_manager_editable_meta_keys() {
        return array_keys(array_filter(
            self::get_definitions(),
            function ($definition) {
                return $definition['source'] === 'meta' && !empty($definition['org_manager_editable']);
            }
        ));
    }

    public static function get_org_manager_restricted_meta_keys() {
        return array_keys(array_filter(
            self::get_definitions(),
            function ($definition) {
                return $definition['source'] === 'meta' && empty($definition['org_manager_editable']);
            }
        ));
    }

    public static function get_labels($keys = null) {
        $definitions = self::get_definitions();
        $labels = array();

        foreach ($definitions as $key => $definition) {
            if ($keys !== null && !in_array($key, $keys, true)) {
                continue;
            }

            $labels[$key] = $definition['label'];
        }

        return $labels;
    }

    public static function get_defaults($keys = null) {
        $definitions = self::get_definitions();
        $defaults = array();

        foreach ($definitions as $key => $definition) {
            if ($keys !== null && !in_array($key, $keys, true)) {
                continue;
            }

            $defaults[$key] = $definition['default'];
        }

        return $defaults;
    }

    public static function get_value($post_id, $field_name) {
        $definitions = self::get_definitions();

        if (!isset($definitions[$field_name])) {
            return get_post_meta($post_id, $field_name, true);
        }

        $definition = $definitions[$field_name];

        if ($definition['source'] === 'taxonomy') {
            $terms = wp_get_post_terms($post_id, $definition['taxonomy'], array('fields' => 'names'));
            if (is_wp_error($terms) || empty($terms)) {
                return $definition['default'];
            }

            return $terms[0];
        }

        $value = get_post_meta($post_id, $field_name, true);
        return $value === '' ? $definition['default'] : $value;
    }

    public static function get_values($post_id, $keys = null) {
        $keys = $keys === null ? self::get_all_keys() : $keys;
        $values = array();

        foreach ($keys as $key) {
            $values[$key] = self::get_value($post_id, $key);
        }

        return $values;
    }

    public static function sanitize_value($field_name, $value) {
        $definitions = self::get_definitions();
        $value = wp_unslash($value);

        if (!isset($definitions[$field_name])) {
            return sanitize_text_field($value);
        }

        switch ($definitions[$field_name]['sanitize']) {
            case 'email':
                return sanitize_email($value);
            case 'url':
                return esc_url_raw($value);
            case 'textarea':
                return sanitize_textarea_field($value);
            default:
                return sanitize_text_field($value);
        }
    }

    public static function is_linkable($field_name) {
        $definitions = self::get_definitions();
        return !empty($definitions[$field_name]['link_type']);
    }

    public static function format_value($field_name, $field_value, $make_link = false, $link_text = '') {
        if ($field_value === '' || $field_value === null) {
            return '';
        }

        $definitions = self::get_definitions();
        $definition = $definitions[$field_name] ?? array();
        $display_text = $link_text !== '' ? $link_text : $field_value;
        $link_type = $definition['link_type'] ?? '';
        $display_type = $definition['display_type'] ?? '';

        if ($display_type === 'date') {
            return esc_html(date_i18n(get_option('date_format'), strtotime($field_value)));
        }

        if ($link_type === 'url') {
            if ($make_link) {
                return sprintf(
                    '<a href="%s" target="_blank" rel="noopener noreferrer">%s</a>',
                    esc_url($field_value),
                    esc_html($display_text)
                );
            }

            return esc_html($field_value);
        }

        if ($link_type === 'email') {
            if ($make_link) {
                return sprintf(
                    '<a href="mailto:%s">%s</a>',
                    esc_attr($field_value),
                    esc_html($display_text)
                );
            }

            return esc_html($field_value);
        }

        if ($link_type === 'twitter') {
            $twitter_handle = ltrim($field_value, '@');
            if ($make_link) {
                return sprintf(
                    '<a href="https://twitter.com/%s" target="_blank" rel="noopener noreferrer">%s</a>',
                    esc_attr($twitter_handle),
                    esc_html($link_text !== '' ? $link_text : '@' . $twitter_handle)
                );
            }

            return esc_html('@' . $twitter_handle);
        }

        return esc_html($field_value);
    }
}
