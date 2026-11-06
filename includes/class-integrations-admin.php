<?php
/**
 * Events → Settings & Integrations: one place for import access, the legacy
 * API key, a log of recent imports, the subscribe feed and links to tools.
 */
class UNBC_Integrations_Admin {
    const LOG_OPTION = 'unbc_events_import_log';
    const LOG_LIMIT = 50;
    const PAGE = 'campus-manager-settings';

    public function __construct() {
        add_action('admin_menu', array($this, 'add_page'));
        add_action('admin_post_unbc_generate_api_key', array($this, 'generate_api_key'));
        add_action('admin_post_unbc_remove_api_key', array($this, 'remove_api_key'));
        add_action('admin_post_unbc_clear_import_log', array($this, 'clear_log'));
        // Runs after the permission check and the handler, for HTTP and internal requests.
        add_filter('rest_request_after_callbacks', array(__CLASS__, 'log_import'), 10, 3);
    }

    public function add_page() {
        add_submenu_page('edit.php?post_type=event', 'Campus Manager Settings & Integrations', 'Settings & Integrations',
            'manage_options', self::PAGE, array($this, 'render'));
    }

    /** Records every call to the import endpoint, including refused ones. */
    public static function log_import($response, $handler, $request) {
        if ($request->get_route() !== '/unbc-events/v1/import-event' || $request->get_method() !== 'POST') return $response;
        $event = $request->get_param('event');
        if (is_wp_error($response)) {
            $error_data = $response->get_error_data();
            $status = is_array($error_data) && isset($error_data['status']) ? (int) $error_data['status'] : 500;
            $data = array('message' => $response->get_error_message());
        } else {
            $result = rest_ensure_response($response);
            $data = $result->get_data();
            $status = $result->get_status();
        }
        $user = wp_get_current_user();
        $entry = array(
            'time' => time(),
            'source' => $user->exists() ? $user->user_login : ($request->get_header('X-API-Key') ? 'API key' : 'anonymous'),
            'title' => is_array($event) ? mb_substr(sanitize_text_field((string) ($event['title'] ?? '')), 0, 120) : '',
            'status' => $status,
            'action' => is_array($data) && isset($data['action']) ? sanitize_key($data['action']) : '',
            'post_id' => is_array($data) && isset($data['post_id']) ? absint($data['post_id']) : 0,
            'warnings' => is_array($data) && !empty($data['warnings']) ? count((array) $data['warnings']) : 0,
            'error' => $status >= 400 && is_array($data) ? mb_substr(sanitize_text_field((string) ($data['message'] ?? '')), 0, 200) : '',
        );
        $log = get_option(self::LOG_OPTION, array());
        if (!is_array($log)) $log = array();
        array_unshift($log, $entry);
        update_option(self::LOG_OPTION, array_slice($log, 0, self::LOG_LIMIT), false);
        return $response;
    }

    private function guard($action) {
        if (!current_user_can('manage_options')) wp_die('You do not have permission to change Campus Manager settings.', 403);
        check_admin_referer($action);
    }

    private function back($notice) {
        wp_safe_redirect(add_query_arg(array('post_type' => 'event', 'page' => self::PAGE, 'unbc_notice' => $notice), admin_url('edit.php')));
        exit;
    }

    public function generate_api_key() {
        $this->guard('unbc_generate_api_key');
        $key = wp_generate_password(48, false, false);
        update_option('unbc_eventscrape_api_key', $key, false);
        // Shown once to the administrator who created it, then discarded.
        set_transient('unbc_new_api_key_' . get_current_user_id(), $key, 5 * MINUTE_IN_SECONDS);
        $this->back('key_created');
    }

    public function remove_api_key() {
        $this->guard('unbc_remove_api_key');
        delete_option('unbc_eventscrape_api_key');
        $this->back('key_removed');
    }

    public function clear_log() {
        $this->guard('unbc_clear_import_log');
        delete_option(self::LOG_OPTION);
        $this->back('log_cleared');
    }

    /** Health checks shown at the top of the page. Each: [label, ok, detail]. */
    public static function checks() {
        $routes = rest_get_server()->get_routes('unbc-events/v1');
        $https = wp_parse_url(home_url(), PHP_URL_SCHEME) === 'https';
        $app_passwords = function_exists('wp_is_application_passwords_available') && wp_is_application_passwords_available();
        return array(
            array('Import endpoint', isset($routes['/unbc-events/v1/import-event']), rest_url('unbc-events/v1/import-event')),
            array('Application passwords', $app_passwords, $app_passwords ? 'Available for integration accounts.' : 'Disabled. They need HTTPS (or a local environment) and must not be turned off by another plugin.'),
            array('HTTPS', $https, $https ? 'Credentials are encrypted in transit.' : 'The site address is not HTTPS; integrations should not send passwords to it.'),
            array('Pretty permalinks', (bool) get_option('permalink_structure'), get_option('permalink_structure') ? 'REST URLs use /wp-json/.' : 'Plain permalinks: REST URLs use ?rest_route=. Integrations must use that form.'),
        );
    }

