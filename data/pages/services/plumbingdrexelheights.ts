// Optimized Plumbing page for Drexel Heights - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { plumbingLocationGeneralFAQs } from '@/data/faqs/plumbing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const plumbingdrexelheightsData: ServicePageData = {
  // SEO & Meta
  title: "Expert Plumbing in Drexel Heights, AZ | Call (520) 333-2665",
  description: "Trusted plumbing services in Drexel Heights, AZ. Fast response, expert repairs, and installations. Call Intelligent Design at (520) 333-2665 today!",
  slug: "plumbing-drexel-heights",
  
  // Hero Section
  h1: "Professional Plumbing Services in Drexel Heights, AZ",
  h2Subheading: "Reliable Repairs, Installations, and Leak Detection by Local Experts",
  tagline: "Fast Response | Licensed Technicians | 46+ Years Experience | Transparent Pricing | 4.97-Star Rating | Satisfaction Guaranteed",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Plumbing Drexel Heights in Tucson",
  
  // Service Info
  serviceName: "Plumbing",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "We respond quickly to plumbing emergencies to minimize water damage and downtime."
  },
  {
    "title": "Advanced Leak Detection Equipment",
    "description": "Using state-of-the-art technology to find leaks behind walls and underground efficiently."
  },
  {
    "title": "Comprehensive Plumbing Services",
    "description": "From water heater installation to pipe repair, faucet and toilet services, we handle it all."
  },
  {
    "title": "Transparent and Competitive Pricing",
    "description": "No hidden fees with clear estimates tailored to your Drexel Heights home\u2019s needs."
  },
  {
    "title": "52 Licensed Plumbing Technicians",
    "description": "Our skilled team has over four decades of experience tackling Southern Arizona plumbing challenges."
  },
  {
    "title": "Reliable Warranty Backed Work",
    "description": "All plumbing repairs and installations come with solid warranties for lasting peace of mind."
  }
],
  content: {
    mainHeading: "Professional Plumbing Services in Drexel Heights, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Trusted Plumbing Solutions for Drexel Heights Residents",
            "level": 2,
            "content": "Trusted Plumbing Solutions for Drexel Heights Residents"
      },
      {
            "type": "paragraph",
            "content": "Living in Drexel Heights means dealing with hard water, extreme heat, and seasonal monsoons that can stress your plumbing system. Our expert technicians specialize in durable repairs and installations designed to withstand Southern Arizona\u2019s unique climate. From water heater replacements that ensure reliable hot water during chilly desert nights to pipe repair that prevents costly leaks, we keep your home running smoothly."
      },
      {
            "type": "paragraph",
            "content": "We use advanced leak detection tools to identify hidden water damage early, protecting your property and reducing repair costs. Whether it\u2019s a faulty faucet, a running toilet, or comprehensive plumbing upgrades, Intelligent Design offers tailored solutions to fit your exact needs. Our team is dedicated to quality workmanship and fast, friendly service."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Plumbing Service Today",
            "content": "Don\u2019t wait for small leaks to turn into major problems. Call us for prompt, professional plumbing services in Drexel Heights.",
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
            "content": "With over 46 years serving the greater Tucson area, Intelligent Design has built a reputation for reliable plumbing solutions and exceptional customer care. Our 4.97-star Google rating from more than 23,000 reviews reflects our commitment to quality and trust. We understand the plumbing challenges faced by local homeowners and deliver lasting repairs and upgrades that withstand harsh weather and hard water conditions."
      },
      {
            "type": "paragraph",
            "content": "Every job we complete is backed by strong warranties, ensuring your investment is protected. Our 52 licensed technicians undergo continuous training to stay current with the latest plumbing technologies and best practices. When you choose us, you\u2019re choosing peace of mind with a team that values transparency, professionalism, and your satisfaction."
      },
      {
            "type": "heading",
            "heading": "Serving the Drexel Heights Community",
            "level": 2,
            "content": "Serving the Drexel Heights Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve Drexel Heights and the surrounding areas near iconic landmarks like San Xavier del Bac Mission, Valley of the Moon, Tin Town, and El Con Tower. Whether you\u2019re grabbing breakfast at Hustle Bustle Cafe or enjoying dinner at Redbird Scratch Kitchen + Bar in Sam Hughes, Casa Madre Restaurant, or Flaps and Racks, you can trust Intelligent Design for dependable plumbing services close to home."
      },
      {
            "type": "cta",
            "heading": "Ready for Expert Plumbing Service in Drexel Heights?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for fast, expert plumbing repairs and installations.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: plumbingLocationGeneralFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'Drexel Heights'),
};
