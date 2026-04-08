// Optimized Electrical page for East Tucson - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { electricalRepairFAQs } from '@/data/faqs/electrical';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const electricaleasttucsonData: ServicePageData = {
  // SEO & Meta
  title: "Electrical Services in East Tucson, AZ | Call (520) 333-2665",
  description: "Expert electrical services in East Tucson, AZ. Fast, reliable repairs, panel upgrades, EV charger installs & more. Call Intelligent Design today!",
  slug: "electrical-east-tucson",
  
  // Hero Section
  h1: "Electrical Services in East Tucson, AZ",
  h2Subheading: "Trusted Electrical Repairs, Upgrades & Installations for Your Home",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 52 Technicians | 4.97-Star Rating | Warranty Backed",
  heroImage: "/generated_images/Electrical_service_work_e21d02b3.webp",
  heroImageAlt: "Professional licensed electrician providing expert electrical service to East Tucson home",
  
  // Service Info
  serviceName: "Electrical",
  category: "Electrical",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "We prioritize your safety with an average response time of just 68 minutes."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "Our team uses state-of-the-art tools tailored for Southern Arizona\u2019s climate challenges."
  },
  {
    "title": "Comprehensive Electrical Services",
    "description": "From panel upgrades to EV charger installations and whole-home rewiring, we cover it all."
  },
  {
    "title": "Transparent, Fair Pricing",
    "description": "Competitive rates with no hidden fees, providing honest estimates before work begins."
  },
  {
    "title": "Certified & Licensed Technicians",
    "description": "52 skilled electricians with 46+ years of local experience ensure quality and safety."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "All electrical work is backed by a solid warranty for your peace of mind."
  }
],
  content: {
    mainHeading: "Electrical Services in East Tucson, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Electrical Solutions for East Tucson Homes",
            "level": 2,
            "content": "Expert Electrical Solutions for East Tucson Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in East Tucson means contending with Southern Arizona\u2019s harsh climate\u2014extreme heat, monsoon storms, and hard water exposure. Our licensed electricians specialize in durable electrical repairs and upgrades that protect your home\u2019s wiring and systems from these challenges. Whether you need a panel upgrade to handle increased loads or repairs after storm damage, we deliver dependable solutions."
      },
      {
            "type": "paragraph",
            "content": "We also offer advanced EV charger installations, energy-efficient lighting upgrades, and comprehensive whole-home rewiring to improve safety and performance. Our technicians are trained to diagnose and resolve electrical issues quickly, minimizing downtime and ensuring your home remains powered safely and efficiently."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Electrical Service Today",
            "content": "Don\u2019t wait for electrical problems to escalate. Call Intelligent Design at (520) 333-2665 for fast, expert service in East Tucson.",
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
            "content": "With over 46 years of experience and 52 licensed technicians, Intelligent Design is a trusted name in East Tucson electrical services. Our 4.97-star Google rating from 23,000+ reviews reflects our commitment to quality, professionalism, and customer satisfaction."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every job with comprehensive warranties, ensuring your electrical systems are safe and reliable long after our technicians leave. Our transparent pricing and rapid average 68-minute response time make us the preferred choice for homeowners looking for peace of mind."
      },
      {
            "type": "heading",
            "heading": "Serving the East Tucson Community",
            "level": 2,
            "content": "Serving the East Tucson Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving neighborhoods near Tin Town, Fort Lowell Museum, Presidio San Agust\u00edn del Tucs\u00f3n Museum, and Valley of the Moon. Whether you\u2019re dining at Redbird Scratch Kitchen + Bar in Sam Hughes, enjoying Casa Madre Restaurant, savoring flavors at La Frida Mexican Grill & Seafood, or grabbing a bite at Baja Cafe on Broadway, you can count on Intelligent Design for expert local electrical service."
      },
      {
            "type": "cta",
            "heading": "Get Reliable Electrical Service in East Tucson",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric today. Call (520) 333-2665 for prompt and professional electrical repairs and upgrades.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: electricalRepairFAQs,
  commonQuestions: getRefinementQuestions('Electrical', 'East Tucson'),
};
