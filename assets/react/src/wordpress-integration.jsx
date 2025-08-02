import React from 'react';
import { createRoot } from 'react-dom/client';
import UNBCCalendar from './components/unbc-calendar.tsx';
import { OrganizationEventsList } from './components/organization-events-list.tsx';
import './index.css';

// WordPress integration functions
window.renderUNBCCalendar = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Calendar container not found:', containerId);
    return;
  }

  const root = createRoot(container);
  
  // Get configuration from data attributes
  const view = container.dataset.view || 'month';
  const categoryFilter = container.dataset.categoryFilter || 'all';
  const organizationFilter = container.dataset.organizationFilter || 'all';

  root.render(
    <React.StrictMode>
      <UNBCCalendar />
    </React.StrictMode>
  );
};

window.renderUNBCEventsList = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Events list container not found:', containerId);
    return;
  }

  const root = createRoot(container);
  
  // Get configuration from data attributes
  const organizationId = container.dataset.organizationId || '';
  const organizationName = container.dataset.organizationName || '';
  const limit = parseInt(container.dataset.limit) || 5;
  const showPast = container.dataset.showPast === 'true';

  root.render(
    <React.StrictMode>
      <EventsListWrapper 
        organizationId={organizationId}
        organizationName={organizationName}
        limit={limit}
        showPastEvents={showPast}
      />
    </React.StrictMode>
  );
};

// Wrapper component for events list with organization filtering
function EventsListWrapper({ organizationId, organizationName, limit, showPastEvents }) {
  return (
    <OrganizationEventsList
      events={[]} // Will be fetched by the component
      eventMetadata={{}}
      organizationId={organizationId}
      organizationName={organizationName}
      limit={limit}
      showPastEvents={showPastEvents}
    />
  );
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Find all calendar containers and initialize them
  const calendarContainers = document.querySelectorAll('[data-component="calendar"]');
  calendarContainers.forEach(container => {
    if (container.id) {
      window.renderUNBCCalendar(container.id);
    }
  });

  // Find all events list containers and initialize them
  const eventsListContainers = document.querySelectorAll('[data-component="events-list"]');
  eventsListContainers.forEach(container => {
    if (container.id) {
      window.renderUNBCEventsList(container.id);
    }
  });
});