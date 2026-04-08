// Optimized Heating page for Tanque Verde - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { heatingLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const heatingtanqueverdeData: ServicePageData = {
  // SEO & Meta
  title: "Heating Services in Tanque Verde, AZ | Call (520) 333-2665",
  description: "Expert heating repair, installation & maintenance in Tanque Verde, AZ. Trusted HVAC pros with fast response & quality service. Call (520) 333-2665 today!",
  slug: "heating-tanque-verde",
  
  // Hero Section
  h1: "Reliable Heating Services in Tanque Verde, AZ",
  h2Subheading: "Expert Heating Repair, Installation & Maintenance for Your Home",
  tagline: "Fast Response | Licensed Technicians | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/generated_images/Heating_tech_system_controls_b98713b5.webp",
  heroImageAlt: "Heating Tanque Verde in Tucson",
  
  // Service Info
  serviceName: "Heating",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response",
    "description": "Quick heating service ensures your home stays warm during chilly desert nights."
  },
  {
    "title": "Advanced Heating Equipment",
    "description": "We service furnaces, heat pumps, and modern HVAC systems with expert precision."
  },
  {
    "title": "Comprehensive Heating Solutions",
    "description": "From repair to tune-ups and installations, we cover all your heating needs."
  },
  {
    "title": "Transparent, Fair Pricing",
    "description": "Upfront quotes with no hidden fees, tailored to Tanque Verde homeowners."
  },
  {
    "title": "52 Licensed HVAC Technicians",
    "description": "Experienced professionals trained to handle Southern Arizona\u2019s unique climate."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "We back our heating services with solid warranties for lasting peace of mind."
  }
],
  content: {
    mainHeading: "Reliable Heating Services in Tanque Verde, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Trusted Heating Repair & Installation in Tanque Verde",
            "level": 2,
            "content": "Trusted Heating Repair & Installation in Tanque Verde"
      },
      {
            "type": "paragraph",
            "content": "Tanque Verde\u2019s desert climate presents unique challenges for home heating. Our experts specialize in furnace repair, heat pump service, and heating maintenance tailored to handle dry heat and monsoon humidity. We ensure your system runs efficiently and reliably through seasonal temperature swings."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a heating tune-up before winter or a full furnace installation, Intelligent Design offers precision service backed by more than four decades of experience. We use advanced diagnostics to identify issues quickly, minimizing downtime and energy costs."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Heating Service Today",
            "content": "Don\u2019t wait for cold nights to catch you off guard. Call Intelligent Design for expert heating solutions in Tanque Verde.",
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
            "content": "With a 4.97-star Google rating and over 23,000 reviews, Intelligent Design is a trusted name in Tanque Verde and the greater Tucson area. Our commitment to customer satisfaction and transparent communication sets us apart in the HVAC industry."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every heating repair and installation with reliable warranties, ensuring your investment is protected. Our licensed technicians are trained to handle the wear and tear caused by Southern Arizona\u2019s hard water and extreme temperatures."
      },
      {
            "type": "heading",
            "heading": "Serving the Tanque Verde Community",
            "level": 2,
            "content": "Serving the Tanque Verde Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving homes near landmarks like the Fort Lowell Museum, Trail Dust Town, Javelina Rocks, and Sabino Canyon Recreation Area. We\u2019re honored to support residents who enjoy local favorites like The Gardens at Bear Canyon, Tanque Verde Ranch, Zio Peppe, and The Barnyard Crafthouse & Eatery."
      },
      {
            "type": "cta",
            "heading": "Contact Intelligent Design for Expert Heating Services",
            "content": "Ready for dependable heating repair, installation, or maintenance? Call us today and experience the Intelligent Design difference in Tanque Verde.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: heatingLocationFAQs,
  commonQuestions: getRefinementQuestions('Heating', 'Tanque Verde'),
};
