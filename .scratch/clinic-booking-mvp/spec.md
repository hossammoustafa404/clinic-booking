# Clinic Booking MVP — Project Spec

Status: ready-for-agent
Date: 2026-11-07
Scope: whole MVP — `server`, `web`, `admin`, and the shared contracts package

## Problem Statement

Independent clinics in Egypt and the wider MENA region run their appointment book on phone calls, WhatsApp messages, paper notebooks, and memory. The consequences are predictable:

- Staff spend hours every day answering the same questions, writing down bookings, and moving appointments around.
- Two staff members can book the same practitioner at the same time, so patients arrive to a double-booked clinic.
- Patients forget appointments because nothing reminds them, and clinics absorb the cost of no-shows.
- There is no online booking page the clinic can put in its Instagram bio or Google listing.
- The tools that do exist are either hospital-scale systems with features a small clinic never uses, or global products that do not fit Egypt: no Arabic RTL experience, no EGP pricing, no Africa/Cairo scheduling, no local payment methods, and no SMS reminders that work for Egyptian phones.
- A clinic owner cannot see, in one place, what is happening today, who is booked with whom, which patients keep missing appointments, and whether the clinic is close to its plan limits.

The patient side is just as broken. A patient who wants an appointment has to call during working hours, describe the problem to a receptionist, and hope the time they are offered is real. They cannot see the clinic's services, choose a practitioner, or manage the appointment afterwards without calling again.

## Solution

Clinic Booking is a multi-tenant SaaS product for appointment-based clinics. Each clinic gets a branded public booking page, a clinic workspace for its staff, and a platform console for the operator. It is Egypt-first: Arabic and English with full RTL, Africa/Cairo scheduling, EGP pricing, Egyptian phone numbers, and Tap Payments.

The product has four surfaces:

1. **Public booking page.** A patient opens `/{clinicSlug}`, sees the clinic's services and practitioners, picks an available Slot, verifies their phone with an OTP, and confirms an Appointment. No patient account or password is required. The patient receives a single-appointment manage link by email and SMS.
2. **Clinic workspace.** Owners, Clinic Admins, and Practitioners sign in to manage the calendar, Appointments, Patients, Services, Practitioners, Working Hours, Time Off, Reminders, reports, team, and billing. The workspace is tenant-scoped and role-aware.
3. **Platform console.** Platform Super Admins operate the SaaS itself: clinics, Plans, Subscriptions, Invoices, Payments, SMS Credits, audit logs, and system health. The console is a separate app and never exposes patient records.
4. **Shared contract layer.** Every request and response shape is a Zod schema shared by the API and both frontends, so the three apps cannot drift.

The commercial model is subscription billing only. Every clinic starts on a permanent Free plan with hard limits and can upgrade to Starter, Pro, or a sales-led Enterprise plan. Patients never pay the platform in v1: no deposits, no service prices, no refunds. The only money flow is a clinic paying for its own Subscription, with 14% VAT, Invoices, proration on upgrade, dunning on failure, and SMS Credits for reminders.

There is no marketplace. The platform does not rank clinics, search across clinics, or act as a directory. Each clinic's booking page is its own destination, which keeps the product focused on scheduling and multi-tenant SaaS rather than search, geo, and ranking.

## User Stories

### Prospective clinic and account

1. As a prospective clinic owner, I want a public landing page that explains the product and its Plans, so that I can decide whether it fits my clinic.
2. As a prospective clinic owner, I want to sign up with my email and a password, so that I can create a clinic without contacting sales.
3. As a prospective clinic owner, I want to verify my email before I can use the workspace, so that my account and clinic are protected.
4. As a prospective clinic owner, I want to reset my password from a signed email link, so that I can recover access if I forget it.
5. As a prospective clinic owner, I want to create my clinic with a unique booking-page slug, so that I get a shareable URL that matches my brand.
6. As a clinic owner, I want an onboarding checklist that shows what is still missing, so that I know when my booking page is ready to publish.
7. As a clinic owner, I want to preview my public booking page before publishing it, so that I can check the Arabic and English experience.
8. As a clinic owner, I want to publish and unpublish my booking page, so that I control when patients can book.
9. As a clinic owner, I want to choose Arabic, English, or both for my clinic, so that I can serve the patients I actually have.
10. As a clinic owner, I want my clinic to start on a permanent Free plan without a credit card, so that I can try the product with real patients before paying.

### Patient booking and management

11. As a patient, I want to open a clinic's booking page from a link, so that I can book without creating an account.
12. As a patient, I want to see the clinic's name, address, phone number, map link, and working hours, so that I know I am booking the right place.
13. As a patient, I want to switch between Arabic and English, so that I can use the language I am comfortable with.
14. As a patient, I want the Arabic page to render right-to-left and the English page left-to-right, so that the layout is readable and familiar.
15. As a patient, I want to see the clinic's active Services with their duration, so that I can choose the right one.
16. As a patient, I want to see which Practitioners offer the Service I chose, so that I can book with the doctor I want.
17. As a patient, I want to see available Slots for the next 60 days, so that I can find a time that works for me.
18. As a patient, I want to see Slots in the clinic's local time, so that I do not misread the time.
19. As a patient, I want to see only Slots that respect the clinic's minimum notice period, so that I do not book a time the clinic cannot honour.
20. As a patient, I want to see only Slots that respect the Practitioner's Working Hours and Time Off, so that I do not book when the clinic is closed.
21. As a patient, I want to select a Slot, enter my name and phone number, and add an optional note, so that the clinic knows who I am and what I need.
22. As a patient, I want to receive a one-time code by SMS, so that my phone number is verified before the Appointment is created.
23. As a patient, I want to resend the one-time code if it does not arrive, so that I can continue without calling the clinic.
24. As a patient, I want the one-time code to expire and to be rate-limited, so that my phone cannot be abused.
25. As a patient, I want to confirm the Appointment and see a clear confirmation screen, so that I know the booking succeeded.
26. As a patient, I want a confirmation by email and SMS, so that I have a record I can find later.
27. As a patient, I want a secure manage link for my Appointment, so that I can view it later without an account.
28. As a patient, I want to add the Appointment to my phone calendar, so that I do not forget it.
29. As a patient, I want to reschedule to another available time, so that I can adapt when my plans change.
30. As a patient, I want to reschedule at most twice, so that the clinic's schedule is protected from constant changes.
31. As a patient, I want to cancel before the clinic's cutoff, so that I do not take a Slot I cannot attend.
32. As a patient, I want to see the clinic's cancellation and reschedule policy before I confirm, so that I know the rules.
33. As a patient, I want a Reminder 24 hours before the Appointment, so that I remember to attend.
34. As a patient, I want a Reminder 2 hours before the Appointment, so that I can prepare and leave on time.
35. As a patient, I want to see whether the Appointment is confirmed, cancelled, completed, or marked as a no-show, so that I know what happened.
36. As a patient, I want the manage link to expire after a reasonable period, so that my Appointment data is not exposed forever.
37. As a patient, I want the booking page to work well on my phone, so that I can book on the go.
38. As a patient, I want accessible forms, clear labels, and keyboard navigation, so that I can book regardless of ability.
39. As a patient, I want a clear message when a Slot is taken while I am booking, so that I can pick another time without starting over.
40. As a patient, I want to book without creating a password, so that the experience is low-friction and private.
41. As a patient, I want to see a helpful message and the clinic's phone number when there is no availability, so that I can still get help.
42. As a patient, I want the manage page to show the clinic's contact details, so that I can call if I need to change something outside the allowed actions.

### Clinic Owner

43. As a clinic owner, I want to sign in and see a dashboard of today's Appointments, so that I know how the day looks at a glance.
44. As a clinic owner, I want to switch between clinics if I own more than one, so that I can manage each clinic separately.
45. As a clinic owner, I want to invite Clinic Admins and Practitioners by email, so that my team can help run the clinic.
46. As a clinic owner, I want to assign the right role to each Clinic Member, so that permissions match their job.
47. As a clinic owner, I want to remove a Clinic Member, so that they lose access when they leave.
48. As a clinic owner, I want to promote another Clinic Member to Owner, so that the clinic is not dependent on one person.
49. As a clinic owner, I want to configure the clinic's name, slug, phone, address, map link, timezone, and languages, so that the booking page reflects my clinic.
50. As a clinic owner, I want to configure booking policies — minimum notice, booking horizon, cancellation cutoff, reschedule limit, and reschedule cutoff — so that the rules match how my clinic operates.
51. As a clinic owner, I want to configure Reminder offsets, so that patients receive Reminders at the times that suit my clinic.
52. As a clinic owner, I want to choose an accent colour and clinic initials for branding, so that the booking page feels like my clinic without needing a design team.
53. As a clinic owner, I want to see my current Plan, usage against its limits, and the next Invoice, so that I know where I stand commercially.
54. As a clinic owner, I want to upgrade, downgrade, or cancel my Subscription, so that I control costs as the clinic grows or slows down.
55. As a clinic owner, I want to pay with Tap using cards, wallets, or local Egyptian methods, so that I can pay in the way that works here.
56. As a clinic owner, I want Invoices that show the subtotal, 14% VAT, and total in EGP, so that I can account for taxes correctly.
57. As a clinic owner, I want to buy SMS Credit packs, so that Reminders keep going when my monthly allowance runs out.
58. As a clinic owner, I want to see a clear banner when my Subscription is past due or a limit is reached, so that I know what to fix.
59. As a clinic owner, I want to delete my clinic, so that my data is removed according to the published retention policy.
60. As a clinic owner, I want an audit log of sensitive actions, so that I can investigate who changed what.
61. As a clinic owner, I want reports on Appointments, no-shows, and Practitioner activity, so that I can run the clinic with evidence rather than guesswork.

### Clinic Admin

62. As a Clinic Admin, I want a day and week calendar, so that I can manage the schedule without a paper book.
63. As a Clinic Admin, I want to filter the calendar by Practitioner, Service, and status, so that I can focus on the part of the clinic I am responsible for.
64. As a Clinic Admin, I want to create an Appointment for a patient by phone, so that walk-ins and phone bookings are captured in the same system.
65. As a Clinic Admin, I want to reschedule an Appointment, so that I can accommodate a patient's change.
66. As a Clinic Admin, I want to cancel an Appointment with a reason, so that the patient is informed and the record is accurate.
67. As a Clinic Admin, I want to mark an Appointment as completed, so that the clinic's records reflect what actually happened.
68. As a Clinic Admin, I want to mark an Appointment as a no-show, so that reports and follow-up are accurate.
69. As a Clinic Admin, I want to add an internal note to an Appointment, so that other staff have context without exposing it to the patient.
70. As a Clinic Admin, I want to see a Patient's contact details and Appointment history, so that I can help them quickly.
71. As a Clinic Admin, I want to create and update Patient records, so that the clinic's patient list stays accurate.
72. As a Clinic Admin, I want to search Patients by name or phone number, so that I can find them during a call.
73. As a Clinic Admin, I want to manage Services — names in Arabic and English, duration, buffers, and active status — so that the booking page is accurate.
74. As a Clinic Admin, I want to assign Services to Practitioners, so that patients only see the combinations the clinic actually offers.
75. As a Clinic Admin, I want to manage Practitioner profiles — display name, title, bio, colour, and active status — so that patients know who they are booking.
76. As a Clinic Admin, I want to manage each Practitioner's weekly Working Hours, so that availability matches the real schedule.
77. As a Clinic Admin, I want to add Time Off for one Practitioner or for the whole clinic, so that patients cannot book during holidays or vacations.
78. As a Clinic Admin, I want to be warned when a change to Working Hours or Time Off would conflict with future Appointments, so that I do not strand patients.
79. As a Clinic Admin, I want to see today's Appointments and quick counts, so that I can run the day without opening a report.
80. As a Clinic Admin, I want to see the SMS Credit balance, so that I know when the clinic is close to running out.
81. As a Clinic Admin, I want to see recent Notification delivery status, so that I can troubleshoot a patient who says they did not receive a message.
82. As a Clinic Admin, I want to resend a confirmation, so that a patient has the details again.
83. As a Clinic Admin, I want a paginated Appointment list with filters, so that I can review a date range without scanning the calendar.
84. As a Clinic Admin, I want reports for a date range, so that I can understand no-show rates and Practitioner workload.
85. As a Clinic Admin, I want role-based access, so that I cannot change billing or delete the clinic unless I am the Owner.
86. As a Clinic Admin, I want Arabic and English with correct RTL, so that I can work in the language I prefer.
87. As a Clinic Admin, I want a clear 404 or forbidden response when I try to open another clinic's data, so that tenant isolation is real and visible.

### Practitioner

88. As a Practitioner, I want to sign in and see my own schedule, so that I know my day without filtering a shared calendar.
89. As a Practitioner, I want my Appointments to show the Patient's name, phone, Service, and the Patient's note, so that I can prepare for the visit.
90. As a Practitioner, I want to mark my own Appointments as completed or no-show, so that the record is accurate.
91. As a Practitioner, I want to add an internal note to my own Appointment, so that I can record relevant context for the clinic.
92. As a Practitioner, I want to manage my own Working Hours, so that my availability matches my real schedule.
93. As a Practitioner, I want to add Time Off, so that patients cannot book while I am away.
94. As a Practitioner, I want to receive an email when a new online Appointment is booked with me, so that I am not surprised by my day.
95. As a Practitioner, I want to reschedule or cancel my own Appointments, so that I can handle an emergency.
96. As a Practitioner, I want to see my own completion and no-show counts, so that I can improve my schedule.
97. As a Practitioner, I want to switch clinics if I work at more than one, so that I can manage each calendar separately.
98. As a Practitioner, I want to be blocked from billing and team settings, so that I cannot accidentally change the clinic's commercial setup.
99. As a Practitioner, I want to read the clinic calendar even when I can only edit my own Appointments, so that I can coordinate with reception.
100. As a Practitioner, I want the UI to call me “Doctor / طبيب” while the system treats me as a Practitioner, so that the product speaks my clinic's language.

