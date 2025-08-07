/**
 * Dark Mode Integration for Campus Manager Calendar
 * Ensures the calendar responds to the theme's dark mode toggle
 */
(function() {
    'use strict';
    
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
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeDarkModeChanges);
    } else {
        observeDarkModeChanges();
    }
    
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