// Optimized HVAC & AC page for Tanque Verde - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvactanqueverdeData: ServicePageData = {
  // SEO & Meta
  title: "Expert HVAC & AC Services in Tanque Verde, AZ | (520) 333-2665",
  description: "Top HVAC & AC services in Tanque Verde, AZ. Fast, reliable AC repair, installation & maintenance. Call Intelligent Design at (520) 333-2665 today!",
  slug: "hvac-tanque-verde",
  
  // Hero Section
  h1: "HVAC & AC Services in Tanque Verde, AZ",
  h2Subheading: "Reliable Cooling & Heating Solutions Tailored for Southern Arizona",
  tagline: "Same-Day Service | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/generated_images/HVAC_tech_new_AC_installation_e3fa92fa.webp",
  heroImageAlt: "Professional HVAC technician installing premium air conditioning system in luxury Tanque Verde, Arizona home",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response ensures your AC is up and running fast."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "52 licensed techs use cutting-edge tools for precise HVAC diagnostics."
  },
  {
    "title": "Comprehensive HVAC Services",
    "description": "From AC repair to ductwork and seasonal tune-ups, we cover it all."
  },
  {
    "title": "Transparent Pricing",
    "description": "Upfront quotes with no hidden fees tailored to your Tanque Verde home."
  },
  {
    "title": "Highly Qualified Team",
    "description": "46+ years of experience backed by 23,000+ satisfied local customers."
  },
  {
    "title": "Reliable Warranties",
    "description": "Industry-leading warranties protect your investment and peace of mind."
  }
],
  content: {
    mainHeading: "HVAC & AC Services in Tanque Verde, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert HVAC & AC Solutions for Tanque Verde Homes",
            "level": 2,
            "content": "Expert HVAC & AC Solutions for Tanque Verde Homes"
      },
      {
            "type": "paragraph",
            "content": "Southern Arizona\u2019s extreme heat and monsoon season demand reliable HVAC systems. Our expert technicians specialize in AC repair and installation that withstands harsh conditions like intense heat and hard water corrosion. Whether you need a quick AC tune-up or full ductwork service, we ensure your system runs efficiently all year round."
      },
      {
            "type": "paragraph",
            "content": "We tailor every service to the unique environment of Tanque Verde, addressing frequent dust accumulation and humidity spikes common during monsoons. Our preventive maintenance programs help reduce breakdowns and extend your system\u2019s lifespan, keeping your home comfortable no matter the season."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Today",
            "content": "Don\u2019t wait for the heat to take over. Call Intelligent Design at (520) 333-2665 for fast, expert HVAC and AC services in Tanque Verde.",
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
            "content": "With over 46 years serving the greater Tucson area, Intelligent Design has built a trusted reputation. Our 4.97-star Google rating from more than 23,000 reviews reflects our commitment to quality and customer satisfaction. We stand behind every job with warranties that protect your HVAC investment."
      },
      {
            "type": "paragraph",
            "content": "Our team of 52 licensed technicians undergoes continuous training to stay ahead of industry standards. We combine expert knowledge with personalized service to ensure your HVAC system performs optimally in Tanque Verde\u2019s demanding climate."
      },
      {
            "type": "heading",
            "heading": "Serving the Tanque Verde Community",
            "level": 2,
            "content": "Serving the Tanque Verde Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve Tanque Verde residents near local landmarks like Fort Lowell Museum, Trail Dust Town, Javelina Rocks, and Sabino Canyon Recreation Area. We also support nearby favorites such as The Gardens at Bear Canyon, Tanque Verde Ranch, Zio Peppe, and The Barnyard Crafthouse & Eatery, ensuring comfortable homes and businesses throughout the community."
      },
      {
            "type": "cta",
            "heading": "Ready for Reliable HVAC Service?",
            "content": "Contact Intelligent Design today at (520) 333-2665 for skilled HVAC and AC services tailored to Tanque Verde\u2019s unique climate challenges.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Tanque Verde'),
};
