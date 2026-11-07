# 12: Manage link view and calendar file

**What to build:** A patient opens the token-scoped manage page, sees the Appointment in any status, and downloads a single-event ICS file.

**Blocked by:** 11 — Booking creation and confirmation

**Status:** ready-for-agent

- [ ] The raw manage token is returned once and stored only as a SHA-256 hash.
- [ ] A valid token shows the Appointment; an expired or revoked token returns 404.
- [ ] The page sets `noindex` and `no-referrer`.
- [ ] The ICS file contains one event and no patient notes or internal data.
- [ ] The manage page shows clinic contact details.
- [ ] Tests cover valid, expired, revoked, and cross-clinic tokens.
