# 34: Platform Plans and Subscriptions

**What to build:** A Super Admin manages Plans and inspects Subscriptions, with manual changes and forced cancellation audited.

**Blocked by:** 29 — Downgrade, cancel, resume, and expiry, 32 — Platform foundation, 2FA, and metrics

**Status:** ready-for-agent

- [ ] Plans can be created and edited with prices, limits, and feature flags.
- [ ] A Plan code is immutable after creation.
- [ ] Deactivating a Plan prevents new Subscriptions without migrating existing clinics.
- [ ] Subscriptions are listable and inspectable by status and Plan.
- [ ] Forced cancellation requires a reason and is audited.
- [ ] Price and limit changes apply to new Invoices and enforcement immediately.
- [ ] Existing Invoices are never rewritten.
