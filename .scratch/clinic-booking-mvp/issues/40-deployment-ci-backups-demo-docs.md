# 40: Deployment, CI, backups, demo seed, and documentation

**What to build:** The MVP deploys to staging and production, CI covers affected projects, backups restore, a bilingual demo clinic is seeded, and the README and runbook are complete.

**Blocked by:** 39 — Security review and hardening

**Status:** ready-for-agent

- [ ] Staging and production deploy `web`, `admin`, and `server` with managed PostgreSQL and Redis.
- [ ] `prisma migrate deploy` runs before the new server starts.
- [ ] Daily PostgreSQL backups are configured and a restore is tested.
- [ ] CI runs lint, typecheck, unit, server E2E, and Playwright for affected projects.
- [ ] The demo seed creates a presentable bilingual clinic with Services, Practitioners, hours, Patients, and Appointments.
- [ ] The README documents setup, environment variables, migrations, seed, tests, and deployment.
- [ ] The runbook covers alerts, queue failures, billing webhook failures, and restore.
