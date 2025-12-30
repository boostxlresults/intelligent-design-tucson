/**
 * Legacy URL redirects map
 * Handles all redirects from old WordPress/React URLs to new Next.js structure
 * This bypasses Vercel's 1,024 redirect limit by handling redirects at runtime
 * 
 * Updated: 2025-01-16 - Added 1,001 URLs from Google Search Console
 */

export const LEGACY_REDIRECTS: Record<string, string> = {
  // ===== CORE PAGES =====
  '/commercial-maintenance': '/services/commercial-maintenance',
  '/plumbing': '/services/plumbing',
  '/radio-promotions': '/special-offers',
  '/news': '/blog',
  '/services/hvac-news': '/blog/hvac',
  '/services/hvaceasttucson': '/services/hvac-east-tucson',
  '/services/hvacredrockcasagrande': '/services/hvac-red-rock-casa-grande',
  '/services/drain-clearing-red-rock': '/services/drain-clearing-red-rock-casa-grande',
  '/services/hvacsahuarita': '/services/hvac-sahuarita',
  '/services/hvaccoronadetucson': '/services/hvac-corona-de-tucson',
  '/services/hvacgladdenfarms': '/services/hvac-gladden-farms',
  '/services/hvacgreenvalley': '/services/hvac-green-valley',
  '/services/hvacmarana': '/services/hvac-marana',
  '/services/hvacorovalley': '/services/hvac-oro-valley',
  '/services/hvacritaranch': '/services/hvac-rita-ranch',
  '/services/hvacsaddlebrookecatalina': '/services/hvac-saddle-brooke-catalina',
  '/services/hvactanqueverde': '/services/hvac-tanque-verde',
  '/services/hvactortolita': '/services/hvac-tortolita',
  '/services/hvactucsonestates': '/services/hvac-tucson-estates',
  '/services/hvacavravalley': '/services/hvac-avra-valley',
  '/services/hvaccasasadobes': '/services/hvac-casas-adobes',
  '/services/hvacdrexelheights': '/services/hvac-drexel-heights',
  '/services/hvacpicturerocks': '/services/hvac-picture-rocks',
  '/services/hvacvail': '/services/hvac-vail',
  '/about-us': '/about',
  '/about-us/guarantees': '/guarantees',
  '/about-us/realtors': '/realtors-offer',
  '/about-us/homeowners': '/family-protection-plans',
  '/about-us/intelligent-design-family-protection-plans': '/family-protection-plans',
  '/about-intelligent-design': '/knowledge-hub',
  '/our-story': '/about',
  '/intelligent-design-difference': '/about',
  '/terms-of-service': '/privacy-policy',
  '/terms': '/privacy-policy',
  '/privacy': '/privacy-policy',
  '/testimonials': '/customer-reviews',
  '/reviews': '/customer-reviews',
  '/schedule': '/contact',
  '/contact-us': '/contact',
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
  '/hvac-contractor-in-tucson': '/services/hvac-tucson',
  '/hvac-service-technician': '/careers',
  '/hvac-installation': '/services/ac-installation-tucson',
  '/hvac': '/services/hvac-tucson',
  '/solar-energy-installer': '/services/residential-solar-installation',
  '/solar-panel-financing': '/financing',
  '/ac-install-financing': '/financing',
  '/free-online-hvac-quote': '/free-hvac-quote',
  '/free-online-water-heater-quote': '/water-heater-quote',
  // Note: /blog master page exists - DO NOT redirect it
  '/site-map': '/',
  '/idesign-in-the-news': '/about',
  '/video-testimonial': '/video-testimonials',

  // Resources pages
  '/resources': '/knowledge-hub',
  '/resources/tax-credits-and-rebates': '/financing',
  '/resources/pearl-certified-contractor': '/about',

  // ===== SOLAR =====
  '/services/solar-a-c': '/services/solar-ac-tucson',

  // ===== AIR CONDITIONING =====
  '/services/ac': '/services/hvac-tucson',
  '/air-conditioning': '/services/ac-service-tucson',
  '/air-conditioning/ac-installation-tucson': '/services/ac-installation-tucson',
  '/air-conditioning/ac-repair-tucson': '/services/ac-repair-tucson',
  '/air-conditioning/ac-tune-up': '/services/ac-tuneup-tucson',
  '/air-conditioning/air-conditioning-service-tucson': '/services/ac-service-tucson',
  '/air-conditioning/air-conditioning-system': '/services/ac-service-tucson',
  '/air-conditioning/air-conditioning-maintenance-tucson': '/services/ac-tuneup-tucson',
  '/air-conditioning/air-conditioning-financing': '/financing',
  '/air-conditioning/duct-cleaning-tucson': '/services/duct-cleaning-tucson',
  '/air-conditioning/duct-services': '/services/duct-cleaning-tucson',
  '/air-conditioning/ductless-mini-split-ac-repair-tucson': '/services/ductless-repair-tucson',
  '/air-conditioning/ductless-mini-split-repair-installation-tucson': '/services/ductless-repair-tucson',
  '/air-conditioning/improve-indoor-air-quality-tucson': '/services/indoor-air-quality-tucson',
  '/air-conditioning/improve-indoor-air-quality-tucson/humidifiers': '/services/indoor-air-quality-tucson',
  '/air-conditioning/r22-phaseout-tucson': '/r22-phaseout',
  '/air-conditioning/smart-thermostat-installation': '/services/smart-thermostat-installation-tucson',
  '/services/smart-thermostat-installation': '/services/smart-thermostat-installation-tucson',
  '/air-conditioning/solar-air-conditioner': '/services/solar-ac-tucson',
  '/ac-inspection': '/services/ac-tuneup-tucson',
  '/ac-maintenance': '/services/ac-tuneup-tucson',
  '/ac-replacement-tucson': '/services/ac-installation-tucson',
  '/ductless-mini-split-ac-installation': '/services/ductless-installation-tucson',
  '/duct-sealing-and-aeroseal': '/services/duct-sealing-tucson',
  '/schedule-an-air-conditioning-service': '/contact',

  // Indoor air quality
  '/indoor-air-quality': '/services/indoor-air-quality-tucson',
  '/indoor-air-quality/humidifiers': '/services/indoor-air-quality-tucson',
  '/indoor-air-quality/smart-thermostat-installation': '/services/smart-thermostat-installation',

  // ===== HEATING =====
  '/heating': '/services/heating-tucson',
  '/heating/furnaces': '/services/furnaces-tucson',
  '/heating/boilers': '/services/heating-tucson',
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

  // ===== PLUMBING =====
  '/plumber-tucson': '/services/plumbing-tucson',
  '/plumber-tucson/bidet-installation': '/services/bidet-installation',
  '/plumber-tucson/bidet-installation-tucson': '/services/bidet-installation',
  '/plumber-tucson/commercial-plumbing': '/services/plumbing-tucson',
  '/plumber-tucson/desert-shield-water-filtration-system-water-soft': '/services/water-filtration',
  '/plumber-tucson/desert-shield-water-filtration-system-water-softener-tucson': '/services/water-filtration',
  '/plumber-tucson/emergency-plumbing': '/services/plumbing-tucson',
  '/plumber-tucson/emergency-water-heater-repair-tucson': '/services/water-heater-repair',
  '/plumber-tucson/hybrid-water-heater-installation': '/services/hybrid-water-heaters',
  '/plumber-tucson/leak-detection-tucson-az': '/services/leak-detection',
  '/plumber-tucson/plumbing-maintenance': '/services/plumbing-maintenance',
  '/plumber-tucson/plumbing-maintenance-tucson': '/services/plumbing-maintenance',
  '/plumber-tucson/plumbing-repair-installation-tucson': '/services/plumbing-tucson',
  '/plumber-tucson/repipe-specialist-tucson': '/services/repipe-tucson',
  '/plumber-tucson/repiping-tucson': '/services/repipe-tucson',
  '/plumber-tucson/sink-repair-installation': '/services/sink-repair-installation',
  '/plumber-tucson/tankless-water-heater-installation': '/services/tankless-water-heaters',
  '/plumber-tucson/water-filtration-system-tucson': '/services/water-filtration',
  '/plumber-tucson/water-heater-installation-replacement': '/services/water-heater-installation',
  '/plumber-tucson/water-heaters-tucson': '/services/water-heater-installation',
  '/plumber-tucson/sewer-line-repair-tucson': '/services/sewer-line-repair',
  '/water-heater-service': '/services/water-heater-installation',
  '/water-softener-repair': '/services/water-softeners',
  '/services/water-softener-repair': '/services/water-softeners',
  '/water-leak-repair': '/services/leak-detection',
  '/burst-pipe-repair': '/services/plumbing-tucson',
  '/emergency-plumber-in-tucson': '/services/plumbing-tucson',

  // ===== DRAIN & SEWER =====
  '/drain-and-sewer': '/services/drain-sewer-tucson',
  '/drain-and-sewer/drain-cleaning-tucson': '/services/drain-clearing',
  '/drain-and-sewer/rooter-services-drain-clearing-special': '/services/rooter-special',
  '/drain-and-sewer/rooter-services-drain-clearing-special/': '/services/rooter-special',
  '/drain-and-sewer/sewer-camera-inspection': '/services/sewer-camera-inspection',
  '/drain-and-sewer/sewer-camera-inspection-tucson': '/services/sewer-camera-inspection',
  '/drain-and-sewer/sewer-cleaning': '/services/drain-clearing',
  '/drain-and-sewer/sewer-line-repair-tucson': '/services/sewer-line-repair',
  '/drain-and-sewer/trenchless-sewer-repair-replacement-tucson': '/services/trenchless-repair',
  '/drain-clearing-special': '/services/drain-clearing-special',

  // ===== ROOFING - ALL VARIATIONS =====
  '/roofing': '/services/roofing',
  '/roofing-tucson-az': '/services/residential-roof-repair',
  
  // Roofing - Commercial (from roofing-tucson-az)
  '/roofing-tucson-az/commercial-roofing': '/services/commercial-roof-repair',
  '/roofing-tucson-az/commercial-roofing/roof-coating': '/services/commercial-roof-coating',
  '/roofing-tucson-az/commercial-roofing/roof-inspections': '/services/commercial-roof-inspection',
  '/roofing-tucson-az/commercial-roofing/roof-installation': '/services/commercial-roof-installation',
  '/roofing-tucson-az/commercial-roofing/roof-repair': '/services/commercial-roof-repair',
  '/roofing-tucson-az/commercial-roofing/roof-replacement': '/services/commercial-roof-replacement',
  
  // Roofing - Residential (from roofing-tucson-az)
  '/roofing-tucson-az/residential-roofing': '/services/residential-roof-repair',
  '/roofing-tucson-az/residential-roofing/roof-coating': '/services/residential-roof-coating',
  '/roofing-tucson-az/residential-roofing/roof-inspection': '/services/residential-roof-inspection',
  '/roofing-tucson-az/residential-roofing/roof-installation': '/services/residential-roof-installation',
  '/roofing-tucson-az/residential-roofing/roof-repair': '/services/residential-roof-repair',
  '/roofing-tucson-az/residential-roofing/roof-replacements': '/services/residential-roof-replacement',
  '/roofing-tucson-az/residential-roofing/skylights': '/services/skylights',
  '/roofing-tucson-az/residential-roofing/solar-tubular-lights': '/services/skylights',
  
  // Roofing - Commercial (from /roofing)
  '/roofing/commercial-roofing': '/services/commercial-roof-repair',
  '/roofing/commercial-roofing/roof-coating': '/services/commercial-roof-coating',
  '/roofing/commercial-roofing/roof-inspections': '/services/commercial-roof-inspection',
  '/roofing/commercial-roofing/roof-installation': '/services/commercial-roof-installation',
  '/roofing/commercial-roofing/roof-repair': '/services/commercial-roof-repair',
  '/roofing/commercial-roofing/roof-replacement': '/services/commercial-roof-replacement',
  
  // Roofing - Residential (from /roofing)
  '/roofing/residential-roofing': '/services/residential-roof-repair',
  '/roofing/residential-roofing/roof-coating': '/services/residential-roof-coating',
  '/roofing/residential-roofing/roof-inspection': '/services/residential-roof-inspection',
  '/roofing/residential-roofing/roof-installation': '/services/residential-roof-installation',
  '/roofing/residential-roofing/roof-repair': '/services/residential-roof-repair',
  '/roofing/residential-roofing/roof-replacements': '/services/residential-roof-replacement',
  '/roofing/residential-roofing/skylights': '/services/skylights',
  '/roofing/residential-roofing/solar-tubular-lights': '/services/skylights',
  
  // Roofing - Flat paths (legacy)
  '/residential-roofing': '/services/residential-roof-repair',
  '/residential-roofing/roof-repair': '/services/residential-roof-repair',
  '/residential-roofing/roof-coating': '/services/residential-roof-coating',
  '/residential-roofing/roof-inspection': '/services/residential-roof-inspection',
  '/residential-roofing/roof-installation': '/services/residential-roof-installation',
  '/residential-roofing/roof-replacements': '/services/residential-roof-replacement',
  '/residential-roofing/skylights': '/services/skylights',
  '/residential-roofing/solar-tubular-lights': '/services/skylights',
  '/services/skylight-installation': '/services/skylights',
  '/residential-roofing/emergency-roof-repair': '/services/residential-roof-repair',
  
  '/commercial-roofing': '/services/commercial-roof-repair',
  '/commercial-roofing/roof-repair': '/services/commercial-roof-repair',
  '/commercial-roofing/roof-coating': '/services/commercial-roof-coating',
  '/commercial-roofing/roof-inspections': '/services/commercial-roof-inspection',
  '/commercial-roofing/roof-installation': '/services/commercial-roof-installation',
  '/commercial-roofing/roof-replacement': '/services/commercial-roof-replacement',
  
  // Roof types
  '/roof-types': '/services/roofing',
  '/roof-types/flat-roof-repair': '/services/flat-roofs',
  '/roof-types/metal-roofing': '/services/metal-roofs',
  '/roof-types/pitched-roofs': '/services/pitched-roofs',
  '/roof-types/shingle-roofs': '/services/shingle-roofs',
  '/roof-types/tile-roofing': '/services/tile-roofs',

  // ===== SOLAR =====
  '/solar-tucson': '/services/residential-solar-installation',
  '/solar-tucson/commercial-solar-installations-tucson': '/services/commercial-solar-installation',
  '/solar-tucson/commercial-solar': '/services/commercial-solar-installation',
  '/solar-tucson/home-energy-audit': '/services/home-energy-audit-tucson',
  '/solar-tucson/home-energy-audit-consultant-tucson': '/services/home-energy-audit-tucson',
  '/solar-tucson/solar-energy-monitoring-maintenance-plan': '/services/solar-maintenance',
  '/solar-tucson/solar-financing': '/financing',
  '/solar-tucson/solar-installation': '/services/residential-solar-installation',
  '/solar-tucson/solar-installers-tucson': '/services/residential-solar-installation',
  '/solar-tucson/solar-installers-tuscon': '/services/residential-solar-installation',
  '/solar-tucson/solar-panel-installation-cost-tucson': '/services/solar-panel-costs',
  '/solar-tucson/solar-powered-air-conditioner': '/services/solar-ac-tucson',
  '/solar-tucson/solar-tax-credits': '/services/solar-panel-costs',
  '/solar-tucson/solar-tax-credits-tucson': '/services/solar-panel-costs',
  '/solar-energy-contractor-in-tucson': '/services/residential-solar-installation',

  // ===== ELECTRICAL =====
  '/electrical-tucson': '/services/electrical-tucson',
  '/electrical-tucson/ceiling-fan-installation': '/services/ceiling-fan-installation',
  '/electrical-tucson/ceiling-fan-installation-tucson': '/services/ceiling-fan-installation',
  '/electrical-tucson/ceiling-fan-repair': '/services/ceiling-fan-installation',
  '/electrical-tucson/circuit-breakers': '/services/circuit-breakers',
  '/electrical-tucson/commercial-electrician': '/services/electrical-tucson',
  '/electrical-tucson/electrical-panel-repair': '/services/electrical-panel-upgrades',
  '/electrical-tucson/electrical-panel-upgrades': '/services/electrical-panel-upgrades',
  '/electrical-tucson/electrical-repairs-tucson': '/services/electrical-repair',
  '/electrical-tucson/ev-chargers': '/services/ev-chargers',
  '/electrical-tucson/home-energy-upgrades-tucson': '/services/home-energy-upgrades-tucson',
  '/electrical-tucson/lighting-upgrades': '/services/lighting-upgrades',
  '/electrical-tucson/lighting-upgrades-tucson': '/services/lighting-upgrades',
  '/electrical-tucson/outdoor-and-motion-lighting-tucson': '/services/outdoor-motion-lighting',
  '/electrical-tucson/outlets-switches': '/services/outlets-switches',
  '/electrical-tucson/panel-upgrades-tucson': '/services/electrical-panel-upgrades',
  '/electrical-tucson/solar-installation-and-upgrades': '/services/residential-solar-installation',
  '/electrical-tucson/standby-generator-installation-and-repair': '/services/generac-installation',
  '/emergency-electrician-in-tucson': '/services/electrical-repair',
  '/services/electrician-in-tucson': '/services/electrical-repair',

  // ===== SERVICE AREAS =====
  // Valid location slugs per manifest: avra-valley, casas-adobes, catalina-foothills, corona-de-tucson,
  // drexel-heights, east-tucson, gladden-farms, green-valley, marana, oro-valley, picture-rocks,
  // red-rock-casa-grande, rita-ranch, saddle-brooke-catalina, sahuarita, tanque-verde, tortolita, tucson, vail
  // Note: self-referential redirects removed (e.g., /service-areas/avra-valley -> /service-areas/avra-valley)
  '/service-areas/casa-grande': '/service-areas/red-rock-casa-grande',
  '/service-areas/catalina': '/service-areas/saddle-brooke-catalina',
  '/service-areas/drexel-alvernon': '/service-areas/drexel-heights',
  '/service-areas/little-town': '/service-areas/tucson',
  '/service-areas/marana/air-conditioning': '/services/hvac-marana',
  '/service-areas/marana/heating': '/services/heating-marana',
  '/service-areas/oro-valley/air-conditioning': '/services/hvac-oro-valley',
  '/service-areas/red-rock': '/service-areas/red-rock-casa-grande',
  '/service-areas/rillito': '/service-areas/marana',
  '/service-areas/saddlebrooke': '/service-areas/saddle-brooke-catalina',
  '/service-areas/sahuarita/air-conditioning': '/services/hvac-sahuarita',
  '/service-areas/summit': '/service-areas/tucson',
  '/service-areas/three-points': '/service-areas/tucson',
  '/service-areas/tucson/air-conditioning': '/services/hvac-tucson',
  '/service-areas/tucson/heating': '/services/heating-tucson',
  '/service-areas/tucson-estates': '/service-areas/tucson',
  '/service-areas/vail/air-conditioning': '/services/hvac-vail',

  // ===== VIDEO CENTER =====
  '/video-center': '/education-library',
  '/video-center/education-library': '/education-library',
  '/video-center/testimonials': '/video-testimonials',
  '/video-center/careers': '/careers',
  
  // Video center education library videos
  '/video-center/education-library/duct-sealing-methods-spotlight-on-aeroseal': '/education-library',
  '/video-center/education-library/lennox-ductless-mini-split-installation-in-tucso': '/education-library',
  '/video-center/education-library/lennox-furnace-technology-explained': '/education-library',
  '/video-center/education-library/lennox-sun-source-system-reduce-cooling-costs-wi': '/education-library',
  '/video-center/education-library/lennox-air-conditioner-review': '/education-library',
  '/video-center/education-library/lennox-heat-pump-technology-explained': '/education-library',
  '/video-center/education-library/lennox-heat-pump-technology-explained2': '/education-library',
  '/video-center/education-library/what-is-tonnage-in-ac-intelligent-design-explain': '/education-library',
  '/video-center/education-library/tucson-commercial-duct-installation-intelligent-': '/education-library',
  '/video-center/education-library/hvac-cost-how-much-will-a-new-hvac-system-cost-': '/education-library',
  '/video-center/education-library/air-purifier-systems-for-your-home': '/education-library',
  '/video-center/education-library/how-to-reduce-energy-consumption-with-an-energy-': '/education-library',
  '/video-center/education-library/package-unit-installation-in-tucson-intelligent-': '/education-library',
  '/video-center/education-library/lennox-hvac-systems': '/education-library',
  '/video-center/education-library/intelligent-design-air-conditioning-and-heating-': '/education-library',
  '/video-center/education-library/air-conditioner-tonnage-intelligent-design-expla': '/education-library',
  '/video-center/education-library/how-air-conditioning-works': '/education-library',
  '/video-center/education-library/tucson-ac-service-precise-comfort-from-lennox': '/education-library',
  '/video-center/education-library/energy-efficiency-what-is-seer-': '/education-library',
  '/video-center/education-library/air-quality-and-health-what-are-the-effects-of-p': '/education-library',
  '/video-center/education-library/lennox-air-conditioner-with-two-stage-technology': '/education-library',
  '/video-center/education-library/lennox-solar-air-conditioning-review': '/education-library',
  '/video-center/education-library/hvac-system-cost-5-costs-of-hvac-ownership': '/education-library',
  '/video-center/education-library/lennox-smart-thermostat-explore-the-icomfort-wi-': '/education-library',
  '/video-center/education-library/lennox-2-stage-furnace-why-it-provides-superior-': '/education-library',
  
  // Video testimonials
  '/video-center/testimonials/intelligent-design-air-conditioning-and-heating-': '/video-testimonials',
  '/video-center/testimonials/intelligent-design-air-conditioning-and-heating-2': '/video-testimonials',
  '/video-center/testimonials/intelligent-design-air-conditioning-and-heating-3': '/video-testimonials',
  '/video-center/testimonials/ray-and-teri-from-saddlebrook-az-satisfied-ac-se': '/video-testimonials',
  '/video-center/testimonials/tucson-solar-new-hvac-system-install-client-stor': '/video-testimonials',
  '/video-center/testimonials/keller-williams-tucson-testimonial': '/video-testimonials',
  '/video-center/testimonials/bonnie-and-john-ac-service-customers-of-intellig': '/video-testimonials',
  '/video-center/testimonials/mary-with-northwest-medical-center-customer-test': '/video-testimonials',
  '/video-center/testimonials/margaret-lonny-wallace-customer-testimonial-for-': '/video-testimonials',
  '/video-center/testimonials/kathy-long-testimonial-for-intelligent-design-ai': '/video-testimonials',
  '/video-center/testimonials/ron-l-tucson-ac-installation-intelligent-design-': '/video-testimonials',
  '/video-center/careers/kold-news-13-story-about-our-10-000-signing-bonu': '/careers',

  // ===== WEB STORIES =====
  '/web-stories': '/blog/hvac',
  '/web-stories/10-tips-to-choose-the-best-ac-repair-service-in-tucson': '/blog/hvac',
  '/web-stories/signs-your-ac-needs-repair': '/blog/hvac',
  '/web-stories/stay-cool-in-tucson-expert-ac-repair-tips': '/blog/hvac',
  '/web-stories/benefits-of-having-a-solar-ac': '/blog/solar',
  '/web-stories/effortless-ac-installation-in-tucson': '/blog/hvac',
  '/web-stories/energy-saving-tips-for-your-air-conditioning-system': '/blog/hvac',
  '/web-stories/how-to-find-an-hvac-contractor-in-tucson': '/blog/hvac',
  '/web-stories/importance-of-maintaining-indoor-air-quality-for-your-health': '/blog/hvac',
  '/web-stories/stay-cool-with-solar-ac-in-tucson': '/blog/solar',

  // ===== LEGACY /services/ NESTED PATHS =====
  '/services/hvac/ac-repair': '/services/ac-repair-tucson',
  '/services/hvac/ac-installation': '/services/ac-installation-tucson',
  '/services/hvac/duct-cleaning': '/services/duct-cleaning-tucson',
  '/services/plumbing/water-heater-installation': '/services/water-heater-installation',
  '/services/plumbing/drain-cleaning': '/services/drain-clearing',
  '/services/solar/solar-monitoring': '/services/solar-maintenance',
  '/services/electrical/generator-installation': '/services/generac-installation',
  '/services/why-tucson-chooses-intelligent-design': '/about',
  '/ac-heating-plumbing-solar-roofing-electrical': '/services',

  // ===== BLOG POSTS - ROOT LEVEL (no /blog/ prefix) =====
  '/does-air-conditioning-use-gas-or-electricity': '/blog/electrical/does-air-conditioning-use-gas-or-electricity',
  '/why-is-my-air-conditioning-working-downstairs-but-not-upstairs': '/blog/hvac/ac-problems-why-is-my-ac-working-downstairs-but-not-upstairs',
  '/how-much-does-a-new-ac-unit-cost-in-az': '/blog/hvac/how-much-does-a-new-ac-unit-cost-in-az',
  '/repiping-how-its-different-from-pipe-repair-and-why-you-may-need-it-more': '/blog/plumbing/repiping-how-its-different-from-pipe-repair-and-why-you-may-',
  '/repiping-the-pros-and-cons-of-having-your-homes-piping-replaced': '/blog/plumbing/repiping-the-pros-and-cons-of-having-your-homes-piping-repla',
  '/how-long-do-air-conditioners-last': '/blog/hvac/how-long-do-air-conditioners-last',
  '/why-is-my-air-conditioning-unit-not-cooling': '/blog/hvac/why-is-my-air-conditioning-unit-not-cooling',
  '/why-is-my-ac-not-cooling': '/blog/hvac/why-is-my-air-conditioning-unit-not-cooling',
  '/when-to-call-for-ac-repair': '/blog/hvac/when-to-call-for-ac-repair',
  '/how-does-ac-work': '/blog/hvac/how-does-ac-work',
  '/how-long-should-your-ac-run-during-the-day': '/blog/hvac/how-long-should-your-ac-run-during-the-day',
  '/how-often-should-i-schedule-air-conditioning-service': '/blog/hvac/how-often-should-i-schedule-air-conditioning-service',
  '/what-does-the-seer-rating-mean-for-air-conditioners': '/blog/hvac/what-does-the-seer-rating-mean-for-air-conditioners',
  '/how-long-do-ac-units-last': '/blog/hvac/how-long-do-ac-units-last',
  '/how-long-should-ac-last-in-arizona': '/blog/hvac/how-long-should-ac-last-in-arizona',
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
  
  // More root-level blog posts from GSC
  '/the-best-types-of-air-conditioners-for-tucson-arizona': '/blog/hvac/the-best-types-of-air-conditioners-for-tucson-arizona',
  '/solar-energy-facts-people-should-know': '/blog/solar/solar-energy-facts-people-should-know',
  '/benefits-of-hiring-professional-solar-panel-installers': '/blog/solar/benefits-of-hiring-professional-solar-panel-installers',
  '/what-are-the-financial-benefits-of-solar-energy': '/blog/solar/what-are-the-financial-benefits-of-solar-energy',
  '/copper-vs-pex-choosing-the-right-material-for-repiping': '/blog/plumbing/copper-vs-pex-choosing-the-right-material-for-repiping',
  '/drain-cleaning-solutions-that-actually-work': '/blog/plumbing/drain-cleaning-solutions-that-actually-work',
  '/how-to-make-your-own-drain-cleaner-at-home': '/blog/plumbing/how-to-make-your-own-drain-cleaner-at-home',
  '/what-is-off-grid-solar-power-system': '/blog/solar/what-is-off-grid-solar-power-system',
  '/the-importance-of-air-conditioner-sizing-how-to-choose-the-right-ac-unit-for-optimal-comfort-and-efficiency': '/blog/hvac',
  '/the-truth-about-tucson-solar-companies': '/blog/solar/the-truth-about-tucson-solar-companies',
  '/common-drain-cleaning-mistakes-you-must-avoid': '/blog/plumbing/common-drain-cleaning-mistakes-you-must-avoid',
  '/how-solar-power-systems-can-save-you-money-in-tucson-az': '/blog/solar/how-solar-power-systems-can-save-you-money-in-tucson-az',
  '/the-benefits-of-hiring-the-1-rated-best-solar-panel-installers-in-tucson': '/blog/solar/the-benefits-of-hiring-the-1-rated-best-solar-panel-installe',
  '/tucson-waters-epa-warning': '/blog/plumbing/tucson-waters-epa-warning',
  '/solar-power-system-advantages-and-disadvantages': '/blog/solar/solar-power-system-advantages-and-disadvantages',
  '/the-best-materials-for-repiping-a-home': '/blog/plumbing/the-best-materials-for-repiping-a-home',
  '/impact-of-indoor-air-quality-on-your-health-and-comfort': '/blog/hvac/impact-of-indoor-air-quality-on-your-health-and-comfort',
  '/choosing-the-best-ac-repair-near-me-essential-tips-for-finding-reliable-service': '/blog/hvac/choosing-the-best-ac-repair-near-me-essential-tips-for-finding',
  '/what-to-expect-during-and-after-ac-repair': '/blog/hvac/what-to-expect-during-and-after-ac-repair',
  '/why-solar-energy-is-the-future': '/blog/solar/why-solar-energy-is-the-future',
  '/the-many-ways-plumbers-in-tucson-can-help': '/blog/plumbing/the-many-ways-plumbers-in-tucson-can-help',
  '/10-reasons-you-should-always-call-an-ac-repair-specialist': '/blog/hvac/10-reasons-you-should-always-call-an-ac-repair-specialist',
  '/desert-shield-water-filtration-the-smart-choice-for-tucson-homes': '/blog/plumbing/desert-shield-water-filtration-the-smart-choice-for-tucson-ho',
  '/should-you-diy-or-hire-a-professional-for-drain-cleaning': '/blog/plumbing/should-you-diy-or-hire-a-professional-for-drain-cleaning',
  '/comprehensive-home-services-in-oro-valley-more-than-just-a-business-its-a-commitment-to-the-community': '/service-areas/oro-valley',
  '/is-your-ac-making-you-sick-the-hidden-dangers-of-dirty-air-filters': '/blog/hvac/is-your-ac-making-you-sick-the-hidden-dangers-of-dirty-air-f',
  '/does-turning-off-your-a-c-when-youre-not-home-actually-save-money': '/blog/hvac/does-turning-off-your-a-c-when-youre-not-home-actually-save-mo',
  '/how-to-fix-your-ac-a-simple-guide-for-everyone': '/blog/hvac/how-to-fix-your-ac-a-simple-guide-for-everyone',
  '/ways-plumbers-in-tucson-can-help-you-unclog-drains': '/blog/plumbing/ways-plumbers-in-tucson-can-help-you-unclog-drains',
  '/everything-you-need-to-know-about-advanced-hvac-solutions': '/blog/hvac/everything-you-need-to-know-about-advanced-hvac-solutions',
  '/expert-tips-for-maintaining-your-tucson-air-conditioning-system': '/blog/hvac/expert-tips-for-maintaining-your-tucson-air-conditioning-sys',
  '/how-to-choose-the-best-plumber-in-tucson': '/blog/plumbing/how-to-choose-the-best-plumber-in-tucson',
  '/the-environmental-benefits-of-solar-power-systems': '/blog/solar/the-environmental-benefits-of-solar-power-systems',
  '/plumbers-tucson-the-importance-of-plumbing-inspection': '/blog/plumbing/plumbers-tucson-the-importance-of-plumbing-inspection',
  '/top-questions-to-ask-your-ac-repair-technician': '/blog/hvac/top-questions-to-ask-your-ac-repair-technician',
  '/the-importance-of-whole-home-solar-systems-during-power-outages': '/blog/solar/the-importance-of-whole-home-solar-systems-during-power-outag',
  '/cost-of-ac-installation-in-tucson': '/blog/hvac/cost-of-ac-installation-in-tucson',
  '/understanding-the-importance-of-air-conditioning-in-the-tucson-climate': '/blog/hvac',
  '/13-uses-of-solar-energy-the-ultimate-guide-for-home-and-business-owners': '/blog/solar/13-uses-of-solar-energy-the-ultimate-guide-for-home-and-busin',
  '/planning-for-long-term-maintenance-of-solar-power-systems': '/blog/solar/planning-for-long-term-maintenance-of-solar-power-systems',
  '/the-benefits-of-choosing-local-plumbers-in-tucson': '/blog/plumbing/the-benefits-of-choosing-local-plumbers-in-tucson',
  '/how-solar-power-systems-can-benefit-commercial-property-owners': '/blog/solar/how-solar-power-systems-can-benefit-commercial-property-owner',
  '/plumbing-emergencies-you-should-never-ignore-in-plumbers-tucson': '/blog/plumbing/plumbing-emergencies-you-should-never-ignore-in-plumbers-tucs',
  '/common-repiping-mistakes-and-how-to-avoid-them': '/blog/plumbing/common-repiping-mistakes-and-how-to-avoid-them',
  '/8-important-questions-to-ask-solar-panel-installers-before-hiring-them': '/blog/solar/8-important-questions-to-ask-solar-panel-installers-before-hi',
  '/the-ultimate-guide-to-hvac-maintenance-in-tucson-az': '/blog/hvac/the-ultimate-guide-to-hvac-maintenance-in-tucson-az',
  '/solar-myths-vs-facts-dispelling-common-misconceptions': '/blog/solar/solar-myths-vs-facts-dispelling-common-misconceptions',
  '/the-ultimate-guide-to-drain-cleaning': '/blog/plumbing/the-ultimate-guide-to-drain-cleaning',
  '/common-mistakes-to-avoid-when-hiring-a-solar-panel-installer': '/blog/solar/common-mistakes-to-avoid-when-hiring-a-solar-panel-installer',
  '/what-is-involved-in-repiping-a-house': '/blog/plumbing/what-is-involved-in-repiping-a-house',
  '/benefits-of-routine-air-conditioner-maintenance': '/blog/hvac/benefits-of-routine-air-conditioner-maintenance',
  '/steps-to-take-when-choosing-a-solar-panel-installer': '/blog/solar/steps-to-take-when-choosing-a-solar-panel-installer',
  '/choosing-the-right-hvac-system-what-homeowners-need-to-know-for-comfort-and-efficiency': '/blog/hvac',
  '/green-valley-meet-your-homes-new-best-friend-intelligent-design': '/service-areas/green-valley',
  '/how-does-solar-energy-work': '/blog/solar/how-does-solar-energy-work',
  '/ways-to-maximize-your-solar-energy-savings': '/blog/solar/ways-to-maximize-your-solar-energy-savings',
  '/air-conditioning-tucson-why-you-need-one-for-your-home': '/blog/hvac/air-conditioning-tucson-why-you-need-one-for-your-home',
  '/how-to-find-licensed-and-experienced-plumbers-in-tucson': '/blog/plumbing/how-to-find-licensed-and-experienced-plumbers-in-tucson',
  '/10-facts-about-ac-replacement-everyone-should-know': '/blog/hvac/10-facts-about-ac-replacement-everyone-should-know',
  '/what-does-a-professional-ac-service-include-a-complete-checklist': '/blog/hvac/what-does-a-professional-ac-service-include-a-complete-checkl',
  '/why-is-solar-energy-important-for-our-future': '/blog/solar/why-is-solar-energy-important-for-our-future',
  '/the-importance-and-benefits-of-hiring-an-ac-repair-specialist': '/blog/hvac/the-importance-and-benefits-of-hiring-an-ac-repair-specialis',
  '/how-to-choose-the-best-air-conditioning-services-in-tucson': '/blog/hvac/how-to-choose-the-best-air-conditioning-services-in-tucson',
  '/the-leading-choice-for-pipe-lining-in-tucson': '/blog/plumbing/the-leading-choice-for-pipe-lining-in-tucson',
  '/7-benefits-of-repiping-your-tucson-home': '/blog/plumbing/7-benefits-of-repiping-your-tucson-home',
  '/top-services-that-plumbers-tucson-can-provide': '/blog/plumbing/top-services-that-plumbers-tucson-can-provide',
  '/plumber-tucson-10-signs-you-need-a-professional-plumber': '/blog/plumbing/plumber-tucson-10-signs-you-need-a-professional-plumber',
  '/the-importance-of-super-cooling-for-hvac-efficiency-in-the-summer': '/blog/hvac/the-importance-of-super-cooling-for-hvac-efficiency-in-the-su',
  '/top-qualifications-to-look-for-in-your-upcoming-solar-panel-installers': '/blog/solar/top-qualifications-to-look-for-in-your-upcoming-solar-panel-i',
  '/complete-guide-to-hvac-ac-repair-in-tucson-faqs-answered': '/blog/hvac/complete-guide-to-hvac-ac-repair-in-tucson-faqs-answered',
  '/drain-snakes-your-must-have-tool-for-efficient-drain-cleaning': '/blog/plumbing/drain-snakes-your-must-have-tool-for-efficient-drain-cleanin',
  '/diy-guide-to-basic-ac-repairs': '/blog/hvac/diy-guide-to-basic-ac-repairs',
  '/the-importance-of-having-a-reliable-plumber-in-tucson': '/blog/plumbing/the-importance-of-having-a-reliable-plumber-in-tucson',
  '/why-drain-cleaning-is-important': '/blog/plumbing/why-drain-cleaning-is-important',
  '/what-to-do-if-your-solar-company-closed-in-tucson': '/blog/solar/what-to-do-if-your-solar-company-closed-in-tucson',
  '/signs-you-need-to-call-for-ac-repair': '/blog/hvac/signs-you-need-to-call-for-ac-repair',
  '/8-reasons-why-you-should-use-solar-power': '/blog/solar/8-reasons-why-you-should-use-solar-power',
  '/why-hiring-a-solar-panel-installers-important': '/blog/solar/why-hiring-a-solar-panel-installers-important',
  '/discover-the-benefits-of-suntrac-air-conditioning-systems': '/blog/hvac/discover-the-benefits-of-suntrac-air-conditioning-systems',
  '/preparing-your-hvac-system-for-summer-essential-steps-for-optimal-performance': '/blog/hvac',
  '/choosing-the-right-hvac-system-navigating-the-options-when-hvac-systems-fail': '/blog/hvac',
  '/advantages-of-using-local-plumbers-in-tucson': '/blog/plumbing/advantages-of-using-local-plumbers-in-tucson',
  '/why-diy-ac-installation-can-cost-you-more-in-the-long-run': '/blog/hvac/why-diy-ac-installation-can-cost-you-more-in-the-long-run',
  '/the-hidden-dangers-of-neglecting-drain-cleaning': '/blog/plumbing/the-hidden-dangers-of-neglecting-drain-cleaning',
  '/signs-your-commercial-building-needs-repiping': '/blog/plumbing/signs-your-commercial-building-needs-repiping',
  '/can-you-lower-your-ac-costs-with-suntrac-air-conditioning-systems': '/blog/hvac/can-you-lower-your-ac-costs-with-suntrac-air-conditioning-sys',
  '/when-is-repiping-necessary-what-you-need-to-know': '/blog/plumbing/when-is-repiping-necessary-what-you-need-to-know',
  '/how-solar-panel-installers-can-benefit-homeowners': '/blog/solar/how-solar-panel-installers-can-benefit-homeowners',
  '/how-professional-hvac-technicians-perform-ac-replacement': '/blog/hvac/how-professional-hvac-technicians-perform-ac-replacement',
  '/monsoon-humidity-central-air-system': '/blog/hvac',
  '/why-summer-ac-tune-ups-are-essential-for-comfort-and-efficiency': '/blog/hvac/why-summer-ac-tune-ups-are-essential-for-comfort-and-efficien',
  '/is-a-burning-smell-normal-when-i-turn-on-the-heater': '/blog/hvac/is-a-burning-smell-normal-when-i-turn-on-the-heater',
  '/9-warning-signs-you-need-a-drain-cleaning-service': '/blog/plumbing/9-warning-signs-you-need-a-drain-cleaning-service',
  '/types-of-services-offered-by-expert-solar-panel-installer': '/blog/solar/types-of-services-offered-by-expert-solar-panel-installer',
  '/why-take-advantage-of-solar-energy': '/blog/solar/why-take-advantage-of-solar-energy',
  '/air-conditioning-tucson-the-many-benefits-of-hiring-the-right-hvac-company': '/blog/hvac',
  '/preparing-the-home-for-summer-essential-tips-from-intelligent-design-air-conditioning-plumbing-solar-electric': '/blog/hvac',
  '/tips-for-finding-the-right-ac-repair-technician': '/blog/hvac/tips-for-finding-the-right-ac-repair-technician',
  '/choosing-the-right-roofing-company-a-comprehensive-guide': '/blog/roofing/choosing-the-right-roofing-company-a-comprehensive-guide',
  '/how-plumbers-in-tucson-can-help-business-owners': '/blog/plumbing/how-plumbers-in-tucson-can-help-business-owners',
  '/how-often-does-ac-need-to-be-replaced': '/blog/hvac/how-often-does-ac-need-to-be-replaced',
  '/how-to-choose-the-best-ac-replacement-system-for-your-home': '/blog/hvac/how-to-choose-the-best-ac-replacement-system-for-your-home',
  '/how-repiping-can-improve-your-home-water-quality': '/blog/plumbing/how-repiping-can-improve-your-home-water-quality',
  '/12-facts-you-didnt-know-about-solar-power-systems': '/blog/solar/12-facts-you-didnt-know-about-solar-power-systems',
  '/mastering-winter-pipe-protection-in-freezing-weather': '/blog/plumbing/mastering-winter-pipe-protection-in-freezing-weather',
  '/preparing-the-roof-for-spring-storms-ensuring-safety-and-longevity': '/blog/roofing/preparing-the-roof-for-spring-storms-ensuring-safety-and-lon',
  '/repair-or-replace-making-the-right-decision-for-hvac-systems': '/blog/hvac/repair-or-replace-making-the-right-decision-for-hvac-systems',
  '/tips-for-choosing-the-right-drain-cleaning-company': '/blog/plumbing/tips-for-choosing-the-right-drain-cleaning-company',
  '/the-many-benefits-of-solar-energy': '/blog/solar/the-many-benefits-of-solar-energy',
  '/why-local-solar-panel-installers-are-a-smart-choice': '/blog/solar/why-local-solar-panel-installers-are-a-smart-choice',
  '/air-conditioning-tucson-tips-to-lower-energy-bills-and-save-money': '/blog/hvac/air-conditioning-tucson-tips-to-lower-energy-bills-and-save-m',
  '/solar-energy-how-to-get-the-most-out-of-your-installation': '/blog/solar/solar-energy-how-to-get-the-most-out-of-your-installation',
  '/why-repiping-your-home-is-essential': '/blog/plumbing/why-repiping-your-home-is-essential',
  '/how-ac-repair-can-actually-save-you-money': '/blog/hvac/how-ac-repair-can-actually-save-you-money',
  '/why-does-a-repiping-project-need-professional-help': '/blog/plumbing/why-does-a-repiping-project-need-professional-help',
  '/solar-panel-efficiency-a-comprehensive-guide': '/blog/solar/solar-panel-efficiency-a-comprehensive-guide',
  '/how-professional-plumbers-perform-drain-cleaning': '/blog/plumbing/how-professional-plumbers-perform-drain-cleaning',
  '/solar-power-systems-made-simple-how-solar-panels-work': '/blog/solar/solar-power-systems-made-simple-how-solar-panels-work',
  '/facts-about-solar-energy-and-reasons-to-get-solar-panels': '/blog/solar/facts-about-solar-energy-and-reasons-to-get-solar-panels',
  '/the-importance-of-proper-air-conditioning-installation': '/blog/hvac/the-importance-of-proper-air-conditioning-installation',
  '/tips-to-save-money-on-your-ac-repair-cost': '/blog/hvac/tips-to-save-money-on-your-ac-repair-cost',
  '/the-ins-and-outs-of-repiping-your-home': '/blog/plumbing/the-ins-and-outs-of-repiping-your-home',
  '/crucial-things-to-consider-before-replacing-your-air-conditioning-system': '/blog/hvac',
  '/air-conditioning-tucson-how-to-choose-the-right-air-conditioning-unit-for-your-home': '/blog/hvac',
  '/spotlight-on-the-indoor-air-purifier-from-intelligent-design': '/blog/hvac',
  '/tips-for-your-home-ac-replacement': '/blog/hvac/tips-for-your-home-ac-replacement',
  '/business-advantages-of-commercial-solar-energy-systems': '/blog/solar/business-advantages-of-commercial-solar-energy-systems',
  '/optimizing-air-conditioner-use-in-summer-best-practices-and-the-role-of-smart-thermostats': '/blog/hvac',
  '/signs-you-need-solar-panel-installers': '/blog/solar/signs-you-need-solar-panel-installers',
  '/answering-questions-about-solar-panel-installation': '/blog/solar/answering-questions-about-solar-panel-installation',
  '/things-you-need-to-know-before-installing-a-solar-power-system': '/blog/solar/things-you-need-to-know-before-installing-a-solar-power-syst',
  '/why-choose-intelligent-design-team-for-your-ac-replacement-needs': '/blog/hvac',
  '/11-reasons-why-home-owners-need-residential-drain-cleaning': '/blog/plumbing/11-reasons-why-home-owners-need-residential-drain-cleaning',
  '/how-plumbers-in-tucson-can-help-you-deal-with-a-plumbing-emergency': '/blog/plumbing',
  '/solar-power-systems-a-quick-guide-to-going-solar': '/blog/solar/solar-power-systems-a-quick-guide-to-going-solar',
  '/ac-replacement-when-to-replace-your-commercial-ac-unit': '/blog/hvac/ac-replacement-when-to-replace-your-commercial-ac-unit',
  '/why-drain-cleaning-is-essential-for-businesses-keep-your-facility-running-smoothly': '/blog/plumbing',
  '/understanding-the-functionality-of-solar-power-systems': '/blog/solar/understanding-the-functionality-of-solar-power-systems',
  '/the-importance-of-hiring-the-right-drain-cleaning-company': '/blog/plumbing/the-importance-of-hiring-the-right-drain-cleaning-company',
  '/future-proof-your-home-with-solar-power-systems': '/blog/solar/future-proof-your-home-with-solar-power-systems',
  '/10-compelling-reasons-to-switch-to-solar-energy': '/blog/solar/10-compelling-reasons-to-switch-to-solar-energy',
  '/air-conditioning-in-tucson-your-guide-to-a-cool-summer': '/blog/hvac/air-conditioning-in-tucson-your-guide-to-a-cool-summer',
  '/questions-to-ask-when-getting-quotes-for-ac-replacement-in-tucson': '/blog/hvac',
  '/the-crucial-role-of-plumbing-inspections-and-water-testing-before-the-school-year-and-holiday-season': '/blog/plumbing',
  '/intelligent-design-elevates-hvac-tune-up-standards-with-unprecedented-82-point-ac-system-inspection': '/blog/hvac',
  '/smart-strategies-to-stay-cool-effective-budget-friendly-tips-for-summer-home-cooling': '/blog/hvac',
  '/air-conditioning-in-tucson-how-can-you-save-money-by-maximizing-your-ac-efficiency': '/blog/hvac',
  '/central-air-conditioning-system-in-tucson-how-to-improve-your-indoor-air-quality-this-summer': '/blog/hvac',
  '/how-to-identify-the-top-solar-panel-installers-near-you': '/blog/solar/how-to-identify-the-top-solar-panel-installers-near-you',
  '/what-you-need-to-know-about-hiring-solar-panel-installers': '/blog/solar/what-you-need-to-know-about-hiring-solar-panel-installers',
  '/how-solar-panel-installers-can-save-you-money': '/blog/solar/how-solar-panel-installers-can-save-you-money',
  '/top-10-reasons-to-move-to-tucson': '/blog/home-tips/top-10-reasons-to-move-to-tucson',
  '/how-to-choose-the-right-ac-repair-company': '/blog/hvac/how-to-choose-the-right-ac-repair-company',
  '/importance-of-regular-maintenance-with-a-professional-plumber-in-tucson': '/blog/plumbing',
  '/8-tips-for-managing-your-air-conditioning-in-tucson-during-the-summer': '/blog/hvac/8-tips-for-managing-your-air-conditioning-in-tucson-during-th',
  '/out-with-the-old-in-with-the-new-is-ac-replacement-the-one-for-you': '/blog/hvac',
  '/how-to-determine-if-its-time-for-an-ac-replacement': '/blog/hvac/how-to-determine-if-its-time-for-an-ac-replacement',
  '/common-ac-problems-that-only-a-professional-ac-repair-can-fix': '/blog/hvac/common-ac-problems-that-only-a-professional-ac-repair-can-fix',
  '/air-conditioning-in-tucson-get-cooler-this-summer': '/blog/hvac',
  '/the-importance-of-hiring-the-right-drain-company': '/blog/plumbing/the-importance-of-hiring-the-right-drain-company',
  '/why-you-shouldnt-overlook-drain-cleaning': '/blog/plumbing/why-you-shouldnt-overlook-drain-cleaning',
  '/top-10-benefits-of-ac-replacement-for-your-home': '/blog/hvac/top-10-benefits-of-ac-replacement-for-your-home',

  // Location-specific articles -> redirect to proper service area pages
  '/intelligent-design-your-go-to-home-service-provider-in-avra-valley': '/service-areas/avra-valley',
  '/your-neighborhood-partner-in-picture-rocks-intelligent-designs-home-services': '/service-areas/picture-rocks',
  '/comprehensive-home-services-in-tortolita-more-than-just-a-business-its-a-community-commitment': '/service-areas/tortolita',
  '/comprehensive-home-services-in-marana-more-than-just-a-business-were-your-neighbors': '/service-areas/marana',
  '/intelligent-design-your-partner-in-home-comfort-in-drexel-heights': '/service-areas/drexel-heights',
  '/intelligent-design-elevating-drexel-alvernons-home-comforts-one-service-at-a-time': '/service-areas/drexel-heights',
  '/intelligent-design-pioneering-home-comfort-in-tucson-estates': '/service-areas/tucson',
  '/intelligent-design-your-trusted-home-service-provider-in-summit-arizona': '/service-areas/tucson',
  '/serving-the-three-points-community-more-than-just-home-services': '/service-areas/tucson',
  '/intelligent-design-serving-the-littletown-community-with-unmatched-home-services': '/service-areas/tucson',
  '/intelligent-design-were-not-just-in-your-neighborhood-were-part-of-it': '/about',
  '/intelligent-design-your-partner-in-home-comfort-in-rillito-arizona': '/service-areas/marana',
  '/casas-adobes-experience-home-like-never-before-with-intelligent-design': '/service-areas/casas-adobes',
  '/casa-grande-elevate-your-living-experience-with-intelligent-design': '/service-areas/red-rock-casa-grande',
  '/red-rock-unlock-a-new-level-of-home-comfort-with-intelligent-design': '/service-areas/red-rock-casa-grande',
  '/hey-vail-your-homes-best-friend-is-here': '/service-areas/vail',
  '/hey-saddlebrook-weve-got-your-home-covered': '/service-areas/saddle-brooke-catalina',
  '/sahuarita-were-here-to-make-your-home-awesome': '/service-areas/sahuarita',
  '/intelligent-design-elevating-tanque-verdes-home-experience': '/service-areas/tanque-verde',
  '/intelligent-design-elevating-tanque-verdes-home-experience-2': '/service-areas/tanque-verde',
  
  // Spam/junk pages - redirect to home
  '/1win': '/',
  '/slot-ve-oyun-mekanikleri-bonanza-sweet-incelemesi': '/',
  '/eigenschappen-van-online-casino-boomerang-spelportaal': '/',
  '/locations.kml': '/',
  '/int-design-60-chemosynthesis': '/',

  // Commercial video pages
  '/intelligent-design-heart-forever-60': '/about',
  '/intelligent-design-heart-forever-60-revised': '/about',
  '/intelligent-design-bones-60': '/about',
  '/intelligent-design-photons-60': '/about',
  '/intelligent-design-second-opinion-60': '/about',
  '/intelligent-design-blink-of-an-eye-60': '/about',
  '/intelligent-design-moon-plumbing': '/about',
  '/intelligent-design-moon-solar-60': '/about',
  '/intelligent-design-lungs-w-jingle-v3': '/about',
  '/intelligentdesign-heart-forever-60': '/about',

  // Special offer pages redirect
  '/intelligent-design-solar-plumbing-air-offers-lowest-cost-water-filtration-systems-in-light-of-shocking-water-study': '/services/water-filtration',

  // Legacy blog date-based URLs redirects
  '/blog/2021': '/blog/hvac',
  '/blog/2019': '/blog/hvac',
  '/blog/2025': '/blog/hvac',
  '/blog/2025/january': '/blog/hvac',
  '/blog/2022/april': '/blog/hvac',

  // ===== 404 URLS FROM GOOGLE SEARCH CONSOLE (December 2025) =====
  
  // HVAC location pages (old format without hyphens)
  '/hvac-avravalley': '/services/hvac-avra-valley',
  '/hvac-casasadobes': '/services/hvac-casas-adobes',
  '/hvac-catalinafoothills': '/services/hvac-catalina-foothills',
  '/hvac-coronadetucson': '/services/hvac-corona-de-tucson',
  '/hvac-drexelheights': '/services/hvac-drexel-heights',
  '/hvac-easttucson': '/services/hvac-east-tucson',
  '/hvac-gladdenfarms': '/services/hvac-gladden-farms',
  '/hvac-orovalley': '/services/hvac-oro-valley',

  // Heating location pages (old format without hyphens)
  '/heating-casasadobes': '/services/heating-casas-adobes',
  '/heating-catalinafoothills': '/services/heating-catalina-foothills',
  '/heating-coronadetucson': '/services/heating-corona-de-tucson',
  '/heating-drexelheights': '/services/heating-drexel-heights',
  '/heating-easttucson': '/services/heating-east-tucson',
  '/heating-greenvalley': '/services/heating-green-valley',
  '/heating-picturerocks': '/services/heating-picture-rocks',
  '/heating-ritaranch': '/services/heating-rita-ranch',
  '/heating-saddlebrookecatalina': '/services/heating-saddle-brooke-catalina',
  '/heating-tanqueverde': '/services/heating-tanque-verde',

  // Plumbing location pages (old format without hyphens)
  '/plumbing-coronadetucson': '/services/plumbing-corona-de-tucson',
  '/plumbing-easttucson': '/services/plumbing-east-tucson',
  '/plumbing-gladdenfarms': '/services/plumbing-gladden-farms',
  '/plumbing-greenvalley': '/services/plumbing-green-valley',
  '/plumbing-orovalley': '/services/plumbing-oro-valley',
  '/plumbing-redrockcasagrande': '/services/plumbing-red-rock-casa-grande',
  '/plumbing-ritaranch': '/services/plumbing-rita-ranch',
  '/plumbing-saddlebrookecatalina': '/services/plumbing-saddle-brooke-catalina',
  '/plumbing-tanqueverde': '/services/plumbing-tanque-verde',

  // Electrical location pages (old format without hyphens)
  '/electrical-coronadetucson': '/services/electrical-corona-de-tucson',
  '/electrical-drexelheights': '/services/electrical-drexel-heights',
  '/electrical-gladdenfarms': '/services/electrical-gladden-farms',
  '/electrical-orovalley': '/services/electrical-oro-valley',
  '/electrical-tanqueverde': '/services/electrical-tanque-verde',

  // Roofing location pages (old format without hyphens)
  '/roofing-catalinafoothills': '/services/roofing-catalina-foothills',
  '/roofing-coronadetucson': '/services/roofing-corona-de-tucson',
  '/roofing-drexelheights': '/services/roofing-drexel-heights',
  '/roofing-easttucson': '/services/roofing-east-tucson',
  '/roofing-gladdenfarms': '/services/roofing-gladden-farms',
  '/roofing-greenvalley': '/services/roofing-green-valley',
  '/roofing-orovalley': '/services/roofing-oro-valley',
  '/roofing-picturerocks': '/services/roofing-picture-rocks',
  '/roofing-redrockcasagrande': '/services/roofing-red-rock-casa-grande',
  '/roofing-saddlebrookecatalina': '/services/roofing-saddle-brooke-catalina',

  // Solar location pages (old format without hyphens) - corrected to solar-installation-{location}
  '/solarinstallation-avravalley': '/services/solar-installation-avra-valley',
  '/solarinstallation-casasadobes': '/services/solar-installation-casas-adobes',
  '/solarinstallation-cortaro': '/services/solar-installation-cortaro',
  '/solarinstallation-drexelheights': '/services/solar-installation-drexel-heights',
  '/solarinstallation-easttucson': '/services/solar-installation-east-tucson',
  '/solarinstallation-gladdenfarms': '/services/solar-installation-gladden-farms',
  '/solarinstallation-marana': '/services/solar-installation-marana',
  '/solarinstallation-orovalley': '/services/solar-installation-oro-valley',
  '/solarinstallation-picturerocks': '/services/solar-installation-picture-rocks',
  '/solarinstallation-redrockcasagrande': '/services/solar-installation-red-rock-casa-grande',
  '/solarinstallation-ritaranch': '/services/solar-installation-rita-ranch',
  '/solarinstallation-saddlebrookecatalina': '/services/solar-installation-saddle-brooke-catalina',
  '/solarinstallation-sahuarita': '/services/solar-installation-sahuarita',
  '/solarinstallation-vail': '/services/solar-installation-vail',

  // Drain/Sewer location pages (old format without hyphens)
  '/drainsewer-casasadobes': '/services/drain-clearing-casas-adobes',
  '/drainsewer-drexelheights': '/services/drain-clearing-drexel-heights',
  '/drainsewer-greenvalley': '/services/drain-clearing-green-valley',
  '/drainsewer-marana': '/services/drain-clearing-marana',
  '/drainsewer-picturerocks': '/services/drain-clearing-picture-rocks',
  '/drainsewer-redrockcasagrande': '/services/drain-clearing-red-rock-casa-grande',
  '/drainsewer-rillito': '/services/drain-clearing-marana',
  '/drainsewer-vail': '/services/drain-clearing-vail',

  // Service area pages
  '/service-areas/cortaro': '/service-areas/marana',
  '/service-areas/littletown': '/service-areas/tucson',
  '/cortaro': '/service-areas/marana',
  '/services/drain-clearing-saddle-brooke': '/services/drain-clearing-saddle-brooke-catalina',
  '/services/family-protection-plans': '/family-protection-plans',

  // Legacy service pages (nested paths)
  '/air-conditioning/ductless-mini-split-ac-repair-installation-tucson': '/services/ductless-repair-tucson',
  '/air-conditioning/improve-indoor-air-quality': '/services/indoor-air-quality-tucson',
  '/air-conditioning/r22-phaseout': '/r22-phaseout',
  '/electrical/ceiling-fan-installation': '/services/ceiling-fan-installation',
  '/electrical/circuit-breakers': '/services/circuit-breakers',
  '/electrical/electrical-repairs': '/services/electrical-repair',
  '/electrical/outlets-switches': '/services/outlets-switches',
  '/plumber-tucson/drain-cleaning-tucson': '/services/drain-clearing',
  '/plumber-tucson/trenchless-sewer-repair-replacement': '/services/trenchless-repair',
  '/solar-tucson/commercial-solar-installations': '/services/commercial-solar-installation',
  '/roofing/metal-roofing': '/services/metal-roofs',
  '/roofing/roof-types/metal-roofing': '/services/metal-roofs',
  '/services/plumbing/burst-pipe-and-sewer-line-repair-tucson': '/services/sewer-line-repair',

  // Core/misc pages
  '/home': '/',
  '/services': '/services/hvac',
  '/services/air-conditioning': '/services/hvac-tucson',
  '/solar': '/services/residential-solar-installation',
  '/ac': '/services/hvac-tucson',
  '/air-conditioning-tucson': '/services/ac-service-tucson',
  '/drain-cleaning-tucson': '/services/drain-clearing',
  '/duct-services': '/services/duct-cleaning-tucson',
  '/ductless-mini-split-ac-repair': '/services/ductless-repair-tucson',
  '/emergency-ac-repair-tucson': '/services/ac-repair-tucson',
  '/heater-service': '/services/heater-service-tucson',
  '/solar-energy-solutions': '/services/residential-solar-installation',
  '/plumber-': '/services/plumbing-tucson',

  // Resources pages
  '/resources/education-library': '/education-library',
  '/resources/video-testimonial': '/video-testimonials',

  // Blog posts (date-based URLs)
  '/blog/2024/august/reasons-why-home-owners-need-residential-drain-c': '/blog/plumbing/reasons-why-home-owners-need-residential-drain-cleaning',
  '/blog/2024/august/your-neighborhood-partner-in-picture-rocks-intel': '/service-areas/picture-rocks',
  '/blog/categories/solar': '/blog/solar',
  '/blog/discover-the-benefits-of-suntrac-air-conditioning-systems': '/blog/hvac/discover-the-benefits-of-suntrac-air-conditioning-systems',
  '/blog/drain-cleaning-solutions-that-actually-work': '/blog/plumbing/drain-cleaning-solutions-that-actually-work',
  '/blog/how-does-solar-energy-work': '/blog/solar/how-does-solar-energy-work',
  '/blog/8-tips-for-managing-your-air-conditioning-in-tucson-during-the-summer': '/blog/hvac/8-tips-for-managing-your-air-conditioning-in-tucson-during-t',

  // Repiping blog post redirects
  '/blog/plumbing/repiping-the-pros-and-cons-of-having-your-homes-piping-repla': '/blog/plumbing/7-benefits-of-repiping-your-tucson-home',

  // Root-level blog posts (missing /blog/ prefix)
  '/air-conditioner-solutions-by-intelligent-design': '/blog/hvac/air-conditioner-solutions-by-intelligent-design',
  '/our-emergency-hvac-services-taking-precautions-during-the-pandemic': '/services/hvac-tucson',
  '/top-signs-you-need-ac-replacement-for-your-business': '/blog/hvac',
  '/solar-panel-installers-should-you-diy-your-solar-panel-installation': '/blog/solar',
  '/troubleshooting-common-issues-during-or-after-a-repiping-project': '/blog/plumbing/troubleshooting-common-issues-during-or-after-a-repiping-pro',
  '/what-to-expect-when-working-with-a-solar-panel-installer': '/blog/solar',
};

