// Emergency AC Repair Tucson — 24/7, fast response, no overtime charges.
// Mirrors the acrepair service-page layout with emergency-specific, unique content.
import type { ServicePageData } from '@/types/services';
import type { ServiceFAQs } from '@/data/faqs/types';

const emergencyAcRepairFAQs: ServiceFAQs = {
  serviceId: 'emergency-ac-repair-tucson',
  serviceName: 'Emergency AC Repair Tucson AZ',
  faqs: [
    {
      question: 'Do you really charge no extra for after-hours, weekend, or holiday AC repair?',
      answer: "Correct — Intelligent Design does not add overtime or after-hours charges. Whether you call at 2 PM on a Tuesday or 2 AM on a holiday weekend, your emergency AC repair is billed at our standard rates. You always get upfront, written pricing before any work begins, with no surprise fees. Call (520) 333-2665."
    },
    {
      question: 'How fast can a technician get to me for emergency AC repair in Tucson?',
      answer: "Our average response time is about 53 minutes across metro Tucson. We run 42 fully-stocked service trucks positioned throughout Tucson, Oro Valley, Marana, Sahuarita, Vail and Green Valley, and our in-house dispatch sends real-time arrival tracking by text. Same-day service is standard, 7 days a week."
    },
    {
      question: 'Are you really available 24/7, or will I reach an answering service?',
      answer: "You reach our own in-house dispatch team 24/7 — not an outsourced answering service. Nights, weekends and holidays included. A real person schedules your emergency repair immediately and you get live technician tracking by text, so you are never left wondering when help will arrive."
    },
    {
      question: 'What counts as an AC emergency?',
      answer: "Call right away if your AC has stopped cooling during extreme heat, you smell burning or hot electrical odors, you see sparking or a breaker that will not reset, water is leaking around the air handler, or anyone in the home is elderly, very young, or medically vulnerable. In Tucson's summer, indoor temperatures can climb 20-30°F in just 2-3 hours, so a no-cool situation is treated as urgent."
    },
    {
      question: 'Will you fix my AC on the first visit?',
      answer: "About 85% of the time, yes. Every truck carries the most common failure parts — capacitors, contactors, fan motors, refrigerant and more — so most emergency repairs are completed the same visit. If a rare part must be ordered, we can often set you up with a loaner portable AC unit to keep you cool and safe until the repair is finished."
    },
    {
      question: 'How much does emergency AC repair cost in Tucson?',
      answer: "Most AC repairs run $150-$450, with common fixes like a capacitor ($150-$300) or contactor ($200-$400) on the lower end. Because we never add overtime charges, an after-hours emergency call costs the same as a daytime call. You always receive an upfront written estimate before work starts, and financing is available."
    },
    {
      question: 'Should I leave my AC running while I wait for the technician?',
      answer: "If your AC is frozen (ice on the refrigerant lines) or smells like it is burning, turn it off at the thermostat — leave the fan on 'fan only' to help protect the system. Otherwise, close the blinds, keep everyone in the coolest room, and stay hydrated. Our dispatcher can walk you through exactly what to do when you call (520) 333-2665."
    },
    {
      question: 'Do you provide 24/7 emergency AC service in my area?',
      answer: "Yes — we provide 24/7 emergency AC repair across the entire Tucson metro, including Oro Valley, Marana, Sahuarita, Green Valley, Vail, Catalina Foothills and surrounding communities, all with no additional after-hours charge."
    }
  ]
};

