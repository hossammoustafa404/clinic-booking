# Application-level tenant isolation; RLS deferred

Every domain table carries `organizationId`, and tenant context is resolved from the active membership and enforced in action services, with cross-tenant integration tests. PostgreSQL RLS is deferred because it requires transaction-scoped session settings on every Prisma query and complicates public booking and better-auth tables; the data model remains compatible with adding it later.
