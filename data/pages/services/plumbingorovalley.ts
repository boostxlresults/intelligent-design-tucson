// Optimized Plumbing page for Oro Valley - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { plumbingLocationGeneralFAQs } from '@/data/faqs/plumbing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const plumbingorovalleyData: ServicePageData = {
  // SEO & Meta
  title: "Expert Plumbing Services in Oro Valley, AZ | Call (520) 333-2665",
  description: "Trusted plumbing services in Oro Valley, AZ. Fast repairs, installations & leak detection. Call Intelligent Design at (520) 333-2665 today.",
  slug: "plumbing-oro-valley",
  
  // Hero Section
  h1: "Professional Plumbing Services in Oro Valley, AZ",
  h2Subheading: "Reliable solutions for plumbing repairs, installations, and maintenance",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | Warranty Covered | Local Oro Valley Service",
  heroImage: "/generated_images/Oro_Valley_residential_area_b0254757.webp",
  heroImageAlt: "Professional plumber providing expert plumbing service in Oro Valley, Arizona modern residential community",
  
  // Service Info
  serviceName: "Plumbing",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response",
    "description": "Quick arrival to Oro Valley homes ensures minimal water damage and fast issue resolution."
  },
  {
    "title": "Advanced Plumbing Equipment",
    "description": "We use the latest leak detection and pipe repair technology tailored for hard water challenges."
  },
  {
    "title": "Comprehensive Services",
    "description": "From water heater installation to toilet and faucet repairs, we cover all plumbing needs."
  },
  {
    "title": "Transparent Pricing",
    "description": "Clear, upfront estimates with no hidden fees, ensuring budget-friendly plumbing solutions."
  },
  {
    "title": "Certified Plumbing Technicians",
    "description": "52 licensed experts trained in local plumbing codes and Southern Arizona climate impacts."
  },
  {
    "title": "Warranty on All Work",
    "description": "Peace of mind with industry-leading warranties protecting your plumbing investments."
  }
],
  content: {
    mainHeading: "Professional Plumbing Services in Oro Valley, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Comprehensive Plumbing Solutions for Oro Valley Residents",
            "level": 2,
            "content": "Comprehensive Plumbing Solutions for Oro Valley Residents"
      },
      {
            "type": "paragraph",
            "content": "Intelligent Design offers full-service plumbing tailored to Oro Valley\u2019s unique climate and infrastructure. Our team expertly handles everything from water heater installations designed to withstand extreme heat to advanced leak detection that combats hard water corrosion. Whether you\u2019re facing pipe damage after monsoon storms or require routine faucet installation, we ensure durable and efficient solutions."
      },
      {
            "type": "paragraph",
            "content": "Our technicians understand the challenges posed by Southern Arizona\u2019s environment, including mineral buildup from hard water and stress on plumbing systems caused by temperature fluctuations. We use specialized equipment to detect hidden leaks early and provide pipe repairs that extend the lifespan of your plumbing. Trust us to keep your home\u2019s water flowing smoothly year-round."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Oro Valley Plumbing Service Today",
            "content": "Don\u2019t wait for small leaks to become costly repairs. Call Intelligent Design at (520) 333-2665 for fast, reliable plumbing services.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Oro Valley Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star Google rating from more than 23,000 reviews, Intelligent Design is a trusted name in Oro Valley plumbing. Our licensed technicians bring unmatched expertise, ensuring every repair and installation meets the highest standards. Homeowners rely on us for transparency, quality workmanship, and timely service."
      },
      {
            "type": "paragraph",
            "content": "We stand behind our work with comprehensive warranties, giving you confidence in every project. Our commitment to customer satisfaction means we treat your home with respect and leave your plumbing system better than we found it. Choose Intelligent Design for plumbing solutions tailored to the demands of Southern Arizona living."
      },
      {
            "type": "heading",
            "heading": "Serving the Oro Valley Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving the greater Tucson area, Intelligent Design supports the Oro Valley community near landmarks like Picture Rock Petroglyphs, Mona\u2019s Bridge, Steam Pump Ranch, and Rio Vista Labyrinth. We\u2019re honored to serve homes near popular local spots such as North Italia, Redbird Scratch Kitchen + Bar, The Parish, and Wildflower. Our local roots drive our commitment to quality and reliability."
      },
      {
            "type": "cta",
            "heading": "Contact Intelligent Design for Expert Plumbing in Oro Valley",
            "content": "Experience fast, trusted plumbing services designed for Oro Valley\u2019s unique needs. Call us now at (520) 333-2665 to schedule your service.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: plumbingLocationGeneralFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'Oro Valley'),
};
