/**
 * CampusDesk ticket engine.
 *
 * IMPORTANT: These functions are intentionally NOT implemented.
 * Build them independently on the indicated training days.
 * Run `npm test` on Day 12 to verify your work.
 *
 * Ticket data shape:
 * {
 *   id: 'T-001',
 *   title: 'Broken projector',
 *   category: 'it', // 'it' | 'facilities' | 'other'
 *   priority: 'high', // 'low' | 'medium' | 'high'
 *   status: 'open', // 'open' | 'in-progress' | 'resolved'
 *   createdAt: '2026-11-07T12:00:00.000Z'
 * }
 */

// Day 2: true for string titles with trimmed length 3 through 100 inclusive.
export function validateTitle(title) {
  if (typeof title !== "string") {
    return false;
  }

  const trimmedTitle = title.trim();

  return trimmedTitle.length >= 3 && trimmedTitle.length <= 100;
}

// Day 3: return a NEW array of tickets with status === 'open'.
export function getOpenTickets(tickets) {
  return tickets.filter((ticket) => ticket.status === "open");
}

// Day 3: return { open: number, 'in-progress': number, resolved: number }.
export function countByStatus(tickets) {
  const counts = {
    open: 0,
    "in-progress": 0,
    resolved: 0,
  };

  for (const ticket of tickets) {
    if (Object.hasOwn(counts, ticket.status)) {
      counts[ticket.status]++;
    }
  }
  return counts;
}

// Day 4: validate inputs and return a NEW ticket with status 'open'.
// Valid categories: it, facilities, other. Valid priorities: low, medium, high.
// Throw Error for an invalid title, category, or priority.
export function createTicket(input, id, createdAt) {
  throw new Error("TODO: implement createTicket (Day 4)");
}

// Day 5: return a NEW array and a NEW version of the matching ticket.
// Allowed statuses: open, in-progress, resolved.
// Throw Error for invalid status; leave all tickets unchanged if ID is missing.
export function updateTicketStatus(tickets, id, status) {
  throw new Error("TODO: implement updateTicketStatus (Day 5)");
}

// Day 5: return a NEW array excluding the ticket with the specified id.
export function removeTicket(tickets, id) {
  throw new Error("TODO: implement removeTicket (Day 5)");
}

// Day 6 / Day 10: apply AND-based search/status/priority filtering.
// Search: case-insensitive substring of title; defaults to ''.
// Status/priority default to 'all'; never mutate input.
export function filterTickets(
  tickets,
  { search = "", status = "all", priority = "all" } = {},
) {
  throw new Error("TODO: implement filterTickets (Day 6/10)");
}

// Day 7: count by priority; always include high, medium, low even if zero.
export function countByPriority(tickets) {
  throw new Error("TODO: implement countByPriority (Day 7)");
}
