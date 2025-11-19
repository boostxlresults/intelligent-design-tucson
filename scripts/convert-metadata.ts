#!/usr/bin/env tsx
/**
 * Metadata Converter Script
 * 
 * Converts React pages using <MetaHead> component to Next.js pages
 * using generateMetadata() function.
 * 
 * Usage:
 *   tsx scripts/convert-metadata.ts <input-file> <output-file>
 *   
 * Example:
 *   tsx scripts/convert-metadata.ts client/src/pages/HVACTucson.tsx app/hvac-tucson/page.tsx
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { mkdirSync } from 'fs';

interface MetaHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  imageUrl?: string;
  keywords?: string[];
  type?: string;
}

function extractMetaHeadProps(fileContent: string): MetaHeadProps | null {
  // Look for <MetaHead component usage
  const metaHeadRegex = /<MetaHead\s+([^>]+)\/>/s;
  const match = fileContent.match(metaHeadRegex);
  
  if (!match) {
    console.warn('No <MetaHead> component found');
    return null;
  }
  
  const propsString = match[1];
  
  // Extract individual props
  const titleMatch = propsString.match(/title=["']([^"']+)["']/);
  const descMatch = propsString.match(/description=["']([^"']+)["']/);
  const canonicalMatch = propsString.match(/canonicalUrl=["']([^"']+)["']/);
  const imageMatch = propsString.match(/imageUrl=["']([^"']+)["']/);
  const keywordsMatch = propsString.match(/keywords=\{(\[[^\]]+\])\}/);
  const typeMatch = propsString.match(/type=["']([^"']+)["']/);
  
  return {
    title: titleMatch?.[1] || '',
    description: descMatch?.[1] || '',
    canonicalUrl: canonicalMatch?.[1],
    imageUrl: imageMatch?.[1],
    keywords: keywordsMatch ? eval(keywordsMatch[1]) : undefined,
    type: typeMatch?.[1]
  };
}

function generateMetadataFunction(props: MetaHeadProps): string {
  const metadataObj = {
    title: props.title,
    description: props.description,
    canonicalUrl: props.canonicalUrl || '',
    ...(props.imageUrl && { imageUrl: props.imageUrl }),
    ...(props.keywords && props.keywords.length > 0 && { keywords: props.keywords }),
    ...(props.type && { type: props.type })
  };
  
  return `export const metadata: Metadata = generateMetadata(${JSON.stringify(metadataObj, null, 2)});`;
}

function convertPage(inputPath: string, outputPath: string): void {
  console.log(`Converting: ${inputPath} -> ${outputPath}`);
  
  // Read input file
  const fileContent = readFileSync(inputPath, 'utf-8');
  
  // Extract MetaHead props
  const metaProps = extractMetaHeadProps(fileContent);
  
  if (!metaProps) {
    console.error('Failed to extract metadata');
    process.exit(1);
  }
  
  // Generate metadata function
  const metadataFunction = generateMetadataFunction(metaProps);
  
  // Remove MetaHead import
  let newContent = fileContent.replace(/import\s+{\s*MetaHead\s*}\s+from\s+["'][^"']+["'];?\n?/g, '');
  
  // Remove react-helmet-async import if present
  newContent = newContent.replace(/import\s+{\s*Helmet\s*}\s+from\s+["']react-helmet-async["'];?\n?/g, '');
  
  // Add Next.js Metadata import
  const hasMetadataImport = newContent.includes("import { Metadata } from 'next'");
  if (!hasMetadataImport) {
    newContent = `import { Metadata } from 'next';\nimport { generateMetadata } from '@/lib/seo';\n\n${newContent}`;
  }
  
  // Remove <MetaHead /> component usage
  newContent = newContent.replace(/<MetaHead\s+[^>]+\/>/g, '');
  
  // Add metadata export before component export
  const exportDefaultRegex = /export default function/;
  newContent = newContent.replace(exportDefaultRegex, `${metadataFunction}\n\nexport default function`);
  
  // Ensure output directory exists
  mkdirSync(dirname(outputPath), { recursive: true });
  
  // Write output file
  writeFileSync(outputPath, newContent, 'utf-8');
  
  console.log('✓ Conversion complete');
  console.log('');
  console.log('Generated metadata:');
  console.log(metadataFunction);
}

// Main execution
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Usage: tsx convert-metadata.ts <input-file> <output-file>');
  process.exit(1);
}

const [inputPath, outputPath] = args;

try {
  convertPage(inputPath, outputPath);
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
