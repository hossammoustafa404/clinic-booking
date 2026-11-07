# Tech Stack

Approved technologies for the NestJS backend. **NEVER** introduce alternatives without updating this file first.

## Stack Overview

| Layer          | Technology                                                         | Rule file               |
| -------------- | ------------------------------------------------------------------ | ----------------------- |
| Framework      | NestJS                                                             | `nestjs.md`             |
| Language       | TypeScript                                                         | `naming-conventions.md` |
| Architecture   | Feature modules + `shared/` infra                                  | `architecture.md`       |
| Database       | PostgreSQL + Prisma (`shared/prisma/`)                             | `database.md`           |
| Validation     | Zod (shared package) + `nestjs-zod`                                | `validation.md`         |
| Authentication | `@thallesp/nestjs-better-auth`                                     | `authentication.md`     |
| Authorization  | CASL (`@casl/ability`)                                             | `authorization.md`      |
| API            | REST (JSON) — any HTTP client                                      | `controllers.md`        |
| API docs       | `@nestjs/swagger` + better-auth `openAPI()`                        | `api-docs.md`           |
| Config         | `@nestjs/config` (`shared/config/`)                                | `nestjs.md`             |
| Mail           | Resend                                                             | `authentication.md`     |
| Queue          | Redis + BullMQ (`shared/queue/`) + Bull Board                      | `authentication.md`     |
| Logging        | NestJS Logger; `AppLogger` (JSON stdout + OTLP) when tracing is on | `nestjs.md`             |
| Tracing        | OpenTelemetry NodeSDK → OTLP backend (opt-in; e.g. Grafana)        | `nestjs.md`             |
| Testing        | Jest + Supertest                                                   | `testing.md`            |

Mail is plain text via Resend. BullMQ’s Redis connection is registered once in `shared/queue/`. Each queue (`mail`, later others) calls `BullModule.registerQueue` in its own module and `BullBoardModule.forFeature` so it appears on Bull Board. Jobs are processed in the same Nest process. **NEVER** send mail inline on the request path, **NEVER** call `BullModule.forRoot` or `BullBoardModule.forRoot` outside `shared/queue/`, and **NEVER** back the queue with PostgreSQL. Bull Board (`@bull-board/nestjs`) is mounted at `/api/queues` and requires a Super Admin Session — the global AuthGuard does not cover that Express mount.

v1 uses NestJS-native observability: `AppLogger` for structured JSON logs and OpenTelemetry/OTLP for traces when configured. **NEVER** add a product analytics vendor in v1; revisit one only if product analytics becomes a requirement.

Traces use the OpenTelemetry NodeSDK (`@opentelemetry/sdk-node`, `@opentelemetry/auto-instrumentations-node`, `@opentelemetry/exporter-trace-otlp-proto`, `@prisma/instrumentation`) when `OTEL_EXPORTER_OTLP_ENDPOINT` (or a signal-specific `OTEL_EXPORTER_OTLP_*_ENDPOINT`) is set. Start the SDK before Nest loads so HTTP and Prisma auto-instrumentation can patch. Export over standard OTLP HTTP/protobuf (`/v1/traces`, `/v1/logs`, `/v1/metrics`) to any compatible backend (Grafana Cloud OTLP gateway, Alloy, Collector, Tempo/Loki/Mimir). Auth headers go in `OTEL_EXPORTER_OTLP_HEADERS` (`key=value,key2=value2`). **NEVER** couple OTLP export to a product analytics vendor's env vars. **NEVER** let an OpenTelemetry failure fail auth or Health.

When tracing is on, Nest uses `AppLogger` (JSON stdout with `trace_id` / `span_id` when a span is active) and the same NodeSDK exports Logs over OTLP (`@opentelemetry/exporter-logs-otlp-proto`). When no OTLP endpoint is set, exporters stay off (noop spans / empty log processors). **NEVER** `capture()` a Log. Log every HTTP request as it arrives (`Incoming Request: METHOD /path`) and its final status (`Outcoming Response: METHOD /path 200 OK`, or the same prefix for thrown 4xx/5xx) — skip Health. Warn includes the exception message; error includes the message and a `stack` field. Better-auth incoming and outgoing status is logged from `httpObservabilityPlugin` (`hooks.before` / `hooks.after`), not the Nest interceptor or filter. **NEVER** log query strings, bodies, cookies, passwords, tokens, or PII.
