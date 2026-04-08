// Optimized Plumbing page for Marana - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { plumbingLocationGeneralFAQs } from '@/data/faqs/plumbing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const plumbingmaranaData: ServicePageData = {
  // SEO & Meta
  title: "Expert Plumbing Services in Marana, AZ | Call (520) 333-2665",
  description: "Trusted plumbing services in Marana, AZ. Fast repairs, installations, and leak detection. Call Intelligent Design at (520) 333-2665 today.",
  slug: "plumbing-marana",
  
  // Hero Section
  h1: "Professional Plumbing Services in Marana, AZ",
  h2Subheading: "Reliable Plumbing Repairs, Installations & Maintenance Tailored for Southern Arizona",
  tagline: "68-Minute Response | Licensed Technicians | 46+ Years Experience",
  heroImage: "/generated_images/Marana_Arizona_desert_landscape_6ac2aee0.webp",
  heroImageAlt: "Professional plumber providing expert plumbing service in Marana, Arizona residential community",
  
  // Service Info
  serviceName: "Plumbing",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "Fast 68-Minute Response",
    "description": "We prioritize quick service to fix your plumbing issues before they escalate."
  },
  {
    "title": "Advanced Leak Detection",
    "description": "State-of-the-art technology locates hidden leaks to prevent costly water damage."
  },
  {
    "title": "Comprehensive Plumbing Solutions",
    "description": "From water heater installation to pipe repair, we cover all your plumbing needs."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "No hidden fees\u2014upfront quotes ensure affordable, fair pricing every time."
  },
  {
    "title": "52 Licensed Plumbing Experts",
    "description": "Our certified technicians bring decades of experience to every job."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "We back our work with warranties that protect your investment and peace of mind."
  }
],
  content: {
    mainHeading: "Professional Plumbing Services in Marana, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Plumbing Services for Marana Homes",
            "level": 2,
            "content": "Expert Plumbing Services for Marana Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in Marana means dealing with unique plumbing challenges, including hard water that causes mineral buildup and monsoon season storms that can stress your pipes. Intelligent Design\u2019s expert technicians specialize in durable pipe repairs, water heater installations, and faucet replacements designed to withstand Southern Arizona\u2019s extreme heat and fluctuating conditions."
      },
      {
            "type": "paragraph",
            "content": "We offer precise leak detection using cutting-edge equipment to catch issues early, preventing costly water damage and mold growth. Whether you need toilet repair, drain cleaning, or emergency pipe fixes, our licensed plumbers deliver reliable solutions tailored to your home\u2019s specific needs."
      },
      {
            "type": "cta",
            "heading": "Need Plumbing Help Now?",
            "content": "Contact Intelligent Design today for fast, dependable plumbing repairs and installations in Marana.",
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
            "content": "With over 46 years of experience and a 4.97-star Google rating from more than 23,000 reviews, Intelligent Design is the trusted name for plumbing in Marana. Our customers consistently praise our professionalism, expertise, and quick response times, making us the go-to plumbing company in the greater Tucson area."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every job with industry-leading warranties, ensuring your plumbing system stays reliable through the region\u2019s harsh climate. Our team of 52 licensed technicians is committed to delivering quality workmanship and customer satisfaction on every call."
      },
      {
            "type": "heading",
            "heading": "Serving the Marana Community",
            "level": 2,
            "content": "Serving the Marana Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Marana neighborhoods near landmarks like the Downtown Marana Sign and Cowboy Statue, Marana Heritage River Park, El Rio Preserve, and Picture Rock Petroglyphs. We\u2019re honored to support local families and businesses close to popular spots such as Luna Cafe, The Highlands Bar & Grille, Sky Rider Cafe, and Taqueria Plaza\u2019s."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Plumbing Service Today",
            "content": "Don\u2019t wait for plumbing problems to worsen. Call Intelligent Design for trusted service in Marana, AZ.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: plumbingLocationGeneralFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'Marana'),
};
