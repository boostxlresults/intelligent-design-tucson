// Optimized HVAC & AC page for East Tucson - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvaceasttucsonData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in East Tucson, AZ | Call (520) 333-2665",
  description: "Expert HVAC & AC services in East Tucson, AZ. Fast response, trusted technicians, and quality air conditioning solutions. Call (520) 333-2665 today.",
  slug: "hvac-east-tucson",
  
  // Hero Section
  h1: "Reliable HVAC & AC Services in East Tucson, AZ",
  h2Subheading: "Comfort Solutions Designed for East Tucson’s Unique Climate",
  tagline: "Rapid Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rated | Comprehensive Services | Satisfaction Guaranteed",
  heroImage: "/generated_images/HVAC_tech_with_diagnostic_tools_7049f29a.webp",
  heroImageAlt: "Professional HVAC technician providing expert air conditioning service in East Tucson, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Fast Response Time",
    "description": "Average 68-minute response time ensures your AC issues are resolved quickly."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "52 licensed technicians equipped for all HVAC repairs, installations, and maintenance."
  },
  {
    "title": "Full-Service HVAC Solutions",
    "description": "From AC tune-ups to ductwork and system replacements, we cover it all."
  },
  {
    "title": "Transparent Pricing",
    "description": "Upfront estimates with no hidden fees, tailored to fit your budget."
  },
  {
    "title": "Experienced Team",
    "description": "46+ years of trusted service with a 4.97-star rating from 23,000+ reviews."
  },
  {
    "title": "Warranty & Satisfaction",
    "description": "Quality workmanship backed by industry-leading warranties for your peace of mind."
  }
],
  content: {
    mainHeading: "Reliable HVAC & AC Services in East Tucson, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert HVAC & AC Services Tailored for East Tucson",
            "level": 2,
            "content": "Expert HVAC & AC Services Tailored for East Tucson"
      },
      {
            "type": "paragraph",
            "content": "East Tucson\u2019s extreme heat and monsoon seasons demand reliable HVAC and AC systems. Our technicians specialize in air conditioning service, AC repair, and ductwork designed to withstand Southern Arizona\u2019s harsh climate. We use advanced diagnostics and industry-leading equipment to ensure your system runs efficiently year-round."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a seasonal AC tune-up or a full HVAC installation, Intelligent Design Air Conditioning, Plumbing, Solar, & Electric offers comprehensive solutions. We address common issues like hard water corrosion and dust buildup, which are prevalent in this region, to extend your system\u2019s lifespan and improve indoor air quality."
      },
      {
            "type": "cta",
            "heading": "Get Your AC Ready for East Tucson\u2019s Heat",
            "content": "Schedule your HVAC maintenance or repair today with our fast, licensed team.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why East Tucson Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why East Tucson Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years serving the Tucson area, our reputation is built on trust and expertise. Our 4.97-star Google rating from more than 23,000 reviews proves our commitment to customer satisfaction. We understand the unique challenges of East Tucson homes and customize every HVAC solution accordingly."
      },
      {
            "type": "paragraph",
            "content": "We stand behind our work with solid warranties and ongoing support. Our team of 52 licensed technicians ensures every job meets strict quality standards, providing peace of mind that your HVAC system will perform optimally, even during the region\u2019s intense summer heat and occasional monsoon storms."
      },
      {
            "type": "heading",
            "heading": "Serving the East Tucson Community",
            "level": 2,
            "content": "Serving the East Tucson Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving neighborhoods near Tin Town, Fort Lowell Museum, Presidio San Agust\u00edn del Tucs\u00f3n Museum, and Valley of the Moon, we\u2019re part of your community. We support local favorites like Redbird Scratch Kitchen + Bar in Sam Hughes, Casa Madre Restaurant, La Frida Mexican Grill & Seafood, and Baja Cafe on Broadway. Our local expertise means we know how to keep your home comfortable no matter the season."
      },
      {
            "type": "cta",
            "heading": "Ready for Superior HVAC & AC Service in East Tucson?",
            "content": "Contact Intelligent Design today for trusted HVAC repairs, installations, and maintenance.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'East Tucson'),
};