export const emergencyacrepairData: ServicePageData = {
  // SEO & Meta
  title: 'Emergency AC Repair Tucson AZ | 24/7 Service, No Overtime Charges | 53-Min Avg Response',
  description: "24/7 emergency AC repair in Tucson — nights, weekends & holidays at no extra charge. 53-minute average response, same-day service, upfront pricing, NATE-certified techs. 4.97 stars from 23,000+ reviews. Call (520) 333-2665.",
  slug: 'emergency-ac-repair-tucson',

  // Hero Section
  h1: 'Emergency AC Repair Tucson',
  h2Subheading: '24/7 Emergency Service • No Overtime Charges • 23,000+ 5-Star Reviews',
  tagline: 'AC Out in the Heat? We Answer 24/7 — Nights, Weekends & Holidays at No Extra Charge',
  heroImage: '/generated_images/Professional_AC_repair_in_Tucson_8bf9f61d.webp',
  heroImageAlt: 'Intelligent Design technician performing emergency AC repair at night in Tucson, Arizona',

  // Service Info
  serviceName: 'Emergency AC Repair Tucson AZ',
  category: 'HVAC',

  // Make phone CTA primary (emergency service page)
  heroPhonePrimary: true,
  heroBadges: ['24/7 Live Dispatch', '53-Min Avg Response', 'No Overtime Charges', 'Same-Day Service', 'Portable AC Units Available'],

  highlights: [
    {
      title: 'Answering 24/7 — A Live Team, Never a Machine',
      description: 'In-house dispatch nights, weekends & holidays | Real-time technician tracking by text | Not an answering service'
    },
    {
      title: '53-Minute Average Response',
      description: '42 fully-stocked trucks across metro Tucson | Same-day service, 7 days a week | Techs staged near you'
    },
    {
      title: 'No Overtime Charges — Ever',
      description: 'After-hours, weekends & holidays billed at standard rates | No emergency upcharge | No surprise fees'
    },
    {
      title: 'Portable AC Units Available',
      description: 'Need a part special-ordered? Ask about a loaner portable AC unit so your family stays cool and safe until your system is back up'
    },
    {
      title: 'Upfront Pricing Before Any Work',
      description: 'Written estimate first | Most repairs $150–$450 | Financing available | Honest, transparent recommendations'
    },
    {
      title: 'NATE-Certified Emergency Techs',
      description: '17+ yrs average experience | Common failure parts on every truck (85% fixed same visit) | All major brands'
    },
    {
      title: '46+ Years • 4.97★ from 23,000+ Reviews',
      description: 'Family & veteran-owned since 1979 | BBB A+ accredited | #1-rated HVAC company in Southern Arizona'
    }
  ],

  featuredVideo: {
    videoId: 'QWD3O1TyJRg',
    title: 'How Air Conditioning Works | Intelligent Design AC Explains',
    description: 'Intelligent Design Air Conditioning explains how your AC system works, common failure points, and what to do when your air conditioner fails in Tucson, Arizona.',
    duration: 'PT5M',
    uploadDate: '2024-01-01T00:00:00Z'
  },

  content: {
    mainHeading: "Emergency AC Repair Tucson — Fast, 24/7 Service",
    sections: [
      {
        type: 'heading',
        heading: 'When Your AC Dies in the Desert Heat, Minutes Matter',
        level: 2,
        content: 'When Your AC Dies in the Desert Heat, Minutes Matter'
      },
      {
        type: 'paragraph',
        content: "When it's 110° and your air conditioner quits, Emergency AC Repair Tucson has to mean fast. Tucson summers are not forgiving: with 146+ days above 90°F and heat indexes that routinely top 115°F, a dead air conditioner is a life-safety problem — indoor temperatures can climb 20-30°F in just 2-3 hours, putting children, elderly family members, and pets at real risk. Intelligent Design provides true 24/7 emergency AC repair across the entire Tucson metro with an average response time of 53 minutes, so you are never left waiting in the heat. When you need standard, non-urgent service instead, see our [link:/services/ac-repair-tucson|AC repair in Tucson] page."
      },
      {
        type: 'paragraph',
        content: "Fastest Emergency Response in Tucson: Our ServiceTitan-powered dispatch runs 42 fully-stocked service trucks staged throughout Tucson, Oro Valley, Marana, Sahuarita, Vail and Green Valley to minimize your wait. Unlike competitors who route after-hours calls to an outside answering service, our in-house 24/7 dispatch team schedules your repair immediately and sends real-time technician tracking by text — so you always know exactly when help will arrive."
      },
      {
        type: 'cta',
        heading: 'AC Down Right Now?',
        content: "Don't wait in the heat. Our licensed emergency technicians are dispatched 24/7 — with no overtime charges. Call now and we'll get your home cool again today.",
        buttonText: 'Schedule Emergency Service',
        buttonLink: '#schedule'
      },
      {
        type: 'heading',
        heading: 'No Overtime Charges — Ever',
        level: 2,
        content: 'No Overtime Charges — Ever'
      },
      {
        type: 'paragraph',
        content: "Most companies punish you for a nighttime or holiday breakdown with steep after-hours 'emergency' upcharges. We don't. Emergency AC repair at 2 AM on a holiday weekend is billed at the exact same standard rates as a Tuesday afternoon — no overtime fees, no weekend premium, no surprise trip charges. You get an upfront, written price before any work begins, every time. It's part of why Tucson families have trusted us with 23,000+ five-star reviews."
      },
      {
        type: 'heading',
        heading: 'What Counts as an AC Emergency?',
        level: 2,
        content: 'What Counts as an AC Emergency?'
      },
      {
        type: 'list',
        content: 'Call us immediately — day or night — if you notice any of these:',
        items: [
          'No cooling at all during extreme heat, especially with children, elderly, or medically vulnerable people at home',
          'Burning, smoky, or hot-electrical smells coming from the unit or vents',
          'Sparking, buzzing, or a breaker that trips and will not reset',
          'Water leaking or pooling around the indoor air handler or furnace',
          'Ice forming on the refrigerant lines with warm air at the vents',
          'A grinding, screeching, or loud metallic noise from the outdoor unit'
        ]
      },
      {
        type: 'paragraph',
        content: "If you smell burning or see sparking, shut the system off at the thermostat and breaker and call (520) 333-2665 right away. Our dispatcher will keep you safe over the phone while your technician is en route."
      },
      {
        type: 'heading',
        heading: 'Fixed Fast — Usually on the First Visit',
        level: 2,
        content: 'Fixed Fast — Usually on the First Visit'
      },
      {
        type: 'paragraph',
        content: "Speed only helps if the repair actually gets done. Every one of our trucks is stocked with the parts that fail most often in Tucson's heat — capacitors, contactors, fan and blower motors, refrigerant, and control boards — so roughly 85% of emergency repairs are completed the same visit. And when a part must be special-ordered, portable AC units are available to keep your family cool until the repair is done. Our NATE-certified technicians average 17+ years of experience and carry thermal imaging cameras and refrigerant analyzers to pinpoint the problem in minutes. We repair every major brand, including Carrier, Trane, Lennox, Goodman, Rheem and more. Want to prevent the next 2 AM breakdown? Ask about routine [link:/services/ac-tuneup-tucson|AC maintenance and tune-ups] and our [link:/family-protection-plans|Family Protection Plans], which include priority scheduling and waived after-hours fees. Explore our full range of [link:/services/hvac-tucson|HVAC services] to keep your home comfortable year-round."
      }
    ]
  },

  faqs: emergencyAcRepairFAQs,

  commonQuestions: [
    {
      question: "It's 110° and my AC just died with kids and pets at home — what should I do right now?",
      answer: "First, call (520) 333-2665 — we prioritize households with children, elderly, or pets and dispatch 24/7 with a 53-minute average response. While you wait: move everyone to the lowest, shadiest room, close blinds and exterior doors, run ceiling or box fans, and keep water handy. Set your thermostat to 'fan only' so air keeps moving. If you smell burning or see sparking, switch the system off at the breaker. Our dispatcher will stay with you on the phone and text you your technician's live location."
    },
    {
      question: 'What makes your emergency response faster than other Tucson HVAC companies?',
      answer: "Three things: (1) 42 fully-stocked trucks staged across Tucson, Oro Valley, Marana, Sahuarita, Vail and Green Valley so a tech is usually already near you; (2) an in-house 24/7 dispatch team — not an answering service that just takes a message and calls someone in the morning; and (3) ServiceTitan-powered routing with real-time text tracking. The result is an average 53-minute arrival, same-day, 7 days a week."
    },
    {
      question: 'Can you repair a commercial AC or rooftop unit after hours without shutting down my business?',
      answer: "Yes. We service both residential and commercial systems, including rooftop package units and multi-system buildings, 24/7. Because we don't charge overtime, we can come after your business closes at no extra cost, and we'll coordinate access and timing to avoid disrupting your operations. Call (520) 333-2665 to arrange emergency commercial service."
    },
    {
      question: 'My AC failed during a monsoon storm — could lightning or a power surge have damaged it?',
      answer: "Absolutely. Monsoon lightning strikes and power surges are a leading cause of summer AC failures in Tucson — they damage control boards, capacitors, contactors, and compressor windings. If your AC won't start after a storm, electrical components are the most likely culprit, and they're often the fastest and most affordable repair. Our trucks carry these parts, so most storm-related failures are fixed the same visit. We can also recommend surge protection to prevent it happening again."
    },
    {
      question: 'Is there a fee just to come out and diagnose the problem?',
      answer: "We provide an upfront, written estimate before any repair work begins, and there is never an overtime or after-hours surcharge added to it. When you call (520) 333-2665, our dispatcher will explain exactly what to expect on cost before we roll a truck, so there are no surprises."
    }
  ],
};
