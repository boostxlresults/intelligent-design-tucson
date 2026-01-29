/**
 * Comprehensive Location SEO Data for Tucson Metro Areas
 * Enhanced ZIP code coverage, local landmarks, and climate-specific content for AI SEO
 */

export interface LocationSEOData {
  slug: string;
  name: string;
  zipCodes: string[];
  neighborhoods: string[];
  landmarks: string[];
  climateInfo: string;
  localIssues: string[];
  population?: string;
  medianHomeValue?: string;
}

export const tucsonMetroLocations: LocationSEOData[] = [
  {
    slug: 'tucson',
    name: 'Tucson',
    zipCodes: [
      '85193', '85194', '85614', '85622', '85629', '85641', '85645', '85653', '85658',
      '85701', '85702', '85704', '85705', '85710', '85711', '85712', '85713', '85714', 
      '85715', '85716', '85717', '85718', '85719', '85730', '85735', '85737', '85739', 
      '85741', '85742', '85743', '85746', '85747', '85748', '85749', '85750', '85755', '85757'
    ],
    neighborhoods: ['Downtown Tucson', 'Midtown', 'Sam Hughes', 'El Presidio', 'Armory Park', 'Barrio Viejo', 'Fourth Avenue', 'University of Arizona area'],
    landmarks: ['University of Arizona', 'Tucson Convention Center', 'Reid Park', 'Tucson Botanical Gardens', 'Pima Air & Space Museum'],
    climateInfo: 'Hot desert climate with summer temperatures often exceeding 100°F. Monsoon season (July-September) brings heavy rain and dust storms.',
    localIssues: ['AC strain during extreme heat', 'Monsoon storm damage', 'Hard water mineral buildup', 'Dust and air quality concerns'],
    population: '545,000+',
    medianHomeValue: '$305,000'
  },
  {
    slug: 'oro-valley',
    name: 'Oro Valley',
    zipCodes: ['85704', '85737', '85739', '85755'],
    neighborhoods: ['Rancho Vistoso', 'Sun City Oro Valley', 'Pusch Ridge', 'Arroyo Grande', 'Honey Bee Canyon'],
    landmarks: ['Steam Pump Ranch', 'Oro Valley Marketplace', 'Catalina State Park', 'Pusch Ridge'],
    climateInfo: 'Slightly cooler than central Tucson due to higher elevation. Protected mountain views with excellent air quality.',
    localIssues: ['Higher elevation AC requirements', 'Flash flood zones', 'Wildlife encounters', 'Brush fire concerns'],
    population: '47,000+',
    medianHomeValue: '$420,000'
  },
  {
    slug: 'marana',
    name: 'Marana',
    zipCodes: ['85653', '85658', '85742', '85743'],
    neighborhoods: ['Dove Mountain', 'Continental Ranch', 'Gladden Farms', 'Saguaro Bloom', 'The Highlands'],
    landmarks: ['Dove Mountain', 'Ritz-Carlton Dove Mountain', 'Marana Regional Airport', 'Tortolita Mountain Park'],
    climateInfo: 'Similar desert climate to Tucson. Northwest location offers mountain views and newer construction.',
    localIssues: ['New construction HVAC sizing', 'Desert landscaping irrigation', 'Expansion growth infrastructure', 'Hard water treatment'],
    population: '50,000+',
    medianHomeValue: '$375,000'
  },
  {
    slug: 'vail',
    name: 'Vail',
    zipCodes: ['85641'],
    neighborhoods: ['Empire Ranch', 'Del Lago', 'Sycamore Canyon', 'Rincon Vista', 'Civano'],
    landmarks: ['Colossal Cave Mountain Park', 'Cienega Creek Natural Preserve', 'Empire Ranch Historical Site'],
    climateInfo: 'Southeast Tucson location with slightly higher elevation. Growing family community with newer homes.',
    localIssues: ['Well water systems common', 'Septic system maintenance', 'Higher cooling demands', 'New construction warranty work'],
    population: '15,000+',
    medianHomeValue: '$340,000'
  },
  {
    slug: 'sahuarita',
    name: 'Sahuarita',
    zipCodes: ['85629', '85614'],
    neighborhoods: ['Rancho Sahuarita', 'Madera Highlands', 'Quail Creek', 'Mission Highlands', 'Las Campanas'],
    landmarks: ['Titan Missile Museum', 'Rancho Sahuarita Lake Park', 'Anamax Park'],
    climateInfo: 'Southern Tucson suburb with active adult communities. Hot summers require reliable AC systems.',
    localIssues: ['Active adult community needs', 'Solar installation opportunities', 'Hard water treatment', 'Energy efficiency upgrades'],
    population: '32,000+',
    medianHomeValue: '$320,000'
  },
  {
    slug: 'green-valley',
    name: 'Green Valley',
    zipCodes: ['85614', '85622'],
    neighborhoods: ['Green Valley Pecan', 'Canoa Ranch', 'Desert Hills', 'San Ignacio', 'Santa Rita Springs'],
    landmarks: ['Madera Canyon', 'San Xavier del Bac Mission', 'Tubac Presidio State Historic Park', 'Fred Lawrence Whipple Observatory'],
    climateInfo: 'Retirement community south of Tucson. Lower humidity and slightly higher elevation provide comfortable desert living.',
    localIssues: ['Senior-friendly services needed', 'Medical equipment electrical needs', 'Accessibility modifications', 'Energy efficiency for fixed incomes'],
    population: '22,000+',
    medianHomeValue: '$280,000'
  },
  {
    slug: 'catalina-foothills',
    name: 'Catalina Foothills',
    zipCodes: ['85718', '85750', '85749'],
    neighborhoods: ['Skyline Country Club', 'Ventana Canyon', 'Canyon Ranch', 'Finisterra', 'La Paloma'],
    landmarks: ['Sabino Canyon', 'Ventana Canyon Resort', 'St. Philips Plaza', 'Loews Ventana Canyon Resort'],
    climateInfo: 'Prestigious foothill location with cooler temperatures and stunning mountain views. Premium homes require premium service.',
    localIssues: ['High-end HVAC systems', 'Pool equipment service', 'Luxury home electrical needs', 'Mountain terrain access'],
    population: '50,000+',
    medianHomeValue: '$650,000'
  },
  {
    slug: 'rita-ranch',
    name: 'Rita Ranch',
    zipCodes: ['85747', '85730'],
    neighborhoods: ['Rita Ranch', 'Rancho Del Lago', 'Pantano', 'Sunrise at Rita Ranch'],
    landmarks: ['Rita Ranch Park', 'Pantano River Park', 'Rita Road Commercial District'],
    climateInfo: 'Southeast Tucson master-planned community. Mix of single-family homes and townhomes with community amenities.',
    localIssues: ['HOA coordination', 'Newer home maintenance', 'Community common area service', 'Desert landscaping'],
    population: '45,000+',
    medianHomeValue: '$325,000'
  },
  {
    slug: 'tanque-verde',
    name: 'Tanque Verde',
    zipCodes: ['85749', '85750'],
    neighborhoods: ['Tanque Verde Valley', 'Saguaro National Park East area', 'Bear Canyon'],
    landmarks: ['Saguaro National Park East', 'Tanque Verde Guest Ranch', 'Bear Canyon Trail'],
    climateInfo: 'Far east Tucson with beautiful Sonoran Desert landscape. Larger lots with horse properties common.',
    localIssues: ['Well water common', 'Septic systems', 'Larger home HVAC needs', 'Wildlife-proofing'],
    population: '18,000+',
    medianHomeValue: '$500,000'
  },
  {
    slug: 'casas-adobes',
    name: 'Casas Adobes',
    zipCodes: ['85704', '85741', '85742'],
    neighborhoods: ['La Cholla Corporate Center area', 'Ina Road Corridor', 'Casas Adobes Plaza area'],
    landmarks: ['La Encantada', 'Casas Adobes Plaza', 'Tohono Chul Park'],
    climateInfo: 'Northwest Tucson with mix of established neighborhoods and newer developments. Popular retail and dining destination.',
    localIssues: ['Older home retrofits', 'Commercial HVAC needs', 'Mixed-age housing stock', 'Infrastructure updates'],
    population: '70,000+',
    medianHomeValue: '$350,000'
  },
  {
    slug: 'east-tucson',
    name: 'East Tucson',
    zipCodes: ['85710', '85730', '85747', '85748'],
    neighborhoods: ['Broadway Corridor', 'Pantano', 'Houghton Road Corridor', 'Civano'],
    landmarks: ['Davis-Monthan Air Force Base', 'Pima County Fairgrounds', 'Golf Links Road Commercial District'],
    climateInfo: 'Established east side neighborhoods with diverse housing options. Growing commercial development along major corridors.',
    localIssues: ['Older home updates', 'Base housing proximity', 'Commercial growth infrastructure', 'Mixed residential/commercial zones'],
    population: '120,000+',
    medianHomeValue: '$300,000'
  },
  {
    slug: 'drexel-heights',
    name: 'Drexel Heights',
    zipCodes: ['85746', '85757'],
    neighborhoods: ['Drexel Heights', 'Irvington Road area', 'South Tucson vicinity'],
    landmarks: ['Drexel Heights Fire District', 'Southwest Tucson Commercial'],
    climateInfo: 'Southwest Tucson area with affordable housing options. Growing community with family-oriented neighborhoods.',
    localIssues: ['Affordable home services', 'Water quality concerns', 'Older mobile home parks', 'Family budget considerations'],
    population: '30,000+',
    medianHomeValue: '$240,000'
  },
  {
    slug: 'avra-valley',
    name: 'Avra Valley',
    zipCodes: ['85653', '85735'],
    neighborhoods: ['Avra Valley', 'Picture Rocks area', 'Tucson Mountain foothills'],
    landmarks: ['Arizona-Sonora Desert Museum', 'Old Tucson Studios', 'Tucson Mountain Park'],
    climateInfo: 'Rural west Tucson area with larger properties and desert living. Close to popular tourist attractions.',
    localIssues: ['Well water systems', 'Septic maintenance', 'Off-grid solar options', 'Rural property access'],
    population: '8,000+',
    medianHomeValue: '$275,000'
  },
  {
    slug: 'picture-rocks',
    name: 'Picture Rocks',
    zipCodes: ['85743', '85735'],
    neighborhoods: ['Picture Rocks', 'Tortolita area', 'Silverbell Road area'],
    landmarks: ['Ironwood Forest National Monument', 'Picture Rocks Community Center'],
    climateInfo: 'Northwest Tucson with desert mountain scenery. Mix of established homes and newer developments.',
    localIssues: ['Rural infrastructure', 'Dust and air quality', 'Well water treatment', 'Desert landscaping maintenance'],
    population: '10,000+',
    medianHomeValue: '$290,000'
  },
  {
    slug: 'gladden-farms',
    name: 'Gladden Farms',
    zipCodes: ['85653', '85658'],
    neighborhoods: ['Gladden Farms', 'Marana Northwest', 'Saguaro Bloom'],
    landmarks: ['Gladden Farms Recreation Center', 'Marana Schools'],
    climateInfo: 'New master-planned community in Marana. Modern homes with energy-efficient construction.',
    localIssues: ['New home HVAC optimization', 'Builder warranty transitions', 'Smart home integration', 'Energy efficiency'],
    population: '12,000+',
    medianHomeValue: '$360,000'
  },
  {
    slug: 'corona-de-tucson',
    name: 'Corona de Tucson',
    zipCodes: ['85641', '85645'],
    neighborhoods: ['Corona de Tucson', 'South Houghton area', 'Mescal'],
    landmarks: ['Empire Ranch', 'Santa Rita Mountains views'],
    climateInfo: 'Southeast Tucson unincorporated area. Larger lots with equestrian properties and desert living.',
    localIssues: ['Well water systems', 'Septic tank service', 'Horse property needs', 'Rural road access'],
    population: '8,000+',
    medianHomeValue: '$295,000'
  },
  {
    slug: 'tucson-estates',
    name: 'Tucson Estates',
    zipCodes: ['85735', '85746'],
    neighborhoods: ['Tucson Estates', 'Valencia Road area', 'Southwest Tucson'],
    landmarks: ['San Xavier del Bac Mission nearby', 'Tucson Estates Golf Course'],
    climateInfo: 'Southwest Tucson retirement and family community. Established neighborhood with affordable options.',
    localIssues: ['Older home updates', 'Energy efficiency upgrades', 'Water heater replacements', 'AC system modernization'],
    population: '15,000+',
    medianHomeValue: '$225,000'
  },
  {
    slug: 'saddle-brooke-catalina',
    name: 'SaddleBrooke',
    zipCodes: ['85739', '85755'],
    neighborhoods: ['SaddleBrooke', 'SaddleBrooke Ranch', 'Catalina'],
    landmarks: ['SaddleBrooke Golf Club', 'Oracle Road Corridor', 'Biosphere 2 nearby'],
    climateInfo: 'Active adult community north of Tucson. Resort-style living with premium amenities.',
    localIssues: ['Active adult community needs', 'Premium home maintenance', 'Pool equipment service', 'Energy efficiency for seniors'],
    population: '15,000+',
    medianHomeValue: '$400,000'
  },
  {
    slug: 'tortolita',
    name: 'Tortolita',
    zipCodes: ['85742', '85755'],
    neighborhoods: ['Tortolita', 'Stone Canyon', 'Tortolita Mountain area'],
    landmarks: ['Tortolita Mountain Park', 'Stone Canyon Golf Club'],
    climateInfo: 'Northwest Tucson foothills with luxury homes and mountain views. Premium desert living.',
    localIssues: ['High-end HVAC systems', 'Pool and spa equipment', 'Luxury home electrical', 'Mountain terrain challenges'],
    population: '5,000+',
    medianHomeValue: '$550,000'
  },
  {
    slug: 'red-rock-casa-grande',
    name: 'Red Rock',
    zipCodes: ['85194', '85193'],
    neighborhoods: ['Red Rock', 'Casa Grande area'],
    landmarks: ['Red Rock area', 'Interstate 10 Corridor'],
    climateInfo: 'Northwest of Tucson along I-10. Rural community with larger properties and desert living.',
    localIssues: ['Rural property services', 'Well water systems', 'Long-distance service calls', 'Desert heat challenges'],
    population: '3,000+',
    medianHomeValue: '$250,000'
  }
];

