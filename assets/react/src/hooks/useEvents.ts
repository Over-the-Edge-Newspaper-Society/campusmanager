import { useState, useEffect, useCallback } from 'react';
import { eventsAPI, type EventFilters } from '@/services/eventsApi';
import type { Event, EventMetadata } from '@/types';
import { unbcEvents, eventMetadata } from '@/data/events';

interface UseEventsResult {
  events: Event[];
  eventMetadata: Record<string, EventMetadata>;
  loading: boolean;
  error: string | null;
  total: number;
  pages: number;
  refetch: () => void;
  setFilters: (filters: EventFilters) => void;
}

export function useEvents(initialFilters: EventFilters = {}): UseEventsResult {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventMetadata, setEventMetadata] = useState<Record<string, EventMetadata>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);
  const [filters, setFilters] = useState<EventFilters>(initialFilters);

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await eventsAPI.fetchEvents(filters);
      
      const transformedEvents: Event[] = [];
      const transformedMetadata: Record<string, EventMetadata> = {};
      
      response.events.forEach(wpEvent => {
        const event = eventsAPI.transformWordPressEventToEvent(wpEvent);
        const metadata = eventsAPI.transformWordPressEventToMetadata(wpEvent);
        
        transformedEvents.push(event);
        transformedMetadata[event.id] = metadata;
      });
      
      setEvents(transformedEvents);
      setEventMetadata(transformedMetadata);
      setTotal(response.total);
      setPages(response.pages);
    } catch (err) {
      // Fallback to static data on error
      console.warn('Failed to fetch from WordPress, using static data:', err);
      setEvents(unbcEvents);
      setEventMetadata(eventMetadata);
      setTotal(unbcEvents.length);
      setPages(1);
      setError('Using static data - WordPress connection failed');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const refetch = useCallback(() => {
    fetchEvents();
  }, [fetchEvents]);

  const updateFilters = useCallback((newFilters: EventFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  return {
    events,
    eventMetadata,
    loading,
    error,
    total,
    pages,
    refetch,
    setFilters: updateFilters
  };
}