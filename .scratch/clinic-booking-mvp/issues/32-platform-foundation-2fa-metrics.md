# 32: Platform foundation, 2FA, and metrics

**What to build:** A seeded Super Admin signs in to the separate admin app with TOTP and sees platform metrics, with no access to clinic routes.

**Blocked by:** 11 — Booking creation and confirmation, 28 — Tap checkout, webhooks, and upgrade proration, 30 — Dunning and grace period, 31 — SMS Credit packs and ledger

**Status:** ready-for-agent

- [ ] A seeded Super Admin can sign in with email, password, and TOTP.
- [ ] A non-Super-Admin is rejected from the admin app and platform API.
- [ ] Metrics cover clinic counts, Subscriptions by Plan and status, MRR, 30-day Appointments, failed Payments, overdue Invoices, and SMS consumption.
- [ ] Metrics are computed from PostgreSQL and cached for five minutes.
- [ ] The admin app has its own layout and session, distinct from the clinic workspace.
- [ ] Super Admin access to clinic routes is denied.
- [ ] No third-party analytics vendor is used.
