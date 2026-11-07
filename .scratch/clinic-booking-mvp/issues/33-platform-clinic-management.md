# 33: Platform clinic management

**What to build:** A Super Admin lists, searches, and inspects clinics without Patient data, suspends and reactivates, changes Plans manually, and extends periods.

**Blocked by:** 26 — Plan limits and usage, 29 — Downgrade, cancel, resume, and expiry, 32 — Platform foundation, 2FA, and metrics

**Status:** ready-for-agent

- [ ] Clinic list supports search and filters by Plan, status, and creation date.
- [ ] Clinic detail shows profile, Owner, member counts, usage, Subscription, Invoices, Payments, credit ledger, and audit entries.
- [ ] Patient names, phones, emails, notes, and Appointment clinical context are never shown.
- [ ] Suspend and reactivate require a reason and are audited.
- [ ] Suspension unpublishes the booking page and shows a suspended workspace screen.
- [ ] Manual Plan change and period extension require a reason and are audited.
- [ ] Reactivation does not silently republish the booking page.
