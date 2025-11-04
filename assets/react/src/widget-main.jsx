import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodayEventsWidget } from './components/today-events-widget'

// Initialize all widget instances on the page
document.addEventListener('DOMContentLoaded', () => {
  const widgetContainers = document.querySelectorAll('.unbc-today-events-widget');

  widgetContainers.forEach((container) => {
    // Get widget configuration from data attributes
    const title = container.getAttribute('data-title') || "Today's Events";
    const maxEvents = parseInt(container.getAttribute('data-max-events') || '10');

    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <TodayEventsWidget
          title={title}
          maxEvents={maxEvents}
        />
      </React.StrictMode>,
    );
  });
});
