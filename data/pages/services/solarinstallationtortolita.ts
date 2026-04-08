// Optimized Solar Installation page for Tortolita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialSolarInstallationFAQs } from '@/data/faqs/solar';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const solarinstallationtortolitaData: ServicePageData = {
  // SEO & Meta
  title: "Solar Installation in Tortolita, AZ | Call (520) 333-2665",
  description: "Expert solar installation in Tortolita, AZ. Harness solar energy with Intelligent Design’s licensed team. Call (520) 333-2665 today!",
  slug: "solar-installation-tortolita",
  
  // Hero Section
  h1: "Solar Installation Services in Tortolita, AZ",
  h2Subheading: "Maximize Your Solar Energy Potential with Local Experts",
  tagline: "Fast Response | Licensed Professionals | 46+ Years Experience | Comprehensive Solar Solutions",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Solar Installation Tortolita in Tucson",
  
  // Service Info
  serviceName: "Solar Installation",
  category: "Solar",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Average Response",
    "description": "Our team responds swiftly to your solar installation needs across Tortolita and Tucson."
  },
  {
    "title": "Premium Solar Equipment",
    "description": "We install high-efficiency panels and advanced battery storage designed for Southern Arizona\u2019s climate."
  },
  {
    "title": "Comprehensive Solar Services",
    "description": "From design to installation to financing and net metering setup, we cover it all."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Get clear, upfront quotes with flexible solar financing options tailored to your budget."
  },
  {
    "title": "Experienced & Licensed Team",
    "description": "52 certified technicians with 46+ years delivering reliable solar installations locally."
  },
  {
    "title": "Robust Warranty Protection",
    "description": "Enjoy peace of mind with industry-leading warranties on panels, inverters, and workmanship."
  }
],
  content: {
    mainHeading: "Solar Installation Services in Tortolita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Solar Installation Tailored for Tortolita Homes",
            "level": 2,
            "content": "Expert Solar Installation Tailored for Tortolita Homes"
      },
      {
            "type": "paragraph",
            "content": "Intelligent Design provides custom solar panel installations designed for the unique conditions in Tortolita, AZ. Our systems withstand intense heat, monsoon storms, and hard water exposure common to Southern Arizona. We use durable, high-efficiency solar panels paired with smart battery storage to maximize energy savings year-round."
      },
      {
            "type": "paragraph",
            "content": "We handle everything from initial site assessment to system design, permitting, installation, and connection with local utilities for net metering. Our licensed technicians ensure your solar setup meets all safety codes and performs optimally in our desert environment."
      },
      {
            "type": "cta",
            "heading": "Ready to Go Solar in Tortolita?",
            "content": "Contact Intelligent Design today to schedule your solar consultation and start saving with clean energy.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Tortolita Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Tortolita Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a stellar 4.97-star rating from 23,000+ Google reviews, Intelligent Design is a trusted name in Tortolita. Our commitment to quality workmanship and customer satisfaction is unmatched in the greater Tucson area."
      },
      {
            "type": "paragraph",
            "content": "We back every solar installation with comprehensive warranties on equipment and labor, ensuring your investment is protected against Southern Arizona\u2019s challenging weather conditions and natural wear."
      },
      {
            "type": "heading",
            "heading": "Serving the Tortolita Community",
            "level": 2,
            "content": "Serving the Tortolita Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Tortolita and nearby neighborhoods close to landmarks like Honey Bee Canyon Petroglyphs, Tortolita Preserve Trailhead, Wild Burro Trailhead, and Honey Bee Canyon Park. When you choose Intelligent Design, you support a local business familiar with the environment surrounding Ol\u2019 Pot Hole, The Highlands Bar & Grille, Tortolita Preserve Trailhead, and Sky Rider Cafe."
      },
      {
            "type": "cta",
            "heading": "Start Your Solar Journey Today",
            "content": "Join thousands of satisfied Tortolita residents who trust Intelligent Design for expert solar installation and service.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialSolarInstallationFAQs,
  commonQuestions: getRefinementQuestions('Solar Installation', 'Tortolita'),
};
