import { Metadata } from 'next';
import ServiceCategoryPage from '@/components/pages/ServiceCategoryPage';
import { plumbingCategoryData } from '@/data/pages/categories';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';

export const metadata: Metadata = {
  title: plumbingCategoryData.title,
  description: plumbingCategoryData.description,
  openGraph: {
    title: plumbingCategoryData.title,
    description: plumbingCategoryData.description,
    url: 'https://www.idesignac.com/services/plumbing',
    siteName: 'Intelligent Design Air Conditioning, Plumbing, Solar, & Electric',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: plumbingCategoryData.title,
    description: plumbingCategoryData.description,
  },
  alternates: {
    canonical: 'https://www.idesignac.com/services/plumbing',
  },
};

export default function PlumbingServicesPage() {
  const schemas = getPageSchemas({
    pageType: 'service',
    canonicalUrl: 'https://www.idesignac.com/services/plumbing',
    pageData: {
      serviceName: 'Plumbing Services',
      serviceDescription: plumbingCategoryData.description,
      categories: ['plumbing'],
    },
  });

  return <ServiceCategoryPage data={plumbingCategoryData} schemas={schemas} />;
}
