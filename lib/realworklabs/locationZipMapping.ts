/**
 * Location to Zip Code Mapping for Tucson Service Areas
 * Used for filtering RealWorkLabsWidget by geographic location
 */

export type TucsonServiceArea = {
  slug: string;
  name: string;
  zipCode: string;
  county?: string;
};

/**
 * Comprehensive mapping of Tucson service area locations to zip codes
 */
export const TUCSON_SERVICE_AREAS: Record<string, TucsonServiceArea> = {
  // Primary Cities
  'tucson': {
    slug: 'tucson',
    name: 'Tucson',
    zipCode: '85701',
    county: 'Pima',
  },
  'oro-valley': {
    slug: 'oro-valley',
    name: 'Oro Valley',
    zipCode: '85755',
    county: 'Pima',
  },
  'orovalley': {
    slug: 'orovalley',
    name: 'Oro Valley',
    zipCode: '85755',
    county: 'Pima',
  },
  'marana': {
    slug: 'marana',
    name: 'Marana',
    zipCode: '85653',
    county: 'Pima',
  },
  'sahuarita': {
    slug: 'sahuarita',
    name: 'Sahuarita',
    zipCode: '85629',
    county: 'Pima',
  },
  'vail': {
    slug: 'vail',
    name: 'Vail',
    zipCode: '85641',
    county: 'Pima',
  },
  'green-valley': {
    slug: 'green-valley',
    name: 'Green Valley',
    zipCode: '85614',
    county: 'Pima',
  },
  'greenvalley': {
    slug: 'greenvalley',
    name: 'Green Valley',
    zipCode: '85614',
    county: 'Pima',
  },
  
  // Tucson Suburbs & Communities
  'catalina-foothills': {
    slug: 'catalina-foothills',
    name: 'Catalina Foothills',
    zipCode: '85750',
    county: 'Pima',
  },
  'catalinafoothills': {
    slug: 'catalinafoothills',
    name: 'Catalina Foothills',
    zipCode: '85750',
    county: 'Pima',
  },
  'casa-adobes': {
    slug: 'casa-adobes',
    name: 'Casa Adobes',
    zipCode: '85704',
    county: 'Pima',
  },
  'casasadobes': {
    slug: 'casasadobes',
    name: 'Casa Adobes',
    zipCode: '85704',
    county: 'Pima',
  },
  'drexel-heights': {
    slug: 'drexel-heights',
    name: 'Drexel Heights',
    zipCode: '85746',
    county: 'Pima',
  },
  'drexelheights': {
    slug: 'drexelheights',
    name: 'Drexel Heights',
    zipCode: '85746',
    county: 'Pima',
  },
  'tanque-verde': {
    slug: 'tanque-verde',
    name: 'Tanque Verde',
    zipCode: '85749',
    county: 'Pima',
  },
  'tanqueverde': {
    slug: 'tanqueverde',
    name: 'Tanque Verde',
    zipCode: '85749',
    county: 'Pima',
  },
  'rita-ranch': {
    slug: 'rita-ranch',
    name: 'Rita Ranch',
    zipCode: '85747',
    county: 'Pima',
  },
  'ritaranch': {
    slug: 'ritaranch',
    name: 'Rita Ranch',
    zipCode: '85747',
    county: 'Pima',
  },
  'picture-rocks': {
    slug: 'picture-rocks',
    name: 'Picture Rocks',
    zipCode: '85743',
    county: 'Pima',
  },
  'picturerocks': {
    slug: 'picturerocks',
    name: 'Picture Rocks',
    zipCode: '85743',
    county: 'Pima',
  },
  'tortolita': {
    slug: 'tortolita',
    name: 'Tortolita',
    zipCode: '85739',
    county: 'Pima',
  },
  'corona-de-tucson': {
    slug: 'corona-de-tucson',
    name: 'Corona de Tucson',
    zipCode: '85641',
    county: 'Pima',
  },
  'coronadetucson': {
    slug: 'coronadetucson',
    name: 'Corona de Tucson',
    zipCode: '85641',
    county: 'Pima',
  },
  'avra-valley': {
    slug: 'avra-valley',
    name: 'Avra Valley',
    zipCode: '85653',
    county: 'Pima',
  },
  'avravalley': {
    slug: 'avravalley',
    name: 'Avra Valley',
    zipCode: '85653',
    county: 'Pima',
  },
  'gladden-farms': {
    slug: 'gladden-farms',
    name: 'Gladden Farms',
    zipCode: '85653',
    county: 'Pima',
  },
  'gladdenfarms': {
    slug: 'gladdenfarms',
    name: 'Gladden Farms',
    zipCode: '85653',
    county: 'Pima',
  },
  'saddlebrooke': {
    slug: 'saddlebrooke',
    name: 'SaddleBrooke',
    zipCode: '85739',
    county: 'Pima',
  },
  'saddlebrooke-catalina': {
    slug: 'saddlebrooke-catalina',
    name: 'SaddleBrooke/Catalina',
    zipCode: '85739',
    county: 'Pima',
  },
  'saddlebrookecatalina': {
    slug: 'saddlebrookecatalina',
    name: 'SaddleBrooke/Catalina',
    zipCode: '85739',
    county: 'Pima',
  },
  'tucson-estates': {
    slug: 'tucson-estates',
    name: 'Tucson Estates',
    zipCode: '85735',
    county: 'Pima',
  },
  'tucsonestates': {
    slug: 'tucsonestates',
    name: 'Tucson Estates',
    zipCode: '85735',
    county: 'Pima',
  },
  'rillito': {
    slug: 'rillito',
    name: 'Rillito',
    zipCode: '85654',
    county: 'Pima',
  },
  'east-tucson': {
    slug: 'east-tucson',
    name: 'East Tucson',
    zipCode: '85710',
    county: 'Pima',
  },
  'easttucson': {
    slug: 'easttucson',
    name: 'East Tucson',
    zipCode: '85710',
    county: 'Pima',
  },
  'cortaro': {
    slug: 'cortaro',
    name: 'Cortaro',
    zipCode: '85652',
    county: 'Pima',
  },
  
  // Pinal County (Red Rock/Casa Grande area)
  'red-rock-casa-grande': {
    slug: 'red-rock-casa-grande',
    name: 'Red Rock/Casa Grande',
    zipCode: '85194',
    county: 'Pinal',
  },
  'redrockcasagrande': {
    slug: 'redrockcasagrande',
    name: 'Red Rock/Casa Grande',
    zipCode: '85194',
    county: 'Pinal',
  },
};

