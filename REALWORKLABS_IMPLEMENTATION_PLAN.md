# RealWorkLabs Widget Implementation Plan
## Strategic Project Gallery Integration Across Service & Location Pages

### Overview
The RealWorkLabs widget displays real customer projects with before/after photos matched to ServiceTitan job data. This plan outlines strategic placement of filtered widgets across 268 service pages to enhance conversion and showcase relevant local work.

---

## Current Implementation Status

### ✅ Completed
- **Recent Projects Page** (`/recent-projects`)
  - Widget showing ALL project types
  - Limit: 12 projects
  - No filters applied (serviceType='all')
  - Serves as the main project gallery

### RealWorkLabsWidget Component Features
Located at: `components/integrations/RealWorkLabsWidget.tsx`

**Available Props:**
- `apiKey` - Default: 'Mv2yZInBciS35Sln' (public client key)
- `serviceType` - Options: 'hvac' | 'plumbing' | 'solar' | 'electrical' | 'roofing' | 'all'
- `zipCode` - Filter by specific zip code for location targeting
- `limit` - Number of projects to display (default: 12)
- `containerId` - DOM container ID (default: 'rwl-neighborhood')
- `showLoadingState` - Display loading spinner (default: true)

---

## Implementation Strategy

### Phase 1: Core Service Pages (6 Pages)
Add filtered widgets to main service category pages showing only relevant project types.

#### Service Type Mappings:
1. **HVAC Services** → `serviceType="hvac"`
   - Pages: `/services/hvac`, `/services/ac-installation`, `/services/ac-repair`, `/services/heater-installation`, etc.
   
2. **Plumbing Services** → `serviceType="plumbing"`
   - Pages: `/services/plumbing`, `/services/water-heater-installation`, `/services/leak-detection`, etc.
   
3. **Solar Services** → `serviceType="solar"`
   - Pages: `/services/solar-installation`, `/services/residential-solar-installation`, etc.
   
4. **Electrical Services** → `serviceType="electrical"`
   - Pages: `/services/electrical`, `/services/electrical-panel-upgrades`, `/services/electrical-repair`, etc.
   
5. **Roofing Services** → `serviceType="roofing"`
   - Pages: `/services/roofing`, `/services/residential-roof-installation`, `/services/commercial-roofing`, etc.
   
6. **Drain/Sewer Services** → `serviceType="plumbing"` (closest match)
   - Pages: `/services/drain-clearing`, `/services/sewer-line-repair`, etc.
   - Note: If RealWorkLabs supports a separate 'drain-sewer' type, use that instead

### Phase 2: Location-Specific Service Pages (140 Pages)
Add widgets with BOTH service and zip code filtering for hyper-local relevance.

#### Location → Zip Code Mappings:
Based on Tucson area zip codes:

| Location | Primary Zip Code | Pages (Example) |
|----------|------------------|-----------------|
| Tucson (Main) | 85701 | hvactucson, plumbingtucson, electricaltucson |
| Oro Valley | 85755 | hvacorovalley, plumbingorovalley, electricalorovalley |
| Marana | 85653 | hvacmarana, plumbingmarana, electricalmarana |
| Sahuarita | 85629 | hvacsahuarita, plumbingsahuarita, electricalsahuarita |
| Vail | 85641 | hvacvail, plumbingvail, electricalvail |
| Green Valley | 85614 | hvacgreenvalley, plumbinggreenvalley, electricalgreenvalley |
| Catalina Foothills | 85750 | hvaccatalinafoothills, plumbingcatalinafoothills |
| Casa Adobes | 85704 | hvaccasasadobes, plumbingcasasadobes |
| Drexel Heights | 85746 | hvacdrexelheights, plumbingdrexelheights |
| Tanque Verde | 85749 | hvactanqueverde, plumbingtanqueverde |
| Rita Ranch | 85747 | hvacritaranch, plumbingritaranch |
| Picture Rocks | 85743 | hvacpicturerocks, plumbingpicturerocks |
| Tortolita | 85739 | hvactortolita, plumbingtortolita |
| Corona de Tucson | 85641 | hvaccoronadetucson, plumbingcoronadetucson |
| Avra Valley | 85653 | hvacavravalley, plumbingavravalley |
| Gladden Farms | 85653 | hvacgladdenfarms, plumbinggladdenfarms |
| Saddlebrooke | 85739 | hvacsaddlebrooke, plumbingsaddlebrooke |
| Saddlebrooke/Catalina | 85739 | hvacsaddlebrookecatalina, plumbingsaddlebrookecatalina |
| Tucson Estates | 85735 | hvactucsonestates, plumbingtucsonestates |
| Rillito | 85654 | hvacrillito, plumbingrillito |

