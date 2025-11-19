/**
 * Analyze WordPress blog posts and categorize them
 * This script extracts blog URLs from sitemaps and categorizes them
 */

const sitemap1Posts = `
https://www.idesignac.com/what-are-some-effective-strategies-to-reduce-ac-noise/
https://www.idesignac.com/how-much-does-a-new-air-conditioner-cost/
https://www.idesignac.com/can-you-lower-your-ac-costs-with-suntrac-air-conditioning-systems/
https://www.idesignac.com/complete-guide-to-hvac-ac-repair-in-tucson-faqs-answered/
https://www.idesignac.com/is-your-ac-making-you-sick-the-hidden-dangers-of-dirty-air-filters/
https://www.idesignac.com/what-does-a-professional-ac-service-include-a-complete-checklist/
https://www.idesignac.com/what-to-do-if-your-solar-company-closed-in-tucson/
https://www.idesignac.com/how-much-does-a-new-ac-unit-cost-in-az/
https://www.idesignac.com/why-diy-ac-installation-can-cost-you-more-in-the-long-run/
https://www.idesignac.com/mastering-winter-pipe-protection-in-freezing-weather/
https://www.idesignac.com/why-is-my-ac-not-cooling/
https://www.idesignac.com/intelligent-design-elevates-hvac-tune-up-standards-with-unprecedented-82-point-ac-system-inspection/
https://www.idesignac.com/intelligent-design-solar-plumbing-air-offers-lowest-cost-water-filtration-systems-in-light-of-shocking-water-study/
https://www.idesignac.com/preparing-the-roof-for-spring-storms-ensuring-safety-and-longevity/
https://www.idesignac.com/preparing-the-home-for-summer-essential-tips-from-intelligent-design-air-conditioning-plumbing-solar-electric/
https://www.idesignac.com/intelligent-design-air-conditioning-expands-services-with-comprehensive-solar-solutions/
https://www.idesignac.com/top-10-reasons-to-move-to-tucson/
https://www.idesignac.com/intelligent-design-serving-the-littletown-community-with-unmatched-home-services/
https://www.idesignac.com/air-conditioner-solutions-by-intelligent-design/
https://www.idesignac.com/impact-of-indoor-air-quality-on-your-health-and-comfort/
https://www.idesignac.com/the-importance-of-air-conditioner-sizing-how-to-choose-the-right-ac-unit-for-optimal-comfort-and-efficiency/
https://www.idesignac.com/choosing-the-right-hvac-system-what-homeowners-need-to-know-for-comfort-and-efficiency/
https://www.idesignac.com/why-summer-ac-tune-ups-are-essential-for-comfort-and-efficiency/
https://www.idesignac.com/the-crucial-role-of-plumbing-inspections-and-water-testing-before-the-school-year-and-holiday-season/
https://www.idesignac.com/how-to-fix-your-ac-a-simple-guide-for-everyone/
https://www.idesignac.com/choosing-the-right-roofing-company-a-comprehensive-guide/
https://www.idesignac.com/repair-or-replace-making-the-right-decision-for-hvac-systems/
https://www.idesignac.com/optimizing-air-conditioner-use-in-summer-best-practices-and-the-role-of-smart-thermostats/
https://www.idesignac.com/the-importance-of-whole-home-solar-systems-during-power-outages/
https://www.idesignac.com/why-is-my-air-conditioning-working-downstairs-but-not-upstairs/
https://www.idesignac.com/does-turning-off-your-a-c-when-youre-not-home-actually-save-money/
https://www.idesignac.com/preparing-your-hvac-system-for-summer-essential-steps-for-optimal-performance/
https://www.idesignac.com/choosing-the-best-ac-repair-near-me-essential-tips-for-finding-reliable-service/
https://www.idesignac.com/choosing-the-right-hvac-system-navigating-the-options-when-hvac-systems-fail/
https://www.idesignac.com/maximizing-energy-conservation-with-smart-thermostats/
https://www.idesignac.com/smart-strategies-to-stay-cool-effective-budget-friendly-tips-for-summer-home-cooling/
https://www.idesignac.com/is-a-burning-smell-normal-when-i-turn-on-the-heater/
https://www.idesignac.com/what-is-off-grid-solar-power-system/
https://www.idesignac.com/8-important-questions-to-ask-solar-panel-installers-before-hiring-them/
https://www.idesignac.com/3-types-of-solar-power-systems-which-one-is-right-for-you/
https://www.idesignac.com/13-uses-of-solar-energy-the-ultimate-guide-for-home-and-business-owners/
https://www.idesignac.com/comprehensive-home-services-in-oro-valley-more-than-just-a-business-its-a-commitment-to-the-community/
https://www.idesignac.com/benefits-of-hiring-professional-solar-panel-installers/
https://www.idesignac.com/air-conditioning-tucson-how-to-choose-the-right-air-conditioning-unit-for-your-home/
https://www.idesignac.com/air-conditioning-tucson-tips-to-lower-energy-bills-and-save-money/
https://www.idesignac.com/tucson-waters-epa-warning/
https://www.idesignac.com/intelligent-design-your-home-service-partner-in-rillito-arizona/
https://www.idesignac.com/intelligent-design-elevating-drexel-alvernons-home-comforts-one-service-at-a-time/
https://www.idesignac.com/intelligent-design-elevating-tanque-verdes-home-experience-2/
https://www.idesignac.com/serving-the-three-points-community-more-than-just-home-services/
https://www.idesignac.com/intelligent-design-your-go-to-home-service-provider-in-avra-valley/
https://www.idesignac.com/intelligent-design-your-trusted-home-service-provider-in-summit-arizona/
https://www.idesignac.com/comprehensive-home-services-in-tortolita-more-than-just-a-business-its-a-community-commitment/
https://www.idesignac.com/intelligent-design-were-not-just-in-your-neighborhood-were-part-of-it/
https://www.idesignac.com/your-neighborhood-partner-in-picture-rocks-intelligent-designs-home-services/
https://www.idesignac.com/serving-catalina-arizona-more-than-just-home-services-its-about-community/
https://www.idesignac.com/intelligent-design-catalina-foothills-premier-choice-for-home-services/
https://www.idesignac.com/intelligent-design-your-partner-in-home-comfort-in-drexel-heights/
https://www.idesignac.com/cost-of-ac-installation-in-tucson/
https://www.idesignac.com/intelligent-design-pioneering-home-comfort-in-tucson-estates/
https://www.idesignac.com/intelligent-design-transforming-homes-in-east-tucson/
https://www.idesignac.com/casa-grande-elevate-your-living-experience-with-intelligent-design/
https://www.idesignac.com/red-rock-unlock-a-new-level-of-home-comfort-with-intelligent-design/
https://www.idesignac.com/casas-adobes-experience-home-like-never-before-with-intelligent-design/
https://www.idesignac.com/green-valley-meet-your-homes-new-best-friend-intelligent-design/
https://www.idesignac.com/rita-ranch-elevate-your-home-life-with-intelligent-design/
https://www.idesignac.com/hey-vail-your-homes-best-friend-is-here/
https://www.idesignac.com/sahuarita-were-here-to-make-your-home-awesome/
https://www.idesignac.com/hey-saddlebrook-weve-got-your-home-covered/
https://www.idesignac.com/comprehensive-home-services-in-marana-more-than-just-a-business-were-your-neighbors/
https://www.idesignac.com/ac-heating-plumbing-solar-roofing-electrical/
https://www.idesignac.com/solar-panel-efficiency-a-comprehensive-guide/
https://www.idesignac.com/why-every-home-needs-water-filtration-a-must-read-guide/
https://www.idesignac.com/the-ultimate-guide-to-hvac-maintenance-in-tucson-az/
https://www.idesignac.com/maximizing-solar-efficiency-steps-to-harness-the-suns-power/
https://www.idesignac.com/the-importance-of-super-cooling-for-hvac-efficiency-in-the-summer/
https://www.idesignac.com/solar-myths-vs-facts-dispelling-common-misconceptions/
https://www.idesignac.com/monsoon-humidity-central-air-system/
https://www.idesignac.com/drain-snakes-your-must-have-tool-for-efficient-drain-cleaning/
https://www.idesignac.com/why-solar-energy-is-the-best-source-of-energy/
https://www.idesignac.com/crucial-things-to-consider-before-replacing-your-air-conditioning-system/
https://www.idesignac.com/expert-tips-for-maintaining-your-tucson-air-conditioning-system/
https://www.idesignac.com/how-repiping-can-improve-your-home-water-quality/
https://www.idesignac.com/how-solar-power-systems-enhance-your-homes-value-and-resale/
https://www.idesignac.com/understanding-the-importance-of-air-conditioning-in-the-tucson-climate/
https://www.idesignac.com/understanding-the-functionality-of-solar-power-systems/
https://www.idesignac.com/copper-vs-pex-choosing-the-right-material-for-repiping/
https://www.idesignac.com/the-hidden-dangers-of-neglecting-drain-cleaning/
https://www.idesignac.com/why-local-solar-panel-installers-are-a-smart-choice/
https://www.idesignac.com/top-questions-to-ask-your-ac-repair-technician/
https://www.idesignac.com/what-are-the-financial-benefits-of-solar-energy/
https://www.idesignac.com/why-choose-intelligent-design-team-for-your-ac-replacement-needs/
https://www.idesignac.com/common-drain-cleaning-mistakes-you-must-avoid/
https://www.idesignac.com/the-environmental-benefits-of-solar-power-systems/
https://www.idesignac.com/common-repiping-mistakes-and-how-to-avoid-them/
https://www.idesignac.com/ways-to-maximize-your-solar-energy-savings/
https://www.idesignac.com/drain-cleaning-solutions-that-actually-work/
https://www.idesignac.com/importance-of-regular-maintenance-with-a-professional-plumber-in-tucson/
https://www.idesignac.com/common-mistakes-to-avoid-when-hiring-a-solar-panel-installer/
https://www.idesignac.com/diy-guide-to-basic-ac-repairs/
https://www.idesignac.com/how-to-know-when-to-diy-ac-repair-and-when-to-call-the-pros/
https://www.idesignac.com/advantages-of-using-local-plumbers-in-tucson/
https://www.idesignac.com/how-often-does-ac-need-to-be-replaced/
https://www.idesignac.com/how-long-should-ac-last-in-arizona/
https://www.idesignac.com/the-best-materials-for-repiping-a-home/
https://www.idesignac.com/steps-to-take-when-choosing-a-solar-panel-installer/
https://www.idesignac.com/how-to-make-your-own-drain-cleaner-at-home/
https://www.idesignac.com/how-does-solar-energy-work/
https://www.idesignac.com/how-to-identify-the-top-solar-panel-installers-near-you/
https://www.idesignac.com/key-questions-to-ask-before-hiring-a-plumber-in-tucson/
https://www.idesignac.com/solar-power-system-advantages-and-disadvantages/
https://www.idesignac.com/the-best-types-of-air-conditioners-for-tucson-arizona/
https://www.idesignac.com/what-is-involved-in-repiping-a-house/
https://www.idesignac.com/should-you-diy-or-hire-a-professional-for-drain-cleaning/
https://www.idesignac.com/types-of-services-offered-by-expert-solar-panel-installer/
https://www.idesignac.com/how-to-find-licensed-and-experienced-plumbers-in-tucson/
https://www.idesignac.com/tips-for-finding-the-right-ac-repair-technician/
https://www.idesignac.com/troubleshooting-common-issues-during-or-after-a-repiping-project/
https://www.idesignac.com/planning-for-long-term-maintenance-of-solar-power-systems/
https://www.idesignac.com/everything-you-need-to-know-about-advanced-hvac-solutions/
https://www.idesignac.com/air-conditioning-tucson-why-you-need-one-for-your-home/
https://www.idesignac.com/most-common-ac-repair-and-what-to-expect/
https://www.idesignac.com/how-plumbers-in-tucson-can-help-you-deal-with-a-plumbing-emergency/
https://www.idesignac.com/how-solar-panel-installers-can-save-you-money/
https://www.idesignac.com/top-signs-you-need-ac-replacement-for-your-business/
https://www.idesignac.com/why-is-solar-energy-important-for-our-future/
`.trim().split('\n').filter(Boolean);

