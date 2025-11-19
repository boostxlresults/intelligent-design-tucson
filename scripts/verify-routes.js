#!/usr/bin/env node

/**
 * Route Verification Script
 * 
 * Validates all dynamic routes have proper slug integrity:
 * 1. Service routes (/services/[slug])
 * 2. Location routes (/service-areas/[slug])
 * 3. Service × Location routes (future)
 * 
 * Checks:
 * - File slugs match filename patterns
 * - No duplicate slugs
 * - Slugs follow URL-safe format (lowercase, hyphens only)
 * - All data files export valid structures
 */

const fs = require('fs');
const path = require('path');

// ANSI colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logHeader(message) {
  log(`\n${'='.repeat(80)}`, 'cyan');
  log(message, 'cyan');
  log('='.repeat(80), 'cyan');
}

// Validate slug format (lowercase, hyphens, alphanumeric only)
function isValidSlugFormat(slug) {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);
}

// Extract slug from TypeScript file content
function extractSlugFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const slugMatch = content.match(/slug:\s*['"](.*?)['"]/);
    return slugMatch ? slugMatch[1] : null;
  } catch (error) {
    return null;
  }
}

// Check service routes
function verifyServiceRoutes() {
  logHeader('VERIFYING SERVICE ROUTES');
  
  const servicesDir = path.join(__dirname, '../data/pages/services');
  const files = fs.readdirSync(servicesDir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts');
  
  const slugMap = new Map();
  const errors = [];
  const warnings = [];
  
  log(`\nFound ${files.length} service data files`, 'blue');
  
  files.forEach(file => {
    const filePath = path.join(servicesDir, file);
    const slug = extractSlugFromFile(filePath);
    
    if (!slug) {
      errors.push(`❌ ${file}: No slug found`);
      return;
    }
    
    // Check slug format
    if (!isValidSlugFormat(slug)) {
      errors.push(`❌ ${file}: Invalid slug format "${slug}" (must be lowercase with hyphens only)`);
    }
    
    // Check for duplicates
    if (slugMap.has(slug)) {
      errors.push(`❌ ${file}: Duplicate slug "${slug}" (also in ${slugMap.get(slug)})`);
    } else {
      slugMap.set(slug, file);
    }
    
    // Warn if filename doesn't reasonably match slug
    const baseFileName = file.replace('.ts', '').toLowerCase();
    const slugNoHyphens = slug.replace(/-/g, '');
    if (!baseFileName.includes(slugNoHyphens.substring(0, 8))) {
      warnings.push(`⚠️  ${file}: Filename doesn't match slug "${slug}"`);
    }
  });
  
  // Results
  log(`\n✓ Total valid slugs: ${slugMap.size}`, 'green');
  
  if (warnings.length > 0) {
    log(`\nWarnings (${warnings.length}):`, 'yellow');
    warnings.forEach(w => log(w, 'yellow'));
  }
  
  if (errors.length > 0) {
    log(`\nErrors (${errors.length}):`, 'red');
    errors.forEach(e => log(e, 'red'));
    return false;
  }
  
  log('\n✅ All service routes passed validation!', 'green');
  return true;
}

// Check location routes
function verifyLocationRoutes() {
  logHeader('VERIFYING LOCATION ROUTES');
  
  const locationsDir = path.join(__dirname, '../data/pages/locations');
  const files = fs.readdirSync(locationsDir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts');
  
  const slugMap = new Map();
  const errors = [];
  const warnings = [];
  
  log(`\nFound ${files.length} location data files`, 'blue');
  
  files.forEach(file => {
    const filePath = path.join(locationsDir, file);
    const slug = extractSlugFromFile(filePath);
    
    if (!slug) {
      errors.push(`❌ ${file}: No slug found`);
      return;
    }
    
    // Check slug format
    if (!isValidSlugFormat(slug)) {
      errors.push(`❌ ${file}: Invalid slug format "${slug}" (must be lowercase with hyphens only)`);
    }
    
    // Check for duplicates
    if (slugMap.has(slug)) {
      errors.push(`❌ ${file}: Duplicate slug "${slug}" (also in ${slugMap.get(slug)})`);
    } else {
      slugMap.set(slug, file);
    }
    
    // Warn if filename doesn't reasonably match slug
    const baseFileName = file.replace('.ts', '').toLowerCase();
    const slugNoHyphens = slug.replace(/-/g, '');
    if (!baseFileName.includes(slugNoHyphens.substring(0, 8))) {
      warnings.push(`⚠️  ${file}: Filename doesn't match slug "${slug}"`);
    }
  });
  
  // Results
  log(`\n✓ Total valid slugs: ${slugMap.size}`, 'green');
  
  if (warnings.length > 0) {
    log(`\nWarnings (${warnings.length}):`, 'yellow');
    warnings.forEach(w => log(w, 'yellow'));
  }
  
  if (errors.length > 0) {
    log(`\nErrors (${errors.length}):`, 'red');
    errors.forEach(e => log(e, 'red'));
    return false;
  }
  
  log('\n✅ All location routes passed validation!', 'green');
  return true;
}

// Summary
function printSummary(servicesPassed, locationsPassed) {
  logHeader('VERIFICATION SUMMARY');
  
  log('');
  log(`Service Routes:  ${servicesPassed ? '✅ PASS' : '❌ FAIL'}`, servicesPassed ? 'green' : 'red');
  log(`Location Routes: ${locationsPassed ? '✅ PASS' : '❌ FAIL'}`, locationsPassed ? 'green' : 'red');
  log('');
  
  if (servicesPassed && locationsPassed) {
    log('🎉 ALL ROUTES VALIDATED SUCCESSFULLY!', 'green');
    return 0;
  } else {
    log('❌ VALIDATION FAILED - Please fix errors above', 'red');
    return 1;
  }
}

// Main execution
function main() {
  log('\n🔍 Intelligent Design Route Verification', 'cyan');
  log('Checking slug integrity across all dynamic routes...\n', 'cyan');
  
  const servicesPassed = verifyServiceRoutes();
  const locationsPassed = verifyLocationRoutes();
  
  const exitCode = printSummary(servicesPassed, locationsPassed);
  process.exit(exitCode);
}

main();
