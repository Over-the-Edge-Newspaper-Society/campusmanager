<?php
/**
 * Event Series Manager
 * Handles recurring events, series, and multiple occurrences
 */

class UNBC_Event_Series {

    public function __construct() {
        // Add series meta boxes to event edit screen
        add_action('add_meta_boxes', array($this, 'add_series_meta_boxes'));
        add_action('admin_notices', function() {
            $key = 'unbc_series_error_' . get_current_user_id();
            $error = get_transient($key);
            if ($error) { delete_transient($key); echo '<div class="notice notice-error"><p>' . esc_html($error) . '</p></div>'; }
        });
        add_action('save_post_event', array($this, 'save_series_meta'), 10, 2);
        add_action('admin_enqueue_scripts', array($this, 'enqueue_schedule_editor'));

        // REST API fields for series data
        add_action('rest_api_init', array($this, 'register_series_rest_fields'));
    }

    /**
     * Create custom tables for event series and occurrences
     */
    public static function create_tables() {
        global $wpdb;
        $charset_collate = $wpdb->get_charset_collate();

        // Event Series table (parent events)
        $series_table = $wpdb->prefix . 'event_series';
        $series_sql = "CREATE TABLE $series_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            post_id bigint(20) unsigned NOT NULL,
            occurrence_type varchar(20) NOT NULL DEFAULT 'single',
            recurrence_type varchar(20) NOT NULL DEFAULT 'none',
            recurrence_pattern text,
            is_all_day tinyint(1) NOT NULL DEFAULT 0,
            is_virtual tinyint(1) NOT NULL DEFAULT 0,
            event_status varchar(20) NOT NULL DEFAULT 'scheduled',
            status_reason text,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY post_id (post_id),
            KEY occurrence_type (occurrence_type),
            KEY recurrence_type (recurrence_type),
            KEY event_status (event_status)
        ) $charset_collate;";

