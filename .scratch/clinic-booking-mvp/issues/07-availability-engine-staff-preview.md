# 07: Availability engine and staff preview

**What to build:** The API computes Slots from Working Hours, Time Off, confirmed Appointments, the 15-minute grid, minimum notice, and the booking horizon; staff can preview availability.

**Blocked by:** 05 — Practitioners and Service assignments, 06 — Working Hours and Time Off

**Status:** ready-for-agent

- [ ] Slots are generated on a 15-minute grid and fit inside Working Hours after buffers.
- [ ] Time Off and confirmed Appointment occupied ranges remove Slots.
- [ ] Minimum notice and the booking horizon clamp the result.
- [ ] Requests wider than 31 days are rejected.
- [ ] Cairo DST transitions are covered by deterministic unit tests.
- [ ] Staff can preview availability for a Service and Practitioner in the workspace.
- [ ] Cross-tenant access returns 404 or 403.
