import { Metadata } from 'next';
import ServiceCategoryPage from '@/components/pages/ServiceCategoryPage';
import { hvacCategoryData } from '@/data/pages/categories';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';

export const metadata: Metadata = {
  title: hvacCategoryData.title,
  description: hvacCategoryData.description,
  openGraph: {
    title: hvacCategoryData.title,
    description: hvacCategoryData.description,
    url: 'https://www.idesignac.com/services/hvac',
    siteName: 'Intelligent Design Air Conditioning, Plumbing, Solar, & Electric',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: hvacCategoryData.title,
    description: hvacCategoryData.description,
  },
  alternates: {
    canonical: 'https://www.idesignac.com/services/hvac',
  },
};

export default function HVACServicesPage() {
  const schemas = getPageSchemas({
    pageType: 'service',
    canonicalUrl: 'https://www.idesignac.com/services/hvac',
    pageData: {
      serviceName: 'HVAC Services',
      serviceDescription: hvacCategoryData.description,
      categories: ['hvac'],
    },
  });

  return <ServiceCategoryPage data={hvacCategoryData} schemas={schemas} />;
}
