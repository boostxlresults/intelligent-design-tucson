/**
 * Generate Schema.org SiteNavigationElement schema for Table of Contents
 * Helps search engines and AI systems understand page structure
 */

interface TOCSchemaItem {
  id: string;
  label: string;
  level?: number;
}

interface TOCSchemaOptions {
  pageUrl: string;
  pageName: string;
  items: TOCSchemaItem[];
}

/**
 * Generate SiteNavigationElement schema for TOC
 * This helps AI search engines understand the page structure and enables
 * direct deep linking to page sections
 */
export function generateTOCSchema(options: TOCSchemaOptions): Record<string, unknown> {
  const { pageUrl, pageName, items } = options;
  
  if (!items || items.length === 0) {
    return {};
  }

  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": `Table of Contents - ${pageName}`,
    "description": `Quick navigation to sections on the ${pageName} page`,
    "url": pageUrl,
    "hasPart": items.map((item, index) => ({
      "@type": "WebPageElement",
      "name": item.label,
      "url": `${pageUrl}#${item.id}`,
      "position": index + 1,
      "cssSelector": `#${item.id}`
    }))
  };
}

/**
 * Generate ItemList schema for TOC (alternative format for AI search)
 * This format is particularly useful for AI search engines that
 * look for structured lists of content
 */
export function generateTOCItemListSchema(options: TOCSchemaOptions): Record<string, unknown> {
  const { pageUrl, pageName, items } = options;
  
  if (!items || items.length === 0) {
    return {};
  }

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${pageName} - Page Sections`,
    "description": `Navigate to specific sections on the ${pageName} page`,
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "url": `${pageUrl}#${item.id}`
    }))
  };
}

/**
 * Generate both TOC schemas for comprehensive coverage
 */
export function generateAllTOCSchemas(options: TOCSchemaOptions): Record<string, unknown>[] {
  if (!options.items || options.items.length === 0) {
    return [];
  }
  
  return [
    generateTOCSchema(options),
    generateTOCItemListSchema(options)
  ];
}
