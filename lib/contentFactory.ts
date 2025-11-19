/**
 * ContentFactory - Modular content generation for service pages
 * Generates standardized sections from service-specific data
 * Target: 9-10/10 AI SEO with 750+ lines, 14+ links per service
 */

import type { ContentSection, HowToSection, CaseStudySection } from '../types/services';

// ========================================
// DATA CONTRACTS
// ========================================

export interface ServiceMetrics {
  arrivalTime: string; // e.g., "73 minutes"
  vehicleCount: number; // e.g., 42
  sameVisitRepairRate: string; // e.g., "80%"
  googleRating: string; // e.g., "4.97"
  reviewCount: string; // e.g., "22,000+"
  yearsInBusiness: string; // e.g., "45+"
  nateTechs: number; // e.g., 68
  avgExperience: string; // e.g., "17+ years"
}

export interface ServiceContext {
  // Basic Info
  serviceName: string; // e.g., "Furnaces"
  serviceType: string; // e.g., "Gas Furnace"
  serviceAction: string; // e.g., "furnace repair" or "AC installation"
  seasonality: 'heating' | 'cooling' | 'year-round';
  
  // Tucson-Specific Climate Data
  climateStats: string; // e.g., "Tucson winters drop to 30-40°F with occasional freezes"
  peakSeason: string; // e.g., "November-March" or "May-October"
  emergencyTriggers: string[]; // e.g., ["no heat on cold nights", "frozen pipes risk"]
  
  // Links
  primaryServiceLink: string; // e.g., "/services/heating-tucson"
  relatedServices: Array<{ text: string; url: string }>; // e.g., [{ text: "HVAC", url: "/services/hvac-tucson" }]
}

export interface CaseStudyData {
  title: string;
  location: string; // Tucson neighborhood
  challenge: string;
  solution: string;
  timeframe: string;
  equipment: string;
  customerQuote: string;
  results: Array<{ label: string; value: string }>;
}

export interface HowToStepData {
  id: string;
  name: string;
  description: string;
  duration: string;
  tools?: string[];
}

// ========================================
// CONTENT GENERATORS
// ========================================

/**
 * Generate opening "Why Choose Intelligent Design" paragraph
 * Pattern from AC Repair line 56-58
 */
export function generateOpeningParagraph(
  metrics: ServiceMetrics,
  context: ServiceContext
): ContentSection {
  const { serviceName, serviceAction } = context;
  
  return {
    type: "paragraph",
    content: `**Why Choose Intelligent Design for ${serviceName}:** With ${metrics.yearsInBusiness} years serving Tucson families, ${metrics.reviewCount} verified Google reviews maintaining a ${metrics.googleRating}-star rating, and ${metrics.nateTechs} NATE-certified technicians averaging ${metrics.avgExperience} of hands-on HVAC expertise, Intelligent Design has earned the trust of over 85,000 Southern Arizona homeowners for ${serviceAction}. We're the **#1 rated HVAC company in Tucson for 7 consecutive years** (2018-2024 Best of Tucson awards) with BBB A+ accreditation since 1979, a nearly perfect 5-star Google reputation from ${metrics.reviewCount} verified customer reviews, and factory authorization from Carrier, Trane, Lennox, Rheem, Goodman, and 15+ other major brands. Whether you need emergency ${serviceAction} during peak season or expert guidance on system replacement, you're choosing the company your neighbors trust with their comfort.`
  };
}

/**
 * Generate climate/seasonality paragraph
 * Pattern from Furnaces line 62
 */
export function generateClimateParagraph(context: ServiceContext): ContentSection {
  return {
    type: "paragraph",
    content: context.climateStats
  };
}

/**
 * Generate ServiceTitan response time paragraph
 * Pattern from AC Repair line 60 / Furnaces line 66
 */
export function generateResponseTimeParagraph(
  metrics: ServiceMetrics,
  context: ServiceContext
): ContentSection {
  const emergencyList = context.emergencyTriggers.join(", ");
  
  return {
    type: "paragraph",
    content: `**Same-Day ${context.serviceName} Service When You Need It:** Our ServiceTitan-powered dispatch system delivers the same industry-leading response times for ${context.seasonality === 'heating' ? 'heating' : 'cooling'} emergencies: **average ${metrics.arrivalTime} arrival** for emergency calls across metro Tucson. We maintain ${metrics.vehicleCount} fully-stocked service vehicles strategically positioned throughout Tucson, Oro Valley, Marana, Sahuarita, and Vail to respond quickly to emergencies like ${emergencyList}. Unlike competitors who reduce staff during peak season, we maintain full staffing year-round and stock every service truck with the most common parts—enabling same-visit repairs ${metrics.sameVisitRepairRate} of the time. Our in-house 24/7 dispatch team provides real-time technician tracking and text message arrival notifications so you know exactly when help will arrive. Explore our comprehensive [link:${context.primaryServiceLink}|${context.serviceName.toLowerCase()} services] for all your Tucson comfort needs.`
  };
}

