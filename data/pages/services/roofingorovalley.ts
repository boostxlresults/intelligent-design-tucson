// Optimized Roofing page for Oro Valley - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialRoofRepairFAQs } from '@/data/faqs/roofing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const roofingorovalleyData: ServicePageData = {
  // SEO & Meta
  title: "Expert Roofing in Oro Valley, AZ | Call (520) 333-2665",
  description: "Top roofing services in Oro Valley, AZ. Roof repair, replacement, inspections & coatings. Call Intelligent Design at (520) 333-2665 today!",
  slug: "roofing-oro-valley",
  
  // Hero Section
  h1: "Professional Roofing Services in Oro Valley, AZ",
  h2Subheading: "Durable Roof Repair & Replacement Built for Southern Arizona’s Climate",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Warranty Backed",
  heroImage: "/generated_images/Spanish_clay_tile_roof_6bc33a61.webp",
  heroImageAlt: "Spanish clay tile roof in Oro Valley neighborhood with Catalina Mountains",
  
  // Service Info
  serviceName: "Roofing",
  category: "Roofing",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "Our skilled team responds swiftly to protect your home from weather damage."
  },
  {
    "title": "Advanced Roofing Equipment",
    "description": "Utilizing cutting-edge tools for precise tile, shingle, and flat roof work."
  },
  {
    "title": "Comprehensive Roof Services",
    "description": "From inspections to repairs, coatings, and full replacements, we cover it all."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Clear estimates with no hidden fees, tailored to your exact roofing needs."
  },
  {
    "title": "Certified, Licensed Technicians",
    "description": "52 licensed pros with 46+ years serving Oro Valley and Tucson residents."
  },
  {
    "title": "Robust Warranty Protection",
    "description": "We stand behind our work with strong warranties for peace of mind."
  }
],
  content: {
    mainHeading: "Professional Roofing Services in Oro Valley, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Roofing Built for Oro Valley\u2019s Unique Climate",
            "level": 2,
            "content": "Expert Roofing Built for Oro Valley\u2019s Unique Climate"
      },
      {
            "type": "paragraph",
            "content": "Oro Valley\u2019s roofing demands tough solutions. Our team specializes in tile, shingle, and flat roof systems designed to withstand Southern Arizona\u2019s intense heat, monsoon storms, and hard water effects. We deliver expert roof inspections to detect early signs of damage like cracked tiles or shingle wear from UV exposure."
      },
      {
            "type": "paragraph",
            "content": "Our roof coatings protect flat and low-slope roofs from water intrusion and sun damage, extending lifespan. Whether you need a minor repair after a monsoon storm or a complete roof replacement, Intelligent Design ensures durable, high-quality workmanship customized for local weather challenges."
      },
      {
            "type": "cta",
            "heading": "Protect Your Oro Valley Home\u2019s Roof Today",
            "content": "Contact Intelligent Design for fast, reliable roofing services crafted for our desert environment.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Oro Valley Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Oro Valley Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star Google rating from more than 23,000 reviews, Intelligent Design is Oro Valley\u2019s trusted roofing partner. Our licensed technicians bring unmatched expertise, ensuring every job meets strict quality standards and local building codes."
      },
      {
            "type": "paragraph",
            "content": "We back every project with comprehensive warranties, giving homeowners confidence in their roof\u2019s durability. Our average 68-minute response time means we\u2019re there when you need us most\u2014whether it\u2019s an emergency repair or routine maintenance."
      },
      {
            "type": "heading",
            "heading": "Serving the Oro Valley Community",
            "level": 2,
            "content": "Serving the Oro Valley Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Oro Valley and the greater Tucson area, we\u2019re near iconic landmarks like Picture Rock Petroglyphs, Mona\u2019s Bridge, Steam Pump Ranch, and Rio Vista Labyrinth. When you trust us, you join a community alongside favorites like North Italia, Redbird Scratch Kitchen + Bar, The Parish, and Wildflower."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Oro Valley Roofing Service Now",
            "content": "Call Intelligent Design for expert roof repairs, replacements, and inspections tailored to Southern Arizona\u2019s climate.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialRoofRepairFAQs,
  commonQuestions: getRefinementQuestions('Roofing', 'Oro Valley'),
};
