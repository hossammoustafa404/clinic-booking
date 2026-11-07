# 15: Reminder lifecycle

**What to build:** Reminders are scheduled at the configured offsets, dispatched every minute with `SKIP LOCKED`, cancelled and recreated on reschedule, cancelled on cancellation, retried, and visible when failed.

**Blocked by:** 13 — Patient cancel and reschedule, 14 — Booking confirmations and Notification records

**Status:** ready-for-agent

- [ ] Reminder rows are created for each configured offset, defaulting to 24 hours and 2 hours.
- [ ] The dispatcher claims due `SCHEDULED` rows with `FOR UPDATE SKIP LOCKED` and marks them `QUEUED`.
- [ ] A restart does not lose pending Reminders.
- [ ] Reschedule cancels old Reminders and creates new ones; cancellation cancels all pending Reminders.
- [ ] Provider failures retry with exponential backoff up to three attempts; non-retryable 4xx responses fail immediately.
- [ ] The clinic can see failed Reminders and retry where allowed.
- [ ] No Reminder is sent for cancelled, completed, or no-show Appointments.
