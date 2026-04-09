<?php

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Organization_Context {
    public static function resolve_current_organization($args = array()) {
        $organization_id = self::resolve_current_organization_id($args);

        if (!$organization_id) {
            return null;
        }

        $organization = get_post($organization_id);
        if (!$organization || $organization->post_type !== 'organization') {
            return null;
        }

        return $organization;
    }

    public static function resolve_current_organization_id($args = array()) {
        $args = wp_parse_args($args, array(
            'organization_id' => 0,
            'post_id' => 0,
            'block_context' => array(),
        ));

        $organization_id = absint($args['organization_id']);
        if ($organization_id > 0) {
            return $organization_id;
        }

        $block_context = is_array($args['block_context']) ? $args['block_context'] : array();
        if (!empty($block_context['postId'])) {
            $organization_id = self::resolve_post_organization_id($block_context['postId']);
            if ($organization_id) {
                return $organization_id;
            }
        }

        if (!empty($args['post_id'])) {
            $organization_id = self::resolve_post_organization_id($args['post_id']);
            if ($organization_id) {
                return $organization_id;
            }
        }

        if (function_exists('is_singular') && is_singular('organization')) {
            return absint(get_queried_object_id());
        }

        $queried_object = get_queried_object();
        if ($queried_object instanceof WP_Post && $queried_object->post_type === 'organization') {
            return (int) $queried_object->ID;
        }

        global $wp_query;
        if (
            isset($wp_query->queried_object) &&
            $wp_query->queried_object instanceof WP_Post &&
            $wp_query->queried_object->post_type === 'organization'
        ) {
            return (int) $wp_query->queried_object->ID;
        }

        $request_slug = self::resolve_request_organization_slug();
        if ($request_slug !== '') {
            $organization = get_page_by_path($request_slug, OBJECT, 'organization');
            if ($organization) {
                return (int) $organization->ID;
            }
        }

        if (!empty($wp_query->query_vars['name'])) {
            $organization = get_page_by_path(sanitize_title($wp_query->query_vars['name']), OBJECT, 'organization');
            if ($organization) {
                return (int) $organization->ID;
            }
        }

        if (!empty($GLOBALS['current_organization']) && $GLOBALS['current_organization'] instanceof WP_Post) {
            return self::resolve_post_organization_id($GLOBALS['current_organization']->ID);
        }

        global $post;
        if ($post instanceof WP_Post) {
            return self::resolve_post_organization_id($post->ID);
        }

        return 0;
    }

    private static function resolve_post_organization_id($post_id) {
        $post = get_post($post_id);
        if ($post && $post->post_type === 'organization') {
            return (int) $post->ID;
        }

        return 0;
    }

    private static function resolve_request_organization_slug() {
        if (isset($_GET['organization'])) {
            return sanitize_title(wp_unslash($_GET['organization']));
        }

        if (empty($_SERVER['REQUEST_URI'])) {
            return '';
        }

        $parsed_url = wp_parse_url(wp_unslash($_SERVER['REQUEST_URI']));
        if (empty($parsed_url['path'])) {
            return '';
        }

        $path_parts = array_values(array_filter(explode('/', trim($parsed_url['path'], '/'))));
        if (count($path_parts) >= 2 && in_array($path_parts[0], array('organization', 'organizations', 'clubs'), true)) {
            return sanitize_title($path_parts[1]);
        }

        return '';
    }
}