// Get location data by slug
export function getLocationSEOData(slug: string): LocationSEOData | undefined {
  return tucsonMetroLocations.find(loc => loc.slug === slug);
}

// Get all ZIP codes for a location
export function getAllZipCodesForLocation(slug: string): string[] {
  const location = getLocationSEOData(slug);
  return location?.zipCodes || [];
}

// Format ZIP codes for display with grouping
export function formatZipCodesForDisplay(zipCodes: string[]): string {
  if (zipCodes.length <= 5) {
    return zipCodes.join(', ');
  }
  
  // Group by prefix for long lists
  const prefix857 = zipCodes.filter(z => z.startsWith('857'));
  const prefix856 = zipCodes.filter(z => z.startsWith('856'));
  const others = zipCodes.filter(z => !z.startsWith('857') && !z.startsWith('856'));
  
  const parts: string[] = [];
  if (prefix857.length > 0) parts.push(prefix857.join(', '));
  if (prefix856.length > 0) parts.push(prefix856.join(', '));
  if (others.length > 0) parts.push(others.join(', '));
  
  return parts.join(' | ');
}

// Generate local content snippet for location pages
export function generateLocalContentSnippet(slug: string): string {
  const location = getLocationSEOData(slug);
  if (!location) return '';
  
  return `Serving ${location.name} and surrounding neighborhoods including ${location.neighborhoods.slice(0, 3).join(', ')}. ` +
    `${location.climateInfo} ` +
    `Our experienced technicians understand local challenges like ${location.localIssues.slice(0, 2).join(' and ')}.`;
}