const sitemap2Posts = `
https://www.idesignac.com/tips-for-choosing-the-right-drain-cleaning-company/
https://www.idesignac.com/facts-about-solar-energy-and-reasons-to-get-solar-panels/
https://www.idesignac.com/common-ac-problems-that-only-a-professional-ac-repair-can-fix/
https://www.idesignac.com/why-hiring-a-solar-panel-installers-important/
https://www.idesignac.com/plumbers-tucson-the-importance-of-plumbing-inspection/
https://www.idesignac.com/the-ins-and-outs-of-repiping-your-home/
https://www.idesignac.com/12-facts-you-didnt-know-about-solar-power-systems/
https://www.idesignac.com/the-ultimate-guide-to-drain-cleaning/
https://www.idesignac.com/out-with-the-old-in-with-the-new-is-ac-replacement-the-one-for-you/
https://www.idesignac.com/why-solar-energy-is-the-future/
https://www.idesignac.com/8-reasons-why-you-should-use-solar-power/
https://www.idesignac.com/how-solar-panel-installers-can-benefit-homeowners/
https://www.idesignac.com/plumbing-emergencies-you-should-never-ignore-in-plumbers-tucson/
https://www.idesignac.com/10-reasons-you-should-always-call-an-ac-repair-specialist/
https://www.idesignac.com/air-conditioning-in-tucson-get-cooler-this-summer/
https://www.idesignac.com/8-reasons-to-consider-solar-power-system-for-your-business/
https://www.idesignac.com/why-you-should-consider-repiping-your-home/
https://www.idesignac.com/the-leading-choice-for-pipe-lining-in-tucson/
https://www.idesignac.com/solar-energy-how-to-get-the-most-out-of-your-installation/
https://www.idesignac.com/9-warning-signs-you-need-a-drain-cleaning-service/
https://www.idesignac.com/top-10-benefits-of-ac-replacement-for-your-home/
https://www.idesignac.com/tips-for-avoiding-costly-plumbing-repairs/
https://www.idesignac.com/how-ac-repair-can-actually-save-you-money/
https://www.idesignac.com/the-importance-of-drain-cleaning-maintenance/
https://www.idesignac.com/how-to-choose-the-best-plumber-in-tucson/
https://www.idesignac.com/ac-replacement-why-its-important-and-how-to-do-it/
https://www.idesignac.com/how-solar-energy-can-save-you-money/
https://www.idesignac.com/signs-you-need-to-call-for-ac-repair/
https://www.idesignac.com/why-is-my-toilet-running/
https://www.idesignac.com/what-is-the-most-efficient-way-to-run-air-conditioning/
https://www.idesignac.com/why-hire-professionals-to-clean-air-conditioner/
https://www.idesignac.com/how-long-do-air-conditioners-last/
https://www.idesignac.com/reasons-why-you-should-use-solar-power/
https://www.idesignac.com/ways-to-keep-your-ac-unit-running-smoothly-this-summer/
https://www.idesignac.com/how-to-make-an-old-home-more-energy-efficient/
https://www.idesignac.com/who-to-call-for-water-heater-repair/
https://www.idesignac.com/why-use-solar-air-conditioner-for-home/
https://www.idesignac.com/things-to-consider-before-installing-rooftop-solar-panels/
https://www.idesignac.com/why-you-should-invest-in-water-leak-detection-services/
https://www.idesignac.com/discover-the-benefits-of-tankless-water-heaters/
https://www.idesignac.com/importance-of-proper-ac-installation-tucson/
https://www.idesignac.com/desert-shield-water-filtration-the-smart-choice-for-tucson-homes/
https://www.idesignac.com/our-emergency-hvac-services-taking-precautions-during-the-pandemic/
https://www.idesignac.com/spotlight-on-the-indoor-air-purifier-from-intelligent-design/
https://www.idesignac.com/answering-questions-about-solar-panel-installation/
https://www.idesignac.com/schedule-an-air-conditioning-service/
https://www.idesignac.com/spotlight-on-solar-air-conditioner/
https://www.idesignac.com/the-importance-of-proper-air-conditioning-installation/
https://www.idesignac.com/discover-the-benefits-of-suntrac-air-conditioning-systems/
https://www.idesignac.com/get-ready-for-summer-with-professional-air-conditioner-maintenance/
https://www.idesignac.com/why-is-my-air-conditioner-making-noise/
https://www.idesignac.com/why-is-my-air-conditioning-unit-not-cooling/
https://www.idesignac.com/what-temperature-should-i-set-my-thermostat/
https://www.idesignac.com/how-come-my-air-conditioning-unit-smells-bad/
https://www.idesignac.com/what-is-the-cost-of-running-fans-vs-air-conditioning/
https://www.idesignac.com/does-air-conditioning-use-gas-or-electricity/
https://www.idesignac.com/are-there-any-known-air-conditioning-health-risks/
https://www.idesignac.com/what-is-the-average-air-conditioning-service-cost/
https://www.idesignac.com/are-there-any-health-benefits-of-air-conditioning/
https://www.idesignac.com/how-much-does-it-cost-to-install-central-air-conditioning/
https://www.idesignac.com/what-kind-of-air-conditioning-preventive-maintenance-do-i-need/
https://www.idesignac.com/how-do-i-choose-an-air-conditioning-unit/
https://www.idesignac.com/what-is-an-anode-rod/
https://www.idesignac.com/permit-to-install-a-new-water-heater/
https://www.idesignac.com/90-of-arizona-ac-systems-have-an-installation-flaw/
https://www.idesignac.com/what-should-i-expect-when-i-ask-for-an-hvac-estimate/
https://www.idesignac.com/why-did-hot-water-come-out-of-my-cold-water-tap/
https://www.idesignac.com/what-is-the-best-ac-unit-brand/
https://www.idesignac.com/what-are-the-ideal-thermostat-settings/
https://www.idesignac.com/is-it-safe-to-use-chemical-drain-cleaners/
https://www.idesignac.com/what-are-the-most-common-plumbing-issues-in-homes/
https://www.idesignac.com/how-do-i-qualify-for-the-new-ac-unit-rebates/
https://www.idesignac.com/how-long-do-ac-units-last/
https://www.idesignac.com/is-a-tucson-solar-home-energy-audit-worth-it/
https://www.idesignac.com/what-does-the-seer-rating-mean-for-air-conditioners/
https://www.idesignac.com/how-does-ac-work/
https://www.idesignac.com/how-long-should-your-ac-run-during-the-day/
https://www.idesignac.com/how-often-should-i-schedule-air-conditioning-service/
`.trim().split('\n').filter(Boolean);