### Platform Super Admin

101. As a Platform Super Admin, I want a separate admin app, so that platform operations are isolated from the clinic workspace.
102. As a Platform Super Admin, I want to sign in with a super-admin account protected by two-factor authentication, so that the platform console is not a single-password target.
103. As a Platform Super Admin, I want a dashboard with clinic counts, active Subscriptions, MRR, Appointments, failed Payments, and overdue Invoices, so that I know the health of the business.
104. As a Platform Super Admin, I want to list and search clinics, so that I can support a clinic when it contacts us.
105. As a Platform Super Admin, I want to view a clinic's profile, Plan, usage, members, Subscription, Invoices, and status, so that I can diagnose an issue without asking the clinic to send screenshots.
106. As a Platform Super Admin, I want to suspend and reactivate a clinic, so that I can handle abuse or a serious non-payment situation.
107. As a Platform Super Admin, I want to change a clinic's Plan manually, so that I can support sales-led Enterprise deals and bank transfers.
108. As a Platform Super Admin, I want to extend a Subscription period or mark an Invoice paid, so that I can resolve billing exceptions.
109. As a Platform Super Admin, I want to grant or adjust SMS Credits with a reason, so that I can compensate a clinic for a delivery problem.
110. As a Platform Super Admin, I want to manage Plans and their limits, so that I can change pricing and packaging without a deploy.
111. As a Platform Super Admin, I want to view Invoices, Payments, and billing events, so that I can reconcile the platform's revenue.
112. As a Platform Super Admin, I want to reprocess a failed billing event, so that a transient provider failure does not leave a clinic in the wrong state.
113. As a Platform Super Admin, I want to view platform-wide audit logs, so that I can investigate who did what.
114. As a Platform Super Admin, I want to see database, Redis, queue, and webhook health, so that I can spot an integration failure before clinics report it.
115. As a Platform Super Admin, I want to open Bull Board for queue inspection, so that I can see failed mail, SMS, Reminder, and billing jobs.
116. As a Platform Super Admin, I want to be prevented from reading patient records, so that clinic privacy is respected even at the platform level.
117. As a Platform Super Admin, I want every privileged action I take to be audited, so that there is accountability.
118. As a Platform Super Admin, I want a demo clinic seeded in development and staging, so that I can demonstrate the product end to end.
119. As a Platform Super Admin, I want platform metrics computed from our own database, so that we do not need a third-party product analytics vendor.
120. As a Platform Super Admin, I want a clear separation between “suspended for abuse” and “downgraded for non-payment”, so that clinics get the right message and the right recovery path.

### Cross-cutting

121. As a clinic owner, I want double-booking to be impossible even when two patients submit at the same moment, so that the calendar is trustworthy.
122. As a clinic owner, I want my clinic's data to be isolated from every other clinic, so that patient information never leaks across tenants.
123. As a clinic owner, I want Reminders to survive a server restart, so that patients still receive them after a deploy.
124. As a clinic owner, I want the booking page to load quickly on a mobile connection, so that patients do not abandon the flow.
125. As a clinic owner, I want the Arabic interface to be genuinely right-to-left rather than mirrored English, so that my staff and patients can use it naturally.
126. As a patient, I want the booking page to pass accessibility checks, so that I can use it with a screen reader or keyboard.
127. As a clinic owner, I want to know when a message failed and why, so that I can fix the patient's contact details or resend it.
128. As a clinic owner, I want a predictable audit trail for sensitive actions, so that I can answer “who cancelled this?” without guessing.
129. As a Platform Super Admin, I want the system to fail closed when a secret or configuration is missing, so that a misconfigured deploy does not silently weaken security.
130. As a clinic owner, I want my Plan limits to be enforced on the server, so that a client bug cannot bypass them.

## Implementation Decisions

### 1. Workspace, apps, and boundaries

- The workspace is an Nx monorepo with three deployable apps and one shared contract package:
  - `@saas-kit/server` — NestJS REST API, PostgreSQL, Redis, BullMQ, better-auth, CASL, Swagger.
  - `@saas-kit/web` — Next.js App Router. Hosts both the public patient booking surface and the authenticated clinic workspace, behind separate route groups and layouts.
  - `@saas-kit/admin` — Next.js App Router. Platform Super Admin console only. It never imports clinic feature code.
  - `@saas-kit/schemas` — shared Zod request/response schemas and inferred types. It is the only shared contract layer; no app duplicates a contract.
- `web` and `admin` are separate Next.js apps. They do not import each other's source. Shared code that genuinely belongs to both goes into a shared package, not a cross-app import.
- `server` is the only app that talks to PostgreSQL, Redis, Resend, Twilio, and Tap. Frontends talk to `server` over HTTP only.
- Nx tags enforce the boundaries: `type:app` + `scope:client` for `web`, `type:app` + `scope:admin` for `admin`, `type:app` + `scope:server` for `server`, and `type:lib` + `scope:shared` for `schemas`.
- The shared schemas package is introduced incrementally. A ticket adds only the schemas its slice needs; the package is not filled with every future contract upfront.
- Prisma models, migrations, and shared schemas are introduced with the feature that needs them. The data model below is the target model, not a demand to create every table in the first migration.
- Both frontends use the same frontend conventions: feature-based modules, server components by default, React Query for interactive server state, Zustand only for UI state, Axios through the shared fetchers, shadcn/ui, Tailwind, Lucide icons, and Playwright for browser tests.
- The server follows feature-based NestJS modules with action services. Controllers stay thin; business rules, CASL checks, and Prisma access live in action services.
- Every external input is validated by a shared Zod schema. Process environment configuration is validated by a server-only Zod schema and is never exported from the shared package.
- Swagger is served at `/api/docs` and `/api/docs-json` in every environment. Better-auth documents its own routes at `/api/auth/reference`. Every endpoint, public or private, gets the same documentation standard.

### 2. Tenancy, identity, and roles

- **Organization is the Clinic.** better-auth's Organization plugin owns tenancy. The Organization record carries the clinic's domain fields (slug, timezone, locale, booking policies, branding, publication state, suspension state) in addition to better-auth's name and logo fields. Domain tables reference `organizationId`. This follows ADR-0004 and keeps the product language “Clinic” while the storage language is “Organization”.
- **Tenant isolation is application-level in v1.** Every domain table carries `organizationId`; every domain query is scoped to it; every action service verifies the authenticated user's membership before touching data. PostgreSQL RLS is deferred per ADR-0005. Cross-tenant integration tests are mandatory: a member of clinic A must receive 404 or 403 for every clinic B resource.
- **Tenant context comes from the URL, not from a mutable session field.** Private domain routes are `/api/clinics/{clinicId}/...`, where `clinicId` is the Organization id. The action service checks that the session user has a Member row for that clinic. `activeOrganizationId` is used only by better-auth's Organization plugin routes (team and invitation management). A stale active organization therefore cannot leak data through a domain API.
- **Users and Patients are separate.** `User` is an authentication identity. `Patient` is a clinic-scoped record keyed by normalized phone number and is not a User. This follows ADR-0003. There is no global patient identity in v1.
- **Roles.** better-auth Organization roles are `owner`, `admin`, and `member`. Product roles map as follows:
  - Owner → organization role `owner`.
  - Clinic Admin → organization role `admin`.
  - Practitioner → organization role `member` plus an active Practitioner profile.
  - A Clinic Member who is neither a Clinic Admin nor a Practitioner is not a product role in v1; the clinic should invite them as a Clinic Admin or Practitioner instead.
  - Platform Super Admin → `user.role = SUPER_ADMIN` through the better-auth admin plugin, with no clinic membership. The admin app and the `/api/platform/*` routes require this role.
- **Multiple memberships.** A User may belong to more than one clinic. The workspace has a clinic switcher and a `/select-clinic` route. Each clinic URL is explicit, so a user with two memberships cannot confuse one clinic's data with another's.
- **Practitioner is canonical in code and documentation.** The clinic UI labels the role “Doctor / طبيب” where that is the natural clinic word, but the API, database, schemas, and tests use Practitioner.
- **Clinic creation and onboarding.** A verified User creates an Organization through better-auth's Organization plugin and becomes its Owner. The platform immediately creates a permanent Free Subscription. The onboarding wizard then collects the clinic profile, primary Location, Services, Practitioners, Working Hours, booking policies, and branding, and ends with a preview and publish step. The clinic is unpublished until the Owner publishes it.
- **Invitations.** Owner and Clinic Admin may invite Clinic Members by email. The invitation email links to `/accept-invitation/{id}`. Accepting requires an authenticated, verified User. The last Owner cannot be removed or demoted. Owner may delete the clinic; Clinic Admin may not. Team membership and invitation operations use better-auth Organization plugin endpoints; Nest does not duplicate them.
- **Practitioner profiles require a Clinic Member.** A Practitioner is always linked to a Member row and therefore to a User. The Owner can create a Practitioner profile for themselves or for any member. A “calendar-only Practitioner without a login” is out of scope for v1.
- **Platform Super Admin accounts are seeded, not self-served.** A seed script creates or updates the super-admin User from server-only environment variables. The admin app signs in through better-auth, requires TOTP two-factor authentication, and rejects any User without `SUPER_ADMIN`.
- **Authentication.** Email + password through better-auth. Email verification is required before workspace access. Password reset is enabled with a signed, expiring email link and revokes all sessions on success. Session cookies are `HttpOnly`, `Secure` in production, and `SameSite=Lax`. Trusted origins are restricted to the web and admin origins.
- **2FA.** Platform Super Admins must enrol TOTP with backup codes. Clinic users may enable it later; it is not required for clinic roles in v1.
- **Account deletion and clinic deletion.** A clinic Owner may request deletion. The clinic is immediately unpublished and inaccessible; a scheduled purge removes domain data after a 30-day grace period. Billing records required for tax and accounting are retained with clinic identifiers, not patient data. Audit records are retained for one year. Legal review is required before launch.

### 3. Domain model

The model below is the target. Each table is introduced by the milestone that first needs it. Every domain table includes `id` (cuid), `organizationId`, `createdAt`, and `updatedAt` unless stated otherwise.

#### Authentication and tenancy tables

| Entity | Purpose | Key fields and constraints |
| --- | --- | --- |
| `user` | Authentication identity | `id`, `email` unique, `name`, `emailVerified`, `role` (`USER` or `SUPER_ADMIN`), `twoFactorEnabled`, timestamps. |
| `session` | better-auth session | `id`, `userId`, `activeOrganizationId` nullable, `expiresAt`, `ipAddress` hashed or omitted, `userAgent` sanitized. |
| `account` | better-auth credential/OAuth account | Owned by better-auth. |
| `verification` | better-auth verification token | Owned by better-auth. |
| `organization` | The Clinic | `id`, `name`, `slug` unique, `logo` optional, `timezone` default `Africa/Cairo`, `currency` fixed `EGP`, `defaultLocale` default `ar`, `supportedLocales` (`ar`, `en`), `phone`, `addressLine`, `city`, `governorate`, `mapUrl`, `bookingNoticeMinutes` default 120, `bookingHorizonDays` default 60, `cancellationCutoffMinutes` default 120, `rescheduleLimit` default 2, `rescheduleCutoffMinutes` default 120, `reminderOffsetsMinutes` default `[1440, 120]`, `accentColor`, `initials`, `isPublished`, `suspendedAt`, `deletedAt`, `onboardingCompletedAt`. Domain fields are registered as better-auth additional fields so the plugin returns them. |
| `member` | Clinic membership | `id`, `organizationId`, `userId`, `role` (`owner`, `admin`, `member`), timestamps. Unique `(organizationId, userId)`. |
| `invitation` | Pending team invitation | Owned by better-auth; `organizationId`, `email`, `role`, `status`, `expiresAt`, `inviterId`. |

#### Clinic domain tables

