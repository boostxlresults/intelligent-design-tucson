import { Metadata } from 'next';
import ServiceCategoryPage from '@/components/pages/ServiceCategoryPage';
import { electricalCategoryData } from '@/data/pages/categories';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';

export const metadata: Metadata = {
  title: electricalCategoryData.title,
  description: electricalCategoryData.description,
  openGraph: {
    title: electricalCategoryData.title,
    description: electricalCategoryData.description,
    url: 'https://www.idesignac.com/services/electrical',
    siteName: 'Intelligent Design Air Conditioning, Plumbing, Solar, & Electric',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: electricalCategoryData.title,
    description: electricalCategoryData.description,
  },
  alternates: {
    canonical: 'https://www.idesignac.com/services/electrical',
  },
};

export default function ElectricalServicesPage() {
  const schemas = getPageSchemas({
    pageType: 'service',
    canonicalUrl: 'https://www.idesignac.com/services/electrical',
    pageData: {
      serviceName: 'Electrical Services',
      serviceDescription: electricalCategoryData.description,
      categories: ['electrical'],
    },
  });

  return <ServiceCategoryPage data={electricalCategoryData} schemas={schemas} />;
}
