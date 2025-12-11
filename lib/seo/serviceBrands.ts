/**
 * Service Brand Data for Schema.org hasBrand/hasVariant Enhancement
 * Maps service categories to brands and product variants for AI SEO optimization
 * 
 * Schema.org properties used:
 * - hasBrand: Links service to manufacturer brands
 * - hasVariant: Links to product/service variations
 * - additionalType: More specific service categorization
 */

export interface BrandInfo {
  name: string;
  url?: string;
  logo?: string;
}

export interface ServiceVariant {
  name: string;
  description: string;
  additionalType?: string;
}

export interface ServiceBrandData {
  brands: BrandInfo[];
  variants: ServiceVariant[];
  additionalTypes: string[];
}

/**
 * HVAC Brands and Variants
 */
export const HVAC_BRANDS: ServiceBrandData = {
  brands: [
    { name: "Lennox", url: "https://www.lennox.com" },
    { name: "Trane", url: "https://www.trane.com" },
    { name: "Carrier", url: "https://www.carrier.com" },
    { name: "Rheem", url: "https://www.rheem.com" },
    { name: "Goodman", url: "https://www.goodmanmfg.com" },
    { name: "Amana", url: "https://www.amana-hac.com" },
    { name: "American Standard", url: "https://www.americanstandardair.com" },
    { name: "Daikin", url: "https://www.daikincomfort.com" },
    { name: "Mitsubishi Electric", url: "https://www.mitsubishicomfort.com" },
    { name: "Fujitsu", url: "https://www.fujitsugeneral.com" },
  ],
  variants: [
    { name: "Central Air Conditioning", description: "Whole-home cooling systems with ductwork", additionalType: "https://schema.org/Service" },
    { name: "Ductless Mini-Split", description: "Zone cooling without ductwork, ideal for casitas and additions", additionalType: "https://schema.org/Service" },
    { name: "Heat Pump", description: "Efficient heating and cooling in one system", additionalType: "https://schema.org/Service" },
    { name: "Gas Furnace", description: "Natural gas heating systems", additionalType: "https://schema.org/Service" },
    { name: "Package Unit", description: "All-in-one HVAC systems for homes without indoor space", additionalType: "https://schema.org/Service" },
    { name: "Evaporative Cooler", description: "Swamp cooler installation and service", additionalType: "https://schema.org/Service" },
    { name: "Smart Thermostat", description: "WiFi-enabled temperature control systems", additionalType: "https://schema.org/Product" },
  ],
  additionalTypes: [
    "https://schema.org/HomeAndConstructionBusiness",
    "https://schema.org/ProfessionalService"
  ]
};

/**
 * Plumbing Brands and Variants
 */
export const PLUMBING_BRANDS: ServiceBrandData = {
  brands: [
    { name: "Rheem", url: "https://www.rheem.com" },
    { name: "A.O. Smith", url: "https://www.hotwater.com" },
    { name: "Bradford White", url: "https://www.bradfordwhite.com" },
    { name: "Rinnai", url: "https://www.rinnai.us" },
    { name: "Navien", url: "https://www.navieninc.com" },
    { name: "Moen", url: "https://www.moen.com" },
    { name: "Delta", url: "https://www.deltafaucet.com" },
    { name: "Kohler", url: "https://www.kohler.com" },
    { name: "American Standard", url: "https://www.americanstandard-us.com" },
    { name: "InSinkErator", url: "https://www.insinkerator.com" },
  ],
  variants: [
    { name: "Tankless Water Heater", description: "On-demand hot water, endless supply", additionalType: "https://schema.org/Service" },
    { name: "Traditional Tank Water Heater", description: "Storage tank water heaters 40-80 gallon", additionalType: "https://schema.org/Service" },
    { name: "Hybrid Heat Pump Water Heater", description: "Energy-efficient electric water heating", additionalType: "https://schema.org/Service" },
    { name: "Whole-House Water Softener", description: "Hard water treatment systems", additionalType: "https://schema.org/Service" },
    { name: "Reverse Osmosis System", description: "Drinking water purification", additionalType: "https://schema.org/Service" },
    { name: "Slab Leak Repair", description: "Under-foundation pipe repair and rerouting", additionalType: "https://schema.org/Service" },
    { name: "Sewer Line Replacement", description: "Main sewer line repair and replacement", additionalType: "https://schema.org/Service" },
    { name: "Garbage Disposal", description: "Kitchen waste disposal installation", additionalType: "https://schema.org/Product" },
    { name: "Bidet Installation", description: "Bidet seat and attachment installation", additionalType: "https://schema.org/Service" },
  ],
  additionalTypes: [
    "https://schema.org/HomeAndConstructionBusiness",
    "https://schema.org/ProfessionalService"
  ]
};

