# 38: Performance hardening

**What to build:** The public booking page and workspace meet the agreed performance budgets, and queries are bounded and indexed.

**Blocked by:** 37 — Accessibility and RTL hardening

**Status:** ready-for-agent

- [ ] Public booking page LCP < 2.5s, CLS < 0.1, and INP < 200ms on simulated 4G.
- [ ] Availability p95 < 300ms for a one-week request.
- [ ] The calendar and heavy charts are lazy-loaded.
- [ ] Public profile and Services cache for 60 seconds and invalidate on update.
- [ ] Availability is never cached.
- [ ] Large-table queries use selects, pagination, and reviewed indexes.
- [ ] Budgets are checked in CI or a repeatable performance test.
