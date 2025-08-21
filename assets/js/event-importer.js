jQuery(document).ready(function($) {
    let eventsData = null;
    let organizerCounts = {};
    
    // File upload handler
    $('#json-file').on('change', function() {
        const file = this.files[0];
        if (!file) {
            $('#analyze-file').prop('disabled', true);
            $('#file-info').hide();
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                eventsData = JSON.parse(e.target.result);
                if (!eventsData.events || !Array.isArray(eventsData.events)) {
                    throw new Error('Invalid format: Expected "events" array');
                }
                
                // Count organizers
                organizerCounts = {};
                eventsData.events.forEach(event => {
                    const organizer = event.organizer || 'Unknown';
                    organizerCounts[organizer] = (organizerCounts[organizer] || 0) + 1;
                });
                
                $('#events-count').text(eventsData.events.length);
                $('#file-info').show();
                $('#analyze-file').prop('disabled', false);
                
            } catch (error) {
                alert('Error parsing JSON file: ' + error.message);
                $('#analyze-file').prop('disabled', true);
                $('#file-info').hide();
            }
        };
        reader.readAsText(file);
    });
    
    // Analyze events and show organizer mapping
    $('#analyze-file').on('click', function() {
        if (!eventsData) return;
        
        buildOrganizerMappings();
        $('#step-2').show();
        $('html, body').animate({
            scrollTop: $('#step-2').offset().top - 50
        }, 500);
    });
    
    // Build organizer mapping interface
    function buildOrganizerMappings() {
        const template = $('#organizer-mapping-template').html();
        const container = $('#organizer-mappings');
        container.empty();
        
        // Sort organizers by event count (descending)
        const sortedOrganizers = Object.entries(organizerCounts)
            .sort(([,a], [,b]) => b - a);
        
        sortedOrganizers.forEach(([organizer, count]) => {
            const html = template
                .replace(/{{organizer}}/g, organizer)
                .replace(/{{count}}/g, count);
            container.append(html);
        });
        
        // Make sortable
        container.sortable({
            handle: '.drag-handle',
            axis: 'y',
            placeholder: 'sortable-placeholder'
        });
        
        $('#step-3').show();
    }
    
    // Load preset
    $('#load-preset').on('click', function() {
        const presetId = $('#import-preset').val();
        if (!presetId) {
            alert('Please select a preset to load');
            return;
        }
        
        $.post(unbcImporter.ajax_url, {
            action: 'load_import_preset',
            preset_id: presetId,
            nonce: unbcImporter.nonce
        }).done(function(response) {
            if (response.success) {
                const preset = response.data;
                
                // Apply mappings
                Object.entries(preset.mappings || {}).forEach(([organizer, categoryId]) => {
                    $(`.category-select[data-organizer="${organizer}"]`).val(categoryId);
                });
                
                // Apply defaults
                $('#default-category').val(preset.default_category || '');
                $('#default-organization').val(preset.default_organization || '');
                
                alert('Preset loaded successfully!');
            } else {
                alert('Error loading preset: ' + response.data);
            }
        }).fail(function() {
            alert('Error communicating with server');
        });
    });
    
    // Save preset
    $('#save-preset').on('click', function() {
        const presetName = $('#preset-name').val().trim();
        if (!presetName) {
            alert('Please enter a preset name');
            return;
        }
        
        const mappings = {};
        $('.category-select').each(function() {
            const organizer = $(this).data('organizer');
            const categoryId = $(this).val();
            if (categoryId) {
                mappings[organizer] = categoryId;
            }
        });
        
        $.post(unbcImporter.ajax_url, {
            action: 'save_import_preset',
            preset_name: presetName,
            mappings: JSON.stringify(mappings),
            default_category: $('#default-category').val(),
            default_organization: $('#default-organization').val(),
            nonce: unbcImporter.nonce
        }).done(function(response) {
            if (response.success) {
                alert('Preset saved successfully!');
                $('#preset-name').val('');
                
                // Add to dropdown
                $('#import-preset').append(
                    `<option value="${response.data.preset_id}">${presetName}</option>`
                );
            } else {
                alert('Error saving preset: ' + response.data);
            }
        }).fail(function() {
            alert('Error communicating with server');
        });
    });
    
    // Preview import
    $('#preview-import').on('click', function() {
        if (!eventsData) {
            alert('Please upload a JSON file first');
            return;
        }
        
        const mappings = {};
        $('.category-select').each(function() {
            const organizer = $(this).data('organizer');
            const categoryId = $(this).val();
            if (categoryId) {
                mappings[organizer] = categoryId;
            }
        });
        
        const duplicateHandling = $('input[name="duplicate-handling"]:checked').val();
        
        $(this).prop('disabled', true).text('Generating Preview...');
        
        $.post(unbcImporter.ajax_url, {
            action: 'preview_import',
            events: JSON.stringify(eventsData),
            mappings: JSON.stringify(mappings),
            default_category: $('#default-category').val(),
            duplicate_handling: duplicateHandling,
            nonce: unbcImporter.nonce
        }).done(function(response) {
            $('#preview-import').prop('disabled', false).text('Preview Import');
            
            if (response.success) {
                displayPreview(response.data);
                $('#execute-import').prop('disabled', false);
            } else {
                alert('Error generating preview: ' + response.data);
            }
        }).fail(function() {
            $('#preview-import').prop('disabled', false).text('Preview Import');
            alert('Error communicating with server');
        });
    });
    
    // Execute import
    $('#execute-import').on('click', function() {
        if (!confirm('Are you sure you want to import these events? This action cannot be undone.')) {
            return;
        }
        
        const mappings = {};
        $('.category-select').each(function() {
            const organizer = $(this).data('organizer');
            const categoryId = $(this).val();
            if (categoryId) {
                mappings[organizer] = categoryId;
            }
        });
        
        const duplicateHandling = $('input[name="duplicate-handling"]:checked').val();
        
        $(this).prop('disabled', true).text('Importing...');
        
        $.post(unbcImporter.ajax_url, {
            action: 'execute_import',
            events: JSON.stringify(eventsData),
            mappings: JSON.stringify(mappings),
            default_category: $('#default-category').val(),
            default_organization: $('#default-organization').val(),
            duplicate_handling: duplicateHandling,
            nonce: unbcImporter.nonce
        }).done(function(response) {
            $('#execute-import').prop('disabled', false).text('Execute Import');
            
            if (response.success) {
                displayResults(response.data);
            } else {
                alert('Error during import: ' + response.data);
            }
        }).fail(function() {
            $('#execute-import').prop('disabled', false).text('Execute Import');
            alert('Error communicating with server');
        });
    });
    
    function displayPreview(preview) {
        let html = '<div class="preview-summary">';
        html += `<h4>Import Summary</h4>`;
        html += `<p><strong>Total events:</strong> ${preview.total_events}</p>`;
        html += `<p><strong>Will create:</strong> ${preview.will_create} events</p>`;
        html += `<p><strong>Will update:</strong> ${preview.will_update} events</p>`;
        html += `<p><strong>Will skip:</strong> ${preview.will_skip} events</p>`;
        
        if (preview.timezone_info && Object.keys(preview.timezone_info).length > 0) {
            html += '<h4>Timezone Information</h4><ul>';
            Object.entries(preview.timezone_info).forEach(([timezone, count]) => {
                html += `<li>${timezone}: ${count} events</li>`;
            });
            html += '</ul>';
            html += '<p class="description" style="font-style: italic;">All dates/times will be converted from UTC to local timezone for storage.</p>';
        }
        
        if (Object.keys(preview.category_breakdown).length > 0) {
            html += '<h4>Events by Category</h4><ul>';
            Object.entries(preview.category_breakdown).forEach(([category, count]) => {
                html += `<li>${category}: ${count} events</li>`;
            });
            html += '</ul>';
        }
        
        if (preview.issues.length > 0) {
            html += '<h4 style="color: #d63638;">Issues Found</h4><ul style="color: #d63638;">';
            preview.issues.forEach(issue => {
                html += `<li>${issue}</li>`;
            });
            html += '</ul>';
        }
        
        html += '</div>';
        
        $('#preview-results').html(html);
        $('#import-preview').show();
    }
    
    function displayResults(results) {
        let html = '<div class="import-summary">';
        html += `<p><strong>Created:</strong> ${results.created} events</p>`;
        html += `<p><strong>Updated:</strong> ${results.updated} events</p>`;
        html += `<p><strong>Skipped:</strong> ${results.skipped} events</p>`;
        
        if (results.errors.length > 0) {
            html += '<h4 style="color: #d63638;">Errors</h4><ul style="color: #d63638;">';
            results.errors.forEach(error => {
                html += `<li>${error}</li>`;
            });
            html += '</ul>';
        }
        
        html += '</div>';
        
        $('#results-summary').html(html);
        $('#import-results').removeClass('hidden').show();
        
        // Scroll to results
        $('html, body').animate({
            scrollTop: $('#import-results').offset().top - 50
        }, 500);
    }
});