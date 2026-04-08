// Optimized Heating page for SaddleBrooke / Catalina - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';
import { heatingRepairFAQs } from '@/data/faqs/heating';

export const heatingsaddlebrookecatalinaData: ServicePageData = {
  // SEO & Meta
  title: "Heating Services in SaddleBrooke / Catalina, AZ | Call (520) 333-2665",
  description: "Top heating repair, installation & maintenance in SaddleBrooke / Catalina, AZ. Fast service by licensed pros. Call Intelligent Design at (520) 333-2665.",
  slug: "heating-saddle-brooke-catalina",
  
  // Hero Section
  h1: "Expert Heating Services in SaddleBrooke / Catalina, AZ",
  h2Subheading: "Reliable Furnace Repair, Heat Pump Service & Maintenance You Can Trust",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | Trusted Locally | Warranty Included",
  heroImage: "/generated_images/Heater_service_maintenance_image_927f5159.webp",
  heroImageAlt: "Professional heating service in Saddle Brooke / Catalina",
  
  // Service Info
  serviceName: "Heating",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Average Response",
    "description": "We prioritize your comfort with swift heating repairs and emergency service response times."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "Our team uses the latest diagnostic tools for furnaces, heat pumps, and HVAC systems."
  },
  {
    "title": "Comprehensive Heating Services",
    "description": "From furnace installation to seasonal tune-ups, we cover all your heating needs in Southern AZ."
  },
  {
    "title": "Competitive, Transparent Pricing",
    "description": "No hidden fees\u2014clear estimates for repairs, replacements, and maintenance upfront."
  },
  {
    "title": "52 Licensed, Skilled Technicians",
    "description": "Experienced professionals trained in Southern Arizona\u2019s unique climate challenges."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "We back our heating services with warranties that protect your investment and peace of mind."
  }
],
  content: {
    mainHeading: "Expert Heating Services in SaddleBrooke / Catalina, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Professional Heating Repair & Maintenance in SaddleBrooke / Catalina",
            "level": 2,
            "content": "Professional Heating Repair & Maintenance in SaddleBrooke / Catalina"
      },
      {
            "type": "paragraph",
            "content": "Heating systems in Southern Arizona face unique challenges, from intense summer heat to monsoon dust storms. Intelligent Design\u2019s heating repair team specializes in diagnosing furnace and heat pump issues quickly to restore your home\u2019s comfort. We handle everything from pilot light failures to complex heat pump diagnostics."
      },
      {
            "type": "paragraph",
            "content": "Regular heating maintenance is essential to combat the effects of hard water and dust accumulation common in the Catalina area. Our tune-up services improve system efficiency, extend equipment lifespan, and help prevent costly breakdowns during colder months."
      },
      {
            "type": "cta",
            "heading": "Need Heating Service Now?",
            "content": "Contact Intelligent Design for expert heating repairs, installations, and tune-ups in SaddleBrooke and Catalina.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why SaddleBrooke / Catalina Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why SaddleBrooke / Catalina Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of HVAC excellence and 52 licensed technicians, Intelligent Design has earned a 4.97-star rating from more than 23,000 satisfied customers. We build trust by delivering reliable heating solutions tailored for the Southern Arizona climate and your home\u2019s specific needs."
      },
      {
            "type": "paragraph",
            "content": "Every heating service we provide includes warranties that ensure your system\u2019s performance and your peace of mind. Our transparent pricing and rapid response times make us the preferred choice for heating services in the SaddleBrooke and Catalina communities."
      },
      {
            "type": "heading",
            "heading": "Serving the SaddleBrooke / Catalina Community",
            "level": 2,
            "content": "Serving the SaddleBrooke / Catalina Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve homes near landmarks like the Historic Kannally Ranch House, Oracle State Park, Vista Sun Wheel, and Oracle Historical Society. Whether you\u2019re enjoying a meal at JoJo's Restaurant, Tito and Pep, Fork & Fire Catalina Grill, or Riot Grill, know that Intelligent Design is nearby for any heating emergency or maintenance."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Heating Service Today",
            "content": "Ensure your home stays warm and comfortable year-round with Intelligent Design\u2019s expert heating services.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: heatingRepairFAQs,
  commonQuestions: getRefinementQuestions('Heating', 'SaddleBrooke / Catalina'),
};
