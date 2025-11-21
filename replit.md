# Intelligent Design Tucson - Home Services Website

## Overview
This project is a conversion-focused marketing website for Intelligent Design, a family and veteran-owned home services company in Tucson, Arizona. The site aims to drive service bookings for HVAC, plumbing, solar, electrical, roofing, and drain/sewer services through ServiceTitan integration, build trust via social proof, optimize for local SEO, and provide a mobile-first experience. The ambition is to create a top-ranking AI-search and conversion-optimized service site nationally, leveraging comprehensive location+service matrix coverage and advanced zip code SEO. The site currently features over 488 pages, including service pages (with location-specific variants), service area pages, optimized blog posts, resource pages, promotional offer pages, Contractor Commerce integration, and career opportunities.

## Recent Changes

### November 21, 2025 - Production Deployment Testing
**Pre-Production Deployment Verification Completed:**
- ✅ **User Journey Testing:** 5 critical conversion paths verified (Homepage→Scheduler, Location→Service→Scheduler, Forms, Blog, Contractor Commerce)
- ✅ **Cross-Browser Testing:** Responsive design verified across all viewports (375px-1920px), mobile hamburger menu, desktop dropdowns functional
- ✅ **Third-Party Integrations:** All 7 integrations properly implemented (GTM with consent, DNI, ServiceTitan, Contractor Commerce 3 calculators, PulseM, RealWorkLabs, WhoHire) - staging limitations expected due to domain whitelisting
- ✅ **Performance Audit:** Homepage: 2.4s/262KB, AC Repair: 0.79s/314KB, Oro Valley: 0.71s/117KB - excellent load times, AVIF/WebP optimization configured
- ✅ **SEO Verification:** Canonical URLs correct, OG/Twitter tags complete, schema markup rendering (2-5 schemas per page), sitemap.xml accessible
- ✅ **Content Quality:** Phone (520) 333-2665 consistent, review count 22,000+ consistent, no placeholder text, professional content throughout

**Fixes Applied:**
- 🔧 **robots.txt domain corrected:** Changed sitemap URL from intelligentdesignac.com to idesignac.com (production domain)

**Known Items for Future:**
- 📝 **Missing Page:** drain-clearing-special promotional page referenced in documentation but not yet created (app route needed)
- 📝 **Staging Limitations:** ServiceTitan iframe blank on staging (domain whitelist), GTM requires cookie consent (GDPR), some widgets may have CORS on staging - all will work on production www.idesignac.com

**Production Deployment:** Scheduled for 10pm MST November 21, 2025 to www.idesignac.com

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
  - Total Five-Star Reviews: "22,000+ reviews" (all platforms combined: Google, Yelp, Facebook, BBB, etc.)
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
- **SEO Optimization:** AI-driven SEO with Open Graph, Twitter Card, essential meta tags, rich Schema.org structured data (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, HowTo, VideoObject). All meta tags managed via react-helmet-async. Service-location pages generate 7-10+ schemas per page.
- **URL Migration & Redirect System:** Programmatic 308 permanent redirect system (next.config.ts) preserves SEO equity from legacy React URLs to Next.js nested structures. Manifest system (`data/pages/services/manifest.json`) maps canonical slugs to data files for Next.js static generation.
- **Performance:** Vite for optimized builds, font and image optimization, edge-ready configuration.
- **Design Philosophy:** "Professional reliability with warm approachability," focusing on trust signals and clear calls to action.
- **Service Pages:** Template includes full-width background hero, 6 highlight cards, extensive service content, review module, and comprehensive FAQ section. CTA sections support ServiceTitan scheduler integration and external link CTAs.
- **FAQ Components:** `ServiceFAQ` (centralized system with JSON-LD schema) and `CommonQuestions` (conversational Q&A for AI search optimization) are deployed across service pages.
- **Cross-Page Conversion CTAs:** Strategic CTA buttons linking service pages to Contractor Commerce quote tools.
- **Location + Service Matrix:** Architecture covering 7 core services across 20 service areas for maximum local SEO, including location-specific content, zip code integration, schema markup, and conversion-focused CTAs.
- **Blog System:** Automated WordPress scraping, markdown-based content, AI-generated hero images, and SEO-optimized frontmatter.
- **Resource Pages:** Dedicated informational pages including R22 Phaseout guide, Video Education Library, Air Conditioning System FAQs, Knowledge Hub, Video Testimonials, and Customer Reviews pages.
- **Contractor Commerce Integration Pages:** Three interactive quote/shopping pages powered by Contractor Commerce plugin: Free Online HVAC Quote, Free Online Water Heater Quote, and Filter Shop.
- **Promotional Offer Pages:** New Homebuyer Offer, REALTORS® Offer, and $28.88 Drain Clearing Special (with dedicated component).
- **Careers Page:** Integrated WhoHire job board plugin.
- **Core Strategic Architecture:** Clean silo structure with scalable service area logic, optimized for keyword-based and AI-based search visibility (LLM-ready content), static HTML output capability, mobile-first UX, and professional design.
- **Canonical Schema System:** Centralized system for consistent NAP (Name, Address, Phone) data across all schemas.
- **Accessibility System:** WCAG 2.1 AA compliant system with font size controls, high contrast mode, readable font, and enhanced keyboard focus.
- **Cookie Consent System:** GDPR/CCPA-compliant system with modal banner, consent persistence, and GTM integration.
- **AI Search Optimization Strategy:** All pages are optimized for AI search engines with natural language Q&A, structured data, internal linking, and comprehensive local content. Zip code SEO features include location pages with zip code displays and meta descriptions.

## External Dependencies

### Third-Party Services
- **ServiceTitan:** Scheduler embed widget and Dynamic Number Insertion (DNI).
- **Contractor Commerce:** Interactive pricing calculator and e-commerce plugin for HVAC quotes, water heater quotes, and filter sales (API key: D32QhwUokdL5YZLParGpbxc7TuBTkYanGNQSR4zd).
- **RealWorkLabs:** Project showcase widget for displaying recent installations and repairs (API key: Mv2yZInBciS35Sln).
- **WhoHire:** Job board plugin integration for careers page (data-slug: intelligentdesignairconditioningplumbingroofingsolarelectric).
- **PulseM:** Review aggregation widget displaying 22,000+ five-star reviews.
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