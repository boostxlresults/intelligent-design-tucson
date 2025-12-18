/**
 * ImageObject Schema Generator
 * Creates explicit image schemas for logo, cover images, and other media
 * 
 * Improves image visibility in Google Images and provides clear
 * image attribution for AI/LLM systems.
 */

import { BUSINESS_INFO } from './constants';

export interface ImageObjectSchemaOptions {
  canonicalUrl: string;
}

export function generateImageObjectSchemas(options: ImageObjectSchemaOptions) {
  const { canonicalUrl } = options;
  const baseUrl = canonicalUrl.split('/').slice(0, 3).join('/');

  return [
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": `${baseUrl}#logo`,
      "name": "Intelligent Design Logo",
      "description": "Official logo of Intelligent Design Air Conditioning, Plumbing, Solar, & Electric - Family and veteran-owned home services company in Tucson, Arizona",
      "url": `${baseUrl}/logo.png`,
      "contentUrl": `${baseUrl}/logo.png`,
      "width": "512",
      "height": "512",
      "encodingFormat": "image/png",
      "representativeOfPage": false,
      "creator": {
        "@type": "Organization",
        "name": BUSINESS_INFO.name
      },
      "copyrightHolder": {
        "@type": "Organization",
        "name": BUSINESS_INFO.name
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": `${baseUrl}#ogimage`,
      "name": "Intelligent Design - Tucson Home Services",
      "description": "Cover image for Intelligent Design featuring HVAC, plumbing, solar, electrical, and roofing services in Tucson, Arizona",
      "url": `${baseUrl}/og-image.jpg`,
      "contentUrl": `${baseUrl}/og-image.jpg`,
      "width": "1200",
      "height": "630",
      "encodingFormat": "image/jpeg",
      "representativeOfPage": true,
      "creator": {
        "@type": "Organization",
        "name": BUSINESS_INFO.name
      },
      "copyrightHolder": {
        "@type": "Organization",
        "name": BUSINESS_INFO.name
      }
    }
  ];
}
