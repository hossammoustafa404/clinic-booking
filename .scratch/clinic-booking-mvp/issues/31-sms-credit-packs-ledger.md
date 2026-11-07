# 31: SMS Credit packs and ledger

**What to build:** The Owner buys SMS Credit packs, sees the ledger, receives Plan grants, and SMS is skipped at zero balance while email continues.

**Blocked by:** 15 — Reminder lifecycle, 27 — Checkout, Invoices, and VAT

**Status:** ready-for-agent

- [ ] Active SMS Credit packs are seeded and purchasable through checkout.
- [ ] A successful purchase creates an Invoice line and a ledger entry.
- [ ] Plan grants add credits on a paid Invoice.
- [ ] Credits decrement when the provider accepts an SMS, not when queued.
- [ ] Zero balance marks SMS `SKIPPED`, keeps email working, and shows a low-balance banner.
- [ ] The ledger is idempotent and shows reason, delta, and balance after.
- [ ] Cross-tenant access returns 404 or 403.
