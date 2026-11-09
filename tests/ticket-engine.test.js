import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateTitle, getOpenTickets, countByStatus, createTicket,
  updateTicketStatus, removeTicket, filterTickets, countByPriority,
} from '../src/ticket-engine.js';

const SAMPLE = [
  { id: 'T-1', title: 'Broken projector', category: 'it', priority: 'high', status: 'open', createdAt: '2026-11-07T12:00:00.000Z' },
  { id: 'T-2', title: 'Damaged chair', category: 'facilities', priority: 'low', status: 'resolved', createdAt: '2026-11-07T12:10:00.000Z' },
  { id: 'T-3', title: 'WiFi disconnected', category: 'it', priority: 'medium', status: 'in-progress', createdAt: '2026-11-07T12:20:00.000Z' },
  { id: 'T-4', title: 'Broken display', category: 'it', priority: 'high', status: 'open', createdAt: '2026-11-07T12:30:00.000Z' },
];

test('validateTitle enforces type, trim and length', () => {
  assert.equal(validateTitle('  Fixed chair  '), true);
  assert.equal(validateTitle('ab'), false);
  assert.equal(validateTitle('   '), false);
  assert.equal(validateTitle(123), false);
  assert.equal(validateTitle('x'.repeat(101)), false);
});

test('getOpenTickets returns only open tickets without mutating input', () => {
  const before = structuredClone(SAMPLE);
  assert.deepEqual(getOpenTickets(SAMPLE).map(t => t.id), ['T-1', 'T-4']);
  assert.deepEqual(SAMPLE, before);
});

test('countByStatus includes zero-capable status keys', () => {
  assert.deepEqual(countByStatus(SAMPLE), { open: 2, 'in-progress': 1, resolved: 1 });
  assert.deepEqual(countByStatus([]), { open: 0, 'in-progress': 0, resolved: 0 });
});

test('createTicket creates a validated open ticket', () => {
  const input = { title: '  Fix printer  ', category: 'it', priority: 'high' };
  const result = createTicket(input, 'T-99', '2026-11-07T12:00:00.000Z');
  assert.deepEqual(result, {
    id: 'T-99', title: 'Fix printer', category: 'it', priority: 'high',
    status: 'open', createdAt: '2026-11-07T12:00:00.000Z',
  });
  assert.equal(input.title, '  Fix printer  ', 'input must not be mutated');
});

test('createTicket rejects invalid title and priority', () => {
  assert.throws(() => createTicket({ title: '  ', category: 'it', priority: 'high' }, 'T-5', '2026-11-07T12:00:00.000Z'));
  assert.throws(() => createTicket({ title: 'Fix printer', category: 'it', priority: 'urgent' }, 'T-5', '2026-11-07T12:00:00.000Z'));
  assert.throws(() => createTicket({ title: 'Fix printer', category: 'unknown', priority: 'high' }, 'T-5', '2026-11-07T12:00:00.000Z'));
});

test('updateTicketStatus updates one ticket immutably', () => {
  const updated = updateTicketStatus(SAMPLE, 'T-1', 'resolved');
  assert.equal(updated.find(t => t.id === 'T-1').status, 'resolved');
  assert.equal(SAMPLE[0].status, 'open');
  assert.notEqual(updated, SAMPLE);
  assert.notEqual(updated[0], SAMPLE[0]);
  assert.throws(() => updateTicketStatus(SAMPLE, 'T-1', 'invalid'));
});

test('removeTicket returns a filtered array', () => {
  const result = removeTicket(SAMPLE, 'T-2');
  assert.deepEqual(result.map(t => t.id), ['T-1', 'T-3', 'T-4']);
  assert.equal(SAMPLE.length, 4);
});

test('filterTickets matches search, status and priority together', () => {
  assert.deepEqual(filterTickets(SAMPLE, { search: 'BROKEN', status: 'open', priority: 'high' }).map(t => t.id), ['T-1', 'T-4']);
  assert.deepEqual(filterTickets(SAMPLE, { search: 'wifi' }).map(t => t.id), ['T-3']);
  assert.deepEqual(filterTickets(SAMPLE, { status: 'resolved' }).map(t => t.id), ['T-2']);
});

test('filterTickets does not mutate the original input', () => {
  const before = structuredClone(SAMPLE);
  filterTickets(SAMPLE, { priority: 'high' });
  assert.deepEqual(SAMPLE, before);
});

test('countByPriority includes all priorities and zeros', () => {
  assert.deepEqual(countByPriority(SAMPLE), { high: 2, medium: 1, low: 1 });
  assert.deepEqual(countByPriority([]), { high: 0, medium: 0, low: 0 });
});