| Entity | Purpose | Key fields and constraints |
| --- | --- | --- |
| `location` | Physical place where the clinic delivers Services | `id`, `organizationId`, `name`, `addressLine`, `city`, `governorate`, `country` default `EG`, `phone`, `mapUrl`, `isPrimary`, `deletedAt`. Partial unique index on `(organizationId)` where `isPrimary = true AND deletedAt IS NULL`. One primary Location per clinic in v1; multi-location is out of scope. |
| `practitioner` | Bookable Practitioner profile | `id`, `organizationId`, `memberId` unique, `displayName`, `title`, `bioAr`, `bioEn`, `color`, `isActive`, `sortOrder`, `deletedAt`. |
| `service` | Bookable offering | `id`, `organizationId`, `nameAr`, `nameEn` optional, `descriptionAr`, `descriptionEn` optional, `durationMinutes`, `bufferBeforeMinutes`, `bufferAfterMinutes`, `color`, `isActive`, `sortOrder`, `deletedAt`. No price: patient payments and payment-related service pricing are out of scope. |
| `practitioner_service` | Which Services a Practitioner delivers | `id`, `organizationId`, `practitionerId`, `serviceId`. Unique `(practitionerId, serviceId)`. |
| `working_hours` | Weekly recurring availability | `id`, `organizationId`, `practitionerId`, `dayOfWeek` (0 = Sunday … 6 = Saturday, matching JavaScript), `startMinute` (0–1439 local), `endMinute` (1–1440 local), `endMinute > startMinute`. Multiple intervals per day are allowed. No overnight intervals. Overlap validation in the service. |
| `time_off` | Dated availability exception | `id`, `organizationId`, `practitionerId`, `startsAt` UTC, `endsAt` UTC, `reason`, `createdByUserId`. `endsAt > startsAt`. Clinic-wide holidays are created as a bulk Time Off operation across active Practitioners. |
| `patient` | Clinic-scoped patient record | `id`, `organizationId`, `fullName`, `phoneE164`, `email` optional, `preferredLocale` (`ar` or `en`), `notes` optional, `lastVisitAt` optional, timestamps. Unique `(organizationId, phoneE164)`. Patients are not Users. |
| `appointment` | Scheduled commitment | `id`, `organizationId`, `patientId`, `practitionerId`, `serviceId`, `startsAt` UTC, `endsAt` UTC, `bufferBeforeMinutes`, `bufferAfterMinutes`, `durationMinutes`, `serviceNameArSnapshot`, `serviceNameEnSnapshot`, `status`, `source` (`ONLINE` or `STAFF`), `patientNote`, `internalNote`, `cancellationReason`, `cancelledByUserId`, `rescheduledCount`, `createdByUserId`, `completedAt`, `cancelledAt`, timestamps. |
| `appointment_status_history` | Append-only status audit | `id`, `organizationId`, `appointmentId`, `fromStatus` nullable, `toStatus`, `actorType` (`STAFF`, `PATIENT`, `SYSTEM`), `changedByUserId` nullable, `reason`, `createdAt`. |
| `appointment_access_token` | Single-Appointment manage link | `id`, `organizationId`, `appointmentId`, `tokenHash` unique, `expiresAt`, `revokedAt`, `lastUsedAt`, `createdAt`. The raw token is never stored. |
| `notification` | Scheduled or sent message | `id`, `organizationId`, `appointmentId` nullable, `recipientType` (`PATIENT` or `CLINIC_MEMBER`), `recipientUserId` nullable, `recipientPhone` nullable, `recipientEmail` nullable, `channel` (`EMAIL` or `SMS`), `kind` (`BOOKING_CONFIRMATION`, `REMINDER`, `CANCELLATION`, `RESCHEDULE`, `STAFF_NEW_BOOKING`, `NO_SHOW_FOLLOW_UP`), `templateKey`, `locale`, `status` (`SCHEDULED`, `QUEUED`, `SENT`, `FAILED`, `SKIPPED`, `CANCELLED`), `scheduledAt`, `sentAt`, `providerMessageId`, `errorCode`, `errorMessage`, `dedupeKey` unique, timestamps. |
| `audit_log` | Append-only sensitive-action audit | `id`, `organizationId` nullable, `actorType` (`USER`, `SUPER_ADMIN`, `SYSTEM`, `PATIENT`), `actorUserId` nullable, `actorLabel`, `action`, `subjectType`, `subjectId`, `metadata` JSON sanitized of PII, `ipHash`, `userAgent`, `createdAt`. |

#### Billing tables

| Entity | Purpose | Key fields and constraints |
| --- | --- | --- |
| `plan` | Data-driven Plan and limits | `id`, `code` unique (`FREE`, `STARTER`, `PRO`, `ENTERPRISE`), `nameAr`, `nameEn`, `descriptionAr`, `descriptionEn`, `pricePiastersMonthly` nullable, `maxPractitioners`, `maxLocations`, `maxAppointmentsPerMonth`, `smsCreditsPerMonth`, `hasReports`, `hasCustomBranding`, `hasPrioritySupport`, `isActive`, `sortOrder`, timestamps. |
| `subscription` | A clinic's active Plan and period | `id`, `organizationId` unique, `planId`, `pendingPlanId` nullable, `pendingPlanEffectiveAt` nullable, `status` (`ACTIVE`, `PAST_DUE`, `CANCELED`, `EXPIRED`), `provider` (`FREE`, `TAP`, `PAYMOB`, `MANUAL`), `providerCustomerId`, `providerSubscriptionId`, `currentPeriodStart`, `currentPeriodEnd` nullable for Free, `cancelAtPeriodEnd`, `dunningAttempts`, `nextRetryAt`, `gracePeriodEndsAt`, `canceledAt`, timestamps. |
| `invoice` | Subscription or credit-pack charge | `id`, `organizationId`, `subscriptionId` nullable, `number` unique, `status` (`DRAFT`, `OPEN`, `PAID`, `VOID`, `UNCOLLECTIBLE`), `subtotalPiasters`, `vatRate` default `0.14`, `vatPiasters`, `totalPiasters`, `currency` `EGP`, `periodStart`, `periodEnd`, `dueAt`, `paidAt`, `providerInvoiceId`, timestamps. Unique `(organizationId, number)`. |
| `invoice_line` | Invoice detail | `id`, `invoiceId`, `kind` (`PLAN`, `PRORATION`, `SMS_CREDIT_PACK`), `descriptionAr`, `descriptionEn`, `quantity`, `unitAmountPiasters`, `amountPiasters`. |
| `payment` | Settled subscription charge | `id`, `organizationId`, `invoiceId`, `provider` (`TAP`, `PAYMOB`, `MANUAL`), `providerPaymentId` unique, `amountPiasters`, `status` (`SUCCEEDED`, `REFUNDED`), `method`, `paidAt`, timestamps. Failed attempts are not Payments; they live in billing events and dunning state. |
| `billing_event` | Provider webhook and reconciliation event | `id`, `provider`, `providerEventId`, `type`, `payload` sanitized JSON, `status` (`RECEIVED`, `PROCESSED`, `FAILED`), `processedAt`, `error`, `createdAt`. Unique `(provider, providerEventId)` for idempotency. |
| `sms_credit_ledger` | SMS Credit balance and history | `id`, `organizationId`, `delta`, `reason` (`PLAN_GRANT`, `PACK_PURCHASE`, `USAGE`, `ADJUSTMENT`, `EXPIRY`), `balanceAfter`, `invoiceId` nullable, `notificationId` nullable, `note`, `createdByUserId` nullable, `idempotencyKey` unique, `createdAt`. |
| `sms_credit_pack` | Purchasable credit pack | `id`, `code` unique, `nameAr`, `nameEn`, `credits`, `pricePiasters`, `isActive`, timestamps. Seed values: 100 credits for EGP 150; 500 credits for EGP 600, both VAT-exclusive. Final pricing is an operational decision. |

#### Database constraints and indexes

- **Double-booking is prevented in PostgreSQL, not only in application code.** The appointment table uses a GiST exclusion constraint with `btree_gist`: for rows where `status = 'CONFIRMED'`, the pair `(practitionerId, tstzrange(startsAt - bufferBeforeMinutes, endsAt + bufferAfterMinutes))` must not overlap. The constraint is added in a raw migration because Prisma cannot express it. A violation is mapped to a 409 `SLOT_UNAVAILABLE`.
- Appointment indexes: `(organizationId, startsAt)`, `(practitionerId, startsAt)`, `(patientId, startsAt)`, `(organizationId, status, startsAt)`, and `(organizationId, createdAt)`.
- Patient indexes: `(organizationId, phoneE164)` unique and `(organizationId, fullName)`. Arabic name normalization and fuzzy search are out of scope; v1 uses case-insensitive contains search and exact or partial phone search.
- Notification indexes: `(status, scheduledAt)` for the dispatcher and `(organizationId, createdAt)` for the clinic view.
- Invoice indexes: `(organizationId, createdAt)`, `(status, dueAt)`, and `(organizationId, number)` unique.
- Billing event indexes: `(provider, providerEventId)` unique and `(status, createdAt)`.
- Audit log indexes: `(organizationId, createdAt)` and `(actorUserId, createdAt)`.
- All monetary amounts are integer piasters. No floating-point money anywhere.
- All instants are stored in UTC. Local dates and Working Hours are interpreted in the clinic's IANA timezone.

### 4. Scheduling and availability

- **The bookable unit is a Practitioner + Service.** A Patient chooses a Service, then a Practitioner who offers it. If only one active Practitioner offers the Service, the UI selects that Practitioner automatically. A cross-practitioner “any available doctor” option is not in v1; it complicates the meaning of the Appointment and the Patient's expectation.
- **Working Hours are local wall-clock intervals.** They are weekly, per Practitioner, may have multiple intervals per day, and never cross midnight. The UI orders days starting Saturday. Friday and Saturday are shaded as the weekend by default, but the clinic may still open on either day.
- **The public profile shows the union of Working Hours.** There is no separate clinic opening-hours entity in v1. The booking page derives each day's displayed working hours from the earliest start and latest end across active Practitioners, and labels the result “Working hours”. If the union is empty, the page shows the clinic phone number instead.
- **Time Off is stored as UTC instants.** It removes availability for a Practitioner. A clinic-wide holiday is a bulk Time Off operation across all active Practitioners, not a separate entity.
- **Availability is computed, not stored.** A Slot is a candidate start time. There is no Slot table, no slot hold, and no inventory reservation. Availability is recomputed on every request from Working Hours, Time Off, existing CONFIRMED Appointments, and clinic booking limits.
- **Grid and limits.** Start times fall on a 15-minute grid. Service durations and buffers are in 5-minute increments. The default minimum notice is 120 minutes, the default booking horizon is 60 days, the default cancellation cutoff is 120 minutes, the default reschedule limit is 2, and the default reschedule cutoff is 120 minutes. A clinic may configure notice 0–7 days, horizon 1–90 days, cancellation cutoff 0–7 days, reschedule limit 0–5, and reschedule cutoff 0–7 days.
- **Availability algorithm.** Given a clinic, Service, Practitioner, and date range:
  1. Verify the clinic is published, active, and not suspended; the Service and Practitioner are active; and the Practitioner offers the Service.
  2. Clamp the range to the booking horizon and reject requests wider than 31 days. The booking UI loads one or two weeks at a time.
  3. Expand the Practitioner's Working Hours for each local day in the clinic timezone. Handle daylight-saving transitions with the IANA timezone database. A local time that does not exist is skipped; an ambiguous local time uses the first occurrence.
  4. Subtract Time Off intervals.
  5. Subtract the occupied range of every CONFIRMED Appointment, including its snapshotted buffers.
  6. Generate candidate starts on the 15-minute grid. A candidate is valid when the Service interval fits inside the Working Hours interval and the start is at least the minimum notice from now. Buffers may extend beyond the Working Hours boundary, but the occupied range still blocks other Appointments.
  7. Return Slots with the UTC instant, the local ISO string with offset, a localized label, the Practitioner id, and the Service id. Group them by local date.
- **No caching for availability in v1.** The query is indexed and the response is bounded by the 31-day cap. Public clinic profile and Service lists may be cached for 60 seconds and invalidated on update; availability is always live.
- **Double-booking race.** Appointment creation and reschedule run in a transaction. The exclusion constraint is the final authority. If PostgreSQL raises the exclusion violation, the API returns 409 `SLOT_UNAVAILABLE` and the client refreshes the Slots. The UI never assumes a Slot is still free.
- **Staff Booking.** Staff may create an Appointment for a Patient by phone or walk-in. Staff Booking uses the same availability engine and the same exclusion constraint. Staff may bypass the patient minimum-notice rule, but not the booking horizon, Working Hours, Time Off, or overlap rules. Staff may not create an Appointment in the past.
- **Reschedule.** A reschedule changes the time only. The Patient, Service, and Practitioner stay the same. A Patient may reschedule at most the configured limit (default 2) and only before the reschedule cutoff (default 2 hours). Staff may reschedule until the Appointment starts. The new time must be available. The Appointment keeps `CONFIRMED`; `rescheduledCount` increments; the Service name and buffer snapshots are refreshed from the current Service values; a status-history row is written. The exclusion constraint protects the new time.
- **Cancellation.** A Patient may cancel before the cancellation cutoff (default 2 hours). Staff may cancel before the Appointment starts. After the start, staff mark the Appointment completed or as a no-show instead of cancelling. A cancellation requires a reason from staff; the Patient may optionally provide one. Pending Reminders are cancelled and their queued jobs removed.
- **Completion and No-show.** Staff may mark an Appointment `COMPLETED` after its start. Staff may mark it `NO_SHOW` after its end. A No-show is a Patient who neither attended nor cancelled before the Appointment ended. Status transitions are one-way: a cancelled, completed, or no-show Appointment cannot return to confirmed. The status-history table records every transition.
- **Statuses.** The only Appointment statuses are `CONFIRMED`, `COMPLETED`, `CANCELLED_BY_PATIENT`, `CANCELLED_BY_CLINIC`, and `NO_SHOW`. There is no “pending confirmation” status: a created Appointment is confirmed.
- **Snapshots.** An Appointment stores the Service name, duration, and buffers at the time of booking. Renaming a Service or changing its duration later must not rewrite history. New Appointments use the new values.
- **Changes that would strand Patients are blocked.** Deactivating a Practitioner or Service, shortening Working Hours, or adding Time Off is blocked when it would leave future CONFIRMED Appointments outside the new availability. The UI lists the conflicting Appointments so staff can reschedule or cancel them first. This is safer than silently invalidating a Patient's Appointment.
- **Timezone changes.** Changing the clinic timezone keeps existing Appointments at their UTC instants but reinterprets Working Hours in the new local time. The UI warns the Owner that future availability may shift.
- **Week and calendar.** The workspace calendar starts on Saturday. The default weekend shading is Friday and Saturday. The calendar shows Working Hours, Time Off, Appointment blocks, and the occupied buffer range. Drag-and-drop rescheduling is out of scope; rescheduling happens through the Appointment detail panel.
- **Date utilities.** The server and frontends use one date/time library with IANA timezone support. It must be added to the approved stack before the scheduling milestone. The choice is `date-fns` plus `date-fns-tz`; no ad-hoc timezone arithmetic and no reliance on the server's local timezone.

