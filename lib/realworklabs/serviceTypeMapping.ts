/**
 * Service Type Mapping Utilities for RealWorkLabsWidget
 * Maps service slugs to RealWorkLabs service type filter values
 */

export type RealWorkLabsServiceType = 'hvac' | 'plumbing' | 'solar' | 'electrical' | 'roofing' | 'all';

/**
 * Determines the RealWorkLabs service type filter based on service slug
 * @param serviceSlug - The service slug from the URL (e.g., 'hvac', 'ac-installation', 'plumbing')
 * @returns The appropriate RealWorkLabs service type filter
 */
export function getServiceTypeFromSlug(serviceSlug: string): RealWorkLabsServiceType {
  const slug = serviceSlug.toLowerCase();
  
  // HVAC-related services (using precise pattern matching to avoid false positives)
  // Match 'ac' only when it's a standalone word or prefix (not part of location names like 'casasadobes')
  const hvacPattern = /^(hvac|ac-|ac$|acinstall|acrepair|acservice|actune|air-condition|airconditioning|heater|heating|furnace|heat-pump|heatpump|ductless|mini-split|minisplit|thermostat|indoor-air-quality|indoorairquality)/;
  
  if (
    hvacPattern.test(slug) ||
    slug.includes('duct-') ||
    slug.includes('ductinstall') ||
    slug.includes('ductrepair') ||
    slug.includes('ductsealing') ||
    slug.includes('ductcleaning')
  ) {
    return 'hvac';
  }
  
  // Plumbing-related services
  if (
    slug.includes('plumbing') ||
    slug.includes('water-heater') ||
    slug.includes('leak') ||
    slug.includes('drain') ||
    slug.includes('sewer') ||
    slug.includes('pipe') ||
    slug.includes('toilet') ||
    slug.includes('sink') ||
    slug.includes('faucet') ||
    slug.includes('garbage-disposal') ||
    slug.includes('water-filter') ||
    slug.includes('water-soften') ||
    slug.includes('bidet')
  ) {
    return 'plumbing';
  }
  
  // Solar-related services
  if (
    slug.includes('solar') ||
    slug.includes('photovoltaic') ||
    slug.includes('pv-system')
  ) {
    return 'solar';
  }
  
  // Electrical-related services
  if (
    slug.includes('electrical') ||
    slug.includes('electric') ||
    slug.includes('panel-upgrade') ||
    slug.includes('circuit-breaker') ||
    slug.includes('generator') ||
    slug.includes('generac') ||
    slug.includes('lighting') ||
    slug.includes('outlet') ||
    slug.includes('switch') ||
    slug.includes('ceiling-fan')
  ) {
    return 'electrical';
  }
  
  // Roofing-related services
  if (
    slug.includes('roof') ||
    slug.includes('shingle') ||
    slug.includes('tile-roof') ||
    slug.includes('metal-roof') ||
    slug.includes('flat-roof') ||
    slug.includes('pitched-roof') ||
    slug.includes('skylight')
  ) {
    return 'roofing';
  }
  
  // Default to 'all' if no specific match
  return 'all';
}

/**
 * Get a human-readable service type name
 * @param serviceType - The RealWorkLabs service type
 * @returns Display name for the service type
 */
export function getServiceTypeDisplayName(serviceType: RealWorkLabsServiceType): string {
  const displayNames: Record<RealWorkLabsServiceType, string> = {
    hvac: 'HVAC',
    plumbing: 'Plumbing',
    solar: 'Solar',
    electrical: 'Electrical',
    roofing: 'Roofing',
    all: 'All Services',
  };
  
  return displayNames[serviceType];
}
