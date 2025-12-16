/**
 * Legacy URL redirects map
 * Handles all redirects from old WordPress/React URLs to new Next.js structure
 * This bypasses Vercel's 1,024 redirect limit by handling redirects at runtime
 */

export const LEGACY_REDIRECTS: Record<string, string> = {
  // Core pages
  '/about-us': '/about',
  '/about-us/guarantees': '/guarantees',
  '/about-us/realtors': '/realtors-offer',
  '/about-intelligent-design': '/knowledge-hub',
  '/our-story': '/about',
  '/intelligent-design-difference': '/about',
  '/terms-of-service': '/privacy-policy',
  '/terms': '/privacy-policy',
  '/privacy': '/privacy-policy',
  '/testimonials': '/customer-reviews',
  '/schedule': '/contact',
  '/thank-you': '/',
  '/thank-you-for-booking': '/',
  '/areas-served': '/service-areas',
  '/realtor-free-membership-offer': '/realtors-offer',
  '/new-home-buyer-offer': '/new-homebuyer-offer',
  '/intelligent-design-family-protection-plans': '/family-protection-plans',
  '/national-fire-prevention-month-free-deluxe-membership-offer': '/special-offers',
  '/holiday-giveaway': '/special-offers',
  '/water-heater-flush-special': '/special-offers',
  '/schedule-test-page': '/contact',
  '/pearl-certified-contractor': '/about',
  '/pearl-certified-hvac': '/services/ac-service-tucson',
  '/pearl-certified-solar': '/services/residential-solar-installation',
  '/tucson-hvac-contractors': '/services/hvac-tucson',
  '/hvac-service-technician': '/careers',
  '/hvac-installation': '/services/ac-installation-tucson',
  '/solar-energy-installer': '/services/residential-solar-installation',
  '/solar-panel-financing': '/financing',
  '/ac-install-financing': '/financing',
  '/free-online-hvac-quote': '/free-hvac-quote',
  '/free-online-water-heater-quote': '/water-heater-quote',
  '/blog': '/blog/hvac',

  // Air conditioning
  '/air-conditioning': '/services/ac-service-tucson',
  '/air-conditioning/ac-installation-tucson': '/services/ac-installation-tucson',
  '/air-conditioning/ac-repair-tucson': '/services/ac-repair-tucson',
  '/air-conditioning/ac-tune-up': '/services/ac-tuneup-tucson',
  '/air-conditioning/air-conditioning-service-tucson': '/services/ac-service-tucson',
  '/air-conditioning/air-conditioning-system': '/services/ac-service-tucson',
  '/air-conditioning/duct-cleaning-tucson': '/services/duct-cleaning-tucson',
  '/air-conditioning/ductless-mini-split-ac-repair-tucson': '/services/ductless-repair-tucson',
  '/air-conditioning/improve-indoor-air-quality-tucson': '/services/indoor-air-quality-tucson',
  '/air-conditioning/improve-indoor-air-quality-tucson/humidifiers': '/services/indoor-air-quality-tucson',
  '/air-conditioning/r22-phaseout-tucson': '/r22-phaseout',
  '/air-conditioning/smart-thermostat-installation': '/services/smart-thermostat-installation',
  '/ac-inspection': '/services/ac-tuneup-tucson',
  '/ac-maintenance': '/services/ac-tuneup-tucson',
  '/ac-replacement-tucson': '/services/ac-installation-tucson',
  '/ductless-mini-split-ac-installation': '/services/ductless-installation-tucson',
  '/duct-sealing-and-aeroseal': '/services/duct-sealing-tucson',

  // Heating
  '/heating': '/services/heating-tucson',
  '/heating/furnaces': '/services/furnaces-tucson',
  '/heating/heater-installation-tucson': '/services/heater-installation-tucson',
  '/heating/heater-repair-tucson': '/services/heater-repair-tucson',
  '/heating/heater-service-tucson': '/services/heater-service-tucson',
  '/heating/heater-tune-up-tucson': '/services/heater-tuneup-tucson',
  '/furnace-installation': '/services/heater-installation-tucson',
  '/furnace-maintenance': '/services/heater-tuneup-tucson',
  '/heater-inspection': '/services/heater-tuneup-tucson',
  '/heater-maintenance': '/services/heater-tuneup-tucson',
  '/heater-replacement': '/services/heater-installation-tucson',
  '/heat-pumps': '/services/heat-pumps-tucson',

  // Plumbing
  '/plumber-tucson': '/services/plumbing-tucson',
  '/plumber-tucson/bidet-installation-tucson': '/services/bidet-installation',
  '/plumber-tucson/emergency-water-heater-repair-tucson': '/services/water-heater-repair',
  '/plumber-tucson/hybrid-water-heater-installation': '/services/hybrid-water-heaters',
  '/plumber-tucson/leak-detection-tucson-az': '/services/leak-detection',
  '/plumber-tucson/plumbing-maintenance-tucson': '/services/plumbing-maintenance',
  '/plumber-tucson/plumbing-repair-installation-tucson': '/services/plumbing-tucson',
  '/plumber-tucson/repipe-specialist-tucson': '/services/repipe-tucson',
  '/plumber-tucson/sink-repair-installation': '/services/sink-repair-installation',
  '/plumber-tucson/tankless-water-heater-installation': '/services/tankless-water-heaters',
  '/plumber-tucson/water-filtration-system-tucson': '/services/water-filtration',
  '/plumber-tucson/water-heater-installation-replacement': '/services/water-heater-installation',
  '/plumber-tucson/water-heaters-tucson': '/services/water-heater-installation',
  '/plumber-tucson/sewer-line-repair-tucson': '/services/sewer-line-repair',
  '/water-heater-service': '/services/water-heater-installation',
  '/water-softener-repair': '/services/water-softener-repair',
  '/water-leak-repair': '/services/leak-detection',
  '/burst-pipe-repair': '/services/plumbing-tucson',
  '/emergency-plumber-in-tucson': '/services/plumbing-tucson',

  // Drain & Sewer
  '/drain-and-sewer': '/services/drain-sewer-tucson',
  '/drain-and-sewer/drain-cleaning-tucson': '/services/drain-clearing',
  '/drain-and-sewer/rooter-services-drain-clearing-special': '/drain-clearing-special',
  '/drain-and-sewer/sewer-camera-inspection-tucson': '/services/sewer-camera-inspection',
  '/drain-and-sewer/sewer-line-repair-tucson': '/services/sewer-line-repair',
  '/drain-and-sewer/trenchless-sewer-repair-replacement-tucson': '/services/trenchless-repair',
  '/drain-clearing-special': '/services/drain-clearing-special',

  // Roofing
  '/roofing': '/services/roofing',
  '/roofing-tucson-az': '/services/residential-roof-repair',
  '/roofing-tucson-az/commercial-roofing': '/services/commercial-roof-repair',
  '/roofing-tucson-az/commercial-roofing/roof-coating': '/services/commercial-roof-coating',
  '/roofing-tucson-az/commercial-roofing/roof-inspections': '/services/commercial-roof-inspection',
  '/roofing-tucson-az/commercial-roofing/roof-installation': '/services/commercial-roof-installation',
  '/roofing-tucson-az/commercial-roofing/roof-repair': '/services/commercial-roof-repair',
  '/roofing-tucson-az/commercial-roofing/roof-replacement': '/services/commercial-roof-replacement',
  '/roofing-tucson-az/residential-roofing': '/services/residential-roof-repair',
  '/roofing-tucson-az/residential-roofing/roof-coating': '/services/residential-roof-coating',
  '/roofing-tucson-az/residential-roofing/roof-inspection': '/services/residential-roof-inspection',
  '/roofing-tucson-az/residential-roofing/roof-installation': '/services/residential-roof-installation',
  '/roofing-tucson-az/residential-roofing/roof-repair': '/services/residential-roof-repair',
  '/roofing-tucson-az/residential-roofing/roof-replacements': '/services/residential-roof-replacement',
  '/roofing-tucson-az/residential-roofing/skylights': '/services/skylight-installation',
  '/roofing-tucson-az/residential-roofing/solar-tubular-lights': '/services/skylight-installation',
  '/roof-types': '/services/roofing',
  '/roof-types/flat-roof-repair': '/services/flat-roofs',
  '/roof-types/metal-roofing': '/services/metal-roofs',
  '/roof-types/pitched-roofs': '/services/pitched-roofs',
  '/roof-types/shingle-roofs': '/services/shingle-roofs',
  '/roof-types/tile-roofing': '/services/tile-roofs',

  // Solar
  '/solar-tucson': '/services/residential-solar-installation',
  '/solar-tucson/commercial-solar-installations-tucson': '/services/commercial-solar-installation',
  '/solar-tucson/home-energy-audit-consultant-tucson': '/services/home-energy-audit-tucson',
  '/solar-tucson/solar-energy-monitoring-maintenance-plan': '/services/solar-maintenance',
  '/solar-tucson/solar-installers-tucson': '/services/residential-solar-installation',
  '/solar-tucson/solar-installers-tuscon': '/services/residential-solar-installation',
  '/solar-tucson/solar-panel-installation-cost-tucson': '/services/solar-panel-costs',
  '/solar-tucson/solar-powered-air-conditioner': '/services/solar-ac-tucson',
  '/solar-tucson/solar-tax-credits-tucson': '/services/solar-panel-costs',
  '/solar-energy-contractor-in-tucson': '/services/residential-solar-installation',

  // Electrical
  '/electrical-tucson': '/services/electrical-tucson',
  '/electrical-tucson/ceiling-fan-installation-tucson': '/services/ceiling-fan-installation',
  '/electrical-tucson/circuit-breakers': '/services/circuit-breakers',
  '/electrical-tucson/electrical-repairs-tucson': '/services/electrical-repair',
  '/electrical-tucson/home-energy-upgrades-tucson': '/services/home-energy-upgrades-tucson',
  '/electrical-tucson/lighting-upgrades-tucson': '/services/lighting-upgrades',
  '/electrical-tucson/outdoor-and-motion-lighting-tucson': '/services/outdoor-motion-lighting',
  '/electrical-tucson/outlets-switches': '/services/outlets-switches',
  '/electrical-tucson/panel-upgrades-tucson': '/services/electrical-panel-upgrades',
  '/electrical-tucson/solar-installation-and-upgrades': '/services/residential-solar-installation',
  '/electrical-tucson/standby-generator-installation-and-repair': '/services/generac-installation',
  '/emergency-electrician-in-tucson': '/services/electrical-repair',

  // Service area redirects
  '/service-areas/casa-grande': '/service-areas/red-rock-casa-grande',
  '/service-areas/catalina': '/service-areas/saddlebrooke-catalina',
  '/service-areas/drexel-alvernon': '/service-areas/drexel-heights',
  '/service-areas/little-town': '/service-areas/tucson',
  '/service-areas/marana/air-conditioning': '/services/hvac-marana',
  '/service-areas/marana/heating': '/services/heating-marana',
  '/service-areas/oro-valley/air-conditioning': '/services/hvac-oro-valley',
  '/service-areas/red-rock': '/service-areas/red-rock-casa-grande',
  '/service-areas/saddlebrooke': '/service-areas/saddlebrooke-catalina',
  '/service-areas/sahuarita/air-conditioning': '/services/hvac-sahuarita',
  '/service-areas/summit': '/service-areas/tucson',
  '/service-areas/three-points': '/service-areas/tucson-estates',
  '/service-areas/tucson/air-conditioning': '/services/hvac-tucson',
  '/service-areas/tucson/heating': '/services/heating-tucson',
  '/service-areas/vail/air-conditioning': '/services/hvac-vail',
  '/service-areas/saddle-brooke-catalina': '/service-areas/saddlebrooke-catalina',

  // Legacy /services/ nested paths
  '/services/hvac/ac-repair': '/services/ac-repair-tucson',
  '/services/hvac/ac-installation': '/services/ac-installation-tucson',
  '/services/hvac/duct-cleaning': '/services/duct-cleaning-tucson',
  '/services/plumbing/water-heater-installation': '/services/water-heater-installation',
  '/services/plumbing/drain-cleaning': '/services/drain-clearing',
  '/services/solar/solar-monitoring': '/services/solar-maintenance',
  '/services/electrical/generator-installation': '/services/generac-installation',
  '/services/why-tucson-chooses-intelligent-design': '/about',

  // Blog post redirects
  '/does-air-conditioning-use-gas-or-electricity': '/blog/electrical/does-air-conditioning-use-gas-or-electricity',
  '/why-is-my-air-conditioning-working-downstairs-but-not-upstairs': '/blog/hvac/ac-problems-why-is-my-ac-working-downstairs-but-not-upstairs',
  '/how-much-does-a-new-ac-unit-cost-in-az': '/blog/hvac/how-much-does-a-new-ac-unit-cost-in-az',
  '/repiping-how-its-different-from-pipe-repair-and-why-you-may-need-it-more': '/blog/plumbing/repiping-how-its-different-from-pipe-repair-and-why-you-may-',
  '/how-long-do-air-conditioners-last': '/blog/hvac/how-long-do-air-conditioners-last',
  '/why-is-my-air-conditioning-unit-not-cooling': '/blog/hvac/why-is-my-air-conditioning-unit-not-cooling',
  '/when-to-call-for-ac-repair': '/blog/hvac/when-to-call-for-ac-repair',
  '/how-does-ac-work': '/blog/hvac/how-does-ac-work',
  '/how-long-should-your-ac-run-during-the-day': '/blog/hvac/how-long-should-your-ac-run-during-the-day',
  '/how-often-should-i-schedule-air-conditioning-service': '/blog/hvac/how-often-should-i-schedule-air-conditioning-service',
  '/what-does-the-seer-rating-mean-for-air-conditioners': '/blog/hvac/what-does-the-seer-rating-mean-for-air-conditioners',
  '/how-long-do-ac-units-last': '/blog/hvac/how-long-do-ac-units-last',
  '/how-much-does-a-new-air-conditioner-cost': '/blog/hvac/how-much-does-a-new-air-conditioner-cost',
  '/what-is-the-best-ac-unit-brand': '/blog/hvac/what-is-the-best-ac-unit-brand',
  '/why-is-my-toilet-running': '/blog/plumbing/why-is-my-toilet-running',
  '/what-is-an-anode-rod': '/blog/plumbing/what-is-an-anode-rod',
  '/who-to-call-for-water-heater-repair': '/blog/plumbing/who-to-call-for-water-heater-repair',
  '/discover-the-benefits-of-tankless-water-heaters': '/blog/plumbing/discover-the-benefits-of-tankless-water-heaters',
  '/is-a-tucson-solar-home-energy-audit-worth-it': '/blog/solar/is-a-tucson-solar-home-energy-audit-worth-it',
  '/why-is-my-air-conditioner-making-noise': '/blog/hvac/why-is-my-air-conditioner-making-noise',
  '/what-temperature-should-i-set-my-thermostat': '/blog/hvac/what-temperature-should-i-set-my-thermostat',
  '/how-come-my-air-conditioning-unit-smells-bad': '/blog/hvac/how-come-my-air-conditioning-unit-smells-bad',
  '/what-is-the-cost-of-running-fans-vs-air-conditioning': '/blog/hvac/what-is-the-cost-of-running-fans-vs-air-conditioning',
  '/are-there-any-known-air-conditioning-health-risks': '/blog/hvac/are-there-any-known-air-conditioning-health-risks',
  '/are-there-any-health-benefits-of-air-conditioning': '/blog/hvac/are-there-any-health-benefits-of-air-conditioning',
  '/how-much-does-it-cost-to-install-central-air-conditioning': '/blog/hvac/how-much-does-it-cost-to-install-central-air-conditioning',
  '/what-is-the-average-air-conditioning-service-cost': '/blog/hvac/what-is-the-average-air-conditioning-service-cost',
  '/how-do-i-qualify-for-the-new-ac-unit-rebates': '/blog/hvac/how-do-i-qualify-for-the-new-ac-unit-rebates',
  '/what-are-the-ideal-thermostat-settings': '/blog/hvac/what-are-the-ideal-thermostat-settings',
  '/is-it-safe-to-use-chemical-drain-cleaners': '/blog/plumbing/is-it-safe-to-use-chemical-drain-cleaners',
  '/what-are-the-most-common-plumbing-issues-in-homes': '/blog/plumbing/what-are-the-most-common-plumbing-issues-in-homes',
  '/why-did-hot-water-come-out-of-my-cold-water-tap': '/blog/plumbing/why-did-hot-water-come-out-of-my-cold-water-tap',
  '/90-of-arizona-ac-systems-have-an-installation-flaw': '/blog/hvac/90-of-arizona-ac-systems-have-an-installation-flaw',
  '/what-should-i-expect-when-i-ask-for-an-hvac-estimate': '/blog/hvac/what-should-i-expect-when-i-ask-for-an-hvac-estimate',
  '/permit-to-install-a-new-water-heater': '/blog/plumbing/permit-to-install-a-new-water-heater',
  '/what-is-the-most-efficient-way-to-run-air-conditioning': '/blog/hvac/what-is-the-most-efficient-way-to-run-air-conditioning',
  '/how-do-i-choose-an-air-conditioning-unit': '/blog/hvac/how-do-i-choose-an-air-conditioning-unit',
  '/what-are-some-effective-strategies-to-reduce-ac-noise': '/blog/hvac/what-are-some-effective-strategies-to-reduce-ac-noise',
  '/what-kind-of-air-conditioning-preventive-maintenance-do-i-need': '/blog/hvac/what-kind-of-air-conditioning-preventive-maintenance-do-i-nee',
  '/why-hire-professionals-to-clean-air-conditioner': '/blog/hvac/why-hire-professionals-to-clean-air-conditioner',
  '/why-use-solar-air-conditioner-for-home': '/blog/solar/why-use-solar-air-conditioner-for-home',
  '/things-to-consider-before-installing-rooftop-solar-panels': '/blog/solar/things-to-consider-before-installing-rooftop-solar-panels',
  '/why-you-should-invest-in-water-leak-detection-services': '/blog/plumbing/why-you-should-invest-in-water-leak-detection-services',
  '/reasons-why-you-should-use-solar-power': '/blog/solar/reasons-why-you-should-use-solar-power',
  '/ways-to-keep-your-ac-unit-running-smoothly-this-summer': '/blog/hvac/ways-to-keep-your-ac-unit-running-smoothly-this-summer',
  '/how-to-make-an-old-home-more-energy-efficient': '/blog/home-tips/how-to-make-an-old-home-more-energy-efficient',
  
  // Legacy blog posts that may appear under /services/ incorrectly
  '/services/tips-to-maintain-your-air-conditioner-and-avoid-costly-repairs': '/blog/hvac/expert-tips-for-maintaining-your-tucson-air-conditioning-sys',
  '/services/tips-to-maintain-your-air-conditioner-and-avoid-costly-repairs/': '/blog/hvac/expert-tips-for-maintaining-your-tucson-air-conditioning-sys',
  '/tips-to-maintain-your-air-conditioner-and-avoid-costly-repairs': '/blog/hvac/expert-tips-for-maintaining-your-tucson-air-conditioning-sys',
  '/tips-to-maintain-your-air-conditioner-and-avoid-costly-repairs/': '/blog/hvac/expert-tips-for-maintaining-your-tucson-air-conditioning-sys',
};