### 5. Booking and patient access

- **The public booking surface is narrow and anonymous.** Only the booking controllers use `@AllowAnonymous()`. They expose the published clinic profile, active Services, active Practitioners, availability, OTP challenges, Appointment creation, and token-scoped Appointment management. No other route is anonymous except health, billing webhooks, and better-auth's own routes.
- **Public API namespace.** Public booking routes live under `/api/booking/{clinicSlug}/...`. The `booking` segment names the public booking surface; it is a resource, not a role. Private clinic routes live under `/api/clinics/{clinicId}/...`. This avoids ambiguous Nest routes where the same path shape would have to accept either a slug or an id.
- **Clinic slug rules.** Slugs are lowercase kebab-case, 3–60 characters, unique, and reserved against product routes such as `api`, `clinic`, `appointments`, `sign-in`, `sign-up`, `pricing`, `onboarding`, `admin`, `settings`, `support`, `privacy`, and `terms`. A reserved or taken slug returns a validation error. The Owner can change the slug; old links stop working unless a redirect is explicitly added later.
- **Unpublished or suspended clinics.** An unpublished clinic returns 404 on the public booking surface. A suspended clinic returns 410 with a neutral “booking is unavailable” message and the clinic's phone number if available. Staff see a suspended-clinic screen in the workspace.
- **OTP flow.**
  1. `POST /api/booking/{clinicSlug}/otp-challenges` accepts a phone number, purpose (`BOOKING`), and optional locale. The server normalizes the phone to E.164 with a default `+20`, checks the clinic's publication and plan limits, rate-limits the request, generates a 6-digit code, stores a hash in Redis with a 5-minute TTL, and sends the code by SMS. The response contains a `challengeId`, `expiresAt`, and `retryAfterSeconds`; it never contains the code.
  2. `POST /api/booking/{clinicSlug}/otp-challenges/{challengeId}/verify` accepts the code. On success it returns a short-lived opaque `bookingToken` valid for 15 minutes and scoped to the clinic and phone. On failure it increments the attempt count; after 5 failures the challenge is invalidated.
  3. `POST /api/booking/{clinicSlug}/appointments` accepts the `bookingToken`, Service, Practitioner, start time, Patient name, optional email, optional note, and locale. The server verifies the token, re-validates the Slot, upserts the Patient by `(organizationId, phoneE164)`, creates the Appointment and manage token, and schedules Notifications in one transaction. The response returns the Appointment summary and the raw manage URL once.
- **OTP storage and limits.** OTP challenges and rate-limit counters live in Redis, not PostgreSQL. The code is stored as a hash, never in plain text. Request limit: 3 per phone per hour and 10 per IP per hour. Verification limit: 5 attempts per challenge. Booking creation limit: 10 per IP per hour. Manage-link reads and actions: 60 per IP per hour. Public reads: 120 per IP per minute. The exact limits are constants and can be tuned.
- **Test OTP.** In the test environment only, a fixed OTP code may be configured for automated tests. The server refuses to boot in production if the fixed-code flag is enabled. The code is never returned by a production API.
- **Manage link.** The link is `/appointments/{token}?lang={ar|en}`. The token is a 256-bit random value, stored only as a SHA-256 hash. It is scoped to one Appointment, valid until 7 days after the Appointment ends, and can view the Appointment in any status. Actions enforce the cancellation and reschedule rules. The manage page sets `Referrer-Policy: no-referrer`, `X-Robots-Tag: noindex`, and never logs the token. The confirmation email and SMS contain the link; the API also returns it once on creation so the confirmation screen can show it immediately.
- **Patient identity.** A repeat booking from the same phone reuses the existing Patient row for that clinic and updates the name or email if the patient provides new values. A phone number in clinic A is a different Patient from the same phone in clinic B. There is no cross-clinic lookup.
- **Patient changes.** A Patient may view, cancel, and reschedule through the manage link. A Patient cannot change the Service, Practitioner, name, or phone through the manage link. To change those, the Patient cancels and books again, or calls the clinic.
- **Booking for someone else.** Booking on behalf of a family member is out of scope in v1. The phone owner is the Patient. Staff can create an Appointment for a different Patient by phone if needed.
- **Confirmation content.** The confirmation screen shows the clinic name, Practitioner display name, Service, local date and time, clinic address and phone, the manage link, and an “add to calendar” action. The email and SMS contain the same essentials in the Patient's preferred locale, falling back to the clinic's default locale.
- **Calendar file.** `GET /api/booking/{clinicSlug}/appointments/{token}/calendar.ics` returns a single-event ICS file generated from the Appointment. It contains no patient notes or internal data.
- **Idempotency.** Appointment creation accepts an `Idempotency-Key` header. A repeated request with the same key within 24 hours returns the original result instead of creating a second Appointment. This complements, but does not replace, the database exclusion constraint.

### 6. Clinic workspace

- **Dashboard.** Shows today's Appointments, the next seven days, counts for today and the week, the no-show rate for the last 30 days, quick actions (new Appointment, add Time Off), the Subscription status, the SMS Credit balance, and the onboarding checklist while the clinic is incomplete.
- **Calendar.** Day and week views. Week starts Saturday; Friday and Saturday are shaded by default. Filters for Practitioner, Service, and status. Clicking an Appointment opens a detail panel. Staff can create an Appointment from a time cell. The calendar shows Working Hours, Time Off, Appointment blocks, and buffer shading. Mobile uses an agenda list instead of a compressed grid. Drag-and-drop is out of scope.
- **Appointments list.** Filters for date range, Practitioner, Service, status, and source; search by Patient name or phone; pagination. The default range is the current week.
- **Appointment detail.** Patient contact details, Service, Practitioner, local and UTC time, status, source, Patient note, internal note, status history, and actions: reschedule, cancel, complete, no-show, resend confirmation. Internal notes are visible to clinic staff only and are never included in Patient messages.
- **Patients.** Searchable list with name, phone, last visit, total visits, and no-show count. Patient detail shows contact details, preferred locale, notes, upcoming and past Appointments. Staff can create and update Patients. Patients are not hard-deleted from the UI in v1; deletion requests are handled through the clinic deletion policy.
- **Services.** Create, edit, activate, deactivate, and assign Practitioners. A Service with future CONFIRMED Appointments cannot be deactivated until those Appointments are resolved. The Service form validates duration and buffers in 5-minute increments and requires an Arabic name; the English name falls back to Arabic when missing.
- **Practitioners.** List of Clinic Members with active Practitioner profiles. Owner or Clinic Admin can create a Practitioner profile for a member, edit display name, title, bilingual bio, colour, sort order, and active status, assign Services, edit Working Hours, and manage Time Off. A Practitioner can edit their own profile fields, Working Hours, and Time Off, but cannot create or deactivate other Practitioners.
- **Working Hours editor.** A weekly grid with multiple intervals per day, copy-to-other-days, and validation against overlaps and overnight intervals. Saving is blocked when the new hours would leave future CONFIRMED Appointments outside availability; the UI lists the conflicts.
- **Time Off editor.** Create, edit, and delete Time Off for one Practitioner or bulk for all active Practitioners. Saving is blocked when the Time Off overlaps future CONFIRMED Appointments; the UI lists the conflicts so staff can reschedule or cancel first.
- **Team.** Owner and Clinic Admin can invite Clinic Admins and Practitioners, resend or cancel invitations, change a member's role, and remove a member. Only an Owner can promote another member to Owner. The last Owner cannot be removed or demoted. Team membership and invitation calls use better-auth Organization plugin endpoints. The UI composes them with Practitioner profile data from the Nest API.
- **Billing.** Owner-only. Shows the current Plan, usage against limits, next Invoice, payment method status, Invoice history, and SMS Credit balance. Clinic Admins see the Plan name and usage but cannot open payment methods, Invoices, or the checkout flow. This matches the glossary's Owner responsibility for billing.
- **Settings.** Clinic profile, booking page slug and publication state, booking policies, Reminder offsets, languages, accent colour and initials, Location, and deletion request. Changing the slug is a confirmed action with a warning that old links stop working.
- **Notifications.** Recent Notification rows with channel, kind, recipient masked, status, scheduled time, sent time, and error. Staff can resend a confirmation and retry a failed Notification where the provider allows it. Recipient phone numbers and emails are masked in the list and shown in full only on the Appointment detail for authorised staff.
- **Reports.** Date-range reports for Appointments by status, by Practitioner, by Service, by day, new versus returning Patients, peak hours, no-show rate, and SMS usage. On-screen only; CSV and PDF export are out of scope.
- **Audit log.** Owner and Clinic Admin can view clinic-scoped audit entries for team changes, Service and Practitioner changes, Appointment status changes, billing changes, and settings changes. Metadata uses ids and safe labels, never Patient notes or full contact details.
- **Role enforcement.** Every mutating workspace endpoint checks CASL in the action service, not only in the UI. The UI hides actions the user cannot perform, but hiding is UX only; the server is the authority.
- **Empty and error states.** Every list and dashboard has a purposeful empty state with the next action. Suspended clinics, past-due Subscriptions, reached plan limits, and unpublished booking pages each get a distinct banner and a clear recovery path.

### 7. Platform admin console

- **Separate app and audience.** `admin` is deployed separately from `web` and only accepts `SUPER_ADMIN` Users with TOTP two-factor authentication. It has its own layout, navigation, and session. It never links into a clinic workspace as the clinic user.
- **Dashboard.** Clinic counts (total, active, suspended), Subscriptions by Plan and status, MRR from active paid Subscriptions, Appointments in the last 30 days, failed Payments, overdue Invoices, and SMS Credit consumption. Metrics are computed from PostgreSQL and cached for five minutes. There is no third-party product analytics vendor.
- **Clinics.** Search and filter by Plan, status, and creation date. Clinic detail shows profile metadata, Owner, member count, Practitioner and Service counts, usage against limits, Subscription, Invoices, Payments, SMS Credit ledger, recent audit entries, and suspension state. Platform Super Admins can suspend, reactivate, change the Plan manually, extend the period, and adjust SMS Credits. They cannot open Patient records, Appointment notes, or clinical data.
- **Suspension.** Suspension sets `suspendedAt`, unpublishes the booking page, and shows a suspended screen in the clinic workspace. It does not delete data and does not automatically cancel the Subscription. Reactivation restores the previous publication state, which the Owner may still need to publish explicitly. Every suspension and reactivation is audited with a reason.
- **Plans.** Create and edit Plans, prices, limits, and feature flags. The Plan `code` is immutable once created. Price and limit changes apply to new Invoices and to limit enforcement immediately; existing Invoices are never rewritten. Deactivating a Plan prevents new Subscriptions but does not silently migrate existing clinics.
- **Subscriptions.** List and inspect Subscriptions by status and Plan. Manual Plan changes, period extensions, and forced cancellations are audited. A manual change can bypass payment for Enterprise or bank-transfer deals; the console records the reason and the acting Super Admin.
- **Invoices and Payments.** List, filter, and inspect Invoices and Payments. Mark an Invoice paid or void with a reason. Record a manual Payment for a bank transfer. Refunds are out of scope; a refund is handled outside the product and recorded as an audit note.
- **Billing events.** Inspect provider webhook events, their processing status, and errors. Reprocess a failed event. The console never displays raw card data; payloads are sanitized before storage.
- **SMS Credits.** View each clinic's ledger and balance. Grant or adjust credits with a reason; the adjustment is audited and idempotent.
- **Audit log.** Platform-wide, filterable by actor, clinic, action, and date. Super Admin actions are always recorded.
- **System health.** Database, Redis, queue counts, failed jobs, last successful webhook per provider, and a link to Bull Board at `/api/queues`. Bull Board requires a Super Admin session and is never anonymous.
- **Demo and operations.** Demo data is created by a seed script, not by a console button. The seed creates a demo clinic, Owner, Clinic Admin, Practitioner, Services, Working Hours, Patients, and Appointments in both Arabic and English, plus a super-admin account in non-production environments.
- **Privacy boundary.** The console can see clinic-level metadata and billing, but not Patient names, phones, emails, notes, or Appointment-level clinical context. Support requests that require Patient data are handled by the clinic, not by the platform operator.

### 8. Notifications and reminders

