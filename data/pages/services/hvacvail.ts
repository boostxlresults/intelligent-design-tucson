// Optimized HVAC & AC page for Vail - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvacvailData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in Vail, AZ | Call (520) 333-2665",
  description: "Trusted HVAC & AC repair, installation, and maintenance in Vail, AZ. Expert service with fast response. Call (520) 333-2665 today.",
  slug: "hvac-vail",
  
  // Hero Section
  h1: "Expert HVAC & AC Services in Vail, AZ",
  h2Subheading: "Reliable Cooling Solutions for Southern Arizona’s Tough Climate",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/generated_images/HVAC_tech_rooftop_service_1_6d155436.webp",
  heroImageAlt: "Professional HVAC technician servicing air conditioning system in Vail, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response",
    "description": "Rapid dispatch ensures your HVAC issues get resolved quickly, minimizing downtime."
  },
  {
    "title": "Advanced HVAC Equipment",
    "description": "We install and service top-tier AC units built for Vail\u2019s extreme heat and monsoon seasons."
  },
  {
    "title": "Comprehensive HVAC Services",
    "description": "From ductwork repairs to AC tune-ups and system installations, we handle it all."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Upfront quotes and fair pricing with no hidden fees for all HVAC and AC services."
  },
  {
    "title": "52 Licensed Technicians",
    "description": "Our highly trained local experts bring decades of experience to every job."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "Workmanship and parts covered to keep your AC system running worry-free."
  }
],
  content: {
    mainHeading: "Expert HVAC & AC Services in Vail, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Complete HVAC & AC Services Tailored for Vail\u2019s Climate",
            "level": 2,
            "content": "Complete HVAC & AC Services Tailored for Vail\u2019s Climate"
      },
      {
            "type": "paragraph",
            "content": "Vail\u2019s Southern Arizona climate presents unique challenges like extreme heat, monsoon humidity, and hard water corrosion. Our HVAC and AC services are designed to withstand these conditions, ensuring your home stays cool and comfortable year-round. We specialize in energy-efficient AC installations, ductwork repairs, and preventive HVAC maintenance to optimize system performance."
      },
      {
            "type": "paragraph",
            "content": "Regular AC tune-ups protect your system from dust and mineral buildup, common in the desert environment. Our licensed technicians use advanced diagnostic tools to detect issues early, reducing costly breakdowns during peak heat. Whether you need fast AC repair or a new reliable system, Intelligent Design Air Conditioning offers expert solutions tailored for Vail residents."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Today",
            "content": "Don\u2019t let the Arizona heat get the best of your home. Call Intelligent Design Air Conditioning at (520) 333-2665 for fast, expert HVAC and AC service in Vail, AZ.",
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
            "content": "With over 46 years of experience and a 4.97-star rating from more than 23,000 reviews, Intelligent Design Air Conditioning is a trusted name in Vail. Our reputation is built on reliable service, honest pricing, and quality workmanship. We understand the demands of Southern Arizona\u2019s climate and tailor every HVAC solution to last."
      },
      {
            "type": "paragraph",
            "content": "All our HVAC services come with industry-leading warranties for both parts and labor, giving you peace of mind. Our team of 52 licensed technicians undergoes continuous training to stay updated on the latest HVAC technologies and code requirements. Choosing us means choosing a dependable partner for your home\u2019s comfort."
      },
      {
            "type": "heading",
            "heading": "Serving the Vail Community",
            "level": 2,
            "content": "Serving the Vail Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Vail and the greater Tucson area, we\u2019re part of the community near landmarks like Colossal Cave Mountain Park, Old Pueblo Hall, Rio Vista Labyrinth, and Historic Canoa Ranch in Pima County. We also support local favorites including JoJo's Restaurant, Tito and Pep, The Rattler at del Lago, and Montgomery's Grill & Saloon. Our local knowledge helps us deliver personalized HVAC solutions."
      },
      {
            "type": "cta",
            "heading": "Get Your HVAC System Ready for Vail\u2019s Heat",
            "content": "Contact Intelligent Design Air Conditioning now at (520) 333-2665 for expert HVAC and AC services designed to keep your home comfortable through every Arizona season.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Vail'),
};
