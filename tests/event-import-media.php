<?php
// Standalone regression test: php tests/event-import-media.php [service-file].
// No WordPress database, network requests, or persistent test posts are used.
$fixture_root = sys_get_temp_dir() . '/campus-media-test-' . bin2hex(random_bytes(6));
mkdir($fixture_root . '/wp-admin/includes', 0700, true);
foreach (array('media', 'file', 'image') as $file) {
    file_put_contents($fixture_root . '/wp-admin/includes/' . $file . '.php', '<?php');
}
define('ABSPATH', $fixture_root . '/');
define('DB_NAME', 'fixture');
class WP_Error {
    private $code; private $message;
    public function __construct($code, $message, $data = null) { $this->code = $code; $this->message = $message; }
    public function get_error_code() { return $this->code; }
    public function get_error_message() { return $this->message; }
}
function is_wp_error($value) { return $value instanceof WP_Error; }
function add_action(...$args) {}
function add_filter(...$args) {}
function remove_filter(...$args) {}
function current_user_can(...$args) { return $GLOBALS['state']['allowed']; }
function sanitize_text_field($v) { return strip_tags((string) $v); }
function wp_kses_post($v) { return $v; }
function esc_url_raw($v) { return $v; }
function absint($v) { return abs((int) $v); }
function esc_html($v) { return htmlspecialchars($v, ENT_QUOTES); }
function esc_html__($v, $domain) { return esc_html($v); }
function get_current_screen() { return (object) $GLOBALS['state']['screen']; }
function get_posts($args) { return $GLOBALS['state']['existing'] ? array((object) array('ID' => 42)) : array(); }
function wp_insert_post($data) { $GLOBALS['state']['post'] = $data; return 42; }
function wp_update_post($data) { return wp_insert_post($data); }
function get_permalink($id) { return 'https://wordpress.example/?p=' . $id; }
function update_post_meta($id, $key, $value) { $GLOBALS['state']['meta'][$key] = $value; }
function delete_post_meta($id, $key) { unset($GLOBALS['state']['meta'][$key]); }
function get_post_meta($id, $key, $single) { return $GLOBALS['state']['meta'][$key] ?? ''; }
function rest_ensure_response($value) { return $value; }
function wp_set_object_terms(...$args) {}
function get_option($key) { return 'test-key'; }
function wp_parse_url($url, $part) { return parse_url($url, $part); }
function apply_filters($name, $value, ...$args) { return $value; }
function download_url($url) { $GLOBALS['state']['downloads']++; return $GLOBALS['state']['download']; }
function media_handle_sideload($file, $id) { return $GLOBALS['state']['sideload']; }
function wp_attachment_is_image($id) { return $GLOBALS['state']['is_image']; }
function set_post_thumbnail($post, $image) {
    if ($GLOBALS['state']['attach_fails']) { return false; }
    if ($GLOBALS['state']['thumbnail'] === $image) { return false; }
    $GLOBALS['state']['thumbnail'] = $image; return true;
}
function get_post_thumbnail_id($id) { return $GLOBALS['state']['thumbnail']; }
class UNBC_Write_Policy { public static function event(...$args) { return null; } }
class UNBC_Event_Store { public static function normalize_series($v) { return $v; } public static function checked($v) { return $v; } public static function meta(...$args) { update_post_meta(...$args); } }
class UNBC_Events_REST_API { public static function bump_cache_generation() {} }
class FakeDB {
    public function query($q) { return 1; }
    public $posts = 'posts';
    public $prefix = 'wp_';
    public $last_error = '';
    public function prepare($sql, ...$args) { return $sql; }
    public function esc_like($value) { return $value; }
    public function get_var($sql) { return str_contains($sql, 'GET_LOCK') || str_contains($sql, 'RELEASE_LOCK') ? 1 : $GLOBALS['state']['cached']; }
}
class RequestFixture {
    private $event; private $update;
    public function __construct($image = true, $update = false) {
        $this->event = array('title' => 'Fixture event', 'status' => 'draft', 'external_id' => 'fixture');
        if ($image) { $this->event['featured_media_url'] = 'https://images.example/event.jpg'; }
        $this->update = $update;
    }
    public function get_param($key) { return $key === 'event' ? $this->event : $this->update; }
    public function get_header($key) { return 'test-key'; }
}
require $argv[1] ?? dirname(__DIR__) . '/includes/class-event-import-service.php';
$wpdb = new FakeDB();
$service = new UNBC_Event_Import_Service();
function reset_fixture($changes = array()) {
    $GLOBALS['state'] = array_merge(array('allowed' => true, 'existing' => false, 'meta' => array(),
        'cached' => null, 'downloads' => 0, 'download' => '/tmp/test-image', 'sideload' => 17,
        'thumbnail' => 9, 'is_image' => true, 'attach_fails' => false,
        'screen' => array('base' => 'post', 'post_type' => 'event')), $changes);
}
function check($condition, $message) { if (!$condition) { throw new RuntimeException($message); } }
$tests = array(
    'local copy failure is explicit and preserves the event and existing image' => function() use ($service) {
        reset_fixture(array('download' => new WP_Error('local_copy', 'private internal details')));
        $r = $service->import_event_with_occurrences(new RequestFixture());
        check($r['success'] && $r['post_id'] === 42 && $r['media']['error_code'] === 'local_copy', 'Missing partial-success detail');
        check(count($r['warnings']) === 1 && strpos($r['warnings'][0], 'outbound requests are disabled') !== false, 'Missing actionable warning');
        check($GLOBALS['state']['thumbnail'] === 9 && $GLOBALS['state']['post']['post_status'] === 'draft', 'Event/image changed unexpectedly');
        check(get_post_meta(42, UNBC_Event_Import_Service::WARNINGS_META_KEY, true) === $r['warnings'], 'Warning was not retained');
    },
    'download errors do not expose signed URLs or internal paths' => function() use ($service) {
        reset_fixture(array('download' => new WP_Error('http_404', 'https://private/?token=SECRET')));
        $r = $service->import_event_with_occurrences(new RequestFixture());
        check($r['media']['error_code'] === 'featured_media_download_failed' && strpos(json_encode($r), 'SECRET') === false, 'Provider detail leaked');
    },
    'sideload errors clean the temporary file and preserve the old image' => function() use ($service) {
        $tmp = tempnam(sys_get_temp_dir(), 'campus-test-');
        reset_fixture(array('download' => $tmp, 'sideload' => new WP_Error('upload_error', 'internal')));
        $r = $service->import_event_with_occurrences(new RequestFixture());
        check($r['media']['error_code'] === 'featured_media_sideload_failed' && !file_exists($tmp) && $GLOBALS['state']['thumbnail'] === 9, 'Failed sideload mishandled');
    },
    'new image success clears old warnings' => function() use ($service) {
        reset_fixture(array('meta' => array(UNBC_Event_Import_Service::WARNINGS_META_KEY => array('old warning'))));
        $r = $service->import_event_with_occurrences(new RequestFixture());
        check($r['media'] === array('status' => 'imported', 'attachment_id' => 17) && !$r['warnings'], 'Success not reported');
        check(!get_post_meta(42, UNBC_Event_Import_Service::WARNINGS_META_KEY, true), 'Stale warning retained');
    },
    'reusing an already assigned image is success even when WP returns false' => function() use ($service) {
        reset_fixture(array('cached' => 17, 'thumbnail' => 17));
        $r = $service->import_event_with_occurrences(new RequestFixture());
        check($r['media']['status'] === 'imported' && $GLOBALS['state']['downloads'] === 0, 'Unchanged image misreported');
    },
    'invalid attachments preserve an existing thumbnail' => function() use ($service) {
        reset_fixture(array('cached' => 17, 'is_image' => false));
        $r = $service->import_event_with_occurrences(new RequestFixture());
        check($r['media']['error_code'] === 'featured_media_invalid_image' && $GLOBALS['state']['thumbnail'] === 9, 'Invalid image replaced thumbnail');
    },
    'thumbnail write failure is not reported as success' => function() use ($service) {
        reset_fixture(array('cached' => 17, 'attach_fails' => true));
        $r = $service->import_event_with_occurrences(new RequestFixture());
        check($r['media']['error_code'] === 'featured_media_attach_failed', 'Attachment error lost');
    },
    'API key media restrictions remain enforced' => function() use ($service) {
        reset_fixture(array('allowed' => false));
        $r = $service->import_event_with_occurrences(new RequestFixture());
        check($r['media']['status'] === 'skipped' && $GLOBALS['state']['downloads'] === 0, 'Media permission bypassed');
    },
    'duplicate skip does not download media or clear earlier warnings' => function() use ($service) {
        reset_fixture(array('existing' => true, 'meta' => array(UNBC_Event_Import_Service::WARNINGS_META_KEY => array('earlier warning'))));
        $r = $service->import_event_with_occurrences(new RequestFixture());
        check($r['action'] === 'skipped' && $r['media']['status'] === 'not_attempted' && $GLOBALS['state']['downloads'] === 0, 'Duplicate not skipped');
        check(get_post_meta(42, UNBC_Event_Import_Service::WARNINGS_META_KEY, true) === array('earlier warning'), 'Prior warning lost');
    },
    'no requested image causes no warning' => function() use ($service) {
        reset_fixture(); $r = $service->import_event_with_occurrences(new RequestFixture(false));
        check($r['media']['status'] === 'not_requested' && !$r['warnings'] && $GLOBALS['state']['downloads'] === 0, 'Unrequested download');
    },
    'admin warning is escaped and restricted to authorized event editing' => function() use ($service) {
        reset_fixture(array('meta' => array(UNBC_Event_Import_Service::WARNINGS_META_KEY => array('<script>fixture</script>'))));
        $_GET['post'] = 42; ob_start(); $service->show_import_warnings(); $html = ob_get_clean();
        check(strpos($html, '&lt;script&gt;') !== false && strpos($html, '<script>') === false, 'Warning not escaped');
        $GLOBALS['state']['allowed'] = false; ob_start(); $service->show_import_warnings(); check(ob_get_clean() === '', 'Warning shown without permission');
    },
);
try {
    foreach ($tests as $name => $test) { $test(); echo "PASS: $name\n"; }
    echo count($tests) . " tests passed\n";
} finally {
    foreach (array('media', 'file', 'image') as $file) { unlink($fixture_root . '/wp-admin/includes/' . $file . '.php'); }
    rmdir($fixture_root . '/wp-admin/includes'); rmdir($fixture_root . '/wp-admin'); rmdir($fixture_root);
}