- **Channels.** Email through Resend and SMS through a provider adapter. Twilio is the initial SMS adapter; a fake adapter is used in development, tests, and demos. The adapter interface allows a local Egyptian SMS aggregator to replace Twilio without changing the notification domain. Twilio must be added to the approved backend stack before the notifications milestone, and SMS infrastructure becomes a shared server area alongside mail, with its own queue and processor.
- **Queues.** Outbound work is always asynchronous. Email uses the shared mail queue; SMS uses the shared SMS queue; the notification module owns a notification queue and a dispatcher; billing owns a billing queue. BullMQ is backed by Redis. Jobs are processed in the same Nest process in v1. No mail or SMS is sent inline on a request path.
- **Notification records.** Every intended message is a `notification` row. The row is the source of truth for scheduling, delivery status, retries, and the clinic's notification screen. BullMQ jobs carry the Notification id; the row is updated as the job moves through queued, sent, failed, skipped, or cancelled.
- **Kinds.** Booking confirmation, 24-hour Reminder, 2-hour Reminder, cancellation, reschedule, staff new-booking notice, and an optional no-show follow-up. Marketing messages are out of scope; every message is transactional and tied to an Appointment or the clinic's operation.
- **Scheduling.** On Appointment creation, the server creates a confirmation Notification immediately and Reminder rows at the configured offsets. The dispatcher runs every minute, selects due `SCHEDULED` rows with `FOR UPDATE SKIP LOCKED`, enqueues them to the mail or SMS queue, and marks them `QUEUED`. This survives restarts because the rows and the delayed work live in PostgreSQL and Redis.
- **Reschedule and cancellation.** On reschedule, pending Reminders for the old time are marked `CANCELLED` and removed from the queue, and new Reminders are created for the new time. On cancellation, all pending Reminders are cancelled. On completion or no-show, pending Reminders are cancelled.
- **Reminder offsets.** Default 1440 and 120 minutes before the Appointment. A clinic can configure a set of offsets. If an Appointment is created inside an offset window, the already-passed Reminder is skipped. Reminders are never sent for cancelled, completed, or no-show Appointments.
- **SMS Credits.** Email is always attempted when the Patient has an email. SMS is attempted only when the clinic has a positive SMS Credit balance. If the balance is zero, the SMS Notification is marked `SKIPPED` and the clinic sees a low-balance banner; the booking still succeeds. Credits are decremented when a message is accepted by the provider, not when it is queued. A provider failure is retried; the clinic can see the failure and the ledger.
- **Plan grants.** On a paid Invoice, the Plan's monthly SMS Credits are added to the ledger with a `PLAN_GRANT` entry. Free plan grants zero SMS Credits; email reminders still work.
- **Templates and locale.** Templates exist in Arabic and English. The Patient's preferred locale is used first, then the clinic's default locale. Arabic copy is Modern Standard Arabic, not dialect. Email is plain text; HTML is empty. SMS is plain text and capped at three segments; if the template would exceed that, the Service name is dropped before the manage link.
- **Delivery and retries.** Provider failures retry with exponential backoff up to three attempts. A 4xx response that is not 408, 425, or 429 fails without retry. Reserved test recipients on `example.com` are skipped outside production. Provider webhooks update `SENT`, `FAILED`, and provider message ids where available.
- **Staff notices.** A new online Appointment sends an email to the booked Practitioner and the clinic's Owners and Clinic Admins. In-app notification centre and push notifications are out of scope; the dashboard and calendar are the in-app signal.
- **No PII in logs.** Notification logs include Notification id, channel, kind, status, and provider code. They never include phone numbers, email addresses, OTP codes, or manage tokens.

### 9. Billing and subscriptions

- **Subscription billing only.** The only money flow is a clinic paying for its own Subscription or buying SMS Credit packs. Patient deposits, service prices, refunds, and patient payments are out of scope per ADR-0006.
- **Free plan forever.** Every clinic starts on a permanent Free plan with hard limits and no credit card. There is no time-limited trial. This follows ADR-0008 and makes onboarding and the demo work immediately.
- **Plans and seed limits.** Plan data is data-driven and editable by Platform Super Admins. Initial seed values:

| Plan | Price (EGP/month, VAT-exclusive) | Practitioners | Locations | Appointments/month | SMS Credits/month | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Free | 0 | 1 | 1 | 50 | 0 | Email reminders only; basic reports; default branding. |
| Starter | 399 | 3 | 1 | 500 | 100 | Reports; email support. |
| Pro | 899 | 10 | 1 | 2,000 | 500 | Advanced reports; custom branding; priority support. |
| Enterprise | Custom | Custom | Custom | Custom | Custom | Sales-led; manual Plan assignment and invoicing. |

- **Monthly billing only in v1.** Annual billing, coupons, referrals, metered overage, and multi-currency are out of scope. The currency is EGP.
- **VAT.** Prices are VAT-exclusive. Every Invoice shows subtotal, 14% VAT, and total in EGP. Amounts are stored as integer piasters and rounded half-up at the line and invoice level. The exact VAT treatment should be confirmed by an accountant before launch.
- **Subscription lifecycle.**
  - Clinic creation → Free Subscription, `ACTIVE`, provider `FREE`, no period end.
  - Upgrade from Free → hosted Tap checkout for a full month of the new Plan; on success the Subscription becomes `ACTIVE`, the period starts now and ends one month later, the Invoice is `PAID`, and SMS Credits are granted.
  - Upgrade from a paid Plan → immediate prorated charge for the remaining days of the current period; the period end does not move; the new Plan's limits apply immediately; the next renewal charges the new Plan in full.
  - Downgrade → scheduled for the end of the current period; no refund or credit; at period end the Plan switches, the next Invoice reflects the new Plan, and limits are enforced immediately. Existing data over the new limits remains readable, but new creations beyond the limit are blocked with an upgrade prompt.
  - Cancel → scheduled for the end of the current period; the clinic keeps paid features until then; at period end the Subscription becomes `CANCELED` and the clinic moves to Free. The Owner can resume before the period ends.
  - Payment failure → the Invoice stays `OPEN`, the Subscription becomes `PAST_DUE`, and the Owner is emailed. Retries occur on day 0, 3, and 7. Paid features remain during the 7-day grace period with a banner. After the grace period the Subscription becomes `EXPIRED` and the clinic moves to Free. Suspension is a separate manual action, not an automatic billing outcome.
  - Manual/Enterprise → a Platform Super Admin assigns the Plan and period; an Invoice can be marked paid for a bank transfer; a manual Payment is recorded.
- **Proration formula.** Remaining days in the current period divided by total days in the period, multiplied by the price difference between the new and old Plans, rounded to the nearest piaster. VAT is added at 14%. Downgrades do not produce a negative charge; they take effect at period end.
- **Plan limit enforcement.** Enforced server-side in action services:
  - Practitioners: count active Practitioner profiles; block creating or reactivating beyond the limit with 402 `PLAN_LIMIT_REACHED`.
  - Locations: one primary Location in v1; the limit is one on every Plan.
  - Appointments per month: count Appointments created in the current Africa/Cairo calendar month, including later cancellations and no-shows, because the booking consumed capacity. When the limit is reached, new online and staff Bookings are blocked with 402 `PLAN_LIMIT_REACHED`; existing Appointments remain manageable. The Owner sees an upgrade prompt and the public page shows a “contact the clinic” message.
  - SMS Credits: zero balance skips SMS; email continues.
  - Reports and custom branding: feature flags on the Plan; the API and UI both respect them.
- **Payment provider.** Tap Payments is the primary rail behind a `PaymentProvider` interface. A fake provider auto-succeeds in development, tests, and demos. Paymob is a fallback adapter behind the same interface; full Paymob parity is a stretch item, not a prerequisite for the first billing slice. The domain owns Plans, proration, Invoices, VAT, dunning, and limits so the gateway can be swapped. This follows ADR-0007.
- **Checkout and recurring charges.** The first charge uses Tap hosted checkout. If Tap returns a saved-card token, renewal charges use it; otherwise the renewal Invoice stays `OPEN` with a payment link and dunning applies. Card data never touches our servers or database. PCI scope is SAQ A.
- **Webhooks.** `POST /api/billing/webhooks/{provider}` is anonymous but signature-verified. The server stores a sanitized `billing_event` with a unique provider event id, enqueues processing, and returns 200 quickly. Processing is idempotent: the same event cannot apply twice. A failed event is retried and visible in the admin console.
- **Invoices.** Invoice numbers are globally sequential in the form `INV-YYYY-NNNNNN`. Invoices are HTML pages with print-friendly styling; PDF generation is out of scope in v1. The clinic can print or save the page as PDF from the browser. Invoice lines distinguish Plan, proration, and SMS Credit pack charges.
- **SMS Credit packs.** A one-time Tap checkout adds credits on successful payment and creates an Invoice line. Seed packs are 100 credits for EGP 150 and 500 credits for EGP 600, VAT-exclusive. Final pricing is an operational decision.
- **Billing access.** Owner-only for payment methods, checkout, Invoices, and Plan changes. Clinic Admins see the current Plan and usage but not payment details. Platform Super Admins see everything billing-related and nothing patient-related.

### 10. API surface and conventions

- **Resource-oriented URLs.** API paths identify resources, not roles. There are no `/public` or `/admin` prefixes. Anonymous access is expressed with `@AllowAnonymous()` on the narrow booking surface, not by a path name. `/api/platform/...` names the platform scope, not the actor; the Super Admin guard enforces access.
- **Global prefix and exclusions.** The API uses `/api`. better-auth lives at `/api/auth/*` and Bull Board at `/api/queues`; both are excluded from the Nest global prefix handling as required by the auth and queue setup.
- **Versioning.** The MVP is unversioned at `/api`. A future breaking change introduces `/api/v2` or a version header; v1 clients are not broken silently.
- **Content type.** JSON only. Dates and instants are ISO 8601 strings in UTC. Local dates use `YYYY-MM-DD`. Money is integer piasters with an explicit `currency: "EGP"`. Durations are minutes. Locale values are `ar` and `en`.
- **Pagination.** List endpoints use `page` (1-based, default 1) and `limit` (default 20, max 100). Responses include `data` and `meta` with `page`, `limit`, `total`, and `totalPages`.
- **Errors.** Errors use Nest's standard envelope (`statusCode`, `message`, `error`) plus an optional machine-readable `code` for domain cases such as `SLOT_UNAVAILABLE`, `PLAN_LIMIT_REACHED`, `OTP_EXPIRED`, `OTP_INVALID`, `RESCHEDULE_LIMIT_REACHED`, `CANCELLATION_CUTOFF_PASSED`, and `CLINIC_SUSPENDED`. Validation failures are 400. Missing or invalid sessions are 401. Insufficient permissions are 403. Missing resources are 404. Slot and state conflicts are 409. Plan limits are 402. The client branches on `code`, not on prose.
- **Idempotency.** `Idempotency-Key` is supported on Appointment creation, checkout creation, and SMS pack checkout. Replays within 24 hours return the original result. Provider webhooks are idempotent through `billing_event`.
- **Rate limits.** OTP request 3 per phone per hour and 10 per IP per hour; OTP verification 5 attempts per challenge; booking creation 10 per IP per hour; manage-link reads and actions 60 per IP per hour; public reads 120 per IP per minute; better-auth's own rate limits are enabled. Rate-limit state lives in Redis.
- **CORS and cookies.** Browser traffic is same-origin through Next.js rewrites from `/api/*` to the Nest API, so session cookies bind to the frontend host. Direct API clients are allowed only from the configured web and admin origins, with credentials. Cookies are `HttpOnly`, `Secure` in production, and `SameSite=Lax`.
- **Swagger.** Every endpoint has `@ApiOperation`, typed request and response DTOs from shared schemas, documented query and path params, and applicable 400/401/403/404/409/402 responses. Public endpoints get the same richness as private ones. Better-auth routes are documented at `/api/auth/reference`, not duplicated in Nest Swagger.
- **Public booking endpoints.**

| Method and route | Purpose |
| --- | --- |
| `GET /api/booking/{clinicSlug}/profile` | Published clinic profile, primary Location, policies, languages, branding. |
| `GET /api/booking/{clinicSlug}/services` | Active Services with duration and bilingual names. |
| `GET /api/booking/{clinicSlug}/practitioners?serviceId=` | Active Practitioners offering the Service. |
| `GET /api/booking/{clinicSlug}/availability?serviceId=&practitionerId=&from=&to=` | Computed Slots grouped by local date; maximum 31-day range. |
| `POST /api/booking/{clinicSlug}/otp-challenges` | Request a booking OTP. |
| `POST /api/booking/{clinicSlug}/otp-challenges/{challengeId}/verify` | Verify the OTP and receive a short-lived booking token. |
| `POST /api/booking/{clinicSlug}/appointments` | Create an Appointment with a booking token. |
| `GET /api/booking/{clinicSlug}/appointments/{token}` | View the Appointment behind a manage token. |
| `POST /api/booking/{clinicSlug}/appointments/{token}/cancel` | Cancel within the clinic's cutoff. |
| `POST /api/booking/{clinicSlug}/appointments/{token}/reschedule` | Reschedule within the limit and cutoff. |
| `GET /api/booking/{clinicSlug}/appointments/{token}/calendar.ics` | Download a single-event ICS file. |

- **Clinic workspace endpoints (authenticated, tenant-scoped).**

