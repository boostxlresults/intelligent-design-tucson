// Optimized Roofing page for Tortolita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialRoofRepairFAQs } from '@/data/faqs/roofing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const roofingtortolitaData: ServicePageData = {
  // SEO & Meta
  title: "Roofing Services in Tortolita, AZ | Call (520) 333-2665",
  description: "Expert roofing in Tortolita, AZ. Reliable roof repairs, replacements, inspections. Call Intelligent Design at (520) 333-2665 today!",
  slug: "roofing-tortolita",
  
  // Hero Section
  h1: "Professional Roofing Services in Tortolita, AZ",
  h2Subheading: "Durable Roof Repairs, Replacements & Inspections Tailored for Southern Arizona",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Roofing Tortolita in Tucson",
  
  // Service Info
  serviceName: "Roofing",
  category: "Roofing",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response ensures timely roofing services when you need them most."
  },
  {
    "title": "Advanced Roofing Equipment",
    "description": "Utilizing modern tools for precise tile, shingle, and flat roof repairs in harsh climates."
  },
  {
    "title": "Comprehensive Roofing Solutions",
    "description": "From roof coating to full replacements, we handle all roofing types with expert care."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "Clear estimates with no hidden fees, tailored to fit your budget and roofing needs."
  },
  {
    "title": "Experienced Licensed Team",
    "description": "52 certified technicians with over 46 years serving Tortolita and greater Tucson area."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "We back our roofing work with industry-leading warranties for lasting peace of mind."
  }
],
  content: {
    mainHeading: "Professional Roofing Services in Tortolita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Roofing Services Built for Tortolita\u2019s Climate",
            "level": 2,
            "content": "Expert Roofing Services Built for Tortolita\u2019s Climate"
      },
      {
            "type": "paragraph",
            "content": "Tortolita\u2019s roofing demands are unique due to Southern Arizona\u2019s intense heat, monsoons, and hard water exposure. Intelligent Design specializes in roof repairs and replacements using materials that withstand extreme temperatures and sudden storms. Whether it\u2019s tile roofing, shingle installations, or flat roof coatings, our team applies proven techniques to extend your roof\u2019s life."
      },
      {
            "type": "paragraph",
            "content": "Our roof inspections are thorough, identifying issues like cracked tiles, water damage, or heat-related shingle wear early. We recommend specific coatings to protect flat roofs from UV damage and hard water stains, common challenges in the Tortolita area. Protect your home with expert craftsmanship tailored to our desert environment."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Roofing Service Today",
            "content": "Contact Intelligent Design for a detailed roof inspection or repair estimate. Protect your Tortolita home from extreme weather with trusted local experts.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Tortolita Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Tortolita Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "Our 4.97-star Google rating and over 23,000 reviews reflect decades of trusted service in Tortolita and the greater Tucson area. Homeowners rely on our licensed technicians for honest advice, fast responses, and quality workmanship that lasts through our region\u2019s harsh weather cycles."
      },
      {
            "type": "paragraph",
            "content": "Every roofing project includes a comprehensive warranty to ensure your investment is protected. Our team\u2019s deep experience with tile, shingle, and flat roofing means you get durable solutions tailored to Tortolita\u2019s specific climate challenges."
      },
      {
            "type": "heading",
            "heading": "Serving the Tortolita Community",
            "level": 2,
            "content": "Serving the Tortolita Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving homeowners near local landmarks like Honey Bee Canyon Petroglyphs, Tortolita Preserve Trailhead, Wild Burro Trailhead, and Honey Bee Canyon Park. After your roofing service, enjoy a meal at neighborhood favorites such as Ol\u2019 Pot Hole, The Highlands Bar & Grille, or Sky Rider Cafe."
      },
      {
            "type": "cta",
            "heading": "Protect Your Roof With Intelligent Design",
            "content": "Call now to schedule your roofing inspection or repair and experience trusted service in Tortolita, AZ.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialRoofRepairFAQs,
  commonQuestions: getRefinementQuestions('Roofing', 'Tortolita'),
};
