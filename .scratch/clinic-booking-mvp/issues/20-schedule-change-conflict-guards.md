# 20: Schedule-change conflict guards

**What to build:** Deactivating a Service or Practitioner, shortening Working Hours, or adding Time Off is blocked when it would strand future confirmed Appointments.

**Blocked by:** 04 — Service catalogue, 05 — Practitioners and Service assignments, 06 — Working Hours and Time Off, 19 — Appointment lifecycle

**Status:** ready-for-agent

- [ ] Each operation checks future `CONFIRMED` Appointments against the proposed availability.
- [ ] A conflict returns 409 with the conflicting Appointments listed.
- [ ] The UI shows the conflicts and lets staff resolve them first.
- [ ] Non-conflicting changes still succeed.
- [ ] Time Off bulk creation checks all affected Practitioners.
- [ ] Tests cover each of the four blocking operations.
