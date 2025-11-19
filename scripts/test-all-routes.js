/**
 * Comprehensive Route Test
 * Tests all route categories to verify the manifest-driven system
 */

const tests = [
  // Single services - canonical slugs
  { url: '/services/ac-repair', desc: 'Single service (canonical)' },
  { url: '/services/heater-repair', desc: 'Single service (canonical)' },
  { url: '/services/plumbing-maintenance', desc: 'Single service (no suffix)' },
  { url: '/services/electrical-repair', desc: 'Single service (no suffix)' },
  
  // Single services - legacy aliases
  { url: '/services/ac-repair-tucson', desc: 'Legacy alias (tucson suffix)' },
  { url: '/services/heater-installation-tucson', desc: 'Legacy alias (tucson suffix)' },
  
  // Service×location combinations
  { url: '/services/electrical/oro-valley', desc: 'Service×location (electrical)' },
  { url: '/services/plumbing/avra-valley', desc: 'Service×location (plumbing)' },
  { url: '/services/heating/green-valley', desc: 'Service×location (heating)' },
  { url: '/services/roofing/marana', desc: 'Service×location (roofing)' },
  { url: '/services/hvac/casas-adobes', desc: 'Service×location (hvac)' },
  
  // Location pages
  { url: '/service-areas/oro-valley', desc: 'Location page' },
  { url: '/service-areas/green-valley', desc: 'Location page' },
  
  // Static pages
  { url: '/', desc: 'Homepage' },
  { url: '/about', desc: 'About page' },
];

async function testRoute(url, desc) {
  try {
    const response = await fetch(`http://localhost:5000${url}`);
    const status = response.status;
    const icon = status === 200 ? '✅' : '❌';
    console.log(`${icon} ${status} | ${desc.padEnd(35)} | ${url}`);
    return status === 200;
  } catch (error) {
    console.log(`❌ ERR | ${desc.padEnd(35)} | ${url} | ${error.message}`);
    return false;
  }
}

async function runTests() {
  console.log('\n🧪 Comprehensive Route Test\n');
  console.log('Status | Description                          | URL');
  console.log('-------|--------------------------------------|--------------------');
  
  let passed = 0;
  let failed = 0;
  
  for (const test of tests) {
    const success = await testRoute(test.url, test.desc);
    if (success) passed++;
    else failed++;
  }
  
  console.log('\n' + '='.repeat(80));
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed out of ${tests.length} tests\n`);
  
  if (failed === 0) {
    console.log('🎉 All routes working perfectly!\n');
  }
}

runTests().catch(console.error);
