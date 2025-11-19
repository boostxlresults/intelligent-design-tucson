#!/usr/bin/env tsx

/**
 * Slug Validation Script
 * 
 * Validates that all converted Next.js data files have correct slugs
 * matching their canonical URLs from React pages.
 * 
 * Usage: tsx scripts/validate-slugs.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface ValidationResult {
  file: string;
  reactPage: string;
  canonicalUrl?: string;
  expectedSlug?: string;
  actualSlug?: string;
  status: 'PASS' | 'FAIL' | 'WARNING' | 'NO_CANONICAL';
  issue?: string;
}

// Extract canonical URL from React page
function extractCanonicalFromReact(filePath: string): string | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const canonicalMatch = content.match(/canonical=["']([^"']+)["']/);
    return canonicalMatch ? canonicalMatch[1] : null;
  } catch (error) {
    return null;
  }
}

// Extract slug from Next.js data file
function extractSlugFromData(filePath: string): string | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
    return slugMatch ? slugMatch[1] : null;
  } catch (error) {
    return null;
  }
}

// Convert canonical URL to expected slug
function canonicalToSlug(canonical: string): string {
  return canonical
    .replace('https://www.idesignac.com/', '')
    .replace(/^\//, '')
    .replace(/\/$/, '');
}

// Main validation
async function main() {
  console.log('🔍 SLUG VALIDATION AUDIT');
  console.log('=' .repeat(80));
  console.log();

  const results: ValidationResult[] = [];

  // Validate service pages
  const serviceDir = 'nextjs-app/data/pages/services';
  const serviceFiles = fs.readdirSync(serviceDir).filter(f => f.endsWith('.ts'));

  console.log(`📄 Validating ${serviceFiles.length} service pages...\n`);

  for (const file of serviceFiles) {
    const dataPath = path.join(serviceDir, file);
    const actualSlug = extractSlugFromData(dataPath);

    // Try to find matching React page
    // Data files are lowercase (e.g., acrepair.ts)
    // React pages are PascalCase (e.g., ACRepair.tsx)
    const baseName = file.replace('.ts', '');
    
    // Build possible React filenames
    const possibleReactNames: string[] = [];
    
    // Strategy 1: Simple capitalize first letter
    possibleReactNames.push(baseName.charAt(0).toUpperCase() + baseName.slice(1));
    
    // Strategy 2: PascalCase conversion (capitalize after each implied word boundary)
    // This handles cases like "acrepair" -> "ACRepair"
    const pascalCase = baseName
      .split(/(?=[A-Z])/) // Split on capital letters
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    possibleReactNames.push(pascalCase);
    
    // Strategy 3: Look for all React pages and find case-insensitive match
    const allReactPages = fs.readdirSync('client/src/pages')
      .filter(f => f.endsWith('.tsx'))
      .map(f => f.replace('.tsx', ''));
    
    const caseInsensitiveMatch = allReactPages.find(
      reactFile => reactFile.toLowerCase() === baseName.toLowerCase()
    );
    if (caseInsensitiveMatch) {
      possibleReactNames.unshift(caseInsensitiveMatch); // Add to front
    }

    let reactPage: string | null = null;
    let canonical: string | null = null;

    for (const name of possibleReactNames) {
      const reactPath = `client/src/pages/${name}.tsx`;
      if (fs.existsSync(reactPath)) {
        reactPage = reactPath;
        canonical = extractCanonicalFromReact(reactPath);
        break;
      }
    }

    if (!reactPage) {
      results.push({
        file: dataPath,
        reactPage: 'NOT FOUND',
        actualSlug,
        status: 'WARNING',
        issue: 'Could not locate matching React page'
      });
      continue;
    }

    if (!canonical) {
      results.push({
        file: dataPath,
        reactPage,
        actualSlug,
        status: 'NO_CANONICAL',
        issue: 'React page has no canonical URL'
      });
      continue;
    }

    const expectedSlug = canonicalToSlug(canonical);

    if (actualSlug === expectedSlug) {
      results.push({
        file: dataPath,
        reactPage,
        canonicalUrl: canonical,
        expectedSlug,
        actualSlug,
        status: 'PASS'
      });
    } else {
      results.push({
        file: dataPath,
        reactPage,
        canonicalUrl: canonical,
        expectedSlug,
        actualSlug,
        status: 'FAIL',
        issue: `Slug mismatch: expected "${expectedSlug}", got "${actualSlug}"`
      });
    }
  }

  // Validate location pages
  const locationDir = 'nextjs-app/data/pages/locations';
  const locationFiles = fs.readdirSync(locationDir).filter(f => f.endsWith('.ts'));

  console.log(`📍 Validating ${locationFiles.length} location pages...\n`);

  for (const file of locationFiles) {
    const dataPath = path.join(locationDir, file);
    const actualSlug = extractSlugFromData(dataPath);

    const baseName = file.replace('.ts', '');
    const reactName = baseName.charAt(0).toUpperCase() + baseName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const reactPath = `client/src/pages/${reactName}.tsx`;

    if (!fs.existsSync(reactPath)) {
      results.push({
        file: dataPath,
        reactPage: 'NOT FOUND',
        actualSlug,
        status: 'WARNING',
        issue: 'Could not locate matching React page'
      });
      continue;
    }

    const canonical = extractCanonicalFromReact(reactPath);

    if (!canonical) {
      results.push({
        file: dataPath,
        reactPage: reactPath,
        actualSlug,
        status: 'NO_CANONICAL',
        issue: 'React page has no canonical URL'
      });
      continue;
    }

    const expectedSlug = canonicalToSlug(canonical);

    if (actualSlug === expectedSlug) {
      results.push({
        file: dataPath,
        reactPage: reactPath,
        canonicalUrl: canonical,
        expectedSlug,
        actualSlug,
        status: 'PASS'
      });
    } else {
      results.push({
        file: dataPath,
        reactPage: reactPath,
        canonicalUrl: canonical,
        expectedSlug,
        actualSlug,
        status: 'FAIL',
        issue: `Slug mismatch: expected "${expectedSlug}", got "${actualSlug}"`
      });
    }
  }

  // Summary
  console.log('=' .repeat(80));
  console.log('VALIDATION SUMMARY');
  console.log('=' .repeat(80));

  const passed = results.filter(r => r.status === 'PASS');
  const failed = results.filter(r => r.status === 'FAIL');
  const warnings = results.filter(r => r.status === 'WARNING');
  const noCanonical = results.filter(r => r.status === 'NO_CANONICAL');

  console.log(`✅ PASSED: ${passed.length}`);
  console.log(`❌ FAILED: ${failed.length}`);
  console.log(`⚠️  WARNINGS: ${warnings.length}`);
  console.log(`📝 NO CANONICAL: ${noCanonical.length}`);
  console.log(`📊 TOTAL: ${results.length}`);
  console.log();

  if (failed.length > 0) {
    console.log('❌ FAILED VALIDATIONS:');
    console.log('-'.repeat(80));
    failed.forEach(r => {
      console.log(`File: ${path.basename(r.file)}`);
      console.log(`  Expected: ${r.expectedSlug}`);
      console.log(`  Actual: ${r.actualSlug}`);
      console.log(`  Issue: ${r.issue}`);
      console.log();
    });
  }

  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:');
    console.log('-'.repeat(80));
    warnings.slice(0, 10).forEach(r => {
      console.log(`File: ${path.basename(r.file)}`);
      console.log(`  Issue: ${r.issue}`);
      console.log();
    });
    if (warnings.length > 10) {
      console.log(`... and ${warnings.length - 10} more warnings`);
    }
  }

  // Write detailed report
  const reportPath = 'nextjs-app/SLUG_VALIDATION_REPORT.json';
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Detailed report written to: ${reportPath}`);

  console.log('\n' + '='.repeat(80));

  // Exit with error if there are failures
  if (failed.length > 0) {
    process.exit(1);
  }
}

main().catch(console.error);
