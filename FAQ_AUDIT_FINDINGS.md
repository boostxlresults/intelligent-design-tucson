# FAQ Audit Findings - Priority 2: LLM-Friendly Q&A Blocks

**Date:** November 3, 2025  
**Audit Script:** `scripts/auditFAQs.ts`

## Executive Summary

Comprehensive audit of FAQ coverage across 72 service pages and 15 city pages reveals critical implementation gaps that prevent AI search optimization. While all service pages have some FAQ content, **ZERO pages currently meet the 11-question minimum** required for LLM-friendly Q&A blocks and AI search visibility.

## Key Findings

### Service Pages (72 total)

| Metric | Count | Percentage |
|--------|-------|------------|
| **Total Service Pages** | 72 | 100% |
| **With Visual FAQs** | 72 | 100% ✅ |
| **With FAQ Schema** | 38 | 53% ⚠️ |
| **Meeting 11+ Question Minimum** | 0 | 0% ❌ |
| **Need Work** | 72 | 100% 🔴 |

### City Pages (15 total)

| Metric | Count | Percentage |
|--------|-------|------------|
| **Total City Pages** | 15 | 100% |
| **With Visual FAQs** | 0 | 0% ❌ |
| **With FAQ Schema** | 0 | 0% ❌ |

## Critical Issues

### 1. Schema/Visual Mismatch (39 pages) 🚨

**Problem:** Many pages have comprehensive FAQ schema (9-12 questions) but only display 1-7 questions visually on the page.

**Impact:** Google sees rich FAQ schema but users see minimal content. This creates a mismatch that could be flagged as misleading structured data.

**Examples:**
- `ElectricalPanelUpgrades.tsx`: 11 schema FAQs, only 3 visual FAQs
- `ACInstallation.tsx`: 9 schema FAQs, only 2 visual FAQs  
- `CeilingFanInstallation.tsx`: 11 schema FAQs, only 2 visual FAQs
- `ElectricalRepair.tsx`: 12 schema FAQs, only 2 visual FAQs
- `GeneracInstallation.tsx`: 12 schema FAQs, only 1 visual FAQ

**Full List of Mismatched Pages (39 total):**
```
ACRepair.tsx (10 visual vs 9 schema)
ACService.tsx (10 visual vs 9 schema)
ACInstallation.tsx (2 visual vs 9 schema)
ACTuneup.tsx (1 visual vs 9 schema)
CeilingFanInstallation.tsx (2 visual vs 11 schema)
CircuitBreakers.tsx (2 visual vs 11 schema)
CommercialRoofCoating.tsx (1 visual vs 9 schema)
CommercialRoofInspection.tsx (2 visual vs 9 schema)
CommercialRoofInstallation.tsx (1 visual vs 9 schema)
CommercialRoofRepair.tsx (2 visual vs 9 schema)
CommercialRoofReplacement.tsx (2 visual vs 9 schema)
CommercialSolarInstallation.tsx (2 visual vs 11 schema)
DuctlessMiniSplitInstallation.tsx (7 visual vs 9 schema)
DuctlessMiniSplitRepair.tsx (10 visual vs 9 schema)
ElectricalPanelUpgrades.tsx (3 visual vs 11 schema)
ElectricalRepair.tsx (2 visual vs 12 schema)
FlatRoofs.tsx (2 visual vs 9 schema)
GeneracInstallation.tsx (1 visual vs 12 schema)
GeneracRepair.tsx (2 visual vs 12 schema)
HomeEnergyAudit.tsx (1 visual vs 11 schema)
HomeEnergyUpgrades.tsx (2 visual vs 11 schema)
LightingUpgrades.tsx (2 visual vs 11 schema)
MetalRoofs.tsx (2 visual vs 9 schema)
OutdoorMotionLighting.tsx (2 visual vs 11 schema)
OutletsSwitches.tsx (2 visual vs 11 schema)
PitchedRoofs.tsx (2 visual vs 9 schema)
ResidentialRoofCoating.tsx (2 visual vs 9 schema)
ResidentialRoofInspection.tsx (2 visual vs 9 schema)
ResidentialRoofInstallation.tsx (2 visual vs 9 schema)
ResidentialRoofRepair.tsx (2 visual vs 9 schema)
ResidentialRoofReplacement.tsx (2 visual vs 9 schema)
ResidentialSolarInstallation.tsx (2 visual vs 11 schema)
ShingleRoofs.tsx (2 visual vs 9 schema)
Skylights.tsx (2 visual vs 9 schema)
SolarMaintenance.tsx (1 visual vs 11 schema)
SolarPanelCosts.tsx (1 visual vs 11 schema)
SolarTaxCredits.tsx (1 visual vs 11 schema)
SolarTubularLights.tsx (2 visual vs 9 schema)
TileRoofs.tsx (2 visual vs 9 schema)
```

