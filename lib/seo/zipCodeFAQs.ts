/**
 * Zip Code FAQ Generation Utility
 * Generates location-specific FAQs with zip code integration for enhanced local SEO
 * Optimized for AI search engines and voice search queries
 */

export interface ZipCodeFAQ {
  question: string;
  answer: string;
}

/**
 * Generate zip code-specific FAQs for a service area
 * Creates 3 FAQs that naturally incorporate zip codes for local SEO
 */
export function generateZipCodeFAQs(
  locationName: string,
  zipCodes: string[],
  services: string[] = []
): ZipCodeFAQ[] {
  if (!zipCodes || zipCodes.length === 0) {
    return [];
  }

  const zipList = zipCodes.join(', ');
  const primaryZip = zipCodes[0];
  const multipleZips = zipCodes.length > 1;

  const faqs: ZipCodeFAQ[] = [];

  // FAQ 1: Service area coverage with zip codes
  faqs.push({
    question: `What zip codes does Intelligent Design serve in ${locationName}?`,
    answer: `We provide comprehensive home services to all ${locationName} residents in zip codes ${zipList}. Our service vehicles are strategically positioned to ensure fast response times throughout the entire ${locationName} area, typically arriving within 60-90 minutes of your call. Whether you're in ${primaryZip} or any other ${locationName} zip code, you'll receive the same high-quality service that has earned us over 22,000 five-star reviews.`
  });

  // FAQ 2: Specific service availability in zip codes
  if (services.length > 0) {
    const serviceList = services.length > 2 
      ? `${services.slice(0, -1).join(', ')}, and ${services[services.length - 1]}`
      : services.join(' and ');
    
    faqs.push({
      question: `Do you provide ${serviceList} services to all ${locationName} zip codes?`,
      answer: `Yes! We provide full ${serviceList} services to every ${locationName} zip code including ${zipList}. Our licensed technicians are familiar with the unique characteristics of homes across all ${locationName} neighborhoods and can handle everything from routine maintenance to emergency repairs. We maintain the same fast response times, transparent pricing, and quality workmanship whether you're located in ${primaryZip} or any other area of ${locationName}.`
    });
  } else {
    faqs.push({
      question: `Do you offer same-day service in all ${locationName} zip codes?`,
      answer: `Absolutely! We offer same-day service throughout ${locationName}, including zip codes ${zipList}. Our ServiceTitan dispatch system and strategically located service vehicles enable us to maintain an average 62-minute response time across all ${locationName} areas. Whether you need emergency AC repair, plumbing services, or electrical work, we're ready to serve you quickly and professionally in ${primaryZip} and all surrounding ${locationName} zip codes.`
    });
  }

  // FAQ 3: Emergency service and specific zip code
  const emergencyServices = services.filter(s => 
    s.toLowerCase().includes('hvac') || 
    s.toLowerCase().includes('air') || 
    s.toLowerCase().includes('heating') ||
    s.toLowerCase().includes('plumbing')
  );

  if (emergencyServices.length > 0) {
    faqs.push({
      question: `How quickly can you respond to emergency service calls in ${locationName} (${primaryZip})?`,
      answer: `We provide 24/7 emergency service to all ${locationName} zip codes with an average response time of 62 minutes. Our dispatch system prioritizes emergency calls, and we maintain fully-stocked service vehicles throughout the greater Tucson area to serve ${locationName} residents in ${zipList} quickly. Whether your AC fails during a 110-degree day or you discover a plumbing leak at midnight, our licensed technicians are ready to respond immediately with the parts and expertise needed to resolve your emergency.`
    });
  } else {
    faqs.push({
      question: `Are your technicians licensed to work in ${locationName} (${multipleZips ? zipList : primaryZip})?`,
      answer: `Yes, all our technicians are fully licensed, bonded, and insured to work throughout ${locationName} and all of greater Tucson. We employ Arizona-licensed professionals with extensive training in local building codes, HOA requirements, and the specific challenges of homes in ${locationName}'s climate and neighborhoods. Our technicians serving ${zipList} average 17+ years of experience and undergo continuous training to stay current with the latest home service technologies and best practices.`
    });
  }

  return faqs;
}

/**
 * Generate service-specific zip code FAQ
 * Creates a targeted FAQ for specific service + location combinations
 */
export function generateServiceZipCodeFAQ(
  serviceName: string,
  locationName: string,
  zipCodes: string[]
): ZipCodeFAQ | null {
  if (!zipCodes || zipCodes.length === 0) {
    return null;
  }

  const zipList = zipCodes.join(', ');
  const primaryZip = zipCodes[0];

  return {
    question: `Does Intelligent Design provide ${serviceName} service in ${locationName} zip code ${primaryZip}?`,
    answer: `Yes! We provide expert ${serviceName} services throughout ${locationName}, including zip codes ${zipList}. Our licensed technicians are familiar with the unique characteristics of ${locationName} homes and deliver the same high-quality service to every neighborhood we serve. With our average 62-minute response time and 22,000+ five-star reviews, you can trust us for all your ${serviceName} needs in ${primaryZip} and throughout ${locationName}.`
  };
}

/**
 * Combine existing FAQs with zip code FAQs
 * Adds zip code FAQs to the end of existing FAQ array
 */
export function enhanceFAQsWithZipCodes(
  existingFAQs: ZipCodeFAQ[],
  locationName: string,
  zipCodes: string[],
  services?: string[]
): ZipCodeFAQ[] {
  const zipFAQs = generateZipCodeFAQs(locationName, zipCodes, services);
  return [...existingFAQs, ...zipFAQs];
}
