/**
 * Internal Linking Taxonomy for SEO
 * Maps blog categories to relevant service pages, location pages, and related content
 */

// Blog category to service hub mapping
export const categoryToServiceHub: Record<string, { name: string; url: string }> = {
  'hvac': { name: 'HVAC Services', url: '/services/hvac' },
  'plumbing': { name: 'Plumbing Services', url: '/services/plumbing' },
  'solar': { name: 'Solar Services', url: '/services/solar' },
  'electrical': { name: 'Electrical Services', url: '/services/electrical' },
  'roofing': { name: 'Roofing Services', url: '/services/roofing' },
  'home-tips': { name: 'Home Services', url: '/services/hvac' },
  'water-heater': { name: 'Water Heater Services', url: '/services/plumbing' },
  'drain-sewer': { name: 'Drain & Sewer Services', url: '/services/plumbing' },
  'indoor-air-quality': { name: 'Indoor Air Quality', url: '/services/hvac' },
};

// Blog category to related service pages (2-3 most relevant services per category)
export const categoryToServices: Record<string, Array<{ name: string; url: string; description: string }>> = {
  'hvac': [
    { name: 'AC Repair', url: '/ac-repair-tucson', description: 'Fast, reliable AC repair service' },
    { name: 'AC Installation', url: '/services/ac-installation-tucson', description: 'Professional AC installation' },
    { name: 'AC Tune-Up', url: '/services/ac-tuneup-tucson', description: 'Preventive maintenance service' },
  ],
  'plumbing': [
    { name: 'Leak Detection', url: '/services/leak-detection', description: 'Advanced leak detection service' },
    { name: 'Water Heaters', url: '/services/water-heaters', description: 'Water heater repair & installation' },
    { name: 'Drain Clearing', url: '/services/drain-clearing', description: 'Professional drain cleaning' },
  ],
  'solar': [
    { name: 'Residential Solar', url: '/services/residential-solar-installation', description: 'Home solar installation' },
    { name: 'Commercial Solar', url: '/services/commercial-solar-installation', description: 'Business solar solutions' },
    { name: 'Solar Maintenance', url: '/services/solar-maintenance', description: 'Panel maintenance & repair' },
  ],
  'electrical': [
    { name: 'Panel Upgrades', url: '/services/electrical-panel-upgrades', description: 'Electrical panel services' },
    { name: 'Lighting Upgrades', url: '/services/lighting-upgrades', description: 'Modern lighting solutions' },
    { name: 'Generator Installation', url: '/services/generac-installation', description: 'Whole-home generators' },
  ],
  'roofing': [
    { name: 'Roof Repair', url: '/services/residential-roof-repair', description: 'Expert roof repairs' },
    { name: 'Roof Coating', url: '/services/residential-roof-coating', description: 'Protective roof coatings' },
    { name: 'Roof Inspection', url: '/services/residential-roof-inspection', description: 'Comprehensive inspections' },
  ],
  'home-tips': [
    { name: 'Home Energy Audit', url: '/services/home-energy-audit', description: 'Energy efficiency assessment' },
    { name: 'Smart Thermostat', url: '/services/smart-thermostat-installation', description: 'Smart home upgrades' },
    { name: 'Indoor Air Quality', url: '/services/indoor-air-quality', description: 'Improve your air quality' },
  ],
  'water-heater': [
    { name: 'Water Heater Installation', url: '/services/water-heater-installation', description: 'New water heater install' },
    { name: 'Water Heater Repair', url: '/services/water-heater-repair', description: 'Repair & maintenance' },
    { name: 'Tankless Water Heaters', url: '/services/hybrid-water-heaters', description: 'Hybrid & tankless options' },
  ],
  'drain-sewer': [
    { name: 'Drain Clearing', url: '/services/drain-clearing', description: 'Professional drain cleaning' },
    { name: 'Sewer Camera Inspection', url: '/services/sewer-camera-inspection', description: 'Video pipe inspection' },
    { name: 'Sewer Line Repair', url: '/services/sewer-line-repair', description: 'Sewer repair services' },
  ],
  'indoor-air-quality': [
    { name: 'Indoor Air Quality', url: '/services/indoor-air-quality', description: 'IAQ solutions' },
    { name: 'Duct Repair', url: '/services/duct-repair', description: 'Ductwork services' },
    { name: 'AC Tune-Up', url: '/services/ac-tuneup-tucson', description: 'HVAC maintenance' },
  ],
};

// Top service areas for internal linking (prioritized by search volume)
export const topServiceAreas = [
  { name: 'Tucson', slug: 'tucson', zipCodes: ['85701', '85704', '85710', '85718', '85741'] },
  { name: 'Oro Valley', slug: 'oro-valley', zipCodes: ['85737', '85755'] },
  { name: 'Marana', slug: 'marana', zipCodes: ['85653', '85658', '85742', '85743'] },
  { name: 'Vail', slug: 'vail', zipCodes: ['85641'] },
  { name: 'Sahuarita', slug: 'sahuarita', zipCodes: ['85629'] },
  { name: 'Green Valley', slug: 'green-valley', zipCodes: ['85614', '85622'] },
  { name: 'Catalina Foothills', slug: 'catalina-foothills', zipCodes: ['85718', '85750'] },
  { name: 'Rita Ranch', slug: 'rita-ranch', zipCodes: ['85747'] },
  { name: 'Tanque Verde', slug: 'tanque-verde', zipCodes: ['85749'] },
  { name: 'Casas Adobes', slug: 'casas-adobes', zipCodes: ['85704', '85741', '85742'] },
];

// Service hub to related blog categories
export const serviceToCategories: Record<string, string[]> = {
  'hvac': ['hvac', 'home-tips', 'indoor-air-quality'],
  'plumbing': ['plumbing', 'water-heater', 'drain-sewer'],
  'solar': ['solar', 'home-tips'],
  'electrical': ['electrical', 'home-tips'],
  'roofing': ['roofing', 'home-tips'],
};

// Get related services for a blog category
export function getRelatedServicesForCategory(category: string): Array<{ name: string; url: string; description: string }> {
  return categoryToServices[category] || categoryToServices['home-tips'];
}

// Get service hub for a blog category
export function getServiceHubForCategory(category: string): { name: string; url: string } {
  return categoryToServiceHub[category] || categoryToServiceHub['home-tips'];
}

// Get top service areas for internal linking
export function getTopServiceAreas(limit: number = 5): typeof topServiceAreas {
  return topServiceAreas.slice(0, limit);
}

// Generate service-location URLs for a category
export function getServiceLocationUrls(category: string, limit: number = 4): Array<{ name: string; url: string }> {
  const servicePrefix: Record<string, string> = {
    'hvac': 'hvac',
    'plumbing': 'plumbing',
    'solar': 'solar-installation',
    'electrical': 'electrical',
    'roofing': 'roofing',
    'home-tips': 'hvac',
    'water-heater': 'plumbing',
    'drain-sewer': 'drain-clearing',
    'indoor-air-quality': 'hvac',
  };

  const prefix = servicePrefix[category] || 'hvac';
  const areas = getTopServiceAreas(limit);
  
  return areas.map(area => ({
    name: `${area.name} Services`,
    url: `/services/${prefix}-${area.slug}`,
  }));
}

// Get blog categories for a service type
export function getCategoriesForService(service: string): string[] {
  return serviceToCategories[service] || ['home-tips'];
}
