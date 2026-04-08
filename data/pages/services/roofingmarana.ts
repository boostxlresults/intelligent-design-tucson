// Optimized Roofing page for Marana - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialRoofRepairFAQs } from '@/data/faqs/roofing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const roofingmaranaData: ServicePageData = {
  // SEO & Meta
  title: "Expert Roofing in Marana, AZ | Call (520) 333-2665 Today",
  description: "Reliable roofing services in Marana, AZ. Roof repair, replacement & inspections tailored for Southern Arizona's climate. Call (520) 333-2665 now.",
  slug: "roofing-marana",
  
  // Hero Section
  h1: "Professional Roofing Services in Marana, AZ",
  h2Subheading: "Durable Roof Repairs, Replacements & Inspections Built for Southern Arizona",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Fair Pricing | Quality Warranty | Local Trusted",
  heroImage: "/generated_images/Marana_Arizona_desert_landscape_6ac2aee0.webp",
  heroImageAlt: "Professional roofing service in Marana, Arizona with Tortolita Mountains backdrop",
  
  // Service Info
  serviceName: "Roofing",
  category: "Roofing",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "Our average response time ensures your roofing issues are addressed promptly and efficiently."
  },
  {
    "title": "Advanced Roofing Equipment",
    "description": "We use state-of-the-art tools for precise roof inspections and durable repairs tailored to tile and shingle roofs."
  },
  {
    "title": "Comprehensive Roofing Services",
    "description": "From roof coating to flat roof repairs, we cover all roofing needs specific to Southern Arizona\u2019s climate."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Clear estimates with no hidden fees, ensuring you get quality roofing services within your budget."
  },
  {
    "title": "Experienced Licensed Technicians",
    "description": "Our 52 licensed technicians bring 46+ years of combined expertise to every roofing project."
  },
  {
    "title": "Reliable Warranty Protection",
    "description": "We back our roofing work with warranties that protect you from monsoon and heat-related damage."
  }
],
  content: {
    mainHeading: "Professional Roofing Services in Marana, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Durable Roofing Solutions for Marana Homes",
            "level": 2,
            "content": "Durable Roofing Solutions for Marana Homes"
      },
      {
            "type": "paragraph",
            "content": "Marana\u2019s extreme heat, intense sun exposure, and seasonal monsoons demand roofing built to last. We specialize in tile, shingle, and flat roof repairs and replacements using materials designed to withstand Southern Arizona\u2019s harsh environment. Our roof coatings add an extra layer of protection against UV rays and water damage."
      },
      {
            "type": "paragraph",
            "content": "Our thorough roof inspections identify issues caused by hard water stains, cracked tiles, and wind damage before they escalate. Intelligent Design technicians use precise diagnostic tools to ensure your roof remains secure and energy-efficient year-round."
      },
      {
            "type": "cta",
            "heading": "Protect Your Marana Home with Expert Roofing Today",
            "content": "Don\u2019t wait for leaks or damage to worsen. Contact Intelligent Design now for fast, reliable roofing repairs and replacements.",
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
            "content": "With a 4.97-star Google rating from over 23,000 reviews, Intelligent Design is a trusted name in the Marana community. Our commitment to quality workmanship and exceptional customer service sets us apart in the roofing industry."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every roofing project with comprehensive warranties tailored to protect your investment against Southern Arizona\u2019s weather extremes. Our licensed technicians bring decades of experience to ensure your roof performs flawlessly."
      },
      {
            "type": "heading",
            "heading": "Serving the Marana Community",
            "level": 2,
            "content": "Serving the Marana Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving neighborhoods near the Downtown Marana Sign/Cowboy Statue, Marana Heritage River Park, El Rio Preserve, and Picture Rock Petroglyphs, we understand local roofing challenges intimately. Whether you\u2019re grabbing a bite at Luna Cafe, The Highlands Bar & Grille, Sky Rider Cafe, or Taqueria Plaza\u2019s, you can trust Intelligent Design to keep your roof secure and durable."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Marana Roofing Service Today",
            "content": "Call Intelligent Design for expert roofing repairs, replacements, and inspections tailored to Marana\u2019s climate.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialRoofRepairFAQs,
  commonQuestions: getRefinementQuestions('Roofing', 'Marana'),
};
