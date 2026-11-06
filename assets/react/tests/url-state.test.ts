import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readCalendarUrlState, writeCalendarUrlState, isNavigation, calendarFeedUrl, webcalUrl, type CalendarUrlState } from '../src/utils/calendarUrlState';

const today = new Date(2026, 10, 6);
const defaults: CalendarUrlState = { view: 'month', date: today, category: 'all', organization: 'all', search: '' };

test('round-trips view, date, filters and search; omits defaults', () => {
  const state: CalendarUrlState = { view: 'week', date: new Date(2026, 11, 3), category: 'music', organization: '42', search: 'games night' };
  const href = writeCalendarUrlState('https://news.example/events/?p=1', state, defaults, today);
  assert.equal(href, 'https://news.example/events/?p=1&cm_view=week&cm_date=2026-12-03&cm_category=music&cm_org=42&cm_q=games+night');
  const back = readCalendarUrlState(new URL(href).search, defaults);
  assert.deepEqual({ ...back, date: back.date.toDateString() }, { ...state, date: state.date.toDateString() });
  assert.equal(writeCalendarUrlState(href, { ...defaults, date: today }, defaults, today), 'https://news.example/events/?p=1');
});

test('invalid or disallowed values fall back to defaults', () => {
  const s = readCalendarUrlState('?cm_view=day&cm_date=2026-02-31&cm_category=<script>&cm_org=abc', defaults, ['month', 'list']);
  assert.equal(s.view, 'month');
  assert.equal(s.date, today);
  assert.equal(s.category, 'all');
  assert.equal(s.organization, 'all');
});

test('only view/date changes are navigations; list view ignores the date', () => {
  const a: CalendarUrlState = { ...defaults, date: new Date(2026, 10, 1) };
  assert.equal(isNavigation(a, { ...a, category: 'music' }), false);
  assert.equal(isNavigation(a, { ...a, date: new Date(2026, 11, 1) }), true);
  assert.equal(isNavigation(a, { ...a, view: 'list' }), true);
  assert.equal(isNavigation({ ...a, view: 'list' }, { ...a, view: 'list', date: new Date(2027, 0, 1) }), false);
});

test('subscribe URL carries filters and uses webcal', () => {
  const url = calendarFeedUrl('https://news.example/wp-json/unbc-events/v1/', { category: 'music,arts', organization: '42' });
  assert.equal(url, 'https://news.example/wp-json/unbc-events/v1/calendar.ics?category=music%2Carts&organization=42');
  assert.equal(calendarFeedUrl('https://news.example/wp-json/unbc-events/v1', { category: '', organization: '' }), 'https://news.example/wp-json/unbc-events/v1/calendar.ics');
  assert.equal(webcalUrl(url).startsWith('webcal://news.example/'), true);
});
