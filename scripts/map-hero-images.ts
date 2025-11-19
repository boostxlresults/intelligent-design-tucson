#!/usr/bin/env tsx

/**
 * Hero Image Mapping Script
 * 
 * Extracts hero images from React pages and maps them to Next.js data files.
 * Replaces placeholder images with actual hero images.
 * 
 * Usage: tsx scripts/map-hero-images.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface ImageMapping {
  reactPage: string;
  dataFile: string;
  importStatement: string;
  imagePath: string;
  imageVariable: string;
}

// Extract image import from React page
function extractImageImport(filePath: string): { variable: string; path: string } | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Pattern 1: import heroImage from '@assets/...'
    let match = content.match(/import\s+(\w+Image)\s+from\s+["']@assets\/([^"']+)["']/);
    if (match) {
      return {
        variable: match[1],
        path: `/${match[2]}`
      };
    }

    // Pattern 2: Check for backgroundImage usage
    const bgMatch = content.match(/backgroundImage:\s*`url\(\$\{(\w+Image)\}\)`/);
    if (bgMatch) {
      const varName = bgMatch[1];
      const importMatch = content.match(new RegExp(`import\\s+${varName}\\s+from\\s+["']@assets\\/([^"']+)["']`));
      if (importMatch) {
        return {
          variable: varName,
          path: `/${importMatch[1]}`
        };
      }
    }

    return null;
  } catch (error) {
    return null;
  }
}

// Update hero image in data file
function updateHeroImage(dataFilePath: string, imagePath: string): boolean {
  try {
    let content = fs.readFileSync(dataFilePath, 'utf-8');
    
    // Replace placeholder or existing hero image
    const updatedContent = content.replace(
      /heroImage:\s*['"][^'"]+['"]/,
      `heroImage: '${imagePath}'`
    );

    if (content !== updatedContent) {
      fs.writeFileSync(dataFilePath, updatedContent);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error updating ${dataFilePath}:`, error);
    return false;
  }
}

// Main mapping
async function main() {
  console.log('🖼️  HERO IMAGE MAPPING');
  console.log('=' .repeat(80));
  console.log();

  const mappings: ImageMapping[] = [];
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  // Get all React pages
  const reactPages = fs.readdirSync('client/src/pages')
    .filter(f => f.endsWith('.tsx'))
    .filter(f => !['App.tsx', 'not-found.tsx', 'BlogIndex.tsx', 'BlogCategory.tsx', 'BlogPost.tsx'].includes(f));

  console.log(`📄 Scanning ${reactPages.length} React pages for hero images...\n`);

  for (const reactFile of reactPages) {
    const reactPath = `client/src/pages/${reactFile}`;
    const baseName = reactFile.replace('.tsx', '').toLowerCase();

    // Extract image from React page
    const imageInfo = extractImageImport(reactPath);
    
    if (!imageInfo) {
      continue; // No hero image found
    }

    // Find corresponding data file
    // Try services first, then locations
    let dataFilePath: string | null = null;
    const servicePath = `nextjs-app/data/pages/services/${baseName}.ts`;
    const locationPath = `nextjs-app/data/pages/locations/${baseName}.ts`;

    if (fs.existsSync(servicePath)) {
      dataFilePath = servicePath;
    } else if (fs.existsSync(locationPath)) {
      dataFilePath = locationPath;
    }

    if (!dataFilePath) {
      continue; // No corresponding data file
    }

    // Update the data file
    const wasUpdated = updateHeroImage(dataFilePath, imageInfo.path);

    if (wasUpdated) {
      updated++;
      console.log(`✅ ${path.basename(dataFilePath)}: ${imageInfo.path}`);
      
      mappings.push({
        reactPage: reactPath,
        dataFile: dataFilePath,
        importStatement: `import ${imageInfo.variable} from '@assets${imageInfo.path.slice(1)}'`,
        imagePath: imageInfo.path,
        imageVariable: imageInfo.variable
      });
    } else {
      skipped++;
    }
  }

  console.log('\n' + '=' .repeat(80));
  console.log('HERO IMAGE MAPPING SUMMARY');
  console.log('=' .repeat(80));
  console.log(`✅ Updated: ${updated}`);
  console.log(`⏭️  Skipped: ${skipped} (no change needed)`);
  console.log(`❌ Errors: ${errors}`);
  console.log(`📊 Total React pages scanned: ${reactPages.length}`);
  console.log();

  // Check for remaining placeholders
  const serviceFiles = fs.readdirSync('nextjs-app/data/pages/services').filter(f => f.endsWith('.ts'));
  const locationFiles = fs.readdirSync('nextjs-app/data/pages/locations').filter(f => f.endsWith('.ts'));
  
  let placeholderCount = 0;
  
  for (const file of [...serviceFiles, ...locationFiles]) {
    const dirPrefix = serviceFiles.includes(file) ? 'nextjs-app/data/pages/services/' : 'nextjs-app/data/pages/locations/';
    const content = fs.readFileSync(dirPrefix + file, 'utf-8');
    
    if (content.includes('/images/placeholder.webp')) {
      placeholderCount++;
    }
  }

  console.log(`⚠️  Remaining placeholders: ${placeholderCount} pages`);

  if (placeholderCount > 0) {
    console.log(`\n💡 Note: ${placeholderCount} pages still use placeholder images.`);
    console.log('   These pages may not have hero images in their React source,');
    console.log('   or the images are defined in a different pattern.');
  }

  // Write mapping report
  const reportPath = 'nextjs-app/HERO_IMAGE_MAPPING.json';
  fs.writeFileSync(reportPath, JSON.stringify(mappings, null, 2));
  console.log(`\n📄 Mapping report written to: ${reportPath}`);

  console.log('\n' + '=' .repeat(80));
}

main().catch(console.error);
