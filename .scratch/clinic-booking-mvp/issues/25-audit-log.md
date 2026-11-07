# 25: Audit log

**What to build:** Sensitive clinic actions write append-only audit entries, and Owner and Clinic Admin can filter and view them.

**Blocked by:** 24 — Clinic settings, branding, publication, and reminder offsets

**Status:** ready-for-agent

- [ ] Team, catalogue, schedule, Appointment, and settings changes write audit entries.
- [ ] Entries record actor, action, subject, safe metadata, and timestamp.
- [ ] Metadata never contains Patient notes, full contact details, tokens, or secrets.
- [ ] Owner and Clinic Admin can filter by action, actor, and date.
- [ ] Entries are append-only and cannot be edited from the UI.
- [ ] Billing and platform tickets add their own audit entries.
- [ ] Cross-tenant access returns 404 or 403.
