// Optimized Heating page for Marana - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { heatingLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const heatingmaranaData: ServicePageData = {
  // SEO & Meta
  title: "Heating Services in Marana, AZ | Call (520) 333-2665",
  description: "Expert heating repair, installation & maintenance in Marana, AZ. Trusted HVAC team with fast response & 46+ years experience. Call (520) 333-2665 today!",
  slug: "heating-marana",
  
  // Hero Section
  h1: "Professional Heating Services in Marana, AZ",
  h2Subheading: "Reliable Heating Repair, Installation, & Maintenance Tailored for Southern Arizona",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | 4.97-Star Rating | Warranty Included",
  heroImage: "/generated_images/Heating_tech_furnace_maintenance_1_0ed2be02.webp",
  heroImageAlt: "Professional heating technician performing furnace maintenance in Marana, Arizona",
  
  // Service Info
  serviceName: "Heating",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "Rapid heating service to keep Marana homes warm during chilly desert nights."
  },
  {
    "title": "Expertise in Heat Pumps & Furnaces",
    "description": "Skilled technicians install and repair heat pumps and furnaces built for local climate."
  },
  {
    "title": "Comprehensive Heating Solutions",
    "description": "From tune-ups to full system replacements, we cover all your heating needs."
  },
  {
    "title": "Upfront, Competitive Pricing",
    "description": "Transparent estimates with no hidden fees ensure affordable heating services."
  },
  {
    "title": "52 Licensed & Trained Technicians",
    "description": "Experienced HVAC pros ready to handle complex heating challenges in Marana."
  },
  {
    "title": "Manufacturer-Backed Warranties",
    "description": "We offer solid warranties to protect your heating system investment."
  }
],
  content: {
    mainHeading: "Professional Heating Services in Marana, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Heating Services Built for Marana\u2019s Unique Climate",
            "level": 2,
            "content": "Heating Services Built for Marana\u2019s Unique Climate"
      },
      {
            "type": "paragraph",
            "content": "Marana\u2019s desert climate demands heating systems that can handle wide temperature swings and dry air. Our team specializes in heat pump servicing, furnace installation, and expert heating repairs designed to maximize warmth and efficiency. We understand how monsoon dust and hard water impact equipment longevity and tailor maintenance plans accordingly."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a seasonal heating tune-up to prepare for cooler desert nights or emergency heating repair after a sudden breakdown, Intelligent Design\u2019s technicians respond quickly and work efficiently. We use industry-leading diagnostic tools to identify issues fast, restoring comfort to your home with minimal disruption."
      },
      {
            "type": "cta",
            "heading": "Keep Your Marana Home Warm & Comfortable",
            "content": "Schedule expert heating repair, installation, or maintenance today. Call our trusted HVAC team now.",
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
            "content": "With a 4.97-star Google rating and over 23,000 reviews, Intelligent Design is Marana\u2019s trusted name in heating services. Our commitment to quality workmanship and customer satisfaction has earned community-wide respect and repeat business."
      },
      {
            "type": "paragraph",
            "content": "We back every heating service with manufacturer warranties and our own satisfaction guarantee. Plus, with 46+ years of HVAC experience and a team of 52 licensed technicians, you can be confident your heating system is in expert hands."
      },
      {
            "type": "heading",
            "heading": "Serving the Marana Community",
            "level": 2,
            "content": "Serving the Marana Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving homes near local landmarks like the Downtown Marana Sign with its Cowboy Statue, Marana Heritage River Park, El Rio Preserve, and the historic Picture Rock Petroglyphs. We\u2019re also neighbors to beloved spots including Luna Cafe, The Highlands Bar & Grille, Sky Rider Cafe, and Taqueria Plaza's\u2014integral parts of our community fabric."
      },
      {
            "type": "cta",
            "heading": "Ready for Reliable Heating Service in Marana?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for expert heating solutions tailored to Southern Arizona. Call now!",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: heatingLocationFAQs,
  commonQuestions: getRefinementQuestions('Heating', 'Marana'),
};
