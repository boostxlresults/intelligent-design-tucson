import type { ServicePageData } from '@/types/services';
import ServicePage from './ServicePage';
import { getZipCodeFromLocation } from '@/lib/realworklabs/locationZipMapping';

interface ServiceLocationPageProps {
  data: ServicePageData;
  service: string;
  location: string;
}

/**
 * ServiceLocationPage - Wrapper for service×location combination pages
 * Reuses ServicePage component with location-aware enhancements
 * Includes double-filtered project gallery (service type + zip code)
 * 
 * Examples: /services/plumbing/avra-valley, /services/electrical/oro-valley
 */
export default function ServiceLocationPage({ data, service, location }: ServiceLocationPageProps) {
  // Get zip code for location-based project filtering
  const zipCode = getZipCodeFromLocation(location);
  
  // Reuse the proven ServicePage component with enhanced filtering
  // All ServiceTitan integration, DNI, reviews, and SEO are handled automatically
  return <ServicePage data={data} serviceSlug={service} locationZip={zipCode || undefined} />;
}
