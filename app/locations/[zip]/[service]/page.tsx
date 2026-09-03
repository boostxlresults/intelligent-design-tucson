import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LocationServicePage from "@/components/pages/LocationServicePage";
import ClientSchemas from "@/components/schemas/ClientSchemas";
import { reviewsData } from '@/data/reviews';
import {
  getLocationServiceEntity,
  getAllLocationServiceParams,
} from "@/data/locationServiceData";

// Force static generation — all 300 pages built at deploy time
export const dynamic = "force-static";
export const dynamicParams = false;

// Generate static params for all 300 location×service combinations
export async function generateStaticParams() {
  return getAllLocationServiceParams();
}

// Generate metadata for each page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ zip: string; service: string }>;
}): Promise<Metadata> {
  const { zip, service } = await params;
  const entity = getLocationServiceEntity(zip, service);

  if (!entity) {
    return { title: "Page Not Found | Intelligent Design" };
  }

  return {
    title: entity.metaTitle,
    description: entity.metaDescription,
    alternates: {
      canonical: `https://www.idesignac.com/locations/${entity.pageSlug}`,
    },
    openGraph: {
      title: entity.metaTitle,
      description: entity.metaDescription,
      url: `https://www.idesignac.com/locations/${entity.pageSlug}`,
      siteName: "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: entity.metaTitle,
      description: entity.metaDescription,
    },
  };
}

// Build JSON-LD schemas for the page
function buildSchemas(entity: ReturnType<typeof getLocationServiceEntity>) {
  if (!entity) return [];

  const schemas = [];

  // LocalBusiness schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    url: "https://www.idesignac.com",
    telephone: "+15203332665",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2200 W Anklam Rd",
      addressLocality: "Tucson",
      addressRegion: "AZ",
      postalCode: "85745",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: entity.communityName,
      containedInPlace: {
        "@type": "State",
        name: "Arizona",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(reviewsData.aggregateRating.ratingValue),
      reviewCount: String(reviewsData.aggregateRating.reviewCount),
    },
  });

  // Service schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: entity.schemaServiceType || entity.serviceName,
    name: `${entity.serviceName} in ${entity.communityName}, AZ`,
    description: entity.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
      telephone: "+15203332665",
    },
    areaServed: {
      "@type": "PostalAddress",
      postalCode: entity.zipCode,
      addressRegion: "AZ",
      addressCountry: "US",
    },
    ...(entity.priceRange && { offers: { "@type": "Offer", priceRange: entity.priceRange } }),
  });

  // FAQ schema
  if (entity.faqQuestion && entity.faqAnswer) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: entity.faqQuestion,
          acceptedAnswer: {
            "@type": "Answer",
            text: entity.faqAnswer,
          },
        },
        {
          "@type": "Question",
          name: `Do you serve ${entity.communityName}, AZ ${entity.zipCode}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes! Intelligent Design serves ${entity.communityName} and the ${entity.zipCode} ZIP code. We offer same-day and emergency ${entity.serviceName} throughout Greater Tucson.`,
          },
        },
      ],
    });
  }

  // BreadcrumbList schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.idesignac.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://www.idesignac.com/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: entity.communityName,
        item: `https://www.idesignac.com/locations/${entity.zipSlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: entity.serviceName,
        item: `https://www.idesignac.com/locations/${entity.pageSlug}`,
      },
    ],
  });

  return schemas;
}

// Page component
export default async function LocationServicePageRoute({
  params,
}: {
  params: Promise<{ zip: string; service: string }>;
}) {
  const { zip, service } = await params;
  const entity = getLocationServiceEntity(zip, service);

  if (!entity) {
    notFound();
  }

  const schemas = buildSchemas(entity);

  return (
    <>
      <ClientSchemas schemas={schemas} />
      <LocationServicePage entity={entity} />
    </>
  );
}