/**
 * Electrical Brands and Variants
 */
export const ELECTRICAL_BRANDS: ServiceBrandData = {
  brands: [
    { name: "Square D", url: "https://www.se.com/us/en/brands/squared/" },
    { name: "Siemens", url: "https://www.siemens.com" },
    { name: "Eaton", url: "https://www.eaton.com" },
    { name: "GE", url: "https://www.ge.com" },
    { name: "Lutron", url: "https://www.lutron.com" },
    { name: "Leviton", url: "https://www.leviton.com" },
    { name: "ChargePoint", url: "https://www.chargepoint.com" },
    { name: "Tesla", url: "https://www.tesla.com" },
    { name: "Generac", url: "https://www.generac.com" },
  ],
  variants: [
    { name: "Electrical Panel Upgrade", description: "100-400 amp service panel upgrades", additionalType: "https://schema.org/Service" },
    { name: "EV Charger Installation", description: "Level 2 electric vehicle charging stations", additionalType: "https://schema.org/Service" },
    { name: "Whole-House Generator", description: "Backup power generator installation", additionalType: "https://schema.org/Service" },
    { name: "Ceiling Fan Installation", description: "Indoor and outdoor ceiling fan wiring", additionalType: "https://schema.org/Service" },
    { name: "Recessed Lighting", description: "Can light and LED retrofit installation", additionalType: "https://schema.org/Service" },
    { name: "Smart Home Wiring", description: "Home automation and smart device integration", additionalType: "https://schema.org/Service" },
    { name: "Surge Protection", description: "Whole-house surge protector installation", additionalType: "https://schema.org/Service" },
  ],
  additionalTypes: [
    "https://schema.org/HomeAndConstructionBusiness",
    "https://schema.org/ProfessionalService"
  ]
};

/**
 * Solar Brands and Variants
 */
export const SOLAR_BRANDS: ServiceBrandData = {
  brands: [
    { name: "SunPower", url: "https://www.sunpower.com" },
    { name: "LG Solar", url: "https://www.lg.com/us/solar" },
    { name: "Panasonic", url: "https://na.panasonic.com/us/solar" },
    { name: "Tesla", url: "https://www.tesla.com/solarpanels" },
    { name: "Enphase", url: "https://www.enphase.com" },
    { name: "SolarEdge", url: "https://www.solaredge.com" },
    { name: "Q Cells", url: "https://www.q-cells.com" },
    { name: "Canadian Solar", url: "https://www.canadiansolar.com" },
  ],
  variants: [
    { name: "Rooftop Solar Installation", description: "Residential roof-mounted solar panels", additionalType: "https://schema.org/Service" },
    { name: "Ground-Mount Solar", description: "Ground-mounted solar panel systems", additionalType: "https://schema.org/Service" },
    { name: "Battery Storage", description: "Solar battery backup systems like Tesla Powerwall", additionalType: "https://schema.org/Service" },
    { name: "Solar Pool Heating", description: "Solar-powered pool heating systems", additionalType: "https://schema.org/Service" },
    { name: "Commercial Solar", description: "Business and commercial solar installation", additionalType: "https://schema.org/Service" },
  ],
  additionalTypes: [
    "https://schema.org/HomeAndConstructionBusiness",
    "https://schema.org/ProfessionalService"
  ]
};

/**
 * Roofing Brands and Variants
 */
