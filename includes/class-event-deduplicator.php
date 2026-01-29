<?php
/**
 * Event Deduplicator
 * Finds and removes duplicate events based on title, date, and time
 */

class UNBC_Event_Deduplicator {

    public function __construct() {
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('wp_ajax_find_duplicate_events', array($this, 'ajax_find_duplicates'));
        add_action('wp_ajax_delete_duplicate_events', array($this, 'ajax_delete_duplicates'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
    }

    public function add_admin_menu() {
        add_submenu_page(
            'edit.php?post_type=event',
            __('Deduplicate Events'),
            __('Deduplicate Events'),
            'delete_others_posts',
            'event-deduplicator',
            array($this, 'admin_page')
        );
    }

    public function enqueue_admin_scripts($hook) {
        if ($hook !== 'event_page_event-deduplicator') {
            return;
        }

        wp_enqueue_style(
            'unbc-event-deduplicator',
            plugin_dir_url(__FILE__) . '../assets/css/event-deduplicator.css',
            array(),
            filemtime(plugin_dir_path(__FILE__) . '../assets/css/event-deduplicator.css')
        );

        wp_enqueue_script(
            'unbc-event-deduplicator',
            plugin_dir_url(__FILE__) . '../assets/js/event-deduplicator.js',
            array('jquery'),
            filemtime(plugin_dir_path(__FILE__) . '../assets/js/event-deduplicator.js'),
            true
        );

        wp_localize_script('unbc-event-deduplicator', 'unbcDeduplicator', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('unbc_deduplicator_nonce')
        ));
    }

    public function admin_page() {
        ?>
        <div class="wrap">
            <h1><?php _e('Event Deduplicator'); ?></h1>
            <p class="description"><?php _e('Find and remove duplicate events that have the same title, date, and time.'); ?></p>

            <div class="deduplicator-container">
                <div class="postbox">
                    <h2 class="hndle"><?php _e('Search Options'); ?></h2>
                    <div class="inside">
                        <table class="form-table">
                            <tr>
                                <th scope="row"><?php _e('Match Criteria'); ?></th>
                                <td>
                                    <label>
                                        <input type="checkbox" id="match-title" checked disabled />
                                        <?php _e('Title (always matched)'); ?>
                                    </label><br>
                                    <label>
                                        <input type="checkbox" id="match-date" checked />
                                        <?php _e('Event Date'); ?>
                                    </label><br>
                                    <label>
                                        <input type="checkbox" id="match-time" checked />
                                        <?php _e('Start Time'); ?>
                                    </label><br>
                                    <label>
                                        <input type="checkbox" id="match-category" />
                                        <?php _e('Category'); ?>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><?php _e('Keep Strategy'); ?></th>
                                <td>
                                    <label>
                                        <input type="radio" name="keep-strategy" value="oldest" checked />
                                        <?php _e('Keep oldest event (lowest ID)'); ?>
                                    </label><br>
                                    <label>
                                        <input type="radio" name="keep-strategy" value="newest" />
                                        <?php _e('Keep newest event (highest ID)'); ?>
                                    </label>
                                </td>
                            </tr>
                        </table>
                        <p class="submit">
                            <button type="button" class="button-primary" id="find-duplicates">
                                <?php _e('Find Duplicates'); ?>
                            </button>
                        </p>
                    </div>
                </div>

                <div id="duplicates-results" class="postbox" style="display: none;">
                    <h2 class="hndle"><?php _e('Duplicate Events Found'); ?></h2>
                    <div class="inside">
                        <div id="duplicates-summary"></div>
                        <div id="duplicates-list"></div>
                        <p class="submit" id="delete-actions" style="display: none;">
                            <button type="button" class="button" id="select-all-duplicates">
                                <?php _e('Select All for Deletion'); ?>
                            </button>
                            <button type="button" class="button" id="deselect-all-duplicates">
                                <?php _e('Deselect All'); ?>
                            </button>
                            <button type="button" class="button-primary" id="delete-selected" style="background: #d63638; border-color: #d63638;">
                                <?php _e('Delete Selected Duplicates'); ?>
                            </button>
                        </p>
                    </div>
                </div>

                <div id="deletion-results" class="postbox" style="display: none;">
                    <h2 class="hndle"><?php _e('Deletion Results'); ?></h2>
                    <div class="inside">
                        <div id="deletion-summary"></div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }

    public function ajax_find_duplicates() {
        check_ajax_referer('unbc_deduplicator_nonce', 'nonce');

        if (!current_user_can('delete_others_posts')) {
            wp_send_json_error(__('Insufficient permissions'));
        }

        $match_date = isset($_POST['match_date']) && $_POST['match_date'] === 'true';
        $match_time = isset($_POST['match_time']) && $_POST['match_time'] === 'true';
        $match_category = isset($_POST['match_category']) && $_POST['match_category'] === 'true';
        $keep_strategy = sanitize_text_field($_POST['keep_strategy'] ?? 'oldest');

        $duplicates = $this->find_duplicates($match_date, $match_time, $match_category, $keep_strategy);

        wp_send_json_success($duplicates);
    }

    public function ajax_delete_duplicates() {
        check_ajax_referer('unbc_deduplicator_nonce', 'nonce');

        if (!current_user_can('delete_others_posts')) {
            wp_send_json_error(__('Insufficient permissions'));
        }

        $post_ids = isset($_POST['post_ids']) ? array_map('absint', $_POST['post_ids']) : array();

        if (empty($post_ids)) {
            wp_send_json_error(__('No events selected for deletion'));
        }

        $deleted = 0;
        $errors = array();

        foreach ($post_ids as $post_id) {
            $post = get_post($post_id);

            if (!$post || $post->post_type !== 'event') {
                $errors[] = sprintf(__('Post %d is not a valid event'), $post_id);
                continue;
            }

            $result = wp_trash_post($post_id);

            if ($result) {
                $deleted++;
            } else {
                $errors[] = sprintf(__('Failed to delete event %d'), $post_id);
            }
        }

        wp_send_json_success(array(
            'deleted' => $deleted,
            'errors' => $errors
        ));
    }

    private function find_duplicates($match_date, $match_time, $match_category, $keep_strategy) {
        global $wpdb;

        // Get all published events with their metadata
        $events = $wpdb->get_results("
            SELECT
                p.ID,
                p.post_title,
                p.post_date,
                MAX(CASE WHEN pm.meta_key = 'event_date' THEN pm.meta_value END) as event_date,
                MAX(CASE WHEN pm.meta_key = 'start_time' THEN pm.meta_value END) as start_time,
                MAX(CASE WHEN pm.meta_key = 'end_time' THEN pm.meta_value END) as end_time
            FROM {$wpdb->posts} p
            LEFT JOIN {$wpdb->postmeta} pm ON p.ID = pm.post_id
            WHERE p.post_type = 'event'
            AND p.post_status = 'publish'
            GROUP BY p.ID
            ORDER BY p.ID ASC
        ");

        // Group events by matching criteria
        $groups = array();

        foreach ($events as $event) {
            $key_parts = array(
                sanitize_title($event->post_title)
            );

            if ($match_date && !empty($event->event_date)) {
                $key_parts[] = $event->event_date;
            }

            if ($match_time && !empty($event->start_time)) {
                $key_parts[] = $event->start_time;
            }

            $key = implode('|', $key_parts);

            if (!isset($groups[$key])) {
                $groups[$key] = array();
            }

            // Get category if needed
            $category_name = '';
            if ($match_category) {
                $terms = wp_get_post_terms($event->ID, 'event_category', array('fields' => 'names'));
                $category_name = !empty($terms) && !is_wp_error($terms) ? implode(', ', $terms) : '';
            }

            $groups[$key][] = array(
                'ID' => $event->ID,
                'title' => $event->post_title,
                'event_date' => $event->event_date,
                'start_time' => $event->start_time,
                'end_time' => $event->end_time,
                'post_date' => $event->post_date,
                'post_date_formatted' => date_i18n(get_option('date_format') . ' ' . get_option('time_format'), strtotime($event->post_date)),
                'category' => $category_name,
                'edit_url' => get_edit_post_link($event->ID, 'raw'),
                'view_url' => get_permalink($event->ID)
            );
        }

        // If matching by category, further split groups
        if ($match_category) {
            $new_groups = array();
            foreach ($groups as $key => $group_events) {
                foreach ($group_events as $event) {
                    $cat_key = $key . '|' . sanitize_title($event['category']);
                    if (!isset($new_groups[$cat_key])) {
                        $new_groups[$cat_key] = array();
                    }
                    $new_groups[$cat_key][] = $event;
                }
            }
            $groups = $new_groups;
        }

        // Filter to only groups with duplicates (more than 1 event)
        $duplicate_groups = array_filter($groups, function($group) {
            return count($group) > 1;
        });

        // Mark which events to keep vs delete
        $result = array(
            'groups' => array(),
            'total_duplicates' => 0,
            'total_to_delete' => 0
        );

        foreach ($duplicate_groups as $key => $group_events) {
            // Sort based on keep strategy
            usort($group_events, function($a, $b) use ($keep_strategy) {
                if ($keep_strategy === 'oldest') {
                    return $a['ID'] - $b['ID'];
                } else {
                    return $b['ID'] - $a['ID'];
                }
            });

            // First event is kept, rest are duplicates
            $keep_event = array_shift($group_events);
            $keep_event['action'] = 'keep';

            foreach ($group_events as &$event) {
                $event['action'] = 'delete';
                $result['total_to_delete']++;
            }

            $all_events = array_merge(array($keep_event), $group_events);

            $result['groups'][] = array(
                'key' => $key,
                'events' => $all_events,
                'count' => count($all_events)
            );

            $result['total_duplicates'] += count($all_events);
        }

        $result['group_count'] = count($result['groups']);

        return $result;
    }
}

// Initialize
new UNBC_Event_Deduplicator();
