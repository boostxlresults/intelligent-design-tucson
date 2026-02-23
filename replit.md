# Intelligent Design Tucson - Home Services Website

## Overview
This project is a conversion-focused marketing website for Intelligent Design, a family and veteran-owned home services company in Tucson, Arizona, with a founding date of 1979. The site aims to drive service bookings for HVAC, plumbing, solar, electrical, roofing, and drain/sewer services through ServiceTitan integration, build trust via social proof, optimize for local SEO, and provide a mobile-first experience. The ambition is to create a top-ranking AI-search and conversion-optimized service site nationally, leveraging comprehensive location+service matrix coverage and advanced zip code SEO. The site features over 500 pages, including service pages, service area pages, 279 optimized blog posts across 6 categories, resource pages, promotional offer pages, Contractor Commerce integration, and career opportunities.

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
- **Framework:** Next.js 15.5.12 with App Router, TypeScript, React 19, and React Server Components.
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
- **SEO Optimization:** AI-driven SEO with Open Graph, Twitter Card, essential meta tags, rich Schema.org structured data (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, HowTo, VideoObject). Service-location pages generate 7-10+ schemas per page, enhanced with `hasBrand` and `hasVariant` properties.
- **URL Migration & Redirect System:** Programmatic 308 permanent redirect system (next.config.ts) and manifest system (`data/pages/services/manifest.json`) for SEO equity preservation and static generation.
- **Performance:** Optimized builds (Vite), font and image optimization (AVIF/WebP), edge-ready configuration, and LCP optimization for hero images using Next.js Image component.
- **Design Philosophy:** "Professional reliability with warm approachability," focusing on trust signals and clear calls to action.
- **Service Pages:** Template includes full-width background hero, 6 highlight cards, extensive service content, review module, FAQ components (`ServiceFAQ` with JSON-LD and `CommonQuestions`), and CTA sections with ServiceTitan integration.
- **Cross-Page Conversion CTAs:** Strategic CTA buttons linking service pages to Contractor Commerce quote tools.
- **Location + Service Matrix:** Architecture covering 7 core services across 20 service areas for maximum local SEO, including location-specific content, zip code integration, and schema markup.
- **Blog System:** Automated WordPress scraping, markdown-based content, AI-generated hero images, SEO-optimized frontmatter, and graceful fallback for missing hero images. Includes client-side search, category filtering, and related posts features.
- **Vercel Bundle Optimization:** `outputFileTracingExcludes` in next.config.ts to exclude large directories from serverless function bundles.
- **Resource Pages:** Dedicated informational pages including R22 Phaseout guide, Video Education Library, Air Conditioning System FAQs, Knowledge Hub, Video Testimonials, and Customer Reviews pages.
- **Contractor Commerce Integration Pages:** Interactive quote/shopping pages for HVAC, water heaters, and filters.
- **Promotional Offer Pages:** New Homebuyer Offer, REALTORS® Offer, and $28.88 Drain Clearing Special.
- **Careers Page:** Integrated WhoHire job board plugin.
- **Core Strategic Architecture:** Clean silo structure with scalable service area logic, optimized for keyword-based and AI-based search visibility (LLM-ready content), static HTML output capability, mobile-first UX, and professional design.
- **Canonical Schema System:** Centralized system for consistent NAP data across all schemas.
- **VideoObject Schema Date Format:** `uploadDate` fields use full ISO 8601 format with a helper function to ensure correct formatting.
- **Accessibility System:** WCAG 2.1 AA compliant system with font size controls, high contrast mode, readable font, and enhanced keyboard focus.
- **Cookie Consent System:** GDPR/CCPA-compliant system with modal banner, consent persistence, and GTM integration.
- **AI Search Optimization Strategy:** All pages optimized for AI search engines with natural language Q&A, structured data, internal linking, comprehensive local content, and zip code SEO.
- **Script Lazy Loading Strategy:** Third-party scripts (ServiceTitan Scheduler, RealWorkLabs, ContentSquare, Broccoli Chat) are lazy-loaded for optimal PageSpeed scores.
- **Internal Linking Strategy:** Taxonomy mapping blog categories to related services and locations using `lib/seo/internalLinking.ts` and components like `RelatedServices.tsx`, `RelatedBlogPosts.tsx`, and `LocalBlogPosts.tsx`.
- **Location Pages Enhancement with ZIP Code SEO:** `lib/seo/locationData.ts` provides comprehensive data for 20 Tucson metro locations, integrated with `ZipCodeModule.tsx` for visual display of local SEO data.

## External Dependencies

### Third-Party Services
- **ServiceTitan:** Scheduling Pro widget and Dynamic Number Insertion (DNI).
- **Contractor Commerce:** Interactive pricing calculator and e-commerce plugin.
- **RealWorkLabs:** Project showcase widget.
- **WhoHire:** Job board plugin.
- **PulseM:** Review aggregation widget.
- **Broccoli Chat:** Live chat widget (replaced HatchChat).
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