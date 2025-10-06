<?php
/**
 * Event Series Manager
 * Handles recurring events, series, and multiple occurrences
 */

class UNBC_Event_Series {

    public function __construct() {
        // Register custom tables on activation
        register_activation_hook(dirname(dirname(__FILE__)) . '/unbc-events.php', array($this, 'create_tables'));

        // Add series meta boxes to event edit screen
        add_action('add_meta_boxes', array($this, 'add_series_meta_boxes'));
        add_action('save_post_event', array($this, 'save_series_meta'), 10, 2);

        // REST API fields for series data
        add_action('rest_api_init', array($this, 'register_series_rest_fields'));
    }

    /**
     * Create custom tables for event series and occurrences
     */
    public function create_tables() {
        global $wpdb;
        $charset_collate = $wpdb->get_charset_collate();

        // Event Series table (parent events)
        $series_table = $wpdb->prefix . 'event_series';
        $series_sql = "CREATE TABLE IF NOT EXISTS $series_table (
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
        $occurrences_sql = "CREATE TABLE IF NOT EXISTS $occurrences_table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            series_id bigint(20) unsigned NOT NULL,
            post_id bigint(20) unsigned NOT NULL,
            sequence int(11) NOT NULL DEFAULT 1,
            occurrence_hash varchar(64) NOT NULL,
            start_datetime datetime NOT NULL,
            end_datetime datetime,
            duration_seconds int(11),
            has_recurrence tinyint(1) NOT NULL DEFAULT 0,
            is_provisional tinyint(1) NOT NULL DEFAULT 0,
            title_override text,
            location_override text,
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
     * Add meta boxes for series management
     */
    public function add_series_meta_boxes() {
        add_meta_box(
            'event_series_details',
            'Event Series & Recurrence',
            array($this, 'series_meta_box_callback'),
            'event',
            'normal',
            'default'
        );
    }

    /**
     * Render series meta box
     */
    public function series_meta_box_callback($post) {
        wp_nonce_field('event_series_nonce', 'event_series_nonce');

        // Get series data
        $series_data = $this->get_series_data($post->ID);
        $occurrences = $this->get_occurrences($post->ID);

        $occurrence_type = $series_data['occurrence_type'] ?? 'single';
        $recurrence_type = $series_data['recurrence_type'] ?? 'none';
        $is_all_day = $series_data['is_all_day'] ?? false;
        $is_virtual = $series_data['is_virtual'] ?? false;
        $event_status = $series_data['event_status'] ?? 'scheduled';
        $status_reason = $series_data['status_reason'] ?? '';

        ?>
        <div class="event-series-container">
            <table class="form-table">
                <tr>
                    <th><label for="occurrence_type">Event Type</label></th>
                    <td>
                        <select id="occurrence_type" name="occurrence_type">
                            <option value="single" <?php selected($occurrence_type, 'single'); ?>>Single Day Event</option>
                            <option value="multi_day" <?php selected($occurrence_type, 'multi_day'); ?>>Multi-Day Event</option>
                            <option value="all_day" <?php selected($occurrence_type, 'all_day'); ?>>All-Day Event</option>
                            <option value="recurring" <?php selected($occurrence_type, 'recurring'); ?>>Recurring Event</option>
                            <option value="virtual" <?php selected($occurrence_type, 'virtual'); ?>>Virtual/Online Event</option>
                        </select>
                        <p class="description">Type of event occurrence</p>
                    </td>
                </tr>

                <tr id="recurrence_row" style="display: <?php echo $occurrence_type === 'recurring' ? 'table-row' : 'none'; ?>;">
                    <th><label for="recurrence_type">Recurrence Pattern</label></th>
                    <td>
                        <select id="recurrence_type" name="recurrence_type">
                            <option value="none" <?php selected($recurrence_type, 'none'); ?>>Does Not Repeat</option>
                            <option value="daily" <?php selected($recurrence_type, 'daily'); ?>>Daily</option>
                            <option value="weekly" <?php selected($recurrence_type, 'weekly'); ?>>Weekly</option>
                            <option value="monthly" <?php selected($recurrence_type, 'monthly'); ?>>Monthly</option>
                            <option value="yearly" <?php selected($recurrence_type, 'yearly'); ?>>Yearly</option>
                            <option value="custom" <?php selected($recurrence_type, 'custom'); ?>>Custom</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <th><label for="event_status">Event Status</label></th>
                    <td>
                        <select id="event_status" name="event_status">
                            <option value="scheduled" <?php selected($event_status, 'scheduled'); ?>>Scheduled</option>
                            <option value="canceled" <?php selected($event_status, 'canceled'); ?>>Canceled</option>
                            <option value="postponed" <?php selected($event_status, 'postponed'); ?>>Postponed</option>
                        </select>
                    </td>
                </tr>

                <tr id="status_reason_row" style="display: <?php echo in_array($event_status, ['canceled', 'postponed']) ? 'table-row' : 'none'; ?>;">
                    <th><label for="status_reason">Reason</label></th>
                    <td>
                        <textarea id="status_reason" name="status_reason" rows="2" class="large-text"><?php echo esc_textarea($status_reason); ?></textarea>
                        <p class="description">Reason for cancellation or postponement</p>
                    </td>
                </tr>

                <tr>
                    <th>Flags</th>
                    <td>
                        <label>
                            <input type="checkbox" name="is_all_day" value="1" <?php checked($is_all_day, 1); ?>>
                            All-Day Event
                        </label><br>
                        <label>
                            <input type="checkbox" name="is_virtual" value="1" <?php checked($is_virtual, 1); ?>>
                            Virtual/Online Event
                        </label>
                    </td>
                </tr>
            </table>

            <?php if (!empty($occurrences)): ?>
            <h4>Event Occurrences (<?php echo count($occurrences); ?>)</h4>
            <table class="widefat">
                <thead>
                    <tr>
                        <th>Sequence</th>
                        <th>Date &amp; Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($occurrences as $occurrence): ?>
                    <tr>
                        <td><?php echo esc_html($occurrence->sequence); ?></td>
                        <td>
                            <?php
                            $start = new DateTime($occurrence->start_datetime);
                            echo $start->format('M j, Y g:i A');
                            if ($occurrence->end_datetime) {
                                $end = new DateTime($occurrence->end_datetime);
                                echo ' - ' . $end->format('g:i A');
                            }
                            ?>
                        </td>
                        <td><?php echo esc_html($occurrence->event_status_override ?? $event_status); ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <?php endif; ?>
        </div>

        <script>
        jQuery(document).ready(function($) {
            // Show/hide recurrence options
            $('#occurrence_type').on('change', function() {
                if ($(this).val() === 'recurring') {
                    $('#recurrence_row').show();
                } else {
                    $('#recurrence_row').hide();
                }
            });

            // Show/hide status reason
            $('#event_status').on('change', function() {
                if ($(this).val() === 'canceled' || $(this).val() === 'postponed') {
                    $('#status_reason_row').show();
                } else {
                    $('#status_reason_row').hide();
                }
            });
        });
        </script>
        <?php
    }

    /**
     * Save series metadata
     */
    public function save_series_meta($post_id, $post) {
        // Verify nonce
        if (!isset($_POST['event_series_nonce']) || !wp_verify_nonce($_POST['event_series_nonce'], 'event_series_nonce')) {
            return;
        }

        // Check autosave
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }

        // Check permissions
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        global $wpdb;
        $series_table = $wpdb->prefix . 'event_series';

        // Prepare data
        $occurrence_type = sanitize_text_field($_POST['occurrence_type'] ?? 'single');
        $recurrence_type = sanitize_text_field($_POST['recurrence_type'] ?? 'none');
        $event_status = sanitize_text_field($_POST['event_status'] ?? 'scheduled');
        $status_reason = sanitize_textarea_field($_POST['status_reason'] ?? '');
        $is_all_day = isset($_POST['is_all_day']) ? 1 : 0;
        $is_virtual = isset($_POST['is_virtual']) ? 1 : 0;

        // Check if series exists
        $existing = $wpdb->get_row($wpdb->prepare(
            "SELECT id FROM $series_table WHERE post_id = %d",
            $post_id
        ));

        $data = array(
            'post_id' => $post_id,
            'occurrence_type' => $occurrence_type,
            'recurrence_type' => $recurrence_type,
            'event_status' => $event_status,
            'status_reason' => $status_reason,
            'is_all_day' => $is_all_day,
            'is_virtual' => $is_virtual,
        );

        if ($existing) {
            // Update
            $wpdb->update(
                $series_table,
                $data,
                array('post_id' => $post_id),
                array('%d', '%s', '%s', '%s', '%s', '%d', '%d'),
                array('%d')
            );
        } else {
            // Insert
            $wpdb->insert($series_table, $data, array('%d', '%s', '%s', '%s', '%s', '%d', '%d'));
        }
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
        global $wpdb;
        $series_table = $wpdb->prefix . 'event_series';
        $occurrences_table = $wpdb->prefix . 'event_occurrences';

        // Get or create series
        $series_id = $wpdb->get_var($wpdb->prepare(
            "SELECT id FROM $series_table WHERE post_id = %d",
            $post_id
        ));

        if (!$series_id) {
            return false;
        }

        // Clear existing occurrences
        $wpdb->delete($occurrences_table, array('series_id' => $series_id), array('%d'));

        // Create new occurrences
        foreach ($series_dates as $index => $date_info) {
            $start = new DateTime($date_info['start']);
            $end = isset($date_info['end']) ? new DateTime($date_info['end']) : null;

            $duration = $end ? ($end->getTimestamp() - $start->getTimestamp()) : null;
            $hash = md5($series_id . $start->format('Y-m-d H:i:s') . ($end ? $end->format('Y-m-d H:i:s') : ''));

            $wpdb->insert($occurrences_table, array(
                'series_id' => $series_id,
                'post_id' => $post_id,
                'sequence' => $index + 1,
                'occurrence_hash' => $hash,
                'start_datetime' => $start->format('Y-m-d H:i:s'),
                'end_datetime' => $end ? $end->format('Y-m-d H:i:s') : null,
                'duration_seconds' => $duration,
                'has_recurrence' => count($series_dates) > 1 ? 1 : 0,
                'is_provisional' => 0,
            ), array('%d', '%d', '%d', '%s', '%s', '%s', '%d', '%d', '%d'));
        }

        return true;
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
