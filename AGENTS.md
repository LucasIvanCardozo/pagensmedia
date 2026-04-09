# PagensMedia Agent Guide

## Project Overview

Single-page marketing website for PagensMedia web design agency. Static site built with Astro 6, TypeScript, CSS Modules.

**Node requirement**: `>=22.12.0`

## Dev Commands

```bash
npm run dev      # Start dev server (http://localhost:4321)
npm run build    # Build static site to dist/
npm run preview  # Preview built site
npm run astro    # Run Astro CLI directly
```

## Architecture

- **Entry point**: `src/pages/index.astro`
- **Base layout**: `src/layouts/Layout.astro` (contains HTML shell, SEO, structured data)
- **Components**: `src/components/*.astro` with co-located `*.module.css` files
- **Global styles**: `src/styles/global.css` (CSS custom properties, reset, utilities)
- **Output**: Static site (`output: 'static'` in astro.config.mjs)

## Component Pattern

Each component uses CSS Modules:
- `Component.astro` imports styles from `./Component.module.css`
- Classes accessed via `styles.className`
- Frontmatter uses `---` delimiters

```astro
---
import styles from './Component.module.css';
---
<section class={styles.hero}>...</section>
```

## Design System

CSS custom properties in `global.css`:
- Gradient: `--gradient-primary` (pink → purple → blue → cyan)
- Section spacing: `--section-padding-y: 120px` (desktop), `80px` (mobile)
- Container: `--container-max-width: 1280px`
- Breakpoint: 767px (mobile)

## SEO/Metadata

- Language: `lang="es"` (Spanish, Argentina)
- Canonical + OG/Twitter meta in `Layout.astro`
- Structured data: Schema.org `Organization` + `ProfessionalService` with AggregateRating
- Site URL: `https://www.pagensmedia.com`
- `public/sitemap.xml` — submit to Google Search Console
- `public/robots.txt` — allows all crawlers
- OG image: `logo.jpg` (400x400px)

## Missing from index.astro

The main page (`src/pages/index.astro`) currently includes only:
- Header, Hero, TrustStrip, Services, WhyChooseUs, Process, ContactCTA, Footer

NOT included (present in README but not imported):
- Portfolio
- Testimonials
- FAQ

## Available Skills

OpenCode skills installed in `.opencode/skills/`:
- `astro/` - Astro framework patterns
- `accessibility/` - WCAG 2.2 guidelines
- `seo/` - Search optimization
- `frontend-design/` - UI design quality
