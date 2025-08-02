import React, { useState, useEffect } from 'react';

// Simple calendar component that works with WordPress REST API
function WordPressCalendar({ initialView = 'month', initialCategoryFilter = 'all', initialOrganizationFilter = 'all' }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      
      // Use WordPress REST API
      const response = await fetch('/wp-json/wp/v2/events?per_page=100&_embed=1');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Transform WordPress data to simple event format
      const transformedEvents = data.map(post => {
        // Use start_date if available, otherwise fall back to post date
        const startDate = post.start_date ? new Date(post.start_date) : new Date(post.date);
        const endDate = post.end_date ? new Date(post.end_date) : startDate;
        
        return {
          id: post.id,
          title: post.title.rendered,
          startDate: startDate,
          endDate: endDate,
          content: post.content.rendered,
          location: post.location || '',
          organization: post.organization || '',
          category: post.category || 'general',
          startTime: post.start_time || '',
          endTime: post.end_time || '',
          cost: post.cost || 'Free',
          registrationRequired: post.registration_required === '1'
        };
      });

      setEvents(transformedEvents);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>⏳</div>
        <p>Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#d32f2f' }}>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>❌</div>
        <p>Error loading events: {error}</p>
        <button 
          onClick={fetchEvents}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 10px 0' }}>UNBC Events Calendar</h2>
        <p style={{ margin: '0', color: '#666' }}>
          Found {events.length} events | View: {initialView} | Category: {initialCategoryFilter}
        </p>
      </div>
      
      {events.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>📅</div>
          <h3>No events found</h3>
          <p>There are currently no events to display.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '16px' }}>
          {events.slice(0, 10).map(event => (
            <div 
              key={event.id}
              style={{
                padding: '16px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>
                {event.title}
              </h3>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                📅 {event.startDate.toLocaleDateString()}
                {event.startTime && ` at ${event.startTime}`}
                {event.startDate.getTime() !== event.endDate.getTime() && 
                  ` - ${event.endDate.toLocaleDateString()}`
                }
                {event.endTime && event.startTime !== event.endTime && ` (until ${event.endTime})`}
              </div>
              {event.location && (
                <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                  📍 {event.location}
                </div>
              )}
              {event.organization && (
                <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                  🏢 {event.organization}
                </div>
              )}
              {event.category && (
                <span style={{
                  fontSize: '12px',
                  padding: '4px 8px',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  borderRadius: '12px'
                }}>
                  {event.category}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Simple events list component
function WordPressEventsList({ organizationId, organizationName, limit = 5, showPastEvents = false }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, [organizationId, organizationName]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      
      let url = '/wp-json/wp/v2/events?per_page=100&_embed=1';
      
      // Add organization filter if specified
      if (organizationId) {
        url += `&meta_query[0][key]=organization_id&meta_query[0][value]=${organizationId}`;
      }

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Transform and filter events
      let transformedEvents = data.map(post => {
        // Use start_date if available, otherwise fall back to post date
        const startDate = post.start_date ? new Date(post.start_date) : new Date(post.date);
        const endDate = post.end_date ? new Date(post.end_date) : startDate;
        
        return {
          id: post.id,
          title: post.title.rendered,
          startDate: startDate,
          endDate: endDate,
          content: post.content.rendered,
          location: post.location || '',
          organization: post.organization || '',
          category: post.category || 'general',
          startTime: post.start_time || '',
          endTime: post.end_time || '',
          cost: post.cost || 'Free',
          registrationRequired: post.registration_required === '1'
        };
      });

      // Filter by organization name if specified
      if (organizationName && !organizationId) {
        transformedEvents = transformedEvents.filter(event => 
          event.organization.toLowerCase().includes(organizationName.toLowerCase())
        );
      }

      // Filter out past events unless requested
      if (!showPastEvents) {
        const now = new Date();
        transformedEvents = transformedEvents.filter(event => event.startDate >= now);
      }

      // Sort by date and limit results
      transformedEvents.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
      
      if (limit > 0) {
        transformedEvents = transformedEvents.slice(0, limit);
      }

      setEvents(transformedEvents);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <p>Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#d32f2f' }}>
        <p>Error loading events: {error}</p>
        <button onClick={fetchEvents} style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Retry
        </button>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>📋</div>
        <h3>No upcoming events</h3>
        <p>
          {organizationName ? `${organizationName} has no upcoming events.` : 'No events found.'}
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      {organizationName && (
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>{organizationName} Events</h3>
          <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
            {events.length} upcoming event{events.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}
      
      <div style={{ display: 'grid', gap: '12px' }}>
        {events.map(event => (
          <div 
            key={event.id}
            style={{
              padding: '16px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
              {event.title}
            </h4>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
              📅 {event.startDate.toLocaleDateString()}
              {event.startTime && ` at ${event.startTime}`}
              {event.endTime && event.startTime !== event.endTime && ` - ${event.endTime}`}
            </div>
            {event.location && (
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                📍 {event.location}
              </div>
            )}
            {!organizationName && event.organization && (
              <div style={{ fontSize: '14px', color: '#666' }}>
                🏢 {event.organization}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { WordPressCalendar, WordPressEventsList };