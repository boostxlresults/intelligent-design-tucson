// Optimized Heating page for Tortolita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { heatingLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const heatingtortolitaData: ServicePageData = {
  // SEO & Meta
  title: "Heating Services in Tortolita, AZ | Call (520) 333-2665",
  description: "Expert heating repair, installation & maintenance in Tortolita, AZ. Trusted HVAC pros with fast response & 46+ years experience. Call (520) 333-2665 today!",
  slug: "heating-tortolita",
  
  // Hero Section
  h1: "Professional Heating Services in Tortolita, AZ",
  h2Subheading: "Reliable Heating Repair, Installation & Maintenance for Your Tortolita Home",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/generated_images/Heating_tech_furnace_inspection_1_528f6e37.webp",
  heroImageAlt: "Professional heating technician performing expert furnace inspection in Tortolita, Arizona home",
  
  // Service Info
  serviceName: "Heating",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Average 68-Minute Response",
    "description": "Rapid heating service to keep your home warm during cold desert nights."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "State-of-the-art tools and certified technicians ensure precise heating solutions."
  },
  {
    "title": "Comprehensive Heating Services",
    "description": "From furnace installation to heat pump repairs and seasonal tune-ups."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "Upfront quotes with no hidden fees\u2014quality heating care within budget."
  },
  {
    "title": "Skilled Team of 52 Licensed Technicians",
    "description": "Experienced professionals trained in Southern Arizona\u2019s unique climate challenges."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "All heating services backed by industry-leading warranties for peace of mind."
  }
],
  content: {
    mainHeading: "Professional Heating Services in Tortolita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Heating Repair, Installation & Maintenance Tailored for Tortolita",
            "level": 2,
            "content": "Heating Repair, Installation & Maintenance Tailored for Tortolita"
      },
      {
            "type": "paragraph",
            "content": "Tortolita\u2019s desert climate brings chilly winter nights that demand reliable heating systems. Intelligent Design specializes in heating repair, furnace installation, heat pump service, and tune-ups designed to withstand harsh monsoons and hard water exposure. Our technicians optimize your equipment for efficiency and durability."
      },
      {
            "type": "paragraph",
            "content": "We understand how seasonal temperature swings impact your heating system\u2019s performance. Regular maintenance prevents costly breakdowns and promotes energy savings, especially important with Southern Arizona\u2019s extreme heat cycles. Trust our expert team to keep your heating system running smoothly year-round."
      },
      {
            "type": "cta",
            "heading": "Get Your Heating System Ready for Tortolita Winters",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for expert heating services. Call now for fast, dependable heating repair or installation.",
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
            "content": "With over 46 years of local experience and a 4.97-star rating from more than 23,000 reviews, Intelligent Design is Tortolita\u2019s trusted HVAC partner. Our commitment to quality craftsmanship and customer satisfaction is evident in every heating project we undertake."
      },
      {
            "type": "paragraph",
            "content": "We back our work with comprehensive warranties, ensuring your investment is protected. Our team of 52 licensed technicians stays current with the latest heating technology and Southern Arizona climate challenges, delivering dependable results every time."
      },
      {
            "type": "heading",
            "heading": "Serving the Tortolita Community",
            "level": 2,
            "content": "Serving the Tortolita Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Tortolita and surrounding areas near Honey Bee Canyon Petroglyphs, Tortolita Preserve Trailhead, Wild Burro Trailhead, and Honey Bee Canyon Park, we understand the unique needs of local homeowners. After a visit to local favorites like Ol\u2019 Pot Hole, The Highlands Bar & Grille, or Sky Rider Cafe, trust Intelligent Design to keep your home comfortable all year."
      },
      {
            "type": "cta",
            "heading": "Ready to Improve Your Heating System in Tortolita?",
            "content": "Schedule your heating service with Intelligent Design today and experience unmatched expertise and fast response times.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: heatingLocationFAQs,
  commonQuestions: getRefinementQuestions('Heating', 'Tortolita'),
};