const allPosts = [...sitemap1Posts, ...sitemap2Posts];

interface CategoryInfo {
  name: string;
  count: number;
  posts: string[];
}

const categories: Record<string, CategoryInfo> = {
  hvac: { name: 'HVAC & Air Conditioning', count: 0, posts: [] },
  solar: { name: 'Solar Energy', count: 0, posts: [] },
  plumbing: { name: 'Plumbing', count: 0, posts: [] },
  roofing: { name: 'Roofing', count: 0, posts: [] },
  electrical: { name: 'Electrical', count: 0, posts: [] },
  'home-tips': { name: 'Home Tips', count: 0, posts: [] },
  area: { name: 'Area-Specific (redirect to area pages)', count: 0, posts: [] },
};

// Area-specific keywords
const areaKeywords = [
  'oro-valley', 'marana', 'drexel-heights', 'casas-adobes', 'tucson-estates',
  'tortolita', 'picture-rocks', 'rillito', 'cortaro', 'avra-valley',
  'vail', 'sahuarita', 'green-valley', 'casa-grande', 'red-rock',
  'rita-ranch', 'saddlebrook', 'catalina', 'tanque-verde', 'three-points',
  'summit', 'littletown', 'east-tucson', 'catalina-foothills', 'drexel-alvernon'
];

