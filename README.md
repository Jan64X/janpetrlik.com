# Personal Portfolio

My portfolio website built with Astro. Showcases infrastructure projects, network deployments, and hardware hacking.

## About

Third-year high school student in Czech Republic. I automate infrastructure, manage production systems, and occasionally reverse engineer things that shouldn't require cloud services.

## Tech Stack

- **Astro 5** - Static site generation
- **MDX** - Blog posts with content collections
- **Custom CSS** - Dark theme optimized for technical content
- **Zod schemas** - Type-safe content validation

## Structure

```
/
├── src/
│   ├── components/       # Reusable UI components
│   ├── content/
│   │   ├── blog/        # Blog posts (MDX)
│   │   └── config.ts    # Content schemas
│   ├── layouts/         # Page layouts
│   └── pages/           # Routes (index, about, projects, blog)
├── public/              # Static assets
└── astro.config.mjs
```

## Running Locally

```bash
npm install
npm run dev          # localhost:4321
npm run build        # Production build to ./dist/
npm run preview      # Preview production build
```

## Writing Blog Posts

Posts live in `src/content/blog/` as MDX files:

```mdx
---
title: "Post Title"
description: "Brief description"
date: "2025-11-30"
tags: ["ansible", "infrastructure"]
---

Content here with full MDX support...
```

**Content philosophy:**
- Technical depth over buzzwords
- Show actual implementations, not just theory
- Include code snippets and configurations
- Document what worked and what didn't

## Deployment

Static site - deploy anywhere:
- Nginx (what I use)
- Apache/Caddy
- GitHub Pages
- Netlify/Vercel
- Any static host

---

*Built with Astro. Ships fast, loads faster.*