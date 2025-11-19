const tests = [
  // Critical routes that were fixed
  { url: '/services/electrical/corona-de-tucson', desc: 'Corona-de (was broken)' },
  { url: '/services/heating/corona-de-tucson', desc: 'Corona-de heating' },
  { url: '/services/electrical/oro-valley', desc: 'Service×location' },
  { url: '/services/ac-repair', desc: 'Canonical slug' },
  { url: '/services/ac-repair-tucson', desc: 'Legacy alias' },
];

async function test() {
  console.log('\n🎯 Final Critical Route Test\n');
  let passed = 0;
  for (const t of tests) {
    try {
      const res = await fetch(`http://localhost:5000${t.url}`);
      const icon = res.status === 200 ? '✅' : '❌';
      console.log(`${icon} ${res.status} | ${t.desc}`);
      if (res.status === 200) passed++;
    } catch (e) {
      console.log(`❌ ERR | ${t.desc}`);
    }
  }
  console.log(`\n📊 ${passed}/${tests.length} passed\n`);
}
test();
