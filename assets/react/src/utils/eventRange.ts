export function localDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
export function eventRange(view: string, date: Date) {
  const start = new Date(date); const end = new Date(date);
  if (view === 'list') return { start_date: localDate(start) };
  if (view === 'month') {
    start.setDate(1); start.setDate(start.getDate() - start.getDay());
    end.setMonth(end.getMonth() + 1, 0); end.setDate(end.getDate() + 6 - end.getDay());
  } else if (view === 'week') {
    start.setDate(start.getDate() - start.getDay());
    end.setFullYear(start.getFullYear(), start.getMonth(), start.getDate() + 6);
  }
  return { start_date: localDate(start), end_date: localDate(end) };
}

export function occursOn(event: { startDate: Date; endDate: Date }, day: Date): boolean {
  const start = new Date(day); start.setHours(0, 0, 0, 0);
  const end = new Date(start); end.setDate(end.getDate() + 1);
  return event.startDate < end && (event.endDate > start || event.startDate.getTime() === start.getTime());
}
export function dayHours(event: { startDate: Date; endDate: Date }, day: Date): [number, number] {
  const start = new Date(day); start.setHours(0, 0, 0, 0);
  const end = new Date(start); end.setDate(end.getDate() + 1);
  const hours = (date: Date) => date.getHours() + date.getMinutes() / 60;
  const first = event.startDate <= start ? 0 : hours(event.startDate);
  const last = event.endDate >= end ? 24 : hours(event.endDate);
  return [first, Math.max(first + 0.25, last)];
}