### 2. Missing FAQ Schema (34 pages)

**Problem:** Pages have visual FAQs (9-10 questions) but no structured data markup.

**Impact:** FAQs are invisible to search engines and AI crawlers. No rich results eligibility.

**Examples:**
- BidetInstallation.tsx (9 visual FAQs, no schema)
- DrainClearing.tsx (9 visual FAQs, no schema)
- DuctCleaning.tsx (9 visual FAQs, no schema)
- Furnaces.tsx (9 visual FAQs, no schema)
- HeatPumps.tsx (9 visual FAQs, no schema)
- IndoorAirQuality.tsx (10 visual FAQs, no schema)
- PearlCertifiedHVAC.tsx (10 visual FAQs, no schema)
- SolarAC.tsx (11 visual FAQs, no schema) **← CLOSEST TO READY**

**Full List (34 pages):**
```
BidetInstallation.tsx (9 FAQs)
DrainClearing.tsx (9 FAQs)
DuctCleaning.tsx (9 FAQs)
DuctInstallation.tsx (9 FAQs)
DuctRepair.tsx (9 FAQs)
DuctSealing.tsx (9 FAQs)
Furnaces.tsx (9 FAQs)
HeatPumps.tsx (9 FAQs)
HeaterInstallation.tsx (9 FAQs)
HeaterRepair.tsx (9 FAQs)
HeaterService.tsx (9 FAQs)
HeaterTuneup.tsx (9 FAQs)
HybridWaterHeaters.tsx (9 FAQs)
IndoorAirQuality.tsx (10 FAQs)
LeakDetection.tsx (9 FAQs)
PearlCertifiedContractor.tsx (10 FAQs)
PearlCertifiedHVAC.tsx (10 FAQs)
PearlCertifiedSolar.tsx (10 FAQs)
PlumbingMaintenance.tsx (9 FAQs)
RooterSpecial.tsx (9 FAQs)
SewerCameraInspection.tsx (9 FAQs)
SewerLineRepair.tsx (9 FAQs)
SinkRepairInstallation.tsx (9 FAQs)
SmartThermostatInstallation.tsx (9 FAQs)
SolarAC.tsx (11 FAQs) ← READY except schema
TrenchlessRepair.tsx (9 FAQs)
WaterFiltration.tsx (9 FAQs)
WaterHeaterFlush.tsx (9 FAQs)
WaterHeaterInstallation.tsx (9 FAQs)
WaterHeaterRepair.tsx (9 FAQs)
WaterHeaters.tsx (9 FAQs)
WaterLeakRepair.tsx (9 FAQs)
WaterSofteners.tsx (9 FAQs)
```

### 3. Below 11-Question Minimum (72 pages - 100%)

**Problem:** Not a single service page meets the 11-question minimum for AI search optimization.

**Current Distribution:**
- 11 FAQs: 1 page (SolarAC.tsx - needs schema)
- 10 FAQs: 7 pages (need +1-2 questions)
- 9 FAQs: 64 pages (need +2 questions)

**Impact:** Insufficient FAQ density for LLM-friendly Q&A blocks. AI search engines (Gemini, Perplexity, Ask Maps) prefer comprehensive FAQ sections with 11+ questions for citation and extraction.

## Root Cause Analysis

