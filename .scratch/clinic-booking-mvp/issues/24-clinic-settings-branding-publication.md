# 24: Clinic settings, branding, publication, and reminder offsets

**What to build:** The Owner edits the clinic profile, slug, Location, languages, booking policies, reminder offsets, branding, timezone, and publication state, and can request clinic deletion.

**Blocked by:** 07 — Availability engine and staff preview, 08 — Public clinic page, 15 — Reminder lifecycle, 16 — Team invitations, roles, and clinic switcher

**Status:** ready-for-agent

- [ ] Profile, slug, Location, languages, accent colour, and initials are editable.
- [ ] Slug changes warn that old links stop working and validate uniqueness and reserved words.
- [ ] Booking policies and reminder offsets update availability and reminder scheduling.
- [ ] Timezone changes warn that future availability may shift.
- [ ] Publish and unpublish change the public page state.
- [ ] Deletion request unpublishes immediately and schedules a 30-day purge.
- [ ] Only the Owner can change billing-level or deletion settings.
- [ ] Cross-tenant access returns 404 or 403.
