# 23: Reports

**What to build:** Staff run on-screen date-range reports by status, Practitioner, Service, day, and peak hour, plus new versus returning Patients and no-show rate.

**Blocked by:** 22 — Dashboard

**Status:** ready-for-agent

- [ ] Reports accept a date range and reject invalid ranges.
- [ ] Grouping works by status, Practitioner, Service, day, and peak hour.
- [ ] New versus returning Patients and no-show rate are correct.
- [ ] Aggregation happens in PostgreSQL, not in JavaScript over full tables.
- [ ] Reports are on-screen only; no CSV or PDF export.
- [ ] Cross-tenant access returns 404 or 403.
