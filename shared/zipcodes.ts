// Zip code mappings for Tucson metro area locations
export const locationZipCodes: Record<string, string[]> = {
  'avra-valley': ['85653', '85735'],
  'casas-adobes': ['85704', '85741', '85742'],
  'catalina-foothills': ['85718', '85750', '85749'],
  'coronade-tucson': ['85641', '85645'],
  'drexel-heights': ['85746', '85757'],
  'east-tucson': ['85710', '85730', '85747', '85748'],
  'gladden-farms': ['85653', '85658'],
  'green-valley': ['85614', '85622'],
  'marana': ['85653', '85658', '85743'],
  'oro-valley': ['85704', '85737', '85739', '85755'],
  'picture-rocks': ['85743', '85735'],
  'red-rock': ['85194', '85193'],
  'rita-ranch': ['85747', '85730'],
  'saddle-brooke': ['85739', '85755'],
  'sahuarita': ['85629', '85614'],
  'tanque-verde': ['85749', '85750'],
  'tortolita': ['85742', '85755'],
  'tucson': ['85701', '85702', '85705', '85711', '85712', '85713', '85714', '85715', '85716', '85717', '85719'],
  'tucson-estates': ['85735', '85746'],
  'vail': ['85641', '85629']
};

// Named export for easier access in location pages
export const LOCATION_ZIP_CODES = {
  gladdenfarms: locationZipCodes['gladden-farms'],
  orovalley: locationZipCodes['oro-valley'],
  marana: locationZipCodes['marana'],
  casasadobes: locationZipCodes['casas-adobes'],
  tortolita: locationZipCodes['tortolita'],
  drexelheights: locationZipCodes['drexel-heights'],
  avravalley: locationZipCodes['avra-valley'],
  picturerocks: locationZipCodes['picture-rocks'],
  sahuarita: locationZipCodes['sahuarita'],
  vail: locationZipCodes['vail'],
  greenvalley: locationZipCodes['green-valley'],
  saddlebrookecatalina: locationZipCodes['saddle-brooke'],
  easttucson: locationZipCodes['east-tucson'],
  catalinafoothills: locationZipCodes['catalina-foothills'],
  tanqueverde: locationZipCodes['tanque-verde'],
  ritaranch: locationZipCodes['rita-ranch'],
  coronadetucson: locationZipCodes['coronade-tucson'],
  redrockcasagrande: locationZipCodes['red-rock'],
  tucsonestates: locationZipCodes['tucson-estates'],
  tucson: locationZipCodes['tucson']
};

// Helper function to format zip codes for display
export function formatZipCodes(zipCodes: string[]): string {
  if (zipCodes.length === 1) {
    return zipCodes[0];
  } else if (zipCodes.length === 2) {
    return `${zipCodes[0]} and ${zipCodes[1]}`;
  } else {
    const last = zipCodes[zipCodes.length - 1];
    const rest = zipCodes.slice(0, -1).join(', ');
    return `${rest}, and ${last}`;
  }
}

// Helper function to get zip codes for a location slug
export function getZipCodesForLocation(locationSlug: string): string[] {
  return locationZipCodes[locationSlug] || [];
}
