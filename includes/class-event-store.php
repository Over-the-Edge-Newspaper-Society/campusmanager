<?php
/** Validated recurrence writes. Local range columns plus exact UTC instants. */
class UNBC_Event_Store {
    public static function normalize_occurrences($rows) {
        if (!is_array($rows) || count($rows) > 5000) throw new InvalidArgumentException('Occurrences must be an array of at most 5000 entries.');
        $normalized = array(); $seen = array(); $sequences = array();
        foreach ($rows as $index => $row) {
            if (!is_array($row)) throw new InvalidArgumentException('Each occurrence must be an object.');
            $start = self::datetime(!empty($row['start_utc']) ? $row['start_utc'] . 'Z' : ($row['start_datetime'] ?? $row['start'] ?? null));
            $raw_end = !empty($row['end_utc']) ? $row['end_utc'] . 'Z' : ($row['end_datetime'] ?? $row['end'] ?? null);
            $end = $raw_end ? self::datetime($raw_end) : null;
            if ($end && $end < $start) throw new InvalidArgumentException('Occurrence end must not precede its start.');
            $hash = $start->getTimestamp() . '|' . ($end ? $end->getTimestamp() : '');
            $sequence = isset($row['sequence']) ? filter_var($row['sequence'], FILTER_VALIDATE_INT) : $index + 1;
            if (!$sequence || $sequence < 1 || isset($seen[$hash]) || isset($sequences[$sequence])) throw new InvalidArgumentException('Duplicate occurrence or invalid sequence.');
            $seen[$hash] = true; $sequences[$sequence] = true;
            $item = array('sequence' => $sequence, 'start_datetime' => $start->format('Y-m-d H:i:s'),
                'end_datetime' => $end ? $end->format('Y-m-d H:i:s') : null,
                'start_utc' => $start->setTimezone(new DateTimeZone('UTC'))->format('Y-m-d H:i:s'),
                'end_utc' => $end ? $end->setTimezone(new DateTimeZone('UTC'))->format('Y-m-d H:i:s') : null,
                'duration_seconds' => $end ? $end->getTimestamp() - $start->getTimestamp() : null,
                'has_recurrence' => count($rows) > 1 ? 1 : 0, 'is_provisional' => empty($row['is_provisional']) ? 0 : 1);
            foreach (array('title_override', 'description_override', 'location_override', 'event_status_override', 'status_reason_override') as $key) {
                if (isset($row[$key])) $item[$key] = $key === 'description_override' ? wp_kses_post($row[$key]) : sanitize_text_field($row[$key]);
            }
            if (isset($item['event_status_override']) && !in_array($item['event_status_override'], array('scheduled','canceled','postponed'), true)) throw new InvalidArgumentException('Invalid occurrence status.');
            $normalized[] = $item;
        }
        return $normalized;
    }

    public static function datetime($value) {
        if (!is_string($value) || !preg_match('/^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/D', $value)) throw new InvalidArgumentException('A full ISO datetime is required.');
        $date = new DateTimeImmutable($value, wp_timezone());
        $errors = DateTimeImmutable::getLastErrors();
        if ($errors && ($errors['warning_count'] || $errors['error_count'])) throw new InvalidArgumentException('Invalid occurrence datetime.');
        return $date->setTimezone(wp_timezone());
    }

    public static function normalize_series($series) {
        if (!is_array($series)) throw new InvalidArgumentException('Series must be an object.');
        $data = array();
        foreach (array('occurrence_type' => array('single','multi_day','all_day','recurring','virtual'), 'recurrence_type' => array('none','daily','weekly','monthly','yearly','custom'), 'event_status' => array('scheduled','canceled','postponed')) as $key => $allowed) {
            if (isset($series[$key])) {
                if (!in_array($series[$key], $allowed, true)) throw new InvalidArgumentException('Invalid series ' . $key . '.');
                $data[$key] = $series[$key];
            }
        }
        foreach (array('recurrence_pattern','status_reason') as $key) if (isset($series[$key])) $data[$key] = sanitize_textarea_field($series[$key]);
        foreach (array('is_all_day','is_virtual') as $key) if (isset($series[$key])) $data[$key] = empty($series[$key]) ? 0 : 1;
        return $data;
    }

    public static function meta($post_id, $key, $value) {
        // update_post_meta returns false for unchanged values as well as failures.
        if (get_post_meta($post_id, $key, true) == $value && metadata_exists('post', $post_id, $key)) return;
        if (update_post_meta($post_id, $key, wp_slash($value)) === false) throw new RuntimeException('Event metadata could not be saved.');
    }

    public static function checked($result) {
        if ($result === false) throw new RuntimeException('Database write failed. No recurrence changes were saved.');
        return $result;
    }

    // Call inside a transaction after validating the entire request. null means
    // preserve occurrences; [] explicitly removes them.
    public static function write($post_id, $series, $rows) {
        global $wpdb;
        $st = $wpdb->prefix . 'event_series'; $ot = $wpdb->prefix . 'event_occurrences';
        $id = $wpdb->get_var($wpdb->prepare("SELECT id FROM $st WHERE post_id = %d FOR UPDATE", $post_id));
        $data = array_merge($series, array('post_id' => $post_id));
        if ($id) self::checked($wpdb->update($st, $data, array('id' => $id)));
        else { self::checked($wpdb->insert($st, $data)); $id = (int) $wpdb->insert_id; }
        if (!$id) throw new RuntimeException('Series could not be saved.');
        if ($rows !== null) {
            self::checked($wpdb->delete($ot, array('series_id' => $id)));
            foreach ($rows as $row) {
                $row['series_id'] = $id; $row['post_id'] = $post_id;
                $row['occurrence_hash'] = md5($id . ($row['start_utc'] ?? $row['start_datetime']) . ($row['end_utc'] ?? $row['end_datetime'] ?? ''));
                self::checked($wpdb->insert($ot, $row));
            }
        }
        return (int) $id;
    }

    public static function replace($post_id, $series, $occurrences) {
        global $wpdb;
        try {
            $series = self::normalize_series($series);
            $rows = $occurrences === null ? null : self::normalize_occurrences($occurrences);
            self::checked($wpdb->query('START TRANSACTION'));
            $id = self::write($post_id, $series, $rows);
            self::checked($wpdb->query('COMMIT'));
            UNBC_Events_REST_API::bump_cache_generation();
            return $id;
        } catch (Exception $e) {
            $wpdb->query('ROLLBACK');
            return new WP_Error('invalid_recurrence', $e->getMessage());
        }
    }
}
