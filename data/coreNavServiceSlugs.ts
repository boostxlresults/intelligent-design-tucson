/**
 * Core service navigation links.
 *
 * These are the hub service pages linked from the "Related <Category> Services"
 * block that renders on every service page (components/services/ServiceAreaLinks).
 * They are the pages the site actively promotes internally, so they are never
 * location-variant doorway pages and must never be noindexed.
 *
 * lib/seo/noindexServiceSlugs.ts reads CORE_NAV_SERVICE_SLUGS and subtracts it
 * from data/noindex-service-slugs.json, so adding a slug here is enough to keep
 * a future bulk noindex sweep from hiding a page we link to site-wide.
 */

export interface CoreNavServiceLink {
  name: string;
  slug: string;
}

// Core HVAC services
export const HVAC_SERVICES: CoreNavServiceLink[] = [
  { name: 'AC Repair', slug: 'ac-repair-tucson' },
  { name: 'AC Installation', slug: 'ac-installation-tucson' },
  { name: 'AC Service & Maintenance', slug: 'ac-service-tucson' },
  { name: 'AC Tune-Up', slug: 'ac-tuneup-tucson' },
  { name: 'Heating Services', slug: 'heating-tucson' },
  { name: 'Heater Repair', slug: 'heater-repair-tucson' },
  { name: 'Heater Installation', slug: 'heater-installation-tucson' },
  { name: 'Duct Cleaning', slug: 'duct-cleaning-tucson' },
  { name: 'Duct Repair', slug: 'duct-repair-tucson' },
  { name: 'Duct Sealing', slug: 'duct-sealing-tucson' },
  { name: 'Ductless Mini Split Installation', slug: 'ductless-installation-tucson' },
  { name: 'Indoor Air Quality', slug: 'indoor-air-quality-tucson' },
  { name: 'Furnaces', slug: 'furnaces-tucson' },
];

// Core Plumbing services
export const PLUMBING_SERVICES: CoreNavServiceLink[] = [
  { name: 'Plumbing Services', slug: 'plumbing-tucson' },
  { name: 'Drain Clearing', slug: 'drain-clearing-tucson' },
  { name: 'Water Heater Repair', slug: 'water-heater-repair' },
  { name: 'Water Heater Installation', slug: 'water-heater-installation' },
  { name: 'Tankless Water Heaters', slug: 'tankless-water-heaters' },
  { name: 'Garbage Disposal', slug: 'garbage-disposal' },
  { name: 'Sewer Line Repair', slug: 'sewer-line-repair' },
  { name: 'Plumbing Maintenance', slug: 'plumbing-maintenance' },
];

// Core Electrical services
export const ELECTRICAL_SERVICES: CoreNavServiceLink[] = [
  { name: 'Electrical Services', slug: 'electrical-tucson' },
  { name: 'Electrical Repair', slug: 'electrical-repair' },
  { name: 'Electrical Panel Upgrades', slug: 'electrical-panel-upgrades' },
  { name: 'Ceiling Fan Installation', slug: 'ceiling-fan-installation' },
  { name: 'Circuit Breakers', slug: 'circuit-breakers' },
  { name: 'EV Charger Installation', slug: 'ev-charger-installation' },
  { name: 'Lighting Installation', slug: 'lighting-installation' },
  { name: 'Whole House Surge Protection', slug: 'whole-house-surge-protection' },
];

// Core Solar services
export const SOLAR_SERVICES: CoreNavServiceLink[] = [
  { name: 'Solar Installation', slug: 'solar-installation-tucson' },
  { name: 'Residential Solar', slug: 'residential-solar-installation' },
  { name: 'Commercial Solar', slug: 'commercial-solar-installation' },
  { name: 'Solar Maintenance', slug: 'solar-maintenance' },
  { name: 'Solar Tax Credits', slug: 'solar-tax-credits' },
  { name: 'Solar Panel Costs', slug: 'solar-panel-costs' },
  { name: 'Solar AC', slug: 'solar-ac-tucson' },
];

// Core Roofing services
export const ROOFING_SERVICES: CoreNavServiceLink[] = [
  { name: 'Roofing Services', slug: 'roofing-tucson' },
  { name: 'Roof Repair', slug: 'roof-repair' },
  { name: 'Roof Replacement', slug: 'roof-replacement' },
  { name: 'Roof Inspection', slug: 'roof-inspection' },
  { name: 'Roof Coating', slug: 'roof-coating' },
  { name: 'Commercial Roof Repair', slug: 'commercial-roof-repair' },
  { name: 'Commercial Roof Installation', slug: 'commercial-roof-installation' },
];

export const CATEGORY_SERVICES: Record<string, CoreNavServiceLink[]> = {
  HVAC: HVAC_SERVICES,
  Plumbing: PLUMBING_SERVICES,
  Solar: SOLAR_SERVICES,
  Electrical: ELECTRICAL_SERVICES,
  Roofing: ROOFING_SERVICES,
};

/** Every service slug linked from the core service navigation. */
export const CORE_NAV_SERVICE_SLUGS: ReadonlySet<string> = new Set(
  Object.values(CATEGORY_SERVICES).flatMap((links) => links.map((link) => link.slug))
);
