/**
 * Keeps the calendar's view, date, filters and search in the page URL so a
 * view can be shared or bookmarked and Back/Forward step through navigation.
 * Parameters are prefixed (cm_*) to avoid clashing with WordPress query vars.
 */
export type CalendarView = 'month' | 'week' | 'day' | 'list';

export interface CalendarUrlState {
  view: CalendarView;
  date: Date;
  category: string;
  organization: string;
  search: string;
}

export const URL_KEYS = { view: 'cm_view', date: 'cm_date', category: 'cm_category', organization: 'cm_org', search: 'cm_q' } as const;
const VIEWS: CalendarView[] = ['month', 'week', 'day', 'list'];

export function formatLocalDate(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function parseLocalDate(value: string | null): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || '');
  if (!match) return null;
  const date = new Date(+match[1], +match[2] - 1, +match[3]);
  return date.getMonth() === +match[2] - 1 ? date : null;
}

/** Reads state from a query string, falling back to `defaults` for anything missing or invalid. */
export function readCalendarUrlState(search: string, defaults: CalendarUrlState, allowedViews: CalendarView[] = VIEWS): CalendarUrlState {
  const params = new URLSearchParams(search);
  const view = params.get(URL_KEYS.view) as CalendarView | null;
  const clean = (value: string | null, max: number) => (value || '').trim().slice(0, max);
  const category = clean(params.get(URL_KEYS.category), 100);
  const organization = clean(params.get(URL_KEYS.organization), 20);
  return {
    view: view && allowedViews.includes(view) ? view : defaults.view,
    date: parseLocalDate(params.get(URL_KEYS.date)) || defaults.date,
    category: /^[a-z0-9-]+$/.test(category) ? category : defaults.category,
    organization: /^\d+$/.test(organization) ? organization : defaults.organization,
    search: params.has(URL_KEYS.search) ? clean(params.get(URL_KEYS.search), 200) : defaults.search,
  };
}

/**
 * Returns `href` with the calendar parameters set. Values equal to the block's
 * defaults are left out, and today's date is omitted so links stay current.
 */
export function writeCalendarUrlState(href: string, state: CalendarUrlState, defaults: CalendarUrlState, today = new Date()): string {
  const url = new URL(href);
  const set = (key: string, value: string, fallback: string) => {
    if (value && value !== fallback) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  };
  set(URL_KEYS.view, state.view, defaults.view);
  set(URL_KEYS.date, state.view === 'list' ? '' : formatLocalDate(state.date), formatLocalDate(today));
  set(URL_KEYS.category, state.category, defaults.category);
  set(URL_KEYS.organization, state.organization, defaults.organization);
  set(URL_KEYS.search, state.search, defaults.search);
  return url.toString();
}

/** A navigation (new history entry) changes the view or date; filters only replace the entry. */
export function isNavigation(previous: CalendarUrlState, next: CalendarUrlState): boolean {
  return previous.view !== next.view || (next.view !== 'list' && formatLocalDate(previous.date) !== formatLocalDate(next.date));
}

/** Subscribe URL for the calendar feed with the current filters. */
export function calendarFeedUrl(apiUrl: string, filters: { category?: string; organization?: string }): string {
  const url = new URL('calendar.ics', apiUrl.endsWith('/') ? apiUrl : `${apiUrl}/`);
  if (filters.category && filters.category !== 'all') url.searchParams.set('category', filters.category);
  if (filters.organization && filters.organization !== 'all') url.searchParams.set('organization', filters.organization);
  return url.toString();
}

export function webcalUrl(httpUrl: string): string {
  return httpUrl.replace(/^https?:/, 'webcal:');
}
