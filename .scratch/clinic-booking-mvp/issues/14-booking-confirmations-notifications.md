# 14: Booking confirmations and Notification records

**What to build:** A Booking creates email and SMS confirmation Notifications, sends a staff new-booking notice, and exposes a clinic Notification delivery screen.

**Blocked by:** 11 — Booking creation and confirmation

**Status:** ready-for-agent

- [ ] Confirmation rows are created for the patient's preferred locale with fallback to the clinic default.
- [ ] Email uses the mail queue and SMS uses the SMS queue; nothing sends inline.
- [ ] The Practitioner and Owners receive a staff new-booking notice.
- [ ] The clinic screen shows channel, kind, masked recipient, status, scheduled and sent time, and error.
- [ ] Staff can resend a confirmation.
- [ ] Fake providers capture payloads in tests.
- [ ] Notification logs never include phone numbers, emails, or tokens.
