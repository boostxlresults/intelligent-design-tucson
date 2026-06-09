# Location-Variant Page Rewrite Strategy

## Current Problem
- 177 pages noindexed due to 75-94% content overlap
- 8 service categories × 22 locations + 7 standalone = 177 pages
- Overlap sources:
  1. **Shared FAQs** (`residentialRoofRepairFAQs`, etc.) — IDENTICAL across all locations in same category
  2. **Templated refinement questions** — only location name changes via `${location}` interpolation
  3. **Generic highlights** — same 6 highlights with minor word swaps
  4. **Boilerplate content sections** — same structure, same stats (46 years, 4.97 rating, 52 techs)
  5. **Shared component rendering** — ServicePage component renders identical UI structure

## Strategy for <50% Overlap

### What MUST be unique per page:
1. **Title & Meta** — Already unique ✓
2. **H1 & H2** — Already unique ✓
3. **Content sections** — Need COMPLETE rewrite with:
   - Location-specific climate/weather challenges (not generic "extreme heat")
   - Specific neighborhood details, housing stock, building codes
   - Real local statistics (population, home age, common roof types)
   - Unique service scenarios for that area
4. **FAQs** — Need LOCATION-SPECIFIC FAQs (not shared category FAQs)
5. **Refinement Questions** — Need unique answers with local data
6. **Highlights** — Need location-specific value props
7. **Case studies/testimonials** — Location-specific social proof

### Content Differentiation Matrix (per location):
- Demographics & housing stock (home age, typical construction, lot sizes)
- Local climate micro-variations (elevation, monsoon exposure, flood zones)
- Common service issues specific to that area
- Neighborhood landmarks and community context
- Unique pricing/timing considerations
- Area-specific building codes or HOA requirements

## Locations (22):
1. Avra Valley
2. Casas Adobes
3. Catalina Foothills
4. Corona de Tucson
5. Cortaro
6. Drexel Heights
7. East Tucson
8. Gladden Farms
9. Green Valley
10. Marana
11. Oro Valley
12. Picture Rocks
13. Red Rock/Casa Grande
14. Rillito
15. Rita Ranch
16. Saddle Brooke
17. Saddle Brooke/Catalina
18. Sahuarita
19. Tanque Verde
20. Tortolita
21. Tucson Estates
22. Vail

## Service Categories (8):
1. HVAC (22 pages)
2. Roofing (22 pages)
3. Plumbing (22 pages)
4. Electrical (22 pages)
5. Solar Installation (22 pages)
6. Drain Clearing (19 pages)
7. Drain/Sewer (19 pages)
8. Heating (22 pages)

## Implementation Plan:
- Use LLM API to generate truly unique content for each page
- Each page gets: unique content sections, unique FAQs, unique highlights
- Validate <50% overlap between any two pages in same category
- Remove from noindex-service-slugs.json
- Add back to sitemap
