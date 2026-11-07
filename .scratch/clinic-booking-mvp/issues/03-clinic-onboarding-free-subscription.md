# 03: Clinic onboarding and Free Subscription

**What to build:** A verified user creates a Clinic with a unique slug, becomes its Owner, receives a permanent Free Subscription, completes onboarding, previews the unpublished booking page, and publishes it.

**Blocked by:** 02 — Account lifecycle

**Status:** ready-for-agent

- [ ] Clinic creation reserves a unique lowercase kebab-case slug and rejects reserved words.
- [ ] The creator becomes Owner; a second clinic by the same user is isolated from the first.
- [ ] Every new Clinic receives a permanent Free Subscription with no period end and no card.
- [ ] Onboarding collects the clinic profile, primary Location, languages, and branding, and shows a checklist for later steps.
- [ ] The unpublished booking page is previewable only to clinic members.
- [ ] Publish and unpublish change the public 404/200 behaviour.
- [ ] Cross-tenant reads and writes between two clinics return 404 or 403.
- [ ] Booking-policy and reminder-offset defaults are stored on the Clinic.
