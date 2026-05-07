"""
Generate a JSON list of service slugs that should be noindexed (location variants).
This list will be used by the service page route to conditionally add noindex.
"""
import json
import os

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

with open('data/pages/services/manifest.json') as f:
    m = json.load(f)

# Services that end in '-tucson' but ARE the main page (not a variant):
main_tucson_pages = {
    'ac-repair-tucson', 'ac-installation-tucson', 'ac-service-tucson', 'ac-tuneup-tucson',
    'heater-repair-tucson', 'heater-service-tucson', 'duct-repair-tucson', 'duct-cleaning-tucson',
    'duct-sealing-tucson', 'furnaces-tucson', 'hvac-tucson', 'smart-thermostat-installation-tucson',
    'drain-sewer-tucson', 'drain-clearing-tucson',
}

# Location suffixes that indicate a variant page
locations = ['marana', 'oro-valley', 'sahuarita', 'vail', 'green-valley', 
             'catalina-foothills', 'corona-de-tucson', 'drexel-heights', 'east-tucson',
             'gladden-farms', 'picture-rocks', 'rita-ranch', 'saddle-brooke-catalina',
             'tanque-verde', 'tortolita', 'tucson-estates', 'avra-valley', 'casas-adobes', 
             'rillito', 'red-rock-casa-grande', 'cortaro']

# Location-only pages in the services manifest
location_only_pages = set()
for slug in m['services'].keys():
    if slug in locations:
        location_only_pages.add(slug)

location_variants = []

for slug in m['services'].keys():
    if slug in main_tucson_pages:
        continue
    
    is_variant = False
    for loc in locations:
        if slug.endswith(f'-{loc}'):
            is_variant = True
            break
    
    if slug in location_only_pages:
        is_variant = True
    
    if is_variant:
        location_variants.append(slug)

# Write the noindex list as a JSON file
output = {
    "description": "Service page slugs that should have noindex meta tag (location variants with duplicate content)",
    "updated": "2026-05-07",
    "count": len(location_variants),
    "slugs": sorted(location_variants)
}

with open('data/noindex-service-slugs.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"Generated noindex list with {len(location_variants)} slugs")
print(f"Saved to data/noindex-service-slugs.json")
