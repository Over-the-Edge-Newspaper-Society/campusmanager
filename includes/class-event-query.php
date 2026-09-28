<?php
/** Bounded pagination over occurrences, including events without a series. */
class UNBC_Event_Query {
    public static function page($params) {
        global $wpdb;
        $ot = $wpdb->prefix . 'event_occurrences';
        $start = $params['start_date'] ?? null; $end = $params['end_date'] ?? null;
        foreach (array($start, $end) as $date) {
            if ($date !== null && (!preg_match('/^\d{4}-\d{2}-\d{2}$/D', $date) || !checkdate((int) substr($date,5,2),(int) substr($date,8,2),(int) substr($date,0,4)))) throw new InvalidArgumentException('Invalid date bound.');
        }
        if ($start && $end && ($end < $start || (new DateTime($start))->diff(new DateTime($end))->days > 366)) throw new InvalidArgumentException('Date range must be ordered and at most 366 days.');
        $range = function($start_expr, $end_expr) use ($wpdb, $start, $end) {
            $sql = '';
            if ($start) $sql .= $wpdb->prepare(" AND COALESCE($end_expr, $start_expr) >= %s", $start . ' 00:00:00');
            if ($end) $sql .= $wpdb->prepare(" AND $start_expr < %s", (new DateTimeImmutable($end))->modify('+1 day')->format('Y-m-d') . ' 00:00:00');
            return $sql;
        };
        $where = "p.post_type = 'event' AND p.post_status = 'publish'";
        if (!empty($params['organization'])) $where .= $wpdb->prepare(" AND EXISTS (SELECT 1 FROM {$wpdb->postmeta} m WHERE m.post_id=p.ID AND m.meta_key='organization_id' AND m.meta_value=%s)", (string) absint($params['organization']));
        if (!empty($params['featured'])) $where .= " AND EXISTS (SELECT 1 FROM {$wpdb->postmeta} m WHERE m.post_id=p.ID AND m.meta_key='featured' AND m.meta_value='1')";
        if (!empty($params['category'])) {
            $slugs = array_filter(array_map('sanitize_title', explode(',', $params['category'])));
            if ($slugs) $where .= $wpdb->prepare(" AND EXISTS (SELECT 1 FROM {$wpdb->term_relationships} tr JOIN {$wpdb->term_taxonomy} tt ON tt.term_taxonomy_id=tr.term_taxonomy_id JOIN {$wpdb->terms} t ON t.term_id=tt.term_id WHERE tr.object_id=p.ID AND tt.taxonomy='event_category' AND t.slug IN (" . implode(',', array_fill(0,count($slugs),'%s')) . '))', $slugs);
        }
        if (!empty($params['search'])) {
            $like = '%' . $wpdb->esc_like($params['search']) . '%';
            $where .= $wpdb->prepare(' AND (p.post_title LIKE %s OR p.post_content LIKE %s)', $like, $like);
        }
        $legacy_start = "CONCAT(d.meta_value,' ',COALESCE(NULLIF(t.meta_value,''),'00:00:00'))";
        $legacy_end = "CONCAT(COALESCE(NULLIF(ed.meta_value,''),d.meta_value),' ',COALESCE(NULLIF(et.meta_value,''),'23:59:59'))";
        $sql = "SELECT p.ID post_id, o.id occurrence_id, o.start_datetime start_datetime, o.end_datetime end_datetime, o.sequence FROM $ot o JOIN {$wpdb->posts} p ON p.ID=o.post_id WHERE $where" . $range('o.start_datetime','o.end_datetime') . " UNION ALL SELECT p.ID, 0, $legacy_start, $legacy_end, 1 FROM {$wpdb->posts} p JOIN {$wpdb->postmeta} d ON d.post_id=p.ID AND d.meta_key='event_date' LEFT JOIN {$wpdb->postmeta} t ON t.post_id=p.ID AND t.meta_key='start_time' LEFT JOIN {$wpdb->postmeta} et ON et.post_id=p.ID AND et.meta_key='end_time' LEFT JOIN {$wpdb->postmeta} ed ON ed.post_id=p.ID AND ed.meta_key='end_date' WHERE $where AND NOT EXISTS (SELECT 1 FROM $ot o WHERE o.post_id=p.ID)" . $range($legacy_start,$legacy_end);
        $total = (int) $wpdb->get_var("SELECT COUNT(*) FROM ($sql) projection");
        $rows = $wpdb->get_results($wpdb->prepare("SELECT * FROM ($sql) projection ORDER BY start_datetime ASC, post_id ASC, occurrence_id ASC LIMIT %d OFFSET %d", $params['per_page'], ($params['page']-1)*$params['per_page']));
        if ($wpdb->last_error) throw new RuntimeException('Could not load events.');
        return array($rows, $total);
    }
}