/**
 * Get zip code from location slug
 * @param locationSlug - The location slug from URL (e.g., 'oro-valley', 'orovalley')
 * @returns The zip code for that location, or null if not found
 */
export function getZipCodeFromLocation(locationSlug: string): string | null {
  const normalized = locationSlug.toLowerCase().trim();
  const area = TUCSON_SERVICE_AREAS[normalized];
  return area ? area.zipCode : null;
}

/**
 * Get location display name from slug
 * @param locationSlug - The location slug from URL
 * @returns The formatted display name, or the original slug if not found
 */
export function getLocationDisplayName(locationSlug: string): string {
  const normalized = locationSlug.toLowerCase().trim();
  const area = TUCSON_SERVICE_AREAS[normalized];
  return area ? area.name : locationSlug;
}

/**
 * Get full service area details from slug
 * @param locationSlug - The location slug from URL
 * @returns The service area object, or null if not found
 */
export function getServiceAreaDetails(locationSlug: string): TucsonServiceArea | null {
  const normalized = locationSlug.toLowerCase().trim();
  return TUCSON_SERVICE_AREAS[normalized] || null;
}

/**
 * Get all available service areas
 * @returns Array of all service area objects
 */
export function getAllServiceAreas(): TucsonServiceArea[] {
  return Object.values(TUCSON_SERVICE_AREAS);
}

/**
 * Check if a location slug is valid
 * @param locationSlug - The location slug to validate
 * @returns True if the location is in our service area
 */
export function isValidServiceArea(locationSlug: string): boolean {
  const normalized = locationSlug.toLowerCase().trim();
  return normalized in TUCSON_SERVICE_AREAS;
}
