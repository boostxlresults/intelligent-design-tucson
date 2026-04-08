// Optimized Plumbing page for Casas Adobes - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { plumbingLocationGeneralFAQs } from '@/data/faqs/plumbing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const plumbingcasasadobesData: ServicePageData = {
  // SEO & Meta
  title: "Casas Adobes Plumbing Services | Call (520) 333-2665 Today",
  description: "Trusted plumbing services in Casas Adobes, AZ. Expert repairs, installations, & leak detection. Call (520) 333-2665 for fast local service.",
  slug: "plumbing-casas-adobes",
  
  // Hero Section
  h1: "Expert Plumbing Services in Casas Adobes, AZ",
  h2Subheading: "Reliable Plumbing Repairs, Installations & Maintenance for Your Home",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | 52 Certified Technicians | Warranty Included",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Plumbing Casas Adobes in Tucson",
  
  // Service Info
  serviceName: "Plumbing",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response Time",
    "description": "We prioritize your emergency with an average response time under 70 minutes."
  },
  {
    "title": "Advanced Leak Detection Tools",
    "description": "Utilizing state-of-the-art technology to find hidden leaks quickly and accurately."
  },
  {
    "title": "Comprehensive Plumbing Services",
    "description": "From water heater installs to faucet repairs, we cover all residential plumbing needs."
  },
  {
    "title": "Upfront, Fair Pricing",
    "description": "Transparent estimates with no hidden fees ensure you know the cost before we start."
  },
  {
    "title": "Highly Skilled Licensed Technicians",
    "description": "Our 52 licensed plumbers bring decades of expertise to every job."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "All repairs and installations come backed by a solid manufacturer and workmanship warranty."
  }
],
  content: {
    mainHeading: "Expert Plumbing Services in Casas Adobes, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Comprehensive Plumbing Solutions in Casas Adobes",
            "level": 2,
            "content": "Comprehensive Plumbing Solutions in Casas Adobes"
      },
      {
            "type": "paragraph",
            "content": "Living in Southern Arizona means dealing with unique plumbing challenges like hard water buildup and extreme heat that can damage pipes and fixtures. Our expert technicians specialize in water heater installation and maintenance designed to withstand these conditions. We also offer precise leak detection services to prevent water waste and costly damage in your home."
      },
      {
            "type": "paragraph",
            "content": "Whether you need emergency toilet repairs, faucet installation, or pipe repair, Intelligent Design\u2019s licensed plumbers deliver long-lasting solutions. We understand how monsoon storms can cause sudden plumbing issues, so our team is ready to respond quickly and effectively. Our goal is to keep your home comfortable and water-efficient year-round."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Plumbing Service Today",
            "content": "Call (520) 333-2665 for expert plumbing repairs, installations, and maintenance in Casas Adobes. Fast, reliable service you can trust.",
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
            "content": "With over 46 years of trusted service and a 4.97-star Google rating from more than 23,000 reviews, Intelligent Design is the local plumbing leader. Our team\u2019s professionalism and deep knowledge ensure your plumbing issues are resolved correctly the first time. We are fully licensed and insured, giving you peace of mind on every job."
      },
      {
            "type": "paragraph",
            "content": "We back all our work with comprehensive warranties on parts and labor. This commitment to quality means Casas Adobes homeowners can rely on us for both emergency repairs and routine maintenance. Our transparent pricing and respectful service have earned us a reputation as the community\u2019s preferred plumbing provider."
      },
      {
            "type": "heading",
            "heading": "Serving the Casas Adobes Community",
            "level": 2,
            "content": "Serving the Casas Adobes Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve the greater Tucson area including Casas Adobes, near landmarks like Picture Rock Petroglyphs, Valley of the Moon, Fort Lowell Museum, and Steam Pump Ranch. After a job well done, explore local favorites like Wildflower, Redbird Scratch Kitchen + Bar, The Parish, or AMELIAS MEXICAN KITCHEN. Our deep community roots keep us connected and committed to your neighborhood."
      },
      {
            "type": "cta",
            "heading": "Ready for Reliable Plumbing in Casas Adobes?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric at (520) 333-2665 for prompt, expert service tailored to Southern Arizona homes.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: plumbingLocationGeneralFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'Casas Adobes'),
};
