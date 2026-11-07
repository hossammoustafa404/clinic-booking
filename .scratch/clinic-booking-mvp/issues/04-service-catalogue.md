# 04: Service catalogue

**What to build:** Staff can create, edit, activate, and deactivate bilingual Services with duration and buffers, and see them in the workspace.

**Blocked by:** 03 — Clinic onboarding and Free Subscription

**Status:** ready-for-agent

- [ ] A Service requires an Arabic name; the English name falls back to Arabic when missing.
- [ ] Duration and buffers accept 5-minute increments and reject invalid values.
- [ ] Active and inactive Services are distinguished in the workspace.
- [ ] Deactivation is reflected in the public catalogue contract consumed by the public clinic page.
- [ ] Cross-tenant access to another clinic's Services returns 404 or 403.
- [ ] Service endpoints are documented in Swagger and covered by API tests.
