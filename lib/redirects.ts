/**
 * Legacy URL redirects map
 * Handles all redirects from old WordPress/React URLs to new Next.js structure
 * This bypasses Vercel's 1,024 redirect limit by handling redirects at runtime
 * 
 * Updated: 2026-04-07 - Added GSC 404 redirects (281 URLs from April 2026 report)
 */

export const LEGACY_REDIRECTS: Record<string, string> = {
  // ===== URGENT REDIRECTS =====
  '/choosing-the-right-roofing-company-a-comprehensive-guide': '/blog/roofing',

  // ===== MISSING HYPHEN REDIRECTS =====
  '/electrical-catalinafoothills': '/services/electrical-catalina-foothills',
  '/hvac-tanqueverde': '/services/hvac-tanque-verde',

  // ===== TRUNCATED BLOG URL REDIRECTS =====
  '/blog/hvac/8-tips-for-managing-your-air-conditioning-in-tucson-during-t': '/blog/hvac/8-tips-for-managing-your-air-conditioning-in-tucson-during-the-summer',
  '/blog/hvac/air-conditioning-in-tucson-how-can-you-save-money-by-maximiz': '/blog/hvac/air-conditioning-in-tucson-how-can-you-save-money-by-maximizing-your-ac-efficiency',
  '/blog/hvac/air-conditioning-tucson-how-to-choose-the-right-air-conditio': '/blog/hvac/air-conditioning-tucson-how-to-choose-the-right-air-conditioning-unit-for-your-home',
  '/blog/hvac/air-conditioning-tucson-the-many-benefits-of-hiring-the-righ': '/blog/hvac/air-conditioning-tucson-the-many-benefits-of-hiring-the-right-hvac-company',

  // ===== DUPLICATE /services/ PAGES → CANONICAL URLS =====
  '/services/home': '/',
  '/services/customer-reviews': '/customer-reviews',
  '/services/financing': '/financing',
  '/services/guarantees': '/guarantees',
  '/services/privacy-policy': '/privacy-policy',
  '/services/resources': '/services/knowledge-hub',
  '/services/saddlebrooke-catalina': '/service-areas/saddle-brooke-catalina',

  // ===== CORE SERVICE SHORTCUT REDIRECTS =====
  '/ac-repair': '/services/ac-repair-tucson',
  '/ac-installation': '/services/ac-installation-tucson',
  '/heating-repair': '/services/heater-repair-tucson',
  '/duct-repair': '/services/duct-repair-tucson',
  '/duct-sealing': '/services/duct-sealing-tucson',
  '/furnaces': '/services/furnaces-tucson',

  // ===== CORE PAGES =====
  '/commercial-maintenance': '/services/commercial-maintenance',
  '/plumbing': '/services/plumbing',
  '/radio-promotions': '/special-offers',
  '/news': '/blog',
  '/hvac-news': '/blog/hvac',
  '/services/hvac-news': '/blog/hvac',
  '/services/hvac-blogs': '/blog/hvac',
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
  '/about-intelligent-design': '/services/knowledge-hub',
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
  '/video-testimonial': '/services/video-testimonials',

  // Resources pages
  '/resources': '/services/knowledge-hub',
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
  '/indoor-air-quality/smart-thermostat-installation': '/services/smart-thermostat-installation-tucson',

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
  '/residential-roofing/solar-tubular-lights': '/services/solar-tubular-lights',
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
  '/video-center/testimonials': '/services/video-testimonials',
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
  '/video-center/testimonials/intelligent-design-air-conditioning-and-heating-': '/services/video-testimonials',
  '/video-center/testimonials/intelligent-design-air-conditioning-and-heating-2': '/services/video-testimonials',
  '/video-center/testimonials/intelligent-design-air-conditioning-and-heating-3': '/services/video-testimonials',
  '/video-center/testimonials/ray-and-teri-from-saddlebrook-az-satisfied-ac-se': '/services/video-testimonials',
  '/video-center/testimonials/tucson-solar-new-hvac-system-install-client-stor': '/services/video-testimonials',
  '/video-center/testimonials/keller-williams-tucson-testimonial': '/services/video-testimonials',
  '/video-center/testimonials/bonnie-and-john-ac-service-customers-of-intellig': '/services/video-testimonials',
  '/video-center/testimonials/mary-with-northwest-medical-center-customer-test': '/services/video-testimonials',
  '/video-center/testimonials/margaret-lonny-wallace-customer-testimonial-for-': '/services/video-testimonials',
  '/video-center/testimonials/kathy-long-testimonial-for-intelligent-design-ai': '/services/video-testimonials',
  '/video-center/testimonials/ron-l-tucson-ac-installation-intelligent-design-': '/services/video-testimonials',
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
  '/ac-heating-plumbing-solar-roofing-electrical': '/',

  // ===== BLOG POSTS - ROOT LEVEL (no /blog/ prefix) =====
  '/does-air-conditioning-use-gas-or-electricity': '/blog/electrical/does-air-conditioning-use-gas-or-electricity',
  '/why-is-my-air-conditioning-working-downstairs-but-not-upstairs': '/blog/hvac/ac-problems-why-is-my-ac-working-downstairs-but-not-upstairs',
  '/how-much-does-a-new-ac-unit-cost-in-az': '/blog/hvac/how-much-does-a-new-ac-unit-cost-in-az',
  '/repiping-how-its-different-from-pipe-repair-and-why-you-may-need-it-more': '/blog/plumbing/repiping-how-its-different-from-pipe-repair-and-why-you-may-',
  '/repiping-the-pros-and-cons-of-having-your-homes-piping-replaced': '/blog/plumbing/7-benefits-of-repiping-your-tucson-home',
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
  '/what-is-an-anode-rod': '/blog/water-heater/what-is-an-anode-rod',
  '/who-to-call-for-water-heater-repair': '/blog/water-heater/who-to-call-for-water-heater-repair',
  '/discover-the-benefits-of-tankless-water-heaters': '/blog/water-heater/discover-the-benefits-of-tankless-water-heaters',
  '/is-a-tucson-solar-home-energy-audit-worth-it': '/blog/solar',
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
  '/is-it-safe-to-use-chemical-drain-cleaners': '/blog/drain-sewer/is-it-safe-to-use-chemical-drain-cleaners',
  '/what-are-the-most-common-plumbing-issues-in-homes': '/blog/plumbing/what-are-the-most-common-plumbing-issues-in-homes',
  '/why-did-hot-water-come-out-of-my-cold-water-tap': '/blog/plumbing/why-did-hot-water-come-out-of-my-cold-water-tap',
  '/90-of-arizona-ac-systems-have-an-installation-flaw': '/blog/hvac/90-of-arizona-ac-systems-have-an-installation-flaw',
  '/what-should-i-expect-when-i-ask-for-an-hvac-estimate': '/blog/hvac/what-should-i-expect-when-i-ask-for-an-hvac-estimate',
  '/permit-to-install-a-new-water-heater': '/blog/water-heater/permit-to-install-a-new-water-heater',
  '/what-is-the-most-efficient-way-to-run-air-conditioning': '/blog/hvac/what-is-the-most-efficient-way-to-run-air-conditioning',
  '/how-do-i-choose-an-air-conditioning-unit': '/blog/hvac/how-do-i-choose-an-air-conditioning-unit',
  '/what-are-some-effective-strategies-to-reduce-ac-noise': '/blog/hvac/what-are-some-effective-strategies-to-reduce-ac-noise',
  '/what-kind-of-air-conditioning-preventive-maintenance-do-i-need': '/blog/hvac/what-kind-of-air-conditioning-preventive-maintenance-do-i-ne',
  '/why-hire-professionals-to-clean-air-conditioner': '/blog/hvac/why-hire-professionals-to-clean-air-conditioner',
  '/why-use-solar-air-conditioner-for-home': '/blog/solar/why-use-solar-air-conditioner-for-home',
  '/things-to-consider-before-installing-rooftop-solar-panels': '/blog/solar/things-to-consider-before-installing-rooftop-solar-panels',
  '/why-you-should-invest-in-water-leak-detection-services': '/blog/plumbing/why-you-should-invest-in-water-leak-detection-services',
  '/reasons-why-you-should-use-solar-power': '/blog/solar/reasons-why-you-should-use-solar-power',
  '/ways-to-keep-your-ac-unit-running-smoothly-this-summer': '/blog/hvac/ways-to-keep-your-ac-unit-running-smoothly-this-summer',
  '/how-to-make-an-old-home-more-energy-efficient': '/blog/solar',
  
  // More root-level blog posts from GSC
  '/the-best-types-of-air-conditioners-for-tucson-arizona': '/blog/hvac/the-best-types-of-air-conditioners-for-tucson-arizona',
  '/solar-energy-facts-people-should-know': '/blog/solar/why-solar-panel-installers-matter-solar-energy-facts-people-',
  '/benefits-of-hiring-professional-solar-panel-installers': '/blog/solar/benefits-of-hiring-professional-solar-panel-installers',
  '/what-are-the-financial-benefits-of-solar-energy': '/blog/solar/what-are-the-financial-benefits-of-solar-energy',
  '/copper-vs-pex-choosing-the-right-material-for-repiping': '/blog/plumbing/copper-vs-pex-choosing-the-right-material-for-repiping',
  '/drain-cleaning-solutions-that-actually-work': '/blog/drain-sewer/drain-cleaning-solutions-that-actually-work',
  '/how-to-make-your-own-drain-cleaner-at-home': '/blog/drain-sewer/how-to-make-your-own-drain-cleaner-at-home',
  '/what-is-off-grid-solar-power-system': '/blog/solar/3-types-of-solar-power-systems-which-one-is-right-for-you',
  '/the-importance-of-air-conditioner-sizing-how-to-choose-the-right-ac-unit-for-optimal-comfort-and-efficiency': '/blog/hvac',
  '/the-truth-about-tucson-solar-companies': '/blog/solar/the-truth-about-tucson-solar-companies',
  '/common-drain-cleaning-mistakes-you-must-avoid': '/blog/drain-sewer/common-drain-cleaning-mistakes-you-must-avoid',
  '/how-solar-power-systems-can-save-you-money-in-tucson-az': '/blog/solar/how-solar-power-systems-can-save-you-money-in-tucson-az',
  '/the-benefits-of-hiring-the-1-rated-best-solar-panel-installers-in-tucson': '/blog/solar/benefits-of-hiring-professional-solar-panel-installers',
  '/tucson-waters-epa-warning': '/blog/plumbing/tucson-waters-epa-warning',
  '/solar-power-system-advantages-and-disadvantages': '/blog/solar/solar-power-system-advantages-and-disadvantages',
  '/the-best-materials-for-repiping-a-home': '/blog/plumbing/the-best-materials-for-repiping-a-home',
  '/impact-of-indoor-air-quality-on-your-health-and-comfort': '/blog/indoor-air-quality/impact-of-indoor-air-quality-on-your-health-and-comfort',
  '/choosing-the-best-ac-repair-near-me-essential-tips-for-finding-reliable-service': '/blog/hvac/choosing-the-best-ac-repair-near-me-essential-tips-for-finding-reliable-service',
  '/what-to-expect-during-and-after-ac-repair': '/blog/hvac/what-to-expect-during-and-after-ac-repair',
  '/why-solar-energy-is-the-future': '/blog/solar/why-is-solar-energy-important-for-our-future',
  '/the-many-ways-plumbers-in-tucson-can-help': '/blog/plumbing/the-many-ways-plumbers-in-tucson-can-help',
  '/10-reasons-you-should-always-call-an-ac-repair-specialist': '/blog/hvac/10-reasons-you-should-always-call-an-ac-repair-specialist',
  '/desert-shield-water-filtration-the-smart-choice-for-tucson-homes': '/blog/plumbing/desert-shield-water-filtration-the-smart-choice-for-tucson-homes',
  '/should-you-diy-or-hire-a-professional-for-drain-cleaning': '/blog/drain-sewer/should-you-diy-or-hire-a-professional-for-drain-cleaning',
  '/comprehensive-home-services-in-oro-valley-more-than-just-a-business-its-a-commitment-to-the-community': '/service-areas/oro-valley',
  '/is-your-ac-making-you-sick-the-hidden-dangers-of-dirty-air-filters': '/blog/indoor-air-quality/is-your-ac-making-you-sick-the-hidden-dangers-of-dirty-air-f',
  '/does-turning-off-your-a-c-when-youre-not-home-actually-save-money': '/blog/home-tips/does-turning-off-your-ac-when-youre-not-home-actually-save-m',
  '/how-to-fix-your-ac-a-simple-guide-for-everyone': '/blog/hvac/how-to-fix-your-ac-a-simple-guide-for-everyone',
  '/ways-plumbers-in-tucson-can-help-you-unclog-drains': '/blog/drain-sewer/ways-plumbers-in-tucson-can-help-you-unclog-drains',
  '/everything-you-need-to-know-about-advanced-hvac-solutions': '/blog/hvac/everything-you-need-to-know-about-the-advanced-hvac-solution',
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
  '/how-solar-power-systems-can-benefit-commercial-property-owners': '/blog/solar/benefits-of-commercial-solar-energy-systems-to-businesses',
  '/plumbing-emergencies-you-should-never-ignore-in-plumbers-tucson': '/blog/plumbing/plumbing-emergencies-you-should-never-ignore-in-plumbers-tuc',
  '/common-repiping-mistakes-and-how-to-avoid-them': '/blog/plumbing/common-repiping-mistakes-and-how-to-avoid-them',
  '/8-important-questions-to-ask-solar-panel-installers-before-hiring-them': '/blog/solar/important-questions-to-ask-solar-panel-installers-before-hir',
  '/the-ultimate-guide-to-hvac-maintenance-in-tucson-az': '/blog/hvac/the-ultimate-guide-to-hvac-maintenance-in-tucson-az',
  '/solar-myths-vs-facts-dispelling-common-misconceptions': '/blog/solar/solar-myths-vs-facts-dispelling-common-misconceptions',
  '/the-ultimate-guide-to-drain-cleaning': '/blog/drain-sewer/the-ultimate-guide-to-drain-cleaning',
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
  '/what-does-a-professional-ac-service-include-a-complete-checklist': '/blog/hvac/what-does-a-professional-ac-service-include-a-complete-checklist',
  '/why-is-solar-energy-important-for-our-future': '/blog/solar/why-is-solar-energy-important-for-our-future',
  '/the-importance-and-benefits-of-hiring-an-ac-repair-specialist': '/blog/hvac/the-importance-and-benefits-of-hiring-an-ac-repair-specialis',
  '/how-to-choose-the-best-air-conditioning-services-in-tucson': '/blog/hvac/how-to-choose-the-best-air-conditioning-services-in-tucson',
  '/the-leading-choice-for-pipe-lining-in-tucson': '/blog/plumbing/the-leading-choice-for-pipe-lining-in-tucson',
  '/7-benefits-of-repiping-your-tucson-home': '/blog/plumbing/7-benefits-of-repiping-your-tucson-home',
  '/top-services-that-plumbers-tucson-can-provide': '/blog/plumbing/top-services-that-plumbers-tucson-can-provide',
  '/plumber-tucson-10-signs-you-need-a-professional-plumber': '/blog/plumbing/plumber-tucson-10-signs-you-need-a-professional-plumber',
  '/the-importance-of-super-cooling-for-hvac-efficiency-in-the-summer': '/blog/hvac/the-importance-of-super-cooling-for-hvac-efficiency-in-the-s',
  '/top-qualifications-to-look-for-in-your-upcoming-solar-panel-installers': '/blog/solar/top-qualifications-to-look-for-in-your-upcoming-solar-panel-',
  '/complete-guide-to-hvac-ac-repair-in-tucson-faqs-answered': '/blog/hvac/complete-guide-to-hvac-ac-repair-in-tucson-faqs-answered',
  '/drain-snakes-your-must-have-tool-for-efficient-drain-cleaning': '/blog/drain-sewer/drain-snakes-your-must-have-tool-for-efficient-drain-cleanin',
  '/diy-guide-to-basic-ac-repairs': '/blog/hvac/diy-guide-to-basic-ac-repairs',
  '/the-importance-of-having-a-reliable-plumber-in-tucson': '/blog/plumbing/the-importance-of-having-a-reliable-plumber-in-tucson',
  '/why-drain-cleaning-is-important': '/blog/drain-sewer/why-drain-cleaning-is-important',
  '/what-to-do-if-your-solar-company-closed-in-tucson': '/blog/solar/what-to-do-if-your-solar-company-closed-in-tucson',
  '/signs-you-need-to-call-for-ac-repair': '/blog/hvac/signs-you-need-to-call-for-ac-repair',
  '/8-reasons-why-you-should-use-solar-power': '/blog/solar/reasons-why-you-should-use-solar-power',
  '/why-hiring-a-solar-panel-installers-important': '/blog/solar/why-hiring-a-solar-panel-installers-important',
  '/discover-the-benefits-of-suntrac-air-conditioning-systems': '/blog/hvac/discover-the-benefits-of-suntrac-air-conditioning-systems',
  '/preparing-your-hvac-system-for-summer-essential-steps-for-optimal-performance': '/blog/hvac',
  '/choosing-the-right-hvac-system-navigating-the-options-when-hvac-systems-fail': '/blog/hvac',
  '/advantages-of-using-local-plumbers-in-tucson': '/blog/plumbing/advantages-of-using-local-plumbers-in-tucson',
  '/why-diy-ac-installation-can-cost-you-more-in-the-long-run': '/blog/hvac/why-diy-ac-installation-can-cost-you-more-in-the-long-run',
  '/the-hidden-dangers-of-neglecting-drain-cleaning': '/blog/drain-sewer/the-hidden-dangers-of-neglecting-drain-cleaning',
  '/signs-your-commercial-building-needs-repiping': '/blog/plumbing/signs-your-commercial-building-needs-repiping',
  '/can-you-lower-your-ac-costs-with-suntrac-air-conditioning-systems': '/blog/hvac',
  '/when-is-repiping-necessary-what-you-need-to-know': '/blog/plumbing/when-is-repiping-necessary-what-you-need-to-know',
  '/how-solar-panel-installers-can-benefit-homeowners': '/blog/solar/how-solar-panel-installers-can-save-you-money',
  '/how-professional-hvac-technicians-perform-ac-replacement': '/blog/hvac/how-professional-hvac-technicians-perform-ac-replacement',
  '/monsoon-humidity-central-air-system': '/blog/hvac',
  '/why-summer-ac-tune-ups-are-essential-for-comfort-and-efficiency': '/blog/hvac/why-summer-ac-tune-ups-are-essential-for-comfort-and-efficiency',
  '/is-a-burning-smell-normal-when-i-turn-on-the-heater': '/blog/hvac',
  '/9-warning-signs-you-need-a-drain-cleaning-service': '/blog/drain-sewer/9-warning-signs-you-need-a-drain-cleaning-service',
  '/types-of-services-offered-by-expert-solar-panel-installer': '/blog/solar/types-of-services-offered-by-expert-solar-panel-installer',
  '/why-take-advantage-of-solar-energy': '/blog/solar/why-take-advantage-of-solar-energy',
  '/air-conditioning-tucson-the-many-benefits-of-hiring-the-right-hvac-company': '/blog/hvac',
  '/preparing-the-home-for-summer-essential-tips-from-intelligent-design-air-conditioning-plumbing-solar-electric': '/blog/hvac',
  '/tips-for-finding-the-right-ac-repair-technician': '/blog/hvac/tips-for-finding-the-right-ac-repair-technician',
  // Moved to top: '/choosing-the-right-roofing-company-a-comprehensive-guide' -> '/blog/roofing/preparing-roof-for-spring-storms'
  '/how-plumbers-in-tucson-can-help-business-owners': '/blog/plumbing/how-plumbers-in-tucson-can-help-business-owners',
  '/how-often-does-ac-need-to-be-replaced': '/blog/hvac/how-often-does-ac-need-to-be-replaced',
  '/how-to-choose-the-best-ac-replacement-system-for-your-home': '/blog/hvac/how-to-choose-the-best-ac-replacement-system-for-your-home',
  '/how-repiping-can-improve-your-home-water-quality': '/blog/plumbing/how-repiping-can-improve-your-homes-water-quality',
  '/12-facts-you-didnt-know-about-solar-power-systems': '/blog/solar/12-facts-you-didnt-know-about-solar-power-systems',
  '/mastering-winter-pipe-protection-in-freezing-weather': '/blog/plumbing/mastering-winter-pipe-protection-in-freezing-weather',
  '/preparing-the-roof-for-spring-storms-ensuring-safety-and-longevity': '/blog/roofing/preparing-the-roof-for-spring-storms-ensuring-safety-and-lon',
  '/repair-or-replace-making-the-right-decision-for-hvac-systems': '/blog/hvac/repair-or-replace-making-the-right-decision-for-hvac-systems',
  '/tips-for-choosing-the-right-drain-cleaning-company': '/blog/drain-sewer/tips-for-choosing-the-right-drain-cleaning-company',
  '/the-many-benefits-of-solar-energy': '/blog/solar/the-many-benefits-of-solar-energy',
  '/why-local-solar-panel-installers-are-a-smart-choice': '/blog/solar/why-local-solar-panel-installers-are-a-smart-choice',
  '/air-conditioning-tucson-tips-to-lower-energy-bills-and-save-money': '/blog/hvac/air-conditioning-tucson-tips-to-lower-energy-bills-and-save-money',
  '/solar-energy-how-to-get-the-most-out-of-your-installation': '/blog/solar/ways-to-maximize-your-solar-energy-savings',
  '/why-repiping-your-home-is-essential': '/blog/plumbing/why-repiping-your-home-is-essential',
  '/how-ac-repair-can-actually-save-you-money': '/blog/hvac/how-ac-repair-can-actually-save-you-money',
  '/why-does-a-repiping-project-need-professional-help': '/blog/plumbing/why-does-a-repiping-project-need-professional-help',
  '/solar-panel-efficiency-a-comprehensive-guide': '/blog/solar/solar-panel-efficiency-a-comprehensive-guide',
  '/how-professional-plumbers-perform-drain-cleaning': '/blog/drain-sewer/how-professional-plumbers-perform-drain-cleaning',
  '/solar-power-systems-made-simple-how-solar-panels-work': '/blog/solar/solar-power-systems-made-simple-how-solar-panels-work',
  '/facts-about-solar-energy-and-reasons-to-get-solar-panels': '/blog/solar/facts-about-solar-energy-and-reasons-to-get-solar-panels',
  '/the-importance-of-proper-air-conditioning-installation': '/blog/hvac/the-importance-of-proper-air-conditioning-installation',
  '/tips-to-save-money-on-your-ac-repair-cost': '/blog/hvac/tips-to-save-money-on-your-ac-repair-cost',
  '/the-ins-and-outs-of-repiping-your-home': '/blog/plumbing/the-ins-and-outs-of-repiping-your-home',
  '/crucial-things-to-consider-before-replacing-your-air-conditioning-system': '/blog/hvac',
  '/air-conditioning-tucson-how-to-choose-the-right-air-conditioning-unit-for-your-home': '/blog/hvac',
  '/spotlight-on-the-indoor-air-purifier-from-intelligent-design': '/blog/hvac',
  '/tips-for-your-home-ac-replacement': '/blog/hvac/tips-for-your-home-ac-replacement',
  '/business-advantages-of-commercial-solar-energy-systems': '/blog/solar/benefits-of-commercial-solar-energy-systems-to-businesses',
  '/optimizing-air-conditioner-use-in-summer-best-practices-and-the-role-of-smart-thermostats': '/blog/hvac',
  '/signs-you-need-solar-panel-installers': '/blog/solar/signs-you-need-solar-panel-installers',
  '/answering-questions-about-solar-panel-installation': '/blog/solar',
  '/things-you-need-to-know-before-installing-a-solar-power-system': '/blog/solar/things-you-need-to-know-before-installing-a-solar-power-syst',
  '/why-choose-intelligent-design-team-for-your-ac-replacement-needs': '/blog/hvac',
  '/11-reasons-why-home-owners-need-residential-drain-cleaning': '/blog/plumbing/11-reasons-why-home-owners-need-residential-drain-cleaning',
  '/how-plumbers-in-tucson-can-help-you-deal-with-a-plumbing-emergency': '/blog/plumbing',
  '/solar-power-systems-a-quick-guide-to-going-solar': '/blog/solar/solar-power-systems-a-quick-guide-to-going-solar',
  '/ac-replacement-when-to-replace-your-commercial-ac-unit': '/blog/hvac/ac-replacement-when-to-replace-your-commercial-ac-unit',
  '/why-drain-cleaning-is-essential-for-businesses-keep-your-facility-running-smoothly': '/blog/plumbing',
  '/understanding-the-functionality-of-solar-power-systems': '/blog/solar/understanding-the-functionality-of-solar-power-systems',
  '/the-importance-of-hiring-the-right-drain-cleaning-company': '/blog/drain-sewer/the-importance-of-hiring-the-right-drain-cleaning-company',
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
  '/top-10-reasons-to-move-to-tucson': '/blog',
  '/how-to-choose-the-right-ac-repair-company': '/blog/hvac/how-to-choose-the-right-ac-repair-company',
  '/importance-of-regular-maintenance-with-a-professional-plumber-in-tucson': '/blog/plumbing',
  '/8-tips-for-managing-your-air-conditioning-in-tucson-during-the-summer': '/blog/hvac/8-tips-for-managing-your-air-conditioning-in-tucson-during-the-summer',
  '/out-with-the-old-in-with-the-new-is-ac-replacement-the-one-for-you': '/blog/hvac',
  '/how-to-determine-if-its-time-for-an-ac-replacement': '/blog/hvac/how-to-determine-if-its-time-for-an-ac-replacement',
  '/common-ac-problems-that-only-a-professional-ac-repair-can-fix': '/blog/hvac/common-ac-problems-that-only-a-professional-ac-repair-can-fix',
  '/air-conditioning-in-tucson-get-cooler-this-summer': '/blog/hvac',
  '/the-importance-of-hiring-the-right-drain-company': '/blog/drain-sewer/the-importance-of-hiring-the-right-drain-company',
  '/why-you-shouldnt-overlook-drain-cleaning': '/blog/drain-sewer/why-you-shouldnt-overlook-drain-cleaning',
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
  '/solarinstallation-cortaro': '/services/solar-installation-marana',
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
  '/plumber-tucson/trenchless-sewer-repair-replacement': '/services/sewer-line-repair',
  '/solar-tucson/commercial-solar-installations': '/services/commercial-solar-installation',
  '/roofing/metal-roofing': '/services/metal-roofs',
  '/roofing/roof-types/metal-roofing': '/services/metal-roofs',
  '/services/plumbing/burst-pipe-and-sewer-line-repair-tucson': '/services/sewer-line-repair',

  // Core/misc pages
  '/home': '/',
  '/services': '/services/hvac',
  '/services/air-conditioning': '/services/ac-service-tucson',
  '/solar': '/services/solar',
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
  '/resources/education-library': '/services/knowledge-hub',
  '/resources/video-testimonial': '/services/knowledge-hub',

  // Blog posts (date-based URLs)
  '/blog/2024/august/reasons-why-home-owners-need-residential-drain-c': '/blog/drain-sewer/reasons-why-home-owners-need-residential-drain-cleaning',
  '/blog/2024/august/your-neighborhood-partner-in-picture-rocks-intel': '/service-areas/picture-rocks',
  '/blog/categories/solar': '/blog/solar',
  '/blog/discover-the-benefits-of-suntrac-air-conditioning-systems': '/blog/hvac/discover-the-benefits-of-suntrac-air-conditioning-systems',
  '/blog/drain-cleaning-solutions-that-actually-work': '/blog/drain-sewer/drain-cleaning-solutions-that-actually-work',
  '/blog/how-does-solar-energy-work': '/blog/solar/how-does-solar-energy-work',
  '/blog/8-tips-for-managing-your-air-conditioning-in-tucson-during-the-summer': '/blog/hvac/8-tips-for-managing-your-air-conditioning-in-tucson-during-the-summer',

  // Repiping blog post redirects
  '/blog/plumbing/repiping-the-pros-and-cons-of-having-your-homes-piping-repla': '/blog/plumbing/7-benefits-of-repiping-your-tucson-home',

  // Root-level blog posts (missing /blog/ prefix)
  '/air-conditioner-solutions-by-intelligent-design': '/blog/hvac/air-conditioner-solutions-by-intelligent-design',
  '/our-emergency-hvac-services-taking-precautions-during-the-pandemic': '/blog/hvac',
  '/top-signs-you-need-ac-replacement-for-your-business': '/blog/hvac',
  '/solar-panel-installers-should-you-diy-your-solar-panel-installation': '/blog/solar/solar-panel-installers-should-you-diy-your-solar-panel-installation',
  '/troubleshooting-common-issues-during-or-after-a-repiping-project': '/blog/plumbing/troubleshooting-common-issues-during-or-after-a-repiping-project',
  '/what-to-expect-when-working-with-a-solar-panel-installer': '/blog/solar',

  // ===== ADDITIONAL LEGACY URL REDIRECTS (January 2026) =====
  
  // Flat service URLs (at root level) - redirect to /services/
  '/electrician-in-tucson': '/services/electrical-tucson',
  '/ac-installation-tucson': '/services/ac-installation-tucson',
  '/ac-repair-tucson': '/services/ac-repair-tucson',
  '/ac-tuneup-tucson': '/services/ac-tuneup-tucson',
  '/ac-service-tucson': '/services/ac-service-tucson',
  '/ceiling-fan-installation': '/services/ceiling-fan-installation',
  '/bidet-installation': '/services/bidet-installation',
  '/duct-cleaning-tucson': '/services/duct-cleaning-tucson',
  '/duct-installation-tucson': '/services/duct-installation-tucson',
  '/duct-repair-tucson': '/services/duct-repair-tucson',
  '/ductless-installation-tucson': '/services/ductless-installation-tucson',
  '/ductless-repair-tucson': '/services/ductless-repair-tucson',
  '/commercial-solar-installation': '/services/commercial-solar-installation',
  '/commercial-roof-coating': '/services/commercial-roof-coating',
  '/commercial-roof-installation': '/services/commercial-roof-installation',
  '/commercial-roof-repair': '/services/commercial-roof-repair',
  '/commercial-roof-replacement': '/services/commercial-roof-replacement',
  '/residential-roof-coating': '/services/residential-roof-coating',
  '/residential-roof-installation': '/services/residential-roof-installation',
  '/residential-roof-repair': '/services/residential-roof-repair',
  '/residential-roof-inspection': '/services/residential-roof-inspection',
  '/electrical-repair': '/services/electrical-repair',
  '/sewer-camera-inspection': '/services/sewer-camera-inspection',
  '/drain-clearing': '/services/drain-clearing',
  '/water-heater-installation': '/services/water-heater-installation',
  '/water-heater-repair': '/services/water-heater-repair',
  '/heater-installation-tucson': '/services/heater-installation-tucson',
  '/heater-service-tucson': '/services/heater-service-tucson',
  '/furnaces-tucson': '/services/furnaces-tucson',
  '/leak-detection': '/services/leak-detection',
  '/solar-tubular-lights': '/services/skylights',
  '/skylights': '/services/skylights',
  '/garbage-disposal': '/services/garbage-disposal',
  '/flat-roofs': '/services/flat-roofs',
  '/tile-roofs': '/services/tile-roofs',
  '/smart-thermostat-installation-tucson': '/services/smart-thermostat-installation-tucson',
  '/indoor-air-quality-tucson': '/services/indoor-air-quality-tucson',
  '/sink-repair-installation': '/services/sink-repair-installation',
  '/home-energy-upgrades-tucson': '/services/home-energy-upgrades-tucson',
  '/residential-solar-installation': '/services/residential-solar-installation',
  '/solar-panel-costs': '/services/solar-panel-costs',
  '/water-heater-flush': '/special-offers',

  // Location-specific service pages (flat format with hyphens)
  '/hvac-avra-valley': '/services/hvac-avra-valley',
  '/hvac-green-valley': '/services/hvac-green-valley',
  '/hvac-marana': '/services/hvac-marana',
  '/hvac-oro-valley': '/services/hvac-oro-valley',
  '/hvac-picture-rocks': '/services/hvac-picture-rocks',
  '/hvac-rita-ranch': '/services/hvac-rita-ranch',
  '/hvac-vail': '/services/hvac-vail',
  '/hvac-saddle-brooke-catalina': '/services/hvac-saddle-brooke-catalina',
  '/hvac-cortaro': '/services/hvac-cortaro',
  '/heating-tucson': '/services/heating-tucson',
  '/heating-casas-adobes': '/services/heating-casas-adobes',
  '/heating-drexel-heights': '/services/heating-drexel-heights',
  '/heating-east-tucson': '/services/heating-east-tucson',
  '/heating-picture-rocks': '/services/heating-picture-rocks',
  '/heating-rita-ranch': '/services/heating-rita-ranch',
  '/heating-saddle-brooke-catalina': '/services/heating-saddle-brooke-catalina',
  '/heating-tucson-estates': '/services/heating-tucson-estates',
  '/plumbing-marana': '/services/plumbing-marana',
  '/plumbing-cortaro': '/services/plumbing-cortaro',
  '/plumbing-east-tucson': '/services/plumbing-east-tucson',
  '/plumbing-green-valley': '/services/plumbing-green-valley',
  '/plumbing-rita-ranch': '/services/plumbing-rita-ranch',
  '/plumbing-red-rock-casa-grande': '/services/plumbing-red-rock-casa-grande',
  '/plumbing-tucson-estates': '/services/plumbing-tucson-estates',
  '/electrical-avra-valley': '/services/electrical-avra-valley',
  '/electrical-east-tucson': '/services/electrical-east-tucson',
  '/electrical-green-valley': '/services/electrical-green-valley',
  '/electrical-rita-ranch': '/services/electrical-rita-ranch',
  '/electrical-sahuarita': '/services/electrical-sahuarita',
  '/electrical-saddle-brooke': '/services/electrical-saddle-brooke-catalina',
  '/electrical-tortolita': '/services/electrical-tortolita',
  '/electrical-tucson-estates': '/services/electrical-tucson-estates',
  '/electrical-vail': '/services/electrical-vail',
  '/roofing-catalina-foothills': '/services/roofing-catalina-foothills',
  '/roofing-green-valley': '/services/roofing-green-valley',
  '/roofing-picture-rocks': '/services/roofing-picture-rocks',
  '/solar-installation-catalina-foothills': '/services/solar-installation-catalina-foothills',
  '/solar-installation-corona-de-tucson': '/services/solar-installation-corona-de-tucson',
  '/solar-installation-cortaro': '/services/solar-installation-cortaro',
  '/solar-installation-east-tucson': '/services/solar-installation-east-tucson',
  '/solar-installation-oro-valley': '/services/solar-installation-oro-valley',
  '/solar-installation-rita-ranch': '/services/solar-installation-rita-ranch',
  '/solar-installation-saddle-brooke-catalina': '/services/solar-installation-saddle-brooke-catalina',
  '/solar-installation-sahuarita': '/services/solar-installation-sahuarita',
  '/solar-installation-tortolita': '/services/solar-installation-tortolita',
  '/solar-installation-tucson-estates': '/services/solar-installation-tucson-estates',
  '/drain-clearing-avra-valley': '/services/drain-clearing-avra-valley',
  '/drain-clearing-drexel-heights': '/services/drain-clearing-drexel-heights',
  '/drain-clearing-east-tucson': '/services/drain-clearing-east-tucson',
  '/drain-clearing-green-valley': '/services/drain-clearing-green-valley',
  '/drain-clearing-oro-valley': '/services/drain-clearing-oro-valley',
  '/drain-clearing-picture-rocks': '/services/drain-clearing-picture-rocks',
  '/drain-clearing-red-rock-casa-grande': '/services/drain-clearing-red-rock-casa-grande',
  '/drain-clearing-sahuarita': '/services/drain-clearing-sahuarita',
  '/drain-sewer-red-rock-casa-grande': '/services/drain-clearing-red-rock-casa-grande',

  // /air-conditioning/ nested paths
  '/air-conditioning/ac-maintenance': '/services/ac-tuneup-tucson',
  '/air-conditioning/ac-repair': '/services/ac-repair-tucson',
  '/air-conditioning/air-conditioning-systems': '/services/ac-service-tucson',
  '/air-conditioning/emergency-ac-repair-tucson': '/services/ac-repair-tucson',

  // /drain-and-sewer/ nested paths (not already covered)
  '/drain-and-sewer/trenchless-sewer-repair-replacement': '/services/trenchless-repair',

  // /electrical/ nested paths (without /tucson/)
  '/electrical': '/services/electrical-tucson',
  '/electrical/ceiling-fan-installation-tucson': '/services/ceiling-fan-installation',
  '/electrical/home-energy-upgrades-tucson': '/services/home-energy-upgrades-tucson',
  '/electrical/outdoor-and-motion-lighting': '/services/outdoor-motion-lighting',
  '/electrical/outdoor-and-motion-lighting-tucson': '/services/outdoor-motion-lighting',
  '/electrical/panel-upgrades': '/services/electrical-panel-upgrades',

  // Blog paths (nested /blog/) - not yet covered
  '/blog/advantages-of-using-local-plumbers-in-tucson': '/blog/plumbing/advantages-of-using-local-plumbers-in-tucson',
  '/blog/air-conditioning-in-tucson-your-guide-to-a-cool-summer': '/blog/hvac/air-conditioning-in-tucson-your-guide-to-a-cool-summer',
  '/blog/categories/radio-promotions': '/special-offers',
  '/blog/how-does-ac-work': '/blog/hvac/how-does-ac-work',
  '/blog/intelligent-design-your-trusted-home-service-provider-in-summit-arizona': '/service-areas/tucson',
  '/blog/solar-energy-how-to-get-the-most-out-of-your-installation': '/blog/solar/ways-to-maximize-your-solar-energy-savings',
  '/blog/solar-power-system-advantages-and-disadvantages': '/blog/solar/solar-power-system-advantages-and-disadvantages',
  '/blog/the-best-materials-for-repiping-a-home': '/blog/plumbing/the-best-materials-for-repiping-a-home',
  '/blog/types-of-services-offered-by-expert-solar-panel-installer': '/blog/solar/types-of-services-offered-by-expert-solar-panel-installer',
  '/blog/why-choose-intelligent-design-team-for-your-ac-replacement-needs': '/blog/hvac',
  '/blog/why-repiping-your-home-is-essential': '/blog/plumbing/why-repiping-your-home-is-essential',

  // /oro-valley/ and /green-valley/ flat paths
  '/oro-valley': '/service-areas/oro-valley',
  '/green-valley': '/service-areas/green-valley',

  // Careers paths
  '/careers/hvac-service-technician': '/careers',
  '/careers/plumbing-sales-consultant': '/careers',

  // Outlets/switches flat path
  '/outlets-switches': '/services/outlets-switches',

  // Resources/library pages (unique entries only)
  '/duct-cleaning': '/services/duct-cleaning-tucson',

  // ===== ADDITIONAL LEGACY URL REDIRECTS (January 2026 - Batch 2) =====

  // Blog content redirects (root-level blog posts without /blog/ prefix)
  '/how-solar-power-systems-work-everything-you-need-to-know': '/blog/solar/solar-power-systems-made-simple-how-solar-panels-work',
  '/intelligent-design-your-home-service-partner-in-rillito-arizona': '/service-areas/tucson',
  '/why-every-home-needs-water-filtration-a-must-read-guide': '/blog/plumbing',

  // Drain/Sewer location pages (no hyphen format)
  '/drainsewer-tucson': '/services/drain-sewer-tucson',
  '/drainsewer-saddlebrookecatalina': '/services/drain-clearing-saddle-brooke-catalina',
  '/drainsewer-cortaro': '/services/drain-clearing-marana',
  '/drainsewer-ritaranch': '/services/drain-clearing-rita-ranch',
  '/drainsewer-catalinafoothills': '/services/drain-clearing-catalina-foothills',

  // Solar installation location pages (no hyphen format)
  '/solarinstallation-tucson': '/services/solar-installation-tucson',
  '/solarinstallation-catalinafoothills': '/services/solar-installation-catalina-foothills',
  '/solarinstallation-greenvalley': '/services/solar-installation-green-valley',

  // Heating location pages (no hyphen format)
  '/heating-gladdenfarms': '/services/heating-gladden-farms',
  '/heating-avravalley': '/services/heating-avra-valley',
  '/heating-orovalley': '/services/heating-oro-valley',

  // HVAC location pages (no hyphen format)
  '/hvac-saddlebrookecatalina': '/services/hvac-saddle-brooke-catalina',

  // Plumbing location pages (no hyphen format)
  '/plumbing-drexelheights': '/services/plumbing-drexel-heights',

  // Roofing location pages (no hyphen format)
  '/roofing-avravalley': '/services/roofing-avra-valley',

  // Electrical location pages (no hyphen format)
  '/electrical-avravalley': '/services/electrical-avra-valley',

  // /electrical/ nested paths
  '/electrical/electrical-repairs-tucson': '/services/electrical-repair',
  '/electrical/lighting-upgrades-tucson': '/services/lighting-upgrades',
  '/electrical/lighting-upgrades': '/services/lighting-upgrades',
  '/electrical/panel-upgrades-tucson': '/services/electrical-panel-upgrades',

  // /air-conditioning/ nested paths

  // /heating/ nested paths
  '/heating/heat-pumps': '/services/heat-pumps-tucson',
  '/heating/heater-tune-up': '/services/heater-tuneup-tucson',
  '/heating/heater-installation': '/services/heater-installation-tucson',
  '/heating/heater-installation-': '/services/heater-installation-tucson',
  '/heating/heater-maintenance': '/services/heater-service-tucson',
  '/heating/heater-repair': '/services/heater-repair-tucson',
  '/heating/heater-tune-up-': '/services/heater-service-tucson',
  '/heater-repair': '/services/heater-repair-tucson',

  // /drain-and-sewer/ nested paths

  // /roofing/ nested paths
  '/roofing/residential-roofing/roof-replacement': '/services/roof-replacements-tucson',
  '/roofing/residential-roofing-tucson': '/services/roofing-tucson',

  // /residential-roofing/ and /commercial-roofing/ nested paths

  // /solar-tucson/ nested paths
  '/solar-tucson/residential-solar-panels': '/services/residential-solar-installation',
  '/solar-tucson/solar-calculator-tucson': '/services/residential-solar-installation',
  '/solar-tucson/solar-company-tucson-az': '/services/residential-solar-installation',
  '/solar-tucson/solar-energy-solutions': '/services/residential-solar-installation',
  '/solar-tucson/solar-tax-credit-arizona': '/services/residential-solar-installation',

  // /plumber-tucson/ nested paths
  '/plumber-tucson/backflow-testing-tucson': '/services/plumbing-tucson',
  '/plumber-tucson/plumbing-repair-install': '/services/plumbing-tucson',
  '/plumber-tucson/tankless-water-heater': '/services/tankless-water-heaters',
  '/plumber-tucson/water-heaters': '/services/water-heater-installation',

  // Location-based service redirects (flat format)
  '/hvac-tucson': '/services/hvac-tucson',
  '/hvac-tortolita': '/services/hvac-tortolita',
  '/hvac-tucson-estates': '/services/hvac-tucson',
  '/plumbing-tucson': '/services/plumbing-tucson',
  '/plumbing-saddle-brooke': '/services/plumbing-saddle-brooke-catalina',
  '/plumbing-tanque-verde': '/services/plumbing-tanque-verde',
  '/plumbing-vail': '/services/plumbing-vail',
  '/heating-oro-valley': '/services/heating-oro-valley',
  '/roofing-drexel-heights': '/services/roofing-drexel-heights',
  '/roofing-rillito': '/services/roofing-rillito',
  '/solar-installation-avra-valley': '/services/solar-installation-avra-valley',
  '/solar-ac-tucson': '/services/hvac-tucson',
  '/solar-a-c': '/services/hvac-tucson',

  // Service area and location redirects

  // Careers pages
  '/careers/plumbing-jobs-tucson': '/careers',
  '/careers/hvac-lead-installer': '/careers',
  '/careers/plumbing-apprentice': '/careers',
  '/careers/plumbing-technician': '/careers',

  // Resource and info pages

  // Service pages
  '/air-conditioning-service-tucson': '/services/ac-service-tucson',
  '/heater-tuneup-tucson': '/services/heater-tuneup-tucson',
  '/outdoor-motion-lighting': '/services/outdoor-motion-lighting',
  '/solar-installation-saddle-brooke': '/services/solar-installation-saddle-brooke-catalina',

  // Services landing pages
  '/services/air-conditioning/ac-repair-tucson': '/services/ac-repair-tucson',
  '/services/air-conditioning/ac-installation-tucson': '/services/ac-installation-tucson',
  '/services/electrical/lighting-upgrades': '/services/lighting-upgrades',

  // Corona de Tucson service pages (typo in original URL)
  '/services/drain-clearing-coronade-tucson': '/services/drain-clearing-corona-de-tucson',
  '/services/heating-coronade-tucson': '/services/heating-corona-de-tucson',
  '/services/plumbing-coronade-tucson': '/services/plumbing-corona-de-tucson',
  '/services/solar-installation-coronade-tucson': '/services/solar-installation-corona-de-tucson',
  '/services/electrical-coronade-tucson': '/services/electrical-corona-de-tucson',
  '/services/roofing-coronade-tucson': '/services/roofing-corona-de-tucson',

  // Saddle Brooke service page

  // Misc redirects
  '/covid-19-response': '/about',
  '/hello-world': '/',
  '/site-search': '/',
  '/ac-service': '/services/ac-service-tucson',
  '/ac-tune-up': '/services/ac-tuneup-tucson',
  '/services/ac-tune-up-tucson': '/services/ac-tuneup-tucson',
  '/water-heaters': '/services/water-heater-installation',
  '/water-softeners': '/services/water-softeners',
  '/smart-thermostat-installation': '/services/smart-thermostat-installation-tucson',
  '/trenchless-repair': '/services/trenchless-repair',
  '/generac-installation': '/services/generac-installation',
  '/hybrid-water-heaters': '/services/hybrid-water-heaters',
  '/tucson': '/service-areas/tucson',
  '/sahuarita': '/service-areas/sahuarita',
  '/why-tucson-chooses-intelligent-design': '/about',
  '/2025/09': '/blog',

  // Blog category pages
  '/blog/categories/electrical': '/blog/electrical',
  '/blog/categories/company-news': '/blog',

  // Blog archive pages (year and month) - redirect to main blog
  '/blog/2017': '/blog',
  '/blog/2018': '/blog',
  '/blog/2020': '/blog',
  '/blog/2020/april': '/blog',
  '/blog/2022': '/blog',
  '/blog/2022/june': '/blog',
  '/blog/2023': '/blog',
  '/blog/2023/february': '/blog',
  '/blog/2023/january': '/blog',
  '/blog/2024': '/blog',
  '/blog/2024/may': '/blog',
  '/blog/2024/october': '/blog',

  // Truncated blog post URLs (incomplete slugs)
  '/blog/2022/june/repiping-the-pros-and-cons-of-having-your-homes-': '/blog/plumbing',
  '/blog/2023/february/7-advantages-of-using-local-plumbers-in-tucson': '/blog/plumbing',
  '/blog/2023/february/the-best-materials-for-repiping-a-home': '/blog/plumbing',
  '/blog/2023/january/what-to-expect-during-after-air-conditioning-rep': '/blog/hvac',
  '/blog/2024/may/intelligent-design-air-conditioning-expands-serv': '/blog',
  '/blog/2024/october/what-to-do-if-your-solar-company-has-gone-out-of': '/blog/solar',

  // Blog date paths - specific posts
  '/blog/permit-to-install-a-new-water-heater': '/blog/water-heater/permit-to-install-a-new-water-heater',

  // ===== ADDITIONAL REDIRECTS FROM GSC "Crawled - Not Indexed" REPORT =====

  // Solar pages with typos or old URL structures

  // Pages that were "Blocked by robots.txt" in old WordPress site

  // ===== NEW REDIRECTS FROM GSC 404 ANALYSIS (Jan 2026) =====
  
  // Blog Post Redirects
  '/spotlight-on-solar-air-conditioner': '/services/solar-ac-tucson',
  '/why-you-should-consider-repiping-your-home': '/blog/plumbing/7-benefits-of-repiping-your-tucson-home',
  '/maximizing-solar-efficiency-steps-to-harness-the-suns-power': '/blog/solar/maximizing-solar-efficiency-steps-to-harness-the-suns-power',
  
  // Service-Location Redirects (flat URL to hyphenated format)
  '/electrical-greenvalley': '/services/electrical-green-valley',
  '/plumbing-avravalley': '/services/plumbing-avra-valley',
  '/electrical-picturerocks': '/services/electrical-picture-rocks',
  '/drainsewer-sahuarita': '/services/drain-sewer-sahuarita',
  '/hvac-redrockcasagrande': '/services/hvac-red-rock-casa-grande',
  '/solarinstallation-rillito': '/services/solar-installation-marana',
  '/roofing-tanqueverde': '/services/roofing-tanque-verde',
  '/drainsewer-coronadetucson': '/services/drain-clearing-corona-de-tucson',
  '/hvac-picturerocks': '/services/hvac-picture-rocks',
  '/roofing-casasadobes': '/services/roofing-casas-adobes',
  '/drainsewer-avravalley': '/services/drain-clearing-avra-valley',
  '/drainsewer-gladdenfarms': '/services/drain-clearing-gladden-farms',
  '/roofing-ritaranch': '/services/roofing-rita-ranch',
  '/electrical-ritaranch': '/services/electrical-rita-ranch',
  
  // Service Path Redirects
  '/services/heating': '/services/heating-tucson',
  '/roofing/roof-types/pitched-roofs': '/services/pitched-roofs',
  '/heater-installation': '/services/heater-installation-tucson',
  '/heating/heater-service': '/services/heater-service-tucson',
  
  // ===== GSC PENDING VALIDATION BATCH (Jan 29, 2026) =====
  // Only adding NEW redirects not already in the file above
  
  '/hvac-ritaranch': '/services/hvac-rita-ranch',
  '/services/heating/': '/services/heating-tucson',
  '/solar-energy-the-sustainable-energy-solution-for-home-and-business': '/blog/solar/uses-of-solar-energy-the-ultimate-guide-for-home-and-busines',
  
  // Date Archive Redirects (to main blog page)
  '/2020/10': '/blog',
  '/2021/09': '/blog',
  '/2021/11': '/blog',
  '/2021/12': '/blog',
  '/2022/01': '/blog',
  '/2022/04': '/blog',
  '/2022/06': '/blog',
  '/2022/07': '/blog',
  '/2022/08': '/blog',
  '/2022/09': '/blog',
  '/2022/11': '/blog',
  '/2022/12': '/blog',
  '/2023/03': '/blog',
  '/2023/09': '/blog',
  '/2023/10': '/blog',
  '/2024/06': '/blog',
  '/2025/06': '/blog',

  // ===== BLOG CATEGORY MIGRATION REDIRECTS =====
  // Water Heater category (migrated from plumbing)
  '/blog/plumbing/discover-the-benefits-of-tankless-water-heaters': '/blog/water-heater/discover-the-benefits-of-tankless-water-heaters',
  '/blog/plumbing/do-i-need-a-permit-to-install-a-new-water-heater': '/blog/water-heater/do-i-need-a-permit-to-install-a-new-water-heater',
  '/blog/plumbing/permit-to-install-a-new-water-heater': '/blog/water-heater/permit-to-install-a-new-water-heater',
  '/blog/plumbing/what-is-an-anode-rod': '/blog/water-heater/what-is-an-anode-rod',
  '/blog/plumbing/who-to-call-for-water-heater-repair': '/blog/water-heater/who-to-call-for-water-heater-repair',

  // Drain-Sewer category (migrated from plumbing)
  '/blog/plumbing/9-warning-signs-you-need-a-drain-cleaning-service': '/blog/drain-sewer/9-warning-signs-you-need-a-drain-cleaning-service',
  '/blog/plumbing/common-drain-cleaning-mistakes-you-must-avoid': '/blog/drain-sewer/common-drain-cleaning-mistakes-you-must-avoid',
  '/blog/plumbing/drain-cleaning-solutions-that-actually-work': '/blog/drain-sewer/drain-cleaning-solutions-that-actually-work',
  '/blog/plumbing/drain-snakes-your-must-have-tool-for-efficient-drain-cleanin': '/blog/drain-sewer/drain-snakes-your-must-have-tool-for-efficient-drain-cleanin',
  '/blog/plumbing/how-professional-plumbers-perform-drain-cleaning': '/blog/drain-sewer/how-professional-plumbers-perform-drain-cleaning',
  '/blog/plumbing/how-to-make-your-own-drain-cleaner-at-home': '/blog/drain-sewer/how-to-make-your-own-drain-cleaner-at-home',
  '/blog/plumbing/is-it-safe-to-use-chemical-drain-cleaners': '/blog/drain-sewer/is-it-safe-to-use-chemical-drain-cleaners',
  '/blog/plumbing/reasons-why-home-owners-need-residential-drain-cleaning': '/blog/drain-sewer/reasons-why-home-owners-need-residential-drain-cleaning',
  '/blog/plumbing/should-you-diy-or-hire-a-professional-for-drain-cleaning': '/blog/drain-sewer/should-you-diy-or-hire-a-professional-for-drain-cleaning',
  '/blog/plumbing/the-hidden-dangers-of-neglecting-drain-cleaning': '/blog/drain-sewer/the-hidden-dangers-of-neglecting-drain-cleaning',
  '/blog/plumbing/the-importance-of-drain-cleaning-maintenance': '/blog/drain-sewer/the-importance-of-drain-cleaning-maintenance',
  '/blog/plumbing/the-importance-of-hiring-the-right-drain-cleaning-company': '/blog/drain-sewer/the-importance-of-hiring-the-right-drain-cleaning-company',
  '/blog/plumbing/the-importance-of-hiring-the-right-drain-company': '/blog/drain-sewer/the-importance-of-hiring-the-right-drain-company',
  '/blog/plumbing/the-ultimate-guide-to-drain-cleaning': '/blog/drain-sewer/the-ultimate-guide-to-drain-cleaning',
  '/blog/plumbing/tips-for-choosing-the-right-drain-cleaning-company': '/blog/drain-sewer/tips-for-choosing-the-right-drain-cleaning-company',
  '/blog/plumbing/top-drain-cleaning-tools-you-need': '/blog/drain-sewer/top-drain-cleaning-tools-you-need',
  '/blog/plumbing/ways-plumbers-in-tucson-can-help-you-unclog-drains': '/blog/drain-sewer/ways-plumbers-in-tucson-can-help-you-unclog-drains',
  '/blog/plumbing/why-drain-cleaning-is-important': '/blog/drain-sewer/why-drain-cleaning-is-important',
  '/blog/plumbing/why-you-shouldnt-overlook-drain-cleaning': '/blog/drain-sewer/why-you-shouldnt-overlook-drain-cleaning',

  // Indoor-Air-Quality category (migrated from hvac)
  '/blog/hvac/impact-of-indoor-air-quality-on-your-health-and-comfort': '/blog/indoor-air-quality/impact-of-indoor-air-quality-on-your-health-and-comfort',
  '/blog/hvac/is-your-ac-making-you-sick-the-hidden-dangers-of-dirty-air-f': '/blog/indoor-air-quality/is-your-ac-making-you-sick-the-hidden-dangers-of-dirty-air-f',

  // ===== GSC 404 REDIRECTS (April 2026) =====
  // Added from Google Search Console 404 report - new entries not already in the map

  // --- Location-based service pages (old format -> /services/) ---
  '/drainsewer-easttucson': '/services/drain-clearing-east-tucson',
  '/drainsewer-tanqueverde': '/services/drain-clearing-tanque-verde',
  '/electrical-casasadobes': '/services/electrical-casas-adobes',
  '/electrical-easttucson': '/services/electrical-east-tucson',
  '/electrical-redrockcasagrande': '/services/electrical-red-rock-casa-grande',
  '/electrical-saddlebrookecatalina': '/services/electrical-saddle-brooke-catalina',
  '/plumbing-catalinafoothills': '/services/plumbing-catalina-foothills',

  // --- Blog post redirects ---
  '/2025/01': '/blog',
  '/blog/home-tips/common-repiping-mistakes-and-how-to-avoid-them': '/blog/plumbing/common-repiping-mistakes-and-how-to-avoid-them',
  '/blog/home-tips/copper-vs-pex-choosing-the-right-material-for-repiping': '/blog/plumbing/copper-vs-pex-choosing-the-right-material-for-repiping',
  '/blog/home-tips/how-repiping-can-improve-your-homes-water-quality': '/blog/plumbing/how-repiping-can-improve-your-homes-water-quality',
  '/blog/home-tips/how-to-find-reputable-repiping-contractors-the-factors-to-co': '/blog/plumbing/how-to-find-reputable-repiping-contractors-the-factors-to-co',
  '/blog/home-tips/the-best-materials-for-repiping-a-home': '/blog/plumbing/the-best-materials-for-repiping-a-home',
  '/blog/home-tips/troubleshooting-common-issues-during-or-after-a-repiping-pro': '/blog/plumbing/troubleshooting-common-issues-during-or-after-a-repiping-pro',
  '/blog/home-tips/what-is-involved-in-repiping-a-house': '/blog/plumbing/what-is-involved-in-repiping-a-house',
  '/blog/home-tips/what-to-expect-when-repiping-your-home': '/blog/plumbing/what-to-expect-when-repiping-your-home',
  '/blog/home-tips/why-does-a-repiping-project-need-professional-help': '/blog/plumbing/why-does-a-repiping-project-need-professional-help',
  '/blog/home-tips/why-repiping-your-home-is-essential': '/blog/plumbing/why-repiping-your-home-is-essential',
  '/blog/importance-of-regular-maintenance-with-a-professional-plumber-in-tucson': '/blog/plumbing',
  '/the-importance-of-drain-cleaning-maintenance': '/blog/drain-sewer/the-importance-of-drain-cleaning-maintenance',
  '/tips-for-avoiding-costly-plumbing-repairs': '/blog/plumbing/plumbers-tucson-tips-for-avoiding-costly-plumbing-repairs',
  '/web_story_category/indoor-air-quality': '/blog/hvac',
  '/what-to-expect-when-repiping-your-home': '/blog/plumbing/what-to-expect-when-repiping-your-home',

  // --- Service page redirects ---
  '/services/roof-coating': '/services/residential-roof-coating',

  // --- Other redirects (archives, WP artifacts, careers, misc) ---
  '/?s=%7Bsearch_term_string%7D': '/',
  '/favicon.ico?favicon.0b3bf435.ico': '/',
  '/mo': '/',
  '/s/99H9o2S': '/',
  '/s/V7Y1w72': '/',
  '/s/X4k0b0W': '/',
  '/s/b8G948q': '/',
  '/s/g0x7Q92': '/',
  '/search?q=%7Bsearch_term_string%7D': '/',
  '/service-areas/saddlebrook': '/service-areas/saddle-brooke-catalina',
  '/wp-content/cache/min/1/?ver=1745499745?formKey%3Dc256c968-e6db-11ee-83b4-0258dbbb2fa3&visitorId=5ed65990-5c1c-453d-8818-2f8c39ee8af0&sessionId=6ed23419-74c3-452c-b44a-1c5cce7cbf82&referrer=/testimonials': '/',
  '/wp-content/cache/min/1/?ver=1745499745?formKey%3Dc256c968-e6db-11ee-83b4-0258dbbb2fa3&visitorId=aa0daa8a-9231-47cd-ae90-d354f68b3e24&sessionId=ba931be1-2f47-405f-bb21-e3d5c1b3933d&referrer=/service-areas/little-town': '/',
  '/wp-content/cache/min/1/?ver=1746789610?formKey%3Dc256c968-e6db-11ee-83b4-0258dbbb2fa3&visitorId=77fd3de8-f00b-4333-b349-5b25714a120c&sessionId=e0285cda-cd3c-4272-8aa7-344c0fb7e9bb&referrer=/8-tips-for-managing-your-air-conditioning-in-tucson-during-the-summer': '/',
  '/wp-content/cache/min/1/?ver=1746789610?formKey%3Dc256c968-e6db-11ee-83b4-0258dbbb2fa3&visitorId=ec75b46b-9668-46f6-afcc-ba3a7768c9a0&sessionId=3862df69-0953-4fc4-b59c-297f156c6b30&referrer=/preparing-your-hvac-system-for-summer-essential-steps-for-optimal-performance': '/',
  '/wp-content/plugins/gravityforms/assets/js/dist': '/',

  // ===== GSC 404 REDIRECTS - April 23, 2026 =====
  // Blog slug mismatches → redirect to correct existing content
  '/blog/plumbing/how-repiping-can-improve-your-home-water-quality': '/blog/plumbing/how-repiping-can-improve-your-homes-water-quality',
  '/blog/hvac/does-turning-off-your-a-c-when-youre-not-home-actually-save-money': '/blog/home-tips/does-turning-off-your-ac-when-youre-not-home-actually-save-m',
  '/blog/solar/how-solar-power-systems-can-benefit-commercial-property-owners': '/blog/solar/benefits-of-commercial-solar-energy-systems-to-businesses',
  '/blog/solar/8-important-questions-to-ask-solar-panel-installers-before-hiring-them': '/blog/solar/important-questions-to-ask-solar-panel-installers-before-hir',
  '/blog/solar/8-reasons-why-you-should-use-solar-power': '/blog/solar/reasons-why-you-should-use-solar-power',
  '/blog/solar/solar-energy-facts-people-should-know': '/blog/solar/why-solar-panel-installers-matter-solar-energy-facts-people-',
  '/blog/hvac/everything-you-need-to-know-about-advanced-hvac-solutions': '/blog/hvac/everything-you-need-to-know-about-the-advanced-hvac-solution',
  '/blog/solar/the-benefits-of-hiring-the-1-rated-best-solar-panel-installers-in-tucson': '/blog/solar/benefits-of-hiring-professional-solar-panel-installers',
  '/blog/solar/how-solar-panel-installers-can-benefit-homeowners': '/blog/solar/how-solar-panel-installers-can-save-you-money',
  '/blog/solar/business-advantages-of-commercial-solar-energy-systems': '/blog/solar/benefits-of-commercial-solar-energy-systems-to-businesses',
  '/blog/plumbing/tips-for-avoiding-costly-plumbing-repairs': '/blog/plumbing/plumbers-tucson-tips-for-avoiding-costly-plumbing-repairs',
  '/blog/solar/why-solar-energy-is-the-future': '/blog/solar/why-is-solar-energy-important-for-our-future',
  // Truncated filename redirects
  '/blog/hvac/what-kind-of-air-conditioning-preventive-maintenance-do-i-need': '/blog/hvac/what-kind-of-air-conditioning-preventive-maintenance-do-i-ne',
  '/blog/hvac/the-importance-of-super-cooling-for-hvac-efficiency-in-the-summer': '/blog/hvac/the-importance-of-super-cooling-for-hvac-efficiency-in-the-s',
  '/blog/solar/top-qualifications-to-look-for-in-your-upcoming-solar-panel-installers': '/blog/solar/top-qualifications-to-look-for-in-your-upcoming-solar-panel-',
  // No exact match → redirect to closest related content
  '/blog/solar/how-solar-power-systems-work-everything-you-need-to-know': '/blog/solar/solar-power-systems-made-simple-how-solar-panels-work',
  '/blog/solar/how-to-make-an-old-home-more-energy-efficient': '/blog/solar',
  '/blog/solar/is-a-tucson-solar-home-energy-audit-worth-it': '/blog/solar',
  '/blog/hvac/can-you-lower-your-ac-costs-with-suntrac-air-conditioning-systems': '/blog/hvac',
  '/blog/plumbing/why-you-should-consider-repiping-your-home': '/blog/plumbing/7-benefits-of-repiping-your-tucson-home',
  '/blog/solar/what-is-off-grid-solar-power-system': '/blog/solar/3-types-of-solar-power-systems-which-one-is-right-for-you',
  '/blog/solar/answering-questions-about-solar-panel-installation': '/blog/solar',
  '/blog/plumbing/importance-of-regular-maintenance-with-a-professional-plumber-in-tucson': '/blog/plumbing',
  '/blog/hvac/is-a-burning-smell-normal-when-i-turn-on-the-heater': '/blog/hvac',
  '/blog/roofing/choosing-the-right-roofing-company-a-comprehensive-guide': '/blog/roofing',
  // Service page redirects
  '/services/lighting-installation': '/services/lighting-upgrades',
  '/services/outlet-switch-installation': '/services/outlets-switches',
  '/services/air-conditioning-in-tucson-maintenance-tips-for-businesses': '/blog/hvac/air-conditioning-in-tucson-maintenance-tips-for-businesses',
  '/air-conditioning-in-tucson-maintenance-tips-for-businesses': '/blog/hvac/air-conditioning-in-tucson-maintenance-tips-for-businesses',

  // ===== [SLUG] ROUTE MIGRATION (added 2026-05-07) =====
  '/avra-valley': '/service-areas/avra-valley',
  '/casas-adobes': '/service-areas/casas-adobes',
  '/catalina-foothills': '/service-areas/catalina-foothills',
  '/circuit-breakers': '/services/circuit-breakers',
  '/commercial-roof-inspection': '/services/commercial-roof-inspection',
  '/corona-de-tucson': '/services/corona-de-tucson',
  '/drain-clearing-casas-adobes': '/services/drain-clearing-casas-adobes',
  '/drain-clearing-catalina-foothills': '/services/drain-clearing-catalina-foothills',
  '/drain-clearing-corona-de-tucson': '/services/drain-clearing-corona-de-tucson',
  '/drain-clearing-gladden-farms': '/services/drain-clearing-gladden-farms',
  '/drain-clearing-marana': '/services/drain-clearing-marana',
  '/drain-clearing-rita-ranch': '/services/drain-clearing-rita-ranch',
  '/drain-clearing-saddle-brooke-catalina': '/services/drain-clearing-saddle-brooke-catalina',
  '/drain-clearing-tanque-verde': '/services/drain-clearing-tanque-verde',
  '/drain-clearing-tortolita': '/services/drain-clearing-tortolita',
  '/drain-clearing-tucson': '/services/drain-clearing-tucson',
  '/drain-clearing-tucson-estates': '/services/drain-clearing-tucson-estates',
  '/drain-clearing-vail': '/services/drain-clearing-vail',
  '/drain-sewer-avra-valley': '/services/drain-sewer-avra-valley',
  '/drain-sewer-casas-adobes': '/services/drain-sewer-casas-adobes',
  '/drain-sewer-catalina-foothills': '/services/drain-sewer-catalina-foothills',
  '/drain-sewer-corona-de-tucson': '/services/drain-sewer-corona-de-tucson',
  '/drain-sewer-cortaro': '/services/drain-sewer-cortaro',
  '/drain-sewer-drexel-heights': '/services/drain-sewer-drexel-heights',
  '/drain-sewer-east-tucson': '/services/drain-sewer-east-tucson',
  '/drain-sewer-gladden-farms': '/services/drain-sewer-gladden-farms',
  '/drain-sewer-green-valley': '/services/drain-sewer-green-valley',
  '/drain-sewer-marana': '/services/drain-sewer-marana',
  '/drain-sewer-oro-valley': '/services/drain-sewer-oro-valley',
  '/drain-sewer-picture-rocks': '/services/drain-sewer-picture-rocks',
  '/drain-sewer-rillito': '/services/drain-sewer-rillito',
  '/drain-sewer-rita-ranch': '/services/drain-sewer-rita-ranch',
  '/drain-sewer-saddle-brooke-catalina': '/services/drain-sewer-saddle-brooke-catalina',
  '/drain-sewer-sahuarita': '/services/drain-sewer-sahuarita',
  '/drain-sewer-tanque-verde': '/services/drain-sewer-tanque-verde',
  '/drain-sewer-tucson': '/services/drain-sewer-tucson',
  '/drain-sewer-vail': '/services/drain-sewer-vail',
  '/drainsewer-orovalley': '/services/drainsewer-orovalley',
  '/drexel-heights': '/service-areas/drexel-heights',
  '/duct-sealing-tucson': '/services/duct-sealing-tucson',
  '/east-tucson': '/services/east-tucson',
  '/electrical-casas-adobes': '/services/electrical-casas-adobes',
  '/electrical-catalina-foothills': '/services/electrical-catalina-foothills',
  '/electrical-corona-de-tucson': '/services/electrical-corona-de-tucson',
  '/electrical-cortaro': '/services/electrical-cortaro',
  '/electrical-drexel-heights': '/services/electrical-drexel-heights',
  '/electrical-gladden-farms': '/services/electrical-gladden-farms',
  '/electrical-marana': '/services/electrical-marana',
  '/electrical-oro-valley': '/services/electrical-oro-valley',
  '/electrical-panel-upgrades': '/services/electrical-panel-upgrades',
  '/electrical-picture-rocks': '/services/electrical-picture-rocks',
  '/electrical-red-rock-casa-grande': '/services/electrical-red-rock-casa-grande',
  '/electrical-rillito': '/services/electrical-rillito',
  '/electrical-saddle-brooke-catalina': '/services/electrical-saddle-brooke-catalina',
  '/electrical-tanque-verde': '/services/electrical-tanque-verde',
  '/generac-repair': '/services/generac-repair',
  '/gladden-farms': '/services/gladden-farms',
  '/heat-pumps-tucson': '/services/heat-pumps-tucson',
  '/heater-repair-tucson': '/services/heater-repair-tucson',
  '/heating-avra-valley': '/services/heating-avra-valley',
  '/heating-catalina-foothills': '/services/heating-catalina-foothills',
  '/heating-corona-de-tucson': '/services/heating-corona-de-tucson',
  '/heating-cortaro': '/services/heating-cortaro',
  '/heating-gladden-farms': '/services/heating-gladden-farms',
  '/heating-green-valley': '/services/heating-green-valley',
  '/heating-marana': '/services/heating-marana',
  '/heating-red-rock-casa-grande': '/services/heating-red-rock-casa-grande',
  '/heating-redrockcasagrande': '/services/heating-redrockcasagrande',
  '/heating-rillito': '/services/heating-rillito',
  '/heating-saddle-brooke': '/services/heating-saddle-brooke',
  '/heating-sahuarita': '/services/heating-sahuarita',
  '/heating-tanque-verde': '/services/heating-tanque-verde',
  '/heating-tortolita': '/services/heating-tortolita',
  '/heating-vail': '/services/heating-vail',
  '/home-energy-audit-tucson': '/services/home-energy-audit-tucson',
  '/hvac-casas-adobes': '/services/hvac-casas-adobes',
  '/hvac-catalina-foothills': '/services/hvac-catalina-foothills',
  '/hvac-corona-de-tucson': '/services/hvac-corona-de-tucson',
  '/hvac-drexel-heights': '/services/hvac-drexel-heights',
  '/hvac-east-tucson': '/services/hvac-east-tucson',
  '/hvac-gladden-farms': '/services/hvac-gladden-farms',
  '/hvac-greenvalley': '/services/hvac-greenvalley',
  '/hvac-red-rock-casa-grande': '/services/hvac-red-rock-casa-grande',
  '/hvac-rillito': '/services/hvac-rillito',
  '/hvac-saddle-brooke': '/services/hvac-saddle-brooke',
  '/hvac-sahuarita': '/services/hvac-sahuarita',
  '/hvac-tanque-verde': '/services/hvac-tanque-verde',
  '/knowledge-hub': '/services/knowledge-hub',
  '/lighting-upgrades': '/services/lighting-upgrades',
  '/marana': '/service-areas/marana',
  '/metal-roofs': '/services/metal-roofs',
  '/picture-rocks': '/service-areas/picture-rocks',
  '/pitched-roofs': '/services/pitched-roofs',
  '/plumbing-avra-valley': '/services/plumbing-avra-valley',
  '/plumbing-casas-adobes': '/services/plumbing-casas-adobes',
  '/plumbing-casasadobes': '/services/plumbing-casasadobes',
  '/plumbing-catalina-foothills': '/services/plumbing-catalina-foothills',
  '/plumbing-corona-de-tucson': '/services/plumbing-corona-de-tucson',
  '/plumbing-drexel-heights': '/services/plumbing-drexel-heights',
  '/plumbing-gladden-farms': '/services/plumbing-gladden-farms',
  '/plumbing-maintenance': '/services/plumbing-maintenance',
  '/plumbing-oro-valley': '/services/plumbing-oro-valley',
  '/plumbing-picture-rocks': '/services/plumbing-picture-rocks',
  '/plumbing-picturerocks': '/services/plumbing-picturerocks',
  '/plumbing-rillito': '/services/plumbing-rillito',
  '/plumbing-saddle-brooke-catalina': '/services/plumbing-saddle-brooke-catalina',
  '/plumbing-sahuarita': '/services/plumbing-sahuarita',
  '/plumbing-tortolita': '/services/plumbing-tortolita',
  '/red-rock-casa-grande': '/service-areas/red-rock-casa-grande',
  '/repipe-tucson': '/services/repipe-tucson',
  '/residential-roof-replacement': '/services/residential-roof-replacement',
  '/rita-ranch': '/service-areas/rita-ranch',
  '/roofing-avra-valley': '/services/roofing-avra-valley',
  '/roofing-casas-adobes': '/services/roofing-casas-adobes',
  '/roofing-corona-de-tucson': '/services/roofing-corona-de-tucson',
  '/roofing-cortaro': '/services/roofing-cortaro',
  '/roofing-east-tucson': '/services/roofing-east-tucson',
  '/roofing-gladden-farms': '/services/roofing-gladden-farms',
  '/roofing-marana': '/services/roofing-marana',
  '/roofing-oro-valley': '/services/roofing-oro-valley',
  '/roofing-red-rock-casa-grande': '/services/roofing-red-rock-casa-grande',
  '/roofing-rita-ranch': '/services/roofing-rita-ranch',
  '/roofing-saddle-brooke': '/services/roofing-saddle-brooke',
  '/roofing-saddle-brooke-catalina': '/services/roofing-saddle-brooke-catalina',
  '/roofing-sahuarita': '/services/roofing-sahuarita',
  '/roofing-tanque-verde': '/services/roofing-tanque-verde',
  '/roofing-tortolita': '/services/roofing-tortolita',
  '/roofing-tucson': '/services/roofing-tucson',
  '/roofing-tucson-estates': '/services/roofing-tucson-estates',
  '/roofing-vail': '/services/roofing-vail',
  '/rooter-special': '/services/rooter-special',
  '/saddle-brooke-catalina': '/service-areas/saddle-brooke-catalina',
  '/saddlebrooke-catalina': '/service-areas/saddle-brooke-catalina',
  '/septic-permitting': '/services/septic-permitting',
  '/septic-repair': '/services/septic-repair',
  '/septic-tank-installation': '/services/septic-tank-installation',
  '/septic-tank-replacement': '/services/septic-tank-replacement',
  '/sewer-line-repair': '/services/sewer-line-repair',
  '/shingle-roofs': '/services/shingle-roofs',
  '/smartac-tucson': '/services/smartac-tucson',
  '/solar-installation-casas-adobes': '/services/solar-installation-casas-adobes',
  '/solar-installation-drexel-heights': '/services/solar-installation-drexel-heights',
  '/solar-installation-gladden-farms': '/services/solar-installation-gladden-farms',
  '/solar-installation-green-valley': '/services/solar-installation-green-valley',
  '/solar-installation-marana': '/services/solar-installation-marana',
  '/solar-installation-picture-rocks': '/services/solar-installation-picture-rocks',
  '/solar-installation-red-rock-casa-grande': '/services/solar-installation-red-rock-casa-grande',
  '/solar-installation-rillito': '/services/solar-installation-rillito',
  '/solar-installation-tanque-verde': '/services/solar-installation-tanque-verde',
  '/solar-installation-tucson': '/services/solar-installation-tucson',
  '/solar-installation-vail': '/services/solar-installation-vail',
  '/solar-maintenance': '/services/solar-maintenance',
  '/solar-tax-credits': '/services/solar-tax-credits',
  '/solarinstallation-coronadetucson': '/services/solarinstallation-coronadetucson',
  '/solarinstallation-tanqueverde': '/services/solarinstallation-tanqueverde',
  '/tankless-water-heaters': '/services/tankless-water-heaters',
  '/tanque-verde': '/service-areas/tanque-verde',
  '/thermalcork-roof-coating': '/services/thermalcork-roof-coating',
  '/toilet-installation': '/services/toilet-installation',
  '/tortolita': '/service-areas/tortolita',
  '/tucson-estates': '/services/tucson-estates',
  '/vail': '/service-areas/vail',
  '/video-testimonials': '/services/video-testimonials',
  '/water-filtration': '/services/water-filtration',

  // ===== NESTED SERVICE/LOCATION ROUTE MIGRATION (added 2026-05-07) =====
  '/services/drainsewer/avravalley': '/services/drainsewer-avravalley',
  '/services/drainsewer/casasadobes': '/services/drainsewer-casasadobes',
  '/services/drainsewer/catalinafoothills': '/services/drainsewer-catalinafoothills',
  '/services/drainsewer/coronadetucson': '/services/drainsewer-coronadetucson',
  '/services/drainsewer/cortaro': '/services/drainsewer-cortaro',
  '/services/drainsewer/drexelheights': '/services/drainsewer-drexelheights',
  '/services/drainsewer/easttucson': '/services/drainsewer-easttucson',
  '/services/drainsewer/gladdenfarms': '/services/drainsewer-gladdenfarms',
  '/services/drainsewer/greenvalley': '/services/drainsewer-greenvalley',
  '/services/drainsewer/marana': '/services/drainsewer-marana',
  '/services/drainsewer/orovalley': '/services/drainsewer-orovalley',
  '/services/drainsewer/picturerocks': '/services/drainsewer-picturerocks',
  '/services/drainsewer/redrockcasagrande': '/services/drainsewer-redrockcasagrande',
  '/services/drainsewer/rillito': '/services/drainsewer-rillito',
  '/services/drainsewer/ritaranch': '/services/drainsewer-ritaranch',
  '/services/drainsewer/saddlebrookecatalina': '/services/drainsewer-saddlebrookecatalina',
  '/services/drainsewer/sahuarita': '/services/drainsewer-sahuarita',
  '/services/drainsewer/tanqueverde': '/services/drainsewer-tanqueverde',
  '/services/drainsewer/tucson': '/services/drainsewer-tucson',
  '/services/drainsewer/vail': '/services/drainsewer-vail',
  '/services/electrical/avravalley': '/services/electrical-avravalley',
  '/services/electrical/casasadobes': '/services/electrical-casasadobes',
  '/services/electrical/catalinafoothills': '/services/electrical-catalinafoothills',
  '/services/electrical/coronadetucson': '/services/electrical-coronadetucson',
  '/services/electrical/cortaro': '/services/electrical-cortaro',
  '/services/electrical/drexelheights': '/services/electrical-drexelheights',
  '/services/electrical/easttucson': '/services/electrical-easttucson',
  '/services/electrical/gladdenfarms': '/services/electrical-gladdenfarms',
  '/services/electrical/greenvalley': '/services/electrical-greenvalley',
  '/services/electrical/marana': '/services/electrical-marana',
  '/services/electrical/orovalley': '/services/electrical-orovalley',
  '/services/electrical/picturerocks': '/services/electrical-picturerocks',
  '/services/electrical/redrockcasagrande': '/services/electrical-redrockcasagrande',
  '/services/electrical/rillito': '/services/electrical-rillito',
  '/services/electrical/ritaranch': '/services/electrical-ritaranch',
  '/services/electrical/saddlebrookecatalina': '/services/electrical-saddlebrookecatalina',
  '/services/electrical/sahuarita': '/services/electrical-sahuarita',
  '/services/electrical/tanqueverde': '/services/electrical-tanqueverde',
  '/services/electrical/tucson': '/services/electrical-tucson',
  '/services/electrical/vail': '/services/electrical-vail',
  '/services/heating/avravalley': '/services/heating-avravalley',
  '/services/heating/casasadobes': '/services/heating-casasadobes',
  '/services/heating/catalinafoothills': '/services/heating-catalinafoothills',
  '/services/heating/coronadetucson': '/services/heating-coronadetucson',
  '/services/heating/cortaro': '/services/heating-cortaro',
  '/services/heating/drexelheights': '/services/heating-drexelheights',
  '/services/heating/easttucson': '/services/heating-easttucson',
  '/services/heating/gladdenfarms': '/services/heating-gladdenfarms',
  '/services/heating/greenvalley': '/services/heating-greenvalley',
  '/services/heating/marana': '/services/heating-marana',
  '/services/heating/orovalley': '/services/heating-orovalley',
  '/services/heating/picturerocks': '/services/heating-picturerocks',
  '/services/heating/redrockcasagrande': '/services/heating-redrockcasagrande',
  '/services/heating/rillito': '/services/heating-rillito',
  '/services/heating/ritaranch': '/services/heating-ritaranch',
  '/services/heating/saddlebrookecatalina': '/services/heating-saddlebrookecatalina',
  '/services/heating/sahuarita': '/services/heating-sahuarita',
  '/services/heating/tanqueverde': '/services/heating-tanqueverde',
  '/services/heating/tucson': '/services/heating-tucson',
  '/services/heating/vail': '/services/heating-vail',
  '/services/hvac/avravalley': '/services/hvac-avravalley',
  '/services/hvac/casasadobes': '/services/hvac-casasadobes',
  '/services/hvac/catalinafoothills': '/services/hvac-catalinafoothills',
  '/services/hvac/coronadetucson': '/services/hvac-coronadetucson',
  '/services/hvac/cortaro': '/services/hvac-cortaro',
  '/services/hvac/drexelheights': '/services/hvac-drexelheights',
  '/services/hvac/easttucson': '/services/hvac-easttucson',
  '/services/hvac/gladdenfarms': '/services/hvac-gladdenfarms',
  '/services/hvac/greenvalley': '/services/hvac-greenvalley',
  '/services/hvac/marana': '/services/hvac-marana',
  '/services/hvac/orovalley': '/services/hvac-orovalley',
  '/services/hvac/picturerocks': '/services/hvac-picturerocks',
  '/services/hvac/redrockcasagrande': '/services/hvac-redrockcasagrande',
  '/services/hvac/rillito': '/services/hvac-rillito',
  '/services/hvac/ritaranch': '/services/hvac-ritaranch',
  '/services/hvac/saddlebrookecatalina': '/services/hvac-saddlebrookecatalina',
  '/services/hvac/sahuarita': '/services/hvac-sahuarita',
  '/services/hvac/tanqueverde': '/services/hvac-tanqueverde',
  '/services/hvac/tucson': '/services/hvac-tucson',
  '/services/hvac/vail': '/services/hvac-vail',
  '/services/plumbing/avravalley': '/services/plumbing-avravalley',
  '/services/plumbing/casasadobes': '/services/plumbing-casasadobes',
  '/services/plumbing/catalinafoothills': '/services/plumbing-catalinafoothills',
  '/services/plumbing/coronadetucson': '/services/plumbing-coronadetucson',
  '/services/plumbing/cortaro': '/services/plumbing-cortaro',
  '/services/plumbing/drexelheights': '/services/plumbing-drexelheights',
  '/services/plumbing/easttucson': '/services/plumbing-easttucson',
  '/services/plumbing/gladdenfarms': '/services/plumbing-gladdenfarms',
  '/services/plumbing/greenvalley': '/services/plumbing-greenvalley',
  '/services/plumbing/marana': '/services/plumbing-marana',
  '/services/plumbing/orovalley': '/services/plumbing-orovalley',
  '/services/plumbing/picturerocks': '/services/plumbing-picturerocks',
  '/services/plumbing/redrockcasagrande': '/services/plumbing-redrockcasagrande',
  '/services/plumbing/rillito': '/services/plumbing-rillito',
  '/services/plumbing/ritaranch': '/services/plumbing-ritaranch',
  '/services/plumbing/saddlebrookecatalina': '/services/plumbing-saddlebrookecatalina',
  '/services/plumbing/sahuarita': '/services/plumbing-sahuarita',
  '/services/plumbing/tanqueverde': '/services/plumbing-tanqueverde',
  '/services/plumbing/tucson': '/services/plumbing-tucson',
  '/services/plumbing/vail': '/services/plumbing-vail',
  '/services/roofing/avravalley': '/services/roofing-avravalley',
  '/services/roofing/casasadobes': '/services/roofing-casasadobes',
  '/services/roofing/catalinafoothills': '/services/roofing-catalinafoothills',
  '/services/roofing/coronadetucson': '/services/roofing-coronadetucson',
  '/services/roofing/cortaro': '/services/roofing-cortaro',
  '/services/roofing/drexelheights': '/services/roofing-drexelheights',
  '/services/roofing/easttucson': '/services/roofing-easttucson',
  '/services/roofing/gladdenfarms': '/services/roofing-gladdenfarms',
  '/services/roofing/greenvalley': '/services/roofing-greenvalley',
  '/services/roofing/marana': '/services/roofing-marana',
  '/services/roofing/orovalley': '/services/roofing-orovalley',
  '/services/roofing/picturerocks': '/services/roofing-picturerocks',
  '/services/roofing/redrockcasagrande': '/services/roofing-redrockcasagrande',
  '/services/roofing/rillito': '/services/roofing-rillito',
  '/services/roofing/ritaranch': '/services/roofing-ritaranch',
  '/services/roofing/saddlebrookecatalina': '/services/roofing-saddlebrookecatalina',
  '/services/roofing/sahuarita': '/services/roofing-sahuarita',
  '/services/roofing/tanqueverde': '/services/roofing-tanqueverde',
  '/services/roofing/tucson': '/services/roofing-tucson',
  '/services/roofing/vail': '/services/roofing-vail',
  '/services/solarinstallation/avravalley': '/services/solarinstallation-avravalley',
  '/services/solarinstallation/casasadobes': '/services/solarinstallation-casasadobes',
  '/services/solarinstallation/catalinafoothills': '/services/solarinstallation-catalinafoothills',
  '/services/solarinstallation/coronadetucson': '/services/solarinstallation-coronadetucson',
  '/services/solarinstallation/cortaro': '/services/solarinstallation-cortaro',
  '/services/solarinstallation/drexelheights': '/services/solarinstallation-drexelheights',
  '/services/solarinstallation/easttucson': '/services/solarinstallation-easttucson',
  '/services/solarinstallation/gladdenfarms': '/services/solarinstallation-gladdenfarms',
  '/services/solarinstallation/greenvalley': '/services/solarinstallation-greenvalley',
  '/services/solarinstallation/marana': '/services/solarinstallation-marana',
  '/services/solarinstallation/orovalley': '/services/solarinstallation-orovalley',
  '/services/solarinstallation/picturerocks': '/services/solarinstallation-picturerocks',
  '/services/solarinstallation/redrockcasagrande': '/services/solarinstallation-redrockcasagrande',
  '/services/solarinstallation/rillito': '/services/solarinstallation-rillito',
  '/services/solarinstallation/ritaranch': '/services/solarinstallation-ritaranch',
  '/services/solarinstallation/saddlebrookecatalina': '/services/solarinstallation-saddlebrookecatalina',
  '/services/solarinstallation/sahuarita': '/services/solarinstallation-sahuarita',
  '/services/solarinstallation/tanqueverde': '/services/solarinstallation-tanqueverde',
  '/services/solarinstallation/tucson': '/services/solarinstallation-tucson',
  '/services/solarinstallation/vail': '/services/solarinstallation-vail',
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
  'service-areas', 'services', 'blog', 'service-map'
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
