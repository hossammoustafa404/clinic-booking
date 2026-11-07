# 26: Plan limits and usage

**What to build:** The clinic starts on Free with seeded paid Plans; the Owner sees usage and upgrade prompts; practitioner and monthly Appointment limits are enforced server-side.

**Blocked by:** 03 — Clinic onboarding and Free Subscription, 05 — Practitioners and Service assignments, 11 — Booking creation and confirmation, 17 — Staff Booking

**Status:** ready-for-agent

- [ ] Free, Starter, Pro, and Enterprise Plans are seeded with limits and feature flags.
- [ ] The Owner sees the current Plan, usage, and next Invoice placeholder.
- [ ] Creating or reactivating Practitioners beyond the limit returns 402 `PLAN_LIMIT_REACHED`.
- [ ] Online and staff Bookings beyond the monthly Appointment limit return 402.
- [ ] Existing data above a new limit remains readable.
- [ ] The public page shows a contact-the-clinic message when the limit is reached.
- [ ] Limits are enforced in action services, not only the UI.
