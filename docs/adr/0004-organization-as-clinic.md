# Organization is the Clinic

better-auth's Organization plugin owns tenancy, so the clinic's domain fields (slug, timezone, currency, locale, booking policies) live on the Organization record and domain tables reference `organizationId`. A separate Clinic table would duplicate the tenant and force extra joins across auth and domain boundaries; product language still says Clinic.