| Method and route | Purpose |
| --- | --- |
| `GET /api/clinics/{clinicId}` | Clinic settings and the caller's role. |
| `PATCH /api/clinics/{clinicId}` | Update profile, policies, branding, publication state (Owner/Clinic Admin). |
| `GET /api/clinics/{clinicId}/dashboard` | Today, week, counts, Subscription and SMS summaries. |
| `GET /api/clinics/{clinicId}/practitioners` | List Practitioner profiles. |
| `POST /api/clinics/{clinicId}/practitioners` | Create a profile for an existing Clinic Member. |
| `GET/PATCH/DELETE /api/clinics/{clinicId}/practitioners/{practitionerId}` | Read, update, or deactivate a Practitioner. |
| `PUT /api/clinics/{clinicId}/practitioners/{practitionerId}/services` | Replace the Practitioner's Service assignments. |
| `GET/PUT /api/clinics/{clinicId}/practitioners/{practitionerId}/working-hours` | Read or replace the weekly Working Hours. |
| `GET/POST /api/clinics/{clinicId}/practitioners/{practitionerId}/time-off` | List or create Time Off. |
| `DELETE /api/clinics/{clinicId}/practitioners/{practitionerId}/time-off/{timeOffId}` | Remove Time Off. |
| `GET /api/clinics/{clinicId}/practitioners/{practitionerId}/availability?serviceId=&from=&to=` | Staff availability preview. |
| `GET/POST /api/clinics/{clinicId}/services` | List or create Services. |
| `GET/PATCH/DELETE /api/clinics/{clinicId}/services/{serviceId}` | Read, update, or deactivate a Service. |
| `PUT /api/clinics/{clinicId}/services/{serviceId}/practitioners` | Replace the Service's Practitioner assignments. |
| `GET /api/clinics/{clinicId}/patients?search=&page=&limit=` | Search Patients. |
| `POST /api/clinics/{clinicId}/patients` | Create a Patient. |
| `GET/PATCH /api/clinics/{clinicId}/patients/{patientId}` | Read or update a Patient. |
| `GET /api/clinics/{clinicId}/patients/{patientId}/appointments` | Patient Appointment history. |
| `GET /api/clinics/{clinicId}/appointments?from=&to=&practitionerId=&serviceId=&status=&source=&search=&page=&limit=` | Paginated Appointment list. |
| `POST /api/clinics/{clinicId}/appointments` | Staff Booking. |
| `GET/PATCH /api/clinics/{clinicId}/appointments/{appointmentId}` | Read or update notes. |
| `POST /api/clinics/{clinicId}/appointments/{appointmentId}/reschedule` | Staff reschedule. |
| `POST /api/clinics/{clinicId}/appointments/{appointmentId}/cancel` | Staff cancellation with reason. |
| `POST /api/clinics/{clinicId}/appointments/{appointmentId}/complete` | Mark completed. |
| `POST /api/clinics/{clinicId}/appointments/{appointmentId}/no-show` | Mark no-show. |
| `POST /api/clinics/{clinicId}/appointments/{appointmentId}/resend-confirmation` | Requeue the confirmation. |
| `GET /api/clinics/{clinicId}/appointments/{appointmentId}/history` | Status history. |
| `GET /api/clinics/{clinicId}/notifications?status=&channel=&page=` | Notification delivery list. |
| `POST /api/clinics/{clinicId}/notifications/{notificationId}/retry` | Retry a failed Notification. |
| `GET /api/clinics/{clinicId}/reports/summary?from=&to=` | KPI summary. |
| `GET /api/clinics/{clinicId}/reports/appointments?from=&to=&groupBy=practitioner|service|status|day` | Grouped Appointment report. |
| `GET /api/clinics/{clinicId}/billing/subscription` | Current Plan, period, status, pending change. |
| `GET /api/clinics/{clinicId}/billing/usage` | Usage against Plan limits. |
| `POST /api/clinics/{clinicId}/billing/checkout` | Start a Tap checkout for a Plan change. |
| `POST /api/clinics/{clinicId}/billing/subscription/change-plan` | Upgrade or schedule a downgrade. |
| `POST /api/clinics/{clinicId}/billing/subscription/cancel` | Cancel at period end. |
| `POST /api/clinics/{clinicId}/billing/subscription/resume` | Undo a scheduled cancellation. |
| `GET /api/clinics/{clinicId}/billing/invoices?page=` | Invoice list. |
| `GET /api/clinics/{clinicId}/billing/invoices/{invoiceId}` | Invoice detail. |
| `GET /api/clinics/{clinicId}/billing/sms-credits` | Balance and ledger. |
| `POST /api/clinics/{clinicId}/billing/sms-credit-packs/{packId}/checkout` | Buy SMS Credits. |
| `GET /api/clinics/{clinicId}/audit-logs?page=&action=&actorUserId=&from=&to=` | Clinic audit log. |

- **Platform endpoints (Super Admin only).**

| Method and route | Purpose |
| --- | --- |
| `GET /api/platform/metrics` | Platform KPI summary. |
| `GET /api/platform/clinics?search=&plan=&status=&page=` | Clinic list. |
| `GET /api/platform/clinics/{clinicId}` | Clinic detail without Patient data. |
| `POST /api/platform/clinics/{clinicId}/suspend` | Suspend with reason. |
| `POST /api/platform/clinics/{clinicId}/reactivate` | Reactivate with reason. |
| `POST /api/platform/clinics/{clinicId}/plan` | Manual Plan change. |
| `POST /api/platform/clinics/{clinicId}/subscription/extend` | Extend the current period. |
| `POST /api/platform/clinics/{clinicId}/sms-credits` | Adjust SMS Credits with reason. |
| `GET/POST /api/platform/plans` | List or create Plans. |
| `GET/PATCH /api/platform/plans/{planId}` | Read or update a Plan. |
| `GET /api/platform/subscriptions?status=&planId=&page=` | Subscription list. |
| `GET /api/platform/subscriptions/{subscriptionId}` | Subscription detail. |
| `POST /api/platform/subscriptions/{subscriptionId}/cancel` | Force cancellation with reason. |
| `GET /api/platform/invoices?status=&clinicId=&page=` | Invoice list. |
| `GET /api/platform/invoices/{invoiceId}` | Invoice detail. |
| `POST /api/platform/invoices/{invoiceId}/mark-paid` | Mark paid with reason. |
| `POST /api/platform/invoices/{invoiceId}/void` | Void with reason. |
| `GET /api/platform/payments` | Settled Payments. |
| `GET /api/platform/billing-events?status=` | Provider events and errors. |
| `POST /api/platform/billing-events/{eventId}/reprocess` | Reprocess a failed event. |
| `GET /api/platform/audit-logs?actor=&clinicId=&action=&from=&to=&page=` | Platform audit log. |
| `GET /api/platform/health` | Database, Redis, queue, and webhook health. |

- **Other routes.** `GET /api/health` is an anonymous process-up signal only. `POST /api/billing/webhooks/tap` and `POST /api/billing/webhooks/paymob` are anonymous but signature-verified. `/api/docs`, `/api/docs-json`, `/api/auth/reference`, and `/api/queues` are operational surfaces with the access rules described above.

### 11. Screens and routes

#### `web` — public booking and account routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page: value proposition, how it works, Plans, sign-in and sign-up calls to action. |
| `/pricing` | Plan comparison in Arabic and English. |
| `/sign-in` | Clinic user sign-in. |
| `/sign-up` | Clinic owner sign-up. |
| `/verify-email` | Email verification result and resend action. |
| `/forgot-password` | Request a password reset link. |
| `/reset-password` | Set a new password from a signed link. |
| `/accept-invitation/{id}` | Accept a clinic invitation. |
| `/{clinicSlug}` | Public booking page: clinic profile, Services, Practitioners, date picker, Slots, Patient form, OTP, confirmation. |
| `/{clinicSlug}?lang=ar|en` | Same page in the chosen locale. |
| `/appointments/{token}` | Patient manage page: details, status, reschedule, cancel, ICS download. |
| `/appointments/{token}?lang=ar|en` | Manage page in the chosen locale. |
| `/privacy` | Privacy policy. |
| `/terms` | Terms of service. |
| `/{clinicSlug}` for an unpublished or suspended clinic | 404 or 410 page with a neutral message and clinic contact where appropriate. |

#### `web` — clinic workspace routes

| Route | Purpose |
| --- | --- |
| `/select-clinic` | Choose among multiple clinic memberships. |
| `/clinic/{clinicSlug}/onboarding` | Guided setup: profile, Location, Services, Practitioners, Working Hours, policies, branding, preview, publish. |
| `/clinic/{clinicSlug}/dashboard` | Today, week, counts, Subscription and SMS summaries, onboarding checklist. |
| `/clinic/{clinicSlug}/calendar` | Day and week calendar with filters and Appointment detail panel. |
| `/clinic/{clinicSlug}/appointments` | Paginated Appointment list with filters and search. |
| `/clinic/{clinicSlug}/appointments/{appointmentId}` | Appointment detail and actions. |
| `/clinic/{clinicSlug}/patients` | Patient list and search. |
| `/clinic/{clinicSlug}/patients/{patientId}` | Patient detail and Appointment history. |
| `/clinic/{clinicSlug}/services` | Service list and editor. |
| `/clinic/{clinicSlug}/practitioners` | Practitioner list. |
| `/clinic/{clinicSlug}/practitioners/{practitionerId}` | Practitioner profile, Services, Working Hours, Time Off. |
| `/clinic/{clinicSlug}/team` | Members, invitations, roles. |
| `/clinic/{clinicSlug}/reports` | Date-range reports. |
| `/clinic/{clinicSlug}/notifications` | Notification delivery list and retry. |
| `/clinic/{clinicSlug}/settings` | Clinic profile, booking page, policies, branding, Location, deletion request. |
| `/clinic/{clinicSlug}/settings/billing` | Owner-only Plan, usage, Invoices, checkout, SMS Credits. |
| `/clinic/{clinicSlug}/settings/audit` | Clinic audit log. |
| `/account` | User profile, password, sessions, 2FA enrolment. |

#### `admin` — platform console routes

| Route | Purpose |
| --- | --- |
| `/sign-in` | Super Admin sign-in with TOTP. |
| `/dashboard` | Platform KPIs. |
| `/clinics` | Clinic list and search. |
| `/clinics/{clinicId}` | Clinic detail, suspension, Plan, usage, billing, audit. |
| `/plans` | Plan list. |
| `/plans/{planId}` | Plan editor. |
| `/subscriptions` | Subscription list. |
| `/subscriptions/{subscriptionId}` | Subscription detail and manual actions. |
| `/invoices` | Invoice list. |
| `/invoices/{invoiceId}` | Invoice detail, mark paid, void, print view. |
| `/payments` | Settled Payments. |
| `/billing-events` | Provider events and reprocessing. |
| `/audit-logs` | Platform audit log. |
| `/system` | Database, Redis, queue and webhook health; Bull Board link. |
| `/settings` | Super Admin profile and 2FA. |

#### Layout and navigation

- The public booking layout is minimal: clinic branding, language switcher, and a small “Powered by Clinic Booking” footer. It has no workspace navigation.
- The workspace layout has a sidebar (Dashboard, Calendar, Appointments, Patients, Services, Practitioners, Team, Reports, Notifications, Settings), a clinic switcher, a user menu, and a language switcher. It collapses into a mobile drawer.
- The admin layout is visually distinct and has no clinic navigation. It shows the platform name, the Super Admin identity, and a 2FA status indicator.
- All three layouts are RTL-aware. Navigation order, icons with direction (chevrons, arrows), and progress indicators mirror correctly in Arabic.
- Loading, empty, error, suspended, past-due, and plan-limit states are designed, not left to default framework pages.

### 12. Localization, RTL, and Egypt defaults

