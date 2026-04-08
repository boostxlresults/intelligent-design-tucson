// Optimized Heating page for Oro Valley - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { heatingLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const heatingorovalleyData: ServicePageData = {
  // SEO & Meta
  title: "Heating Services in Oro Valley, AZ | Call (520) 333-2665",
  description: "Expert heating repair, installation & maintenance in Oro Valley, AZ. Fast, reliable HVAC service. Call Intelligent Design at (520) 333-2665 today.",
  slug: "heating-oro-valley",
  
  // Hero Section
  h1: "Professional Heating Services in Oro Valley, AZ",
  h2Subheading: "Reliable Heating Repair, Installation & Maintenance for Your Home",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 52 Technicians | Transparent Pricing | Satisfaction Guaranteed",
  heroImage: "/generated_images/Heating_tech_furnace_inspection_1_528f6e37.webp",
  heroImageAlt: "Professional heating technician performing furnace inspection in Oro Valley, Arizona",
  
  // Service Info
  serviceName: "Heating",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "We respond quickly to Oro Valley heating emergencies for fast, reliable service."
  },
  {
    "title": "Advanced Heating Equipment",
    "description": "We install and service high-efficiency furnaces, heat pumps, and thermostats."
  },
  {
    "title": "Comprehensive Heating Services",
    "description": "From repairs to tune-ups, we cover all heating needs in Oro Valley homes."
  },
  {
    "title": "Transparent, Fair Pricing",
    "description": "No hidden fees; upfront estimates ensure clear, honest heating service costs."
  },
  {
    "title": "Certified HVAC Technicians",
    "description": "Our 52 licensed pros bring expert knowledge and precision to every job."
  },
  {
    "title": "Warranty Backed Work",
    "description": "Enjoy peace of mind with industry-leading warranties on parts and labor."
  }
],
  content: {
    mainHeading: "Professional Heating Services in Oro Valley, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Trusted Heating Solutions for Oro Valley Homes",
            "level": 2,
            "content": "Trusted Heating Solutions for Oro Valley Homes"
      },
      {
            "type": "paragraph",
            "content": "At Intelligent Design, we understand how Southern Arizona\u2019s unique climate impacts your home heating systems. While Oro Valley experiences mild winters, sudden temperature drops and chilly desert nights require reliable heating solutions. Our experts specialize in furnace installation, heat pump service, and heating repair tailored to handle local challenges like monsoon humidity and hard water buildup."
      },
      {
            "type": "paragraph",
            "content": "Regular heating maintenance and tune-ups are essential to ensure peak performance and energy efficiency. We inspect critical components, clean systems, and calibrate thermostats to prevent breakdowns during colder months. Our team uses advanced diagnostic tools to quickly identify issues and restore comfort to your home with minimal disruption."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Heating Service Today",
            "content": "Don\u2019t wait for the cold to catch you off guard. Contact Intelligent Design for expert heating repair, installation, and maintenance in Oro Valley.",
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
            "content": "With over 46 years of experience and a 4.97-star rating from more than 23,000 reviews, Intelligent Design is a trusted name in Oro Valley HVAC services. Our licensed technicians prioritize transparent communication and superior workmanship, ensuring your heating system operates safely and efficiently."
      },
      {
            "type": "paragraph",
            "content": "We back all heating repairs and installations with comprehensive warranties for parts and labor, giving you confidence in every job. Our commitment to fast response times and quality service has made us a preferred heating contractor in the greater Tucson area."
      },
      {
            "type": "heading",
            "heading": "Serving the Oro Valley Community",
            "level": 2,
            "content": "Serving the Oro Valley Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Oro Valley residents near landmarks like Picture Rock Petroglyphs, Mona\u2019s Bridge, Steam Pump Ranch, and the Rio Vista Labyrinth, we know the importance of dependable heating in this vibrant community. Whether you\u2019ve just enjoyed a meal at North Italia, Redbird Scratch Kitchen + Bar, The Parish, or Wildflower, come home to a warm and comfortable house with Intelligent Design\u2019s expert HVAC services."
      },
      {
            "type": "cta",
            "heading": "Ready for Reliable Heating Service?",
            "content": "Call Intelligent Design Air Conditioning, Plumbing, Solar, & Electric today for fast, expert heating solutions in Oro Valley.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: heatingLocationFAQs,
  commonQuestions: getRefinementQuestions('Heating', 'Oro Valley'),
};
