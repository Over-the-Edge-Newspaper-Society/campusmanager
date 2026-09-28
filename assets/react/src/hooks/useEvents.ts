import { useState, useEffect, useCallback, useRef } from 'react';
import { eventsAPI, type EventFilters } from '@/services/eventsApi';
import type { Event, EventMetadata } from '@/types';
import type { CategoryVariant } from '@/utils/categoryColors';

interface UseEventsResult {
  events: Event[];
  eventMetadata: Record<string, EventMetadata>;
  categoryMappings: Record<string, CategoryVariant>;
  loading: boolean;
  error: string | null;
  total: number;
  pages: number;
  refetch: () => void;
  setFilters: (filters: EventFilters) => void;
  // New: pagination support
  hasMore: boolean;
  loadMore: () => void;
  loadingMore: boolean;
  pagination?: {
    hasMore: boolean;
    nextPage: number | null;
    currentPage: number;
    perPage: number;
    view: string;
    loadedRange: {
      start: string | null;
      end: string | null;
    };
  };
}

const VALID_CATEGORY_VARIANTS: CategoryVariant[] = [
  'default',
  'primary',
  'success',
  'danger',
  'warning',
  'orange',
  'cyan',
  'pink',
  'indigo',
  'yellow',
];

const normalizeCategoryMappings = (raw?: Record<string, string> | null): Record<string, CategoryVariant> => {
  if (!raw || typeof raw !== 'object') {
    return {};
  }

  const normalized: Record<string, CategoryVariant> = {};

  Object.entries(raw).forEach(([slug, variant]) => {
    if (VALID_CATEGORY_VARIANTS.includes(variant as CategoryVariant)) {
      normalized[slug] = variant as CategoryVariant;
    }
  });

  return normalized;
};

const decodeHtmlEntities = (text?: string | null): string | undefined => {
  if (typeof text !== 'string' || text.length === 0) {
    return text ?? undefined;
  }

  try {
    if (typeof DOMParser !== 'undefined') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      return doc.documentElement.textContent || doc.body?.textContent || text;
    }
  } catch (error) {
    console.warn('Failed to decode HTML entities:', error);
  }

  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
  };

  return text.replace(/&(?:amp|lt|gt|quot|#39);/g, entity => entities[entity] || entity);
};

const sanitizeEventMetadata = (metadata?: Record<string, EventMetadata> | null): Record<string, EventMetadata> => {
  if (!metadata) return {};

  return Object.entries(metadata).reduce<Record<string, EventMetadata>>((acc, [id, meta]) => {
    acc[id] = {
      ...meta,
      organization: decodeHtmlEntities(meta.organization) ?? meta.organization,
      location: decodeHtmlEntities(meta.location) ?? meta.location,
      cost: decodeHtmlEntities(meta.cost) ?? meta.cost,
    };
    return acc;
  }, {});
};

export function useEvents(initialFilters: EventFilters = {}): UseEventsResult {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventMetadata, setEventMetadata] = useState<Record<string, EventMetadata>>({});
  const [categoryMappings, setCategoryMappings] = useState<Record<string, CategoryVariant>>({});
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);
  const [filters, setFilters] = useState<EventFilters>(initialFilters);
  const [pagination, setPagination] = useState<UseEventsResult['pagination']>();
  const generation = useRef(0);
  const controller = useRef<AbortController>();
  const moreInFlight = useRef(false);
  const inputKey = JSON.stringify(initialFilters);
  useEffect(() => { setFilters(initialFilters); }, [inputKey]);

  const fetchPage = useCallback(async (append = false, refresh = false) => {
    if (append && (moreInFlight.current || !pagination?.nextPage)) return;
    if (!append) { controller.current?.abort(); generation.current++; moreInFlight.current = false; setLoadingMore(false); setPagination(undefined); }
    const current = generation.current;
    const abort = append ? controller.current! : new AbortController();
    if (!append) controller.current = abort;
    if (append) { moreInFlight.current = true; setLoadingMore(true); } else setLoading(true);
    setError(null);
    try {
      let page = append ? pagination!.nextPage! : (filters.page || 1);
      const collected: Event[] = []; let metadata: Record<string, EventMetadata> = {}; let colors: Record<string, CategoryVariant> = {};
      let response;
      do {
        response = await eventsAPI.fetchEvents({ ...filters, page }, { refresh, signal: abort.signal });
        if (current !== generation.current || abort.signal.aborted) return;
        for (const item of response.events) {
          if (response.performance?.server_processed) {
            const event = item as unknown as Event;
            collected.push({ ...event, startDate: new Date(event.startDate), endDate: new Date(event.endDate) });
          } else {
            const raw = item as import('@/services/eventsApi').WordPressEvent;
            const event = eventsAPI.transformWordPressEventToEvent(raw);
            collected.push(event); metadata[event.id] = eventsAPI.transformWordPressEventToMetadata(raw);
          }
        }
        metadata = { ...metadata, ...sanitizeEventMetadata(response.eventMetadata) };
        colors = { ...colors, ...normalizeCategoryMappings(response.categoryMappings) };
        page = response.pagination?.nextPage || 0;
        // Calendar views load every bounded page in the visible date range.
        // Upcoming lists fetch one page at a time.
      } while (filters.view !== 'list' && page);
      const merge = (previous: Event[]) => Array.from(new Map([...previous, ...collected].map(event => [event.id, event])).values());
      setEvents(previous => merge(append ? previous : []));
      setEventMetadata(previous => ({ ...(append ? previous : {}), ...metadata }));
      setCategoryMappings(previous => ({ ...(append ? previous : {}), ...colors }));
      setTotal(response.total); setPages(response.pages); setPagination(response.pagination);
    } catch (err) {
      if (current !== generation.current || abort.signal.aborted) return;
      if (!append) { setEvents([]); setEventMetadata({}); setCategoryMappings({}); setTotal(0); setPages(0); setPagination(undefined); }
      setError(err instanceof Error ? err.message : 'Failed to load events');
    } finally {
      if (current === generation.current && !abort.signal.aborted) { setLoading(false); setLoadingMore(false); moreInFlight.current = false; }
    }
  }, [JSON.stringify(filters), JSON.stringify(pagination)]);

  // Pagination updates must not restart the base request.
  useEffect(() => {
    fetchPage();
    return () => { generation.current++; controller.current?.abort(); };
  }, [JSON.stringify(filters)]);
  const refetch = useCallback(() => { fetchPage(false, true); }, [fetchPage]);
  const loadMore = useCallback(() => { fetchPage(true); }, [fetchPage]);
  const updateFilters = useCallback((value: EventFilters) => setFilters(previous => ({ ...previous, ...value, page: 1 })), []);
  return { events, eventMetadata, categoryMappings, loading, loadingMore, error, total, pages, pagination,
    hasMore: pagination?.hasMore || false, refetch, loadMore, setFilters: updateFilters };
}
