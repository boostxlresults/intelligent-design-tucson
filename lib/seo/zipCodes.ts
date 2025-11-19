/**
 * Zip Codes Served by Intelligent Design
 * Tucson Metro Area Coverage - 37 zip codes
 * 
 * Used for schema.org areaServed enhancement and AI SEO optimization
 */

export const SERVICE_ZIP_CODES = [
  "85622", "85629", "85641", "85653", "85658",
  "85701", "85704", "85705", "85706", "85707",
  "85708", "85710", "85711", "85712", "85714",
  "85715", "85716", "85718", "85719", "85730",
  "85735", "85736", "85737", "85739", "85741",
  "85742", "85743", "85745", "85746", "85747",
  "85748", "85749", "85750", "85755", "85756",
  "85757", "85614"
] as const;

/**
 * Generates DefinedRegion array for schema.org areaServed
 * DefinedRegion is the Schema.org compliant type for postal code targeting
 * Optimized for AI search engines (ChatGPT, Perplexity, Claude)
 */
export function generateZipCodeSchemas() {
  return SERVICE_ZIP_CODES.map(zip => ({
    "@type": "DefinedRegion" as const,
    "postalCode": zip,
    "addressCountry": "US"
  }));
}

/**
 * Zip code to primary city/area mapping
 * Used for enhanced location context in schemas
 */
export const ZIP_TO_AREA: Record<string, string> = {
  // Catalina Foothills
  "85704": "Catalina Foothills",
  "85718": "Catalina Foothills",
  
  // Oro Valley
  "85742": "Oro Valley",
  "85755": "Oro Valley",
  "85737": "Oro Valley",
  
  // Marana
  "85653": "Marana",
  "85658": "Marana",
  
  // Sahuarita
  "85614": "Sahuarita",
  
  // Green Valley
  "85622": "Green Valley",
  "85629": "Green Valley",
  
  // Vail
  "85641": "Vail",
  "85747": "Vail",
  
  // Tanque Verde
  "85748": "Tanque Verde",
  "85749": "Tanque Verde",
  
  // Central Tucson
  "85701": "Central Tucson",
  "85705": "Central Tucson",
  "85719": "Central Tucson",
  
  // East Tucson
  "85710": "East Tucson",
  "85711": "East Tucson",
  "85730": "East Tucson",
  
  // Northwest Tucson
  "85741": "Northwest Tucson",
  "85743": "Northwest Tucson",
  "85745": "Northwest Tucson",
  
  // South Tucson
  "85706": "South Tucson",
  "85707": "South Tucson",
  "85708": "South Tucson",
  "85714": "South Tucson",
  "85756": "South Tucson",
  
  // North Tucson
  "85712": "North Tucson",
  "85715": "North Tucson",
  "85716": "North Tucson",
  
  // Other areas
  "85735": "Tucson Estates",
  "85736": "Drexel Heights",
  "85739": "Casas Adobes",
  "85746": "Corona de Tucson",
  "85750": "SaddleBrooke",
  "85757": "Rita Ranch"
};

/**
 * Get area name for a given zip code
 */
export function getAreaForZip(zipCode: string): string | undefined {
  return ZIP_TO_AREA[zipCode];
}

/**
 * Get all zip codes for a given area
 */
export function getZipsForArea(areaName: string): string[] {
  return Object.entries(ZIP_TO_AREA)
    .filter(([_, area]) => area.toLowerCase() === areaName.toLowerCase())
    .map(([zip, _]) => zip);
}
