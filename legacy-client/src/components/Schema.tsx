import { Helmet } from 'react-helmet-async';

export default function Schema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    "alternateName": ["Intelligent Design", "Intelligent Design Tucson", "Intelligent Design AC"],
    "legalName": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    "url": "https://www.idesignac.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.idesignac.com/logo.png",
      "width": 240,
      "height": 48
    },
    "image": "https://www.idesignac.com/logo.png",
    "telephone": "+1-520-333-2665",
    "foundingDate": "1979",
    "slogan": "Tucson's Highest-Rated Home Service Experts",
    "description": "Family and veteran-owned home services company providing 24/7 HVAC, plumbing, solar installation, electrical, and roofing services in Tucson, Arizona since 1979. Licensed, bonded, and insured with over 22,000 five-star reviews.",
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
    "sameAs": [
      "https://www.facebook.com/IntelligentDesignAC/",
      "https://www.instagram.com/intelligentdesigntucson/",
      "https://www.tiktok.com/@intelligentdesigntucson",
      "https://www.youtube.com/@Idesignac",
      "https://www.linkedin.com/company/intelligent-design-air-conditioning-plumbing-solar-electric/",
      "https://www.bbb.org/us/az/tucson/profile/air-conditioning-contractor/intelligent-design-air-conditioning-plumbing-solar-electric-1286-20032256",
      "https://www.yelp.com/biz/intelligent-design-tucson",
      "https://maps.app.goo.gl/eLz89dNv9q3MdQ9s8"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.97,
      "reviewCount": 22000,
      "bestRating": 5,
      "worstRating": 1
    },
    "award": [
      "BBB A+ Accredited Business",
      "Google Guaranteed"
    ],
    "knowsAbout": [
      "HVAC Installation and Repair",
      "Air Conditioning Installation",
      "Air Conditioning Repair",
      "AC Tune-Up and Maintenance",
      "Heating System Installation",
      "Heating System Repair",
      "Furnace Installation and Repair",
      "Ductless Mini-Split Installation",
      "Ductwork Installation and Repair",
      "Indoor Air Quality Solutions",
      "Plumbing Installation and Repair",
      "Water Heater Installation",
      "Water Heater Repair",
      "Drain Cleaning and Repair",
      "Sewer Line Repair",
      "Pipe Repair and Replacement",
      "Emergency Plumbing Services",
      "Solar Panel Installation",
      "Residential Solar Installation",
      "Commercial Solar Installation",
      "Solar Maintenance and Monitoring",
      "Electrical Panel Upgrades",
      "Electrical Wiring and Rewiring",
      "Circuit Breaker Installation",
      "Generac Generator Installation",
      "Generac Generator Repair",
      "Lighting Installation and Upgrades",
      "Outlet and Switch Installation",
      "EV Charger Installation",
      "Roofing Installation and Repair",
      "Roof Replacement",
      "Tile Roof Installation and Repair",
      "Flat Roof Installation and Repair",
      "Metal Roofing Installation",
      "Shingle Roof Installation",
      "Roof Inspection",
      "Roof Coating",
      "Skylight Installation",
      "Emergency Roofing Services",
      "24/7 Emergency Services",
      "Residential Services",
      "Commercial Services"
    ],
    "knowsLanguage": ["en-US"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "HVAC Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Air Conditioning Installation",
                "description": "Professional AC installation with energy-efficient systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Air Conditioning Repair",
                "description": "24/7 emergency AC repair services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AC Tune-Up and Maintenance",
                "description": "Comprehensive 86-point AC maintenance inspection"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Heating System Installation",
                "description": "Expert heating system installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Furnace Repair",
                "description": "Emergency furnace repair and maintenance"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ductless Mini-Split Installation",
                "description": "Energy-efficient ductless mini-split systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ductwork Installation and Repair",
                "description": "Professional ductwork installation and sealing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Indoor Air Quality Solutions",
                "description": "Air purifiers, filters, and IAQ systems"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Plumbing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Water Heater Installation",
                "description": "Tankless and traditional water heater installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Water Heater Repair",
                "description": "Emergency water heater repair services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Drain Cleaning and Repair",
                "description": "Professional drain cleaning and clog removal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sewer Line Repair",
                "description": "Sewer line repair and replacement services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pipe Repair and Replacement",
                "description": "Complete pipe repair and repiping services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Plumbing Services",
                "description": "24/7 emergency plumbing repair"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Solar Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential Solar Installation",
                "description": "Complete residential solar panel installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Solar Installation",
                "description": "Commercial solar energy systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Solar Maintenance and Monitoring",
                "description": "Solar system maintenance and performance monitoring"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Electrical Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Electrical Panel Upgrades",
                "description": "Electrical panel upgrades and replacement"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Electrical Wiring and Rewiring",
                "description": "Complete home and commercial rewiring services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Circuit Breaker Installation",
                "description": "Circuit breaker installation and repair"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Generac Generator Installation",
                "description": "Whole-home Generac generator installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Generac Generator Repair",
                "description": "Generator maintenance and repair services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lighting Installation",
                "description": "Interior and exterior lighting installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "EV Charger Installation",
                "description": "Electric vehicle charging station installation"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Roofing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roof Replacement",
                "description": "Complete roof replacement services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tile Roof Installation and Repair",
                "description": "Expert tile roof installation and repair"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Flat Roof Installation and Repair",
                "description": "Commercial and residential flat roofing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Metal Roofing Installation",
                "description": "Standing seam and corrugated metal roof installation with 22-24-26 gauge materials"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shingle Roof Installation",
                "description": "Asphalt and composite shingle roofing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roof Inspection",
                "description": "Comprehensive roof inspection and assessment"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roof Coating",
                "description": "Protective roof coating application"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Skylight Installation",
                "description": "Skylight installation and repair"
              }
            }
          ]
        }
      ]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "Electrician", "Plumber", "RoofingContractor"],
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    "alternateName": ["Intelligent Design", "Intelligent Design Tucson", "Intelligent Design AC"],
    "image": "https://www.idesignac.com/logo.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.idesignac.com/logo.png",
      "width": 240,
      "height": 48
    },
    "priceRange": "$$",
    "telephone": "+1-520-333-2665",
    "email": "info@idesignac.com",
    "slogan": "Tucson's Highest-Rated Home Service Experts",
    "description": "Family and veteran-owned home services company providing 24/7 HVAC, plumbing, solar installation, electrical, and roofing services in Tucson, Arizona. Licensed, bonded, and insured with ROC licenses. Over 22,000 five-star reviews, BBB A+ accredited.",
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
    "url": "https://www.idesignac.com",
    "sameAs": [
      "https://www.facebook.com/IntelligentDesignAC/",
      "https://www.instagram.com/intelligentdesigntucson/",
      "https://www.tiktok.com/@intelligentdesigntucson",
      "https://www.youtube.com/@Idesignac",
      "https://www.linkedin.com/company/intelligent-design-air-conditioning-plumbing-solar-electric/",
      "https://www.bbb.org/us/az/tucson/profile/air-conditioning-contractor/intelligent-design-air-conditioning-plumbing-solar-electric-1286-20032256",
      "https://www.yelp.com/biz/intelligent-design-tucson",
      "https://maps.app.goo.gl/eLz89dNv9q3MdQ9s8"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Check", "Financing Available"],
    "currenciesAccepted": "USD",
    "knowsLanguage": ["en-US"],
    "award": [
      "BBB A+ Accredited Business",
      "Google Guaranteed"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.97,
      "reviewCount": 22000,
      "bestRating": 5,
      "worstRating": 1
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Tucson",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tucson",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Oro Valley",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Oro Valley",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Marana",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Marana",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Vail",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vail",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Sahuarita",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sahuarita",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Green Valley",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Green Valley",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Catalina Foothills",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Catalina Foothills",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Catalina",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Catalina",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Casas Adobes",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Casas Adobes",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Flowing Wells",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Flowing Wells",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Tanque Verde",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tanque Verde",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Corona de Tucson",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Corona de Tucson",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Drexel Heights",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Drexel Heights",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Avra Valley",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Avra Valley",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Picture Rocks",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Picture Rocks",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Tucson Estates",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tucson Estates",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Rillito",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rillito",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Red Rock",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Red Rock",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Rita Ranch",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rita Ranch",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Casa Grande",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Casa Grande",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.idesignac.com"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
