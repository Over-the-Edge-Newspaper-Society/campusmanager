import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { createElement, Fragment } from '@wordpress/element';

registerBlockType('unbc/today-events-widget', {
	edit({ attributes, setAttributes }) {
		const { title, maxEvents } = attributes;

		return [
			createElement(
				InspectorControls,
				{ key: 'controls' },
				createElement(
					PanelBody,
					{
						title: __('Widget Settings', 'unbc-events'),
						initialOpen: true,
					},
					createElement(TextControl, {
						label: __('Widget Title', 'unbc-events'),
						value: title,
						onChange: (newValue) => setAttributes({ title: newValue }),
					}),
					createElement(RangeControl, {
						label: __('Maximum Events', 'unbc-events'),
						value: maxEvents,
						onChange: (value) => setAttributes({ maxEvents: value }),
						min: 1,
						max: 20,
					})
				)
			),
			createElement(
				'div',
				{
					key: 'preview',
					className: 'unbc-today-events-widget-preview',
				},
				createElement(
					'div',
					{ style: { fontSize: '24px', marginBottom: '12px' }, 'aria-hidden': true },
					'⚡'
				),
				createElement(
					Fragment,
					null,
					createElement(
						'h3',
						null,
						title || __('Today\'s Events', 'unbc-events')
					),
					createElement(
						'p',
						null,
						sprintf(__('Showing up to %d events scheduled for the current day.', 'unbc-events'), maxEvents || 10)
					)
				)
			),
		];
	},
	save() {
		return null;
	},
});