### Why Schema/Visual Mismatch Occurred

1. **Fragmented Implementation:** FAQ data exists in two places:
   - Visual FAQs: Hard-coded in page TSX files (ACRepair.tsx lines 457-536)
   - Schema FAQs: Separate schema component (ACRepairSchema.tsx lines 114-191)

2. **No Single Source of Truth:** When updating FAQs, developers must manually sync two files, leading to drift.

3. **Incomplete Rollout:** Schema components were created with comprehensive FAQs, but visual rendering was stubbed or incomplete.

## Recommended Solution Architecture

### Phase 1: Centralized FAQ Data (High Priority)

**Create:** `client/src/data/faqs/`
- Centralized FAQ data for all service pages
- Single source of truth for questions and answers
- TypeScript interfaces for type safety

**Benefits:**
- Eliminates duplication
- Ensures schema/visual parity
- Scalable to 72+ service pages
- Easy to maintain and update

### Phase 2: LLM-Optimized FAQ Component

**Create:** Reusable `<ServiceFAQ>` component
- Accepts FAQ array from centralized data
- Renders semantic HTML (H2 section heading, H3 question headings)
- Auto-generates synchronized JSON-LD FAQ schema
- Optimized for AI extraction (standalone answers, 2-3 sentences)
- Accordion UI for better UX

**Features:**
- `data-testid` attributes for testing
- Proper semantic markup for accessibility
- Schema auto-injection via `useEffect`
- Clean, minimal design matching brand

### Phase 3: Rollout Strategy

**Priority Order:**
1. Fix 39 schema mismatch pages (highest impact)
2. Add schema to 34 pages missing it
3. Expand all 72 pages to 11+ questions
4. Add FAQs to 15 city pages

## Success Metrics

### Pre-Launch Requirements

- ✅ **100% Coverage:** All 72 service pages have 11+ FAQs
- ✅ **Schema Parity:** Visual FAQs match schema FAQs (zero mismatch)
- ✅ **Semantic Markup:** H2 section headings, H3 question headings
- ✅ **AI-Optimized:** Standalone answers, 2-3 sentences, natural language
- ✅ **Schema Valid:** Pass Google Rich Results Test
- ✅ **City Pages:** All 15 city pages have localized FAQs

### Post-Launch Monitoring

- Track FAQ rich results in Google Search Console
- Monitor AI search visibility (Gemini, Perplexity citations)
- Measure FAQ accordion engagement in analytics
- Monitor SERP feature wins for FAQ snippets

## Timeline Estimate

| Phase | Tasks | Estimated Time |
|-------|-------|----------------|
| **Data Centralization** | Create FAQ data structure for all pages | 2-3 hours |
| **Component Build** | Build reusable LLM-optimized FAQ component | 1-2 hours |
| **High Priority Fix** | Fix 39 schema mismatch pages | 2-3 hours |
| **Schema Addition** | Add schema to 34 missing pages | 2-3 hours |
| **Expansion** | Expand all pages to 11+ questions | 3-4 hours |
| **City Pages** | Add FAQs to 15 city pages | 2-3 hours |
| **Testing & QA** | Validate schema, test extraction | 1-2 hours |
| **TOTAL** | **End-to-end completion** | **13-20 hours** |

## Next Steps

1. ✅ **COMPLETED:** Run FAQ audit across all pages
2. ✅ **COMPLETED:** Document findings and root causes
3. **IN PROGRESS:** Create centralized FAQ data structure
4. **PENDING:** Build reusable LLM-optimized FAQ component
5. **PENDING:** Fix high-priority schema mismatch pages
6. **PENDING:** Complete rollout to all 72 service pages
7. **PENDING:** Add FAQs to 15 city pages
8. **PENDING:** Validate with Google Rich Results Test

---

**Priority Level:** 🔴 **CRITICAL**  
**Impact on Launch:** **HIGH** - Required for AI search optimization benchmark  
**Dependencies:** None - can proceed immediately  
**Owner:** Development Team  
**Status:** In Progress (Task 2 of 10)
