// Optimized Electrical page for Tanque Verde - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { electricalRepairFAQs } from '@/data/faqs/electrical';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const electricaltanqueverdeData: ServicePageData = {
  // SEO & Meta
  title: "Electrical Services in Tanque Verde, AZ | Call (520) 333-2665",
  description: "Expert electrical services in Tanque Verde, AZ. Repairs, panel upgrades, EV chargers, and more. Fast, licensed, and trusted electricians near you.",
  slug: "electrical-tanque-verde",
  
  // Hero Section
  h1: "Trusted Electrical Services in Tanque Verde, AZ",
  h2Subheading: "Reliable Repairs, Upgrades & Installations for Your Home",
  tagline: "Fast Response | Licensed Technicians | 46+ Years Experience | Transparent Pricing | 4.97-Star Rated | Warranty Included",
  heroImage: "/generated_images/Electrical_service_work_e21d02b3.webp",
  heroImageAlt: "Professional electrician providing expert electrical service in Tanque Verde, Arizona upscale homes",
  
  // Service Info
  serviceName: "Electrical",
  category: "Electrical",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Average Response",
    "description": "Our team arrives quickly to handle electrical emergencies in Tanque Verde and greater Tucson."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "We use state-of-the-art tools and techniques for panel upgrades, EV chargers, and rewiring."
  },
  {
    "title": "Comprehensive Electrical Services",
    "description": "From lighting and outlets to whole-home rewiring, we cover all your electrical needs."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "No hidden fees\u2014clear estimates ensure you know exactly what to expect."
  },
  {
    "title": "Skilled Team of 52 Licensed Pros",
    "description": "Our electricians are fully licensed, highly trained, and experienced in Southern Arizona conditions."
  },
  {
    "title": "Reliable Warranty for Peace of Mind",
    "description": "All work is backed by our industry-leading warranty protecting your investment."
  }
],
  content: {
    mainHeading: "Trusted Electrical Services in Tanque Verde, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Electrical Services Tailored for Tanque Verde Homes",
            "level": 2,
            "content": "Expert Electrical Services Tailored for Tanque Verde Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in Tanque Verde means dealing with Southern Arizona's extreme heat, monsoon storms, and hard water effects on home electrical systems. Our licensed electricians specialize in durable repairs and upgrades designed to withstand these challenges. Whether you need a panel upgrade to handle modern appliances or whole-home rewiring to replace old, damaged wiring, we deliver safe, reliable solutions."
      },
      {
            "type": "paragraph",
            "content": "We also install EV chargers to support your electric vehicle needs, along with energy-efficient lighting and additional outlets customized for your lifestyle. Our technicians bring over 46 years of experience and use advanced diagnostic tools to quickly identify and fix electrical issues, ensuring your home stays powered and protected."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Electrical Service Today",
            "content": "Call Intelligent Design now for fast, expert electrical repairs and installations in Tanque Verde. Our team is ready to help with all your home\u2019s electrical needs.",
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
            "content": "Our 4.97-star Google rating and over 23,000 reviews reflect our commitment to quality and customer satisfaction. Tanque Verde residents trust us for our rapid response times, transparent pricing, and expert workmanship tailored to local climate conditions."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every job with a strong warranty, giving you peace of mind. Our team of 52 licensed electricians is trained specifically to address the electrical challenges homes face in the greater Tucson area, ensuring long-lasting, safe results."
      },
      {
            "type": "heading",
            "heading": "Serving the Tanque Verde Community",
            "level": 2,
            "content": "Serving the Tanque Verde Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Tanque Verde and nearby neighborhoods, we are your local electrical experts. Whether you\u2019re near the Fort Lowell Museum, exploring Trail Dust Town, hiking Javelina Rocks, or enjoying Sabino Canyon Recreation Area, our technicians are just a call away. We also support local favorites like The Gardens at Bear Canyon, Tanque Verde Ranch, Zio Peppe, and The Barnyard Crafthouse & Eatery with trusted electrical services."
      },
      {
            "type": "cta",
            "heading": "Contact Intelligent Design for Electrical Solutions",
            "content": "Ready to upgrade or repair your home\u2019s electrical system? Call Intelligent Design for trusted service in Tanque Verde today.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: electricalRepairFAQs,
  commonQuestions: getRefinementQuestions('Electrical', 'Tanque Verde'),
};