export const STANDALONE_PAGES = new Set([
  'financing', 'guarantees', 'resources', 'home', 'about',
  'contact', 'careers', 'privacy-policy', 'special-offers',
  'customer-reviews', 'video-testimonials', 'family-protection-plans',
  'new-homebuyer-offer', 'realtors-offer', 'recent-projects',
  'free-hvac-quote', 'water-heater-quote', 'filter-shop',
  'knowledge-hub', 'r22-phaseout', 'education-library',
  'drain-clearing-special', 'ac-system-faqs', 'schedule',
  'service-areas', 'services', 'blog'
]);

export const SERVICE_KEYWORDS = [
  'tucson', 'repair', 'installation', 'service', 'maintenance',
  'hvac', 'plumbing', 'solar', 'electrical', 'roofing', 'roof',
  'drain', 'sewer', 'heater', 'ac-', 'duct', 'water-', 'heating-',
  'furnace', 'heat-pump', 'generac', 'circuit', 'outlet', 'lighting',
  'skylight', 'panel', 'tankless', 'hybrid', 'leak', 'repipe', 'bidet',
  'sink', 'garbage', 'trenchless', 'sewer-camera', 'indoor-air',
  'thermostat', 'flat-roof', 'metal-roof', 'pitched-roof', 'shingle',
  'tile-roof', 'commercial-roof', 'residential-roof', 'energy-audit',
  'energy-upgrade'
];

