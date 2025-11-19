#!/usr/bin/env tsx
/**
 * Generate service manifest from data files
 * Maps canonical slugs to data file names for Next.js static generation
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface ManifestEntry {
  dataFile: string;
  canonicalSlug: string;
}

interface Manifest {
  generated: string;
  services: Record<string, ManifestEntry>;
  aliases: Record<string, string>;
}

const servicesDir = join(process.cwd(), 'data', 'pages', 'services');
const manifestPath = join(servicesDir, 'manifest.json');

const manifest: Manifest = {
  generated: new Date().toISOString(),
  services: {},
  aliases: {}
};

try {
  const files = readdirSync(servicesDir).filter(f => f.endsWith('.ts'));
  
  console.log(`Found ${files.length} service files`);
  
  for (const file of files) {
    const content = readFileSync(join(servicesDir, file), 'utf-8');
    
    // Extract slug from file
    const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
    
    if (slugMatch) {
      const canonicalSlug = slugMatch[1];
      const dataFile = file.replace('.ts', '');
      
      // Add to services with canonical slug as KEY
      manifest.services[canonicalSlug] = {
        dataFile,
        canonicalSlug
      };
      
      // If slug has -tucson suffix, create alias without it
      if (canonicalSlug.endsWith('-tucson')) {
        const shortSlug = canonicalSlug.replace(/-tucson$/, '');
        manifest.aliases[shortSlug] = canonicalSlug;
      }
    }
  }
  
  console.log(`✅ Generated ${Object.keys(manifest.services).length} services`);
  console.log(`✅ Generated ${Object.keys(manifest.aliases).length} aliases`);
  
  // Write manifest
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ Wrote manifest to ${manifestPath}`);
  
} catch (error) {
  console.error('❌ Error generating manifest:', error);
  process.exit(1);
}
