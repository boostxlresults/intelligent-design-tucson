# Route Verification Script

Automated testing script for all routes in the Intelligent Design Next.js application.

## Usage

### Basic Test (Default)
Tests a sample of routes for quick verification:
```bash
node scripts/verify-routes.mjs
```

### Full Test (All Routes)
Tests ALL routes (~600+ total):
```bash
TEST_ALL_BLOGS=true TEST_ALL_SERVICES=true node scripts/verify-routes.mjs
```

### With SEO Verification
Enables basic SEO checks (title, meta description):
```bash
VERIFY_SEO=true node scripts/verify-routes.mjs
```

### Verbose Output
Shows every tested route:
```bash
VERBOSE=true node scripts/verify-routes.mjs
```

### Custom Base URL
Test against a different server:
```bash
BASE_URL=https://intelligentdesignac.com node scripts/verify-routes.mjs
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `http://localhost:5000` | Server to test against |
| `TEST_ALL_BLOGS` | `false` | Test all 231 blog posts (default: 20 sample) |
| `TEST_ALL_SERVICES` | `false` | Test all ~245 service routes (default: 30 sample) |
| `VERIFY_SEO` | `false` | Enable basic SEO checks |
| `VERBOSE` | `false` | Show all tested routes |

## What Gets Tested

### Core Pages (6 total)
- Homepage (`/`)
- Contact (`/contact`)
- Careers (`/careers`)
- Financing (`/financing`)
- Guarantees (`/guarantees`)
- Customer Reviews (`/customer-reviews`)
- Service Areas (`/service-areas`) - *Currently 404, not yet migrated*

### Special Pages (3 total)
- Privacy Policy (`/privacy-policy`)
- Resources (`/resources`)
- Special Offers (`/special-offers`)

### Blog Routes (238 total)
- Blog index (`/blog`)
- 6 category pages (`/blog/{category}`)
- 231 blog posts (`/blog/{category}/{slug}`)

### Service Routes (~245 total)
- Canonical service pages (`/services/{service}`)
- Legacy alias routes (`/services/{alias}`)
- Location-specific combinations (`/services/{service-location}`)

## Exit Codes

- `0`: All tests passed
- `1`: One or more tests failed

## Example Output

```
════════════════════════════════════════════════════════
   Intelligent Design Route Verification
════════════════════════════════════════════════════════

Testing against: http://localhost:5000
SEO verification: disabled

Testing Core Pages...
✓ / Homepage
✓ /contact Core: /contact
...

Testing Blog Routes...
✓ /blog Blog Index
...

Testing Service Routes...
Found 245 service routes to test
...

════════════════════════════════════════════════════════
   Summary
════════════════════════════════════════════════════════

Total routes tested: 67
Passed: 66
Failed: 1
Success rate: 98.5%

✓ All routes passed!
```

## Continuous Integration

Add to your CI/CD pipeline:

```yaml
# .github/workflows/test.yml
- name: Verify Routes
  run: |
    npm run dev &
    sleep 10
    TEST_ALL_BLOGS=true TEST_ALL_SERVICES=true node scripts/verify-routes.mjs
```

## Troubleshooting

### "Connection refused" errors
Make sure the Next.js dev server is running:
```bash
npm run dev
```

### Timeouts
Increase Node.js timeout for fetch requests if testing production:
```bash
NODE_OPTIONS="--dns-result-order=ipv4first" node scripts/verify-routes.mjs
```

### False positives
Some routes may legitimately return non-200 status codes during development. Check the failed routes list in the output and verify manually if needed.
