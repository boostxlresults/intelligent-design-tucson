/**
 * Build Service Manifest
 * 
 * Scans all service data files and creates a manifest with:
 * - Canonical service slugs (location-agnostic)
 * - Aliases for legacy URLs
 * - Service×location classification
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SERVICES_DIR = path.join(__dirname, '../data/pages/services');

// Known location slugs from service-areas
const LOCATION_SLUGS = [
  'avra-valley', 'casas-adobes', 'catalina-foothills', 'corona-de-tucson',
  'cortaro', 'drexel-heights', 'east-tucson', 'gladden-farms', 'green-valley',
  'marana', 'oro-valley', 'picture-rocks', 'rillito', 'rita-ranch',
  'saddle-brooke', 'tanque-verde', 'tucson-estates'
];

// Core service categories
const CORE_SERVICES = [
  'ac', 'heating', 'plumbing', 'electrical', 'roofing', 'solar'
];

function normalizeSlug(slug) {
  // Normalize legacy location name variations
  return slug.replace(/coronade/g, 'corona-de');
}

function analyzeSlug(slug, filename) {
  // Normalize slug first to handle legacy variations
  const normalizedSlug = normalizeSlug(slug);
  
  // Check if it's a service×location combination
  for (const location of LOCATION_SLUGS) {
    if (normalizedSlug.endsWith(`-${location}`)) {
      const service = normalizedSlug.replace(`-${location}`, '');
      return {
        type: 'service-location',
        canonicalSlug: service,
        service,
        location,
        aliases: slug !== normalizedSlug ? [slug, normalizedSlug] : [slug]
      };
    }
  }

  // Check if it has -tucson suffix (general service for Tucson area)
  if (normalizedSlug.endsWith('-tucson')) {
    const canonical = normalizedSlug.replace('-tucson', '');
    return {
      type: 'general-service',
      canonicalSlug: canonical,
      defaultLocation: 'tucson',
      aliases: slug !== normalizedSlug ? [slug, normalizedSlug] : [slug]
    };
  }

  // Check if it's a pure location page
  if (LOCATION_SLUGS.includes(normalizedSlug)) {
    return {
      type: 'location-only',
      canonicalSlug: normalizedSlug,
      aliases: slug !== normalizedSlug ? [slug] : []
    };
  }

  // Otherwise it's a general service without location suffix
  return {
    type: 'general-service',
    canonicalSlug: normalizedSlug,
    aliases: slug !== normalizedSlug ? [slug] : []
  };
}

function extractSlugFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/slug:\s*['"]([^'"]+)['"]/);
  return match ? match[1] : null;
}

async function buildManifest() {
  const files = fs.readdirSync(SERVICES_DIR)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts');

  const manifest = {
    generated: new Date().toISOString(),
    services: {},
    serviceLocations: {},
    locationPages: {},
    aliases: {}
  };

  for (const file of files) {
    const filename = file.replace('.ts', '');
    const filePath = path.join(SERVICES_DIR, file);
    const slug = extractSlugFromFile(filePath);

    if (!slug) {
      console.warn(`⚠️  No slug found in ${file}`);
      continue;
    }

    const analysis = analyzeSlug(slug, filename);

    if (analysis.type === 'service-location') {
      // Service×location combination
      if (!manifest.serviceLocations[analysis.service]) {
        manifest.serviceLocations[analysis.service] = {};
      }
      manifest.serviceLocations[analysis.service][analysis.location] = {
        dataFile: filename,
        originalSlug: slug,
        canonicalSlug: analysis.canonicalSlug
      };
    } else if (analysis.type === 'general-service') {
      // General service
      manifest.services[analysis.canonicalSlug] = {
        dataFile: filename,
        originalSlug: slug,
        canonicalSlug: analysis.canonicalSlug,
        defaultLocation: analysis.defaultLocation || null
      };
    } else if (analysis.type === 'location-only') {
      // Location page
      manifest.locationPages[analysis.canonicalSlug] = {
        dataFile: filename,
        originalSlug: slug
      };
    }

    // Build alias map for all legacy URLs
    for (const alias of analysis.aliases) {
      manifest.aliases[alias] = analysis.canonicalSlug;
    }
  }

  // Write manifest
  const outputPath = path.join(__dirname, '../data/pages/services/manifest.json');
  fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

  console.log(`✅ Service manifest generated`);
  console.log(`   - General services: ${Object.keys(manifest.services).length}`);
  console.log(`   - Service×location combos: ${Object.values(manifest.serviceLocations).reduce((sum, locs) => sum + Object.keys(locs).length, 0)}`);
  console.log(`   - Location pages: ${Object.keys(manifest.locationPages).length}`);
  console.log(`   - Aliases: ${Object.keys(manifest.aliases).length}`);
  console.log(`   - Output: ${outputPath}`);
}

buildManifest().catch(console.error);
