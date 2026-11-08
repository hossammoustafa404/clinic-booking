# 01: Walking skeleton and shared contract baseline

**What to build:** The three apps and the shared contract package exist and build together, with a health contract consumed by each app, API documentation, a minimal landing page, and a minimal admin shell.

**Blocked by:** None (can start immediately)

**Status:** claimed

- [ ] `web`, `admin`, `server`, `web-e2e`, `admin-e2e`, and the shared schemas package exist with the agreed Nx tags and path aliases.
- [ ] The shared health schema is consumed by `server`, `web`, and `admin`.
- [ ] `GET /api/health` returns the shared health response.
- [ ] The landing page and admin shell render in Arabic and English with the correct document direction.
- [ ] `nx affected -t lint test build` passes in CI.
- [ ] API docs are served at `/api/docs` and `/api/docs-json`.
