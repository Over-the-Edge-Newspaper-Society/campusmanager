/**
 * Dark Mode Integration for Campus Manager Calendar
 * Ensures the calendar responds to the theme's dark mode toggle
 */
(function() {
    'use strict';
    
    // Function to update filter buttons theme
    function updateFilterButtonsTheme() {
        const html = document.documentElement;
        const isDarkMode = html.getAttribute('data-theme') === 'dark';
        
        // Update filter buttons to match theme
        const filterButtons = document.querySelectorAll('.ote-chip, .ote-filter-item, .ote-tab');
        filterButtons.forEach(function(button) {
            if (isDarkMode) {
                button.classList.add('dark-mode-chip');
            } else {
                button.classList.remove('dark-mode-chip');
            }
        });
    }
    
    // Function to observe dark mode changes
    function observeDarkModeChanges() {
        const html = document.documentElement;
        
        // Create observer to watch for data-theme attribute changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    const isDarkMode = html.getAttribute('data-theme') === 'dark';
                    
                    // Trigger a custom event that React components can listen to
                    window.dispatchEvent(new CustomEvent('themeChanged', {
                        detail: { isDarkMode: isDarkMode }
                    }));
                    
                    // Force re-render of calendar components if needed
                    const calendarContainers = document.querySelectorAll('.unbc-calendar-container');
                    calendarContainers.forEach(function(container) {
                        // Add a class to trigger CSS transitions
                        container.classList.add('theme-transitioning');
                        setTimeout(function() {
                            container.classList.remove('theme-transitioning');
                        }, 300);
                    });
                    
                    // Update filter buttons to match theme
                    updateFilterButtonsTheme();
                }
            });
        });
        
        // Start observing
        observer.observe(html, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }
    
    // Initialize when DOM is ready
    function initializeDarkMode() {
        // Set initial theme for filter buttons
        updateFilterButtonsTheme();
        
        // Start observing changes
        observeDarkModeChanges();
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeDarkMode);
    } else {
        initializeDarkMode();
    }
    
    // Also re-initialize when new content is added dynamically
    document.addEventListener('DOMContentLoaded', function() {
        // Use MutationObserver to detect when new filter buttons are added
        const bodyObserver = new MutationObserver(function(mutations) {
            let hasNewButtons = false;
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.classList && (node.classList.contains('ote-chip') || node.classList.contains('ote-filter-item'))) {
                            hasNewButtons = true;
                        }
                        // Check children too
                        const newButtons = node.querySelectorAll && node.querySelectorAll('.ote-chip, .ote-filter-item');
                        if (newButtons && newButtons.length > 0) {
                            hasNewButtons = true;
                        }
                    }
                });
            });
            
            if (hasNewButtons) {
                // Apply theme to new buttons
                setTimeout(updateFilterButtonsTheme, 100);
            }
        });
        
        bodyObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
    
    // Also listen for the dark mode toggle click event
    document.addEventListener('click', function(e) {
        // Check if the clicked element is the dark mode toggle or its child
        const toggle = e.target.closest('[dark_mode_toggle]');
        if (toggle) {
            // Small delay to ensure the theme has been applied
            setTimeout(function() {
                const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
                console.log('Dark mode toggled:', isDarkMode);
            }, 100);
        }
    });
})();