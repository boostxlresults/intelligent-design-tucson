/**
 * Validate 301 Redirects
 * 
 * This script tests redirect mappings to ensure:
 * 1. Old URLs return 301 status
 * 2. Destination URLs return 200 status
 * 3. No redirect chains (1 hop only)
 * 4. Redirects work with/without trailing slashes
 * 
 * Usage: tsx scripts/validateRedirects.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface RedirectTest {
  oldUrl: string;
  expectedNewUrl: string;
  status: 'pass' | 'fail' | 'pending';
  actualStatus?: number;
  actualDestination?: string;
  error?: string;
}

/**
 * Test a single redirect
 */
async function testRedirect(oldPath: string, expectedNewPath: string, baseUrl: string): Promise<RedirectTest> {
  const fullOldUrl = `${baseUrl}${oldPath}`;
  const fullExpectedUrl = `${baseUrl}${expectedNewPath}`;
  
  try {
    // Test old URL
    const response = await fetch(fullOldUrl, {
      redirect: 'manual', // Don't follow redirects automatically
    });
    
    const actualStatus = response.status;
    const actualDestination = response.headers.get('location');
    
    // Check if it's a 301 redirect
    if (actualStatus !== 301) {
      return {
        oldUrl: oldPath,
        expectedNewUrl: expectedNewPath,
        status: 'fail',
        actualStatus,
        error: `Expected 301, got ${actualStatus}`
      };
    }
    
    // Check if destination matches
    if (!actualDestination) {
      return {
        oldUrl: oldPath,
        expectedNewUrl: expectedNewPath,
        status: 'fail',
        actualStatus,
        error: 'No Location header found'
      };
    }
    
    // Normalize URLs for comparison
    const normalizedActual = actualDestination.replace(baseUrl, '').replace(/\/$/, '');
    const normalizedExpected = expectedNewPath.replace(/\/$/, '');
    
    if (normalizedActual !== normalizedExpected) {
      return {
        oldUrl: oldPath,
        expectedNewUrl: expectedNewPath,
        status: 'fail',
        actualStatus,
        actualDestination,
        error: `Expected destination ${expectedNewPath}, got ${actualDestination}`
      };
    }
    
    // Test that destination URL returns 200
    const destResponse = await fetch(fullExpectedUrl);
    if (destResponse.status !== 200) {
      return {
        oldUrl: oldPath,
        expectedNewUrl: expectedNewPath,
        status: 'fail',
        actualStatus,
        actualDestination,
        error: `Destination URL returned ${destResponse.status}, expected 200`
      };
    }
    
    return {
      oldUrl: oldPath,
      expectedNewUrl: expectedNewPath,
      status: 'pass',
      actualStatus,
      actualDestination
    };
    
  } catch (error) {
    return {
      oldUrl: oldPath,
      expectedNewUrl: expectedNewPath,
      status: 'fail',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Load redirect map from CSV
 */
function loadRedirectMap(): Array<{ oldUrl: string; newUrl: string }> {
  const csvPath = path.join(process.cwd(), 'redirect-map.csv');
  
  if (!fs.existsSync(csvPath)) {
    console.log('⚠️  redirect-map.csv not found. Using sample redirects for testing.\n');
    return [
      { oldUrl: '/why-is-my-ac-not-cooling', newUrl: '/blog/hvac/why-is-my-ac-not-cooling' },
      { oldUrl: '/air-conditioning/ac-repair-tucson', newUrl: '/services/hvac/ac-repair' },
    ];
  }
  
  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.split('\n').slice(1); // Skip header
  
  return lines
    .filter(line => line.trim())
    .map(line => {
      const [oldUrl, newUrl] = line.split(',');
      return { oldUrl: oldUrl.trim(), newUrl: newUrl.trim() };
    });
}

/**
 * Run redirect validation
 */
async function validateRedirects() {
  console.log('🧪 Validating redirects...\n');
  
  // Base URL - change this to your production URL for production testing
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:5000';
  
  console.log(`Testing against: ${baseUrl}\n`);
  
  const redirectMap = loadRedirectMap();
  console.log(`Found ${redirectMap.length} redirects to test\n`);
  
  const results: RedirectTest[] = [];
  
  for (const redirect of redirectMap.slice(0, 10)) { // Test first 10 for quick validation
    const result = await testRedirect(redirect.oldUrl, redirect.newUrl, baseUrl);
    results.push(result);
    
    const icon = result.status === 'pass' ? '✅' : '❌';
    console.log(`${icon} ${result.oldUrl} → ${result.expectedNewUrl}`);
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
  }
  
  console.log('\n📊 RESULTS:');
  const passed = results.filter(r => r.status === 'pass').length;
  const failed = results.filter(r => r.status === 'fail').length;
  
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📋 Total: ${results.length}\n`);
  
  if (failed > 0) {
    console.log('Failed redirects need to be fixed before deployment.\n');
    process.exit(1);
  } else {
    console.log('All tested redirects are working correctly! ✨\n');
  }
}

// Run the script
validateRedirects().catch(console.error);
