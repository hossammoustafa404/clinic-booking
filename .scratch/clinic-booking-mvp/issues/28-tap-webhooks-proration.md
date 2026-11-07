# 28: Tap checkout, webhooks, and upgrade proration

**What to build:** The Owner pays with Tap in test mode; signed webhooks are stored idempotently and processed asynchronously; paid-Plan upgrades are prorated.

**Blocked by:** 27 — Checkout, Invoices, and VAT

**Status:** ready-for-agent

- [ ] Tap test-mode checkout completes through the provider interface.
- [ ] Webhook signatures are verified and raw card data is never stored.
- [ ] The same provider event cannot be applied twice.
- [ ] Processing runs asynchronously and failures are visible.
- [ ] Upgrading from a paid Plan charges the remaining days only and does not move the period end.
- [ ] Proration is computed in piasters with VAT added at 14%.
- [ ] Tests cover idempotency and proration.
