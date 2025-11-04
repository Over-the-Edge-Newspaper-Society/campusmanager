import React from 'react';
import { createRoot } from 'react-dom/client';
import UNBCCalendar from './components/unbc-calendar.tsx';
import { OrganizationEventsList } from './components/organization-events-list.tsx';
import { OrganizationEventsWrapper } from './components/organization-events-wrapper.tsx';
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
  const showWeekView = container.dataset.showWeekView !== 'false';
  const showDayView = container.dataset.showDayView !== 'false';
  const showCost = container.dataset.showCost !== 'false';
  const eventSortOrder = container.dataset.eventSortOrder || 'asc';
  const monthDisplayMode = container.dataset.monthDisplayMode || 'popover';
  const monthSidebarPosition = container.dataset.monthSidebarPosition || 'right';

  root.render(
    <React.StrictMode>
      <UNBCCalendar
        initialView={view}
        initialCategoryFilter={categoryFilter}
        initialOrganizationFilter={organizationFilter}
        showWeekView={showWeekView}
        showDayView={showDayView}
        showCost={showCost}
        eventSortOrder={eventSortOrder}
        initialMonthDisplayMode={monthDisplayMode}
        initialMonthSidebarPosition={monthSidebarPosition}
      />
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
      <OrganizationEventsWrapper 
        organizationId={organizationId}
        organizationName={organizationName}
        limit={limit}
        showPastEvents={showPast}
      />
    </React.StrictMode>
  );
};

// WordPress integration function for organization events (using the shared React components)
window.renderUNBCOrganizationEvents = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Organization events container not found:', containerId);
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
      <OrganizationEventsWrapper 
        organizationId={organizationId}
        organizationName={organizationName}
        limit={limit}
        showPastEvents={showPast}
      />
    </React.StrictMode>
  );
};


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

  // Find all organization events containers and initialize them
  const organizationEventsContainers = document.querySelectorAll('[data-component="organization-events"]');
  organizationEventsContainers.forEach(container => {
    if (container.id) {
      window.renderUNBCOrganizationEvents(container.id);
    }
  });
});
