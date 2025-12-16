import type { NextConfig } from "next";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

/**
 * Generate 308 permanent redirects for legacy React app URLs → Next.js /services/ structure
 * Preserves SEO equity and handles external backlinks
 * 
 * Uses manifest to generate redirects:
 * 1. For each canonical service: /{canonical-slug} → /services/{canonical-slug}
 * 2. For each alias: /services/{alias} → /services/{canonical-slug}
 * 3. For each alias: /{alias} → /services/{canonical-slug}
 */
async function generateServiceRedirects() {
  const redirects: Array<{ source: string; destination: string; permanent: boolean }> = [];
  
  try {
    // Load manifest to get canonical services and aliases
    const manifestPath = join(process.cwd(), "data", "pages", "services", "manifest.json");
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
    const services = manifest.services || {};
    const aliases = manifest.aliases || {};
    
    // Standalone pages that have their own app routes (not service pages)
    const standalonePages = new Set([
      'financing', 'guarantees', 'resources', 'home', 'about',
      'contact', 'careers', 'privacy-policy', 'special-offers',
      'customer-reviews', 'video-testimonials', 'family-protection-plans',
      'new-homebuyer-offer', 'realtors-offer', 'recent-projects'
    ]);
    
    // Generate redirects for canonical services only
    // Exclude standalone pages that have dedicated app routes
    // Legacy flat URL → /services/ URL
    Object.entries(services).forEach(([canonicalSlug, _info]) => {
      // Skip if this is a standalone page with its own route
      if (standalonePages.has(canonicalSlug)) {
        return;
      }
      
      redirects.push({
        source: `/${canonicalSlug}`,
        destination: `/services/${canonicalSlug}`,
        permanent: true
      });
    });
    
    // Generate redirects for aliases
    // Each alias gets 2 redirects to ensure single-hop resolution:
    // 1. /services/{alias} → /services/{canonical} (prevents duplicate content)
    // 2. /{alias} → /services/{canonical} (legacy flat URL support)
    Object.entries(aliases).forEach(([aliasSlug, canonicalSlug]) => {
      // Alias under /services/ → canonical
      redirects.push({
        source: `/services/${aliasSlug}`,
        destination: `/services/${canonicalSlug}`,
        permanent: true
      });
      
      // Legacy flat URL alias → canonical service URL
      redirects.push({
        source: `/${aliasSlug}`,
        destination: `/services/${canonicalSlug}`,
        permanent: true
      });
    });
    
    console.log(`✅ Generated ${redirects.length} service redirects (${Object.keys(services).length} canonical, ${Object.keys(aliases).length} aliases) for SEO preservation`);
  } catch (error) {
    console.warn('⚠️  Could not generate service redirects:', error);
  }
  
  return redirects;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    const serviceRedirects = await generateServiceRedirects();
    
    const legacyRedirects = [
      // ===========================================
      // CORE PAGE REDIRECTS
      // ===========================================
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/guarantees', destination: '/guarantees', permanent: true },
      { source: '/about-us/realtors', destination: '/realtors-offer', permanent: true },
      { source: '/about-intelligent-design', destination: '/knowledge-hub', permanent: true },
      { source: '/terms-of-service', destination: '/privacy-policy', permanent: true },
      { source: '/terms', destination: '/privacy-policy', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/testimonials', destination: '/customer-reviews', permanent: true },
      { source: '/schedule', destination: '/contact', permanent: true },
      { source: '/thank-you', destination: '/', permanent: true },
      { source: '/thank-you-for-booking', destination: '/', permanent: true },
      { source: '/areas-served', destination: '/service-areas', permanent: true },
      { source: '/education-library', destination: '/education-library', permanent: true },
      { source: '/recent-projects', destination: '/recent-projects', permanent: true },
      { source: '/resources', destination: '/resources', permanent: true },
      { source: '/realtor-free-membership-offer', destination: '/realtors-offer', permanent: true },
      { source: '/new-home-buyer-offer', destination: '/new-homebuyer-offer', permanent: true },
      { source: '/intelligent-design-family-protection-plans', destination: '/family-protection-plans', permanent: true },
      { source: '/national-fire-prevention-month-free-deluxe-membership-offer', destination: '/special-offers', permanent: true },
      { source: '/holiday-giveaway', destination: '/special-offers', permanent: true },
      { source: '/water-heater-flush-special', destination: '/special-offers', permanent: true },
      { source: '/schedule-test-page', destination: '/contact', permanent: true },
      { source: '/pearl-certified-contractor', destination: '/about', permanent: true },
      { source: '/pearl-certified-hvac', destination: '/services/ac-service-tucson', permanent: true },
      { source: '/pearl-certified-solar', destination: '/services/residential-solar-installation', permanent: true },
      { source: '/tucson-hvac-contractors', destination: '/services/hvac-tucson', permanent: true },
      { source: '/hvac-service-technician', destination: '/careers', permanent: true },
      { source: '/hvac-installation', destination: '/services/ac-installation-tucson', permanent: true },
      { source: '/solar-energy-installer', destination: '/services/residential-solar-installation', permanent: true },
      { source: '/solar-panel-financing', destination: '/financing', permanent: true },
      { source: '/ac-install-financing', destination: '/financing', permanent: true },
      
      // Quote tool redirects
      { source: '/free-online-hvac-quote', destination: '/free-hvac-quote', permanent: true },
      { source: '/free-online-water-heater-quote', destination: '/water-heater-quote', permanent: true },
      
      // ===========================================
      // AIR CONDITIONING / HVAC REDIRECTS
      // ===========================================
      { source: '/air-conditioning', destination: '/services/ac-service-tucson', permanent: true },
      { source: '/air-conditioning/ac-installation-tucson', destination: '/services/ac-installation-tucson', permanent: true },
      { source: '/air-conditioning/ac-repair-tucson', destination: '/services/ac-repair-tucson', permanent: true },
      { source: '/air-conditioning/ac-tune-up', destination: '/services/ac-tuneup-tucson', permanent: true },
      { source: '/air-conditioning/air-conditioning-service-tucson', destination: '/services/ac-service-tucson', permanent: true },
      { source: '/air-conditioning/air-conditioning-system', destination: '/services/ac-service-tucson', permanent: true },
      { source: '/air-conditioning/duct-cleaning-tucson', destination: '/services/duct-cleaning-tucson', permanent: true },
      { source: '/air-conditioning/ductless-mini-split-ac-repair-tucson', destination: '/services/ductless-repair-tucson', permanent: true },
      { source: '/air-conditioning/improve-indoor-air-quality-tucson', destination: '/services/indoor-air-quality-tucson', permanent: true },
      { source: '/air-conditioning/improve-indoor-air-quality-tucson/humidifiers', destination: '/services/indoor-air-quality-tucson', permanent: true },
      { source: '/air-conditioning/r22-phaseout-tucson', destination: '/r22-phaseout', permanent: true },
      { source: '/air-conditioning/smart-thermostat-installation', destination: '/services/smart-thermostat-installation', permanent: true },
      { source: '/ac-inspection', destination: '/services/ac-tuneup-tucson', permanent: true },
      { source: '/ac-maintenance', destination: '/services/ac-tuneup-tucson', permanent: true },
      { source: '/ac-replacement-tucson', destination: '/services/ac-installation-tucson', permanent: true },
      { source: '/ductless-mini-split-ac-installation', destination: '/services/ductless-installation-tucson', permanent: true },
      { source: '/duct-sealing-and-aeroseal', destination: '/services/duct-sealing-tucson', permanent: true },
      
      // ===========================================
      // HEATING REDIRECTS
      // ===========================================
      { source: '/heating', destination: '/services/heating-tucson', permanent: true },
      { source: '/heating/furnaces', destination: '/services/furnaces-tucson', permanent: true },
      { source: '/heating/heater-installation-tucson', destination: '/services/heater-installation-tucson', permanent: true },
      { source: '/heating/heater-repair-tucson', destination: '/services/heater-repair-tucson', permanent: true },
      { source: '/heating/heater-service-tucson', destination: '/services/heater-service-tucson', permanent: true },
      { source: '/heating/heater-tune-up-tucson', destination: '/services/heater-tuneup-tucson', permanent: true },
      { source: '/furnace-installation', destination: '/services/heater-installation-tucson', permanent: true },
      { source: '/furnace-maintenance', destination: '/services/heater-tuneup-tucson', permanent: true },
      { source: '/heater-inspection', destination: '/services/heater-tuneup-tucson', permanent: true },
      { source: '/heater-maintenance', destination: '/services/heater-tuneup-tucson', permanent: true },
      { source: '/heater-replacement', destination: '/services/heater-installation-tucson', permanent: true },
      { source: '/heat-pumps', destination: '/services/heat-pumps-tucson', permanent: true },
      
      // ===========================================
      // PLUMBING REDIRECTS
      // ===========================================
      { source: '/plumber-tucson', destination: '/services/plumbing-tucson', permanent: true },
      { source: '/plumber-tucson/bidet-installation-tucson', destination: '/services/bidet-installation', permanent: true },
      { source: '/plumber-tucson/emergency-water-heater-repair-tucson', destination: '/services/water-heater-repair', permanent: true },
      { source: '/plumber-tucson/hybrid-water-heater-installation', destination: '/services/hybrid-water-heaters', permanent: true },
      { source: '/plumber-tucson/leak-detection-tucson-az', destination: '/services/leak-detection', permanent: true },
      { source: '/plumber-tucson/plumbing-maintenance-tucson', destination: '/services/plumbing-maintenance', permanent: true },
      { source: '/plumber-tucson/plumbing-repair-installation-tucson', destination: '/services/plumbing-tucson', permanent: true },
      { source: '/plumber-tucson/repipe-specialist-tucson', destination: '/services/repipe-tucson', permanent: true },
      { source: '/plumber-tucson/sink-repair-installation', destination: '/services/sink-repair-installation', permanent: true },
      { source: '/plumber-tucson/tankless-water-heater-installation', destination: '/services/tankless-water-heaters', permanent: true },
      { source: '/plumber-tucson/water-filtration-system-tucson', destination: '/services/water-filtration', permanent: true },
      { source: '/plumber-tucson/water-heater-installation-replacement', destination: '/services/water-heater-installation', permanent: true },
      { source: '/plumber-tucson/water-heaters-tucson', destination: '/services/water-heater-installation', permanent: true },
      { source: '/water-heater-service', destination: '/services/water-heater-installation', permanent: true },
      { source: '/water-softener-repair', destination: '/services/water-softener-repair', permanent: true },
      { source: '/water-leak-repair', destination: '/services/leak-detection', permanent: true },
      { source: '/burst-pipe-repair', destination: '/services/plumbing-tucson', permanent: true },
      { source: '/emergency-plumber-in-tucson', destination: '/services/plumbing-tucson', permanent: true },
      
      // ===========================================
      // DRAIN & SEWER REDIRECTS
      // ===========================================
      { source: '/drain-and-sewer', destination: '/services/drain-sewer-tucson', permanent: true },
      { source: '/drain-and-sewer/drain-cleaning-tucson', destination: '/services/drain-clearing', permanent: true },
      { source: '/drain-and-sewer/rooter-services-drain-clearing-special', destination: '/drain-clearing-special', permanent: true },
      { source: '/drain-and-sewer/sewer-camera-inspection-tucson', destination: '/services/sewer-camera-inspection', permanent: true },
      { source: '/drain-and-sewer/sewer-line-repair-tucson', destination: '/services/sewer-line-repair', permanent: true },
      { source: '/drain-and-sewer/trenchless-sewer-repair-replacement-tucson', destination: '/services/trenchless-repair', permanent: true },
      { source: '/drain-clearing-special', destination: '/services/drain-clearing-special', permanent: true },
      
      // ===========================================
      // ROOFING REDIRECTS
      // ===========================================
      { source: '/roofing', destination: '/services/roofing', permanent: true },
      { source: '/roofing-tucson-az', destination: '/services/residential-roof-repair', permanent: true },
      { source: '/roofing-tucson-az/commercial-roofing', destination: '/services/commercial-roof-repair', permanent: true },
      { source: '/roofing-tucson-az/commercial-roofing/roof-coating', destination: '/services/commercial-roof-coating', permanent: true },
      { source: '/roofing-tucson-az/commercial-roofing/roof-inspections', destination: '/services/commercial-roof-inspection', permanent: true },
      { source: '/roofing-tucson-az/commercial-roofing/roof-installation', destination: '/services/commercial-roof-installation', permanent: true },
      { source: '/roofing-tucson-az/commercial-roofing/roof-repair', destination: '/services/commercial-roof-repair', permanent: true },
      { source: '/roofing-tucson-az/commercial-roofing/roof-replacement', destination: '/services/commercial-roof-replacement', permanent: true },
      { source: '/roofing-tucson-az/residential-roofing', destination: '/services/residential-roof-repair', permanent: true },
      { source: '/roofing-tucson-az/residential-roofing/roof-coating', destination: '/services/residential-roof-coating', permanent: true },
      { source: '/roofing-tucson-az/residential-roofing/roof-inspection', destination: '/services/residential-roof-inspection', permanent: true },
      { source: '/roofing-tucson-az/residential-roofing/roof-installation', destination: '/services/residential-roof-installation', permanent: true },
      { source: '/roofing-tucson-az/residential-roofing/roof-repair', destination: '/services/residential-roof-repair', permanent: true },
      { source: '/roofing-tucson-az/residential-roofing/roof-replacements', destination: '/services/residential-roof-replacement', permanent: true },
      { source: '/roofing-tucson-az/residential-roofing/skylights', destination: '/services/skylight-installation', permanent: true },
      { source: '/roofing-tucson-az/residential-roofing/solar-tubular-lights', destination: '/services/skylight-installation', permanent: true },
      { source: '/roof-types', destination: '/services/roofing', permanent: true },
      { source: '/roof-types/flat-roof-repair', destination: '/services/flat-roofs', permanent: true },
      { source: '/roof-types/metal-roofing', destination: '/services/metal-roofs', permanent: true },
      { source: '/roof-types/pitched-roofs', destination: '/services/pitched-roofs', permanent: true },
      { source: '/roof-types/shingle-roofs', destination: '/services/shingle-roofs', permanent: true },
      { source: '/roof-types/tile-roofing', destination: '/services/tile-roofs', permanent: true },
      
      // ===========================================
      // SOLAR REDIRECTS
      // ===========================================
      { source: '/solar-tucson', destination: '/services/residential-solar-installation', permanent: true },
      { source: '/solar-tucson/commercial-solar-installations-tucson', destination: '/services/commercial-solar-installation', permanent: true },
      { source: '/solar-tucson/home-energy-audit-consultant-tucson', destination: '/services/home-energy-audit-tucson', permanent: true },
      { source: '/solar-tucson/solar-energy-monitoring-maintenance-plan', destination: '/services/solar-maintenance', permanent: true },
      { source: '/solar-tucson/solar-installers-tucson', destination: '/services/residential-solar-installation', permanent: true },
      { source: '/solar-tucson/solar-installers-tuscon', destination: '/services/residential-solar-installation', permanent: true },
      { source: '/solar-tucson/solar-panel-installation-cost-tucson', destination: '/services/solar-panel-costs', permanent: true },
      { source: '/solar-tucson/solar-powered-air-conditioner', destination: '/services/solar-ac-tucson', permanent: true },
      { source: '/solar-tucson/solar-tax-credits-tucson', destination: '/services/solar-panel-costs', permanent: true },
      { source: '/solar-energy-contractor-in-tucson', destination: '/services/residential-solar-installation', permanent: true },
      
      // ===========================================
      // ELECTRICAL REDIRECTS
      // ===========================================
      { source: '/electrical-tucson', destination: '/services/electrical-tucson', permanent: true },
      { source: '/electrical-tucson/ceiling-fan-installation-tucson', destination: '/services/ceiling-fan-installation', permanent: true },
      { source: '/electrical-tucson/circuit-breakers', destination: '/services/circuit-breakers', permanent: true },
      { source: '/electrical-tucson/electrical-repairs-tucson', destination: '/services/electrical-repair', permanent: true },
      { source: '/electrical-tucson/home-energy-upgrades-tucson', destination: '/services/home-energy-upgrades-tucson', permanent: true },
      { source: '/electrical-tucson/lighting-upgrades-tucson', destination: '/services/lighting-upgrades', permanent: true },
      { source: '/electrical-tucson/outdoor-and-motion-lighting-tucson', destination: '/services/outdoor-motion-lighting', permanent: true },
      { source: '/electrical-tucson/outlets-switches', destination: '/services/outlets-switches', permanent: true },
      { source: '/electrical-tucson/panel-upgrades-tucson', destination: '/services/electrical-panel-upgrades', permanent: true },
      { source: '/electrical-tucson/solar-installation-and-upgrades', destination: '/services/residential-solar-installation', permanent: true },
      { source: '/electrical-tucson/standby-generator-installation-and-repair', destination: '/services/generac-installation', permanent: true },
      { source: '/emergency-electrician-in-tucson', destination: '/services/electrical-repair', permanent: true },
      
      // ===========================================
      // SERVICE AREA REDIRECTS
      // ===========================================
      { source: '/service-areas/avra-valley', destination: '/service-areas/avra-valley', permanent: true },
      { source: '/service-areas/casa-grande', destination: '/service-areas/red-rock-casa-grande', permanent: true },
      { source: '/service-areas/casas-adobes', destination: '/service-areas/casas-adobes', permanent: true },
      { source: '/service-areas/catalina-foothills', destination: '/service-areas/catalina-foothills', permanent: true },
      { source: '/service-areas/catalina', destination: '/service-areas/saddlebrooke-catalina', permanent: true },
      { source: '/service-areas/corona-de-tucson', destination: '/service-areas/corona-de-tucson', permanent: true },
      { source: '/service-areas/drexel-alvernon', destination: '/service-areas/drexel-heights', permanent: true },
      { source: '/service-areas/drexel-heights', destination: '/service-areas/drexel-heights', permanent: true },
      { source: '/service-areas/east-tucson', destination: '/service-areas/east-tucson', permanent: true },
      { source: '/service-areas/green-valley', destination: '/service-areas/green-valley', permanent: true },
      { source: '/service-areas/little-town', destination: '/service-areas/tucson', permanent: true },
      { source: '/service-areas/marana', destination: '/service-areas/marana', permanent: true },
      { source: '/service-areas/marana/air-conditioning', destination: '/services/hvac-marana', permanent: true },
      { source: '/service-areas/marana/heating', destination: '/services/heating-marana', permanent: true },
      { source: '/service-areas/oro-valley', destination: '/service-areas/oro-valley', permanent: true },
      { source: '/service-areas/oro-valley/air-conditioning', destination: '/services/hvac-oro-valley', permanent: true },
      { source: '/service-areas/picture-rocks', destination: '/service-areas/picture-rocks', permanent: true },
      { source: '/service-areas/red-rock', destination: '/service-areas/red-rock-casa-grande', permanent: true },
      { source: '/service-areas/rillito', destination: '/service-areas/rillito', permanent: true },
      { source: '/service-areas/rita-ranch', destination: '/service-areas/rita-ranch', permanent: true },
      { source: '/service-areas/saddlebrooke', destination: '/service-areas/saddlebrooke-catalina', permanent: true },
      { source: '/service-areas/sahuarita', destination: '/service-areas/sahuarita', permanent: true },
      { source: '/service-areas/sahuarita/air-conditioning', destination: '/services/hvac-sahuarita', permanent: true },
      { source: '/service-areas/summit', destination: '/service-areas/tucson', permanent: true },
      { source: '/service-areas/tanque-verde', destination: '/service-areas/tanque-verde', permanent: true },
      { source: '/service-areas/three-points', destination: '/service-areas/tucson-estates', permanent: true },
      { source: '/service-areas/tortolita', destination: '/service-areas/tortolita', permanent: true },
      { source: '/service-areas/tucson-estates', destination: '/service-areas/tucson-estates', permanent: true },
      { source: '/service-areas/tucson', destination: '/service-areas/tucson', permanent: true },
      { source: '/service-areas/tucson/air-conditioning', destination: '/services/hvac-tucson', permanent: true },
      { source: '/service-areas/tucson/heating', destination: '/services/heating-tucson', permanent: true },
      { source: '/service-areas/vail', destination: '/service-areas/vail', permanent: true },
      { source: '/service-areas/vail/air-conditioning', destination: '/services/hvac-vail', permanent: true },
      { source: '/service-areas/saddle-brooke-catalina', destination: '/service-areas/saddlebrooke-catalina', permanent: true },
      
      // ===========================================
      // LEGACY /services/ NESTED PATH REDIRECTS
      // ===========================================
      { source: '/services/hvac/ac-repair', destination: '/services/ac-repair-tucson', permanent: true },
      { source: '/services/hvac/ac-installation', destination: '/services/ac-installation-tucson', permanent: true },
      { source: '/services/hvac/duct-cleaning', destination: '/services/duct-cleaning-tucson', permanent: true },
      { source: '/services/hvac/:path*', destination: '/services/:path*', permanent: true },
      { source: '/services/plumbing/water-heater-installation', destination: '/services/water-heater-installation', permanent: true },
      { source: '/services/plumbing/drain-cleaning', destination: '/services/drain-clearing', permanent: true },
      { source: '/services/plumbing/:path*', destination: '/services/:path*', permanent: true },
      { source: '/services/roofing/:path*', destination: '/services/:path*', permanent: true },
      { source: '/services/solar/solar-monitoring', destination: '/services/solar-maintenance', permanent: true },
      { source: '/services/solar/:path*', destination: '/services/:path*', permanent: true },
      { source: '/services/electrical/generator-installation', destination: '/services/generac-installation', permanent: true },
      { source: '/services/electrical/:path*', destination: '/services/:path*', permanent: true },
      { source: '/services/why-tucson-chooses-intelligent-design', destination: '/about', permanent: true },
      
      // ===========================================
      // BLOG POST REDIRECTS (Legacy flat URLs → /blog/[category]/[slug])
      // ===========================================
      // Solar blog posts
      { source: '/12-facts-you-didnt-know-about-solar-power-systems', destination: '/blog/solar/12-facts-you-didnt-know-about-solar-power-systems', permanent: true },
      { source: '/8-reasons-to-consider-solar-power-system-for-your-business', destination: '/blog/solar/8-reasons-to-consider-solar-power-system-for-your-business', permanent: true },
      { source: '/solar-energy-facts-people-should-know', destination: '/blog/solar/solar-energy-facts-people-should-know', permanent: true },
      { source: '/how-solar-power-systems-work-everything-you-need-to-know', destination: '/blog/solar/how-solar-power-systems-work-everything-you-need-to-know', permanent: true },
      { source: '/why-you-should-start-using-solar-power-systems-now', destination: '/blog/solar/why-you-should-start-using-solar-power-systems-now', permanent: true },
      { source: '/what-do-solar-panel-installers-do', destination: '/blog/solar/what-do-solar-panel-installers-do', permanent: true },
      { source: '/the-financial-impact-of-solar-energy', destination: '/blog/solar/the-financial-impact-of-solar-energy', permanent: true },
      { source: '/things-to-consider-before-installing-rooftop-solar-panels', destination: '/blog/solar/things-to-consider-before-installing-rooftop-solar-panels', permanent: true },
      { source: '/why-use-solar-air-conditioner-for-home', destination: '/blog/solar/why-use-solar-air-conditioner-for-home', permanent: true },
      { source: '/intelligent-design-moon-solar-60', destination: '/blog/home-tips/intelligent-design-moon-solar-60', permanent: true },
      
      // HVAC/AC blog posts
      { source: '/7-foolproof-ways-to-avoid-ac-repair-this-season', destination: '/blog/hvac/7-foolproof-ways-to-avoid-ac-repair-this-season', permanent: true },
      { source: '/how-long-do-air-conditioners-last', destination: '/blog/hvac/how-long-do-air-conditioners-last', permanent: true },
      { source: '/why-is-my-air-conditioning-unit-not-cooling', destination: '/blog/hvac/why-is-my-air-conditioning-unit-not-cooling', permanent: true },
      { source: '/what-is-the-average-air-conditioning-service-cost', destination: '/blog/hvac/what-is-the-average-air-conditioning-service-cost', permanent: true },
      { source: '/when-to-call-for-ac-repair', destination: '/blog/hvac/when-to-call-for-ac-repair', permanent: true },
      { source: '/tips-to-save-money-on-your-ac-repair-cost', destination: '/blog/hvac/tips-to-save-money-on-your-ac-repair-cost', permanent: true },
      { source: '/most-common-ac-repair-and-what-to-expect', destination: '/blog/hvac/most-common-ac-repair-and-what-to-expect', permanent: true },
      { source: '/our-emergency-hvac-services-taking-precautions-during-the-pandemic', destination: '/blog/hvac/our-emergency-hvac-services-taking-precautions-during-the-pan', permanent: true },
      { source: '/why-is-my-air-conditioning-working-downstairs-but-not-upstairs', destination: '/blog/hvac/ac-problems-why-is-my-ac-working-downstairs-but-not-upstairs', permanent: true },
      { source: '/how-much-does-a-new-ac-unit-cost-in-az', destination: '/blog/hvac/how-much-does-a-new-ac-unit-cost-in-az', permanent: true },
      { source: '/crucial-things-to-consider-before-replacing-your-air-conditioning-system', destination: '/blog/hvac/crucial-things-to-consider-before-replacing-your-air-conditio', permanent: true },
      { source: '/get-ready-for-summer-with-professional-air-conditioner-maintenance', destination: '/blog/hvac/get-ready-for-summer-with-professional-air-conditioner-mainte', permanent: true },
      { source: '/air-conditioning-in-tucson-get-cooler-this-summer', destination: '/blog/hvac/air-conditioning-in-tucson-get-cooler-this-summer', permanent: true },
      
      // Plumbing/Drain blog posts
      { source: '/top-drain-cleaning-tools-you-need', destination: '/blog/plumbing/top-drain-cleaning-tools-you-need', permanent: true },
      { source: '/why-you-shouldnt-overlook-drain-cleaning', destination: '/blog/plumbing/why-you-shouldnt-overlook-drain-cleaning', permanent: true },
      { source: '/importance-of-regular-maintenance-with-a-professional-plumber-in-tucson', destination: '/blog/plumbing/importance-of-regular-maintenance-with-a-professional-plumber', permanent: true },
      { source: '/troubleshooting-common-issues-during-or-after-a-repiping-project', destination: '/blog/home-tips/troubleshooting-common-issues-during-or-after-a-repiping-pro', permanent: true },
      { source: '/repiping-how-its-different-from-pipe-repair-and-why-you-may-need-it-more', destination: '/blog/plumbing/repiping-how-its-different-from-pipe-repair-and-why-you-may-', permanent: true },
      { source: '/discover-the-benefits-of-tankless-water-heaters', destination: '/blog/plumbing/discover-the-benefits-of-tankless-water-heaters', permanent: true },
      { source: '/water-heater-service', destination: '/services/water-heater-installation', permanent: true },
      { source: '/water-softener-repair', destination: '/services/water-softener-repair', permanent: true },
      
      // Location-specific blog posts
      { source: '/comprehensive-home-services-in-marana-more-than-just-a-business-were-your-neighbors', destination: '/blog/home-tips/comprehensive-home-services-in-marana-more-than-just-a-busin', permanent: true },
      { source: '/rita-ranch-elevate-your-home-life-with-intelligent-design', destination: '/blog/home-tips/rita-ranch-elevate-your-home-life-with-intelligent-design', permanent: true },
      { source: '/sahuarita-were-here-to-make-your-home-awesome', destination: '/blog/home-tips/sahuarita-were-here-to-make-your-home-awesome', permanent: true },
      { source: '/intelligent-design-your-partner-in-home-comfort-in-drexel-heights', destination: '/blog/home-tips/intelligent-design-your-partner-in-home-comfort-in-drexel-he', permanent: true },
      
      // Video/promo blog posts
      { source: '/int-des-gila-monster-60', destination: '/blog/home-tips/int-des-gila-monster-60', permanent: true },
      { source: '/intelligent-design-moon-solar-60', destination: '/blog/home-tips/intelligent-design-moon-solar-60', permanent: true },
      { source: '/intelligentdesign-heart-forever-60', destination: '/blog/home-tips/intelligentdesign-heart-forever-60', permanent: true },
      { source: '/intelligent-design-heart-forever-60', destination: '/blog/home-tips/intelligentdesign-heart-forever-60', permanent: true },
      
      // Additional blog catchall - redirect /blog to /blog/hvac
      { source: '/blog', destination: '/blog/hvac', permanent: true },
    ];
    
    return [...serviceRedirects, ...legacyRedirects];
  },
};

export default nextConfig;
