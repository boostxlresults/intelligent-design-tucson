// Optimized Heating page for Sahuarita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { heatingLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const heatingsahuaritaData: ServicePageData = {
  // SEO & Meta
  title: "Heating Services in Sahuarita, AZ | Call (520) 333-2665",
  description: "Expert heating repair, installation & maintenance in Sahuarita, AZ. Fast, reliable HVAC heating service. Call (520) 333-2665 today!",
  slug: "heating-sahuarita",
  
  // Hero Section
  h1: "Professional Heating Services in Sahuarita, AZ",
  h2Subheading: "Reliable HVAC heating repair, installation, and maintenance tailored for Southern Arizona homes",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating | 23,000+ Reviews | Warranty Included",
  heroImage: "/generated_images/Heating_tech_gas_furnace_service_a62fefea.webp",
  heroImageAlt: "Professional heating technician servicing gas furnace in Sahuarita, Arizona",
  
  // Service Info
  serviceName: "Heating",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response",
    "description": "Quick heating service to keep your Sahuarita home warm during cold desert nights."
  },
  {
    "title": "Advanced Heating Equipment",
    "description": "We use top HVAC brands and cutting-edge technology for efficient heating solutions."
  },
  {
    "title": "Comprehensive Heating Services",
    "description": "From furnace installation to heat pump repair and seasonal tune-ups, we cover all needs."
  },
  {
    "title": "Transparent Pricing",
    "description": "Competitive, upfront pricing with no hidden fees for all heating services."
  },
  {
    "title": "Experienced, Licensed Technicians",
    "description": "52 certified pros with 46+ years combined experience ensure expert service every time."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "We back our heating repairs and installations with reliable warranties for peace of mind."
  }
],
  content: {
    mainHeading: "Professional Heating Services in Sahuarita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Heating Repair & Installation in Sahuarita",
            "level": 2,
            "content": "Expert Heating Repair & Installation in Sahuarita"
      },
      {
            "type": "paragraph",
            "content": "Sahuarita\u2019s desert climate brings chilly winter nights and occasional cold snaps that demand a dependable heating system. Intelligent Design offers expert furnace installation, heat pump service, and heating repair tailored to protect your home from the cold. Our team understands the unique challenges Southern Arizona faces, including the impact of hard water on HVAC components and dust accumulation from monsoon winds."
      },
      {
            "type": "paragraph",
            "content": "Regular heating maintenance and tune-ups are essential to keep your system running efficiently, reduce energy costs, and extend equipment lifespan. We specialize in servicing all makes and models, ensuring your heater operates smoothly when you need it most. From quick repairs to full system replacements, our licensed technicians deliver reliable, long-lasting results."
      },
      {
            "type": "cta",
            "heading": "Keep Warm This Season with Intelligent Design",
            "content": "Schedule your heating service today and experience fast, professional HVAC care in Sahuarita.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Sahuarita Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Sahuarita Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star Google rating from more than 23,000 reviews, Intelligent Design is the trusted heating service provider in Sahuarita. Our commitment to quality workmanship and customer satisfaction sets us apart. Homeowners rely on our quick 68-minute average response time and transparent communication from start to finish."
      },
      {
            "type": "paragraph",
            "content": "Every heating repair and installation is backed by industry-leading warranties, giving you confidence in your investment. Our 52 licensed technicians continuously train on the latest HVAC technologies to ensure your heating system performs optimally, even in Southern Arizona\u2019s harsh environmental conditions."
      },
      {
            "type": "heading",
            "heading": "Serving the Sahuarita Community",
            "level": 2,
            "content": "Serving the Sahuarita Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving the greater Sahuarita and Tucson area, we\u2019re familiar with local landmarks like the ASARCO Mineral Discovery Center & Mine Tours, Titan Missile Museum, Tumacacori National Historical Park, and Empire Ranch Foundation. After a day exploring these sites, many residents enjoy dining at National Eats, El Patio Mexican Restaurant, Manuel's Mexican Restaurant, or JerryBobs Restaurant. We understand local lifestyle needs and tailor our heating services for comfort and reliability."
      },
      {
            "type": "cta",
            "heading": "Ready for Expert Heating Service?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric today for heating repairs, installations, or maintenance in Sahuarita.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: heatingLocationFAQs,
  commonQuestions: getRefinementQuestions('Heating', 'Sahuarita'),
};
