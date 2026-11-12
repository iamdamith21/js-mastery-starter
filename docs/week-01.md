# Week 01 · JavaScript logic + CampusDesk

> Daily entry = four short lines, about five minutes. Update test status only after you run it.

## Day 01 · Fundamentals · 2026-11-07

- **Learned:** Functions, `return`, comparisons, template literals.
- **Built / tested:** `calculateTotal()`, `isUrgent()`, `formatTicket()`; three example outputs confirmed in submitted code review.
- **Mistake → fix:** `isUrgent()` used unnecessary `if/else`; a direct boolean expression is clearer.
- **Next:** Implement input validation.

## Day 02 · Validation · 2026-11-08

- **Learned:** `typeof`, `.trim()`, `.length`, guard clauses, `&&`, `.includes()`.
- **Built / tested:** `validateTitle()` in `src/ticket-engine.js`; `canSubmitTicket()` in `practice/week 01/day-02.js`. Code is present and logically correct; execute `npm run day2` and `npm run test:day2` locally.
- **Mistake → fix:** Earlier `title.typeof` / `length()` mistakes corrected with `typeof title` / `.length` and trimmed length.
- **Next:** Day 03 — `getOpenTickets()` and `countByStatus()`.

## Day 03 · Arrays + objects · 2026-11-09

- **Learned:** `.filter()` selects objects; `.map()` transforms elements; `for...of` iterates over array items.
- **Built / tested:** `getOpenTickets()` and `countByStatus()` — corrected focused tests pass.
- **Mistake → fix:** Returned IDs instead of ticket objects; converted counts into strings; missed empty-array return.
- **Next:** Re-test corrected functions, then proceed to Day 04 `createTicket()`.

## Day 04 · Creating tickets · 2026-11-12

- **Learned:** Object spread, immutability, validation and `throw`.
- **Built / tested:** `createTicket()` — record tests passed.
- **Mistake → fix:** Forgot to validate priority; added an allowed-priority check before returning the ticket.
- **Next:** Day 05 — update and remove tickets without mutation.

## Day 05 · Immutable updates · 2026-11-11

- **Learned:**
- **Built / tested:**
- **Mistake → fix:**
- **Next:**

## Day 06 · Filtering + modules · 2026-11-12

- **Learned:**
- **Built / tested:**
- **Mistake → fix:**
- **Next:**

## Day 07 · Integration · 2026-11-13

- **Learned:**
- **Built / tested:**
- **Mistake → fix:**
- **Next:**

## Weekly review (2 minutes on Day 07)

- **Days completed:** /7
- **Strongest skill:**
- **Review next week:**
