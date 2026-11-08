# Component Design

## General Rules

- Components are **small, focused, and single-responsibility**.
- Props interface is always explicit and exported if reused. Feature-level object shapes live in `interfaces/`. Component-local props may stay colocated in the component file as `interface`, never `type`.
- Default to named exports. Use `export { Component }` pattern.

## Server & Client Components

- Default to Server Components. See `nextjs.md` for `"use client"` criteria, data fetching, and boundary placement.
- Mark Client Components with `"use client"` at the **top of the file**.
- Co-locate React Query hooks, Zustand selectors, and react-hook-form logic near the component.

## shadcn/ui Usage

- Shared primitives live in `@saas-kit/components`. Import from `@saas-kit/components/ui/*`.
- Never duplicate shadcn components inside `apps/web` or `apps/admin`.
- Customize via `className` prop and Tailwind utilities. See `styling.md`.
- For new UI primitives, add from an app with `npx shadcn@latest add <component>` — the monorepo `components.json` files route installs into `packages/components`.
- Do not fork shadcn internals into `features/`.