export const ROOFING_BRANDS: ServiceBrandData = {
  brands: [
    { name: "GAF", url: "https://www.gaf.com" },
    { name: "Owens Corning", url: "https://www.owenscorning.com" },
    { name: "CertainTeed", url: "https://www.certainteed.com" },
    { name: "Boral", url: "https://www.boralamerica.com" },
    { name: "Eagle Roofing", url: "https://www.eagleroofing.com" },
    { name: "Malarkey", url: "https://www.malarkeyroofing.com" },
    { name: "Apoc", url: "https://www.apoc.com" },
    { name: "Henry", url: "https://www.henry.com" },
  ],
  variants: [
    { name: "Tile Roof Repair", description: "Clay and concrete tile roof repair", additionalType: "https://schema.org/Service" },
    { name: "Tile Roof Replacement", description: "Full tile roof replacement", additionalType: "https://schema.org/Service" },
    { name: "Flat Roof Coating", description: "Elastomeric and silicone roof coatings", additionalType: "https://schema.org/Service" },
    { name: "Foam Roof", description: "Spray polyurethane foam roofing systems", additionalType: "https://schema.org/Service" },
    { name: "Shingle Roof", description: "Asphalt shingle roof installation and repair", additionalType: "https://schema.org/Service" },
    { name: "TPO/EPDM Roofing", description: "Commercial single-ply membrane roofing", additionalType: "https://schema.org/Service" },
    { name: "Monsoon Damage Repair", description: "Storm and wind damage roof repair", additionalType: "https://schema.org/Service" },
  ],
  additionalTypes: [
    "https://schema.org/HomeAndConstructionBusiness",
    "https://schema.org/ProfessionalService"
  ]
};

/**
 * Drain/Sewer Brands and Variants
 */
export const DRAIN_BRANDS: ServiceBrandData = {
  brands: [
    { name: "Ridgid", url: "https://www.ridgid.com" },
    { name: "General Pipe Cleaners", url: "https://www.drainbrain.com" },
    { name: "Spartan Tool", url: "https://www.spartantool.com" },
  ],
  variants: [
    { name: "Drain Cleaning", description: "Professional drain clearing and snaking", additionalType: "https://schema.org/Service" },
    { name: "Hydro Jetting", description: "High-pressure water jetting for severe clogs", additionalType: "https://schema.org/Service" },
    { name: "Camera Inspection", description: "Video pipe inspection and diagnosis", additionalType: "https://schema.org/Service" },
    { name: "Trenchless Repair", description: "No-dig sewer line repair and replacement", additionalType: "https://schema.org/Service" },
    { name: "Root Removal", description: "Tree root intrusion removal from pipes", additionalType: "https://schema.org/Service" },
  ],
  additionalTypes: [
    "https://schema.org/HomeAndConstructionBusiness",
    "https://schema.org/ProfessionalService"
  ]
};

/**
 * Get brand data for a service category
 */
export function getBrandDataForCategory(category: string): ServiceBrandData | null {
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('hvac') || categoryLower.includes('air conditioning') || 
      categoryLower.includes('heating') || categoryLower.includes('ac ') || 
      categoryLower.includes('furnace') || categoryLower.includes('heat pump')) {
    return HVAC_BRANDS;
  }
  
  if (categoryLower.includes('plumbing') || categoryLower.includes('water heater') || 
      categoryLower.includes('pipe') || categoryLower.includes('faucet')) {
    return PLUMBING_BRANDS;
  }
  
  if (categoryLower.includes('electrical') || categoryLower.includes('electric') || 
      categoryLower.includes('wiring') || categoryLower.includes('panel')) {
    return ELECTRICAL_BRANDS;
  }
  
  if (categoryLower.includes('solar') || categoryLower.includes('photovoltaic')) {
    return SOLAR_BRANDS;
  }
  
  if (categoryLower.includes('roof') || categoryLower.includes('tile') || 
      categoryLower.includes('shingle')) {
    return ROOFING_BRANDS;
  }
  
  if (categoryLower.includes('drain') || categoryLower.includes('sewer') || 
      categoryLower.includes('clog')) {
    return DRAIN_BRANDS;
  }
  
  return null;
}

/**
 * Generate schema.org Brand array for hasBrand property
 */
export function generateBrandSchemas(brands: BrandInfo[]) {
  return brands.map(brand => ({
    "@type": "Brand",
    "name": brand.name,
    ...(brand.url && { "url": brand.url })
  }));
}

/**
 * Generate schema.org Service variants for hasVariant property
 */
export function generateVariantSchemas(variants: ServiceVariant[]) {
  return variants.map(variant => ({
    "@type": "Service",
    "name": variant.name,
    "description": variant.description,
    ...(variant.additionalType && { "additionalType": variant.additionalType })
  }));
}
