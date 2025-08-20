import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType('unbc/calendar-view', {
    edit: function(props) {
    const { attributes, setAttributes } = props;
    const { view, categoryFilter, organizationFilter, listInitialItems, listLoadMoreCount } = attributes;

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
                title: __('List View Settings', 'unbc-events'),
                initialOpen: true
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
            }, __('View: ' + view + ' | Category: ' + categoryFilter, 'unbc-events'))
        )
    ];
    },
    
    save: function() {
        return null; // Server-side rendered
    }
});