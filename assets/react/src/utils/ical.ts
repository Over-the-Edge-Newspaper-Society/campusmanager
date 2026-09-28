import type { Event, EventMetadata } from '../types';
import { localDate } from './eventRange';

// RFC 5545 TEXT escaping and UTF-8 octet-aware content-line folding.
export function icalText(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\r\n|\r|\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
}
export function foldLine(value: string): string {
  const encoder = new TextEncoder(); let line = ''; let bytes = 0; const lines: string[] = [];
  for (const character of value) {
    const size = encoder.encode(character).length;
    if (bytes + size > 75) { lines.push(line); line = ' '; bytes = 1; }
    line += character; bytes += size;
  }
  lines.push(line); return lines.join('\r\n');
}
const utc = (date: Date) => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
export function calendarDates(event: Event): [string, string] {
  if (!event.isAllDay) return [utc(event.startDate), utc(event.endDate)];
  const end = new Date(event.endDate);
  // Stored all-day ends are inclusive unless already at the next midnight.
  if (end <= event.startDate || end.getHours() || end.getMinutes() || end.getSeconds()) end.setDate(end.getDate() + 1);
  return [localDate(event.startDate).replace(/-/g, ''), localDate(end).replace(/-/g, '')];
}
export function serializeCalendar(event: Event, metadata?: EventMetadata, now = new Date()): string {
  const [start, end] = calendarDates(event); const kind = event.isAllDay ? ';VALUE=DATE' : '';
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Campus Manager//Events//EN', 'METHOD:PUBLISH',
    'BEGIN:VEVENT', `UID:${icalText(event.id)}@campus-manager`, `DTSTAMP:${utc(now)}`,
    `DTSTART${kind}:${start}`, `DTEND${kind}:${end}`, `SUMMARY:${icalText(event.title)}`,
    `DESCRIPTION:${icalText(event.description || '')}`, `LOCATION:${icalText(metadata?.location || '')}`,
    `STATUS:${event.status === 'canceled' || event.status === 'cancelled' ? 'CANCELLED' : event.status === 'postponed' ? 'TENTATIVE' : 'CONFIRMED'}`];
  if (metadata?.website && /^https?:\/\/[^\r\n]+$/.test(metadata.website)) lines.push(`URL:${metadata.website}`);
  return [...lines, 'END:VEVENT', 'END:VCALENDAR'].map(foldLine).join('\r\n') + '\r\n';
}
