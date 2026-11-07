# 19: Appointment lifecycle

**What to build:** Staff reschedule, cancel with a reason, complete after the start, mark no-show after the end, and add an internal note; every transition is recorded.

**Blocked by:** 15 — Reminder lifecycle, 18 — Calendar and Appointment list

**Status:** ready-for-agent

- [ ] Staff reschedule changes the time only and re-validates the Slot.
- [ ] Cancellation requires a reason and sets `CANCELLED_BY_CLINIC`.
- [ ] Completion is allowed only after the start; no-show only after the end.
- [ ] Terminal statuses cannot return to `CONFIRMED`.
- [ ] Every transition writes a status-history row with actor and reason.
- [ ] Internal notes are visible to staff only and never sent to patients.
- [ ] Pending Reminders are cancelled on cancellation, completion, and no-show.
- [ ] Cross-tenant access returns 404 or 403.
