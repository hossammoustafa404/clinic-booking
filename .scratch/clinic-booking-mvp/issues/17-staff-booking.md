# 17: Staff Booking

**What to build:** A Clinic Admin or Practitioner creates a phone or walk-in Appointment, bypassing patient minimum notice but respecting the horizon, Working Hours, Time Off, and overlap rules.

**Blocked by:** 07 — Availability engine and staff preview, 11 — Booking creation and confirmation, 15 — Reminder lifecycle, 16 — Team invitations, roles, and clinic switcher

**Status:** ready-for-agent

- [ ] Staff can search or create a Patient and create a `STAFF` Appointment.
- [ ] Staff may bypass minimum notice but cannot book in the past, outside the horizon, outside Working Hours, or over Time Off.
- [ ] Overlap is rejected by the exclusion constraint with 409.
- [ ] The Appointment is confirmed and confirmation and reminder Notifications are scheduled.
- [ ] The Appointment appears in the clinic list and detail view.
- [ ] Cross-tenant access returns 404 or 403.
