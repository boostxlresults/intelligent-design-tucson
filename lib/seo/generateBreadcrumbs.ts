/**
 * Breadcrumb Schema Generator for Next.js Migration
 * Used on all pages for navigation structure
 * 
 * Usage in Next.js page:
 * import { generateBreadcrumbs } from '@/lib/seo/generateBreadcrumbs';
 * const schema = generateBreadcrumbs([
 *   { name: 'Home', url: '/' },
 *   { name: 'Services', url: '/services' },
 *   { name: 'HVAC Tucson', url: '/hvac-tucson' }
 * ]);
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbs(items: BreadcrumbItem[], baseUrl: string = 'https://intelligentdesignhvac.com') {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  };
}
