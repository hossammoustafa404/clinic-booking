# 05: Practitioners and Service assignments

**What to build:** An Owner can create Practitioner profiles for Clinic Members, edit their profile fields, and assign Services; only valid Service–Practitioner combinations appear.

**Blocked by:** 04 — Service catalogue

**Status:** ready-for-agent

- [ ] A Practitioner profile is linked to an existing Clinic Member and cannot exist without one.
- [ ] Display name, title, bilingual bio, colour, sort order, and active state are editable.
- [ ] Assigning Services replaces the Practitioner's assignment set atomically.
- [ ] Inactive Practitioners and Services are excluded from bookable combinations.
- [ ] Cross-tenant access returns 404 or 403.
- [ ] The workspace and API tests cover profile creation, assignment, and deactivation.
