# Social Gaming Eindhoven Website

A production-ready, SEO-optimized static website for socialgamingeindhoven.nl. Built with Next.js, TypeScript, and Tailwind CSS.

## Project Overview

This website is designed to:
- Rank for keywords like "social gaming eindhoven", "groepsactiviteiten eindhoven", "teamuitje eindhoven"
- Educate visitors about the social gaming concept
- Position ClashRooms as the best way to experience social gaming in Eindhoven
- Convert traffic to https://clashrooms.nl/boeken

The site is completely static, fully responsive, and optimized for both users and search engines.

## Features

- ✅ 9 fully optimized pages with unique SEO meta tags
- ✅ 4 comprehensive blog articles (600+ words each)
- ✅ Reusable React components (Navbar, Footer, CTAButton, FAQAccordion, TestimonialCard, ComparisonTable)
- ✅ Real Dutch content (zero placeholder text)
- ✅ Google Fonts integration (Syne + Inter)
- ✅ Vibrant design with accent color (#00FF87)
- ✅ Mobile-responsive on all pages
- ✅ Sitemap.xml and robots.txt for SEO
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ FAQ accordions on relevant pages
- ✅ Testimonials section
- ✅ Comparison table (Social Gaming vs. Escape Room vs. Bowling vs. Lasergamen)
- ✅ Internal linking strategy
- ✅ Static export (no server-side logic required)

## Tech Stack

- **Next.js 15** with TypeScript
- **Tailwind CSS 3** for styling
- **Google Fonts** (Syne, Inter) via `<link>` tags
- **Static Export** (`output: 'export'` in next.config.js)
- **Fully static HTML output** (suitable for Cloudflare Pages, GitHub Pages, etc.)

## Page Structure

```
app/
  layout.tsx                    ← Root layout with Navbar, Footer, Google Fonts
  page.tsx                      ← Homepage (all sections)
  wat-is-social-gaming/page.tsx
  groepsactiviteiten-eindhoven/page.tsx
  bedrijfsuitje-eindhoven/page.tsx
  blog/
    page.tsx                    ← Blog overview
    top-10-groepsactiviteiten-eindhoven/page.tsx
    escape-room-vs-social-gaming/page.tsx
    origineel-bedrijfsuitje-eindhoven/page.tsx
    wat-is-social-gaming-gids/page.tsx

components/
  Navbar.tsx
  Footer.tsx
  HeroSection.tsx
  CTAButton.tsx
  FAQAccordion.tsx
  TestimonialCard.tsx
  ComparisonTable.tsx

data/
  testimonials.ts
  comparisonData.ts

public/
  sitemap.xml
  robots.txt

next.config.js
tailwind.config.js
tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js 18+ (for building)
- npm or yarn

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output is generated in `/out` directory as fully static HTML.

## Build & Deployment

### Static Export

The project is configured to export as completely static HTML:

```javascript
// next.config.js
output: 'export'
images: { unoptimized: true }
```

All pages are pre-rendered at build time. No Node.js runtime required.

### Cloudflare Pages Deployment

1. **Connect your repository** to Cloudflare Pages
2. **Set build settings:**
   - Build command: `npm run build`
   - Output directory: `out`
   - Node.js version: 18 or higher

3. **Deploy** (automatic on push to main)

### Other Static Hosts

This site can be deployed to any static host:
- GitHub Pages
- Netlify
- Vercel (static mode)
- AWS S3 + CloudFront
- Any simple HTTP server

Just build (`npm run build`) and serve the `/out` directory.

## SEO & Performance

### SEO Features
- ✅ Unique `<title>` tags (60 chars max) on every page
- ✅ Unique `<meta name="description">` (155 chars max)
- ✅ One H1 per page, logical H2/H3 hierarchy
- ✅ Internal linking between related pages
- ✅ Semantic keyword variations throughout
- ✅ sitemap.xml (submitted to search engines)
- ✅ robots.txt (allows all, points to sitemap)
- ✅ JSON-LD structured data (LocalBusiness schema on homepage)
- ✅ Mobile-responsive design (mobile-first CSS)
- ✅ Fast page loads (static HTML, no API calls)

### Performance
- Static HTML = instant page loads
- No runtime JavaScript overhead
- Optimized CSS bundle
- No external API dependencies

## Configuration

### Tailwind Colors
The site uses a vibrant accent color in tailwind.config.js:
```javascript
colors: {
  accent: '#00FF87',
  'accent-dark': '#00CC6F',
}
```

### Google Fonts
Fonts are loaded via `<link>` tags in `app/layout.tsx` (NOT next/font, for static export compatibility):
- **Syne** (headings): weights 400, 500, 600, 700
- **Inter** (body): weights 400, 500, 600, 700

## Content Management

All Dutch content is written directly in TSX files:
- **Homepage**: `app/page.tsx` (sections: hero, intro, cards, table, testimonials, etc.)
- **Main pages**: `app/{slug}/page.tsx` (with FAQ accordions)
- **Blog pages**: `app/blog/{slug}/page.tsx` (600+ words each)
- **Testimonials**: `data/testimonials.ts` (6 realistic Dutch testimonials)
- **Comparison data**: `data/comparisonData.ts` (5 criteria across 4 activities)

To edit content, modify the relevant page file or data file.

## Components

### Reusable Components
All components accept props for flexibility:

- **HeroSection**: title, subtitle, ctaLabel, ctaHref, alignment
- **CTAButton**: href, label, variant (primary/secondary)
- **FAQAccordion**: items array with question/answer pairs
- **TestimonialCard**: quote, name, context
- **ComparisonTable**: rows array with criterion and boolean values per column
- **Navbar**: (automatically links to all main pages)
- **Footer**: (includes sitemap/robots links)

## Conversion Strategy

Every page includes:
- ✅ Clear primary CTA button
- ✅ Mid-page CTAs
- ✅ Closing CTA section
- ✅ All CTAs point to: https://clashrooms.nl/boeken

CTA labels vary throughout:
- "Boek nu bij ClashRooms"
- "Bekijk beschikbaarheid"
- "Plan je uitje"
- "Reserveer je plek"

## Internal Linking

Strategic internal links across pages:
- Homepage → all main pages
- Blog articles → relevant main pages
- Main pages → related blog articles
- Footer → all main pages + blog

## Testing Checklist

Before deployment, verify:

- [ ] `npm run build` completes without errors
- [ ] `/out` directory exists with all HTML files
- [ ] All pages render locally: `npx serve out`
- [ ] Mobile responsive (375px width via DevTools)
- [ ] All internal links work (click through main nav)
- [ ] All CTAs point to https://clashrooms.nl/boeken
- [ ] No console errors
- [ ] SEO meta tags unique per page (browser inspector)
- [ ] sitemap.xml is in `/out/sitemap.xml`
- [ ] robots.txt is in `/out/robots.txt`

## Maintenance

### Adding New Blog Posts
1. Create new directory: `app/blog/{slug}/`
2. Create `page.tsx` with metadata and content
3. Update `app/blog/page.tsx` with link to new post
4. Update `public/sitemap.xml` with new URL

### Updating Content
1. Edit relevant page file in `app/`
2. Rebuild: `npm run build`
3. Deploy to Cloudflare Pages

### Monitoring
- Use Google Search Console to monitor rankings
- Check Google Analytics for traffic
- Monitor bounce rate and conversion rate
- A/B test CTA labels if needed

## License

This website is built for ClashRooms, Eindhoven.

## Support

For questions or issues, refer to:
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Cloudflare Pages docs: https://developers.cloudflare.com/pages/
