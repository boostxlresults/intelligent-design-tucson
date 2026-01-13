# Intelligent Design Tucson - Home Services Website

## Overview
This project is a conversion-focused marketing website for Intelligent Design, a family and veteran-owned home services company in Tucson, Arizona. **Company History:** Intelligent Design was founded in 2011 by U.S. Marine Corps veteran Andrew Dobbins. In 2022, the company united with Wood's Plumbing (established 1979) to create a combined 46+ years of home services expertise serving the Tucson community. The schema foundingDate remains 1979 as approved by BBB and Google. The site aims to drive service bookings for HVAC, plumbing, solar, electrical, roofing, and drain/sewer services through ServiceTitan integration, build trust via social proof, optimize for local SEO, and provide a mobile-first experience. The ambition is to create a top-ranking AI-search and conversion-optimized service site nationally, leveraging comprehensive location+service matrix coverage and advanced zip code SEO. The site currently features over 488 pages, including service pages (with location-specific variants), service area pages, optimized blog posts, resource pages, promotional offer pages, Contractor Commerce integration, and career opportunities.

## User Preferences
Preferred communication style: Simple, everyday language.

**SEO & Content Optimization Authority:** The agent has full authority to update and optimize content for both traditional SEO and AI SEO. This includes improving keyword placement, content structure, meta descriptions, alt text, schema markup, FAQ sections, natural language optimization for AI search engines, and internal linking strategies.

**Image Generation Guidelines for Technicians:**
- Technicians wear royal blue button-down work shirts.
- American flag patches on shoulders.
- NEVER include company text, logos, or name patches on uniforms (AI generators create inaccurate text).
- Use negative prompts to exclude: "text on clothing, company names, logos with text, words on uniforms, name patches with text".
- Focus on visual elements only: blue shirts, flag patches, professional appearance.

**Google Reviews & Maps Display Rules:**
- Google Reviews Badge: Always display 5.0 rating with all 5 stars filled (actual rating is 4.97).
- Review Count Distinction:
  - Google Reviews: "3,500+ reviews" (Google Business Profile specifically)
  - Total Five-Star Reviews: "23,000+ reviews" (all platforms combined: Google, Yelp, Facebook, BBB, etc.)
- Google Maps: Use official Google Business Profile embed code to show full business listing with reviews, photos, and business information.
- PulseM Widget: Displays aggregated reviews from all platforms on Customer Reviews page.

## System Architecture

### Frontend
- **Framework:** Next.js 16 with App Router, TypeScript, and React Server Components.
- **UI:** shadcn/ui components (Radix UI primitives), Tailwind CSS with brand-specific tokens, Inter font.
- **Design System:** Mobile-first responsive design, consistent spacing, component-based architecture.
- **Navigation:** Mobile/tablet navigation uses collapsible sections; desktop uses hover-activated dropdowns with multi-column layouts, including a hierarchical "Areas We Serve" section.
- **Visual Design:** Service pages feature full-width hero sections with background images and blue gradient overlay, white text overlays, red/yellow CTA buttons, and 6 highlight cards with green CheckCircle2 icons.

### Backend
- **Server:** Express.js with TypeScript on Node.js.
- **API:** RESTful pattern (`/api` prefix), JSON, request logging, custom error handling.
- **Storage:** Abstract `IStorage` interface; `MemStorage` for development, designed for PostgreSQL with Drizzle ORM and Neon serverless driver.

