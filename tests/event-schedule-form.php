<?php
// Standalone regression test: php tests/event-schedule-form.php
// Covers the Schedule box's conversion of submitted rows into occurrences.
define('ABSPATH', sys_get_temp_dir() . '/');
function add_action(...$args) {}
function wp_unslash($v) { return is_string($v) ? stripslashes($v) : $v; }
function wp_timezone() { return new DateTimeZone('America/Vancouver'); }
function sanitize_text_field($v) { return trim(strip_tags((string) $v)); }
function wp_kses_post($v) { return $v; }
function get_post_meta($id, $key, $single) { return $GLOBALS['meta'][$key] ?? ''; }
require dirname(__DIR__) . '/includes/class-event-store.php';
require dirname(__DIR__) . '/includes/class-event-series.php';

function check($condition, $message) { if (!$condition) throw new RuntimeException($message); }
function fails($rows, $pattern, $all_day = false) {
    try { UNBC_Event_Series::occurrences_from_form($rows, $all_day); } catch (InvalidArgumentException $e) {
        check(preg_match($pattern, $e->getMessage()) === 1, 'Unexpected message: ' . $e->getMessage()); return;
    }
    throw new RuntimeException('Expected a validation error matching ' . $pattern);
}

$tests = array(
    'rows are sorted, numbered and blank rows ignored' => function () {
        $o = UNBC_Event_Series::occurrences_from_form(array(
            array('start_date' => '2026-10-08', 'start_time' => '18:00', 'end_date' => '2026-10-08', 'end_time' => '20:00'),
            array('start_date' => '', 'start_time' => '', 'end_date' => '', 'end_time' => ''),
            array('start_date' => '2026-10-01', 'start_time' => '18:00', 'end_date' => '', 'end_time' => '20:00', 'status' => 'canceled'),
        ), false);
        check(count($o) === 2, 'Blank row was kept');
        check($o[0]['start_datetime'] === '2026-10-01T18:00' && $o[0]['sequence'] === 1 && $o[0]['event_status_override'] === 'canceled', 'First row wrong');
        check($o[1]['end_datetime'] === '2026-10-08T20:00' && $o[1]['sequence'] === 2 && !isset($o[1]['event_status_override']), 'Second row wrong');
    },
    'output passes the store validation used by imports' => function () {
        $o = UNBC_Event_Series::occurrences_from_form(array(array('start_date' => '2026-11-01', 'start_time' => '09:00', 'end_time' => '10:30')), false);
        $n = UNBC_Event_Store::normalize_occurrences($o);
        $expected = (new DateTime('2026-11-01 09:00', wp_timezone()))->setTimezone(new DateTimeZone('UTC'))->format('Y-m-d H:i:s');
        check($n[0]['start_datetime'] === '2026-11-01 09:00:00' && $n[0]['start_utc'] === $expected && $n[0]['duration_seconds'] === 5400, 'Store rejected or shifted the editor row');
    },
    'an end time before the start on the same day is overnight' => function () {
        $o = UNBC_Event_Series::occurrences_from_form(array(array('start_date' => '2026-10-01', 'start_time' => '23:00', 'end_date' => '2026-10-01', 'end_time' => '01:00')), false);
        check($o[0]['end_datetime'] === '2026-10-02T01:00', 'Overnight end not moved to the next day');
    },
    'all-day rows ignore times and span whole days' => function () {
        $o = UNBC_Event_Series::occurrences_from_form(array(array('start_date' => '2026-10-01', 'start_time' => '18:00', 'end_date' => '2026-10-03', 'end_time' => '08:00')), true);
        check($o[0]['start_datetime'] === '2026-10-01T00:00' && $o[0]['end_datetime'] === '2026-10-03T23:59', 'All-day times not normalized');
        check(UNBC_Event_Series::occurrence_type_for($o, true) === 'all_day', 'All-day type not derived');
    },
    'occurrence type is derived from the dates' => function () {
        $single = UNBC_Event_Series::occurrences_from_form(array(array('start_date' => '2026-10-01', 'start_time' => '10:00')), false);
        check(UNBC_Event_Series::occurrence_type_for($single, false) === 'single', 'Single not derived');
        check($single[0]['end_datetime'] === '2026-10-01T10:00', 'Missing end time should equal start');
        $multi = UNBC_Event_Series::occurrences_from_form(array(array('start_date' => '2026-10-01', 'end_date' => '2026-10-02')), false);
        check(UNBC_Event_Series::occurrence_type_for($multi, false) === 'multi_day', 'Multi-day not derived');
        check(UNBC_Event_Series::occurrence_type_for(array_merge($single, $multi), false) === 'recurring', 'Recurring not derived');
    },
    'occurrence overrides from imports are carried through' => function () {
        $o = UNBC_Event_Series::occurrences_from_form(array(array('start_date' => '2026-10-01', 'start_time' => '10:00',
            'overrides' => '{"location_override":"Room 7-212","status_reason_override":"Snow","bogus":"x"}')), false);
        check($o[0]['location_override'] === 'Room 7-212' && $o[0]['status_reason_override'] === 'Snow' && !isset($o[0]['bogus']), 'Overrides lost or unfiltered');
    },
    'invalid rows name the row and are rejected' => function () {
        fails(array(array('start_time' => '10:00')), '/Date 1 needs a start date/');
        fails(array(array('start_date' => '2026-10-01'), array('start_date' => '2026-10-02', 'start_time' => '25:99x')), '/Date 2 has an invalid time/');
        fails(array(array('start_date' => '2026-10-05', 'start_time' => '10:00', 'end_date' => '2026-10-01', 'end_time' => '11:00')), '/Date 1 ends before it starts/');
        fails(array(array('start_date' => '2026-10-05', 'status' => 'deleted')), '/invalid status/');
    },
    'legacy single-date events seed the editor' => function () {
        $GLOBALS['wpdb'] = new class { public $prefix = 'wp_'; public function prepare($q, ...$a) { return $q; } public function get_var($q) { return null; } };
        $GLOBALS['meta'] = array('event_date' => '2026-10-01', 'start_time' => '23:00:00', 'end_time' => '01:00:00');
        $rows = (new UNBC_Event_Series())->schedule_rows_for_post(5);
        check(count($rows) === 1 && $rows[0]['start_time'] === '23:00' && $rows[0]['end_date'] === '2026-10-02', 'Legacy date not seeded as overnight');
        $GLOBALS['meta'] = array();
        check((new UNBC_Event_Series())->schedule_rows_for_post(5) === array(), 'Dateless event invented a row');
    },
);
foreach ($tests as $name => $test) { $test(); echo "PASS: $name\n"; }
echo count($tests) . " tests passed\n";
