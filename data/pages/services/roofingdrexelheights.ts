// Optimized Roofing page for Drexel Heights - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialRoofRepairFAQs } from '@/data/faqs/roofing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const roofingdrexelheightsData: ServicePageData = {
  // SEO & Meta
  title: "Expert Roofing in Drexel Heights, AZ | Call (520) 333-2665",
  description: "Top roofing services in Drexel Heights, AZ. Fast, reliable roof repair, replacement & inspection. Call Intelligent Design at (520) 333-2665 today!",
  slug: "roofing-drexel-heights",
  
  // Hero Section
  h1: "Professional Roofing Services in Drexel Heights, AZ",
  h2Subheading: "Durable Roof Repair, Replacement & Inspections Built for Southern Arizona’s Climate",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Roofing Drexel Heights in Tucson",
  
  // Service Info
  serviceName: "Roofing",
  category: "Roofing",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "Our local team responds quickly to protect your roof from monsoon damage."
  },
  {
    "title": "Advanced Roofing Equipment",
    "description": "We use industry-leading tools for precise tile, shingle, and flat roof services."
  },
  {
    "title": "Comprehensive Roofing Solutions",
    "description": "From inspections to roof coating, we cover all roofing needs in Drexel Heights."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "Clear quotes with no hidden fees, tailored for Southern Arizona homeowners."
  },
  {
    "title": "52 Licensed Roofing Technicians",
    "description": "Skilled pros trained for local weather and roofing materials ensure quality work."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "We back our roofing repairs and replacements with strong, industry-standard warranties."
  }
],
  content: {
    mainHeading: "Professional Roofing Services in Drexel Heights, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Roofing Built for Drexel Heights\u2019 Climate",
            "level": 2,
            "content": "Expert Roofing Built for Drexel Heights\u2019 Climate"
      },
      {
            "type": "paragraph",
            "content": "Drexel Heights experiences extreme heat, intense monsoon storms, and hard water exposure that can accelerate roof wear. Intelligent Design specializes in roofing solutions designed to withstand Southern Arizona\u2019s unique challenges. Our expertise includes tile roofing, shingle roofing, flat roofs, and protective roof coatings that extend your roof\u2019s life."
      },
      {
            "type": "paragraph",
            "content": "We provide thorough roof inspections to detect early signs of damage like cracked tiles or shingle deterioration caused by UV exposure. Our team also expertly handles roof repairs and full replacements with durable materials suited for the local environment, ensuring your home stays safe year-round."
      },
      {
            "type": "cta",
            "heading": "Protect Your Drexel Heights Home Today",
            "content": "Don\u2019t wait for roof damage to worsen. Contact Intelligent Design for fast, reliable roofing service in Drexel Heights.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Drexel Heights Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Drexel Heights Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years serving Southern Arizona, Intelligent Design has earned a 4.97-star Google rating from more than 23,000 reviews. Our reputation for dependable roofing services is built on transparency, punctuality, and expert craftsmanship tailored to local needs."
      },
      {
            "type": "paragraph",
            "content": "Our 52 licensed technicians undergo continuous training to stay current with roofing technologies and local weather demands. We stand behind every project with strong warranties, giving you peace of mind that your roof investment is protected."
      },
      {
            "type": "heading",
            "heading": "Serving the Drexel Heights Community",
            "level": 2,
            "content": "Serving the Drexel Heights Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Drexel Heights and the greater Tucson area, we\u2019re familiar with local landmarks like San Xavier del Bac Mission, Valley of the Moon, Tin Town, and the El Con Tower. Whether you\u2019re grabbing a bite at Hustle Bustle Cafe, Redbird Scratch Kitchen + Bar in Sam Hughes, Casa Madre Restaurant, or Flaps and Racks, you can trust Intelligent Design to keep your roof in top condition."
      },
      {
            "type": "cta",
            "heading": "Ready for Expert Roofing in Drexel Heights?",
            "content": "Call Intelligent Design now for trusted roofing services built to last in Southern Arizona\u2019s climate.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialRoofRepairFAQs,
  commonQuestions: getRefinementQuestions('Roofing', 'Drexel Heights'),
};
