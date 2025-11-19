#!/usr/bin/env tsx

/**
 * Automation Script: Update Image Imports for Next.js
 * 
 * Converts image imports and usage to Next.js Image component:
 * - Updates import statements
 * - Converts <img> tags to <Image> components
 * - Preserves alt text and styling
 */

import fs from 'fs';
import { glob } from 'glob';

interface ImageStats {
  filesProcessed: number;
  imgTagsConverted: number;
  imageImportsAdded: number;
  errors: string[];
}

const stats: ImageStats = {
  filesProcessed: 0,
  imgTagsConverted: 0,
  imageImportsAdded: 0,
  errors: []
};

function addImageImport(content: string): string {
  // Check if already has Image import
  if (content.includes("from 'next/image'") || content.includes('from "next/image"')) {
    return content;
  }
  
  // Find last import statement
  const importMatch = content.match(/import[^;]+;/g);
  if (importMatch && importMatch.length > 0) {
    const lastImport = importMatch[importMatch.length - 1];
    const lastImportIndex = content.lastIndexOf(lastImport);
    
    return (
      content.slice(0, lastImportIndex + lastImport.length) +
      "\nimport Image from 'next/image';" +
      content.slice(lastImportIndex + lastImport.length)
    );
  }
  
  return content;
}

function convertImgTags(content: string): string {
  let converted = content;
  let hasImgTags = false;
  
  // Match <img> tags and convert to <Image>
  const imgTagRegex = /<img\s+([^>]+)>/g;
  
  converted = converted.replace(imgTagRegex, (match, attributes) => {
    hasImgTags = true;
    stats.imgTagsConverted++;
    
    // Extract src, alt, and className
    const srcMatch = attributes.match(/src=\{([^}]+)\}/);
    const altMatch = attributes.match(/alt=["']([^"']+)["']/);
    const classMatch = attributes.match(/className=["']([^"']+)["']/);
    
    // For now, keep img tags that have complex attributes
    // We'll manually review these
    if (!srcMatch || !altMatch) {
      return match; // Keep original
    }
    
    let imageProps = [];
    imageProps.push(`src={${srcMatch[1]}}`);
    imageProps.push(`alt="${altMatch[1]}"`);
    
    // Add width and height (required for Next.js Image)
    // We'll use fill for responsive images
    imageProps.push('fill');
    
    if (classMatch) {
      imageProps.push(`className="${classMatch[1]}"`);
    }
    
    return `<Image ${imageProps.join(' ')} />`;
  });
  
  if (hasImgTags) {
    converted = addImageImport(converted);
    stats.imageImportsAdded++;
  }
  
  return converted;
}

async function processFile(filePath: string): Promise<void> {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Skip if no img tags
    if (!content.includes('<img')) {
      return;
    }
    
    const converted = convertImgTags(content);
    
    if (converted !== content) {
      fs.writeFileSync(filePath, converted, 'utf-8');
      stats.filesProcessed++;
    }
  } catch (error) {
    stats.errors.push(`${filePath}: ${error}`);
  }
}

async function main() {
  console.log('🖼️  Converting image imports to Next.js Image...\n');
  
  const componentFiles = await glob('nextjs-app/components/**/*.{ts,tsx}', {
    ignore: ['**/node_modules/**']
  });
  
  console.log(`Found ${componentFiles.length} component files\n`);
  
  for (const file of componentFiles) {
    await processFile(file);
  }
  
  console.log('\n✅ Image Conversion Complete!\n');
  console.log('Statistics:');
  console.log(`  Files processed: ${stats.filesProcessed}`);
  console.log(`  <img> tags converted: ${stats.imgTagsConverted}`);
  console.log(`  Image imports added: ${stats.imageImportsAdded}`);
  
  if (stats.errors.length > 0) {
    console.log(`\n⚠️  Errors: ${stats.errors.length}`);
    stats.errors.forEach(err => console.log(`  ${err}`));
  }
  
  console.log('\n💡 Note: Some complex images may need manual review for proper sizing');
}

main().catch(console.error);
