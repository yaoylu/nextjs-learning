# nextjs-learning

Learning Next.js from scratch — SSR, file-based routing, server/client components, data fetching strategies.

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
| `/blog`, `/blog/[slug]` | Dynamic routes | `[slug]` parameter, nested routes |
| `/blog/*` | Nested layout | `layout.tsx` scoped to a route segment |
| `/server-demo` | Server Component | `await fetch()` in component, SSR |
| `/client-demo` | Client Component | `"use client"`, useState, onClick |
| `/mixed-demo` | Server + Client | Server fetches data, Client handles interaction |
| `/client-fetch` | Client data fetching | useEffect + fetch (compare with server) |
| `/data-fetch` | Server data strategies | Static, Dynamic (`no-store`), ISR (`revalidate`) |

## Learning progress

| # | Concept | Status |
|---|---------|--------|
| 1 | File-based routing | done |
| 2 | Layouts | done |
| 3 | Server vs Client Components | done |
| 4 | Data fetching (Server) | done |
| 5 | Loading & Error UI | next |
| 6 | Server Actions | |
| 7 | Dynamic routes (generateStaticParams) | |
| 8 | API Routes | |
| 9 | SSR vs SSG vs ISR | |
| 10 | Middleware | |
| 11 | Deployment | |
