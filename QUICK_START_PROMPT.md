# 🚀 Quick Start Prompt for AI Agent

**Copy and paste this into a new Replit AI Agent chat to start building:**

---

I need you to build a world-class Next.js 16+ SSR website for a home services company, optimized for both traditional SEO and AI search engines (ChatGPT, Perplexity, Claude). This build should follow the exact architecture and standards from the attached `SISTER_SITE_BUILD_BLUEPRINT.md` file.

## Business Information

**Company Details:**
- Company Name: [Fill in]
- Phone: [Fill in]
- Email: [Fill in]
- Address: [Fill in]
- Website URL: [Fill in]
- Current Site URL: [Fill in if exists]
- Google Business Profile: [Fill in GBP link]

**Services Offered:** [List all: HVAC, Plumbing, Electrical, Solar, Roofing, etc.]

**Service Areas:** [List all cities/neighborhoods - aim for 15-25 locations]

**Service Area Zip Codes:** [List 30-50 zip codes for maximum local SEO]

**Trust Signals:**
- Years in Business: [X years]
- Total Reviews: [X reviews]
- Average Rating: [X.XX stars]
- BBB Rating: [A+ or applicable]
- Licenses: [License numbers]
- Family Owned: [Yes/No]
- Veteran Owned: [Yes/No]

**Third-Party Integrations:**
- Google Tag Manager: [GTM-XXXXXXX]
- ServiceTitan URL: [If applicable]
- Social Media Links: [Facebook, Instagram, Yelp, etc.]

## Build Requirements

**CRITICAL: Read the complete `SISTER_SITE_BUILD_BLUEPRINT.md` file first.** It contains:
- Complete technical architecture specs
- SEO and AI-SEO standards
- Schema.org implementation (use DefinedRegion, NOT PostalCodeSpecification)
- Content structure and requirements
- Performance targets (90+ PageSpeed, Core Web Vitals green)
- Accessibility standards (WCAG 2.1 AA)
- All component specifications

**Target Outcomes:**
1. **250-500 total pages** (depends on services × locations)
2. **Server-side rendering (SSR)** - all content in initial HTML
3. **Perfect for AI search** - ChatGPT, Perplexity, Claude can cite
4. **11+ FAQs per service page** with FAQPage schema
5. **Zip code targeting** with DefinedRegion schema on all location pages
6. **Mobile-first conversion focus** with floating CTAs
7. **90+ PageSpeed score** on all pages
8. **WCAG 2.1 AA accessibility** compliant

**Build Approach:**
1. First, research the current website (if provided) and business
2. Ask me for any missing business information
3. Create a detailed task list with timeline (expect 15-25 days)
4. Build technical foundation (Next.js 16, TypeScript, Tailwind, shadcn/ui)
5. Create reusable schema and SEO utilities
6. Build page templates (service, location, service+location, blog)
7. Generate all pages following the blueprint standards
8. Test thoroughly before deployment
9. Use the pre-launch checklist from the blueprint

**Key Architecture Decisions from Blueprint:**
- ✅ Next.js 16+ App Router (NOT Pages Router)
- ✅ Server-side rendering (SSR) - NO client-side meta tags
- ✅ DefinedRegion schema for zip codes (Schema.org compliant)
- ✅ FAQPage schema on every service page (11+ FAQs minimum)
- ✅ Comprehensive internal linking (service ↔ location matrix)
- ✅ Mobile floating action bar with CTAs
- ✅ Accessibility system with font size controls, high contrast
- ✅ Cookie consent banner (GDPR/CCPA compliant)

**DO NOT:**
- ❌ Use PostalCodeSpecification (use DefinedRegion instead)
- ❌ Use client-side meta tag injection (use Next.js Metadata API)
- ❌ Use Pages Router (use App Router)
- ❌ Skip accessibility features
- ❌ Use mock/placeholder data in production paths

**Start by:**
1. Confirming you've read and understood the blueprint
2. Asking me for any missing business information
3. Analyzing the current website (if URL provided)
4. Creating a comprehensive task list for the build

Let's build the highest-ranking AI-search and conversion-optimized home services website!

---

**Attached Files Required:**
- SISTER_SITE_BUILD_BLUEPRINT.md (115-page specification)
- Reference implementation files (if available)