    /** Users who can import events through an application password. */
    public static function import_accounts() {
        $users = get_users(array('capability' => 'edit_events', 'number' => 200, 'orderby' => 'login'));
        $rows = array();
        foreach ($users as $user) {
            $passwords = class_exists('WP_Application_Passwords') ? WP_Application_Passwords::get_user_application_passwords($user->ID) : array();
            if (!$passwords) continue;
            $last_used = max(array_map(function ($p) { return (int) ($p['last_used'] ?? 0); }, $passwords));
            $rows[] = array(
                'user' => $user,
                'passwords' => count($passwords),
                'last_used' => $last_used,
                'can_publish' => user_can($user, 'publish_events'),
                'organization' => in_array('organization_manager', (array) $user->roles, true) ? absint(get_user_meta($user->ID, 'assigned_organization', true)) : 0,
            );
        }
        return $rows;
    }

    public function render() {
        if (!current_user_can('manage_options')) return;
        $notice = sanitize_key($_GET['unbc_notice'] ?? '');
        $new_key = get_transient('unbc_new_api_key_' . get_current_user_id());
        if ($new_key) delete_transient('unbc_new_api_key_' . get_current_user_id());
        $has_key = trim((string) get_option('unbc_eventscrape_api_key')) !== '';
        $log = get_option(self::LOG_OPTION, array());
        $feed = class_exists('UNBC_ICal_Feed') ? UNBC_ICal_Feed::url() : '';
        $date_format = get_option('date_format') . ' ' . get_option('time_format');
        ?>
        <div class="wrap">
            <h1>Campus Manager Settings &amp; Integrations</h1>
            <?php if ($notice === 'key_removed'): ?><div class="notice notice-success"><p>The API key was removed. Requests that use it are now refused.</p></div><?php endif; ?>
            <?php if ($notice === 'log_cleared'): ?><div class="notice notice-success"><p>The import log was cleared.</p></div><?php endif; ?>
            <?php if ($new_key): ?>
                <div class="notice notice-warning"><p><strong>Copy this API key now. It will not be shown again.</strong></p>
                    <p><input type="text" class="large-text code" readonly value="<?php echo esc_attr($new_key); ?>" onclick="this.select()" aria-label="New API key"></p>
                    <p>Any integration still using the previous key stops working until it is updated.</p></div>
            <?php endif; ?>

            <h2>Integration health</h2>
            <table class="widefat striped" style="max-width:900px"><tbody>
                <?php foreach (self::checks() as $check): ?>
                    <tr><th scope="row" style="width:200px"><?php echo esc_html($check[0]); ?></th>
                        <td><span class="dashicons <?php echo $check[1] ? 'dashicons-yes-alt' : 'dashicons-warning'; ?>" style="color:<?php echo $check[1] ? '#00a32a' : '#dba617'; ?>" aria-hidden="true"></span>
                            <?php echo $check[1] ? 'OK' : 'Needs attention'; ?> — <?php echo esc_html($check[2]); ?></td></tr>
                <?php endforeach; ?>
            </tbody></table>

            <h2>Accounts that can import events</h2>
            <p>EventScrape and other integrations should sign in as a dedicated user with an <strong>application password</strong>. The user's role decides what they can do: <code>edit_events</code> saves drafts, <code>publish_events</code> is needed to publish, and organization managers are limited to their own organization.</p>
            <?php $accounts = self::import_accounts(); ?>
            <?php if (!$accounts): ?>
                <p><em>No user with event editing rights has an application password yet.</em> Create one under <a href="<?php echo esc_url(admin_url('users.php')); ?>">Users</a> → profile → Application Passwords.</p>
            <?php else: ?>
                <table class="widefat striped" style="max-width:900px">
                    <thead><tr><th>User</th><th>Role</th><th>Can publish</th><th>Application passwords</th><th>Last used</th></tr></thead>
                    <tbody><?php foreach ($accounts as $row): ?>
                        <tr>
                            <td><a href="<?php echo esc_url(get_edit_user_link($row['user']->ID)); ?>"><?php echo esc_html($row['user']->user_login); ?></a></td>
                            <td><?php echo esc_html(implode(', ', array_map(function ($r) { return wp_roles()->role_names[$r] ?? $r; }, (array) $row['user']->roles))); ?>
                                <?php if ($row['organization']): ?><br><small><?php echo esc_html(get_the_title($row['organization'])); ?> only</small><?php endif; ?></td>
                            <td><?php echo $row['can_publish'] ? 'Yes' : 'Drafts only'; ?></td>
                            <td><?php echo (int) $row['passwords']; ?></td>
                            <td><?php echo $row['last_used'] ? esc_html(wp_date($date_format, $row['last_used'])) : 'Never'; ?></td>
                        </tr>
                    <?php endforeach; ?></tbody>
                </table>
            <?php endif; ?>

            <h2>Legacy API key</h2>
            <p>The <code>X-API-Key</code> header is an older, fully trusted integration path: it is not tied to a user, so it can publish and edit any event. Prefer application passwords. Keep a key only for integrations that cannot use them.</p>
            <p><strong>Status:</strong> <?php echo $has_key ? 'A key is set.' : 'No key is set; API-key requests are refused.'; ?></p>
            <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" style="display:inline-block;margin-right:8px">
                <?php wp_nonce_field('unbc_generate_api_key'); ?><input type="hidden" name="action" value="unbc_generate_api_key">
                <button class="button" type="submit" onclick="return <?php echo $has_key ? "confirm('Replace the current key? Integrations using it will stop working until updated.')" : 'true'; ?>;"><?php echo $has_key ? 'Replace key' : 'Generate key'; ?></button>
            </form>
            <?php if ($has_key): ?>
                <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" style="display:inline-block">
                    <?php wp_nonce_field('unbc_remove_api_key'); ?><input type="hidden" name="action" value="unbc_remove_api_key">
                    <button class="button button-link-delete" type="submit" onclick="return confirm('Remove the API key? Integrations using it will stop working.');">Remove key</button>
                </form>
            <?php endif; ?>

            <h2>Recent imports</h2>
            <?php if (!$log): ?>
                <p><em>No imports have been received since this log was added.</em></p>
            <?php else: ?>
                <table class="widefat striped">
                    <thead><tr><th>When</th><th>Account</th><th>Event</th><th>Result</th><th>Warnings</th></tr></thead>
                    <tbody><?php foreach ($log as $entry): ?>
                        <tr>
                            <td><?php echo esc_html(wp_date($date_format, (int) $entry['time'])); ?></td>
                            <td><?php echo esc_html($entry['source']); ?></td>
                            <td><?php if (!empty($entry['post_id']) && current_user_can('edit_post', $entry['post_id'])): ?>
                                    <a href="<?php echo esc_url(get_edit_post_link($entry['post_id'])); ?>"><?php echo esc_html($entry['title'] ?: '#' . $entry['post_id']); ?></a>
                                <?php else: echo esc_html($entry['title']); endif; ?></td>
                            <td><?php
                                if ((int) $entry['status'] >= 400) echo '<span style="color:#b32d2e">Failed (HTTP ' . (int) $entry['status'] . ')</span>' . ($entry['error'] ? ': ' . esc_html($entry['error']) : '');
                                else echo esc_html(ucfirst($entry['action'] ?: 'saved'));
                            ?></td>
                            <td><?php echo (int) $entry['warnings'] ?: ''; ?></td>
                        </tr>
                    <?php endforeach; ?></tbody>
                </table>
                <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" style="margin-top:8px">
                    <?php wp_nonce_field('unbc_clear_import_log'); ?><input type="hidden" name="action" value="unbc_clear_import_log">
                    <button class="button" type="submit">Clear log</button>
                </form>
                <p class="description">The last <?php echo (int) self::LOG_LIMIT; ?> import requests, including refused ones. Image warnings for a specific event are also shown on its edit screen.</p>
            <?php endif; ?>

            <?php if ($feed): ?>
                <h2>Calendar subscription</h2>
                <p>People can subscribe to campus events in Google, Apple or Outlook Calendar with this address. The calendar's <strong>Subscribe</strong> button adds the visitor's current category and organization filters.</p>
                <p><input type="text" class="large-text code" readonly value="<?php echo esc_attr($feed); ?>" onclick="this.select()" aria-label="Calendar feed URL"></p>
            <?php endif; ?>

            <h2>Tools</h2>
            <ul style="list-style:disc;padding-left:20px">
                <li><a href="<?php echo esc_url(admin_url('edit.php?post_type=event&page=event-importer')); ?>">Import events from a file</a></li>
                <?php if (current_user_can('delete_others_posts')): ?><li><a href="<?php echo esc_url(admin_url('edit.php?post_type=event&page=event-deduplicator')); ?>">Find and merge duplicate events</a></li><?php endif; ?>
                <li><a href="<?php echo esc_url(admin_url('edit.php?post_type=organization&page=organization-settings')); ?>">Export or import organizations and events, and organization page templates</a></li>
                <li><a href="<?php echo esc_url(admin_url('edit.php?post_type=organization&page=organization-managers')); ?>">Organization managers</a></li>
            </ul>
        </div>
        <?php
    }
}
