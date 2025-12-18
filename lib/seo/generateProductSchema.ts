/**
 * Product Schema Generator
 * Creates Product + Offer schemas for HVAC, water heater, and other equipment
 * 
 * Improves visibility in Google Shopping, product carousels, and AI search
 * for equipment-related queries.
 */

import { BUSINESS_INFO } from './constants';

export interface ProductSchemaOptions {
  name: string;
  description: string;
  brand: string;
  model?: string;
  sku?: string;
  category: 'HVAC' | 'Water Heater' | 'Solar' | 'Electrical' | 'Plumbing';
  image?: string;
  priceRange?: string;
  canonicalUrl: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  offers?: {
    price?: number;
    priceCurrency?: string;
    availability?: string;
    validFrom?: string;
    validThrough?: string;
  };
}

export function generateProductSchema(options: ProductSchemaOptions) {
  const {
    name,
    description,
    brand,
    model,
    sku,
    category,
    image,
    priceRange,
    canonicalUrl,
    aggregateRating,
    offers
  } = options;

  const baseUrl = canonicalUrl.match(/^https?:\/\/[^\/]+/)?.[0] || 'https://www.idesignac.com';

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "manufacturer": {
      "@type": "Organization",
      "name": brand
    },
    "url": canonicalUrl,
    "image": image || `${baseUrl}/og-image.jpg`,
    "category": category,
    "seller": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "url": baseUrl,
      "image": `${baseUrl}/og-image.jpg`,
      "logo": `${baseUrl}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.address.street,
        "addressLocality": BUSINESS_INFO.address.city,
        "addressRegion": BUSINESS_INFO.address.state,
        "postalCode": BUSINESS_INFO.address.zip,
        "addressCountry": "US"
      }
    }
  };

  if (model) {
    schema.model = model;
  }

  if (sku) {
    schema.sku = sku;
  }

  if (priceRange) {
    schema.priceRange = priceRange;
  }

  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  if (offers) {
    schema.offers = {
      "@type": "Offer",
      "priceCurrency": offers.priceCurrency || "USD",
      "availability": offers.availability || "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": BUSINESS_INFO.name,
        "image": `${baseUrl}/og-image.jpg`
      },
      "url": canonicalUrl
    };

    if (offers.price) {
      schema.offers.price = offers.price;
    }

    if (offers.validFrom) {
      schema.offers.validFrom = offers.validFrom;
    }

    if (offers.validThrough) {
      schema.offers.validThrough = offers.validThrough;
    }
  }

  return schema;
}

export interface EquipmentProductsOptions {
  category: 'HVAC' | 'Water Heater';
  canonicalUrl: string;
}

export function generateEquipmentProductSchemas(options: EquipmentProductsOptions) {
  const { category, canonicalUrl } = options;
  const schemas: Record<string, any>[] = [];

  const currentYear = new Date().getFullYear();
  const validFrom = `${currentYear}-01-01`;
  const validThrough = `${currentYear}-12-31`;

  if (category === 'HVAC') {
    const hvacProducts = [
      {
        name: "Lennox Air Conditioning System",
        description: "High-efficiency Lennox central air conditioning system with SEER ratings up to 26. Professional installation by certified Lennox Premier Dealer in Tucson, Arizona.",
        brand: "Lennox",
        priceRange: "$$$$",
        offers: {
          price: 8500,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom,
          validThrough
        }
      },
      {
        name: "Trane Air Conditioning System",
        description: "Reliable Trane central air conditioning system with exceptional durability and performance. Professional installation by certified HVAC technicians.",
        brand: "Trane",
        priceRange: "$$$",
        offers: {
          price: 6500,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom,
          validThrough
        }
      },
      {
        name: "Rheem Air Conditioning System",
        description: "Energy-efficient Rheem central air conditioning system with excellent warranty coverage. Professional installation available in Tucson and surrounding areas.",
        brand: "Rheem",
        priceRange: "$$$",
        offers: {
          price: 5500,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom,
          validThrough
        }
      },
      {
        name: "Carrier Air Conditioning System",
        description: "Premium Carrier central air conditioning system with advanced features and smart home compatibility. Professional installation by experienced technicians.",
        brand: "Carrier",
        priceRange: "$$$$",
        offers: {
          price: 7500,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom,
          validThrough
        }
      },
      {
        name: "Mini Split Ductless System",
        description: "Ductless mini split air conditioning and heating system. Ideal for room additions, garages, and homes without existing ductwork. Multiple brands available.",
        brand: "Mitsubishi",
        priceRange: "$$$",
        offers: {
          price: 4500,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom,
          validThrough
        }
      }
    ];

    hvacProducts.forEach(product => {
      schemas.push(generateProductSchema({
        ...product,
        category: 'HVAC',
        canonicalUrl,
        aggregateRating: {
          ratingValue: 4.97,
          reviewCount: 3500
        }
      }));
    });
  }

  if (category === 'Water Heater') {
    const waterHeaterProducts = [
      {
        name: "Rheem Tankless Water Heater",
        description: "High-efficiency Rheem tankless water heater providing endless hot water on demand. Professional installation by licensed plumbers in Tucson, Arizona.",
        brand: "Rheem",
        priceRange: "$$$",
        offers: {
          price: 2800,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom,
          validThrough
        }
      },
      {
        name: "Bradford White Tank Water Heater",
        description: "Reliable Bradford White tank-style water heater with excellent recovery rates. Professional installation and disposal of old unit included.",
        brand: "Bradford White",
        priceRange: "$$",
        offers: {
          price: 1500,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom,
          validThrough
        }
      },
      {
        name: "Navien Tankless Water Heater",
        description: "Premium Navien condensing tankless water heater with industry-leading efficiency. Professional installation by certified technicians.",
        brand: "Navien",
        priceRange: "$$$$",
        offers: {
          price: 3500,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom,
          validThrough
        }
      },
      {
        name: "A.O. Smith Water Heater",
        description: "Trusted A.O. Smith water heater with excellent build quality and warranty. Multiple sizes and fuel types available for any home.",
        brand: "A.O. Smith",
        priceRange: "$$",
        offers: {
          price: 1200,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom,
          validThrough
        }
      },
      {
        name: "Rinnai Tankless Water Heater",
        description: "Energy Star certified Rinnai tankless water heater with recirculation technology for instant hot water. Professional installation available.",
        brand: "Rinnai",
        priceRange: "$$$",
        offers: {
          price: 2500,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom,
          validThrough
        }
      }
    ];

    waterHeaterProducts.forEach(product => {
      schemas.push(generateProductSchema({
        ...product,
        category: 'Water Heater',
        canonicalUrl,
        aggregateRating: {
          ratingValue: 4.97,
          reviewCount: 3500
        }
      }));
    });
  }

  return schemas;
}
