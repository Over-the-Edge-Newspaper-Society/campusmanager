(function ($) {
    if (typeof unbcImporter === 'undefined') {
        return;
    }

    const state = {
        eventsData: null,
        organizerStats: {},
        organizerMappings: {},
        loadedPreset: null,
        instagramMode: false
    };

    const elements = {
        fileInput: $('#json-file'),
        analyzeButton: $('#analyze-file'),
        previewButton: $('#preview-import'),
        executeButton: $('#execute-import'),
        savePresetButton: $('#save-preset'),
        presetSelect: $('#import-preset'),
        loadPresetButton: $('#load-preset'),
        presetNameInput: $('#preset-name'),
        duplicateRadios: $('input[name="duplicate-handling"]'),
        defaultCategory: $('#default-category'),
        defaultOrganization: $('#default-organization'),
        step2: $('#step-2'),
        step3: $('#step-3'),
        organizerMappings: $('#organizer-mappings'),
        fileInfo: $('#file-info'),
        eventsCount: $('#events-count'),
        previewWrapper: $('#import-preview'),
        previewResults: $('#preview-results'),
        resultsWrapper: $('#import-results'),
        resultsSummary: $('#results-summary')
    };

    const organizerTemplate = $('#organizer-mapping-template').html();
    const labels = {
        preview: elements.previewButton.text(),
        execute: elements.executeButton.text(),
        savePreset: elements.savePresetButton.text(),
        loadPreset: elements.loadPresetButton.text()
    };

    elements.savePresetRow = elements.savePresetButton.closest('tr');
    elements.analyzeWrapper = $('#step-1 .submit');
    elements.instagramNote = $('#instagram-import-note');

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function resetUIForNewFile() {
        state.instagramMode = false;
        elements.previewWrapper.hide();
        elements.previewResults.empty();
        elements.resultsWrapper.hide();
        elements.resultsSummary.empty();
        elements.executeButton.prop('disabled', true);
        elements.step2.hide();
        elements.step3.hide();
        elements.organizerMappings.empty();
        elements.instagramNote.hide();
        if (elements.analyzeWrapper.length) {
            elements.analyzeWrapper.show();
        }
        elements.analyzeButton.prop('disabled', true);
        if (elements.savePresetRow.length) {
            elements.savePresetRow.show();
        }
    }

    function normaliseOrganizerName(event) {
        const direct = event.organizer && event.organizer.trim();
        if (direct) {
            return direct;
        }

        if (event.club && event.club.name) {
            return event.club.name.trim();
        }

        return 'Unknown';
    }

    function normaliseMappingEntry(entry) {
        if (!entry) {
            return { category: '', organization: '' };
        }

        if (typeof entry === 'object') {
            return {
                category: entry.category || '',
                organization: entry.organization || ''
            };
        }

        return { category: entry, organization: '' };
    }

    function calculateOrganizerStats() {
        const stats = {};

        if (!state.eventsData || !Array.isArray(state.eventsData.events)) {
            return stats;
        }

        state.eventsData.events.forEach((event) => {
            const organizer = normaliseOrganizerName(event);

            if (!stats[organizer]) {
                stats[organizer] = 0;
            }

            stats[organizer] += 1;
        });

        return stats;
    }

    function currentMappings() {
        const data = {};

        elements.organizerMappings.find('.organizer-mapping').each(function () {
            const $row = $(this);
            const organizer = $row.data('organizer');
            const category = $row.find('.category-select').val() || '';
            const organization = $row.find('.organization-select').val() || '';

            data[organizer] = {
                category,
                organization
            };
        });

        state.organizerMappings = data;
        return data;
    }

    function renderOrganizerMappings() {
        if (state.instagramMode) {
            elements.organizerMappings.empty();
            state.organizerMappings = {};
            elements.step2.hide();
            elements.step3.show();
            currentMappings();
            return;
        }

        elements.organizerMappings.empty();

        state.organizerStats = calculateOrganizerStats();

        const entries = Object.keys(state.organizerStats).map((name) => ({
            name,
            count: state.organizerStats[name]
        }));

        entries.sort((a, b) => {
            if (b.count === a.count) {
                return a.name.localeCompare(b.name);
            }

            return b.count - a.count;
        });

        const presetMappings = state.loadedPreset ? state.loadedPreset.mappings || {} : {};

        if (!entries.length) {
            elements.step2.hide();
            elements.organizerMappings.empty();
            elements.step3.show();
            state.organizerMappings = {};
            return;
        }

        entries.forEach(({ name, count }) => {
            let rowHtml = organizerTemplate
                .replace(/{{organizer}}/g, escapeHtml(name))
                .replace(/{{count}}/g, count);

            const $row = $(rowHtml);
            $row.attr('data-organizer', name);

            const stateEntry = state.organizerMappings[name];
            const presetEntry = normaliseMappingEntry(presetMappings[name]);

            const resolved = stateEntry || (
                presetEntry.category || presetEntry.organization ? presetEntry : null
            ) || { category: '', organization: '' };

            $row.find('.category-select').val(resolved.category || '');
            $row.find('.organization-select').val(resolved.organization || '');

            elements.organizerMappings.append($row);
        });

        if (typeof elements.organizerMappings.sortable === 'function') {
            elements.organizerMappings.sortable({
                handle: '.drag-handle',
                placeholder: 'sortable-placeholder',
                axis: 'y'
            });
        }

        currentMappings();

        elements.step2.show();
        elements.step3.show();
    }

    function applyInstagramMode() {
        if (state.instagramMode) {
            if (elements.analyzeWrapper.length) {
                elements.analyzeWrapper.hide();
            }
            elements.analyzeButton.prop('disabled', true);
            if (elements.savePresetRow.length) {
                elements.savePresetRow.hide();
            }
            elements.instagramNote.show();
            elements.step3.show();
        } else {
            if (elements.analyzeWrapper.length) {
                elements.analyzeWrapper.show();
            }
            elements.analyzeButton.prop('disabled', !state.eventsData);
            if (elements.savePresetRow.length) {
                elements.savePresetRow.show();
            }
            elements.instagramNote.hide();
        }
    }

    function getDuplicateHandling() {
        return elements.duplicateRadios.filter(':checked').val();
    }

    function showError(message) {
        window.alert(message);
    }

    function handleFileLoad(event) {
        const fileContent = event.target.result;

        try {
            const parsed = JSON.parse(fileContent);

            if (!parsed || !Array.isArray(parsed.events)) {
                showError('The selected file does not include an "events" array.');
                elements.analyzeButton.prop('disabled', true);
                return;
            }

            state.eventsData = parsed;
            state.organizerMappings = {};
            elements.eventsCount.text(parsed.events.length);
            elements.fileInfo.show();
            state.instagramMode = parsed.events.some(function (event) {
                return event && event.club && (event.club.profileUrl || event.club.username);
            });

            applyInstagramMode();

            if (!state.instagramMode) {
                elements.analyzeButton.prop('disabled', false);
            }

            if (state.loadedPreset && state.loadedPreset.default_category) {
                elements.defaultCategory.val(state.loadedPreset.default_category);
            }

            if (state.loadedPreset && state.loadedPreset.default_organization) {
                elements.defaultOrganization.val(state.loadedPreset.default_organization);
            }

            renderOrganizerMappings();

            if (state.instagramMode) {
                setTimeout(function () {
                    elements.previewButton.trigger('click');
                }, 0);
            }

        } catch (error) {
            console.error(error);
            showError('Unable to parse the JSON file. Please verify its format.');
            elements.analyzeButton.prop('disabled', true);
        }
    }

    function readFile(file) {
        if (!file) {
            state.eventsData = null;
            elements.analyzeButton.prop('disabled', true);
            elements.fileInfo.hide();
            resetUIForNewFile();
            return;
        }

        resetUIForNewFile();

        const reader = new FileReader();
        reader.onload = handleFileLoad;
        reader.onerror = function () {
            showError('Unable to read the selected file.');
        };
        reader.readAsText(file);
    }

    function prepareAjaxPayload(includeOrganization = false) {
        if (!state.eventsData) {
            showError('Please load a JSON file first.');
            return null;
        }

        const mappings = currentMappings();

        const payload = {
            action: '',
            nonce: unbcImporter.nonce,
            events: JSON.stringify(state.eventsData),
            mappings: JSON.stringify(mappings),
            default_category: elements.defaultCategory.val() || '',
            duplicate_handling: getDuplicateHandling()
        };

        if (includeOrganization) {
            payload.default_organization = elements.defaultOrganization.val() || '';
        }

        return payload;
    }

    function renderPreview(preview) {
        if (!preview) {
            elements.previewWrapper.hide();
            return;
        }

        const pieces = [];

        pieces.push('<p><strong>Total events:</strong> ' + preview.total_events + '</p>');
        pieces.push('<p><strong>Will create:</strong> ' + preview.will_create + '</p>');
        pieces.push('<p><strong>Will update:</strong> ' + preview.will_update + '</p>');
        pieces.push('<p><strong>Will skip:</strong> ' + preview.will_skip + '</p>');

        if (preview.category_breakdown) {
            const items = Object.keys(preview.category_breakdown).map(function (label) {
                return '<li>' + escapeHtml(label) + ': ' + preview.category_breakdown[label] + '</li>';
            });

            if (items.length) {
                pieces.push('<p><strong>Categories:</strong></p><ul>' + items.join('') + '</ul>');
            }
        }

        if (preview.categories_to_create) {
            const categories = Object.keys(preview.categories_to_create);
            if (categories.length) {
                const items = categories.map(function (label) {
                    return '<li>' + escapeHtml(label) + '</li>';
                });
                pieces.push('<p><strong>New categories to create:</strong></p><ul>' + items.join('') + '</ul>');
            }
        }

        if (preview.issues && preview.issues.length) {
            const issues = preview.issues.map(function (issue) {
                return '<li>' + escapeHtml(issue) + '</li>';
            });
            pieces.push('<p><strong>Warnings:</strong></p><ul>' + issues.join('') + '</ul>');
        }

        elements.previewResults.html(pieces.join(''));
        elements.previewWrapper.show();
        elements.executeButton.prop('disabled', false);
    }

    function applyPreset(data) {
        state.loadedPreset = data;

        if (data.default_category !== undefined) {
            elements.defaultCategory.val(data.default_category || '');
        }

        if (data.default_organization !== undefined) {
            elements.defaultOrganization.val(data.default_organization || '');
        }

        if (data.mappings) {
            const updated = {};

            Object.keys(data.mappings).forEach((key) => {
                updated[key] = normaliseMappingEntry(data.mappings[key]);
            });

            state.organizerMappings = updated;
        }

        if (state.eventsData) {
            renderOrganizerMappings();
        }
    }

    function bindEvents() {
        elements.fileInput.on('change', function (event) {
            const file = event.target.files[0];
            readFile(file);
        });

        elements.analyzeButton.on('click', function () {
            if (!state.eventsData) {
                showError('Please load a JSON file first.');
                return;
            }

            renderOrganizerMappings();
        });

        elements.previewButton.on('click', function () {
            const payload = prepareAjaxPayload(false);

            if (!payload) {
                return;
            }

            payload.action = 'preview_import';

            elements.previewButton.prop('disabled', true).text('Analyzing...');

            $.post(unbcImporter.ajax_url, payload)
                .done(function (response) {
                    if (response && response.success) {
                        renderPreview(response.data);
                    } else {
                        const message = response && response.data ? response.data : 'Unable to preview import.';
                        showError(message);
                    }
                })
                .fail(function () {
                    showError('Preview request failed.');
                })
                .always(function () {
            elements.previewButton.prop('disabled', false).text(labels.preview);
        });
        });

        elements.executeButton.on('click', function () {
            const payload = prepareAjaxPayload(true);

            if (!payload) {
                return;
            }

            payload.action = 'execute_import';

            elements.executeButton.prop('disabled', true).text('Importing...');

            $.post(unbcImporter.ajax_url, payload)
                .done(function (response) {
                    if (response && response.success) {
                        const results = response.data;
                        const parts = [];
                        parts.push('<p><strong>Created:</strong> ' + results.created + '</p>');
                        parts.push('<p><strong>Updated:</strong> ' + results.updated + '</p>');
                        parts.push('<p><strong>Skipped:</strong> ' + results.skipped + '</p>');

                        if (results.errors && results.errors.length) {
                            const errors = results.errors.map(function (error) {
                                return '<li>' + escapeHtml(error) + '</li>';
                            });
                            parts.push('<p><strong>Errors:</strong></p><ul>' + errors.join('') + '</ul>');
                        }

                        elements.resultsSummary.html(parts.join(''));
                        elements.resultsWrapper.show();
                    } else {
                        const message = response && response.data ? response.data : 'Import failed to complete.';
                        showError(message);
                        elements.executeButton.prop('disabled', false);
                    }
                })
                .fail(function () {
                    showError('Import request failed.');
                    elements.executeButton.prop('disabled', false);
                })
                .always(function () {
            elements.executeButton.text(labels.execute);
        });
        });

        elements.savePresetButton.on('click', function () {
            const presetName = elements.presetNameInput.val().trim();

            if (!presetName) {
                showError('Please provide a name for this preset.');
                return;
            }

            const payload = prepareAjaxPayload(true);

            if (!payload) {
                return;
            }

            payload.action = 'save_import_preset';
            payload.preset_name = presetName;

            elements.savePresetButton.prop('disabled', true).text('Saving...');

            $.post(unbcImporter.ajax_url, payload)
                .done(function (response) {
                    if (response && response.success) {
                        elements.presetNameInput.val('');
                        window.alert('Preset saved successfully.');
                    } else {
                        const message = response && response.data ? response.data : 'Unable to save preset.';
                        showError(message);
                    }
                })
                .fail(function () {
                    showError('Preset request failed.');
                })
                .always(function () {
            elements.savePresetButton.prop('disabled', false).text(labels.savePreset);
        });
        });

        elements.loadPresetButton.on('click', function () {
            const presetId = elements.presetSelect.val();

            if (!presetId) {
                showError('Please select a preset to load.');
                return;
            }

            elements.loadPresetButton.prop('disabled', true).text('Loading...');

            $.post(unbcImporter.ajax_url, {
                action: 'load_import_preset',
                nonce: unbcImporter.nonce,
                preset_id: presetId
            })
                .done(function (response) {
                    if (response && response.success) {
                        applyPreset(response.data);
                    } else {
                        const message = response && response.data ? response.data : 'Unable to load preset.';
                        showError(message);
                    }
                })
                .fail(function () {
                    showError('Preset request failed.');
                })
                .always(function () {
                    elements.loadPresetButton.prop('disabled', false).text(labels.loadPreset);
                });
        });

        elements.organizerMappings.on('change', '.category-select, .organization-select', function () {
            currentMappings();
        });
    }

    $(document).ready(function () {
        bindEvents();
    });
})(jQuery);