/**
 * Generate trust/proof paragraph
 * Pattern from AC Repair line 62
 */
export function generateTrustParagraph(
  metrics: ServiceMetrics,
  context: ServiceContext
): ContentSection {
  return {
    type: "paragraph",
    content: `**Proven Track Record & Community Trust:** Intelligent Design has earned the trust of over 85,000 Tucson-area families with a nearly perfect **${metrics.googleRating}-star Google rating from ${metrics.reviewCount} verified reviews**—the highest-rated HVAC company in Southern Arizona. We've been the **#1 rated HVAC company in Tucson for 7 consecutive years** (2018-2024 Best of Tucson awards), maintaining BBB A+ accreditation since 1979. Our commitment to honest pricing, quality workmanship, and customer satisfaction has made us the most-referred ${context.serviceAction} provider in Pima County. When you need expert ${context.serviceAction}, you're choosing the company your neighbors trust with their [link:/about|family-owned, veteran-operated service].`
  };
}

/**
 * Generate expertise paragraph with multi-trade advantage
 * Pattern from AC Repair line 64 / Furnaces line 74
 */
export function generateExpertiseParagraph(
  metrics: ServiceMetrics,
  context: ServiceContext
): ContentSection {
  const relatedServicesLinks = context.relatedServices
    .map(s => `[link:${s.url}|${s.text}]`)
    .join(", ");
  
  return {
    type: "paragraph",
    content: `**Elite ${context.serviceName} Expertise & Multi-Trade Advantage:** Our ${metrics.nateTechs} NATE-certified technicians average ${metrics.avgExperience} of hands-on HVAC experience and complete 120+ hours of annual manufacturer training on the latest technology. Every technician carries advanced diagnostic equipment to diagnose issues accurately and safely. We're factory-authorized dealers for Carrier, Trane, Lennox, Goodman, Rheem, and 15+ other major brands, ensuring we have the expertise and genuine OEM parts for any system. Our unique advantage: as a full-service ${relatedServicesLinks} company, we can address interconnected issues that affect performance—providing comprehensive solutions that protect your investment.`
  };
}

/**
 * Generate case study section
 * Enforces proper structure per types/services.ts
 */
export function generateCaseStudySection(data: CaseStudyData): CaseStudySection {
  return {
    type: "case_study",
    title: data.title,
    location: data.location,
    challenge: data.challenge,
    solution: data.solution,
    timeframe: data.timeframe,
    equipment: data.equipment,
    customerQuote: data.customerQuote,
    results: data.results
  };
}

/**
 * Generate HowTo section
 * Pattern from AC Repair lines 415-588
 */
export function generateHowToSection(
  heading: string,
  description: string,
  steps: HowToStepData[]
): HowToSection {
  return {
    type: "howto",
    heading,
    description,
    steps: steps.map(step => ({
      id: step.id,
      name: step.name,
      description: step.description,
      duration: step.duration,
      tools: step.tools
    }))
  };
}

/**
 * Generate standard CTA section
 * Pattern from AC Repair line 68
 */
export function generateCTA(
  heading: string,
  content: string,
  serviceName: string
): ContentSection {
  return {
    type: "cta",
    heading,
    content,
    buttonText: "Schedule Service",
    buttonLink: "#schedule"
  };
}

// ========================================
// VALIDATION HELPERS
// ========================================

/**
 * Count internal links in content sections
 * Target: 14+ per page per architect guidance
 */
export function countInternalLinks(sections: ContentSection[]): number {
  let count = 0;
  
  sections.forEach(section => {
    if ('content' in section && typeof section.content === 'string') {
      const matches = section.content.match(/\[link:/g);
      if (matches) count += matches.length;
    }
  });
  
  return count;
}

/**
 * Estimate total line count for generated content
 * Target: 750+ per architect guidance
 */
export function estimateLineCount(sections: ContentSection[]): number {
  // This is a rough estimate - actual line count will vary
  // Average section ~20-30 lines in formatted data files
  return sections.length * 25;
}
