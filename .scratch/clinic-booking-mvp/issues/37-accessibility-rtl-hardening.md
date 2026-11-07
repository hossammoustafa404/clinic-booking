# 37: Accessibility and RTL hardening

**What to build:** Every major public, workspace, and admin flow passes axe, keyboard, focus, touch-target, and RTL/LTR checks.

**Blocked by:** 36 — Platform credits, audit, health, and Bull Board

**Status:** ready-for-agent

- [ ] Axe checks cover landing, booking, OTP, confirmation, manage, dashboard, calendar, Appointment detail, Services, Practitioners, settings, billing, admin dashboard, and admin clinic detail.
- [ ] No serious or critical violations remain.
- [ ] All interactive elements are keyboard reachable with visible focus.
- [ ] Forms have persistent labels and announced errors.
- [ ] Touch targets are at least 44×44 CSS pixels.
- [ ] Arabic RTL and English LTR are correct, including mirrored directional icons.
- [ ] Copy is reviewed in both languages and the Practitioner label is correct.
