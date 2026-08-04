'use client';

import Link from 'next/link';
import { MapPin, Wrench, Home, DollarSign, Star, Shield } from 'lucide-react';

/**
 * ServiceAreaLinks Component
 * 
 * Comprehensive internal linking section for service pages.
 * Adds links to:
 * - Related HVAC/Plumbing/Electrical/Solar/Roofing services
 * - Service area location pages
 * - Financing, special offers, reviews
 * - Family Protection Plans
 * 
 * This addresses the critical SEO gap where competitors like Alaskan AC
 * and D&H link to 21+ service area pages from every service page.
 */

interface ServiceAreaLinksProps {
  currentSlug: string;
  category: 'HVAC' | 'Plumbing' | 'Solar' | 'Electrical' | 'Roofing';
}

// Service area locations in the Tucson DMA
const SERVICE_AREAS = [
  { name: 'Oro Valley', slug: 'oro-valley' },
  { name: 'Marana', slug: 'marana' },
  { name: 'Sahuarita', slug: 'sahuarita' },
  { name: 'Vail', slug: 'vail' },
  { name: 'Green Valley', slug: 'green-valley' },
  { name: 'Casas Adobes', slug: 'casas-adobes' },
  { name: 'Catalina Foothills', slug: 'catalina-foothills' },
  { name: 'East Tucson', slug: 'east-tucson' },
  { name: 'Rita Ranch', slug: 'rita-ranch' },
  { name: 'Drexel Heights', slug: 'drexel-heights' },
  { name: 'Avra Valley', slug: 'avra-valley' },
  { name: 'Picture Rocks', slug: 'picture-rocks' },
  { name: 'Tanque Verde', slug: 'tanque-verde' },
  { name: 'Cortaro', slug: 'cortaro' },
  { name: 'Corona de Tucson', slug: 'corona-de-tucson' },
  { name: 'Gladden Farms', slug: 'gladden-farms' },
  { name: 'Tucson Estates', slug: 'tucson-estates' },
  { name: 'SaddleBrooke', slug: 'saddle-brooke' },
  { name: 'Tortolita', slug: 'tortolita' },
  { name: 'Rillito', slug: 'rillito' },
];

// Category-specific service area slug prefixes
const CATEGORY_PREFIXES: Record<string, string> = {
  'HVAC': 'hvac',
  'Plumbing': 'plumbing',
  'Solar': 'solar-installation',
  'Electrical': 'electrical',
  'Roofing': 'roofing',
};

// Core HVAC services
const HVAC_SERVICES = [
  { name: 'AC Repair', slug: 'ac-repair-tucson' },
  { name: 'AC Installation', slug: 'ac-installation-tucson' },
  { name: 'AC Service & Maintenance', slug: 'ac-service-tucson' },
  { name: 'AC Tune-Up', slug: 'ac-tuneup-tucson' },
  { name: 'Heating Services', slug: 'heating-tucson' },
  { name: 'Heater Repair', slug: 'heater-repair-tucson' },
  { name: 'Heater Installation', slug: 'heater-installation-tucson' },
  { name: 'Duct Cleaning', slug: 'duct-cleaning-tucson' },
  { name: 'Duct Repair', slug: 'duct-repair-tucson' },
  { name: 'Duct Sealing', slug: 'duct-sealing-tucson' },
  { name: 'Ductless Mini Split Installation', slug: 'ductless-installation-tucson' },
  { name: 'Indoor Air Quality', slug: 'indoor-air-quality-tucson' },
  { name: 'Furnaces', slug: 'furnaces-tucson' },
];

// Core Plumbing services
const PLUMBING_SERVICES = [
  { name: 'Plumbing Services', slug: 'plumbing-tucson' },
  { name: 'Drain Clearing', slug: 'drain-clearing-tucson' },
  { name: 'Water Heater Repair', slug: 'water-heater-repair' },
  { name: 'Water Heater Installation', slug: 'water-heater-installation' },
  { name: 'Tankless Water Heaters', slug: 'tankless-water-heaters' },
  { name: 'Garbage Disposal', slug: 'garbage-disposal' },
  { name: 'Sewer Line Repair', slug: 'sewer-line-repair' },
  { name: 'Plumbing Maintenance', slug: 'plumbing-maintenance' },
];