#### Example Widget Usage for Location Pages:
```tsx
{/* Oro Valley HVAC Page - Shows only HVAC projects from Oro Valley area */}
<RealWorkLabsWidget 
  serviceType="hvac"
  zipCode="85755"
  limit={6}
/>
```

### Phase 3: Service Area Overview Pages (20 Pages)
Location overview pages showing ALL service types from that specific area.

#### Example Widget Usage:
```tsx
{/* Oro Valley Service Area Page - All services in Oro Valley */}
<RealWorkLabsWidget 
  serviceType="all"
  zipCode="85755"
  limit={12}
/>
```

---

## Widget Placement Recommendations

### Recommended Section Position
Place widget in a dedicated "Recent Projects in [Location/Service]" section:
- After service highlights/features
- Before FAQ section
- Typically 60-70% down the page

### Section Template
```tsx
{/* Recent [Service Type] Projects in [Location] */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Recent {serviceType === 'hvac' ? 'HVAC' : 'Plumbing'} Projects in {location}
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        See real installations and repairs from homeowners in your area
      </p>
    </div>

    <div className="bg-card rounded-lg border border-border p-6">
      <RealWorkLabsWidget 
        serviceType={serviceType}
        zipCode={zipCode}
        limit={6}
      />
    </div>
    
    <div className="mt-6 text-center">
      <Button asChild variant="outline">
        <Link href="/recent-projects">View All Projects</Link>
      </Button>
    </div>
  </div>
</section>
```

### Display Limits by Page Type
- **Main Service Pages**: 8-12 projects (comprehensive gallery)
- **Location-Specific Service Pages**: 4-6 projects (focused, local proof)
- **Service Area Pages**: 8-12 projects (area showcase)
- **Recent Projects Page**: 12+ projects (main gallery)

---

## SEO & Conversion Benefits

### Local Proof Points
✅ Shows real work done in the customer's specific neighborhood
✅ Builds trust through proximity and relevance
✅ Validates company presence in the area

### Service Expertise Demonstration
✅ Showcases specific service type expertise
✅ Provides visual proof of quality work
✅ Increases confidence for similar projects

### AI Search Optimization
✅ Real project data indexed by search engines
✅ Location-specific content reinforces local SEO
✅ Rich media content improves engagement metrics

---

## Technical Implementation Notes

### Dynamic Page Integration
For dynamic routes like `/services/[service]/[location]/page.tsx`:
```tsx
// Extract service type from params
const getServiceType = (service: string): ServiceType => {
  if (service.includes('hvac') || service.includes('ac') || service.includes('heater')) return 'hvac';
  if (service.includes('plumbing') || service.includes('water')) return 'plumbing';
  if (service.includes('solar')) return 'solar';
  if (service.includes('electrical')) return 'electrical';
  if (service.includes('roof')) return 'roofing';
  return 'all';
};

// Map location to zip code
const locationZipCodes: Record<string, string> = {
  'oro-valley': '85755',
  'marana': '85653',
  'sahuarita': '85629',
  // ... etc
};
```

### Performance Considerations
- Widget loads asynchronously via Next.js Script component
- Uses `afterInteractive` strategy to not block page load
- Loading state keeps UI stable during widget initialization
- Each widget instance gets unique container ID to prevent conflicts

---

## Rollout Plan

### Step 1: Test Implementation (1-2 pages)
- Add widget to 1 main service page (e.g., `/services/hvac`)
- Add widget to 1 location page (e.g., `/services/hvac/oro-valley`)
- Verify filtering works correctly
- Check mobile responsiveness
- Monitor load times

### Step 2: Core Service Pages (6 pages)
- Deploy to all 6 main service category pages
- Monitor widget performance
- Gather initial engagement metrics

### Step 3: High-Traffic Location Pages (20 pages)
- Roll out to top 20 location-specific service pages
- Focus on highest-traffic areas (Oro Valley, Marana, Sahuarita, Vail)
- Monitor conversion impact

### Step 4: Full Deployment (All 268 pages)
- Complete rollout to all service and location combinations
- Final testing and optimization
- Document performance metrics

---

## Success Metrics
- Widget load times < 2 seconds
- Mobile responsiveness verified
- Correct service type filtering applied
- Correct zip code filtering applied
- Projects displayed match page context
- Click-through rate to full project gallery
- Impact on page conversion rates

---

## Next Steps
1. Create zip code mapping utility
2. Update service page template with widget integration
3. Update location page template with widget integration
4. Test on 2 sample pages
5. Roll out to remaining pages in phases
