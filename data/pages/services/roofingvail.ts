// Optimized Roofing page for Vail - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialRoofRepairFAQs } from '@/data/faqs/roofing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const roofingvailData: ServicePageData = {
  // SEO & Meta
  title: "Expert Roofing in Vail, AZ | Call Intelligent Design (520) 333-2665",
  description: "Reliable roofing services in Vail, AZ. Roof repair, replacement, inspections & more by experts. Call Intelligent Design at (520) 333-2665 today.",
  slug: "roofing-vail",
  
  // Hero Section
  h1: "Professional Roofing Services in Vail, AZ",
  h2Subheading: "Durable Roof Repair, Replacement & Inspections Tailored for Southern Arizona",
  tagline: "Fast 68-Min Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rated",
  heroImage: "/generated_images/residential_roof_installation_crew_9ad609fb.webp",
  heroImageAlt: "Professional roofing crew installing new roof in Vail, Arizona",
  
  // Service Info
  serviceName: "Roofing",
  category: "Roofing",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response ensures your roofing needs are addressed promptly."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "State-of-the-art tools paired with expert knowledge for precise roof inspections."
  },
  {
    "title": "Comprehensive Roofing Services",
    "description": "From tile and shingle roofing to flat roofs and roof coatings, we handle it all."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Fair estimates with no hidden fees tailored to your Vail home's roofing needs."
  },
  {
    "title": "Highly Qualified Team",
    "description": "52 licensed technicians with 46+ years of proven roofing experience."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "Industry-leading warranties protect your investment against monsoon damage."
  }
],
  content: {
    mainHeading: "Professional Roofing Services in Vail, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Roofing Solutions for Vail\u2019s Unique Climate",
            "level": 2,
            "content": "Expert Roofing Solutions for Vail\u2019s Unique Climate"
      },
      {
            "type": "paragraph",
            "content": "Vail\u2019s roofing demands are unique due to Southern Arizona\u2019s intense sun, monsoon storms, and hard water exposure. Our roofing services specifically address these challenges by using high-quality, weather-resistant materials like clay tiles, durable shingles, and reflective roof coatings to extend roof lifespan and improve energy efficiency."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a thorough roof inspection to spot early damage or a full roof replacement, Intelligent Design\u2019s expert technicians use advanced diagnostic tools to evaluate structural integrity. We specialize in repairing cracked tiles, replacing worn shingles, and applying protective coatings to flat roofs to combat heat and monsoon wear."
      },
      {
            "type": "cta",
            "heading": "Protect Your Vail Home with Trusted Roofing Experts",
            "content": "Call Intelligent Design today for a fast, reliable roofing service tailored to Vail\u2019s climate.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Vail Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Vail Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With a 4.97-star Google rating and over 23,000 reviews, Intelligent Design has earned the trust of Vail residents through consistent, quality workmanship. Our 46+ years in the industry ensures your roofing project is handled with unmatched expertise and care."
      },
      {
            "type": "paragraph",
            "content": "We back all roofing work with robust warranties designed to protect your home from Southern Arizona\u2019s harsh monsoons and extreme heat. Our licensed team of 52 technicians ensures every job meets strict safety and quality standards."
      },
      {
            "type": "heading",
            "heading": "Serving the Vail Community",
            "level": 2,
            "content": "Serving the Vail Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Vail and the greater Tucson area, we\u2019re familiar with local landmarks like Colossal Cave Mountain Park, Old Pueblo Hall, Rio Vista Labyrinth, and Historic Canoa Ranch in Pima County. We\u2019re also honored to serve homeowners near community favorites like JoJo's Restaurant, Tito and Pep, The Rattler at del Lago, and Montgomery's Grill & Saloon."
      },
      {
            "type": "cta",
            "heading": "Ready for Expert Roofing in Vail?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for fast, reliable roofing services built for Southern Arizona\u2019s climate.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialRoofRepairFAQs,
  commonQuestions: getRefinementQuestions('Roofing', 'Vail'),
};
