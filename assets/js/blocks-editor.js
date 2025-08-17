// Campus Manager Blocks - Debug Version
console.log('Campus Manager: JavaScript file loaded');

// Check if WordPress block functions are available
if (typeof wp === 'undefined') {
    console.error('Campus Manager: WordPress wp object not available');
} else if (typeof wp.blocks === 'undefined') {
    console.error('Campus Manager: wp.blocks not available');
} else {
    console.log('Campus Manager: WordPress blocks API available');
    
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
        
        console.log('Campus Manager: Event Calendar block registered');

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
        
        console.log('Campus Manager: Event List block registered');
        console.log('Campus Manager: All blocks registered successfully');
        
    } catch (error) {
        console.error('Campus Manager: Error registering blocks:', error);
    }
}