<?php

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Events_Updater {
    private $plugin_basename;
    private $plugin_slug;
    private $version;
    private $update_uri;
    private $manifest_url;
    private $cache_key;
    private $cache_ttl;

    public function __construct($plugin_file, $version) {
        $this->plugin_basename = plugin_basename($plugin_file);
        $this->plugin_slug = dirname($this->plugin_basename);
        $this->version = (string) $version;
        $this->update_uri = UNBC_EVENTS_UPDATE_URI;
        $this->manifest_url = $this->resolve_manifest_url();
        $this->cache_key = 'unbc_events_update_manifest_' . md5($this->manifest_url);
        $this->cache_ttl = (int) apply_filters('unbc_events_update_manifest_cache_ttl', DAY_IN_SECONDS, $this->manifest_url, $this);

        $hostname = wp_parse_url($this->update_uri, PHP_URL_HOST);
        if (!$hostname) {
            return;
        }

        add_filter("update_plugins_{$hostname}", array($this, 'filter_update_response'), 10, 4);
        add_filter('plugins_api', array($this, 'filter_plugin_information'), 20, 3);
        add_action('upgrader_process_complete', array($this, 'purge_manifest_cache'), 10, 2);
    }

    public function filter_update_response($update, $plugin_data, $plugin_file, $locales) {
        unset($locales);

        if ($plugin_file !== $this->plugin_basename) {
            return $update;
        }

        $manifest = $this->get_manifest();
        if (!$manifest || !$this->is_update_compatible($manifest)) {
            return false;
        }

        $response = array(
            'slug' => $this->plugin_slug,
            'version' => (string) $manifest['version'],
            'url' => $this->sanitize_url($manifest['homepage']),
            'package' => $this->sanitize_url($manifest['download_url']),
            'tested' => isset($manifest['tested']) ? (string) $manifest['tested'] : '',
            'requires_php' => isset($manifest['requires_php']) ? (string) $manifest['requires_php'] : '',
            'autoupdate' => false,
        );

        $icons = $this->sanitize_asset_map(isset($manifest['icons']) ? $manifest['icons'] : array());
        if (!empty($icons)) {
            $response['icons'] = $icons;
        }

        $banners = $this->sanitize_asset_map(isset($manifest['banners']) ? $manifest['banners'] : array());
        if (!empty($banners)) {
            $response['banners'] = $banners;
        }

        return $response;
    }

    public function filter_plugin_information($response, $action, $args) {
        if ('plugin_information' !== $action || empty($args->slug) || $args->slug !== $this->plugin_slug) {
            return $response;
        }

        $manifest = $this->get_manifest();
        if (!$manifest) {
            return $response;
        }

        $plugin_information = new stdClass();
        $plugin_information->name = $manifest['name'];
        $plugin_information->slug = $this->plugin_slug;
        $plugin_information->version = (string) $manifest['version'];
        $plugin_information->author = isset($manifest['author']) ? wp_kses_post($manifest['author']) : '';
        $plugin_information->author_profile = $this->sanitize_url(isset($manifest['author_profile']) ? $manifest['author_profile'] : '');
        $plugin_information->homepage = $this->sanitize_url(isset($manifest['homepage']) ? $manifest['homepage'] : '');
        $plugin_information->requires = isset($manifest['requires']) ? (string) $manifest['requires'] : '';
        $plugin_information->tested = isset($manifest['tested']) ? (string) $manifest['tested'] : '';
        $plugin_information->requires_php = isset($manifest['requires_php']) ? (string) $manifest['requires_php'] : '';
        $plugin_information->last_updated = isset($manifest['last_updated']) ? (string) $manifest['last_updated'] : '';
        $plugin_information->download_link = $this->sanitize_url($manifest['download_url']);
        $plugin_information->trunk = $plugin_information->download_link;
        $plugin_information->sections = $this->sanitize_sections(isset($manifest['sections']) ? $manifest['sections'] : array());

        if (!empty($manifest['donate_link'])) {
            $plugin_information->donate_link = $this->sanitize_url($manifest['donate_link']);
        }

        $icons = $this->sanitize_asset_map(isset($manifest['icons']) ? $manifest['icons'] : array());
        if (!empty($icons)) {
            $plugin_information->icons = $icons;
        }

        $banners = $this->sanitize_asset_map(isset($manifest['banners']) ? $manifest['banners'] : array());
        if (!empty($banners)) {
            $plugin_information->banners = $banners;
        }

        return $plugin_information;
    }

    public function purge_manifest_cache($upgrader, $hook_extra) {
        unset($upgrader);

        if (empty($hook_extra['action']) || 'update' !== $hook_extra['action'] || empty($hook_extra['type']) || 'plugin' !== $hook_extra['type']) {
            return;
        }

        $updated_plugins = array();

        if (!empty($hook_extra['plugins']) && is_array($hook_extra['plugins'])) {
            $updated_plugins = $hook_extra['plugins'];
        } elseif (!empty($hook_extra['plugin'])) {
            $updated_plugins = array($hook_extra['plugin']);
        }

        if (in_array($this->plugin_basename, $updated_plugins, true)) {
            delete_site_transient($this->cache_key);
        }
    }

    private function get_manifest() {
        $cached = get_site_transient($this->cache_key);
        if (is_array($cached)) {
            return $cached;
        }

        $remote = wp_remote_get(
            $this->manifest_url,
            array(
                'timeout' => 10,
                'headers' => array(
                    'Accept' => 'application/json',
                ),
                'user-agent' => 'Campus Manager/' . $this->version . '; ' . home_url('/'),
            )
        );

        if (is_wp_error($remote) || 200 !== wp_remote_retrieve_response_code($remote)) {
            return false;
        }

        $body = wp_remote_retrieve_body($remote);
        if (!is_string($body) || '' === trim($body)) {
            return false;
        }

        $manifest = json_decode($body, true);
        if (!is_array($manifest) || !$this->is_valid_manifest($manifest)) {
            return false;
        }

        set_site_transient($this->cache_key, $manifest, max(HOUR_IN_SECONDS, $this->cache_ttl));

        return $manifest;
    }

    private function is_valid_manifest($manifest) {
        $required_fields = array('name', 'slug', 'version', 'download_url', 'homepage', 'sections');

        foreach ($required_fields as $field) {
            if (empty($manifest[$field])) {
                return false;
            }
        }

        if (!is_array($manifest['sections'])) {
            return false;
        }

        return true;
    }

    private function is_update_compatible($manifest) {
        if (!empty($manifest['requires']) && version_compare(get_bloginfo('version'), (string) $manifest['requires'], '<')) {
            return false;
        }

        if (!empty($manifest['requires_php']) && version_compare(PHP_VERSION, (string) $manifest['requires_php'], '<')) {
            return false;
        }

        return true;
    }

    private function resolve_manifest_url() {
        $manifest_url = UNBC_EVENTS_UPDATE_MANIFEST_URL;

        $manifest_url = apply_filters('unbc_events_update_manifest_url', $manifest_url, $this);

        return esc_url_raw($manifest_url);
    }

    private function sanitize_asset_map($assets) {
        if (!is_array($assets)) {
            return array();
        }

        $sanitized = array();
        foreach ($assets as $size => $url) {
            $sanitized[$size] = $this->sanitize_url($url);
        }

        return array_filter($sanitized);
    }

    private function sanitize_sections($sections) {
        if (!is_array($sections)) {
            return array();
        }

        $sanitized = array();
        foreach ($sections as $section => $content) {
            $sanitized[$section] = is_string($content) ? wp_kses_post($content) : '';
        }

        return $sanitized;
    }

    private function sanitize_url($url) {
        return is_string($url) ? esc_url_raw($url) : '';
    }
}
