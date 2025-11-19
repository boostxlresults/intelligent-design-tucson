/**
 * ContactPoint Schema Generator
 * Enhanced contact information for improved accessibility in search results
 */

import { BUSINESS_INFO } from './constants';

export interface ContactPointSchemaOptions {
  includeEmergency?: boolean; // Include 24/7 emergency service contact
}

export function generateContactPointSchemas(options: ContactPointSchemaOptions = {}) {
  const { includeEmergency = true } = options;
  
  const contactPoints = [
    {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phone,
      "contactType": "customer service",
      "areaServed": "AZ",
      "availableLanguage": ["English", "Spanish"],
      "contactOption": ["TollFree"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      }
    }
  ];

  if (includeEmergency) {
    contactPoints.push({
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phone,
      "contactType": "emergency",
      "areaServed": "AZ",
      "availableLanguage": ["English", "Spanish"],
      "contactOption": ["TollFree"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    });
  }

  return contactPoints;
}
