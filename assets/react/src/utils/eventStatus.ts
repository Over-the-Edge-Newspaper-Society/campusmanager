export type EventScheduleStatus = 'scheduled' | 'canceled' | 'postponed';

/** Normalizes the API's event_status (both spellings of cancelled are accepted). */
export function eventScheduleStatus(status?: string | null): EventScheduleStatus {
  const value = (status || '').toLowerCase();
  if (value === 'canceled' || value === 'cancelled') return 'canceled';
  if (value === 'postponed') return 'postponed';
  return 'scheduled';
}

export function eventStatusLabel(status?: string | null): string | null {
  const normalized = eventScheduleStatus(status);
  if (normalized === 'canceled') return 'Cancelled';
  if (normalized === 'postponed') return 'Postponed';
  return null;
}

/** Accessible name for an event card, announcing a cancelled/postponed state first. */
export function eventAriaLabel(title: string, status?: string | null): string {
  const label = eventStatusLabel(status);
  return label ? `View ${title} (${label})` : `View ${title}`;
}
