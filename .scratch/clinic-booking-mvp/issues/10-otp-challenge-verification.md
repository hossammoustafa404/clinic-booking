# 10: OTP challenge and verification

**What to build:** A patient requests a 6-digit SMS code, resends it, and verifies it to receive a short-lived booking token.

**Blocked by:** 08 — Public clinic page

**Status:** ready-for-agent

- [ ] OTP requests normalize phone numbers to E.164 with a `+20` default.
- [ ] Codes are hashed in Redis with a 5-minute TTL and are never returned by the API.
- [ ] Request limits are 3 per phone per hour and 10 per IP per hour; verification is limited to 5 attempts.
- [ ] Resend creates a new challenge and respects the rate limits.
- [ ] A valid code returns a 15-minute booking token scoped to the clinic and phone.
- [ ] The fixed test code is available only outside production.
- [ ] Fake and Twilio SMS adapters are exercised without sending real messages.
