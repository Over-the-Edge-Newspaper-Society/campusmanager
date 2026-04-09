<?php

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Events_REST_Organizations_Controller {
    public function get_organizations($request) {
        $args = array(
            'post_type' => 'organization',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'title',
            'order' => 'ASC',
        );

        $query = new WP_Query($args);
        $organizations = array();

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $organizations[] = array(
                    'id' => get_the_ID(),
                    'name' => get_the_title(),
                    'description' => get_the_content(),
                    'website' => UNBC_Organization_Fields::get_value(get_the_ID(), 'org_website'),
                    'contact_email' => UNBC_Organization_Fields::get_value(get_the_ID(), 'org_email'),
                );
            }
            wp_reset_postdata();
        }

        return rest_ensure_response(array(
            'organizations' => $organizations,
            'total' => count($organizations),
        ));
    }

    public function get_categories($request) {
        $categories = get_terms(array(
            'taxonomy' => 'event_category',
            'hide_empty' => false,
        ));

        $category_data = array();
        foreach ($categories as $category) {
            $category_data[] = array(
                'id' => $category->term_id,
                'name' => $category->name,
                'slug' => $category->slug,
                'count' => $category->count,
            );
        }

        return rest_ensure_response(array(
            'categories' => $category_data,
            'total' => count($category_data),
        ));
    }

    public function get_category_config($request) {
        $categories = get_terms(array(
            'taxonomy' => 'event_category',
            'hide_empty' => false,
        ));

        $config = array();
        foreach ($categories as $category) {
            $variant = get_term_meta($category->term_id, 'category_variant', true);

            if (!$variant && class_exists('UNBC_Category_Colors')) {
                $variant = UNBC_Category_Colors::get_category_color_variant($category->term_id);
            }

            if (!$variant) {
                $variant = 'default';
            }

            $config[$category->slug] = array(
                'name' => $category->name,
                'variant' => $variant,
            );
        }

        return rest_ensure_response($config);
    }

    public function get_category_colors($request) {
        if (!class_exists('UNBC_Category_Colors')) {
            return new WP_Error('missing_class', 'Category colors class not found', array('status' => 500));
        }

        $reflection = new ReflectionClass('UNBC_Category_Colors');
        $color_options_property = $reflection->getProperty('color_options');
        $color_options_property->setAccessible(true);
        $color_options = $color_options_property->getValue();

        return rest_ensure_response($color_options);
    }
}
