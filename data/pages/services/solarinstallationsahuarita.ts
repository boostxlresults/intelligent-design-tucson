// Optimized Solar Installation page for Sahuarita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialSolarInstallationFAQs } from '@/data/faqs/solar';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const solarinstallationsahuaritaData: ServicePageData = {
  // SEO & Meta
  title: "Solar Installation in Sahuarita, AZ | Call (520) 333-2665",
  description: "Expert solar installation in Sahuarita, AZ. Reliable solar panel systems, financing, and fast service. Call Intelligent Design today!",
  slug: "solar-installation-sahuarita",
  
  // Hero Section
  h1: "Solar Installation Services in Sahuarita, AZ",
  h2Subheading: "Efficient Solar Solutions Tailored for Southern Arizona Homes",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Local Focus | Competitive Pricing | Comprehensive Warranty",
  heroImage: "/generated_images/Sahuarita_Arizona_residential_community_f19c419a.webp",
  heroImageAlt: "Professional solar panel installation on Sahuarita home with Santa Rita mountain views",
  
  // Service Info
  serviceName: "Solar Installation",
  category: "Solar",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "Our average response time ensures your solar needs are met quickly and efficiently."
  },
  {
    "title": "Advanced Solar Technology",
    "description": "We install high-efficiency solar panels and battery storage optimized for Sahuarita\u2019s climate."
  },
  {
    "title": "Complete Solar Services",
    "description": "From design and installation to maintenance and net metering setup, we handle it all."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Affordable solar solutions with clear financing options customized for your budget."
  },
  {
    "title": "Certified, Skilled Team",
    "description": "52 licensed technicians with decades of experience ensure top-quality solar installations."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "Our solar systems come with robust warranties protecting your investment long-term."
  }
],
  content: {
    mainHeading: "Solar Installation Services in Sahuarita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Professional Solar Installation in Sahuarita",
            "level": 2,
            "content": "Professional Solar Installation in Sahuarita"
      },
      {
            "type": "paragraph",
            "content": "Intelligent Design specializes in solar installation tailored to Sahuarita\u2019s unique climate challenges. Our solar panels are engineered to withstand Southern Arizona\u2019s intense heat, monsoon storms, and hard water conditions, ensuring reliable energy production year-round. We design systems that maximize output and durability using premium solar equipment."
      },
      {
            "type": "paragraph",
            "content": "Our solar installations include expertly integrated solar battery storage and net metering solutions to optimize your home\u2019s energy efficiency and savings. We also offer flexible solar financing options, making clean energy affordable for every homeowner in Sahuarita and the greater Tucson area."
      },
      {
            "type": "cta",
            "heading": "Ready to Go Solar in Sahuarita?",
            "content": "Contact Intelligent Design today for a free consultation and fast solar installation service.",
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
            "content": "With over 46 years of experience and a stellar 4.97-star Google rating from more than 23,000 reviews, Intelligent Design is a trusted name in solar installation. Our licensed technicians deliver expert craftsmanship and customer care, ensuring your solar system performs flawlessly."
      },
      {
            "type": "paragraph",
            "content": "We back our work with industry-leading warranties that protect your solar investment against the harsh Sahuarita climate. Our commitment to quality and reliability makes us the preferred solar provider in the greater Tucson area."
      },
      {
            "type": "heading",
            "heading": "Serving the Sahuarita Community",
            "level": 2,
            "content": "Serving the Sahuarita Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Sahuarita, near landmarks like the ASARCO Mineral Discovery Center & Mine Tours, Titan Missile Museum, Tumacacori National Historical Park, and Empire Ranch Foundation. After your solar consultation, enjoy local favorites like National Eats, El Patio Mexican Restaurant, Manuel\u2019s Mexican Restaurant, or JerryBobs Restaurant."
      },
      {
            "type": "cta",
            "heading": "Switch to Solar Energy Today",
            "content": "Join thousands of satisfied Sahuarita homeowners who trust Intelligent Design for reliable solar installation. Call now to start your solar journey!",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialSolarInstallationFAQs,
  commonQuestions: getRefinementQuestions('Solar Installation', 'Sahuarita'),
};