/**
 * Pattern-based redirects for date-prefixed blog URLs
 * Format: /blog/YYYY/month/slug/ → /blog/category/slug
 */
export const BLOG_DATE_PATTERNS: Array<{ pattern: RegExp; getDestination: (slug: string) => string }> = [
  // HVAC-related blog posts
  { 
    pattern: /^\/blog\/\d{4}\/\w+\/does-air-conditioning-or-ac-use-gas-or-electrici\/?$/,
    getDestination: () => '/blog/electrical/does-air-conditioning-use-gas-or-electricity'
  },
  { 
    pattern: /^\/blog\/\d{4}\/\w+\/why-is-my-air-conditioning-working-upstairs-but-\/?$/,
    getDestination: () => '/blog/hvac/ac-problems-why-is-my-ac-working-downstairs-but-not-upstairs'
  },
  { 
    pattern: /^\/blog\/\d{4}\/\w+\/how-much-does-a-new-ac-unit-cost-in-az\/?$/,
    getDestination: () => '/blog/hvac/how-much-does-a-new-ac-unit-cost-in-az'
  },
  { 
    pattern: /^\/blog\/\d{4}\/\w+\/6-best-types-of-air-conditioners-for-tucson-ariz\/?$/,
    getDestination: () => '/blog/hvac/the-best-types-of-air-conditioners-for-tucson-arizona'
  },
  {
    pattern: /^\/blog\/\d{4}\/\w+\/how-long-should-an-ac-last-in-arizona-\/?$/,
    getDestination: () => '/blog/hvac/how-long-should-ac-last-in-arizona'
  },
  {
    pattern: /^\/blog\/\d{4}\/\w+\/does-turning-off-your-a-c-when-you-re-not-home-a\/?$/,
    getDestination: () => '/blog/hvac/does-turning-off-your-a-c-when-youre-not-home-actually-save-mo'
  },
  {
    pattern: /^\/blog\/\d{4}\/\w+\/how-to-fix-your-ac-a-simple-guide-for-everyone\/?$/,
    getDestination: () => '/blog/hvac/how-to-fix-your-ac-a-simple-guide-for-everyone'
  },
];

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
  'energy-upgrade', 'ev-charger'
];

