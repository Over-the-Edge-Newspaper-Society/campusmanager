// Campus Manager Blocks
// Check if WordPress block functions are available
(function() {
    if (typeof wp === 'undefined' || typeof wp.blocks === 'undefined') {
        return;
    }
    
    const { registerBlockType } = wp.blocks;
    const { InspectorControls } = wp.blockEditor;
    const { PanelBody, SelectControl } = wp.components;
    const { __ } = wp.i18n;

    try {
        // Register Calendar Block - Simple version for testing
        registerBlockType('unbc/calendar-view', {
            title: 'Event Calendar',
            description: 'Display the events calendar',
            icon: 'calendar-alt',
            category: 'campus-manager',
            
            edit: function() {
                return wp.element.createElement('div', {
                    style: {
                        border: '2px dashed #ccc',
                        padding: '20px',
                        textAlign: 'center'
                    }
                }, 'Event Calendar Block - Editor Preview');
            },

            save: function() {
                return null; // Server-side rendered
            }
        });
        
        // Register Events List Block - Simple version for testing
        registerBlockType('unbc/events-list', {
            title: 'Event List',
            description: 'Display a list of events',
            icon: 'list-view',
            category: 'campus-manager',
            
            edit: function() {
                return wp.element.createElement('div', {
                    style: {
                        border: '2px dashed #ccc',
                        padding: '20px',
                        textAlign: 'center'
                    }
                }, 'Event List Block - Editor Preview');
            },

            save: function() {
                return null; // Server-side rendered
            }
        });
        
    } catch (error) {
        console.error('Campus Manager blocks error:', error);
    }
})();

// Organization filtering is now handled by native WordPress taxonomies
// Query Loop blocks will automatically show taxonomy filters for org_status and org_size