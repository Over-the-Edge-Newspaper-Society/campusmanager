const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl, RangeControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;

registerBlockType('unbc/events-list', {
    edit: function(props) {
        const { attributes, setAttributes } = props;
        const { organizationId, organizationName, limit, showPastEvents } = attributes;

        return [
            wp.element.createElement(InspectorControls, { key: 'controls' },
                wp.element.createElement(PanelBody, { 
                    title: __('Events List Settings', 'unbc-events'),
                    initialOpen: true 
                },
                    wp.element.createElement(TextControl, {
                        label: __('Organization ID', 'unbc-events'),
                        value: organizationId,
                        onChange: function(newId) {
                            setAttributes({ organizationId: newId });
                        },
                        help: __('Leave empty to show all organizations', 'unbc-events')
                    }),
                    wp.element.createElement(TextControl, {
                        label: __('Organization Name', 'unbc-events'),
                        value: organizationName,
                        onChange: function(newName) {
                            setAttributes({ organizationName: newName });
                        },
                        help: __('Alternative to Organization ID', 'unbc-events')
                    }),
                    wp.element.createElement(RangeControl, {
                        label: __('Number of Events', 'unbc-events'),
                        value: limit,
                        onChange: function(newLimit) {
                            setAttributes({ limit: newLimit });
                        },
                        min: 1,
                        max: 20
                    }),
                    wp.element.createElement(ToggleControl, {
                        label: __('Show Past Events', 'unbc-events'),
                        checked: showPastEvents,
                        onChange: function(newShowPast) {
                            setAttributes({ showPastEvents: newShowPast });
                        }
                    })
                )
            ),
            wp.element.createElement('div', { 
                key: 'preview',
                className: 'unbc-events-list-preview',
                style: {
                    border: '2px dashed #ccc',
                    padding: '40px',
                    textAlign: 'center',
                    backgroundColor: '#f9f9f9'
                }
            },
                wp.element.createElement('div', {
                    style: { fontSize: '24px', marginBottom: '10px' }
                }, '📋'),
                wp.element.createElement('h3', {
                    style: { margin: '0 0 10px 0' }
                }, __('UNBC Events List', 'unbc-events')),
                wp.element.createElement('p', {
                    style: { margin: '0', color: '#666' }
                }, __('Showing ' + limit + ' events' + (organizationName ? ' for ' + organizationName : ''), 'unbc-events'))
            )
        ];
    },

    save: function() {
        return null; // Server-side rendered
    }
});