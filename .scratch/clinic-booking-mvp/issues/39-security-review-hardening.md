# 39: Security review and hardening

**What to build:** A release security gate covering tenant isolation, OTP, tokens, auth, 2FA, PII, headers, rate limits, webhooks, and secrets.

**Blocked by:** 38 — Performance hardening

**Status:** ready-for-agent

- [ ] Cross-tenant tests exist for every domain resource and return 404 or 403.
- [ ] OTP and manage-token storage, expiry, rate limits, and logging are reviewed.
- [ ] Session, password-reset, trusted-origin, and 2FA behaviour is reviewed.
- [ ] PII is redacted from logs, audit metadata, and platform views.
- [ ] Security headers, CORS, and rate limits are verified.
- [ ] Payment webhook signatures and secret validation are verified.
- [ ] Findings are fixed or explicitly accepted, and the review is documented.
