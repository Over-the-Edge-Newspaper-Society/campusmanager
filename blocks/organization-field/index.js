import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { groups as icon } from '@wordpress/icons';

const ORGANIZATION_FIELDS = [
	{ label: __('Email', 'unbc-events'), value: 'org_email' },
	{ label: __('Size', 'unbc-events'), value: 'org_size' },
	{ label: __('Founded Year', 'unbc-events'), value: 'org_founded_year' },
	{ label: __('Short Description', 'unbc-events'), value: 'org_short_description' },
	{ label: __('Membership Requirements', 'unbc-events'), value: 'org_membership_requirements' },
	{ label: __('Meeting Schedule', 'unbc-events'), value: 'org_meeting_schedule' },
	{ label: __('President Name', 'unbc-events'), value: 'org_president_name' },
	{ label: __('President Email', 'unbc-events'), value: 'org_president_email' },
	{ label: __('Contact Name', 'unbc-events'), value: 'org_contact_name' },
	{ label: __('Contact Email', 'unbc-events'), value: 'org_contact_email' },
	{ label: __('Office Location', 'unbc-events'), value: 'org_office_location' },
	{ label: __('Website', 'unbc-events'), value: 'org_website' },
	{ label: __('Facebook', 'unbc-events'), value: 'org_facebook' },
	{ label: __('Instagram', 'unbc-events'), value: 'org_instagram' },
	{ label: __('Twitter/X', 'unbc-events'), value: 'org_twitter' },
	{ label: __('Discord', 'unbc-events'), value: 'org_discord' },
	{ label: __('Linktree', 'unbc-events'), value: 'org_linktree' },
	{ label: __('YouTube', 'unbc-events'), value: 'org_youtube' },
	{ label: __('Registration Link', 'unbc-events'), value: 'org_registration_link' },
	{ label: __('Status', 'unbc-events'), value: 'org_status' },
	{ label: __('Founded Date', 'unbc-events'), value: 'org_founded_date' },
	{ label: __('Approval Date', 'unbc-events'), value: 'org_approval_date' },
	{ label: __('Registration Date', 'unbc-events'), value: 'org_registration_date' }
];

registerBlockType('unbc/organization-field', {
	edit: ({ attributes, setAttributes }) => {
		const {
			content,
			fieldName,
			showLabel,
			customLabel,
			fallbackText,
			makeLink,
			linkText
		} = attributes;

		const blockProps = useBlockProps({
			className: 'organization-field-block'
		});

		const selectedField = ORGANIZATION_FIELDS.find(field => field.value === fieldName);
		const fieldLabel = customLabel || (selectedField ? selectedField.label : '');
		
		// Fields that can be links 
		const linkableFields = [
			'org_email', 'org_president_email', 'org_contact_email',
			'org_website', 'org_facebook', 'org_instagram', 'org_discord', 
			'org_linktree', 'org_youtube', 'org_registration_link', 'org_twitter'
		];
		
		const canBeLink = linkableFields.includes(fieldName);

		return (
			<div {...blockProps}>
				<InspectorControls>
					<PanelBody title={__('Field Settings', 'unbc-events')}>
						<SelectControl
							label={__('Organization Field', 'unbc-events')}
							value={fieldName}
							options={ORGANIZATION_FIELDS}
							onChange={(value) => setAttributes({ fieldName: value })}
							help={__('Select which organization field to display', 'unbc-events')}
						/>
						
						<ToggleControl
							label={__('Show Field Label', 'unbc-events')}
							checked={showLabel}
							onChange={(value) => setAttributes({ showLabel: value })}
							help={__('Display a label before the field value', 'unbc-events')}
						/>
						
						{showLabel && (
							<TextControl
								label={__('Custom Label', 'unbc-events')}
								value={customLabel}
								onChange={(value) => setAttributes({ customLabel: value })}
								placeholder={selectedField ? selectedField.label : ''}
								help={__('Leave empty to use default label', 'unbc-events')}
							/>
						)}
						
						<TextControl
							label={__('Fallback Text', 'unbc-events')}
							value={fallbackText}
							onChange={(value) => setAttributes({ fallbackText: value })}
							placeholder={__('Not specified', 'unbc-events')}
							help={__('Text to show when field is empty', 'unbc-events')}
						/>
						
						{canBeLink && (
							<>
								<ToggleControl
									label={__('Make Link', 'unbc-events')}
									checked={makeLink}
									onChange={(value) => setAttributes({ makeLink: value })}
									help={__('Turn field value into a clickable link', 'unbc-events')}
								/>
								
								{makeLink && (
									<TextControl
										label={__('Link Text Override', 'unbc-events')}
										value={linkText}
										onChange={(value) => setAttributes({ linkText: value })}
										placeholder={__('Leave empty to use field value', 'unbc-events')}
										help={__('Custom text for the link (optional)', 'unbc-events')}
									/>
								)}
							</>
						)}
					</PanelBody>
				</InspectorControls>

				<div className="organization-field-preview">
					{content ? (
						<>
							{showLabel && fieldLabel && (
								<span className="organization-field-label">
									{fieldLabel}:{' '}
								</span>
							)}
							<RichText
								tagName="span"
								className="organization-field-content"
								value={content}
								onChange={(value) => setAttributes({ content: value })}
								placeholder={__('Add custom text...', 'unbc-events')}
								allowedFormats={['core/bold', 'core/italic', 'core/link']}
							/>
						</>
					) : (
						<span className="organization-field-placeholder">
							{showLabel && fieldLabel ? `${fieldLabel}: ` : ''}
							{makeLink && canBeLink ? '🔗 ' : ''}
							{__('[', 'unbc-events')}{selectedField ? selectedField.label : fieldName}{__(']' , 'unbc-events')}
							{makeLink && linkText ? ` (${linkText})` : ''}
						</span>
					)}
				</div>
			</div>
		);
	},

	save: ({ attributes }) => {
		const { content } = attributes;
		const blockProps = useBlockProps.save({
			className: 'organization-field-block'
		});

		return (
			<div {...blockProps}>
				<RichText.Content
					tagName="span"
					className="organization-field-content"
					value={content}
				/>
			</div>
		);
	}
});