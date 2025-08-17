<?php
/**
 * UNBC Events Blocks Handler
 * Registers and manages Gutenberg blocks for the plugin
 */

if (!defined('ABSPATH')) {
    exit;
}

class UNBC_Events_Blocks {
    
    public function __construct() {
        error_log('Campus Manager: Main Blocks class constructor called');
        
        // Register category filters immediately
        add_filter('block_categories_all', array($this, 'add_block_category'), 10, 2);
        add_filter('block_categories', array($this, 'add_block_category'), 10, 2);
        
        add_action('init', array($this, 'register_blocks'), 20); // Later priority
        
        // Also register immediately if init has already passed
        if (did_action('init')) {
            $this->register_blocks();
        }
    }
    
    
    /**
     * Add block category (fallback for older WP versions)
     */
    public function add_block_category($categories, $post) {
        error_log('Campus Manager: Adding block category');
        return array_merge(
            $categories,
            array(
                array(
                    'slug'  => 'campus-manager',
                    'title' => __('Campus Manager', 'unbc-events'),
                    'icon'  => 'groups',
                ),
            )
        );
    }
    
    /**
     * Register all blocks
     */
    public function register_blocks() {
        // Check if we have block registration functions
        if (!function_exists('register_block_type')) {
            return;
        }
        
        // Register Organization Field Block
        $this->register_organization_field_block();
    }
    
    /**
     * Register the Organization Field Block
     */
    private function register_organization_field_block() {
        $block_path = plugin_dir_path(dirname(__FILE__)) . 'blocks/organization-field';
        
        // Check if block.json exists
        if (file_exists($block_path . '/block.json')) {
            $result = register_block_type($block_path);
            if ($result) {
                error_log('UNBC Events: Organization Field block registered successfully');
            } else {
                error_log('UNBC Events: Failed to register Organization Field block');
            }
        } else {
            // Fallback manual registration if block.json is missing
            register_block_type('unbc/organization-field', array(
                'title' => __('Organization Field', 'unbc-events'),
                'description' => __('Display organization custom fields with customizable text.', 'unbc-events'),
                'category' => 'unbc-blocks',
                'icon' => 'groups',
                'supports' => array(
                    'html' => false,
                    'align' => true,
                    'color' => array(
                        'gradients' => true,
                        'link' => true,
                        '__experimentalDefaultControls' => array(
                            'background' => true,
                            'text' => true
                        )
                    ),
                    'spacing' => array(
                        'margin' => true,
                        'padding' => true,
                        '__experimentalDefaultControls' => array(
                            'margin' => false,
                            'padding' => false
                        )
                    ),
                    'typography' => array(
                        'fontSize' => true,
                        'lineHeight' => true,
                        '__experimentalFontFamily' => true,
                        '__experimentalFontWeight' => true,
                        '__experimentalFontStyle' => true,
                        '__experimentalTextTransform' => true,
                        '__experimentalTextDecoration' => true,
                        '__experimentalLetterSpacing' => true,
                        '__experimentalDefaultControls' => array(
                            'fontSize' => true
                        )
                    )
                ),
                'attributes' => array(
                    'content' => array(
                        'type' => 'string',
                        'source' => 'html',
                        'selector' => '.organization-field-content',
                        'default' => ''
                    ),
                    'fieldName' => array(
                        'type' => 'string',
                        'default' => 'org_email'
                    ),
                    'showLabel' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'customLabel' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'fallbackText' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'organizationId' => array(
                        'type' => 'number',
                        'default' => 0
                    )
                ),
                'render_callback' => array($this, 'render_organization_field_block')
            ));
        }
    }
    
    /**
     * Render callback for Organization Field Block (fallback)
     */
    public function render_organization_field_block($attributes, $content, $block) {
        // Include the render file
        $render_file = plugin_dir_path(dirname(__FILE__)) . 'blocks/organization-field/render.php';
        if (file_exists($render_file)) {
            ob_start();
            include $render_file;
            return ob_get_clean();
        }
        
        return '';
    }
}