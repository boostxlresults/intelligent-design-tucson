# Intelligent Design Tucson - Home Services Website

## Overview
This project is a conversion-focused marketing website for Intelligent Design, a family and veteran-owned home services company in Tucson, Arizona. The site drives service bookings for HVAC, plumbing, solar, electrical, roofing, and drain/sewer services through ServiceTitan integration, builds trust via social proof, optimizes for local SEO, and provides a mobile-first experience. The project's ambition is to build the highest-ranking AI-search and conversion-optimized service site in the country through comprehensive location+service matrix coverage and advanced zip code SEO integration. The current site includes over 485 pages, with 268 service pages (including 140 location-specific service pages), 20 service area pages, 231 optimized blog posts, dedicated resource pages, promotional offer pages, and career opportunities integration.

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
- **SEO Optimization:** AI-driven SEO with Open Graph, Twitter Card, essential meta tags, rich Schema.org structured data (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, HowTo, VideoObject). All meta tags managed via react-helmet-async. Service-location pages now generate 7-10+ schemas per page, including HowTo schemas automatically extracted from service preparation guides (42 pages with step-by-step content).
- **URL Migration & Redirect System:** Programmatic 308 permanent redirect system (next.config.ts) preserves SEO equity from legacy React URLs to Next.js nested structures. Manifest system (`data/pages/services/manifest.json`) maps canonical slugs to data files for Next.js static generation.
- **Performance:** Vite for optimized builds, font and image optimization, edge-ready configuration.
- **Design Philosophy:** "Professional reliability with warm approachability," focusing on trust signals and clear calls to action.
- **Service Pages:** Template includes full-width background hero, 6 highlight cards, extensive service content, review module, and comprehensive FAQ section (minimum 11 questions).
- **FAQ Components:** `ServiceFAQ` (centralized system with JSON-LD schema) and `CommonQuestions` (conversational Q&A for AI search optimization) are deployed across service pages.
- **Location + Service Matrix (140 Pages):** Architecture covering 7 core services across 20 service areas for maximum local SEO, including location-specific content, zip code integration, schema markup, and conversion-focused CTAs.
- **Blog System:** Automated WordPress scraping for migration, markdown-based content, AI-generated hero images, and SEO-optimized frontmatter.
- **Resource Pages:** Dedicated informational pages including R22 Phaseout guide (`/r22-phaseout`) with comprehensive FAQ content, multiple scheduler CTAs, and SEO optimization for EPA refrigerant regulations. Video Education Library (`/education-library`) embeds the complete YouTube channel (@Idesignac) for educational content on HVAC, plumbing, solar, and electrical systems. Air Conditioning System FAQs (`/ac-system-faqs`) provides 15 comprehensive HVAC questions with expert answers, FAQPage schema markup, and a featured video explaining how air conditioners work. Knowledge Hub (`/knowledge-hub`) serves as the central educational resource center with links to all 230+ blog articles, featured resources, comprehensive topic coverage, EducationalOrganization schema markup, and AI-search optimized content. Video Testimonials (`/video-testimonials`) showcases 12 authentic customer video reviews with embedded YouTube players, VideoObject schema markup, and service category tags. Customer Reviews (`/customer-reviews`) showcases 22,000+ reviews with AggregateRating schema (5.0 rating), 12 featured Google reviews with individual Review schemas, review stats dashboard, and AI SEO Q&A section.
- **Contractor Commerce Integration Pages:** Three interactive quote/shopping pages powered by Contractor Commerce plugin (key: D32QhwUokdL5YZLParGpbxc7TuBTkYanGNQSR4zd): Free Online HVAC Quote (`/free-hvac-quote`) provides instant pricing calculator for HVAC system replacement with system selection, detailed trust signals, and comprehensive FAQ section. Free Online Water Heater Quote (`/water-heater-quote`) offers real-time quotes for tank and tankless water heaters with comparison guide, installation details, and expert consultation CTAs. Filter Shop (`/filter-shop`) enables e-commerce purchase of air filters with MERV rating education, filter type comparison, professional installation options, and benefits of regular filter changes. All pages feature Next.js Script integration with lazyOnload strategy, mobile-optimized design, SchedulerCluster components for alternative booking paths, and conversion-focused layouts with trust indicators.
- **Promotional Offer Pages:** New Homebuyer Offer (`/new-homebuyer-offer`) features FREE 2-Year Deluxe Family Protection Plan ($1,200 value) with comprehensive benefits display, trust indicators, lead capture form with validation, and Offer JSON-LD schema. REALTORS® Offer (`/realtors-offer`) positions the same protection plan for realtors to gift clients, includes realtor-specific benefits section, client registration form, 30-day activation disclaimer, and proper SEO metadata with realtor-targeted keywords.
- **Careers Page:** Integrated WhoHire job board plugin with dedicated client component that properly loads/unloads script, maintaining existing SchedulerCluster and structured data for career opportunities in HVAC, plumbing, electrical, solar, and roofing positions.
- **Core Strategic Architecture:** Clean silo structure with scalable service area logic, optimized for keyword-based and AI-based search visibility (LLM-ready content), static HTML output capability, mobile-first UX, and professional design.
- **Canonical Schema System:** Centralized system for consistent NAP (Name, Address, Phone) data across all schemas.
- **Accessibility System:** WCAG 2.1 AA compliant system with font size controls, high contrast mode, readable font, and enhanced keyboard focus.
- **Cookie Consent System:** GDPR/CCPA-compliant system with modal banner, consent persistence, and GTM integration.
- **AI Search Optimization Strategy:** All pages are optimized for AI search engines with natural language Q&A, structured data, internal linking, and comprehensive local content. Zip code SEO features include location pages with zip code displays and meta descriptions.

## External Dependencies

### Third-Party Services
- **ServiceTitan:** Scheduler embed widget and Dynamic Number Insertion (DNI).
- **Contractor Commerce:** Interactive pricing calculator and e-commerce plugin for HVAC quotes, water heater quotes, and filter sales (API key: D32QhwUokdL5YZLParGpbxc7TuBTkYanGNQSR4zd). Provides real-time pricing, product selection interfaces, and conversion-optimized checkout flows. Integrated via Next.js Script component with lazyOnload strategy on three pages: /free-hvac-quote, /water-heater-quote, /filter-shop.
- **RealWorkLabs:** Project showcase widget for displaying recent installations and repairs with before/after photos (API key: Mv2yZInBciS35Sln - public client-side key). Supports service-type filtering (HVAC, Plumbing, Solar, etc.), zip code filtering for location-specific projects, and customizable project limits.
- **WhoHire:** Job board plugin integration for careers page (data-slug: intelligentdesignairconditioningplumbingroofingsolarelectric).
- **PulseM:** Review aggregation widget displaying 22,000+ five-star reviews from all platforms (Google, Yelp, Facebook, BBB, etc.). Integrated on Customer Reviews page with proper script loading via Next.js Script component.
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