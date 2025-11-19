/**
 * Offer Schema Generator
 * Showcases financing, discounts, and special promotions
 */

import { offersData } from '@/data/offers';
import { BUSINESS_INFO } from './constants';

export interface OfferSchemaOptions {
  offerCategories?: string[]; // Filter by category (e.g., ["Financing", "Military"])
  includeAll?: boolean; // Include all offers (default: false)
}

export function generateOfferSchemas(options: OfferSchemaOptions = {}) {
  const { offerCategories, includeAll = false } = options;
  let { offers } = offersData;
  
  // Filter by categories if specified
  if (offerCategories && offerCategories.length > 0) {
    offers = offers.filter(offer => offerCategories.includes(offer.category));
  }
  
  // If not including all and no filter specified, return top 2 offers
  if (!includeAll && !offerCategories) {
    offers = offers.slice(0, 2);
  }
  
  return offers.map(offer => {
    const schema: any = {
      "@context": "https://schema.org",
      "@type": "Offer",
      "name": offer.name,
      "description": offer.description,
      "url": offer.url,
      "availability": offer.availability,
      "validFrom": offer.validFrom,
      "validThrough": offer.validThrough,
      "seller": {
        "@type": "Organization",
        "name": BUSINESS_INFO.name,
        "telephone": BUSINESS_INFO.phone
      }
    };

    // Add price specification if available
    if (offer.priceSpecification) {
      schema.priceSpecification = {
        "@type": offer.priceSpecification["@type"],
        "priceCurrency": offer.priceSpecification.priceCurrency,
        ...(offer.priceSpecification.price && { "price": offer.priceSpecification.price }),
        ...(offer.priceSpecification.billingPeriod && { "billingPeriod": offer.priceSpecification.billingPeriod }),
        ...(offer.priceSpecification.description && { "description": offer.priceSpecification.description })
      };
    }

    // Add discount if available
    if (offer.discount) {
      schema.discount = offer.discount;
      schema.priceCurrency = offer.priceCurrency;
    }

    return schema;
  });
}
