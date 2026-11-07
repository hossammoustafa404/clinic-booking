# 36: Platform credits, audit, health, and Bull Board

**What to build:** A Super Admin adjusts SMS Credits, views the platform audit log and system health, and opens a Super-Admin-only Bull Board.

**Blocked by:** 25 — Audit log, 31 — SMS Credit packs and ledger, 32 — Platform foundation, 2FA, and metrics, 33 — Platform clinic management

**Status:** ready-for-agent

- [ ] SMS Credit adjustments require a reason and are idempotent.
- [ ] The platform audit log filters by actor, clinic, action, and date.
- [ ] Health shows database, Redis, queue counts, failed jobs, and last successful webhook per provider.
- [ ] Bull Board is available only to a Super Admin session.
- [ ] Health does not fail when OTLP is unconfigured.
- [ ] All privileged actions are audited.
