// Optimized Roofing page for Rillito - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialRoofRepairFAQs } from '@/data/faqs/roofing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const roofingrillitoData: ServicePageData = {
  // SEO & Meta
  title: "Expert Roofing Services in Rillito, AZ | Call (520) 333-2665",
  description: "Reliable roofing services in Rillito, AZ. Roof repair, replacement, inspections & coatings. Call Intelligent Design at (520) 333-2665 today!",
  slug: "roofing-rillito",
  
  // Hero Section
  h1: "Professional Roofing Services in Rillito, AZ",
  h2Subheading: "Durable Roof Repairs, Replacements & Inspections for Southern Arizona Homes",
  tagline: "Fast 68-Min Response | Licensed Experts | 46+ Years Experience | Comprehensive Roofing | Transparent Pricing | Industry Warranty",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Roofing Rillito in Tucson",
  
  // Service Info
  serviceName: "Roofing",
  category: "Roofing",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response ensures urgent roof repairs start promptly."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "52 licensed technicians use cutting-edge tools tailored for Arizona\u2019s climate."
  },
  {
    "title": "Comprehensive Roofing Services",
    "description": "Roof repair, replacement, tile & shingle roofing, flat roofs, coatings & inspections."
  },
  {
    "title": "Transparent & Fair Pricing",
    "description": "Upfront estimates with no hidden fees, tailored to your specific roofing needs."
  },
  {
    "title": "Highly Qualified Team",
    "description": "46+ years serving Southern Arizona with skilled, licensed roofing professionals."
  },
  {
    "title": "Reliable Industry Warranty",
    "description": "All roofing work backed by strong warranties for lasting peace of mind."
  }
],
  content: {
    mainHeading: "Professional Roofing Services in Rillito, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Roofing Solutions Built for Rillito\u2019s Climate",
            "level": 2,
            "content": "Expert Roofing Solutions Built for Rillito\u2019s Climate"
      },
      {
            "type": "paragraph",
            "content": "Rillito, AZ, homeowners face unique roofing challenges from intense monsoon storms, scorching summer heat, and hard water exposure. Intelligent Design specializes in roofing systems engineered to withstand these conditions, including durable tile and shingle roofs designed for thermal expansion and water resistance. Our roof coatings add an extra layer of protection against sun damage and leaks."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a thorough roof inspection, timely repair, or full replacement, our licensed technicians bring decades of expertise and use advanced diagnostic tools to assess and fix your roof efficiently. We understand the importance of a secure roof to protect your home and family from Southern Arizona\u2019s harsh weather."
      },
      {
            "type": "cta",
            "heading": "Get Your Roof Ready for Rillito\u2019s Weather",
            "content": "Call Intelligent Design today to schedule a roof inspection or repair. Protect your home from monsoon damage and extreme heat.",
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
            "content": "With a 4.97-star Google rating from over 23,000 reviews, Intelligent Design is trusted by Rillito residents for reliable roofing services. Our commitment to quality workmanship and exceptional customer care has made us a community favorite for more than 46 years."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every roof we service with industry-leading warranties and a team of 52 licensed technicians ready to respond quickly. Our transparent pricing and honest recommendations keep your project on budget without sacrificing quality."
      },
      {
            "type": "heading",
            "heading": "Serving the Rillito Community",
            "level": 2,
            "content": "Serving the Rillito Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving the greater Tucson area, including Rillito neighborhoods near Picture Rock Petroglyphs, Tumacacori National Historical Park, Casa Grande Ruins National Monument, and Steam Pump Ranch. After your roofing service, enjoy a meal at local favorites like Luna Cafe, Ol\u2019 Pot Hole, Sky Rider Cafe, or Guadalajara's Grill & Tequila Bar."
      },
      {
            "type": "cta",
            "heading": "Secure Your Rillito Roof Today",
            "content": "Contact Intelligent Design for expert roofing services designed for Southern Arizona\u2019s climate challenges. Call now for fast, reliable service.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialRoofRepairFAQs,
  commonQuestions: getRefinementQuestions('Roofing', 'Rillito'),
};
