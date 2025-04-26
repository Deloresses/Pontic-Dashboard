# Pontic Dashboard

Pontic Dashboard is a modern, responsive web application for dental professionals, providing financial clarity, tracking, and planning tools. Built using Next.js 14, SCSS, and a custom design system.

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

---

## Tech Stack

- Next.js 14 (App Router)
- SCSS Modules
- Custom Design System (Primitives + Semantics)
- Supabase (for backend/data)
- TypeScript
- Vercel (for deployment)

---

## Project Structure

```bash
/src
  /app
    /components
    /styles
    layout.tsx
    page.tsx
/public
```

---

## Development Notes

- SCSS tokens are separated into `_primitives.scss` and `_semantics.scss`.
- Components are modular and import their own SCSS modules.
- Layout and page structure use CSS Grid based on a 12-column responsive system.
- Global styles are handled in `globals.scss` and `globals.module.scss`.

---

## Deployment

We recommend deploying to [Vercel](https://vercel.com/).

```bash
vercel
```

---

## Contributing

Currently a solo project — contributions and improvements are welcome in the future!

---

# .gitignore

# Node.js
node_modules
.next
out
dist

# System
.DS_Store

# Environment
.env
.env.local
.env.*.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
