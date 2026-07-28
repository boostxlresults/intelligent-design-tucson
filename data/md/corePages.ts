export interface CoreMd { h1: string; description: string; body: string; }

/** Curated markdown for bespoke (non data-driven) core pages. Served at /<slug>.md */
export const CORE_PAGES: Record<string, CoreMd> = {
  "about": {
    h1: "About Intelligent Design",
    description: "Tucson's highest-rated home services company — family and veteran-owned, serving Greater Tucson since 1979.",
    body: `## Who we are
Intelligent Design Air Conditioning, Plumbing, Solar & Electric handles five trades under one roof — HVAC, plumbing, solar, electrical, and roofing — for homeowners across Greater Tucson. We've served the community since 1979.

## Why Tucson trusts us
- 23,000+ verified five-star reviews and a 4.97 Google rating
- BBB A+ accredited; licensed, bonded, and insured (AZ ROC)
- 80+ professional, background-checked technicians
- 24/7 emergency service with fast response times
- Upfront, transparent pricing — no overtime charges
- 100% satisfaction guarantee on every job`,
  },
  "financing": {
    h1: "Financing",
    description: "Flexible financing for HVAC, plumbing, solar, electrical, and roofing projects in Tucson.",
    body: `## Flexible financing for Tucson homeowners
A new AC system, roof, or major repair shouldn't have to wait. We offer flexible financing so you can get the work done now and pay over time.
- 0% APR options for qualified buyers
- Low monthly payments
- Fast, easy application — approval in minutes
- Available on HVAC, plumbing, solar, electrical, and roofing projects

Apply during your free estimate.`,
  },
  "guarantees": {
    h1: "Our Guarantees",
    description: "Every Intelligent Design job is backed by a 100% satisfaction guarantee.",
    body: `## What we stand behind
If it's not right, we make it right.
- 100% satisfaction guarantee on every job
- Workmanship warranty on all repairs and installations
- Parts & labor coverage
- No overtime charges — nights, weekends, and holidays billed at standard rates
- Upfront, written pricing before any work begins
- Licensed, bonded, and insured; background-checked technicians`,
  },
  "family-protection-plans": {
    h1: "Family Protection Plans",
    description: "Home maintenance memberships with priority service, discounts, and free annual visits.",
    body: `## Keep your home's systems running
Avoid surprise breakdowns and extend equipment life with an Intelligent Design maintenance membership.
- Priority scheduling — front of the line
- Up to 20% discounts on repairs
- Up to 5 free annual maintenance visits
- No extra charges for appointment times
- Lifetime warranties available

Regular maintenance lowers energy bills and prevents costly failures.`,
  },
  "special-offers": {
    h1: "Special Offers & Promotions",
    description: "Current promotions, seasonal discounts, and special financing on Tucson home services.",
    body: `## Current specials
Save on HVAC, plumbing, solar, electrical, and roofing. Offers change regularly — call (520) 333-2665 or visit the page for what's live today.

## Why choose Intelligent Design
- Complete satisfaction guarantee
- 24/7 availability for urgent repairs
- Family & veteran-owned, trusted since 1979
- 23,000+ five-star reviews, BBB A+`,
  },
  "contact": {
    h1: "Contact Intelligent Design",
    description: "Reach Tucson's highest-rated home services company. 24/7 emergency service.",
    body: `## Get in touch
- Phone: (520) 333-2665 — 24/7 emergency service
- Address: 4740 S Park Ave, Tucson, AZ 85714
- Schedule online: https://www.idesignac.com/schedule
- No overtime charges, ever

## Service area
Serving Tucson and Greater Tucson — including Oro Valley, Marana, Sahuarita, Green Valley, Vail, Catalina Foothills, and surrounding areas.`,
  },
  "careers": {
    h1: "Careers — Join Our Team",
    description: "Join Tucson's #1 home services company. Family & veteran-owned since 1979.",
    body: `## Why work with us
We're hiring HVAC, plumbing, electrical, solar, and roofing professionals.
- Competitive compensation — top industry pay, performance bonuses, and commission
- Comprehensive benefits — health insurance, 401(k), and paid time off
- Ongoing training, certifications, and clear advancement paths
- A stable, growing, family- and veteran-owned company

Apply today.`,
  },
  "customer-reviews": {
    h1: "Customer Reviews",
    description: "23,000+ verified five-star reviews for Intelligent Design of Tucson.",
    body: `## 23,000+ five-star reviews
Intelligent Design is Tucson's most-reviewed home services company, with 23,000+ verified five-star reviews and a 4.97 rating across Google, PulseM, Facebook, and Angi. BBB A+ accredited.

## Why Tucson chooses us
- Family & veteran-owned since 1979
- Five trades under one roof: HVAC, plumbing, solar, electrical, roofing
- 24/7 emergency service, no overtime charges
- 100% satisfaction guarantee

See all reviews at https://www.intelligentdesignreviews.com`,
  },
};
