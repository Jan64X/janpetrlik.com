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

## License & Copyright

There is an important distinction between the open-source **code** of this repository and the proprietary **content** it contains.

### Website Source Code — MIT License

The underlying website infrastructure — layouts, UI components, pages, configuration files, and build tooling — is open source under the **[MIT License](LICENSE)**. 

Concretely, this covers the code within:

- `src/components/`

- `src/layouts/`

- `src/pages/` (the Astro layout code/structure, **excluding** the personal content/text contained inside)

- `src/content/config.ts` (the Astro content collection schema)

- `astro.config.mjs`, `tsconfig.json`, `package.json`, and other configuration files

You are free to fork this repository and use the code as the basis for your own portfolio. Attribution is appreciated but not required.

### Content & Personal Information — All Rights Reserved

All personal content is the **exclusive intellectual property of Jan Petrlík** and is **not** covered by the MIT License. This includes, but is not limited to:

- All files within `src/content/` (**except** `config.ts`), which includes blog posts, documents, and associated assets

- Personal descriptions, project write-ups, and biographical information hardcoded into `src/pages/*.astro` files (e.g., `about.astro`, `projects.astro`)

- Any photographs, diagrams, logos, or media assets

**Reproducing, redistributing, or reusing this proprietary content without prior written consent is strictly prohibited.**

### AI Training & Data Mining — Prohibited

Regardless of whether content is accessed via the live website or this repository, the automated scraping, harvesting, or use of any proprietary content for AI training, fine-tuning, data mining, or Retrieval-Augmented Generation (RAG) is **strictly prohibited** without prior written consent, as outlined in [public/robots.txt](public/robots.txt) and the [Legal Notice](https://janpetrlik.com/legal) on the live site.

This prohibition applies to Markdown files, MDX files, text within Astro files, and any other content-bearing files in this repository.

---

*Built with Astro. Ships fast, loads faster.*