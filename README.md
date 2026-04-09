# PagensMedia - Premium Web Design Agency Website

A premium, conversion-focused marketing website for PagensMedia, a web design agency specializing in custom websites, landing pages, and admin panels for agencies, hotels, real estate, and service businesses.

## Features

- **Premium Design System**: Modern, clean aesthetic with vibrant gradient accents (pink → purple → blue → cyan)
- **Conversion-Focused**: Strategic CTAs, trust signals, and persuasive copy optimized for lead generation
- **Fully Responsive**: Mobile-first design with breakpoints for all devices
- **Performance Optimized**: Static site generation with Astro for fast load times
- **SEO Ready**: Proper meta tags, structured data, semantic HTML, and accessibility
- **Spanish Copy**: Polished Latin American Spanish content tailored to target market

## Tech Stack

- **Framework**: Astro 6.x
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Inter (Google Fonts)
- **Icons**: SVG (inline)

## Project Structure

```
src/
├── components/          # Reusable section components
│   ├── Header.astro     # Sticky navigation with mobile menu
│   ├── Hero.astro       # Main hero section with CTAs
│   ├── TrustStrip.astro # Benefits bar
│   ├── Services.astro   # 6 service cards
│   ├── WhyChooseUs.astro # Differentiators section
│   ├── Process.astro    # 4-step timeline
│   ├── Portfolio.astro  # Case studies grid
│   ├── Testimonials.astro # Client testimonials
│   ├── FAQ.astro        # Accordion FAQ
│   ├── ContactCTA.astro # Final conversion section
│   └── Footer.astro     # Site footer
├── layouts/
│   └── Layout.astro     # Base HTML layout with SEO
├── pages/
│   └── index.astro      # Main landing page
├── styles/
│   └── global.css       # CSS variables and reset
└── assets/              # Static assets
```

## Page Sections

1. **Header**: Sticky navigation with smooth scroll and mobile hamburger menu
2. **Hero**: Full-height with gradient background, headline, dual CTAs, social proof
3. **Trust Strip**: 5 key benefits with icons
4. **Services**: 6-card grid (Landing Pages, Corporate Sites, Admin Panels, Redesign, Hotels, Real Estate)
5. **Why Choose Us**: 5 differentiators with alternating layout
6. **Process**: 4-step horizontal timeline (vertical on mobile)
7. **Portfolio**: 4 case study cards with hover effects
8. **Testimonials**: 3 client testimonial cards
9. **FAQ**: 6 accordion items addressing common objections
10. **Contact CTA**: Dark section with animated gradient orbs
11. **Footer**: Multi-column with social links

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

### Colors
- **Primary Gradient**: #FF6B9D → #9B59B6 → #3498DB → #00D4FF
- **Background**: White (#FFFFFF) with cool gray accents
- **Text**: Slate 900 for headings, Slate 600 for body
- **Accents**: Pink, Purple, Blue, Cyan, Emerald (success), Amber (warning)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Hero H1**: 72px (desktop), 40px (mobile)
- **H2**: 48px (desktop), 32px (mobile)
- **Body**: 16-18px with 1.6 line height

### Spacing
- **Section Padding**: 120px (desktop), 80px (mobile)
- **Container Max-Width**: 1280px
- **Base Unit**: 4px

## SEO

- Title: "PagensMedia | Diseño Web Premium para Agencias y Empresas"
- Meta Description optimized for LATAM market
- Structured data (Schema.org ProfessionalService)
- Semantic heading hierarchy (H1 → H2 → H3)
- Keywords: diseño web, landing pages, agencia web, sitios corporativos

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 PagensMedia. All rights reserved.