### Key Architectural Decisions
- **Mobile-First Conversion:** Floating action bar, sticky header, ServiceTitan scheduler in modal dialogs.
- **SEO Optimization:** AI-driven SEO with Open Graph, Twitter Card, essential meta tags, rich Schema.org structured data (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, HowTo, VideoObject). Service-location pages generate 7-10+ schemas per page. Enhanced with `hasBrand` (Lennox, Trane, Rheem, etc.) and `hasVariant` (tankless, ductless, heat pump, etc.) schema properties for AI search optimization.
- **URL Migration & Redirect System:** Programmatic 308 permanent redirect system (next.config.ts) preserves SEO equity from legacy React URLs to Next.js nested structures. Manifest system (`data/pages/services/manifest.json`) maps canonical slugs to data files for Next.js static generation.
- **Performance:** Optimized builds (Vite), font and image optimization (AVIF/WebP), edge-ready configuration.
- **LCP Optimization:** All hero images across the site use Next.js Image component with `priority`, `fill`, and `sizes="100vw"` props for optimal Largest Contentful Paint scores. Blog post hero images use `normalizeHeroImagePath()` function to transform legacy `/attached_assets/generated_images/` paths to `/generated_images/` for proper static serving. Pattern: absolute positioned Image with fill, gradient overlay div, and relative z-10 content wrapper.
- **Design Philosophy:** "Professional reliability with warm approachability," focusing on trust signals and clear calls to action.
- **Service Pages:** Template includes full-width background hero, 6 highlight cards, extensive service content, review module, and comprehensive FAQ section. CTA sections support ServiceTitan scheduler integration and external link CTAs.
- **FAQ Components:** `ServiceFAQ` (centralized system with JSON-LD schema) and `CommonQuestions` (conversational Q&A for AI search optimization) are deployed across service pages.
- **Cross-Page Conversion CTAs:** Strategic CTA buttons linking service pages to Contractor Commerce quote tools.
- **Location + Service Matrix:** Architecture covering 7 core services across 20 service areas for maximum local SEO, including location-specific content, zip code integration, schema markup, and conversion-focused CTAs.
- **Blog System:** Automated WordPress scraping, markdown-based content, AI-generated hero images, and SEO-optimized frontmatter. Blog pages include graceful fallback for missing hero images (category-specific icons with gradient backgrounds). The `imageExists()` helper checks if image files exist at build time.
- **Vercel Bundle Optimization:** `outputFileTracingExcludes` in next.config.ts excludes large directories (public/generated_images, public/content, attached_assets) from serverless function bundles to stay under Vercel's 300MB limit.
- **Resource Pages:** Dedicated informational pages including R22 Phaseout guide, Video Education Library, Air Conditioning System FAQs, Knowledge Hub, Video Testimonials, and Customer Reviews pages.
- **Contractor Commerce Integration Pages:** Three interactive quote/shopping pages powered by Contractor Commerce plugin: Free Online HVAC Quote, Free Online Water Heater Quote, and Filter Shop.
- **Promotional Offer Pages:** New Homebuyer Offer, REALTORS® Offer, and $28.88 Drain Clearing Special (with dedicated component).
- **Careers Page:** Integrated WhoHire job board plugin.
- **Core Strategic Architecture:** Clean silo structure with scalable service area logic, optimized for keyword-based and AI-based search visibility (LLM-ready content), static HTML output capability, mobile-first UX, and professional design.
- **Canonical Schema System:** Centralized system for consistent NAP (Name, Address, Phone) data across all schemas.
- **VideoObject Schema Date Format:** All VideoObject uploadDate fields use full ISO 8601 format with time component (YYYY-MM-DDTHH:MM:SSZ) to pass Google Rich Results validation. The `normalizeUploadDate()` helper function in `lib/seo/generateVideoObjectSchema.ts` ensures dates without time are converted to proper format.
- **Accessibility System:** WCAG 2.1 AA compliant system with font size controls, high contrast mode, readable font, and enhanced keyboard focus.
- **Cookie Consent System:** GDPR/CCPA-compliant system with modal banner, consent persistence, and GTM integration.
- **AI Search Optimization Strategy:** All pages are optimized for AI search engines with natural language Q&A, structured data, internal linking, and comprehensive local content. Zip code SEO features include location pages with zip code displays and meta descriptions.
- **Script Lazy Loading Strategy:** Third-party scripts are lazy-loaded for optimal PageSpeed scores:
  - **ServiceTitan Scheduler:** Loads on-demand via `useScheduler` hook only when user clicks Schedule buttons (saves ~898 KiB)
  - **RealWorkLabs:** Uses IntersectionObserver to load script when map widgets enter viewport, with callback queue for re-initialization
  - **ContentSquare:** Uses Next.js Script strategy="lazyOnload" for post-load execution
  - **HatchChat:** Uses lazyOnload strategy for deferred chat widget loading
- **Known Development Issue:** Webpack HMR error ("Cannot read properties of undefined (reading 'call')") may appear during hot reload in development. This is a Next.js 16 / React 19 Server Components limitation and does not affect production builds.

## External Dependencies

### Third-Party Services
- **ServiceTitan:** Scheduling Pro widget (scheduler-v1.js with `_scheduler.show()` API) and Dynamic Number Insertion (DNI). Scheduler script loads on-demand via `useScheduler` hook when user clicks Schedule buttons. DNI script uses afterInteractive strategy.
- **Contractor Commerce:** Interactive pricing calculator and e-commerce plugin for HVAC quotes, water heater quotes, and filter sales.
- **RealWorkLabs:** Project showcase widget for displaying recent installations and repairs.
- **WhoHire:** Job board plugin integration for careers page.
- **PulseM:** Review aggregation widget displaying 23,000+ five-star reviews.
- **HatchChat:** Live chat widget for customer support.
- **Google Tag Manager (GTM-WKG99GJ):** For analytics, conversion, and event tracking.
- **Google Fonts:** Utilized for the Inter font family.
- **Schema.org:** Employed for structured data to enhance SEO.

### UI Component Libraries
- **Radix UI:** Provides accessible components (dialogs, dropdowns, accordions).
- **Embla Carousel:** Used for testimonials display.
- **Lucide React:** Supplies iconography.

### Development Tools
- **Zod:** Used for schema validation.
- **Drizzle ORM:** TypeScript ORM for PostgreSQL.