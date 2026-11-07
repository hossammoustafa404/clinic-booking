# 02: Account lifecycle

**What to build:** A visitor can sign up, verify their email, sign in and out, reset their password, and view an account page in Arabic and English.

**Blocked by:** 01 — Walking skeleton and shared contract baseline

**Status:** ready-for-agent

- [ ] A new user can sign up with email and password and receives a verification email through the queued mail path.
- [ ] An unverified user cannot access the workspace; a verified user can sign in.
- [ ] Password reset sends a signed expiring link, sets a new password, and revokes existing sessions.
- [ ] Sign-out clears the session; protected routes redirect to sign-in.
- [ ] The account page shows the profile and active sessions in both locales.
- [ ] Playwright covers the full account journey in Arabic RTL and English LTR.
- [ ] Auth endpoints appear in Swagger and better-auth reference docs.