// Categorize each post
allPosts.forEach(url => {
  const slug = url.replace('https://www.idesignac.com/', '').replace('/', '');
  
  // Check if it's an area-specific post
  const isAreaPost = areaKeywords.some(area => slug.includes(area));
  if (isAreaPost) {
    categories.area.count++;
    categories.area.posts.push(url);
    return;
  }
  
  // Categorize by keywords
  if (slug.includes('solar') || slug.includes('panel')) {
    categories.solar.count++;
    categories.solar.posts.push(url);
  } else if (slug.includes('plumb') || slug.includes('pipe') || slug.includes('drain') || 
             slug.includes('water-heater') || slug.includes('leak') || slug.includes('toilet')) {
    categories.plumbing.count++;
    categories.plumbing.posts.push(url);
  } else if (slug.includes('roof')) {
    categories.roofing.count++;
    categories.roofing.posts.push(url);
  } else if (slug.includes('electric')) {
    categories.electrical.count++;
    categories.electrical.posts.push(url);
  } else if (slug.includes('ac-') || slug.includes('hvac') || slug.includes('air-condition') || 
             slug.includes('heating') || slug.includes('cooling') || slug.includes('thermostat')) {
    categories.hvac.count++;
    categories.hvac.posts.push(url);
  } else {
    // Default to home tips
    categories['home-tips'].count++;
    categories['home-tips'].posts.push(url);
  }
});

console.log('\n=== BLOG MIGRATION ANALYSIS ===\n');
console.log(`Total blog posts found: ${allPosts.length}\n`);
console.log('Category Breakdown:');
console.log('─'.repeat(50));

Object.entries(categories).forEach(([slug, info]) => {
  console.log(`${info.name}: ${info.count} posts`);
});

console.log('\n' + '─'.repeat(50));
console.log(`\nTotal categorized: ${Object.values(categories).reduce((sum, cat) => sum + cat.count, 0)}`);

// Write categorized URLs to files for processing
console.log('\n=== Sample URLs by Category ===\n');
Object.entries(categories).forEach(([slug, info]) => {
  if (info.posts.length > 0) {
    console.log(`\n${info.name} (${info.count}):`);
    info.posts.slice(0, 5).forEach(url => {
      console.log(`  - ${url}`);
    });
    if (info.posts.length > 5) {
      console.log(`  ... and ${info.posts.length - 5} more`);
    }
  }
});
