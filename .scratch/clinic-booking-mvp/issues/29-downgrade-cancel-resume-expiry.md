# 29: Downgrade, cancel, resume, and expiry

**What to build:** The Owner schedules a downgrade, cancels at period end, resumes before then, and the clinic moves to the new Plan or Free at period end.

**Blocked by:** 28 — Tap checkout, webhooks, and upgrade proration

**Status:** ready-for-agent

- [ ] Downgrade is scheduled for the end of the current period with no refund.
- [ ] Cancel is scheduled for period end and keeps paid features until then.
- [ ] Resume undoes a scheduled cancellation.
- [ ] At period end the Plan switches or the Subscription becomes `CANCELED` and the clinic moves to Free.
- [ ] New limits are enforced immediately after the switch.
- [ ] The Owner sees the pending change and the effective date.
- [ ] Tests cover each transition.
