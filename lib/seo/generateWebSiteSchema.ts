/**
 * WebSite Schema Generator
 * Enables sitelinks search box in Google search results
 */

import { BUSINESS_INFO } from './constants';

export interface WebSiteSchemaOptions {
  url: string; // Site base URL
}

export function generateWebSiteSchema(options: WebSiteSchemaOptions) {
  const { url } = options;
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": BUSINESS_INFO.name,
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "url": url
    }
  };
}