/**
 * Check if a pathname should be redirected and return the destination
 */
export function getRedirectDestination(pathname: string): string | null {
  // Check exact match first
  if (LEGACY_REDIRECTS[pathname]) {
    return LEGACY_REDIRECTS[pathname];
  }
  
  // Check with trailing slash added/removed (Next.js may normalize)
  const withSlash = pathname.endsWith('/') ? pathname : pathname + '/';
  const withoutSlash = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  if (LEGACY_REDIRECTS[withSlash]) {
    return LEGACY_REDIRECTS[withSlash];
  }
  if (LEGACY_REDIRECTS[withoutSlash]) {
    return LEGACY_REDIRECTS[withoutSlash];
  }
  
  // Handle legacy /services/hvac/*, /services/plumbing/*, etc. nested paths
  const legacyServicePatterns = [
    { pattern: /^\/services\/hvac\/(.+)$/, prefix: '/services/' },
    { pattern: /^\/services\/plumbing\/(.+)$/, prefix: '/services/' },
    { pattern: /^\/services\/roofing\/(.+)$/, prefix: '/services/' },
    { pattern: /^\/services\/solar\/(.+)$/, prefix: '/services/' },
    { pattern: /^\/services\/electrical\/(.+)$/, prefix: '/services/' },
  ];
  
  for (const { pattern, prefix } of legacyServicePatterns) {
    const match = pathname.match(pattern);
    if (match) {
      return prefix + match[1];
    }
  }
  
  // Handle flat service slugs that should redirect to /services/
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 1) {
    const slug = segments[0];
    
    // Don't redirect standalone pages
    if (STANDALONE_PAGES.has(slug)) {
      return null;
    }
    
    // Check if this looks like a service page slug
    const isServiceSlug = SERVICE_KEYWORDS.some(keyword => slug.includes(keyword));
    
    if (isServiceSlug) {
      return `/services/${slug}`;
    }
  }
  
  return null;
}
