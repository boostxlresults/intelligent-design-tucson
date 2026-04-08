// Optimized Plumbing page for Tanque Verde - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { plumbingLocationGeneralFAQs } from '@/data/faqs/plumbing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const plumbingtanqueverdeData: ServicePageData = {
  // SEO & Meta
  title: "Expert Plumbing Services in Tanque Verde, AZ | Call (520) 333-2665",
  description: "Trusted plumbing services in Tanque Verde, AZ. Fast repairs, installations, and leak detection by licensed pros. Call Intelligent Design today!",
  slug: "plumbing-tanque-verde",
  
  // Hero Section
  h1: "Professional Plumbing Services in Tanque Verde, AZ",
  h2Subheading: "Reliable Repairs, Installations & Leak Detection for Southern Arizona Homes",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97 Google Rating",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Plumbing Tanque Verde in Tucson",
  
  // Service Info
  serviceName: "Plumbing",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "We arrive quickly to address plumbing emergencies before damage worsens."
  },
  {
    "title": "Advanced Leak Detection Technology",
    "description": "Utilizing state-of-the-art equipment to find hidden leaks and prevent water waste."
  },
  {
    "title": "Comprehensive Plumbing Services",
    "description": "From water heater installation to pipe repair and faucet replacement, we do it all."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Upfront estimates with no hidden fees tailored to your specific plumbing needs."
  },
  {
    "title": "52 Licensed & Insured Technicians",
    "description": "Our skilled team ensures quality workmanship backed by decades of experience."
  },
  {
    "title": "Reliable Warranty on All Work",
    "description": "We stand behind our repairs and installations with solid warranties for peace of mind."
  }
],
  content: {
    mainHeading: "Professional Plumbing Services in Tanque Verde, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Trusted Plumbing Solutions for Tanque Verde Homes",
            "level": 2,
            "content": "Trusted Plumbing Solutions for Tanque Verde Homes"
      },
      {
            "type": "paragraph",
            "content": "Intelligent Design delivers expert plumbing repairs and installations tailored to the unique challenges of Tanque Verde\u2019s desert climate. From extreme heat to seasonal monsoons, your plumbing system requires durable solutions that withstand harsh conditions. Our technicians specialize in water heater installations, pipe repairs, faucet replacements, and toilet repairs designed for Southern Arizona\u2019s hard water and fluctuating temperatures."
      },
      {
            "type": "paragraph",
            "content": "We prioritize fast, efficient service to minimize disruptions and prevent costly water damage. Using advanced leak detection tools, we identify hidden issues before they escalate. Whether you need emergency pipe repair or routine maintenance, our licensed plumbers ensure your system operates smoothly year-round."
      },
      {
            "type": "cta",
            "heading": "Need Plumbing Help in Tanque Verde Now?",
            "content": "Call Intelligent Design for prompt, professional plumbing service backed by 46+ years of experience.",
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
            "content": "With a 4.97-star Google rating from over 23,000 reviews, Intelligent Design is a trusted name in Tanque Verde plumbing. Our customers rely on our rapid response and quality workmanship to keep their homes safe and comfortable. We understand local plumbing challenges and deliver solutions that last."
      },
      {
            "type": "paragraph",
            "content": "All plumbing work is performed by our team of 52 licensed technicians, ensuring professional, code-compliant results. Every repair and installation is backed by a solid warranty, providing peace of mind in the face of Southern Arizona\u2019s demanding environment."
      },
      {
            "type": "heading",
            "heading": "Serving the Tanque Verde Community",
            "level": 2,
            "content": "Serving the Tanque Verde Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve Tanque Verde and nearby neighborhoods, including areas around Fort Lowell Museum, Trail Dust Town, Javelina Rocks, and Sabino Canyon Recreation Area. Our local expertise extends to homes near popular spots like The Gardens at Bear Canyon, Tanque Verde Ranch, Zio Peppe, and The Barnyard Crafthouse & Eatery. We\u2019re dedicated to supporting our community with trusted plumbing solutions."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Tanque Verde Plumbing Service Today",
            "content": "Contact Intelligent Design for expert plumbing repairs, installations, and leak detection you can trust.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: plumbingLocationGeneralFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'Tanque Verde'),
};
