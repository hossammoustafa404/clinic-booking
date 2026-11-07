# 11: Booking creation and confirmation

**What to build:** A verified patient confirms a Booking; the API upserts the Patient, creates the Appointment, manage token, and initial status history, and the clinic sees the new Appointment.

**Blocked by:** 07 — Availability engine and staff preview, 09 — Public availability browsing, 10 — OTP challenge and verification

**Status:** ready-for-agent

- [ ] Booking requires a valid booking token, Service, Practitioner, start time, name, and phone.
- [ ] The Patient is upserted by clinic and normalized phone, and a repeat booking reuses the row.
- [ ] The Appointment stores Service name, duration, and buffer snapshots and starts as `CONFIRMED`.
- [ ] The PostgreSQL exclusion constraint rejects overlapping confirmed Appointments with 409 `SLOT_UNAVAILABLE`.
- [ ] Concurrent requests for the same Slot produce exactly one success.
- [ ] `Idempotency-Key` replays return the original result within 24 hours.
- [ ] The confirmation screen shows clinic, Practitioner, Service, local time, and the manage link.
- [ ] The clinic sees the new Appointment in a minimal workspace list.
