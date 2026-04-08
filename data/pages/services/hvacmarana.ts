// Optimized HVAC & AC page for Marana - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvacmaranaData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in Marana, AZ | Call (520) 333-2665",
  description: "Expert HVAC & AC repair, installation & maintenance in Marana, AZ. Trusted local service with fast response times. Call (520) 333-2665 today.",
  slug: "hvac-marana",
  
  // Hero Section
  h1: "HVAC & AC Services in Marana, AZ",
  h2Subheading: "Reliable Cooling & Heating Solutions for Marana Homes",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | 4.97-Star Rated | Warranty Included",
  heroImage: "/generated_images/HVAC_tech_customer_service_1_fd01aaab.webp",
  heroImageAlt: "Professional HVAC technician servicing air conditioning system in Marana, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response",
    "description": "Quick on-site service to tackle Marana\u2019s extreme heat and monsoon challenges fast."
  },
  {
    "title": "Advanced HVAC Expertise",
    "description": "52 licensed technicians skilled in AC repair, ductwork, and energy-efficient installations."
  },
  {
    "title": "Comprehensive HVAC Services",
    "description": "From AC tune-ups to duct sealing, we handle all your heating and cooling needs."
  },
  {
    "title": "Transparent, Fair Pricing",
    "description": "No hidden fees\u2014upfront quotes for all HVAC repairs and installations in Marana."
  },
  {
    "title": "Trusted Local Team",
    "description": "Serving Marana for 46+ years with 23,000+ stellar reviews and a 4.97-star rating."
  },
  {
    "title": "Quality Warranty Coverage",
    "description": "We back our work with reliable warranties to protect your AC and HVAC investments."
  }
],
  content: {
    mainHeading: "HVAC & AC Services in Marana, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert HVAC & AC Solutions Tailored for Marana",
            "level": 2,
            "content": "Expert HVAC & AC Solutions Tailored for Marana"
      },
      {
            "type": "paragraph",
            "content": "Marana\u2019s scorching summers and intense monsoons demand HVAC systems that perform flawlessly year-round. Our technicians specialize in AC repair and installation designed to withstand Southern Arizona\u2019s harsh climate, including hard water corrosion and dust buildup. Whether you need a fast AC tune-up or ductwork inspection, we ensure your home stays cool and comfortable."
      },
      {
            "type": "paragraph",
            "content": "We use advanced diagnostic tools to identify airflow issues and refrigerant leaks quickly, minimizing downtime during peak heat. Our energy-efficient HVAC solutions help reduce utility bills while maintaining optimal indoor air quality. From routine maintenance to emergency repairs, Intelligent Design Air Conditioning, Plumbing, Solar, & Electric is Marana\u2019s trusted partner for all HVAC needs."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Today",
            "content": "Don\u2019t let Marana\u2019s extreme weather catch you off guard. Call us now for expert AC repair, installation, or maintenance.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Marana Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Marana Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years serving the Marana and greater Tucson area, our reputation is built on quality, trust, and transparency. We have completed 23,000+ projects with a 4.97-star Google rating, proving our commitment to customer satisfaction. Our technicians are licensed experts who treat your home and HVAC system with the utmost care."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every service with comprehensive warranties, giving you peace of mind. From AC installations designed to combat dust and hard water effects to duct sealing that improves airflow and energy efficiency, our work is crafted to last in Southern Arizona\u2019s demanding environment."
      },
      {
            "type": "heading",
            "heading": "Serving the Marana Community",
            "level": 2,
            "content": "Serving the Marana Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Marana neighborhoods near landmarks like the Downtown Marana Sign and Cowboy Statue, Marana Heritage River Park, El Rio Preserve, and the Picture Rock Petroglyphs. We\u2019re local neighbors who appreciate our community\u2019s unique character and support local favorites like Luna Cafe, The Highlands Bar & Grille, Sky Rider Cafe, and Taqueria Plaza's. Our deep local roots help us understand and address the specific HVAC challenges Marana homeowners face."
      },
      {
            "type": "cta",
            "heading": "Ready for Reliable HVAC Service?",
            "content": "Contact Intelligent Design for expert HVAC & AC solutions in Marana. Fast, affordable, and trusted by thousands.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Marana'),
};
