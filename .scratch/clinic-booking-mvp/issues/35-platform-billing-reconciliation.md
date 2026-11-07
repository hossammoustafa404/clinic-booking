# 35: Platform billing reconciliation

**What to build:** A Super Admin reconciles Invoices and Payments, records manual Payments, inspects billing events, and reprocesses failures.

**Blocked by:** 28 — Tap checkout, webhooks, and upgrade proration, 30 — Dunning and grace period, 32 — Platform foundation, 2FA, and metrics

**Status:** ready-for-agent

- [ ] Invoices and Payments are listable and filterable.
- [ ] An Invoice can be marked paid or void with a reason.
- [ ] A manual Payment can be recorded for a bank transfer.
- [ ] Billing events show provider, type, status, error, and sanitized payload.
- [ ] A failed event can be reprocessed idempotently.
- [ ] Raw card data is never displayed or stored.
- [ ] Every manual action is audited.
