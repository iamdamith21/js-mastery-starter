# CampusDesk · JavaScript Mastery (4-week workspace)

Build CampusDesk while practising JavaScript. **Your finished Day 01 and Day 02 code is preserved.**

## Project map

- `practice/week 01/day-XX.js` — independent daily exercises; run from terminal.
- `src/ticket-engine.js` — shared CampusDesk business logic; expand gradually.
- `app/` — browser application; begin Week 2.
- `tests/` — automated checks; many intentionally fail until later lessons.
- `docs/week-01.md` ... `docs/week-04.md` — 5-minute learning logs (one per week).

## Start (VS Code terminal at project root)

```powershell
node -v
npm run day1
npm run day2
npm run test:day2
npm run dev
```

Open `http://127.0.0.1:5500` after `npm run dev`. No `npm install` needed (no dependencies).

**Expected:** `npm run day1` and `npm run day2` print practice results; `npm run test:day2` verifies title validation. Running `npm test` right now will fail on unfinished future tasks—that is normal.

## Development sequence

| Week | Focus | What you work on |
| --- | --- | --- |
| 01 | Logic | Arrays, objects, ticket creation, updating, filtering; `practice/week 01/`, `src/` |
| 02 | Browser UI | DOM, events, localStorage, tests; `app/`, `tests/` |
| 03 | Async and API | **Proposed next phase:** learn fetch/async/error handling; extend only after Week 2 review |
| 04 | Polish and portfolio | **Proposed next phase:** refactor, accessibility, testing, deployment documentation |

Weeks 03–04 are proposed learning directions, **not implemented features or fixed assignments** in the uploaded starter.

## Five-minute closeout (every day)

1. Run today's practice and relevant tests (do not claim untested code passed).
2. Update **one day** in the matching `docs/week-XX.md` file: Learned / Built + test / Mistake → fix / Next.
3. `git status` → `git add <changed files>` → `git commit -m "learn(dayXX): <short outcome>"`.

Day 01 and Day 02 are already complete in the uploaded code. If you reset Git now, start with **one honest baseline commit** including the existing work; do not fabricate older commit history. Future daily commits will be separate.