        // Event Occurrences table (individual instances)
        $occurrences_table = $wpdb->prefix . 'event_occurrences';
        $occurrences_sql = "CREATE TABLE $occurrences_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            series_id bigint(20) unsigned NOT NULL,
            post_id bigint(20) unsigned NOT NULL,
            sequence int(11) NOT NULL DEFAULT 1,
            occurrence_hash varchar(64) NOT NULL,
            start_datetime datetime NOT NULL,
            end_datetime datetime,
            start_utc datetime,
            end_utc datetime,
            duration_seconds int(11),
            has_recurrence tinyint(1) NOT NULL DEFAULT 0,
            is_provisional tinyint(1) NOT NULL DEFAULT 0,
            title_override text,
            description_override longtext,
            location_override text,
            status_reason_override text,
            event_status_override varchar(20),
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            UNIQUE KEY occurrence_hash (occurrence_hash),
            KEY series_id (series_id),
            KEY post_id (post_id),
            KEY start_datetime (start_datetime),
            KEY sequence (sequence)
        ) $charset_collate;";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($series_sql);
        dbDelta($occurrences_sql);
    }

    /**
     * Add the Schedule meta box (the single place event dates are edited).
     */
    public function add_series_meta_boxes() {
        add_meta_box(
            'event_series_details',
            'Schedule',
            array($this, 'series_meta_box_callback'),
            'event',
            'normal',
            'high'
        );
    }

    public function enqueue_schedule_editor($hook) {
        if (!in_array($hook, array('post.php', 'post-new.php'), true)) return;
        $screen = function_exists('get_current_screen') ? get_current_screen() : null;
        if (!$screen || $screen->post_type !== 'event') return;
        $file = plugin_dir_path(dirname(__FILE__)) . 'assets/js/event-schedule.js';
        wp_enqueue_script('unbc-event-schedule', plugin_dir_url(dirname(__FILE__)) . 'assets/js/event-schedule.js',
            array('jquery'), file_exists($file) ? filemtime($file) : UNBC_EVENTS_PLUGIN_VERSION, true);
    }

    /**
     * Rows shown in the editor: stored occurrences, or the legacy single date
     * for events that were created before occurrences existed.
     */
    public function schedule_rows_for_post($post_id) {
        $rows = array();
        foreach ($this->get_occurrences($post_id) as $occurrence) {
            $start = new DateTime($occurrence->start_datetime);
            $end = $occurrence->end_datetime ? new DateTime($occurrence->end_datetime) : clone $start;
            $overrides = array();
            foreach (array('title_override', 'description_override', 'location_override', 'status_reason_override') as $key) {
                if (isset($occurrence->$key) && $occurrence->$key !== '') $overrides[$key] = $occurrence->$key;
            }
            $rows[] = array(
                'start_date' => $start->format('Y-m-d'), 'start_time' => $start->format('H:i'),
                'end_date' => $end->format('Y-m-d'), 'end_time' => $end->format('H:i'),
                'status' => (string) ($occurrence->event_status_override ?? ''),
                'overrides' => $overrides,
            );
        }
        if ($rows) return $rows;

        $date = (string) get_post_meta($post_id, 'event_date', true);
        if ($date === '') return array();
        $start_time = (string) get_post_meta($post_id, 'start_time', true);
        $end_time = (string) get_post_meta($post_id, 'end_time', true);
        $end_date = (string) get_post_meta($post_id, 'end_date', true);
        if ($end_date === '') {
            // Legacy overnight events stored an end time earlier than the start.
            $end_date = ($end_time !== '' && $start_time !== '' && $end_time < $start_time)
                ? (new DateTime($date))->modify('+1 day')->format('Y-m-d') : $date;
        }
        return array(array('start_date' => $date, 'start_time' => substr($start_time, 0, 5),
            'end_date' => $end_date, 'end_time' => substr($end_time, 0, 5), 'status' => '', 'overrides' => array()));
    }

    /**
     * Converts submitted editor rows into occurrences for UNBC_Event_Store.
     * Blank rows are ignored. Throws InvalidArgumentException with a message
     * that names the offending row.
     */
    public static function occurrences_from_form($rows, $all_day) {
        if (!is_array($rows)) return array();
        $occurrences = array();
        $number = 0;
        foreach ($rows as $row) {
            if (!is_array($row)) continue;
            $number++;
            $start_date = trim((string) ($row['start_date'] ?? ''));
            $start_time = trim((string) ($row['start_time'] ?? ''));
            $end_date = trim((string) ($row['end_date'] ?? ''));
            $end_time = trim((string) ($row['end_time'] ?? ''));
            if ($start_date === '' && $start_time === '' && $end_date === '' && $end_time === '') continue;
            if (!preg_match('/^\d{4}-\d{2}-\d{2}$/D', $start_date)) throw new InvalidArgumentException("Date $number needs a start date.");
            foreach (array($start_time, $end_time) as $time) {
                if ($time !== '' && !preg_match('/^\d{2}:\d{2}$/D', $time)) throw new InvalidArgumentException("Date $number has an invalid time.");
            }
            if ($end_date !== '' && !preg_match('/^\d{4}-\d{2}-\d{2}$/D', $end_date)) throw new InvalidArgumentException("Date $number has an invalid end date.");
            if ($end_date === '') $end_date = $start_date;
            if ($all_day) {
                $start_time = '00:00'; $end_time = '23:59';
            } else {
                if ($start_time === '') $start_time = '00:00';
                if ($end_time === '') $end_time = $end_date === $start_date ? $start_time : '23:59';
                // An end time earlier than the start on the same day is an overnight event.
                if ($end_date === $start_date && $end_time < $start_time) {
                    $end_date = (new DateTime($start_date))->modify('+1 day')->format('Y-m-d');
                }
            }
            if ("$end_date $end_time" < "$start_date $start_time") throw new InvalidArgumentException("Date $number ends before it starts.");
            $occurrence = array('start_datetime' => "{$start_date}T{$start_time}", 'end_datetime' => "{$end_date}T{$end_time}");
            $status = (string) ($row['status'] ?? '');
            if ($status !== '') {
                if (!in_array($status, array('scheduled', 'canceled', 'postponed'), true)) throw new InvalidArgumentException("Date $number has an invalid status.");
                $occurrence['event_status_override'] = $status;
            }
            $overrides = $row['overrides'] ?? array();
            if (is_string($overrides)) $overrides = json_decode(wp_unslash($overrides), true);
            if (is_array($overrides)) {
                foreach (array('title_override', 'description_override', 'location_override', 'status_reason_override') as $key) {
                    if (isset($overrides[$key]) && is_string($overrides[$key])) $occurrence[$key] = $overrides[$key];
                }
            }
            $occurrences[] = $occurrence;
        }
        usort($occurrences, function ($a, $b) { return strcmp($a['start_datetime'], $b['start_datetime']); });
        foreach ($occurrences as $index => &$occurrence) $occurrence['sequence'] = $index + 1;
        unset($occurrence);
        return $occurrences;
    }

    /** Series shape derived from the dates instead of asked for separately. */
    public static function occurrence_type_for($occurrences, $all_day) {
        if (count($occurrences) > 1) return 'recurring';
        if (count($occurrences) === 1 && substr($occurrences[0]['start_datetime'], 0, 10) !== substr($occurrences[0]['end_datetime'], 0, 10)) return $all_day ? 'all_day' : 'multi_day';
        return $all_day ? 'all_day' : 'single';
    }

    /**
     * Render the Schedule meta box.
     */
    public function series_meta_box_callback($post) {
        wp_nonce_field('event_series_nonce', 'event_series_nonce');

        $series_data = $this->get_series_data($post->ID);
        $rows = $this->schedule_rows_for_post($post->ID);
        $recurrence_type = $series_data['recurrence_type'] ?? 'none';
        $is_all_day = !empty($series_data['is_all_day']);
        $event_status = $series_data['event_status'] ?? 'scheduled';
        $status_reason = $series_data['status_reason'] ?? '';
        $statuses = array('' => 'Same as event', 'scheduled' => 'Scheduled', 'canceled' => 'Cancelled', 'postponed' => 'Postponed');
        $render_row = function ($index, $row) use ($statuses) {
            $name = 'unbc_schedule[' . $index . ']';
            ?>
            <tr class="unbc-schedule-row">
                <td><input type="date" name="<?php echo esc_attr($name); ?>[start_date]" value="<?php echo esc_attr($row['start_date'] ?? ''); ?>" aria-label="Start date" /></td>
                <td class="unbc-schedule-time"><input type="time" name="<?php echo esc_attr($name); ?>[start_time]" value="<?php echo esc_attr($row['start_time'] ?? ''); ?>" aria-label="Start time" /></td>
                <td><input type="date" name="<?php echo esc_attr($name); ?>[end_date]" value="<?php echo esc_attr($row['end_date'] ?? ''); ?>" aria-label="End date" /></td>
                <td class="unbc-schedule-time"><input type="time" name="<?php echo esc_attr($name); ?>[end_time]" value="<?php echo esc_attr($row['end_time'] ?? ''); ?>" aria-label="End time" /></td>
                <td><select name="<?php echo esc_attr($name); ?>[status]" aria-label="Status for this date">
                    <?php foreach ($statuses as $value => $label): ?>
                        <option value="<?php echo esc_attr($value); ?>" <?php selected((string) ($row['status'] ?? ''), (string) $value); ?>><?php echo esc_html($label); ?></option>
                    <?php endforeach; ?>
                </select>
                <input type="hidden" name="<?php echo esc_attr($name); ?>[overrides]" value="<?php echo esc_attr(wp_json_encode((object) ($row['overrides'] ?? array()))); ?>" /></td>
                <td><button type="button" class="button-link unbc-schedule-remove" aria-label="Remove this date">Remove</button></td>
            </tr>
            <?php
        };
        ?>
        <div class="event-series-container" id="unbc-schedule-editor">
            <input type="hidden" name="unbc_schedule_submitted" value="1" />
            <input type="hidden" name="recurrence_type" id="unbc_recurrence_type" value="<?php echo esc_attr($recurrence_type); ?>" />
            <p>
                <label><input type="checkbox" name="is_all_day" id="unbc_is_all_day" value="1" <?php checked($is_all_day); ?>> All-day event (times are ignored)</label>
            </p>
            <?php if (!$rows): ?>
                <div class="notice notice-warning inline"><p>This event has no dates yet, so it will not appear on the calendar.</p></div>
            <?php endif; ?>
            <table class="widefat striped unbc-schedule-table<?php echo $is_all_day ? ' unbc-all-day' : ''; ?>">
                <thead><tr>
                    <th>Starts</th><th class="unbc-schedule-time">Start time</th><th>Ends</th><th class="unbc-schedule-time">End time</th><th>Status</th><th><span class="screen-reader-text">Actions</span></th>
                </tr></thead>
                <tbody id="unbc-schedule-rows">
                    <?php foreach ($rows as $index => $row) $render_row($index, $row); ?>
                </tbody>
            </table>
            <script type="text/html" id="tmpl-unbc-schedule-row"><?php $render_row('__INDEX__', array()); ?></script>
            <p>
                <button type="button" class="button" id="unbc-schedule-add">Add a date</button>
            </p>
            <fieldset class="unbc-schedule-repeat" style="border:1px solid #dcdcde;padding:8px 12px;margin:12px 0;">
                <legend>Repeat the first date</legend>
                <label>Every <select id="unbc-repeat-frequency">
                    <option value="weekly">week</option>
                    <option value="biweekly">2 weeks</option>
                    <option value="daily">day</option>
                    <option value="monthly">month (same day)</option>
                </select></label>
                <label>until <input type="date" id="unbc-repeat-until" /></label>
                <button type="button" class="button" id="unbc-repeat-apply">Add repeats</button>
                <p class="description">Adds the missing dates up to the end date. Existing dates are kept; edit or remove any of them afterwards.</p>
                <p class="unbc-repeat-message" role="status" aria-live="polite"></p>
            </fieldset>
            <table class="form-table">
                <tr>
                    <th><label for="event_status">Event status</label></th>
                    <td>
                        <select id="event_status" name="event_status">
                            <option value="scheduled" <?php selected($event_status, 'scheduled'); ?>>Scheduled</option>
                            <option value="canceled" <?php selected($event_status, 'canceled'); ?>>Cancelled</option>
                            <option value="postponed" <?php selected($event_status, 'postponed'); ?>>Postponed</option>
                        </select>
                        <p class="description">Applies to every date unless a date has its own status. Cancelled and postponed events stay on the calendar with a badge.</p>
                    </td>
                </tr>
                <tr id="status_reason_row" style="display: <?php echo in_array($event_status, array('canceled', 'postponed'), true) ? 'table-row' : 'none'; ?>;">
                    <th><label for="status_reason">Reason</label></th>
                    <td>
                        <textarea id="status_reason" name="status_reason" rows="2" class="large-text"><?php echo esc_textarea($status_reason); ?></textarea>
                        <p class="description">Shown to visitors with the cancellation or postponement.</p>
                    </td>
                </tr>
            </table>
            <style>.unbc-all-day .unbc-schedule-time{display:none}.unbc-schedule-table input[type=date],.unbc-schedule-table input[type=time]{max-width:100%}</style>
        </div>
        <?php
    }

    /**
     * Save the Schedule box: series flags plus the complete list of dates,
     * written in one validated transaction. Legacy date metadata mirrors the
     * first date so list columns, sorting and fallbacks stay correct.
     */
    public function save_series_meta($post_id, $post) {
        if (!isset($_POST['event_series_nonce']) || !wp_verify_nonce($_POST['event_series_nonce'], 'event_series_nonce')) {
            return;
        }
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        if (wp_is_post_revision($post_id) || !current_user_can('edit_post', $post_id)) {
            return;
        }

        $is_all_day = isset($_POST['is_all_day']) ? 1 : 0;
        $error_key = 'unbc_series_error_' . get_current_user_id();
        $occurrences = null;
        if (!empty($_POST['unbc_schedule_submitted'])) {
            try {
                $occurrences = self::occurrences_from_form(wp_unslash($_POST['unbc_schedule'] ?? array()), $is_all_day);
            } catch (InvalidArgumentException $e) {
                set_transient($error_key, 'The schedule was not saved: ' . $e->getMessage(), 60);
                return;
            }
        }

        $recurrence_type = sanitize_text_field($_POST['recurrence_type'] ?? 'none');
        if ($occurrences !== null) {
            if (count($occurrences) <= 1) $recurrence_type = 'none';
            elseif (!in_array($recurrence_type, array('daily', 'weekly', 'monthly', 'yearly', 'custom'), true)) $recurrence_type = 'custom';
        }
        $data = array(
            'occurrence_type' => $occurrences !== null ? self::occurrence_type_for($occurrences, $is_all_day) : sanitize_text_field($_POST['occurrence_type'] ?? 'single'),
            'recurrence_type' => $recurrence_type,
            'event_status' => sanitize_text_field($_POST['event_status'] ?? 'scheduled'),
            'status_reason' => sanitize_textarea_field(wp_unslash($_POST['status_reason'] ?? '')),
            'is_all_day' => $is_all_day,
            'is_virtual' => isset($_POST['is_virtual']) ? 1 : 0,
        );

        $saved = UNBC_Event_Store::replace($post_id, $data, $occurrences);
        if (is_wp_error($saved)) {
            set_transient($error_key, 'The schedule was not saved: ' . $saved->get_error_message(), 60);
            return;
        }
        if ($occurrences !== null) self::sync_legacy_date_meta($post_id, $occurrences);
    }

    /** Mirrors the first date into the legacy single-date metadata. */
    public static function sync_legacy_date_meta($post_id, $occurrences) {
        if (!$occurrences) {
            foreach (array('event_date', 'start_time', 'end_time', 'end_date') as $key) delete_post_meta($post_id, $key);
            return;
        }
        $first = $occurrences[0];
        update_post_meta($post_id, 'event_date', substr($first['start_datetime'], 0, 10));
        update_post_meta($post_id, 'start_time', substr($first['start_datetime'], 11, 5));
        update_post_meta($post_id, 'end_time', substr($first['end_datetime'], 11, 5));
        update_post_meta($post_id, 'end_date', substr($first['end_datetime'], 0, 10));
    }

    /**
     * Get series data for a post
     */
    public function get_series_data($post_id) {
        global $wpdb;
        $series_table = $wpdb->prefix . 'event_series';

        $series = $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM $series_table WHERE post_id = %d",
            $post_id
        ), ARRAY_A);

        return $series ?: array();
    }

    /**
     * Get occurrences for a series/post
     */
    public function get_occurrences($post_id) {
        global $wpdb;
        $occurrences_table = $wpdb->prefix . 'event_occurrences';

        // First get series_id
        $series_table = $wpdb->prefix . 'event_series';
        $series_id = $wpdb->get_var($wpdb->prepare(
            "SELECT id FROM $series_table WHERE post_id = %d",
            $post_id
        ));

        if (!$series_id) {
            return array();
        }

        return $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM $occurrences_table WHERE series_id = %d ORDER BY sequence ASC",
            $series_id
        ));
    }

    /**
     * Create occurrences from series dates
     */
    public function create_occurrences($post_id, $series_dates) {
        return UNBC_Event_Store::replace($post_id, array(), $series_dates);
    }

    /**
     * Register REST API fields for series data
     */
    public function register_series_rest_fields() {
        register_rest_field('event', 'series_data', array(
            'get_callback' => array($this, 'get_series_rest_field'),
            'update_callback' => null,
            'schema' => null,
        ));

        register_rest_field('event', 'occurrences', array(
            'get_callback' => array($this, 'get_occurrences_rest_field'),
            'update_callback' => null,
            'schema' => null,
        ));
    }

    public function get_series_rest_field($object) {
        return $this->get_series_data($object['id']);
    }

    public function get_occurrences_rest_field($object) {
        return $this->get_occurrences($object['id']);
    }
}
