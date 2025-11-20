/**
 * SEO Utilities Index
 * Central export for all schema and metadata generation utilities
 * 
 * This eliminates 92 duplicate schema components and standardizes
 * SEO implementation across all 153 pages
 */

export { generateServiceSchema } from './generateServiceSchema';
export type { ServiceSchemaOptions } from './generateServiceSchema';

export { generateLocationSchema } from './generateLocationSchema';
export type { LocationSchemaOptions } from './generateLocationSchema';

export { generateBreadcrumbs } from './generateBreadcrumbs';
export type { BreadcrumbItem } from './generateBreadcrumbs';

export { generateFAQSchema } from './generateFAQSchema';
export type { FAQ } from './generateFAQSchema';

export { generateMetadata } from './generateMetadata';
export type { MetadataOptions } from './generateMetadata';

export { generateArticleSchema } from './generateArticleSchema';
export type { ArticleSchemaOptions } from './generateArticleSchema';

export { generateHowToSchema } from './generateHowToSchema';
export type { HowToSchemaOptions, HowToStep } from './generateHowToSchema';

export { generateVideoObjectSchema, generatePlaylistVideoSchemas } from './generateVideoObjectSchema';
export type { VideoObjectSchemaOptions } from './generateVideoObjectSchema';
