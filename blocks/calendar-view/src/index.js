import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType('unbc/calendar-view', {
    edit: function(props) {
    const { attributes, setAttributes } = props;
    const { view, categoryFilter, organizationFilter, listInitialItems, listLoadMoreCount, showWeekView, showDayView, eventSortOrder, monthDisplayMode = 'popover', monthSidebarPosition = 'right' } = attributes;

    const sidebarDescription = (() => {
        if (monthDisplayMode === 'sidebar') {
            const positionLabel = monthSidebarPosition === 'left' ? __('left', 'unbc-events') : __('right', 'unbc-events');
            return __('Sidebar on ', 'unbc-events') + positionLabel;
        }
        if (monthDisplayMode === 'dropdown') {
            return __('Dropdown', 'unbc-events');
        }
        return __('Hover card', 'unbc-events');
    })();

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
                        { label: 'All', value: 'all' },
                        { label: 'Clubs', value: 'clubs' },
                        { label: 'UNBC', value: 'unbc' },
                        { label: 'Organizations', value: 'organizations' },
                        { label: 'Sports', value: 'sports' }
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
            ),
            wp.element.createElement(PanelBody, {
                title: __('View Options', 'unbc-events'),
                initialOpen: true
            },
                wp.element.createElement(ToggleControl, {
                    label: __('Show Week View Tab', 'unbc-events'),
                    help: __('Allow users to switch to week view', 'unbc-events'),
                    checked: showWeekView,
                    onChange: function(newValue) {
                        setAttributes({ showWeekView: newValue });
                    }
                }),
                wp.element.createElement(ToggleControl, {
                    label: __('Show Day View Tab', 'unbc-events'),
                    help: __('Allow users to switch to day view', 'unbc-events'),
                    checked: showDayView,
                    onChange: function(newValue) {
                        setAttributes({ showDayView: newValue });
                    }
                })
            ),
            wp.element.createElement(PanelBody, {
                title: __('Sidebar Layout', 'unbc-events'),
                initialOpen: false
            },
                wp.element.createElement(SelectControl, {
                    label: __('Sidebar', 'unbc-events'),
                    help: __('Choose how events are displayed inside the month view tooltip/sidebar.', 'unbc-events'),
                    value: monthDisplayMode,
                    options: [
                        { label: __('Hover card', 'unbc-events'), value: 'popover' },
                        { label: __('Dropdown (click to expand)', 'unbc-events'), value: 'dropdown' },
                        { label: __('Sidebar (persistent panel)', 'unbc-events'), value: 'sidebar' }
                    ],
                    onChange: function(newValue) {
                        setAttributes({ monthDisplayMode: newValue });
                    }
                }),
                wp.element.createElement(SelectControl, {
                    label: __('Sidebar position', 'unbc-events'),
                    help: __('Placement for the sidebar panel when enabled.', 'unbc-events'),
                    value: monthSidebarPosition,
                    options: [
                        { label: __('Left', 'unbc-events'), value: 'left' },
                        { label: __('Right', 'unbc-events'), value: 'right' }
                    ],
                    onChange: function(newValue) {
                        setAttributes({ monthSidebarPosition: newValue });
                    },
                    disabled: monthDisplayMode !== 'sidebar'
                })
            ),
            wp.element.createElement(PanelBody, {
                title: __('List View Settings', 'unbc-events'),
                initialOpen: false
            },
                wp.element.createElement(RangeControl, {
                    label: __('Initial Items to Show', 'unbc-events'),
                    help: __('Number of events to show initially in list view', 'unbc-events'),
                    value: listInitialItems || 30,
                    onChange: function(value) {
                        setAttributes({ listInitialItems: value });
                    },
                    min: 5,
                    max: 100,
                    step: 5
                }),
                wp.element.createElement(RangeControl, {
                    label: __('Load More Count', 'unbc-events'),
                    help: __('Number of events to load when "Load More" is clicked', 'unbc-events'),
                    value: listLoadMoreCount || 15,
                    onChange: function(value) {
                        setAttributes({ listLoadMoreCount: value });
                    },
                    min: 5,
                    max: 50,
                    step: 5
                })
            ),
            wp.element.createElement(PanelBody, {
                title: __('Sorting Settings', 'unbc-events'),
                initialOpen: false
            },
                wp.element.createElement(SelectControl, {
                    label: __('Event Sort Order', 'unbc-events'),
                    help: __('Sort events by time in ascending or descending order', 'unbc-events'),
                    value: eventSortOrder || 'asc',
                    options: [
                        { label: 'Ascending (Earliest First)', value: 'asc' },
                        { label: 'Descending (Latest First)', value: 'desc' }
                    ],
                    onChange: function(value) {
                        setAttributes({ eventSortOrder: value });
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
            }, __('Event Calendar', 'unbc-events')),
            wp.element.createElement('p', {
                style: { margin: '0', color: '#666' }
            }, __('View: ' + view + ' | Category: ' + categoryFilter, 'unbc-events')),
            wp.element.createElement('p', {
                style: { margin: '8px 0 0 0', color: '#666', fontSize: '13px' }
            }, __('Sidebar:', 'unbc-events') + ' ' + sidebarDescription)
        )
    ];
    },
    
    save: function() {
        return null; // Server-side rendered
    }
});
