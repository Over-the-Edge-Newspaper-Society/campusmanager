(function($) {
    'use strict';

    var duplicatesData = null;

    $(document).ready(function() {
        $('#find-duplicates').on('click', findDuplicates);
        $('#select-all-duplicates').on('click', selectAllDuplicates);
        $('#deselect-all-duplicates').on('click', deselectAllDuplicates);
        $('#delete-selected').on('click', deleteSelectedDuplicates);
    });

    function findDuplicates() {
        var $button = $('#find-duplicates');
        var $resultsBox = $('#duplicates-results');

        $button.prop('disabled', true).text('Searching...');
        $resultsBox.hide();

        $.ajax({
            url: unbcDeduplicator.ajax_url,
            type: 'POST',
            data: {
                action: 'find_duplicate_events',
                nonce: unbcDeduplicator.nonce,
                match_date: $('#match-date').is(':checked'),
                match_time: $('#match-time').is(':checked'),
                match_category: $('#match-category').is(':checked'),
                keep_strategy: $('input[name="keep-strategy"]:checked').val()
            },
            success: function(response) {
                $button.prop('disabled', false).text('Find Duplicates');

                if (response.success) {
                    duplicatesData = response.data;
                    renderResults(response.data);
                } else {
                    alert('Error: ' + response.data);
                }
            },
            error: function() {
                $button.prop('disabled', false).text('Find Duplicates');
                alert('An error occurred while searching for duplicates.');
            }
        });
    }

    function renderResults(data) {
        var $resultsBox = $('#duplicates-results');
        var $summary = $('#duplicates-summary');
        var $list = $('#duplicates-list');
        var $actions = $('#delete-actions');

        $list.empty();

        if (data.group_count === 0) {
            $summary
                .removeClass('has-duplicates')
                .addClass('no-duplicates')
                .html('<strong>No duplicates found!</strong> All events appear to be unique based on your search criteria.');
            $actions.hide();
        } else {
            $summary
                .removeClass('no-duplicates')
                .addClass('has-duplicates')
                .html(
                    '<strong>' + data.group_count + ' duplicate group(s) found</strong> containing ' +
                    data.total_duplicates + ' total events. ' +
                    '<strong>' + data.total_to_delete + ' events</strong> are marked for deletion.'
                );

            data.groups.forEach(function(group, groupIndex) {
                var $group = $('<div class="duplicate-group"></div>');

                var firstEvent = group.events[0];
                var headerHtml =
                    '<div class="duplicate-group-header">' +
                    '<span class="group-title">' + escapeHtml(firstEvent.title) + '</span>' +
                    '<span class="group-meta">' +
                    (firstEvent.event_date ? formatDate(firstEvent.event_date) : 'No date') +
                    (firstEvent.start_time ? ' at ' + formatTime(firstEvent.start_time) : '') +
                    ' (' + group.count + ' events)' +
                    '</span>' +
                    '</div>';

                $group.append(headerHtml);

                group.events.forEach(function(event) {
                    var isKeep = event.action === 'keep';
                    var $event = $(
                        '<div class="duplicate-event ' + event.action + '">' +
                        '<div class="event-checkbox">' +
                        (isKeep
                            ? '<span title="This event will be kept">&#10003;</span>'
                            : '<input type="checkbox" class="delete-checkbox" data-id="' + event.ID + '" checked />') +
                        '</div>' +
                        '<div class="event-info">' +
                        '<div class="event-title"><a href="' + escapeHtml(event.edit_url) + '" target="_blank">' + escapeHtml(event.title) + '</a></div>' +
                        '<div class="event-meta">' +
                        '<span><strong>ID:</strong> ' + event.ID + '</span>' +
                        '<span><strong>Event Date:</strong> ' + (event.event_date ? formatDate(event.event_date) : 'N/A') + '</span>' +
                        '<span><strong>Time:</strong> ' + (event.start_time ? formatTime(event.start_time) : 'N/A') +
                        (event.end_time ? ' - ' + formatTime(event.end_time) : '') + '</span>' +
                        '<span><strong>Added:</strong> ' + escapeHtml(event.post_date_formatted) + '</span>' +
                        (event.category ? '<span><strong>Category:</strong> ' + escapeHtml(event.category) + '</span>' : '') +
                        '</div>' +
                        '</div>' +
                        '<div class="event-action ' + event.action + '">' + (isKeep ? 'KEEP' : 'DELETE') + '</div>' +
                        '<div class="event-links">' +
                        '<a href="' + escapeHtml(event.edit_url) + '" target="_blank">Edit</a>' +
                        '<a href="' + escapeHtml(event.view_url) + '" target="_blank">View</a>' +
                        '</div>' +
                        '</div>'
                    );

                    $group.append($event);
                });

                $list.append($group);
            });

            $actions.show();
        }

        $resultsBox.show();
    }

    function selectAllDuplicates() {
        $('.delete-checkbox').prop('checked', true);
    }

    function deselectAllDuplicates() {
        $('.delete-checkbox').prop('checked', false);
    }

    function deleteSelectedDuplicates() {
        var selectedIds = [];

        $('.delete-checkbox:checked').each(function() {
            selectedIds.push($(this).data('id'));
        });

        if (selectedIds.length === 0) {
            alert('No events selected for deletion.');
            return;
        }

        if (!confirm('Are you sure you want to move ' + selectedIds.length + ' event(s) to trash?\n\nThis action can be undone from the Trash.')) {
            return;
        }

        var $button = $('#delete-selected');
        $button.prop('disabled', true).text('Deleting...');

        $.ajax({
            url: unbcDeduplicator.ajax_url,
            type: 'POST',
            data: {
                action: 'delete_duplicate_events',
                nonce: unbcDeduplicator.nonce,
                post_ids: selectedIds
            },
            success: function(response) {
                $button.prop('disabled', false).text('Delete Selected Duplicates');

                var $deletionResults = $('#deletion-results');
                var $deletionSummary = $('#deletion-summary');

                if (response.success) {
                    var data = response.data;

                    if (data.errors.length > 0) {
                        $deletionSummary
                            .removeClass('success')
                            .addClass('error')
                            .html(
                                '<strong>' + data.deleted + ' event(s) moved to trash.</strong><br>' +
                                '<br>Errors:<br>' + data.errors.join('<br>')
                            );
                    } else {
                        $deletionSummary
                            .removeClass('error')
                            .addClass('success')
                            .html('<strong>Success!</strong> ' + data.deleted + ' duplicate event(s) moved to trash.');
                    }

                    $deletionResults.show();

                    // Refresh the duplicates list
                    setTimeout(function() {
                        findDuplicates();
                    }, 1500);
                } else {
                    alert('Error: ' + response.data);
                }
            },
            error: function() {
                $button.prop('disabled', false).text('Delete Selected Duplicates');
                alert('An error occurred while deleting events.');
            }
        });
    }

    function formatDate(dateStr) {
        if (!dateStr) return '';
        var date = new Date(dateStr + 'T00:00:00');
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    function formatTime(timeStr) {
        if (!timeStr) return '';
        var parts = timeStr.split(':');
        var hours = parseInt(parts[0], 10);
        var minutes = parts[1] || '00';
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return hours + ':' + minutes + ' ' + ampm;
    }

    function escapeHtml(str) {
        if (!str) return '';
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

})(jQuery);
