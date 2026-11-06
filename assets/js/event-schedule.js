/**
 * Campus Manager: Schedule box on the event edit screen.
 * One editable list of dates; "Add repeats" fills in a weekly/daily/monthly
 * pattern from the first date. The server validates everything on save.
 */
(function (root, factory) {
    var api = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = api;
    } else {
        root.unbcEventSchedule = api;
        if (root.jQuery) root.jQuery(function () { api.init(root.jQuery); });
    }
}(typeof self !== 'undefined' ? self : this, function () {
    var MAX_GENERATED = 366;

    function parseDate(value) {
        var match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || '');
        if (!match) return null;
        var date = new Date(Date.UTC(+match[1], +match[2] - 1, +match[3]));
        // Reject impossible dates such as 2026-02-31.
        return date.getUTCMonth() === +match[2] - 1 ? date : null;
    }

    function formatDate(date) {
        return date.toISOString().slice(0, 10);
    }

    function addDays(date, days) {
        return new Date(date.getTime() + days * 86400000);
    }

    /**
     * Returns new rows repeating `first` until `until` (inclusive).
     * Dates already in `existingStartDates` are skipped. Monthly repeats keep
     * the day of the month and skip months that do not have it.
     */
    function generateRepeats(first, frequency, until, existingStartDates) {
        var start = parseDate(first && first.start_date);
        var end = parseDate(until);
        if (!start) return { rows: [], error: 'Enter a start date for the first date before adding repeats.' };
        if (!end) return { rows: [], error: 'Choose the date the repeats should end on.' };
        if (end <= start) return { rows: [], error: 'The repeat end date must be after the first date.' };

        var firstEnd = parseDate(first.end_date) || start;
        var spanDays = Math.max(0, Math.round((firstEnd - start) / 86400000));
        var existing = {};
        (existingStartDates || []).forEach(function (value) { existing[value] = true; });

        var rows = [];
        var step = 1;
        var limited = false;
        for (;;) {
            var next;
            if (frequency === 'monthly') {
                var month = start.getUTCMonth() + step;
                next = new Date(Date.UTC(start.getUTCFullYear(), month, start.getUTCDate()));
                if (next.getUTCDate() !== start.getUTCDate()) { step++; continue; }
            } else {
                var days = frequency === 'daily' ? 1 : frequency === 'biweekly' ? 14 : 7;
                next = addDays(start, days * step);
            }
            if (next > end) break;
            if (rows.length >= MAX_GENERATED) { limited = true; break; }
            var startDate = formatDate(next);
            if (!existing[startDate]) {
                rows.push({
                    start_date: startDate,
                    start_time: first.start_time || '',
                    end_date: formatDate(addDays(next, spanDays)),
                    end_time: first.end_time || '',
                    status: ''
                });
            }
            step++;
        }
        return { rows: rows, error: limited ? 'Only the first ' + MAX_GENERATED + ' repeats were added.' : '' };
    }

    function init($) {
        var $editor = $('#unbc-schedule-editor');
        if (!$editor.length) return;
        var $rows = $('#unbc-schedule-rows');
        var template = $('#tmpl-unbc-schedule-row').html() || '';
        var nextIndex = $rows.children('tr').length;
        var $message = $editor.find('.unbc-repeat-message');

        function addRow(values) {
            var $row = $(template.replace(/__INDEX__/g, String(nextIndex++)));
            Object.keys(values || {}).forEach(function (key) {
                $row.find('[name$="[' + key + ']"]').val(values[key]);
            });
            $rows.append($row);
            return $row;
        }

        function rowValues($row) {
            var values = {};
            ['start_date', 'start_time', 'end_date', 'end_time'].forEach(function (key) {
                values[key] = $row.find('[name$="[' + key + ']"]').val();
            });
            return values;
        }

        $('#unbc-schedule-add').on('click', function () {
            var $last = $rows.children('tr').last();
            var $row = addRow($last.length ? rowValues($last) : {});
            $row.find('input[type=date]').first().trigger('focus');
        });

        $rows.on('click', '.unbc-schedule-remove', function () {
            var $row = $(this).closest('tr');
            var $focus = $row.next('tr').length ? $row.next('tr') : $row.prev('tr');
            $row.remove();
            ($focus.length ? $focus.find('input').first() : $('#unbc-schedule-add')).trigger('focus');
        });

        // Keep the end date from falling before a newly chosen start date.
        $rows.on('change', 'input[name$="[start_date]"]', function () {
            var $end = $(this).closest('tr').find('input[name$="[end_date]"]');
            if (!$end.val() || $end.val() < $(this).val()) $end.val($(this).val());
        });

        $('#unbc_is_all_day').on('change', function () {
            $editor.find('.unbc-schedule-table').toggleClass('unbc-all-day', this.checked);
        });

        $('#event_status').on('change', function () {
            $('#status_reason_row').toggle($(this).val() === 'canceled' || $(this).val() === 'postponed');
        });

        $('#unbc-repeat-apply').on('click', function () {
            var $first = $rows.children('tr').first();
            var existing = $rows.find('input[name$="[start_date]"]').map(function () { return this.value; }).get();
            var frequency = $('#unbc-repeat-frequency').val();
            var result = generateRepeats($first.length ? rowValues($first) : null, frequency, $('#unbc-repeat-until').val(), existing);
            result.rows.forEach(addRow);
            if (result.rows.length) {
                $('#unbc_recurrence_type').val(frequency === 'biweekly' ? 'weekly' : frequency);
            }
            var added = result.rows.length ? 'Added ' + result.rows.length + ' date' + (result.rows.length === 1 ? '' : 's') + '. Update the event to save them.' : '';
            $message.text([result.error, added].filter(Boolean).join(' ') || 'No new dates were needed.');
        });
    }

    return { generateRepeats: generateRepeats, init: init };
}));
