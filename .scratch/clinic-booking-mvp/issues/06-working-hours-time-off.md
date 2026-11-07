# 06: Working Hours and Time Off

**What to build:** Staff can set weekly Working Hours with multiple intervals, copy hours across days, and add Time Off for one Practitioner or all active Practitioners, with validation.

**Blocked by:** 05 — Practitioners and Service assignments

**Status:** ready-for-agent

- [ ] Working Hours support multiple non-overlapping intervals per day and reject overnight intervals.
- [ ] Copy-to-days applies the same intervals to selected days.
- [ ] Time Off can be created for one Practitioner or bulk for all active Practitioners.
- [ ] Time Off requires `endsAt > startsAt` and is stored in UTC.
- [ ] The weekly editor starts on Saturday and shades Friday and Saturday by default.
- [ ] Cross-tenant access returns 404 or 403.
