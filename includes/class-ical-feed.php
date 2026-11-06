<?php
/**
 * Subscribable iCalendar feed of published events:
 *   GET /wp-json/unbc-events/v1/calendar.ics[?category=slug,slug][&organization=ID][&event=ID]
 *
 * Calendar apps (Google, Apple, Outlook) poll this URL, so subscribers see
 * new, moved and cancelled events. The window is 30 days back and up to 335
 * days ahead; a single event (event=ID) returns all of its dates.
 */
class UNBC_ICal_Feed {
    const ROUTE = '/calendar.ics';
    const MAX_OCCURRENCES = 2000;

    public function __construct() {
        add_action('rest_api_init', array($this, 'register_route'));
        add_filter('rest_pre_serve_request', array($this, 'serve_raw'), 10, 4);
    }

    public function register_route() {
        register_rest_route('unbc-events/v1', self::ROUTE, array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'get_feed'),
            'permission_callback' => '__return_true',
            'args' => array(
                'category' => array('sanitize_callback' => 'sanitize_text_field'),
                'organization' => array('sanitize_callback' => 'absint'),
                'event' => array('sanitize_callback' => 'absint'),
            ),
        ));
    }

    /** Public URL of the feed for the given filters. */
    public static function url($filters = array()) {
        $filters = array_filter(array(
            'category' => $filters['category'] ?? '',
            'organization' => !empty($filters['organization']) ? absint($filters['organization']) : '',
            'event' => !empty($filters['event']) ? absint($filters['event']) : '',
        ));
        return add_query_arg($filters, rest_url('unbc-events/v1' . self::ROUTE));
    }

    public function get_feed($request) {
        $category = (string) $request->get_param('category');
        $organization = absint($request->get_param('organization'));
        $event = absint($request->get_param('event'));
        $key = 'unbc_events_ics_' . md5(get_option('unbc_events_cache_generation', '0') . "|$category|$organization|$event|" . current_time('Y-m-d'));
        $body = get_transient($key);
        if ($body === false) {
            try {
                $body = $this->build($category, $organization, $event);
            } catch (InvalidArgumentException $e) {
                return new WP_Error('invalid_calendar_filter', $e->getMessage(), array('status' => 400));
            }
            set_transient($key, $body, 15 * MINUTE_IN_SECONDS);
        }
        $response = new WP_REST_Response($body, 200);
        $response->header('Content-Type', 'text/calendar; charset=utf-8');
        $response->header('Content-Disposition', 'inline; filename="' . ($event ? 'event-' . $event : 'campus-events') . '.ics"');
        $response->header('Cache-Control', 'public, max-age=900');
        return $response;
    }

    /** Sends the calendar text as-is instead of JSON-encoding it. */
    public function serve_raw($served, $result, $request, $server) {
        if ($served || $request->get_route() !== '/unbc-events/v1' . self::ROUTE || $result->is_error()) return $served;
        foreach ($result->get_headers() as $name => $value) $server->send_header($name, $value);
        echo $result->get_data();
        return true;
    }

    private function build($category, $organization, $event) {
        global $wpdb;
        $rows = array();
        if ($event) {
            if (get_post_type($event) !== 'event' || get_post_status($event) !== 'publish') throw new InvalidArgumentException('Event not found.');
            $occurrences = $wpdb->get_results($wpdb->prepare("SELECT * FROM {$wpdb->prefix}event_occurrences WHERE post_id = %d ORDER BY start_datetime ASC LIMIT %d", $event, self::MAX_OCCURRENCES));
            foreach ($occurrences as $o) $rows[] = (object) array('post_id' => $event, 'occurrence_id' => $o->id, 'start_datetime' => $o->start_datetime, 'end_datetime' => $o->end_datetime, 'sequence' => $o->sequence);
            if (!$rows && get_post_meta($event, 'event_date', true)) {
                $date = get_post_meta($event, 'event_date', true);
                $rows[] = (object) array('post_id' => $event, 'occurrence_id' => 0, 'sequence' => 1,
                    'start_datetime' => $date . ' ' . (get_post_meta($event, 'start_time', true) ?: '00:00:00'),
                    'end_datetime' => (get_post_meta($event, 'end_date', true) ?: $date) . ' ' . (get_post_meta($event, 'end_time', true) ?: '23:59:59'));
            }
        } else {
            $today = new DateTimeImmutable(current_time('Y-m-d'), wp_timezone());
            $params = array(
                'start_date' => $today->modify('-30 days')->format('Y-m-d'),
                'end_date' => $today->modify('+335 days')->format('Y-m-d'),
                'category' => $category, 'organization' => $organization, 'per_page' => 500, 'page' => 1,
            );
            do {
                list($page, $total) = UNBC_Event_Query::page($params);
                $rows = array_merge($rows, $page);
                $params['page']++;
            } while ($page && count($rows) < min($total, self::MAX_OCCURRENCES));
            $rows = array_slice($rows, 0, self::MAX_OCCURRENCES);
        }

        $ids = array_values(array_unique(array_map(function ($row) { return (int) $row->post_id; }, $rows)));
        $series = array(); $occurrences = array();
        if ($ids) {
            _prime_post_caches($ids, true, true);
            $in = implode(',', $ids);
            foreach ($wpdb->get_results("SELECT * FROM {$wpdb->prefix}event_series WHERE post_id IN ($in)") as $s) $series[(int) $s->post_id] = $s;
            $occ_ids = array_filter(array_map(function ($row) { return (int) $row->occurrence_id; }, $rows));
            if ($occ_ids) foreach ($wpdb->get_results("SELECT * FROM {$wpdb->prefix}event_occurrences WHERE id IN (" . implode(',', $occ_ids) . ')') as $o) $occurrences[(int) $o->id] = $o;
        }

        $host = wp_parse_url(home_url(), PHP_URL_HOST) ?: 'campus-manager';
        $events = array();
        foreach ($rows as $row) {
            $post = get_post($row->post_id);
            if (!$post) continue;
            $occ = $occurrences[(int) $row->occurrence_id] ?? null;
            $sr = $series[(int) $row->post_id] ?? null;
            $zone = wp_timezone();
            if (!$occ && ($legacy_zone = get_post_meta($post->ID, 'timezone', true))) {
                try { $zone = new DateTimeZone($legacy_zone); } catch (Exception $e) { $zone = wp_timezone(); }
            }
            $start = !empty($occ->start_utc) ? new DateTimeImmutable($occ->start_utc, new DateTimeZone('UTC')) : new DateTimeImmutable($row->start_datetime, $zone);
            $end = !empty($occ->end_utc) ? new DateTimeImmutable($occ->end_utc, new DateTimeZone('UTC'))
                : ($row->end_datetime ? new DateTimeImmutable($row->end_datetime, $zone) : $start);
            $location = $occ->location_override ?? '';
            if ($location === '') $location = implode(', ', array_filter(array(get_post_meta($post->ID, 'location', true), get_post_meta($post->ID, 'building', true), get_post_meta($post->ID, 'room', true))));
            $status = $occ->event_status_override ?? ($sr->event_status ?? 'scheduled');
            $reason = $occ->status_reason_override ?? ($sr->status_reason ?? '');
            $description = trim(wp_strip_all_tags(strip_shortcodes($occ->description_override ?? $post->post_content)));
            if ($reason !== '' && $status !== 'scheduled') $description = trim(ucfirst($status) . ": $reason\n\n" . $description);
            $categories = wp_get_post_terms($post->ID, 'event_category', array('fields' => 'names'));
            $events[] = array(
                'uid' => $post->ID . '-' . (int) $row->occurrence_id . '-' . (int) $row->sequence . '@' . $host,
                'title' => $occ->title_override ?? $post->post_title,
                'description' => $description,
                'location' => $location,
                'url' => get_permalink($post),
                'start' => $start,
                'end' => $end,
                'all_day' => !empty($sr->is_all_day),
                'status' => $status,
                'categories' => is_wp_error($categories) ? array() : $categories,
                'modified' => new DateTimeImmutable($post->post_modified_gmt ?: 'now', new DateTimeZone('UTC')),
            );
        }
        $name = get_bloginfo('name') . ' events';
        if ($event && $events) $name = $events[0]['title'];
        return self::serialize($events, $name, wp_timezone());
    }

    // --- Pure serialization (unit-tested in tests/ical-feed.php) ---------------

    public static function escape($text) {
        $text = str_replace(array("\r\n", "\r"), "\n", (string) $text);
        return str_replace(array('\\', ';', ',', "\n"), array('\\\\', '\\;', '\\,', '\\n'), $text);
    }

    /** Folds a content line at 75 octets without splitting a UTF-8 character. */
    public static function fold($line) {
        $out = ''; $current = '';
        foreach (preg_split('//u', $line, -1, PREG_SPLIT_NO_EMPTY) as $char) {
            $limit = $out === '' ? 75 : 74;
            if (strlen($current) + strlen($char) > $limit) {
                $out .= ($out === '' ? '' : "\r\n ") . $current;
                $current = '';
            }
            $current .= $char;
        }
        return $out === '' ? $current : $out . "\r\n " . $current;
    }

    public static function serialize($events, $calendar_name, $zone) {
        $utc = new DateTimeZone('UTC');
        $stamp = gmdate('Ymd\THis\Z');
        $lines = array('BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Over the Edge Newspaper Society//Campus Manager//EN',
            'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'X-WR-CALNAME:' . self::escape($calendar_name),
            'X-WR-TIMEZONE:' . $zone->getName(), 'REFRESH-INTERVAL;VALUE=DURATION:PT6H', 'X-PUBLISHED-TTL:PT6H');
        foreach ($events as $e) {
            $lines[] = 'BEGIN:VEVENT';
            $lines[] = 'UID:' . self::escape($e['uid']);
            $lines[] = 'DTSTAMP:' . $stamp;
            if ($e['all_day']) {
                $start = $e['start']->setTimezone($zone);
                $end = $e['end']->setTimezone($zone);
                $lines[] = 'DTSTART;VALUE=DATE:' . $start->format('Ymd');
                $lines[] = 'DTEND;VALUE=DATE:' . $end->setTime(0, 0)->modify('+1 day')->format('Ymd');
            } else {
                $lines[] = 'DTSTART:' . $e['start']->setTimezone($utc)->format('Ymd\THis\Z');
                $end = $e['end'] > $e['start'] ? $e['end'] : $e['start']->modify('+1 hour');
                $lines[] = 'DTEND:' . $end->setTimezone($utc)->format('Ymd\THis\Z');
            }
            $lines[] = 'SUMMARY:' . self::escape($e['title']);
            if ($e['description'] !== '') $lines[] = 'DESCRIPTION:' . self::escape($e['description']);
            if ($e['location'] !== '') $lines[] = 'LOCATION:' . self::escape($e['location']);
            if (!empty($e['url'])) $lines[] = 'URL:' . $e['url'];
            if ($e['categories']) $lines[] = 'CATEGORIES:' . implode(',', array_map(array(__CLASS__, 'escape'), $e['categories']));
            $lines[] = 'STATUS:' . ($e['status'] === 'canceled' ? 'CANCELLED' : ($e['status'] === 'postponed' ? 'TENTATIVE' : 'CONFIRMED'));
            $lines[] = 'LAST-MODIFIED:' . $e['modified']->setTimezone($utc)->format('Ymd\THis\Z');
            $lines[] = 'END:VEVENT';
        }
        $lines[] = 'END:VCALENDAR';
        return implode("\r\n", array_map(array(__CLASS__, 'fold'), $lines)) . "\r\n";
    }
}
