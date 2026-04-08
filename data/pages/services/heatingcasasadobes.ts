// Optimized Heating page for Casas Adobes - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { heatingLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const heatingcasasadobesData: ServicePageData = {
  // SEO & Meta
  title: "Heating Services in Casas Adobes, AZ | Call (520) 333-2665",
  description: "Expert heating repair, installation & maintenance in Casas Adobes, AZ. Trusted HVAC pros with fast response & 46+ years experience.",
  slug: "heating-casas-adobes",
  
  // Hero Section
  h1: "Reliable Heating Services in Casas Adobes, AZ",
  h2Subheading: "Comfortable, efficient heating solutions tailored for Southern Arizona homes",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 23,000+ Reviews | 52 Technicians | Trusted Warranty",
  heroImage: "/generated_images/Heating_tech_furnace_maintenance_1_0ed2be02.webp",
  heroImageAlt: "Professional heating technician servicing furnace in Casas Adobes, Arizona home",
  
  // Service Info
  serviceName: "Heating",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "Prompt heating repairs and maintenance to keep your home warm without delay."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "Skilled in heat pump service, furnace installation, and HVAC system diagnostics."
  },
  {
    "title": "Comprehensive Heating Services",
    "description": "From tune-ups to emergency repairs, we cover all your heating needs in Casas Adobes."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Affordable rates with no hidden fees, backed by clear estimates upfront."
  },
  {
    "title": "Certified & Licensed Technicians",
    "description": "52 local HVAC pros trained to handle Southern Arizona\u2019s unique climate challenges."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "We stand behind our work with warranties that ensure long-term heating system performance."
  }
],
  content: {
    mainHeading: "Reliable Heating Services in Casas Adobes, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Heating Repair and Installation in Casas Adobes",
            "level": 2,
            "content": "Expert Heating Repair and Installation in Casas Adobes"
      },
      {
            "type": "paragraph",
            "content": "Southern Arizona\u2019s climate demands heating systems that work efficiently during cool desert nights and winter months. At Intelligent Design, we specialize in heating repair, furnace installation, and heat pump service designed to withstand Casas Adobes\u2019 temperature swings and occasional monsoons. Our technicians expertly address issues caused by hard water corrosion and dust infiltration common in this region."
      },
      {
            "type": "paragraph",
            "content": "Regular heating maintenance and tune-ups improve system reliability and energy efficiency, reducing costly breakdowns during colder periods. We inspect key components like heat exchangers, thermostats, and filters to optimize performance and extend your system\u2019s lifespan. Our goal is to keep your home warm and comfortable year-round."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Heating Service Today",
            "content": "Experience fast, reliable heating solutions from Casas Adobes\u2019 trusted experts. Call now to book your service.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Casas Adobes Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Casas Adobes Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years serving the greater Tucson area, Intelligent Design has built a reputation for dependable heating services backed by 23,000+ five-star reviews. Our commitment to quality and customer satisfaction ensures your heating system is installed and repaired right the first time. We understand local climate challenges and tailor our solutions accordingly."
      },
      {
            "type": "paragraph",
            "content": "Our licensed technicians provide transparent pricing and stand behind their work with strong warranty coverage. Whether you need a quick repair or a new energy-efficient furnace, you can trust Intelligent Design for honest advice and expert service that keeps your home comfortable through every season."
      },
      {
            "type": "heading",
            "heading": "Serving the Casas Adobes Community",
            "level": 2,
            "content": "Serving the Casas Adobes Community"
      },
      {
            "type": "paragraph",
            "content": "We\u2019re proud to serve Casas Adobes and its vibrant community near landmarks like Picture Rock Petroglyphs, Valley of the Moon, Fort Lowell Museum, and Steam Pump Ranch. After a day exploring these local treasures, stop by popular eateries such as Wildflower, Redbird Scratch Kitchen + Bar, The Parish, or AMELIAS MEXICAN KITCHEN. Intelligent Design is your local partner for heating solutions that keep pace with your lifestyle."
      },
      {
            "type": "cta",
            "heading": "Get Your Heating System Ready for Winter",
            "content": "Don\u2019t wait for the cold to set in. Contact Intelligent Design for expert heating services in Casas Adobes today.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: heatingLocationFAQs,
  commonQuestions: getRefinementQuestions('Heating', 'Casas Adobes'),
};
