/**
 * Internal Link Registry for Knowledge Hub Resources
 * 
 * Centralized registry for internal links to Knowledge Hub resources.
 * Use tokens like [link:knowledgehub.nateCertification] in content
 * that will be processed by RichText component.
 * 
 * Limit: 1 link per ~250 words to avoid dilution
 */

export interface InternalLinkConfig {
  url: string;
  title: string;
  description: string;
}

export const knowledgeHubLinks: Record<string, InternalLinkConfig> = {
  // Certifications & Expertise
  nateCertification: {
    url: '/services/knowledge-hub#nate-certification',
    title: 'NATE Certification',
    description: 'Learn about our North American Technician Excellence certification'
  },
  
  epaCertification: {
    url: '/services/knowledge-hub#epa-certification',
    title: 'EPA Section 608 Certification',
    description: 'Our EPA-certified refrigerant handling expertise'
  },
  
  aerosealDealer: {
    url: '/services/knowledge-hub#aeroseal-elite-dealer',
    title: 'Aeroseal Elite Dealer',
    description: 'Revolutionary duct sealing technology - Elite Dealer status'
  },
  
  britaProPartner: {
    url: '/services/knowledge-hub#britapro-partnership',
    title: 'BritaPro Exclusive Tucson Partner',
    description: 'Exclusive certified water treatment partner in Tucson'
  },
  
  // Manufacturer Partnerships
  manufacturerCertifications: {
    url: '/services/knowledge-hub#manufacturer-certifications',
    title: 'Manufacturer Certifications & Partnerships',
    description: 'Our partnerships with Carrier, Trane, Lennox, Rheem, and more'
  },
  
  carrierDealer: {
    url: '/services/knowledge-hub#carrier-dealer',
    title: 'Carrier Factory Authorized Dealer',
    description: 'Factory-authorized Carrier dealer status'
  },
  
  // Warranties & Guarantees
  warranties: {
    url: '/services/knowledge-hub#warranties',
    title: 'Warranties & Guarantees',
    description: 'Comprehensive warranty coverage information'
  },
  
  workmanshipWarranty: {
    url: '/services/knowledge-hub#workmanship-warranties',
    title: 'Workmanship Warranty',
    description: 'Our installation workmanship guarantee details'
  },
  
  satisfactionGuarantee: {
    url: '/services/knowledge-hub#satisfaction-guarantee',
    title: '100% Satisfaction Guarantee',
    description: 'Our commitment to your complete satisfaction'
  },
  
  // Company Info
  leadership: {
    url: '/services/knowledge-hub#leadership',
    title: 'Our Leadership Team',
    description: 'Meet the team behind Intelligent Design'
  },
  
  missionValues: {
    url: '/services/knowledge-hub#mission-values',
    title: 'Mission & Core Values',
    description: 'Our commitment to Integrity, Expertise, Reliability, and Community'
  },
  
  // Services
  hvacServices: {
    url: '/services/knowledge-hub#hvac-services',
    title: 'HVAC Services',
    description: 'Complete HVAC services in Tucson'
  },
  
  plumbingServices: {
    url: '/services/knowledge-hub#plumbing-services',
    title: 'Plumbing Services',
    description: 'Professional plumbing services'
  }
};

/**
 * Helper function to generate link markup for content
 * Usage: `Our ${createInternalLink('nateCertification', 'NATE-certified')} technicians...`
 */
export function createInternalLink(key: keyof typeof knowledgeHubLinks, linkText: string): string {
  const config = knowledgeHubLinks[key];
  if (!config) {
    console.warn(`Internal link key "${key}" not found in registry`);
    return linkText;
  }
  return `<a href="${config.url}" title="${config.description}">${linkText}</a>`;
}

/**
 * Process text content and replace link tokens with actual links
 * Supports two formats:
 * 1. [link:knowledgehub.nateCertification:link text here] - uses registry
 * 2. [link:/path/to/page|link text] - direct URL paths
 */
export function processInternalLinks(content: string): string {
  // Pattern 1: Registry-based links [link:knowledgehub.key:text]
  const registryPattern = /\[link:knowledgehub\.(\w+):([^\]]+)\]/g;
  
  // Pattern 2: Direct URL links [link:/path|text]
  const directUrlPattern = /\[link:(\/[^\|]+)\|([^\]]+)\]/g;
  
  // First process registry-based links
  let processed = content.replace(registryPattern, (match, key, linkText) => {
    const config = knowledgeHubLinks[key as keyof typeof knowledgeHubLinks];
    if (!config) {
      console.warn(`Internal link key "${key}" not found in registry`);
      return linkText;
    }
    return `<a href="${config.url}" title="${config.description}" class="text-blue-600 hover:text-blue-800 underline font-medium">${linkText}</a>`;
  });
  
  // Then process direct URL links
  processed = processed.replace(directUrlPattern, (match, url, linkText) => {
    return `<a href="${url}" class="text-blue-600 hover:text-blue-800 underline font-medium">${linkText}</a>`;
  });
  
  return processed;
}
