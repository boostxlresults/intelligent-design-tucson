export function KnowledgeHubSchema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Intelligent Design Air Conditioning, Plumbing, Roofing, Solar & Electric",
    "url": "https://www.idesignac.com",
    "logo": "https://www.idesignac.com/logo.png",
    "description": "Tucson's highest-rated home services company offering HVAC, plumbing, roofing, solar monitoring, and electrical services since 1979.",
    "foundingDate": "1979",
    "founder": {
      "@type": "Person",
      "name": "Andrew Dobbins"
    },
    "sameAs": [
      "https://g.page/intelligentdesignair",
      "https://www.facebook.com/idesignac",
      "https://www.instagram.com/intelligentdesigntucson",
      "https://www.bbb.org/us/az/tucson"
    ]
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Intelligent Design Air Conditioning, Plumbing, Roofing, Solar & Electric",
    "image": "https://www.idesignac.com/og-image.jpg",
    "url": "https://www.idesignac.com",
    "telephone": "+1-520-333-2665",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1145 E Fort Lowell Rd",
      "addressLocality": "Tucson",
      "addressRegion": "AZ",
      "postalCode": "85719",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.2655122,
      "longitude": -110.9540688
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "07:00",
        "closes": "16:30"
      }
    ],
    "areaServed": [
      "Tucson","Oro Valley","Marana","Vail","Sahuarita","Green Valley","Catalina Foothills","South Tucson","Three Points"
    ],
    "department": [
      { "@type": "HVACBusiness", "name": "HVAC Services" },
      { "@type": "Plumber", "name": "Plumbing Services" },
      { "@type": "RoofingContractor", "name": "Roofing Services" },
      { "@type": "Electrician", "name": "Electrical Services" }
    ]
  };

  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HVAC Services",
      "provider": { "@type": "LocalBusiness", "name": "Intelligent Design" },
      "areaServed": "Tucson, AZ",
      "serviceType": "HVAC repair, tune-ups, installation, IAQ, ductwork",
      "url": "https://www.idesignac.com/air-conditioning"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Plumbing Services",
      "provider": { "@type": "LocalBusiness", "name": "Intelligent Design" },
      "areaServed": "Tucson, AZ",
      "serviceType": "Water heaters, filtration, softening, drains, leaks, fixtures",
      "url": "https://www.idesignac.com/plumbing"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Roofing Services",
      "provider": { "@type": "LocalBusiness", "name": "Intelligent Design" },
      "areaServed": "Tucson, AZ",
      "serviceType": "Roof replacement, repairs, roof coatings",
      "url": "https://www.idesignac.com/roofing"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Electrical Services",
      "provider": { "@type": "LocalBusiness", "name": "Intelligent Design" },
      "areaServed": "Tucson, AZ",
      "serviceType": "Panel upgrades, circuits, lighting, EV chargers, surge protection",
      "url": "https://www.idesignac.com/electrical"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Solar Monitoring",
      "provider": { "@type": "LocalBusiness", "name": "Intelligent Design" },
      "areaServed": "Tucson, AZ",
      "serviceType": "Certified solar monitoring, warranty assistance, inspections",
      "url": "https://www.idesignac.com/solar"
    }
  ];

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer same-day service in Tucson?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes—priority scheduling is available, and many calls are handled the same day depending on time and location."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We are fully licensed, bonded, and insured across HVAC, Plumbing, Roofing, Electrical, and Solar Monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "What warranties do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer industry-leading warranties on repairs and installations, with extended coverage through our membership plans."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tucson and surrounding communities, including Oro Valley, Marana, Vail, Sahuarita, Green Valley, and Catalina Foothills."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      {services.map((service, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
