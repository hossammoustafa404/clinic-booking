# 09: Public availability browsing

**What to build:** A patient chooses a Service and Practitioner, browses real Slots for the next 60 days, sees local times, and gets a helpful empty state with the clinic phone number.

**Blocked by:** 07 — Availability engine and staff preview, 08 — Public clinic page

**Status:** ready-for-agent

- [ ] The date picker loads availability in bounded ranges of at most 31 days.
- [ ] Slots show the clinic's local time and Western digits in both locales.
- [ ] Only Practitioners who offer the selected Service are offered.
- [ ] Minimum notice and Time Off are respected.
- [ ] An empty result shows the clinic phone number.
- [ ] Playwright covers selection, slot rendering, and the empty state.
