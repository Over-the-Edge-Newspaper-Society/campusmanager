import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { generateRepeats } = require('../../js/event-schedule.js');
const first = { start_date: '2026-10-01', start_time: '18:00', end_date: '2026-10-01', end_time: '20:00' };

test('weekly repeats run until the end date inclusive and skip existing dates', () => {
  const result = generateRepeats(first, 'weekly', '2026-10-29', ['2026-10-01', '2026-10-15']);
  assert.deepEqual(result.rows.map((row: { start_date: string }) => row.start_date), ['2026-10-08', '2026-10-22', '2026-10-29']);
  assert.equal(result.rows[0].start_time, '18:00');
  assert.equal(result.rows[0].end_time, '20:00');
  assert.equal(result.error, '');
});

test('repeats keep multi-day spans and cross DST without drifting', () => {
  const span = { ...first, start_date: '2026-10-30', end_date: '2026-10-31' };
  const result = generateRepeats(span, 'weekly', '2026-11-14', []);
  assert.deepEqual(result.rows.map((row: { start_date: string; end_date: string }) => [row.start_date, row.end_date]),
    [['2026-11-06', '2026-11-07'], ['2026-11-13', '2026-11-14']]);
});

test('monthly repeats keep the day of month and skip short months', () => {
  const result = generateRepeats({ ...first, start_date: '2026-01-31', end_date: '2026-01-31' }, 'monthly', '2026-06-30', []);
  assert.deepEqual(result.rows.map((row: { start_date: string }) => row.start_date), ['2026-03-31', '2026-05-31']);
});

test('biweekly, daily and invalid input', () => {
  assert.equal(generateRepeats(first, 'biweekly', '2026-10-29', []).rows.length, 2);
  assert.equal(generateRepeats(first, 'daily', '2026-10-05', []).rows.length, 4);
  assert.match(generateRepeats(null, 'weekly', '2026-10-29', []).error, /start date/);
  assert.match(generateRepeats(first, 'weekly', '2026-09-01', []).error, /after/);
  assert.match(generateRepeats({ ...first, start_date: '2026-02-31' }, 'weekly', '2026-03-31', []).error, /start date/);
  const capped = generateRepeats(first, 'daily', '2030-01-01', []);
  assert.equal(capped.rows.length, 366);
  assert.match(capped.error, /366/);
});