- **Languages.** Arabic (`ar`) and English (`en`). Arabic is the default for Egypt. Clinic UI copy is Modern Standard Arabic, not Egyptian dialect. Patient-facing copy is friendly MSA.
- **Locale routing.** Public URLs keep their clean shape: `/{clinicSlug}?lang=ar`, `/appointments/{token}?lang=en`, `/clinic/{clinicSlug}/calendar?lang=ar`. Next.js middleware reads `?lang`, persists the choice in a cookie, and rewrites internally to `/[locale]/...`. The visible URL does not gain a locale segment. Canonical and `hreflang` links point to the Arabic and English variants. This follows ADR-0009.
- **Rendering direction.** `<html lang="ar" dir="rtl">` or `<html lang="en" dir="ltr">` is rendered on the server. There is no client-side direction flip and therefore no RTL hydration flash.
- **No third-party i18n framework in v1.** A typed dictionary module holds Arabic and English strings, with `Intl` for dates, numbers, and currency. This keeps the stack small and gives full control over RTL. If the copy grows beyond what a typed dictionary can maintain, a library can be introduced later behind the same interface.
- **Numbers and dates.** Western digits everywhere, including Arabic, using the `ar-EG-u-nu-latn` locale. Gregorian calendar. Dates show as day, month, year with Arabic month names in Arabic and English month names in English. Times use the clinic's local timezone and a 12-hour clock with Arabic or English meridiem. The week starts Saturday. Friday and Saturday are the default weekend.
- **Currency.** EGP only. Amounts are stored in piasters and formatted with `Intl.NumberFormat` using the `EGP` currency code and Western digits. Arabic labels use “ج.م” where a short symbol is needed. The UI always shows whether a price is VAT-exclusive.
- **Timezone.** The clinic timezone defaults to `Africa/Cairo` and is configurable from the IANA database. All stored instants are UTC. All patient-facing and staff-facing times are rendered in the clinic timezone. Daylight-saving transitions are handled by the timezone library, not by fixed offsets.
- **Phone numbers.** Normalize to E.164. Accept `01xxxxxxxxx`, `+201xxxxxxxxx`, and other international numbers. Default country is `+20`. Store the normalized value; display a friendly local format. Invalid numbers are rejected before an OTP is sent.
- **Names and bilingual content.** Patient names are stored as entered. Clinic name, Service names, Practitioner display names, and bios have Arabic and optional English values. When English is missing, the UI falls back to Arabic rather than showing an empty label. The public booking page in English shows Arabic content with a clear fallback rather than broken text.
- **Copy ownership.** Error messages, empty states, emails, and SMS templates live in the same copy layer so they can be reviewed in both languages. No string is hardcoded in a component or service.
- **Fonts.** Arabic uses a high-quality Arabic UI font such as IBM Plex Sans Arabic; English uses Inter or the system UI font. Fonts load with `display: swap` and are subset where possible. Arabic line height and letter spacing are tuned separately from English.
- **RTL layout rules.** Use CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline`, `text-align: start`) rather than physical left/right. Mirror directional icons. Keep numbers, phone numbers, and times LTR inside RTL text where needed. Test every major screen in both directions.
- **SEO and sharing.** Public clinic pages have per-clinic title, description, Open Graph image or initials card, canonical URL, and `hreflang` alternates. Manage pages are `noindex` and `no-referrer`. There is no cross-clinic sitemap or directory in v1.

### 13. Security, privacy, and compliance

- **Tenant isolation is tested, not assumed.** Every action service receives the clinic id from the route, verifies membership, and scopes every query by `organizationId`. Cross-tenant tests create two clinics with separate Owners and assert that every read and write across the boundary returns 404 or 403. A global query without `organizationId` is a review failure.
- **Authorization with CASL.** Abilities are built from the caller's organization role and Practitioner profile. Subjects include Clinic, Member, Practitioner, Service, WorkingHours, TimeOff, Patient, Appointment, Notification, Report, Billing, AuditLog, and the platform subjects. Actions include read, create, update, delete, publish, cancel, reschedule, complete, noShow, invite, changeRole, viewBilling, manageBilling, suspend, and adjustCredits. Route decorators are coarse; action services enforce resource-level rules.
- **Role matrix.** Owner can manage the clinic, team, billing, and deletion. Clinic Admin can manage day-to-day operations and read billing, but cannot change the Plan, pay, change the Owner, or delete the clinic. Practitioner can read the clinic calendar, manage their own profile, Working Hours, Time Off, and Appointments, and update status on their own Appointments; they cannot manage Services, team, or billing. Platform Super Admin can operate platform subjects but cannot read Patient records. Patient access is token-scoped only.
- **Public surface hardening.** The anonymous booking controllers expose only published clinic data and token-scoped Appointment data. They never expose a Patient list, a phone lookup, an internal note, or another Patient's Appointment. OTP and manage-link endpoints are rate-limited. Error messages do not reveal whether a phone number exists in another clinic.
- **OTP security.** 6-digit codes, hashed at rest, 5-minute TTL, 5 attempts, rate limits per phone and IP, no logging. The fixed test code is impossible to enable in production. OTP responses do not reveal whether the phone belongs to an existing Patient.
- **Manage-token security.** 256-bit random token, SHA-256 hash at rest, single Appointment scope, expiry 7 days after the Appointment ends, no logging, no referrer, no indexing. A revoked or expired token returns 404, not a hint about the Appointment.
- **Passwords and sessions.** better-auth handles hashing and sessions. Email verification is required. Password reset revokes all sessions. Session cookies are `HttpOnly`, `Secure` in production, `SameSite=Lax`, and scoped to the frontend host through the Next.js proxy. Trusted origins are explicit. Super Admin sessions require TOTP.
- **Secrets.** All secrets are server-only and validated at boot. No secret is prefixed with `NEXT_PUBLIC_`. The server fails fast when a required secret is missing or malformed. `.env` files are never committed.
- **Input validation.** Every body, query, and route parameter is validated with a shared Zod schema where non-trivial. Prisma parameterizes queries; raw SQL is limited to the exclusion constraint migration and the `SELECT 1` connection smoke test.
- **Headers.** Helmet on Nest with sensible defaults, strict CORS for direct API clients, HSTS in production, and Next.js security headers (`X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Content-Type-Options`). A strict nonce-based CSP is a post-MVP hardening item; the baseline must not allow arbitrary third-party scripts.
- **Payments.** No card data is stored. Tap hosted checkout is the only card entry point. Webhook signatures are verified. Billing events are sanitized before storage. PCI scope is SAQ A. Refunds are handled outside the product in v1.
- **PII.** Patient names, phones, emails, notes, and Appointment context are PII. They are never logged, never put in audit metadata, never exposed to Platform Super Admins, and never included in analytics counters. The admin console sees aggregates and clinic metadata only. Database backups are encrypted. Access to production data is restricted and audited.
- **Audit.** Sensitive clinic actions and every Super Admin action are recorded append-only. Audit metadata uses ids and safe labels. Audit records are retained for one year.
- **Deletion and retention.** Clinic deletion unpublishes immediately and purges domain data after 30 days. Billing records required for tax are retained with clinic identifiers, not Patient data. Patient records are not individually hard-deleted from the UI in v1; the clinic deletion policy is the retention path. Legal review under Egyptian data-protection law is required before launch.
- **Security review.** Before launch, run a dedicated security review covering authentication, authorization, tenant isolation, OTP, manage tokens, payments, PII handling, rate limits, and headers. The review is a release gate, not a checklist afterthought.

### 14. Observability, operations, and deployment

- **Logging.** The server uses NestJS-native observability: structured JSON logs through `AppLogger`, with `trace_id` and `span_id` when a span is active. Every HTTP request logs its method and path on arrival and its final status on completion; health checks are excluded. Bodies, query strings, cookies, passwords, tokens, OTP codes, and PII are never logged.
- **Tracing and metrics.** OpenTelemetry is opt-in through OTLP environment variables. When configured, HTTP, Prisma, and queue operations are traced, and logs and metrics export over OTLP. When not configured, exporters stay off and nothing fails because of telemetry. Counters cover Bookings, cancellations, no-shows, OTP failures, Notification failures, billing webhook failures, and queue depth. There is no PostHog or other product analytics vendor in v1.
- **Health.** `/api/health` is an anonymous process-up signal only. The platform console has a richer health view for database, Redis, queues, and webhooks. Health must not fail because an OTLP exporter is unavailable.
- **Queues.** BullMQ on Redis. Queues: mail, SMS, notification dispatch, and billing. Each queue is registered in the module that owns it. Bull Board is mounted at `/api/queues` and requires a Super Admin session. Delayed work and failed jobs survive process restarts because they live in Redis.
- **Dispatcher safety.** The notification dispatcher claims due rows with `FOR UPDATE SKIP LOCKED`, so two server instances cannot send the same Reminder twice. Job ids and dedupe keys make retries idempotent.
- **Deployment topology.** `web` and `admin` deploy to Vercel. `server` deploys as a container or Node service to Railway, Fly.io, or a comparable host. PostgreSQL is managed; Redis is managed with persistence enabled. The API is reached from the frontends through Next.js rewrites so browser cookies remain same-origin. Direct API clients use the API origin with CORS.
- **Environments.** Local, staging, and production. Each has its own database, Redis, secrets, and payment/SMS configuration. Staging uses the fake payment provider or Tap test mode and a safe SMS adapter.
- **Migrations.** `prisma migrate deploy` runs as a release step before the new server starts. Migrations are forward-only in production. Seeds run only in development and staging. The exclusion constraint is applied by a raw migration and verified by an integration test.
- **Backups and recovery.** Daily PostgreSQL backups with at least 7-day retention. Redis persistence is enabled for queues and OTP state; OTP loss is acceptable (patients request a new code), but queue loss is not. A restore procedure is documented and tested before launch.
- **CI.** GitHub Actions with PostgreSQL and Redis services. `nx affected -t lint test build` runs on every change. Server E2E and Playwright suites run for affected projects. Module-boundary lint failures fail CI. Nx Cloud or remote caching is optional.
- **Demo and documentation.** A seed script creates a realistic demo clinic with Arabic and English content, Services, Practitioners, Working Hours, Patients, and Appointments. The repository README documents local setup, environment variables, migrations, seed, test commands, and deployment. API docs are always available at `/api/docs` and `/api/auth/reference`.
- **Operational alerts.** Alert on repeated billing webhook failures, queue backlog above a threshold, failed notification rate, and database/Redis unavailability. Alerts go to the platform operator, not to clinics.

### 15. Accessibility and performance

- **Accessibility target.** WCAG 2.1 AA for both frontends. Every major page and form is checked with `@axe-core/playwright`; serious or critical violations fail the test.
- **Keyboard and focus.** All interactive elements are reachable and operable by keyboard. Focus is visible and moves predictably in dialogs, menus, and the booking wizard. The OTP input supports paste and numeric keyboards. Modals trap focus and restore it on close.
- **Forms.** Every input has a persistent visible label, not a placeholder-only label. Errors are announced to assistive technology and tied to the field. Required fields are indicated in text, not only by colour. The OTP and phone fields have appropriate `inputmode` and `autocomplete` hints.
- **RTL accessibility.** Screen-reader language is set on `<html>`. Arabic labels are not mixed with English UI strings except where the domain requires it. Directional icons have accessible names. Reading order matches visual order in both directions.
- **Contrast and touch.** Text and controls meet AA contrast in both themes. Touch targets are at least 44×44 CSS pixels. Motion respects `prefers-reduced-motion`. Colour is never the only signal for Appointment status.
- **Performance budgets.** Public booking page LCP under 2.5 seconds on a simulated 4G connection, CLS under 0.1, and INP under 200 ms. Availability API p95 under 300 ms for a one-week request. Workspace calendar interactions feel immediate for a week of Appointments.
- **Rendering strategy.** Server components render initial data. React Query handles interactive reads and mutations. Zustand holds only UI state. The calendar and heavy charts are lazy-loaded. The public clinic profile and Service list may be cached for 60 seconds and invalidated on update; availability is never cached.
- **Query discipline.** Availability queries are bounded to 31 days and use indexes. Appointment lists are paginated. No `findMany` without a select on large tables. The calendar fetches one week at a time. Reports aggregate in PostgreSQL, not in JavaScript over the full table.
- **Assets.** No file uploads in v1. Branding uses initials and an accent colour, so there are no large logo images. Fonts are subset and loaded with `display: swap`. Icons are inline SVG through Lucide, not icon fonts.
- **Mobile.** The booking flow is mobile-first. The workspace calendar becomes an agenda list on small screens. Tables become cards. The OTP and confirmation screens are designed for one-handed use.

### 16. Testing Decisions

#### Seams

- **Primary seam: the HTTP API.** Server E2E tests drive the real Nest application with Supertest against a real PostgreSQL database and a real Redis instance. This seam covers authentication, tenancy, authorization, scheduling, Booking, OTP, notifications, billing, admin actions, validation, and response contracts. It is the highest seam and the one that proves the product's external behaviour.
- **Browser seam: Playwright.** Browser tests drive `web` and `admin` against the real API and a seeded database. They cover the patient booking journey, the manage link, the clinic workspace, the admin console, Arabic RTL, English LTR, mobile layout, and accessibility.
- **No second API seam.** The frontends do not get a separate mock-server contract layer. Shared Zod schemas are exercised by the real API responses and by the frontends parsing those responses. There are no schema-only unit tests.
- **Unit tests are the exception.** They exist only for pure logic that is impractical or slow to reach through the API: timezone and DST expansion across Africa/Cairo boundaries, proration and VAT rounding in piasters, SMS segment counting and truncation, and plan-limit counting helpers. If a behaviour can be proven through the API seam, it is not unit-tested.
- **These seams are the proposed defaults for the whole MVP.** If the team prefers a different split before implementation, adjust this section before creating tickets; the rest of the spec does not depend on the exact test runner.

#### What makes a good test

- A test asserts external behaviour that a user or client can observe: an HTTP status, a response shape, a persisted state, a queued Notification, an audit entry, or a visible screen state. It does not assert private methods, internal call order, or Prisma query text.
- A test name describes the behaviour and the rule: “should reject a second Booking for the same Practitioner and time”, not “test 1”.
- Each test owns its data. Factories create clinics, Users, Patients, Services, Practitioners, and Appointments. The database is truncated between tests, and Redis uses a dedicated test database that is flushed.
- Time is controlled in scheduling and billing tests. Use a fixed clock or an injectable clock so DST, notice, cutoff, proration, and dunning tests are deterministic.
- External providers are faked at the adapter boundary, not mocked inside the domain. The fake payment provider returns deterministic checkout and webhook results. The fake mail and SMS adapters capture the payload so tests can assert the message without sending it.

#### Server E2E coverage

- **Auth and account.** Sign-up, email verification, sign-in, sign-out, password reset, session expiry, trusted origins, and Super Admin 2FA enforcement.
- **Tenancy.** Create two clinics with separate Owners; assert that every cross-tenant read and write returns 404 or 403; assert that a member of both clinics can use each clinic through its explicit URL.
- **Onboarding.** Create a clinic, reserve a slug, reject reserved and duplicate slugs, create the Free Subscription, complete onboarding, preview, publish, and unpublish.
- **Services and Practitioners.** CRUD, activation rules, Service-to-Practitioner assignment, Practitioner profile creation for a member, deactivation blocked by future Appointments.
- **Working Hours and Time Off.** Multiple intervals, overlap rejection, overnight rejection, copy-to-days, conflict blocking against future Appointments, and bulk Time Off.
- **Availability.** Working Hours expansion, Time Off subtraction, buffer handling, 15-minute grid, minimum notice, 60-day horizon, 31-day request cap, inactive Service/Practitioner exclusion, and Cairo DST transitions.
- **Booking.** OTP request and verify, wrong code, expired code, attempt limit, rate limits, successful Booking, confirmation Notifications, manage token, repeat Patient upsert, and idempotency replay.
- **Double-booking.** Two concurrent requests for the same Slot produce exactly one 201 and one 409 `SLOT_UNAVAILABLE`; the database contains one Appointment.
- **Manage link.** View, cancel before and after cutoff, reschedule within and beyond the limit, reschedule after cutoff, invalid and expired token, and ICS download.
- **Status transitions.** Complete after start, no-show after end, reject complete before start, reject no-show before end, reject transitions from terminal statuses, and status-history entries.
- **Staff Booking.** Create by phone, bypass patient notice, respect horizon and overlap, and reject past times.
- **Notifications.** Confirmation and Reminder rows, dispatcher claiming, reschedule cancellation and recreation, cancellation cleanup, SMS Credit skip, retry, and provider failure handling.
- **Billing.** Fake checkout, webhook idempotency, upgrade proration, VAT calculation, Invoice numbering, downgrade at period end, cancellation and resume, dunning retries, grace period, expiry to Free, Plan limit enforcement, SMS pack purchase, and manual Super Admin actions.
- **Admin.** Super Admin access, non-Super-Admin rejection, clinic list and detail without Patient data, suspend and reactivate, manual Plan change, credit adjustment, audit entries, and failed billing event reprocessing.
- **Operational.** Health, Swagger JSON generation, public docs completeness, rate-limit responses, and error envelopes.

#### Playwright coverage

- **Patient, Arabic RTL.** Open a clinic page, switch Services, choose a Practitioner, pick a Slot, enter details, complete OTP, confirm, see the confirmation, open the manage link, reschedule, and cancel. Assert RTL direction, Arabic copy, Western digits, and local time labels.
- **Patient, English LTR.** The same journey in English, asserting LTR and English copy.
- **Patient, mobile.** The booking journey at a phone viewport, including the OTP keyboard and the sticky confirmation action.
- **Patient, errors.** Slot taken during the flow, invalid OTP, expired manage link, and cancellation after the cutoff.
- **Clinic Admin.** Sign in, view the dashboard, create a staff Appointment, reschedule, cancel, complete, mark no-show, add an internal note, edit Working Hours, add Time Off, view a report, and inspect a Notification.
- **Owner.** Invite a member, change a role, upgrade a Plan with the fake provider, view an Invoice, buy SMS Credits, and see the Plan limit banner.
- **Practitioner.** Sign in, see only their own schedule, update their Working Hours, add Time Off, complete an Appointment, and confirm billing is hidden.
- **Platform Super Admin.** Sign in with 2FA, view metrics, suspend and reactivate a clinic, change a Plan, adjust SMS Credits, mark an Invoice paid, reprocess a billing event, and verify the audit log.
- **Accessibility.** Axe checks on the landing page, booking page, OTP step, confirmation, manage page, dashboard, calendar, Appointment detail, Services, Practitioners, settings, billing, admin dashboard, and admin clinic detail. No serious or critical violations.
- **RTL and LTR snapshots.** Direction, navigation order, mirrored icons, and form alignment in both locales.

#### Prior art and conventions

- The existing `server-e2e` project is the starting point for the API seam; replace the placeholder health test with Supertest flows against the real app.
- There is no existing Playwright project. Create `web-e2e` and `admin-e2e` with the standard Nx Playwright setup, one project per app, and shared helpers for seeding and signing in.
- Factories follow `create` + noun: `createClinic`, `createUser`, `createPatient`, `createAppointment`, `createWorkingHours`.
- Test data uses the shared Zod schemas to build valid payloads, so a contract change breaks the tests at the same time as the client.
- No `*.schema.spec.ts`, no Prisma tests, no Nest framework tests, and no tests that only parse a Zod schema.

## Out of Scope

The following are deliberately excluded from the MVP. They are not forgotten; they are deferred so the scheduling core, the multi-tenant boundary, and the billing state machine can be built and proven first.

### Patient and clinical scope

- Patient payments, deposits, refunds, cancellation fees, and payment-related Service pricing.
- Insurance, claims, and eligibility checks.
- Clinical records, diagnoses, prescriptions, lab results, attachments, and a full EMR.
- Patient accounts, a patient portal beyond the single-Appointment manage link, and global patient identity across clinics.
- Booking on behalf of a family member in the patient flow; staff can still create the Appointment.
- Telemedicine, video visits, and chat.
- Waitlists, Slot holds, and automatic fill of cancelled Slots.
- Group Appointments, recurring Appointments, multi-day Services, and overnight Working Hours.
- Rooms, chairs, equipment, and other bookable resources beyond the Practitioner.
- Multiple Locations per clinic. V1 has one primary Location, though the schema leaves room for more.
- Practitioner profiles without a login; every Practitioner is a Clinic Member.

### Marketplace and discovery

- Cross-clinic search, ranking, directory, map discovery, and geo search.
- Reviews, ratings, and public practitioner profiles outside a clinic's booking page.
- Custom domains and fully white-labelled booking pages.
- A cross-clinic sitemap or directory page.

### Notifications and communication

- WhatsApp messaging, two-way SMS conversations, and patient chat.
- Marketing campaigns, newsletters, and promotional messages.
- In-app notification centre and push notifications.
- Patient notification preference centre beyond the transactional email/SMS the Appointment requires.
- Automated no-show follow-up sequences beyond the optional single follow-up.

### Billing and commercial

- Annual billing, coupons, referrals, trials, and promotional pricing.
- Metered overage billing and automatic top-ups.
- Multi-currency and non-EGP pricing.
- Self-serve refunds, credit notes, and chargebacks.
- Tax exemptions, complex tax rules, and e-invoicing integration.
- Paymob full parity beyond the adapter seam.
- A full PDF invoice generator; v1 uses a print-friendly HTML Invoice.
- Enterprise SSO/SAML, SCIM, and directory sync.

### Platform and operations

- PostgreSQL RLS in v1; application-level isolation is the chosen boundary.
- A third-party product analytics vendor such as PostHog.
- Super Admin impersonation of a clinic user.
- Super Admin access to Patient records or clinical notes.
- Drag-and-drop calendar rescheduling.
- CSV, Excel, or PDF report exports and a data warehouse.
- A native mobile app, offline mode, and a PWA install experience.
- Custom roles beyond Owner, Clinic Admin, Practitioner, and Platform Super Admin.
- A public API for third-party integrations and webhooks for clinics.
- Automated backup restore drills and a multi-region disaster-recovery plan.

## Further Notes

### Delivery approach

Build the MVP as vertical slices, not as a schema-first waterfall. Each ticket introduces only the Prisma tables, migrations, shared Zod schemas, API routes, screens, and tests that its slice needs. The target model in this spec is the destination; it is not a reason to create unused tables early.

Suggested milestone order:

1. **Foundation.** Generate `web`, `admin`, and the shared schemas package; align the existing server scaffold; wire better-auth, the Organization plugin, tenancy, roles, email verification, password reset, the Free Subscription, onboarding, health, Swagger, CI, and the seed script.
2. **Scheduling core.** Services, Practitioners, Working Hours, Time Off, availability computation, staff Booking, the calendar, and the Appointment status machine.
3. **Public Booking.** The branded booking page, OTP, Booking creation, the manage link, cancel, reschedule, ICS, and confirmation Notifications.
4. **Clinic operations.** Patients, Appointment lists, reports, Notification delivery view, audit log, settings, team management, and the dashboard.
5. **Billing.** Plans, Tap and fake providers, checkout, Invoices, VAT, proration, dunning, SMS Credits, and Plan limit enforcement.
6. **Platform console.** Metrics, clinics, Plans, Subscriptions, Invoices, Payments, billing events, credits, audit, health, and 2FA.
7. **Hardening and launch.** Accessibility, performance, security review, deployment, backups, demo data, documentation, and a full end-to-end rehearsal.

### Decisions that need confirmation before launch

- The exact Free, Starter, and Pro limits and the SMS Credit pack prices are initial seed values. Confirm them with the business before publishing pricing.
- The VAT treatment and whether list prices should be shown VAT-inclusive or VAT-exclusive must be confirmed by an accountant.
- The SMS provider choice: Twilio is the initial adapter, but a local Egyptian aggregator may be cheaper and more reliable. The adapter seam makes the swap cheap.
- Paymob full parity versus Tap-only for the first release.
- The retention period for Patient records and the legal requirements under Egyptian data-protection law.
- Whether clinics need logo uploads in v1 or whether initials plus an accent colour are enough for the portfolio demo.
- Whether family-member Booking should enter the MVP if patient feedback demands it.
- Whether Practitioners should read all clinic Appointments or only their own. The current decision is read-all, update-own, for coordination.
- Whether Super Admin 2FA is required at launch or can be a fast-follow. The security recommendation is to require it at launch.

### Risks and mitigations

- **OTP deliverability.** Egyptian SMS routes can be slow or filtered. Mitigate with a provider adapter, a clear resend path, rate limits, and a clinic phone number in the failure state.
- **SMS cost.** Reminders consume credits. Mitigate with email-first reminders, a visible balance, plan grants, and pack purchases.
- **Tap webhook reliability.** Webhooks can arrive late, twice, or out of order. Mitigate with signature verification, idempotent billing events, a processing queue, and admin reprocessing.
- **DST and timezone bugs.** Cairo DST changes can produce missing or duplicated local times. Mitigate with a timezone library, deterministic unit tests around the transition dates, and UTC storage.
- **Double-booking races.** Application checks alone are not enough. Mitigate with the database exclusion constraint and a concurrency test.
- **Arabic search and normalization.** Arabic names have spelling variants. V1 uses simple contains search; fuzzy Arabic search is a later improvement.
- **Plan limit enforcement.** Limits can be bypassed by a client bug. Mitigate with server-side checks in action services and API tests for every limit.
- **PII leakage.** Logs, audit metadata, and admin views are the likely leaks. Mitigate with explicit redaction, masked UI, and a security review.
- **Queue backlog.** A provider outage can grow the queue. Mitigate with alerts, retry limits, and a visible failed-job count in the admin console.
- **Onboarding friction.** A clinic may not finish setup. Mitigate with a checklist, a preview, sensible defaults, and a demo seed that shows the finished state.

### References

- `GLOSSARY.md` — canonical domain vocabulary. Use these terms in tickets, code, tests, and UI copy.
- `docs/adr/0001-prisma-client-commonjs.md` — Prisma Client is generated as CommonJS for the Nest webpack build.
- `docs/adr/0002-multi-tenant-per-clinic-booking.md` — per-clinic booking pages, not a marketplace.
- `docs/adr/0003-patient-user-separation.md` — Patients are not Users; guest OTP and single-Appointment tokens.
- `docs/adr/0004-organization-as-clinic.md` — the Organization record is the Clinic; domain tables use `organizationId`.
- `docs/adr/0005-application-level-tenant-isolation.md` — application-level isolation; RLS deferred.
- `docs/adr/0006-subscription-billing-only.md` — no patient payments in v1.
- `docs/adr/0007-tap-payments-owned-subscription-state-machine.md` — Tap behind a provider interface; the domain owns the Subscription state machine.
- `docs/adr/0008-free-plan-instead-of-trial.md` — permanent Free plan with hard limits.
- `docs/adr/0009-locale-query-param-with-internal-rewrite.md` — `?lang` plus internal `/[locale]` rewrite.
- `docs/adr/0010-web-hosts-patient-and-clinic-workspace.md` — `web` hosts both patient and clinic surfaces; `admin` is the platform console.
- `docs/agents/issue-tracker.md` — local markdown tracker conventions under `.scratch/`.
- `docs/agents/domain.md` — how to consume the glossary and ADRs.
- `docs/agents/triage-labels.md` — canonical triage labels.
- `docs/rules/` — backend and frontend engineering standards.

### Definition of done

The MVP is done when:

- Every user story in this spec is covered by an implemented ticket or explicitly deferred in Out of Scope.
- A clinic can sign up, verify email, create a clinic, complete onboarding, publish a booking page, and take a real Booking end to end.
- A Patient can book in Arabic RTL and English LTR, receive email and SMS confirmation, open the manage link, reschedule within the rules, and cancel within the cutoff.
- A Clinic Admin can run a day from the calendar, create a staff Appointment, complete or no-show it, and see accurate reports.
- An Owner can invite team members, change roles, upgrade a Plan with the fake provider (and Tap test mode), see a VAT Invoice, buy SMS Credits, and hit a Plan limit with a clear upgrade path.
- A Platform Super Admin can sign in with 2FA, see platform metrics, suspend and reactivate a clinic, change a Plan, adjust credits, reconcile an Invoice, reprocess a billing event, and see the audit trail.
- Double-booking is impossible under concurrent requests, and the database exclusion constraint is proven by a test.
- Cross-tenant access is impossible and proven by tests for every domain resource.
- Reminders survive a restart and are cancelled correctly on reschedule and cancellation.
- Arabic and English are complete, RTL is correct, Western digits and EGP formatting are consistent, and the major screens pass axe with no serious or critical violations.
- The public booking page meets the performance budget on a simulated 4G connection.
- Swagger documents every endpoint with typed schemas, examples, and error responses; better-auth docs are available separately.
- The security review is complete, secrets are server-only, PII is redacted from logs and admin views, and the deletion/retention policy is documented.
- CI runs lint, typecheck, unit tests, server E2E, and Playwright for affected projects, and the demo seed produces a presentable clinic in both languages.
- The README explains local setup, migrations, seed, test commands, environment variables, and deployment.
