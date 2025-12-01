import { Metadata } from 'next';
import ServiceCategoryPage from '@/components/pages/ServiceCategoryPage';
import { roofingCategoryData } from '@/data/pages/categories';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';

export const metadata: Metadata = {
  title: roofingCategoryData.title,
  description: roofingCategoryData.description,
  openGraph: {
    title: roofingCategoryData.title,
    description: roofingCategoryData.description,
    url: 'https://www.idesignac.com/services/roofing',
    siteName: 'Intelligent Design Air Conditioning, Plumbing, Solar, & Electric',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: roofingCategoryData.title,
    description: roofingCategoryData.description,
  },
  alternates: {
    canonical: 'https://www.idesignac.com/services/roofing',
  },
};

export default function RoofingServicesPage() {
  const schemas = getPageSchemas({
    pageType: 'service',
    canonicalUrl: 'https://www.idesignac.com/services/roofing',
    pageData: {
      serviceName: 'Roofing Services',
      serviceDescription: roofingCategoryData.description,
      categories: ['roofing'],
    },
  });

  return <ServiceCategoryPage data={roofingCategoryData} schemas={schemas} />;
}
