// Optimized Roofing page for Tanque Verde - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialRoofRepairFAQs } from '@/data/faqs/roofing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const roofingtanqueverdeData: ServicePageData = {
  // SEO & Meta
  title: "Expert Roofing in Tanque Verde, AZ | Call (520) 333-2665",
  description: "Trusted roofing services in Tanque Verde, AZ. Expert roof repair, replacement, and inspections. Call Intelligent Design at (520) 333-2665 today.",
  slug: "roofing-tanque-verde",
  
  // Hero Section
  h1: "Roofing Services in Tanque Verde, AZ",
  h2Subheading: "Durable Roof Repairs, Replacements & Inspections Tailored for Southern Arizona",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rated",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Roofing Tanque Verde in Tucson",
  
  // Service Info
  serviceName: "Roofing",
  category: "Roofing",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response Time",
    "description": "We prioritize your roofing emergencies with an average response time under 70 minutes."
  },
  {
    "title": "Advanced Roofing Technology",
    "description": "Utilizing modern roof coating and inspection tools to extend roof life in harsh climates."
  },
  {
    "title": "Comprehensive Roofing Solutions",
    "description": "From tile and shingle to flat roofs, we handle repairs, replacements, and coatings expertly."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "Clear estimates with no hidden fees for all roofing projects in Tanque Verde."
  },
  {
    "title": "Skilled Team of 52 Licensed Technicians",
    "description": "Experienced specialists trained in Southern Arizona\u2019s unique roofing challenges."
  },
  {
    "title": "Reliable Warranties for Peace of Mind",
    "description": "We back our work with solid warranties, ensuring durable protection against monsoon damage."
  }
],
  content: {
    mainHeading: "Roofing Services in Tanque Verde, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Roofing Services Built for Tanque Verde\u2019s Climate",
            "level": 2,
            "content": "Expert Roofing Services Built for Tanque Verde\u2019s Climate"
      },
      {
            "type": "paragraph",
            "content": "Tanque Verde\u2019s roofing demands resilience against intense heat, heavy monsoons, and hard water exposure. Our roofing services include detailed roof inspections to identify weather-related damage early. We specialize in tile roofing, shingle roofs, flat roof repair, and roof coating applications designed to reflect heat and prevent water intrusion."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a minor roof repair after a storm or a full roof replacement, Intelligent Design has the expertise and equipment to get the job done right. Our technicians use advanced diagnostics to assess structural integrity and recommend solutions tailored to your home\u2019s specific needs."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Roof Inspection Today",
            "content": "Protect your Tanque Verde home from weather damage with a professional roof inspection. Call us now for fast, reliable service.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Tanque Verde Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Tanque Verde Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star rating from more than 23,000 reviews, Intelligent Design is the trusted choice for roofing in Tanque Verde. Our commitment to quality workmanship and customer satisfaction sets us apart in the greater Tucson area."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every roof repair and replacement with dependable warranties, ensuring your investment is protected. Our licensed technicians are highly trained in handling the unique challenges posed by Southern Arizona\u2019s climate."
      },
      {
            "type": "heading",
            "heading": "Serving the Tanque Verde Community",
            "level": 2,
            "content": "Serving the Tanque Verde Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Tanque Verde and nearby landmarks like Fort Lowell Museum, Trail Dust Town, Javelina Rocks, and Sabino Canyon Recreation Area. We\u2019re also familiar with local favorites such as The Gardens at Bear Canyon, Tanque Verde Ranch, Zio Peppe, and The Barnyard Crafthouse & Eatery, reflecting our deep community roots."
      },
      {
            "type": "cta",
            "heading": "Get Your Roof Ready for Southern Arizona\u2019s Weather",
            "content": "Don\u2019t wait for the next storm. Contact Intelligent Design for expert roofing services in Tanque Verde today.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialRoofRepairFAQs,
  commonQuestions: getRefinementQuestions('Roofing', 'Tanque Verde'),
};
