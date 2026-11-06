<?php
// Standalone regression test: php tests/ical-feed.php
define('ABSPATH', sys_get_temp_dir() . '/');
function add_action(...$args) {}
function add_filter(...$args) {}
require dirname(__DIR__) . '/includes/class-ical-feed.php';
function check($condition, $message) { if (!$condition) throw new RuntimeException($message); echo "PASS: $message\n"; }

$zone = new DateTimeZone('America/Vancouver');
$event = function ($overrides = array()) use ($zone) {
    return array_merge(array(
        'uid' => '12-3-1@news.example', 'title' => 'Games night', 'description' => '', 'location' => '', 'url' => 'https://news.example/event/games',
        'start' => new DateTimeImmutable('2026-12-03 18:00', $zone), 'end' => new DateTimeImmutable('2026-12-03 20:00', $zone),
        'all_day' => false, 'status' => 'scheduled', 'categories' => array(), 'modified' => new DateTimeImmutable('2026-11-01 00:00', new DateTimeZone('UTC')),
    ), $overrides);
};

$ics = UNBC_ICal_Feed::serialize(array($event(array(
    'title' => "Title, with; specials\\ and\nnewline", 'description' => "line one\r\nSTATUS:INJECTED", 'location' => 'Room 7-212, Winter Garden',
    'categories' => array('Music', 'Arts, Culture'), 'status' => 'canceled',
))), 'Campus, events', $zone);
check(substr($ics, 0, 15) === "BEGIN:VCALENDAR" && substr($ics, -15) === "END:VCALENDAR\r\n", 'calendar is wrapped and CRLF-terminated');
check(strpos($ics, "SUMMARY:Title\\, with\; specials\\\\ and\\nnewline\r\n") !== false, 'summary text is escaped');
check(strpos($ics, "DESCRIPTION:line one\\nSTATUS:INJECTED\r\n") !== false && substr_count($ics, "\r\nSTATUS:") === 1, 'newlines cannot inject properties');
check(strpos($ics, "STATUS:CANCELLED\r\n") !== false, 'cancelled events are marked CANCELLED');
check(strpos($ics, "CATEGORIES:Music,Arts\\, Culture\r\n") !== false, 'categories are escaped individually');
$expected = (new DateTimeImmutable('2026-12-03 18:00', $zone))->setTimezone(new DateTimeZone('UTC'))->format('Ymd\THis\Z');
check(strpos($ics, "DTSTART:$expected\r\n") !== false, 'timed events are written in UTC');
check(strpos($ics, "X-WR-CALNAME:Campus\\, events\r\n") !== false, 'calendar name is escaped');

$all_day = UNBC_ICal_Feed::serialize(array($event(array('all_day' => true,
    'start' => new DateTimeImmutable('2026-12-03 00:00', $zone), 'end' => new DateTimeImmutable('2026-12-04 23:59', $zone)))), 'x', $zone);
check(strpos($all_day, "DTSTART;VALUE=DATE:20261203\r\n") !== false && strpos($all_day, "DTEND;VALUE=DATE:20261205\r\n") !== false, 'all-day events use an exclusive date-only end');

$zero = UNBC_ICal_Feed::serialize(array($event(array('end' => new DateTimeImmutable('2026-12-03 18:00', $zone)))), 'x', $zone);
check(preg_match('/DTSTART:(\d{8}T\d{6}Z)\r\nDTEND:(\d{8}T\d{6}Z)/', $zero, $m) && $m[2] > $m[1], 'zero-length events get a positive duration');

$long = UNBC_ICal_Feed::serialize(array($event(array('title' => str_repeat('日本語', 60)))), 'x', $zone);
foreach (explode("\r\n", $long) as $line) check_line($line);
function check_line($line) { if (strlen($line) > 75 || !mb_check_encoding($line, 'UTF-8')) throw new RuntimeException('Bad folded line: ' . $line); }
echo "PASS: long Unicode lines fold at 75 octets without splitting characters\n";
check(str_replace("\r\n ", '', UNBC_ICal_Feed::fold('SUMMARY:' . str_repeat('ab', 100))) === 'SUMMARY:' . str_repeat('ab', 100), 'unfolding restores the original line');
echo "All iCalendar tests passed\n";
