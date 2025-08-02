const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
const { __ } = wp.i18n;

registerBlockType('unbc/calendar-view', {
    edit: function(props) {
        const { attributes, setAttributes } = props;
        const { view, categoryFilter, organizationFilter } = attributes;

        return [
            wp.element.createElement(InspectorControls, { key: 'controls' },
                wp.element.createElement(PanelBody, { 
                    title: __('Calendar Settings', 'unbc-events'),
                    initialOpen: true 
                },
                    wp.element.createElement(SelectControl, {
                        label: __('Default View', 'unbc-events'),
                        value: view,
                        options: [
                            { label: 'Month', value: 'month' },
                            { label: 'Week', value: 'week' },
                            { label: 'Day', value: 'day' },
                            { label: 'List', value: 'list' }
                        ],
                        onChange: function(newView) {
                            setAttributes({ view: newView });
                        }
                    }),
                    wp.element.createElement(SelectControl, {
                        label: __('Default Category Filter', 'unbc-events'),
                        value: categoryFilter,
                        options: [
                            { label: 'All Categories', value: 'all' },
                            { label: 'Academic', value: 'academic' },
                            { label: 'Social', value: 'social' },
                            { label: 'Cultural', value: 'cultural' },
                            { label: 'Sports', value: 'sports' },
                            { label: 'Professional', value: 'professional' },
                            { label: 'Wellness', value: 'wellness' },
                            { label: 'Volunteer', value: 'volunteer' },
                            { label: 'Arts', value: 'arts' }
                        ],
                        onChange: function(newCategory) {
                            setAttributes({ categoryFilter: newCategory });
                        }
                    }),
                    wp.element.createElement(SelectControl, {
                        label: __('Default Organization Filter', 'unbc-events'),
                        value: organizationFilter,
                        options: [
                            { label: 'All Organizations', value: 'all' }
                        ],
                        onChange: function(newOrg) {
                            setAttributes({ organizationFilter: newOrg });
                        }
                    })
                )
            ),
            wp.element.createElement('div', { 
                key: 'preview',
                className: 'unbc-calendar-preview',
                style: {
                    border: '2px dashed #ccc',
                    padding: '40px',
                    textAlign: 'center',
                    backgroundColor: '#f9f9f9'
                }
            },
                wp.element.createElement('div', {
                    style: { fontSize: '24px', marginBottom: '10px' }
                }, '📅'),
                wp.element.createElement('h3', {
                    style: { margin: '0 0 10px 0' }
                }, __('UNBC Calendar', 'unbc-events')),
                wp.element.createElement('p', {
                    style: { margin: '0', color: '#666' }
                }, __('View: ' + view + ' | Category: ' + categoryFilter, 'unbc-events'))
            )
        ];
    },

    save: function() {
        return null; // Server-side rendered
    }
});