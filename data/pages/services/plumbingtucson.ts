// Optimized Plumbing page for Tucson - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { plumbingLocationGeneralFAQs } from '@/data/faqs/plumbing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const plumbingtucsonData: ServicePageData = {
  // SEO & Meta
  title: "Expert Plumbing Tucson AZ | Call Intelligent Design (520) 333-2665",
  description: "Trusted plumbing services in Tucson, AZ. Fast response, expert repairs, and installations. Call Intelligent Design at (520) 333-2665 today!",
  slug: "plumbing-tucson",
  
  // Hero Section
  h1: "Reliable Plumbing Services in Tucson, AZ",
  h2Subheading: "Fast, Expert Plumbing Repairs & Installations for Your Tucson Home",
  tagline: "68-Minute Response | Licensed Technicians | 46+ Years Experience | Transparent Pricing",
  heroImage: "/generated_images/professional_plumber_fixing_kitchen_sink.webp",
  heroImageAlt: "Professional plumber in blue work shirt fixing kitchen sink pipes in Tucson, Arizona",
  
  // Service Info
  serviceName: "Plumbing",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Times",
    "description": "Average 68-minute response to handle urgent Tucson plumbing issues quickly."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "State-of-the-art leak detection and pipe repair technology tailored for hard water."
  },
  {
    "title": "Comprehensive Plumbing Services",
    "description": "Water heaters, faucets, toilets, pipe repairs, and more for Tucson homes."
  },
  {
    "title": "Transparent & Fair Pricing",
    "description": "Upfront estimates with no hidden fees, designed for Southern Arizona budgets."
  },
  {
    "title": "Skilled Licensed Technicians",
    "description": "52 certified plumbers with 46+ years experience servicing Tucson\u2019s unique climate."
  },
  {
    "title": "Quality Workmanship Warranty",
    "description": "Reliable repairs backed by industry-leading warranties for long-lasting peace of mind."
  }
],
  content: {
    mainHeading: "Reliable Plumbing Services in Tucson, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Plumbing Solutions for Tucson Homes",
            "level": 2,
            "content": "Expert Plumbing Solutions for Tucson Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in Tucson means dealing with extreme heat, monsoons, and hard water that can damage plumbing systems. Our expert technicians specialize in plumbing repairs tailored to Southern Arizona\u2019s unique challenges, including leak detection using advanced technology and durable pipe repairs that prevent corrosion from hard water."
      },
      {
            "type": "paragraph",
            "content": "We offer comprehensive services such as water heater installations designed to withstand the desert heat, faucet replacements to conserve water, quick toilet repairs, and prompt pipe fixes. Whether you\u2019re near Tin Town or the Valley of the Moon, Intelligent Design ensures your plumbing runs smoothly year-round."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Tucson Plumbing Service Today",
            "content": "Don\u2019t let plumbing issues disrupt your home comfort. Call Intelligent Design now for fast, reliable service in Tucson and surrounding areas.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Tucson Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Tucson Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and more than 23,000 glowing Google reviews averaging 4.97 stars, Tucson residents trust Intelligent Design for all their plumbing needs. Our licensed technicians combine local knowledge with technical expertise to deliver exceptional service that stands up to the demands of Southern Arizona\u2019s climate."
      },
      {
            "type": "paragraph",
            "content": "We back every job with a solid warranty, ensuring your investment is protected long after we leave. Our transparent pricing and rapid response times make us the plumbing company Tucson homeowners rely on for honest, dependable service."
      },
      {
            "type": "heading",
            "heading": "Serving the Tucson Community",
            "level": 2,
            "content": "Serving the Tucson Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Tucson neighborhoods near landmarks like Fort Lowell Museum, Tin Town, Valley of the Moon, and Old Tucson, we understand local plumbing challenges intimately. We\u2019re also grateful to be part of a community with vibrant dining spots such as Redbird Scratch Kitchen + Bar in Sam Hughes, Casa Madre Restaurant, Perche' No, and Caf\u00e9 \u00e0 La C'Art."
      },
      {
            "type": "cta",
            "heading": "Get Your Tucson Plumbing Needs Handled Today",
            "content": "Experience trusted plumbing repairs and installations from Tucson\u2019s leading experts. Contact Intelligent Design now for prompt, professional service.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: plumbingLocationGeneralFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'Tucson'),
};