/**
 * Check if a pathname should be redirected and return the destination
 */
export function getRedirectDestination(pathname: string): string | null {
  // Remove trailing slash for consistent matching
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
  
  // Remove hash fragments for matching (but they will be preserved in the redirect)
  const pathWithoutHash = normalizedPath.split('#')[0];
  
  // Check exact match first
  if (LEGACY_REDIRECTS[pathWithoutHash]) {
    return LEGACY_REDIRECTS[pathWithoutHash];
  }
  
  // Check with different trailing slash variants
  const withSlash = pathWithoutHash.endsWith('/') ? pathWithoutHash : pathWithoutHash + '/';
  const withoutSlash = pathWithoutHash.endsWith('/') ? pathWithoutHash.slice(0, -1) : pathWithoutHash;
  
  if (LEGACY_REDIRECTS[withSlash]) {
    return LEGACY_REDIRECTS[withSlash];
  }
  if (LEGACY_REDIRECTS[withoutSlash]) {
    return LEGACY_REDIRECTS[withoutSlash];
  }
  
  // Check date-based blog patterns
  for (const { pattern, getDestination } of BLOG_DATE_PATTERNS) {
    if (pattern.test(pathWithoutHash)) {
      return getDestination(pathWithoutHash);
    }
  }
  
  // Generic date-based blog pattern: /blog/YYYY/month/slug → /blog/hvac (fallback)
  const blogDateMatch = pathWithoutHash.match(/^\/blog\/(\d{4})\/(\w+)\/(.+?)\/?$/);
  if (blogDateMatch) {
    const slug = blogDateMatch[3];
    // Try to determine category from slug content
    if (slug.includes('solar') || slug.includes('panel')) {
      return '/blog/solar';
    }
    if (slug.includes('plumb') || slug.includes('drain') || slug.includes('water') || slug.includes('repip') || slug.includes('sewer')) {
      return '/blog/plumbing';
    }
    if (slug.includes('roof')) {
      return '/blog/roofing';
    }
    if (slug.includes('electric')) {
      return '/blog/electrical';
    }
    // Default to HVAC for AC/heating related
    return '/blog/hvac';
  }
  
  // Handle /service-area/* (singular) → /service-areas/* (plural) redirects
  const serviceAreaMatch = pathWithoutHash.match(/^\/service-area\/(.+?)\/?$/);
  if (serviceAreaMatch) {
    return `/service-areas/${serviceAreaMatch[1]}`;
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
    const match = pathWithoutHash.match(pattern);
    if (match) {
      return prefix + match[1];
    }
  }
  
  // Handle flat service slugs that should redirect to /services/
  const segments = pathWithoutHash.split('/').filter(Boolean);
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

/**
 * Get count of redirect mappings for monitoring
 */
export function getRedirectCount(): number {
  return Object.keys(LEGACY_REDIRECTS).length;
}
