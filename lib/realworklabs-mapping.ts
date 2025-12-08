export const LOCATION_TO_RWL_ID: Record<string, string> = {
  "tucson": "rwl-tucson",
  "tucson-estates": "rwl-tucson-estates",
  "casas-adobes": "rwl-casas-adobes",
  "tortolita": "rwl-tortolita",
  "drexel-heights": "rwl-drexel-heights",
  "oro-valley": "rwl-oro-valley",
  "marana": "rwl-marana",
  "gladden-farms": "rwl-gladden-farms",
  "avra-valley": "rwl-avra-valley",
  "picture-rocks": "rwl-picture-rocks",
  "sahuarita": "rwl-sahuarita",
  "vail": "rwl-vail",
  "green-valley": "rwl-2green-valley",
  "saddlebrooke-catalina": "rwl-saddlebrooke-catalina",
  "saddle-brooke-catalina": "rwl-saddlebrooke-catalina",
  "east-tucson": "rwl-east-tucson",
  "catalina-foothills": "rwl-catalina-foothills",
  "tanque-verde": "rwl-tanque-verde",
  "rita-ranch": "rwl-rita-ranch",
  "corona-de-tucson": "rwl-corona-de-tucson",
  "red-rock-casa-grande": "rwl-red-rock-casa-grande",
};

export function hasRealWorkLabsMap(locationSlug: string): boolean {
  return locationSlug in LOCATION_TO_RWL_ID;
}

export function getRealWorkLabsId(locationSlug: string): string | null {
  return LOCATION_TO_RWL_ID[locationSlug] || null;
}
