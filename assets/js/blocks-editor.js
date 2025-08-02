(function() {
    const { registerBlockType } = wp.blocks;
    const { InspectorControls } = wp.blockEditor;
    const { PanelBody, SelectControl, TextControl, RangeControl, ToggleControl } = wp.components;
    const { __ } = wp.i18n;

    // Register Calendar Block
    registerBlockType('unbc/calendar-view', {
        title: __('UNBC Calendar', 'unbc-events'),
        description: __('Display the UNBC events calendar with multiple view options.', 'unbc-events'),
        icon: 'calendar-alt',
        category: 'widgets',
        keywords: [__('calendar'), __('events'), __('unbc')],
        
        attributes: {
            view: {
                type: 'string',
                default: 'month'
            },
            categoryFilter: {
                type: 'string',
                default: 'all'
            },
            organizationFilter: {
                type: 'string',
                default: 'all'
            }
        },

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
                        backgroundColor: '#f9f9f9',
                        borderRadius: '4px'
                    }
                },
                    wp.element.createElement('div', {
                        style: { fontSize: '24px', marginBottom: '10px' }
                    }, '📅'),
                    wp.element.createElement('h3', {
                        style: { margin: '0 0 10px 0', fontSize: '18px', fontWeight: '600' }
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

    // Register Events List Block
    registerBlockType('unbc/events-list', {
        title: __('UNBC Events List', 'unbc-events'),
        description: __('Display a list of UNBC events with organization filtering.', 'unbc-events'),
        icon: 'list-view',
        category: 'widgets',
        keywords: [__('events'), __('list'), __('unbc'), __('organization')],
        
        attributes: {
            organizationId: {
                type: 'string',
                default: ''
            },
            organizationName: {
                type: 'string',
                default: ''
            },
            limit: {
                type: 'number',
                default: 5
            },
            showPastEvents: {
                type: 'boolean',
                default: false
            }
        },

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
                        backgroundColor: '#f9f9f9',
                        borderRadius: '4px'
                    }
                },
                    wp.element.createElement('div', {
                        style: { fontSize: '24px', marginBottom: '10px' }
                    }, '📋'),
                    wp.element.createElement('h3', {
                        style: { margin: '0 0 10px 0', fontSize: '18px', fontWeight: '600' }
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

})();