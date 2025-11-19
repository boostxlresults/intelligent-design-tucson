# Design Guidelines: Intelligent Design Tucson Homepage

## Design Approach

**Reference-Based Approach**: Drawing inspiration from successful home services platforms like ServiceTitan's best customer sites, HomeAdvisor, and Angi, combined with trust-building patterns from established local service businesses. The design prioritizes **conversion, credibility, and local trust** over cutting-edge aesthetics.

**Core Principle**: Professional reliability with warm approachability - this is a family-owned Tucson business serving neighbors in urgent need, not a tech startup.

## Color Palette

**Primary Brand Colors** (from logo analysis):
- Deep Navy Blue: 215 70% 25% (trust, professionalism, HVAC cooling)
- Warm Orange/Copper: 25 85% 55% (energy, warmth, solar/electric)
- Clean White/Off-White: 0 0% 98% (clarity, cleanliness)

**Supporting Colors**:
- Success Green (for BBB A+, ratings): 145 60% 45%
- Alert Red (for urgent/emergency CTAs): 5 75% 50%
- Neutral Grays: 215 10% 40% (text), 215 15% 92% (backgrounds)
- Dark mode isn't necessary for this conversion-focused home services site

**Usage Strategy**:
- Navy as dominant color (headers, footers, trust sections)
- Orange for primary CTAs and accent elements (sparingly)
- White/off-white for breathing room and content clarity
- Green only for badges and rating stars
- Red reserved for "24/7 Emergency Service" indicators

## Typography

**Font Families** (via Google Fonts):
- **Headings**: Inter (700, 800 weights) - modern, professional, highly legible
- **Body Text**: Inter (400, 500 weights) - consistent system, excellent readability
- **Accent/Stats**: Inter (600 weight) - for trust metrics and numbers

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Subsection Headers: text-2xl md:text-3xl font-semibold
- Body Large: text-lg md:text-xl
- Body Standard: text-base
- Small/Captions: text-sm

## Layout System

**Spacing Primitives**: Tailwind units of **4, 6, 8, 12, 16, 20, 24** for consistency
- Component padding: py-12 md:py-16 lg:py-20
- Card spacing: p-6 md:p-8
- Element gaps: gap-6 md:gap-8
- Section margins: space-y-16 md:space-y-24

**Container Strategy**:
- Max-width: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Hero sections: Full-width with inner container
- Content sections: Contained with breathing room
- Footer: Full-width background with contained content

**Grid Patterns**:
- Service tiles: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Reviews: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Trust badges: grid-cols-2 md:grid-cols-4 lg:grid-cols-6

## Component Library

**Primary CTA Buttons**:
- Large, high-contrast: bg-orange (primary color), white text
- Rounded corners: rounded-lg
- Generous padding: px-8 py-4 text-lg font-semibold
- Hover: Slight darkening, no complex animations
- Emergency variant: bg-red with phone icon

**Secondary Buttons**:
- Outline style: border-2 border-navy text-navy
- Same sizing as primary
- Backdrop blur when over images: backdrop-blur-sm bg-white/90

**Cards** (Service Tiles, Reviews):
- Subtle shadow: shadow-md hover:shadow-lg transition-shadow
- Rounded: rounded-xl
- White background: bg-white
- Border: border border-gray-200
- Padding: p-6 md:p-8

**Trust Signals**:
- Badge wall: Grayscale logos (filter grayscale hover:grayscale-0)
- Star ratings: Gold stars (text-yellow-400) with count
- Large review count display: Bold text-4xl with "3,397+ Reviews"

**Navigation**:
- Sticky header: sticky top-0 z-50 bg-white shadow-sm
- Logo left, phone number prominent right, services menu center
- Mobile: Hamburger menu (Sheet component)
- CTA in header: "Schedule Now" button always visible

**Hero Section**:
- Large hero image: Professional photo of technician with van or at customer home
- Image overlay: Dark gradient (from-navy/80 to-navy/40) for text legibility
- Content: Left-aligned or centered depending on image
- Height: min-h-[600px] md:min-h-[700px] (not full viewport)
- Trust signals immediately visible: "24/7 Service • BBB A+ • 3,397+ 5★ Reviews"

**Service Tiles**:
- Icon top: Large lucide-react icons (AC unit, wrench, sun, zap)
- Title: text-xl font-bold text-navy
- 3-4 benefit bullets per service
- "Learn More" link at bottom
- Hover effect: Subtle lift (transform hover:-translate-y-1)

**Review Carousel**:
- Star rating prominent at top
- Customer name and date
- Review text (truncated to 150 chars with "Read more")
- Background: Alternating white and subtle gray-50
- Slider controls: Simple arrows, dots for navigation

**FAQ Accordion**:
- shadcn/ui Accordion component
- Questions focused on Tucson geography, services, availability
- Icons for open/closed states
- Padding and borders for clear separation

**Contact Section**:
- Split layout: Left = embedded scheduler/form, Right = NAP + map
- Hours prominent: "Open 24/7 for Emergencies"
- Service area list: Bulleted with checkmarks
- Social proof reminder: "Serving Tucson families since [year]"

**Footer**:
- Dark navy background with white/gray text
- Three columns: Services, Company, Contact
- NAP consistency with schema markup
- License numbers, certifications
- Social media icons
- Copyright and legal links

## Images

**Required Images**:
1. **Hero Image**: Professional photo showing Intelligent Design technician (branded uniform) with company van, ideally at Tucson home with desert landscaping visible. Warm, trustworthy feel. Position behind headline text with dark overlay.

2. **Service Section Images**: Four square images for each service tile:
   - HVAC: Modern AC unit installation or repair
   - Plumbing: Clean pipe work or water heater
   - Solar: Solar panel installation on Tucson roof
   - Electric: Panel upgrade or service work
   (All showing professional, clean workmanship)

3. **Trust Section**: Company logo and BBB A+ badge (already provided)

4. **Review Carousel**: Customer avatars or placeholder initials in circles

**Image Treatment**:
- All images optimized via next/image with explicit dimensions
- Rounded corners: rounded-lg for content images
- Lazy loading for below-fold images
- Alt text for accessibility and SEO

## Animations

**Minimal Animation Strategy**:
- Fade-in on scroll for sections (subtle, once)
- Hover states: Simple transforms and shadows
- Button interactions: Built-in shadcn/ui states
- NO complex parallax, NO continuous animations
- NO animated gradients or moving backgrounds
- Focus on performance over visual flair

## Accessibility

- Semantic HTML: proper heading hierarchy, nav, main, article tags
- Skip-to-content link at top
- ARIA labels for icons and interactive elements
- Focus indicators: ring-2 ring-orange ring-offset-2
- Sufficient contrast ratios (WCAG AAA where possible)
- Keyboard navigation for all interactive elements
- Screen reader-friendly review carousel controls

## Mobile-First Considerations

- Touch targets: minimum 44px height
- Sticky "Call Now" button on mobile (bottom right FAB)
- Collapsible navigation
- Stacked service tiles on mobile
- Large tap targets for scheduler CTA
- Phone number click-to-call enabled
- Optimized for slow 3G (emergency service searches often on mobile)

## Trust & Conversion Elements

- Phone number in header: Large, clickable, always visible
- Multiple CTAs: Hero, after services, after reviews, footer
- Trust badges above the fold
- Review count prominently displayed (3,397+)
- BBB A+ badge placement: Near logo and in trust bar
- "24/7 Emergency Service" highlighted
- Service area mentions: "Proudly serving Tucson, Oro Valley, Marana, Vail, Sahuarita"
- Family-owned messaging: "Tucson family-owned since [year]"