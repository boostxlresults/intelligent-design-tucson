import { Metadata } from 'next';
import ServiceCategoryPage from '@/components/pages/ServiceCategoryPage';
import { solarCategoryData } from '@/data/pages/categories';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';

export const metadata: Metadata = {
  title: solarCategoryData.title,
  description: solarCategoryData.description,
  openGraph: {
    title: solarCategoryData.title,
    description: solarCategoryData.description,
    url: 'https://www.idesignac.com/services/solar',
    siteName: 'Intelligent Design Air Conditioning, Plumbing, Solar, & Electric',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: solarCategoryData.title,
    description: solarCategoryData.description,
  },
  alternates: {
    canonical: 'https://www.idesignac.com/services/solar',
  },
};

export default function SolarServicesPage() {
  const schemas = getPageSchemas({
    pageType: 'service',
    canonicalUrl: 'https://www.idesignac.com/services/solar',
    pageData: {
      serviceName: 'Solar Services',
      serviceDescription: solarCategoryData.description,
      categories: ['solar'],
    },
  });

  return <ServiceCategoryPage data={solarCategoryData} schemas={schemas} />;
}
