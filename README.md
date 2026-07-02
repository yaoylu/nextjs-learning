# nextjs-learning

Learning Next.js from scratch — SSR, file-based routing, server/client components, data fetching strategies.

**Live demo:** https://nextjs-learning.azurewebsites.net/

**Source:** https://github.com/yaoylu/nextjs-learning

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's covered

| Route | Concept | What it teaches |
|-------|---------|-----------------|
| `/about` | File-based routing | Folder = route, `page.tsx` convention |
| `/blog`, `/blog/[slug]` | Dynamic routes + SSG | `[slug]` parameter, `generateStaticParams` |
| `/blog/*` | Nested layout | `layout.tsx` scoped to a route segment |
| `/server-demo` | Server Component | `await fetch()` in component, SSR |
| `/client-demo` | Client Component | `"use client"`, useState, onClick |
| `/mixed-demo` | Server + Client | Server fetches data, Client handles interaction |
| `/client-fetch` | Client data fetching | useEffect + fetch (compare with server) |
| `/data-fetch` | Server data strategies | Static, Dynamic (`no-store`), ISR (`revalidate`) |
| `/loading-demo` | Loading UI | `loading.tsx` convention, Suspense |
| `/error-demo` | Error UI | `error.tsx` convention, error boundary, reset |
| `/server-action` | Server Actions | `"use server"`, form action, no API route needed |
| `/api-demo` | API Routes | `route.ts`, GET/POST/DELETE handlers |
| `/protected` | Middleware | Auth redirect, logging, custom headers |

## Learning progress

| # | Concept | Status |
|---|---------|--------|
| 1 | File-based routing | done |
| 2 | Layouts | done |
| 3 | Server vs Client Components | done |
| 4 | Data fetching (Server) | done |
| 5 | Loading & Error UI | done |
| 6 | Server Actions | done |
| 7 | Dynamic routes (generateStaticParams) | done |
| 8 | API Routes | done |
| 9 | SSR vs SSG vs ISR | done |
| 10 | Middleware | done |
