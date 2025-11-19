/**
 * Special Offers Data
 * Converted from JSON to TS module for Turbopack compatibility
 */

export const offersData = {
  offers: [
    {
      name: "0% Financing Available",
      description: "Special financing options available on approved credit for HVAC installations, solar systems, and major home improvements. Ask about our current promotional rates.",
      url: "https://idesigntucson.com/financing",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        price: "0.00",
        description: "0% APR financing on approved credit"
      },
      category: "Financing",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
      validThrough: "2025-12-31"
    },
    {
      name: "New Customer Discount",
      description: "Save $50 on your first service call when you mention this offer. Valid for new residential customers.",
      url: "https://idesigntucson.com/special-offers",
      discount: 50,
      priceCurrency: "USD",
      category: "First-Time Customer",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
      validThrough: "2025-12-31"
    },
    {
      name: "Family Protection Plan",
      description: "Comprehensive maintenance plan covering HVAC, plumbing, and electrical systems with priority emergency service, annual tune-ups, and exclusive member discounts.",
      url: "https://idesigntucson.com/family-protection-plan",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        billingPeriod: "Monthly",
        description: "Starts at $29.99/month"
      },
      category: "Maintenance Plan",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
      validThrough: "2025-12-31"
    },
    {
      name: "Military & Veterans Discount",
      description: "Special pricing for active military, veterans, and their families. Thank you for your service! Valid ID required.",
      url: "https://idesigntucson.com/special-offers",
      discount: 10,
      priceCurrency: "USD",
      category: "Military",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
      validThrough: "2025-12-31"
    }
  ]
};
