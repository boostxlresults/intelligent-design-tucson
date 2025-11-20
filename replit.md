# Intelligent Design Tucson - Home Services Website

## Overview
This project is a conversion-focused marketing website for Intelligent Design, a family and veteran-owned home services company in Tucson, Arizona. The site drives service bookings for HVAC, plumbing, solar, electrical, roofing, and drain/sewer services through ServiceTitan integration, builds trust via social proof, optimizes for local SEO, and provides a mobile-first experience. The project's ambition is to build the highest-ranking AI-search and conversion-optimized service site in the country through comprehensive location+service matrix coverage and advanced zip code SEO integration. The current site includes over 480 pages, with 268 service pages (including 140 location-specific service pages), 20 service area pages, 231 optimized blog posts, and dedicated resource pages including the R22 Phaseout information page.

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
- Review Count: Display "22,000+ reviews".
- Google Maps: Use official Google Business Profile embed code to show full business listing with reviews, photos, and business information.

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
- **SEO Optimization:** AI-driven SEO with Open Graph, Twitter Card, essential meta tags, rich Schema.org structured data (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList). All meta tags managed via react-helmet-async.
- **URL Migration & Redirect System:** Programmatic 308 permanent redirect system (next.config.ts) preserves SEO equity from legacy React URLs to Next.js nested structures. Manifest system (`data/pages/services/manifest.json`) maps canonical slugs to data files for Next.js static generation.
- **Performance:** Vite for optimized builds, font and image optimization, edge-ready configuration.
- **Design Philosophy:** "Professional reliability with warm approachability," focusing on trust signals and clear calls to action.
- **Service Pages:** Template includes full-width background hero, 6 highlight cards, extensive service content, review module, and comprehensive FAQ section (minimum 11 questions).
- **FAQ Components:** `ServiceFAQ` (centralized system with JSON-LD schema) and `CommonQuestions` (conversational Q&A for AI search optimization) are deployed across service pages.
- **Location + Service Matrix (140 Pages):** Architecture covering 7 core services across 20 service areas for maximum local SEO, including location-specific content, zip code integration, schema markup, and conversion-focused CTAs.
- **Blog System:** Automated WordPress scraping for migration, markdown-based content, AI-generated hero images, and SEO-optimized frontmatter.
- **Resource Pages:** Dedicated informational pages including R22 Phaseout guide (`/r22-phaseout`) with comprehensive FAQ content, multiple scheduler CTAs, and SEO optimization for EPA refrigerant regulations. Video Education Library (`/education-library`) embeds the complete YouTube channel (@Idesignac) for educational content on HVAC, plumbing, solar, and electrical systems.
- **Core Strategic Architecture:** Clean silo structure with scalable service area logic, optimized for keyword-based and AI-based search visibility (LLM-ready content), static HTML output capability, mobile-first UX, and professional design.
- **Canonical Schema System:** Centralized system for consistent NAP (Name, Address, Phone) data across all schemas.
- **Accessibility System:** WCAG 2.1 AA compliant system with font size controls, high contrast mode, readable font, and enhanced keyboard focus.
- **Cookie Consent System:** GDPR/CCPA-compliant system with modal banner, consent persistence, and GTM integration.
- **AI Search Optimization Strategy:** All pages are optimized for AI search engines with natural language Q&A, structured data, internal linking, and comprehensive local content. Zip code SEO features include location pages with zip code displays and meta descriptions.

## External Dependencies

### Third-Party Services
- **ServiceTitan:** Scheduler embed widget and Dynamic Number Insertion (DNI).
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