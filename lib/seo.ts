import { Metadata } from "next";

/**
 * SEO Metadata Generation Helpers
 * 
 * Centralizes all SEO metadata generation for Intelligent Design Tucson
 * - Title tags with consistent branding
 * - Meta descriptions optimized for click-through
 * - Open Graph and Twitter cards
 * - Canonical URLs
 * - Structured data (JSON-LD) for local business, services, reviews
 */

const SITE_NAME = "Intelligent Design Tucson";
const SITE_URL = "https://www.idesignac.com";
const BUSINESS_PHONE = "(520) 333-2665";
const BUSINESS_ADDRESS = {
  streetAddress: "1145 E Fort Lowell Rd",
  addressLocality: "Tucson",
  addressRegion: "AZ",
  postalCode: "85719",
};

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Generate complete metadata for any page
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const { title, description, path, image, noIndex = false } = config;
  
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/og-default.jpg`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
    },
  };
}

/**
 * Generate service page metadata
 */
export function generateServiceMetadata(
  serviceName: string,
  h1: string,
  description: string,
  slug: string,
  image?: string
): Metadata {
  const title = `${serviceName} | ${SITE_NAME}`;
  
  return generateMetadata({
    title,
    description,
    path: `/services/${slug}`,
    image,
  });
}

/**
 * Generate location page metadata
 */
export function generateLocationMetadata(
  locationName: string,
  description: string,
  slug: string
): Metadata {
  const title = `Home Services in ${locationName} | ${SITE_NAME}`;
  
  return generateMetadata({
    title,
    description,
    path: `/service-areas/${slug}`,
  });
}

/**
 * Generate service × location page metadata
 */
export function generateServiceLocationMetadata(
  serviceName: string,
  locationName: string,
  description: string,
  serviceSlug: string,
  locationSlug: string
): Metadata {
  const title = `${serviceName} in ${locationName} | ${SITE_NAME}`;
  
  return generateMetadata({
    title,
    description,
    path: `/services/${serviceSlug}/${locationSlug}`,
  });
}

/**
 * Generate JSON-LD structured data for local business
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    telephone: BUSINESS_PHONE,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.2540,
      longitude: -110.9742,
    },
    url: SITE_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "22000",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * Generate JSON-LD structured data for a service
 */
export function generateServiceSchema(serviceName: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: BUSINESS_PHONE,
      address: {
        "@type": "PostalAddress",
        ...BUSINESS_ADDRESS,
      },
    },
    areaServed: {
      "@type": "City",
      name: "Tucson",
      "@id": "https://en.wikipedia.org/wiki/Tucson,_Arizona",
    },
    description,
    url: `${SITE_URL}/${slug}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "22000",
    },
  };
}

/**
 * Generate JSON-LD structured data for reviews
 */
export function generateReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "22000",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * Generate JSON-LD structured data for FAQs
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
