# 30: Dunning and grace period

**What to build:** A failed renewal keeps the Invoice open, moves the Subscription to past due, emails the Owner, retries on day 0, 3, and 7, and expires to Free after the grace period.

**Blocked by:** 28 — Tap checkout, webhooks, and upgrade proration, 29 — Downgrade, cancel, resume, and expiry

**Status:** ready-for-agent

- [ ] A failed renewal leaves the Invoice `OPEN` and sets the Subscription to `PAST_DUE`.
- [ ] The Owner receives an email and sees a grace-period banner.
- [ ] Retries occur on day 0, 3, and 7.
- [ ] Paid features remain during the 7-day grace period.
- [ ] After the grace period the Subscription becomes `EXPIRED` and the clinic moves to Free.
- [ ] Suspension remains a separate manual action.
- [ ] Tests cover retry, grace, and expiry.
