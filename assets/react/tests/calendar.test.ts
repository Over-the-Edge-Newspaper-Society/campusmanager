import { test } from 'node:test';
import assert from 'node:assert/strict';
import { eventRange } from '../src/utils/eventRange';
import { serializeCalendar } from '../src/utils/ical';

test('visible ranges cross month/year boundaries and lists have no end cutoff', () => {
  assert.deepEqual(eventRange('week', new Date(2026, 11, 31)), { start_date: '2026-12-27', end_date: '2027-01-02' });
  assert.deepEqual(eventRange('month', new Date(2026, 8, 28)), { start_date: '2026-08-30', end_date: '2026-10-03' });
  assert.deepEqual(eventRange('list', new Date(2026, 8, 28)), { start_date: '2026-09-28' });
});
test('iCalendar escapes text, folds Unicode by octets, and carries status', () => {
  const result = serializeCalendar({ id: '1', title: 'Title, semicolon; slash\\' + '日本語'.repeat(40), description: 'line one\r\nSTATUS:INJECTED', startDate: new Date('2026-10-01T23:00:00Z'), endDate: new Date('2026-10-02T01:00:00Z'), status: 'canceled' });
  assert.ok(result.includes('DESCRIPTION:line one\\nSTATUS:INJECTED\r\n'));
  assert.ok(result.includes('SUMMARY:Title\\, semicolon\\; slash\\\\'));
  assert.ok(result.includes('STATUS:CANCELLED\r\n'));
  assert.ok(result.includes('DTEND:20261002T010000Z'));
  for (const line of result.split('\r\n')) assert.ok(Buffer.byteLength(line) <= 75);
});
test('all-day calendar output uses exclusive date-only end', () => {
  const result = serializeCalendar({ id:'1', title:'All day', isAllDay:true, startDate:new Date(2026,8,28), endDate:new Date(2026,8,28,23,59) });
  assert.ok(result.includes('DTSTART;VALUE=DATE:20260928'));
  assert.ok(result.includes('DTEND;VALUE=DATE:20260929'));
});
test('API cache separates organizations, pages, sizes, bounds, and refresh', async () => {
  (globalThis as any).window = { unbcCalendarData: { apiUrl: 'https://example.test/wp-json/unbc-events/v1/' } };
  let requests = 0;
  globalThis.fetch = async (url) => { requests++; return new Response(JSON.stringify({ events:[], total:0, pages:0, url }), {status:200}); };
  const { EventsAPI } = await import('../src/services/eventsApi'); const api = new EventsAPI();
  const queries = [{organization:'10', page:1}, {organization:'20', page:1}, {organization:'10',page:2}, {organization:'10',page:1,per_page:10}, {organization:'10',page:1,start_date:'2026-10-01'}, {organization:'10',page:1,view:'list' as const}];
  for (const query of queries) await api.fetchEvents(query);
  assert.equal(requests, queries.length);
  await api.fetchEvents(queries[0]); assert.equal(requests, queries.length);
  await api.fetchEvents(queries[0],{refresh:true}); assert.equal(requests,queries.length+1);
});
