"""
Add the missing [slug] route redirects to lib/redirects.ts.
Only adds entries that don't already exist in the file.
Handles the location slugs that could map to either /service-areas/ or /services/.
"""
import json
import os
import re

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Load manifests
with open('data/pages/services/manifest.json') as f:
    svc_manifest = json.load(f)

with open('data/pages/service-locations/manifest.json') as f:
    svc_loc_manifest = json.load(f)

with open('data/pages/locations/manifest.json') as f:
    loc_manifest = json.load(f)

# Read existing redirects
with open('lib/redirects.ts') as f:
    content = f.read()

# Extract existing source paths
existing_sources = set(re.findall(r"'(/[^']+)':\s*'", content))
print(f"Existing redirect sources: {len(existing_sources)}")

# Build new redirects (only those not already in the file)
new_entries = []

# 1. Service slugs with hyphens → /services/{slug}
for slug in svc_manifest['services'].keys():
    if '-' in slug:
        source = f'/{slug}'
        if source not in existing_sources:
            new_entries.append((source, f'/services/{slug}'))

# 2. Service-location combos → /services/{service}-{location}
for entry in svc_loc_manifest:
    flat_slug = f"{entry['service']}-{entry['location']}"
    source = f'/{flat_slug}'
    if source not in existing_sources:
        new_entries.append((source, f'/services/{flat_slug}'))

# 3. Location-only slugs → /service-areas/{slug}
for slug in loc_manifest['locations'].keys():
    source = f'/{slug}'
    if source not in existing_sources:
        new_entries.append((source, f'/service-areas/{slug}'))

# Deduplicate (keep first occurrence)
seen = set()
deduped = []
for source, dest in new_entries:
    if source not in seen:
        seen.add(source)
        deduped.append((source, dest))
        
new_entries = deduped
print(f"New redirects to add: {len(new_entries)}")

# Generate the TypeScript entries
ts_entries = []
for source, dest in sorted(new_entries):
    ts_entries.append(f"  '{source}': '{dest}',")

# Insert before the closing brace of LEGACY_REDIRECTS
insertion_block = "\n  // ===== [SLUG] ROUTE MIGRATION (added 2026-05-07) =====\n"
insertion_block += "\n".join(ts_entries)
insertion_block += "\n"

# Find the last entry before the closing }; of the LEGACY_REDIRECTS object
# Insert our new entries before the closing };
insert_pos = content.rfind("};")
if insert_pos == -1:
    print("ERROR: Could not find closing }; in redirects.ts")
    exit(1)

new_content = content[:insert_pos] + insertion_block + content[insert_pos:]

with open('lib/redirects.ts', 'w') as f:
    f.write(new_content)

print(f"Successfully added {len(new_entries)} new redirect entries to lib/redirects.ts")
pattern = r"'(/[^']+)':\s*'"
count = len(re.findall(pattern, new_content))
print(f"Total file now has {count} redirect entries")
