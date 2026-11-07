# 08: Public clinic page

**What to build:** A patient opens a published Clinic page and sees its profile, primary Location, working-hours union, active Services, active Practitioners, and booking policies in Arabic RTL or English LTR.

**Blocked by:** 03 — Clinic onboarding and Free Subscription, 05 — Practitioners and Service assignments, 06 — Working Hours and Time Off

**Status:** ready-for-agent

- [ ] The page renders clinic name, address, phone, map link, working hours, Services, and Practitioners.
- [ ] `?lang=ar` and `?lang=en` switch copy and document direction on the server.
- [ ] Unpublished clinics return 404; suspended clinics return 410 with a neutral message.
- [ ] Working hours are the union of active Practitioners' hours.
- [ ] Per-clinic title, description, canonical, and `hreflang` are present.
- [ ] Playwright covers both locales and the unpublished and suspended states.
