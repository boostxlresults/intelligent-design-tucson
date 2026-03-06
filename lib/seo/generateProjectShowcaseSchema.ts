import { BUSINESS_INFO } from './constants';
import type { ProjectReview } from '@/data/projectReviews';

export interface ProjectShowcaseSchemaOptions {
  locationName: string;
  locationSlug: string;
  canonicalUrl: string;
  reviews: ProjectReview[];
}

export function generateProjectShowcaseSchemas(options: ProjectShowcaseSchemaOptions): Array<Record<string, any>> {
  const { locationName, canonicalUrl, reviews } = options;
  const schemas: Array<Record<string, any>> = [];

  const serviceGroups: Record<string, ProjectReview[]> = {};
  for (const review of reviews) {
    if (!serviceGroups[review.serviceType]) {
      serviceGroups[review.serviceType] = [];
    }
    serviceGroups[review.serviceType].push(review);
  }

  const projectListItems = reviews.map((review, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "CreativeWork",
      "name": review.projectDescription,
      "description": review.reviewBody,
      "author": { "@type": "Organization", "name": BUSINESS_INFO.name },
      "datePublished": review.datePublished,
      "locationCreated": { "@type": "Place", "name": locationName, "address": { "@type": "PostalAddress", "addressLocality": locationName, "addressRegion": "AZ" } },
      "review": {
        "@type": "Review",
        "author": { "@type": "Person", "name": review.author },
        "reviewRating": { "@type": "Rating", "ratingValue": review.rating, "bestRating": 5 },
        "reviewBody": review.reviewBody
      }
    }
  }));

  schemas.push({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Recent Home Service Projects in ${locationName}, AZ`,
    "description": `Browse completed HVAC, plumbing, solar, electrical, roofing, and drain projects by Intelligent Design in ${locationName}. Real customer reviews with verified project details.`,
    "url": canonicalUrl,
    "numberOfItems": reviews.length,
    "itemListOrder": "https://schema.org/ItemListOrderDescending",
    "itemListElement": projectListItems
  });

  for (const [serviceType, serviceReviews] of Object.entries(serviceGroups)) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${serviceType} Services in ${locationName}`,
      "description": `Professional ${serviceType.toLowerCase()} services for ${locationName}, AZ homeowners. ${serviceReviews.map(r => r.projectDescription).join('. ')}.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": BUSINESS_INFO.name,
        "telephone": BUSINESS_INFO.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": BUSINESS_INFO.address.street,
          "addressLocality": BUSINESS_INFO.address.city,
          "addressRegion": BUSINESS_INFO.address.state,
          "postalCode": BUSINESS_INFO.address.zip
        },
        "@id": "https://www.idesignac.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": locationName,
        "containedInPlace": { "@type": "State", "name": "Arizona" }
      },
      // NOTE: aggregateRating and review removed from Service schemas
      // Google Search Console error: "Invalid object type for field <parent_node>"
      // Service is NOT a valid parent type for Review Snippets rich results
      // Reviews are handled by the LocalBusiness and Organization schemas instead
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceType} Services`,
        "itemListElement": serviceReviews.map(review => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": review.projectDescription
          }
        }))
      }
    });
  }

  return schemas;
}
