# 13: Patient cancel and reschedule

**What to build:** A patient cancels before the cutoff and reschedules within the configured limit and cutoff.

**Blocked by:** 12 — Manage link view and calendar file

**Status:** ready-for-agent

- [ ] Cancellation before the cutoff sets `CANCELLED_BY_PATIENT`; after the cutoff returns 409 `CANCELLATION_CUTOFF_PASSED`.
- [ ] Reschedule changes only the time and keeps the Patient, Service, and Practitioner.
- [ ] Reschedule increments `rescheduledCount` and rejects beyond the configured limit with `RESCHEDULE_LIMIT_REACHED`.
- [ ] Reschedule after the cutoff returns 409.
- [ ] The new time is re-validated and protected by the exclusion constraint.
- [ ] The clinic sees the updated status and time.
- [ ] Cross-clinic tokens cannot act on the Appointment.
