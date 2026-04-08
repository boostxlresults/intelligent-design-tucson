// Optimized HVAC & AC page for Rillito - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvacrillitoData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in Rillito, AZ | Call (520) 333-2665",
  description: "Expert HVAC & AC services in Rillito, AZ. Fast response, licensed techs, and 46+ years experience. Call (520) 333-2665 today!",
  slug: "hvac-rillito",
  
  // Hero Section
  h1: "Reliable HVAC & AC Services in Rillito, AZ",
  h2Subheading: "Expert Air Conditioning Repair, Installation & Maintenance for Rillito Homes",
  tagline: "Fast Response | Licensed Technicians | 46+ Years Experience | 4.97-Star Rated | Transparent Pricing | Comprehensive Warranty",
  heroImage: "/generated_images/HVAC_tech_filter_replacement_14b14933.webp",
  heroImageAlt: "Professional HVAC technician servicing air conditioning system in Rillito, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "We respond quickly to Rillito AC emergencies, minimizing downtime in extreme heat."
  },
  {
    "title": "Advanced HVAC Equipment",
    "description": "Our techs use top tools and diagnostics for precise AC repairs and efficient installations."
  },
  {
    "title": "Full-Service HVAC Solutions",
    "description": "From ductwork to tune-ups, we handle every aspect of your air conditioning system."
  },
  {
    "title": "Transparent, Fair Pricing",
    "description": "No hidden fees\u2014just honest estimates tailored to Rillito homeowners\u2019 budgets."
  },
  {
    "title": "52 Licensed Local Technicians",
    "description": "Experienced pros familiar with Southern Arizona\u2019s unique climate and HVAC needs."
  },
  {
    "title": "Comprehensive Warranty Coverage",
    "description": "We back our work with solid warranties for lasting peace of mind on all services."
  }
],
  content: {
    mainHeading: "Reliable HVAC & AC Services in Rillito, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Comprehensive HVAC & AC Services Tailored for Rillito",
            "level": 2,
            "content": "Comprehensive HVAC & AC Services Tailored for Rillito"
      },
      {
            "type": "paragraph",
            "content": "Rillito's extreme heat and monsoon season demand reliable air conditioning. We specialize in AC repair, installation, and maintenance designed for Southern Arizona\u2019s challenging climate. Our team ensures your HVAC system handles hard water effects and dust common in the area, keeping your home cool and air quality high."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a routine AC tune-up or ductwork repair, Intelligent Design\u2019s licensed technicians bring decades of experience to each job. Using state-of-the-art diagnostics, we identify issues quickly to restore comfort fast. We also install energy-efficient systems that reduce utility costs while enduring the region\u2019s heat and humidity."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Today",
            "content": "Don\u2019t wait for the heat to take a toll. Call Intelligent Design for expert HVAC & AC services in Rillito now.",
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
            "content": "With over 46 years serving Southern Arizona, we\u2019ve earned a 4.97-star rating from more than 23,000 satisfied customers. Our reputation is built on dependable service, prompt response times, and expert solutions tailored to local needs. When you choose us, you\u2019re joining a community that trusts Intelligent Design for comfort and care."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every repair and installation with comprehensive warranties that protect your investment. Our licensed technicians stay updated on the latest HVAC technology and techniques to ensure your system runs efficiently year-round, even through Rillito\u2019s intense summers and monsoon storms."
      },
      {
            "type": "heading",
            "heading": "Serving the Rillito Community",
            "level": 2,
            "content": "Serving the Rillito Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Rillito and the greater Tucson area, we\u2019re familiar with local landmarks like Picture Rock Petroglyphs, Tumacacori National Historical Park, Casa Grande Ruins National Monument, and Steam Pump Ranch. We also appreciate the local flavor around Luna Cafe, Ol\u2019 Pot Hole, Sky Rider Cafe, and Guadalajara's Grill & Tequila Bar, making us deeply connected to the community we serve."
      },
      {
            "type": "cta",
            "heading": "Ready for Reliable HVAC Service?",
            "content": "Protect your home from Southern Arizona\u2019s heat with Intelligent Design\u2019s trusted HVAC & AC expertise. Call today!",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Rillito'),
};
