# `web` hosts patient booking and the clinic workspace; `admin` is the platform console

Patient booking pages, the patient manage link, and the clinic staff dashboard all live in `apps/web` behind separate route groups and layouts. `apps/admin` is only the platform super-admin console for tenants, plans, subscriptions, and audit. This keeps clinic work in one app and the platform console small and separately deployed.
