// Optimized Drain & Sewer page for Rillito - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';
import { sewerLineRepairFAQs } from '@/data/faqs/plumbing';

export const drainsewerrillitoData: ServicePageData = {
  // SEO & Meta
  title: "Drain & Sewer Services in Rillito, AZ | Call (520) 333-2665",
  description: "Expert drain and sewer services in Rillito, AZ. Fast response, trenchless repairs, camera inspections. Call Intelligent Design at (520) 333-2665.",
  slug: "drain-sewer-rillito",
  
  // Hero Section
  h1: "Drain & Sewer Services in Rillito, AZ",
  h2Subheading: "Reliable Plumbing Solutions Tailored for Southern Arizona’s Unique Needs",
  tagline: "Fast Response | Trenchless Repairs | Licensed Technicians | 46+ Years Experience | 4.97-Star Rated | Warranty Included",
  heroImage: "/generated_images/Plumbing_service_work_e21d02b3.webp",
  heroImageAlt: "Professional drain and sewer service in Rillito",
  
  // Service Info
  serviceName: "Drain & Sewer",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "We prioritize quick, efficient service to minimize your plumbing downtime."
  },
  {
    "title": "Advanced Sewer Camera Inspections",
    "description": "Pinpoint issues accurately with our state-of-the-art inspection technology."
  },
  {
    "title": "Comprehensive Drain & Sewer Repairs",
    "description": "From drain cleaning to trenchless sewer line repairs, we cover it all."
  },
  {
    "title": "Transparent Pricing",
    "description": "No hidden fees\u2014upfront estimates ensure you know the cost before we start."
  },
  {
    "title": "52 Licensed, Experienced Technicians",
    "description": "Our skilled team is trained to handle Rillito\u2019s unique plumbing challenges."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "We stand behind our work with warranties that protect your investment."
  }
],
  content: {
    mainHeading: "Drain & Sewer Services in Rillito, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Drain & Sewer Services Built for Rillito\u2019s Climate",
            "level": 2,
            "content": "Expert Drain & Sewer Services Built for Rillito\u2019s Climate"
      },
      {
            "type": "paragraph",
            "content": "Rillito, AZ faces unique plumbing challenges due to its Southern Arizona climate. Monsoons can overwhelm drainage systems, while extreme heat and hard water contribute to pipe corrosion and buildup. Intelligent Design specializes in drain and sewer services designed to withstand these conditions, ensuring your plumbing functions flawlessly year-round."
      },
      {
            "type": "paragraph",
            "content": "Our services include sewer camera inspections that identify blockages and damage without invasive digging. We also offer trenchless sewer line repairs, which minimize yard disruption\u2014a key benefit for local homeowners wanting to preserve their landscaping and outdoor spaces."
      },
      {
            "type": "cta",
            "heading": "Get Your Drain & Sewer Inspected Today",
            "content": "Don\u2019t wait until small issues become costly repairs. Contact Intelligent Design for fast, reliable service in Rillito.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Rillito Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Rillito Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star rating from more than 23,000 reviews, Intelligent Design is a trusted name in Rillito plumbing. Our team of 52 licensed technicians is committed to delivering top-quality workmanship and exceptional customer service on every job."
      },
      {
            "type": "paragraph",
            "content": "We back all drain and sewer repairs with industry-leading warranties, giving you peace of mind that your home\u2019s plumbing is protected. Our transparent pricing and rapid 68-minute average response time mean you get reliable solutions without surprises."
      },
      {
            "type": "heading",
            "heading": "Serving the Rillito Community",
            "level": 2,
            "content": "Serving the Rillito Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Rillito and the greater Tucson area, we understand the importance of community landmarks like Picture Rock Petroglyphs, Tumacacori National Historical Park, Casa Grande Ruins National Monument, and Steam Pump Ranch. We\u2019re also familiar with local favorites like Luna Cafe, Ol\u2019 Pot Hole, Sky Rider Cafe, and Guadalajara's Grill & Tequila Bar\u2014places our team enjoys after a hard day\u2019s work."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Drain & Sewer Service Now",
            "content": "Experience expert plumbing tailored to Rillito\u2019s unique environment. Call Intelligent Design today for prompt, professional service.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: sewerLineRepairFAQs,
  commonQuestions: getRefinementQuestions('Drain & Sewer', 'Rillito'),
};
