# 27: Checkout, Invoices, and VAT

**What to build:** The Owner upgrades through a fake hosted checkout, pays a full month, and sees a paid VAT Invoice.

**Blocked by:** 26 — Plan limits and usage

**Status:** ready-for-agent

- [ ] Checkout creates a hosted payment session through the provider interface.
- [ ] A successful payment creates a paid Invoice with sequential `INV-YYYY-NNNNNN` numbering.
- [ ] The Invoice shows subtotal, 14% VAT, and total in EGP with integer piasters.
- [ ] Invoice and Payment records are linked and idempotent.
- [ ] The Owner sees Invoice history and detail in the billing screen.
- [ ] Clinic Admins see Plan and usage but not payment details.
- [ ] Tests cover VAT rounding and invoice numbering.
