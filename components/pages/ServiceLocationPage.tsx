import type { ServicePageData } from '@/types/services';
import ServicePage from './ServicePage';

interface ServiceLocationPageProps {
  data: ServicePageData;
}

/**
 * ServiceLocationPage - Wrapper for service×location combination pages
 * Reuses ServicePage component
 * 
 * Examples: /services/plumbing/avra-valley, /services/electrical/oro-valley
 */
export default function ServiceLocationPage({ data }: ServiceLocationPageProps) {
  // Reuse the proven ServicePage component
  // All ServiceTitan integration, DNI, reviews, and SEO are handled automatically
  return <ServicePage data={data} />;
}