// Core Electrical services
const ELECTRICAL_SERVICES = [
  { name: 'Electrical Services', slug: 'electrical-tucson' },
  { name: 'Electrical Repair', slug: 'electrical-repair' },
  { name: 'Electrical Panel Upgrades', slug: 'electrical-panel-upgrades' },
  { name: 'Ceiling Fan Installation', slug: 'ceiling-fan-installation' },
  { name: 'Circuit Breakers', slug: 'circuit-breakers' },
  { name: 'EV Charger Installation', slug: 'ev-charger-installation' },
  { name: 'Lighting Installation', slug: 'lighting-installation' },
  { name: 'Whole House Surge Protection', slug: 'whole-house-surge-protection' },
];

// Core Solar services
const SOLAR_SERVICES = [
  { name: 'Solar Installation', slug: 'solar-installation-tucson' },
  { name: 'Residential Solar', slug: 'residential-solar-installation' },
  { name: 'Commercial Solar', slug: 'commercial-solar-installation' },
  { name: 'Solar Maintenance', slug: 'solar-maintenance' },
  { name: 'Solar Tax Credits', slug: 'solar-tax-credits' },
  { name: 'Solar Panel Costs', slug: 'solar-panel-costs' },
  { name: 'Solar AC', slug: 'solar-ac-tucson' },
];

// Core Roofing services
const ROOFING_SERVICES = [
  { name: 'Roofing Services', slug: 'roofing-tucson' },
  { name: 'Roof Repair', slug: 'roof-repair' },
  { name: 'Roof Replacement', slug: 'roof-replacement' },
  { name: 'Roof Inspection', slug: 'roof-inspection' },
  { name: 'Roof Coating', slug: 'roof-coating' },
  { name: 'Commercial Roof Repair', slug: 'commercial-roof-repair' },
  { name: 'Commercial Roof Installation', slug: 'commercial-roof-installation' },
];

// Cross-department links
const CROSS_LINKS = [
  { name: 'Financing Options', slug: 'financing', icon: DollarSign },
  { name: 'Special Offers', href: '/special-offers', icon: Star },
  { name: 'Customer Reviews', href: '/customer-reviews', icon: Star },
  { name: 'Family Protection Plans', href: '/family-protection-plans', icon: Shield },
];

const CATEGORY_SERVICES: Record<string, typeof HVAC_SERVICES> = {
  'HVAC': HVAC_SERVICES,
  'Plumbing': PLUMBING_SERVICES,
  'Solar': SOLAR_SERVICES,
  'Electrical': ELECTRICAL_SERVICES,
  'Roofing': ROOFING_SERVICES,
};

export default function ServiceAreaLinks({ currentSlug, category }: ServiceAreaLinksProps) {
  const prefix = CATEGORY_PREFIXES[category] || 'hvac';
  const services = CATEGORY_SERVICES[category] || HVAC_SERVICES;
  
  // Filter out current page from service links
  const filteredServices = services.filter(s => s.slug !== currentSlug);
  
  // Build service area links for this category
  const serviceAreaLinks = SERVICE_AREAS.map(area => ({
    name: `${category === 'Solar' ? 'Solar Installation' : category} in ${area.name}`,
    slug: `${prefix}-${area.slug}`,
  })).filter(s => s.slug !== currentSlug);

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200" data-testid="section-service-area-links">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Related Services in Same Category */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">
              Related {category} Services in Tucson
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {filteredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="inline-block px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                data-testid={`link-related-${service.slug}`}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Service Area Location Links */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">
              {category} Service Areas Near Tucson
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {serviceAreaLinks.map((area) => (
              <Link
                key={area.slug}
                href={`/services/${area.slug}`}
                className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-colors text-center"
                data-testid={`link-area-${area.slug}`}
              >
                {area.name.replace(`${category === 'Solar' ? 'Solar Installation' : category} in `, '')}
              </Link>
            ))}
          </div>
        </div>

        {/* Cross-Department & Utility Links */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Home className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">
              More from Intelligent Design
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {/* Other department links */}
            {category !== 'HVAC' && (
              <Link href="/services/ac-repair-tucson" className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                AC Repair Tucson
              </Link>
            )}
            {category !== 'Plumbing' && (
              <Link href="/services/plumbing-tucson" className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                Plumbing Services
              </Link>
            )}
            {category !== 'Electrical' && (
              <Link href="/services/electrical-tucson" className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                Electrical Services
              </Link>
            )}
            {category !== 'Solar' && (
              <Link href="/services/solar-installation-tucson" className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                Solar Installation
              </Link>
            )}
            {category !== 'Roofing' && (
              <Link href="/services/roofing-tucson" className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                Roofing Services
              </Link>
            )}
            {/* Utility links */}
            {CROSS_LINKS.map((link) => {
              const Icon = link.icon;
              const href = link.href || `/services/${link.slug}`;
              return (
                <Link
                  key={link.name}
                  href={href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  data-testid={`link-cross-${link.slug || link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
