# Personal Portfolio

Professional portfolio website showcasing infrastructure, networking, and reverse engineering projects.

## About

This is my personal portfolio built with Astro. I'm a third-year high school student in Czech Republic with hands-on experience in:

- **Systems Administration**: Managing production VPS and homelab infrastructure
- **Infrastructure Automation**: 10,500-line Ansible playbook for complete homelab deployment
- **Network Engineering**: MikroTik RouterOS, IPv6, VLANs (Hurricane Electric IPv6 Sage)
- **Reverse Engineering**: Embedded device security, firmware modification, hardware analysis
- **Development**: Python, Bash, Rust (learning), C++ (embedded)

## Tech Stack

- **Framework**: Astro 5
- **Content**: MDX for blog posts with content collections
- **Styling**: Custom CSS with dark theme
- **Deployment**: Static site generation

## Project Structure

```
personal-portfolio/
├── src/
│   ├── components/        # Reusable components
│   │   ├── BlogCard.astro
│   │   ├── ProjectCard.astro
│   │   └── SkillCategory.astro
│   ├── content/          # Content collections
│   │   ├── blog/         # Blog posts (MDX)
│   │   └── config.ts     # Content schema
│   ├── layouts/          # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   └── pages/            # Routes
│       ├── index.astro   # Homepage
│       ├── about.astro   # About/CV
│       ├── projects.astro # Projects showcase
│       ├── blog.astro    # Blog index
│       └── blog/
│           └── [slug].astro # Individual blog posts
├── public/               # Static assets
└── astro.config.mjs      # Astro configuration
```

## Features

- **Dark Mode**: GitHub-inspired dark theme optimized for technical content
- **Blog**: MDX-powered blog with syntax highlighting for code snippets
- **Projects Showcase**: Detailed project cards with tags and links
- **Responsive Design**: Mobile-friendly layout
- **Fast Loading**: Minimal JavaScript, optimized performance
- **Type Safety**: Zod schemas for content validation

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Writing Blog Posts

Blog posts are written in MDX and stored in `src/content/blog/`. Each post requires frontmatter:

```mdx
---
title: "Your Post Title"
description: "Brief description for preview"
date: "2025-10-15"
tags: ["tag1", "tag2"]
---

Your content here with full MDX support...
```

## Content Guidelines

- **Technical but approachable**: Focus on actual work, not buzzwords
- **Show depth**: Include code examples and technical details
- **Document learnings**: What worked, what didn't, lessons learned
- **Be specific**: Exact versions, configurations, commands when relevant

## Deployment

This site generates static HTML and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

Content and projects are my own work. Feel free to use the Astro structure/components as reference.

## Contact

- GitHub: [@jan64x](https://github.com/jan64x)
- Email: [your.email@example.com](mailto:your.email@example.com)

---

Built with Astro. Optimized for readability and technical depth.


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
