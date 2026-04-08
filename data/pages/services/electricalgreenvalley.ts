// Optimized Electrical page for Green Valley - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { electricalRepairFAQs } from '@/data/faqs/electrical';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const electricalgreenvalleyData: ServicePageData = {
  // SEO & Meta
  title: "Expert Electrical Services in Green Valley, AZ | Call (520) 333-2665",
  description: "Trusted electrical services in Green Valley, AZ. Panel upgrades, EV chargers, lighting & more. Call Intelligent Design at (520) 333-2665 today.",
  slug: "electrical-green-valley",
  
  // Hero Section
  h1: "Reliable Electrical Services in Green Valley, AZ",
  h2Subheading: "Safe, Efficient Electrical Solutions Tailored for Southern Arizona Homes",
  tagline: "Fast Response | Licensed Technicians | 46+ Years Experience | Transparent Pricing",
  heroImage: "/generated_images/Electrical_service_work_e21d02b3.webp",
  heroImageAlt: "Professional licensed electrician providing expert electrical service in Green Valley, Arizona retirement community",
  
  // Service Info
  serviceName: "Electrical",
  category: "Electrical",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "Our average response time ensures your electrical issues are addressed promptly."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "We use cutting-edge tools and techniques for panel upgrades, EV charger installs, and rewiring."
  },
  {
    "title": "Comprehensive Electrical Services",
    "description": "From lighting upgrades to whole-home rewiring, we cover all your electrical needs."
  },
  {
    "title": "Competitive & Transparent Pricing",
    "description": "Clear estimates with no hidden fees tailored to your Green Valley home."
  },
  {
    "title": "Certified Team of 52 Technicians",
    "description": "Our licensed experts bring decades of experience to every job in Southern Arizona."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "We back our work with robust warranties for your peace of mind."
  }
],
  content: {
    mainHeading: "Reliable Electrical Services in Green Valley, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Electrical Repairs & Upgrades in Green Valley",
            "level": 2,
            "content": "Expert Electrical Repairs & Upgrades in Green Valley"
      },
      {
            "type": "paragraph",
            "content": "Living in Southern Arizona means dealing with extreme heat, monsoon storms, and the challenges of hard water\u2014all of which can impact your home\u2019s electrical system. Intelligent Design offers trusted electrical repairs, including panel upgrades that prepare your home for increased power demands and protect against outages. Our team specializes in stabilizing circuits and replacing outdated breakers to keep your household safe."
      },
      {
            "type": "paragraph",
            "content": "Whether you need new outlets, energy-efficient lighting, or a full home rewiring, we customize solutions that meet the unique needs of Green Valley homes. We also install EV charging stations, helping you embrace sustainable living while ensuring your system is safe and up to code."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Electrical Service Today",
            "content": "Contact Intelligent Design for prompt, professional electrical services in Green Valley. Call now to get started.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Green Valley Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Green Valley Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star Google rating based on 23,000+ reviews, Intelligent Design has earned the trust of Green Valley residents. Our commitment to quality workmanship and customer satisfaction sets us apart in the electrical industry."
      },
      {
            "type": "paragraph",
            "content": "Every project is backed by a strong warranty to protect your investment. Our licensed technicians are trained to handle the unique electrical demands posed by Southern Arizona\u2019s climate, ensuring safe and reliable service every time."
      },
      {
            "type": "heading",
            "heading": "Serving the Green Valley Community",
            "level": 2,
            "content": "Serving the Green Valley Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve Green Valley and the greater Tucson area, including neighborhoods near historic landmarks like Canoa Ranch and the Titan Missile Museum. Residents near Tumacacori National Historical Park and Desert Meadows Park trust us for their electrical needs. When you\u2019re not enjoying local favorites such as Garage Sports Bar, JoJo's Restaurant, Tito and Pep, or Cotton Restaurant, know Intelligent Design is here to keep your home powered and safe."
      },
      {
            "type": "cta",
            "heading": "Ready for Expert Electrical Services?",
            "content": "Call Intelligent Design now for dependable electrical repairs, upgrades, and installations in Green Valley, AZ.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: electricalRepairFAQs,
  commonQuestions: getRefinementQuestions('Electrical', 'Green Valley'),
};
