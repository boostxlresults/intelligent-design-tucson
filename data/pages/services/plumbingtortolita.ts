// Optimized Plumbing page for Tortolita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { plumbingLocationGeneralFAQs } from '@/data/faqs/plumbing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const plumbingtortolitaData: ServicePageData = {
  // SEO & Meta
  title: "Expert Plumbing Services in Tortolita, AZ | Call (520) 333-2665",
  description: "Trusted plumbing services in Tortolita, AZ. Fast repairs, water heater installs, leak detection & more. Call Intelligent Design at (520) 333-2665 today.",
  slug: "plumbing-tortolita",
  
  // Hero Section
  h1: "Reliable Plumbing Services in Tortolita, AZ",
  h2Subheading: "Fast, expert plumbing solutions designed for Southern Arizona homes",
  tagline: "68-Minute Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | 4.97-Star Rated | Satisfaction Guaranteed",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Plumbing Tortolita in Tucson",
  
  // Service Info
  serviceName: "Plumbing",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "Swift 68-Minute Response Time",
    "description": "We prioritize your emergencies with an average response time under 70 minutes."
  },
  {
    "title": "Advanced Plumbing Equipment",
    "description": "Utilizing leak detection technology and durable pipe repair tools built for harsh climates."
  },
  {
    "title": "Comprehensive Plumbing Services",
    "description": "From faucet installation to water heater repair and toilet fixes, we cover all plumbing needs."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "Clear estimates with no hidden fees, tailored for Tortolita homeowners."
  },
  {
    "title": "Certified & Experienced Team",
    "description": "52 licensed technicians with over four decades of combined Southern Arizona expertise."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "We back all repairs and installations with solid warranties for your peace of mind."
  }
],
  content: {
    mainHeading: "Reliable Plumbing Services in Tortolita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Plumbing Repairs Designed for Tortolita Homes",
            "level": 2,
            "content": "Expert Plumbing Repairs Designed for Tortolita Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in Tortolita means dealing with Southern Arizona\u2019s extreme heat, hard water, and seasonal monsoons. These factors can cause pipes to corrode, leak, or burst unexpectedly. Our expert technicians specialize in durable pipe repair, leak detection, and water heater installations tailored specifically to withstand these challenging conditions."
      },
      {
            "type": "paragraph",
            "content": "Whether you need quick toilet repairs, faucet installations, or emergency plumbing fixes, Intelligent Design Air Conditioning, Plumbing, Solar, & Electric provides fast, reliable service. With 46+ years of experience and 52 licensed technicians, we ensure your plumbing lasts through Tortolita\u2019s toughest weather."
      },
      {
            "type": "cta",
            "heading": "Need Plumbing Services in Tortolita? Call Us Now!",
            "content": "Don\u2019t let a plumbing issue disrupt your home. Contact Intelligent Design for expert repair and installation services today.",
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
            "content": "Our 4.97-star rating from over 23,000 Google reviews reflects our commitment to quality and customer satisfaction. Homeowners trust us to deliver dependable plumbing solutions that address Southern Arizona\u2019s unique environmental challenges efficiently and affordably."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every job with comprehensive warranties and a skilled team dedicated to transparent pricing and fast response. Choosing Intelligent Design means choosing peace of mind for your plumbing system, no matter the season."
      },
      {
            "type": "heading",
            "heading": "Serving the Tortolita Community",
            "level": 2,
            "content": "Serving the Tortolita Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving the greater Tucson area, including neighborhoods near Honey Bee Canyon Petroglyphs, Tortolita Preserve Trailhead, Wild Burro Trailhead, and Honey Bee Canyon Park. We\u2019re familiar with local homes around popular spots like Ol\u2019 Pot Hole, The Highlands Bar & Grille, Tortolita Preserve Trailhead, and Sky Rider Cafe, ensuring prompt, personalized plumbing care."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Plumbing Service in Tortolita Today",
            "content": "Experience trusted plumbing repairs and installations with Intelligent Design. Call now for fast, expert service tailored to your home\u2019s needs.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: plumbingLocationGeneralFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'Tortolita'),
};
