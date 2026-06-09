#!/usr/bin/env python3
"""
Fast batch generator for remaining location-variant pages.
Uses concurrent requests with asyncio for speed.
"""

import json
import os
import sys
import time
import re
import asyncio
from openai import AsyncOpenAI

client = AsyncOpenAI()

# Load location data
with open('/home/ubuntu/intelligent-design-tucson/scripts/location_data.json') as f:
    LOCATION_DATA = json.load(f)

SERVICE_INFO = {
    "hvac": {"name": "HVAC", "category": "HVAC", "services": "AC repair, replacement, installation, heating, ductwork, maintenance, indoor air quality"},
    "roofing": {"name": "Roofing", "category": "Roofing", "services": "roof repair, replacement, inspection, tile roofing, shingle roofing, flat roofs, roof coating (NO metal roofs)"},
    "plumbing": {"name": "Plumbing", "category": "Plumbing", "services": "leak repair, pipe repair, water heater, repiping, fixture installation, water filtration, slab leak detection"},
    "electrical": {"name": "Electrical", "category": "Electrical", "services": "panel upgrades, wiring, outlet installation, lighting, EV chargers, generators, smart home"},
    "solar": {"name": "Solar Installation", "category": "Solar", "services": "solar panel installation, solar battery, solar maintenance, grid-tie systems"},
    "drain-clearing": {"name": "Drain Clearing", "category": "Plumbing", "services": "drain cleaning, clog removal, hydro jetting, camera inspection, root removal"},
    "drain-sewer": {"name": "Drain & Sewer", "category": "Plumbing", "services": "sewer line repair, sewer replacement, trenchless repair, drain cleaning, camera inspection"},
    "heating": {"name": "Heating", "category": "HVAC", "services": "furnace repair, heat pump, heating installation, maintenance, ductwork, thermostat"}
}

SERVICE_FILE_PREFIX = {
    "hvac": "hvac",
    "roofing": "roofing",
    "plumbing": "plumbing",
    "electrical": "electrical",
    "solar": "solarinstallation",
    "drain-clearing": "drainclearing",
    "drain-sewer": "drainsewer",
    "heating": "heating"
}

semaphore = asyncio.Semaphore(5)  # Max 5 concurrent requests

async def generate_page(service_key, location_key):
    """Generate content for a single page."""
    async with semaphore:
        loc = LOCATION_DATA[location_key]
        svc = SERVICE_INFO[service_key]
        
        # Map to correct issue key
        issue_map = {"hvac": "hvac", "roofing": "roofing", "plumbing": "plumbing", 
                     "electrical": "electrical", "solar": "solar",
                     "drain-clearing": "drain", "drain-sewer": "drain", "heating": "hvac"}
        issues = loc["commonIssues"].get(issue_map[service_key], "")
        
        prompt = f"""Write UNIQUE service page content for {svc['name']} in {loc['displayName']}, AZ.
Company: Intelligent Design Air Conditioning, Plumbing, Solar, & Electric (46+ yrs, 4.97★, 3,600+ reviews, phone: (520) 333-2665)
Services: {svc['services']}

LOCATION: {loc['displayName']} | Zips: {', '.join(loc['zipCodes'])} | Pop: {loc['population']} | Elev: {loc['elevation']}
Home age: {loc['medianHomeAge']} | Value: {loc['medianHomeValue']} | Stock: {loc['housingStock']}
Climate: {loc['climateNotes']} | Issues: {issues}
Landmarks: {', '.join(loc['landmarks'][:4])} | Neighborhoods: {', '.join(loc['neighborhoods'][:4])}

RULES: Content MUST be unique to {loc['displayName']}. Reference specific zip codes, housing stock, local landmarks, elevation effects. NO generic content. NO metal roofs.

Return ONLY valid JSON (no markdown):
{{"title":"60 char SEO title with {loc['displayName']} + {svc['name']}",
"description":"155 char meta desc with location + service + CTA",
"h1":"Primary heading",
"h2Subheading":"Unique subheading for this location",
"tagline":"Brief tagline with local stats",
"highlights":[{{"title":"Unique highlight 1","description":"2 sentences specific to {loc['displayName']}"}},{{"title":"H2","description":"desc"}},{{"title":"H3","description":"desc"}},{{"title":"H4","description":"desc"}},{{"title":"H5","description":"desc"}},{{"title":"H6","description":"desc"}}],
"contentSections":[{{"type":"heading","heading":"H2 unique to location","level":2,"content":"same"}},{{"type":"paragraph","content":"150-200 word paragraph specific to local conditions"}},{{"type":"paragraph","content":"Another unique paragraph"}},{{"type":"cta","heading":"CTA with {loc['displayName']}","content":"CTA text","buttonText":"Call (520) 333-2665","buttonLink":"tel:+15203332665"}},{{"type":"heading","heading":"Second H2","level":2,"content":"same"}},{{"type":"paragraph","content":"150-200 words"}},{{"type":"paragraph","content":"More unique content"}},{{"type":"heading","heading":"Third H2 - community focus","level":2,"content":"same"}},{{"type":"paragraph","content":"Community paragraph with landmarks"}},{{"type":"cta","heading":"Final CTA","content":"Closing","buttonText":"Call (520) 333-2665","buttonLink":"tel:+15203332665"}}],
"faqs":[{{"question":"FAQ 1 mentioning {loc['displayName']}","answer":"80-120 word answer"}},{{"question":"Q2","answer":"A2"}},{{"question":"Q3","answer":"A3"}},{{"question":"Q4","answer":"A4"}},{{"question":"Q5","answer":"A5"}},{{"question":"Q6","answer":"A6"}},{{"question":"Q7","answer":"A7"}},{{"question":"Q8","answer":"A8"}}],
"refinementQuestions":[{{"question":"RQ1 for {svc['name']} in {loc['displayName']}","answer":"60-100 words"}},{{"question":"RQ2","answer":"A2"}},{{"question":"RQ3","answer":"A3"}},{{"question":"RQ4","answer":"A4"}},{{"question":"RQ5","answer":"A5"}},{{"question":"RQ6","answer":"A6"}}]}}"""

        try:
            response = await client.chat.completions.create(
                model="gpt-5-mini",
                messages=[
                    {"role": "system", "content": "Expert SEO content writer for local home services. Write highly specific location-targeted content. Return valid JSON only."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.85,
                max_tokens=4000
            )
            
            content = response.choices[0].message.content.strip()
            if content.startswith("```"):
                content = re.sub(r'^```(?:json)?\s*', '', content)
                content = re.sub(r'\s*```$', '', content)
            
            data = json.loads(content)
            return data
        except Exception as e:
            print(f"  ERROR {service_key}|{location_key}: {e}")
            # Retry once
            await asyncio.sleep(2)
            try:
                response = await client.chat.completions.create(
                    model="gpt-5-mini",
                    messages=[
                        {"role": "system", "content": "Expert SEO content writer. Return valid JSON only."},
                        {"role": "user", "content": prompt}
                    ],
                    temperature=0.85,
                    max_tokens=4000
                )
                content = response.choices[0].message.content.strip()
                if content.startswith("```"):
                    content = re.sub(r'^```(?:json)?\s*', '', content)
                    content = re.sub(r'\s*```$', '', content)
                return json.loads(content)
            except Exception as e2:
                print(f"  FAILED RETRY {service_key}|{location_key}: {e2}")
                return None


def write_ts_file(service_key, location_key, content_data):
    """Write the TypeScript data file."""
    loc = LOCATION_DATA[location_key]
    svc = SERVICE_INFO[service_key]
    prefix = SERVICE_FILE_PREFIX[service_key]
    
    if service_key == "solar":
        slug = f"solar-installation-{location_key}"
    else:
        slug = f"{service_key}-{location_key}"
    
    filename = f"{prefix}{location_key.replace('-','')}.ts"
    filepath = f"/home/ubuntu/intelligent-design-tucson/data/pages/services/{filename}"
    
    title = content_data["title"].replace('"', '\\"')
    description = content_data["description"].replace('"', '\\"')
    h1 = content_data["h1"].replace('"', '\\"')
    h2 = content_data["h2Subheading"].replace('"', '\\"')
    tagline = content_data["tagline"].replace('"', '\\"')
    
    ts = f'''import type {{ ServicePageData }} from "@/types/services";

// Unique location-specific content for {svc["name"]} in {loc["displayName"]}
// Generated with location-specific data - NOT a template swap

const data: ServicePageData = {{
  title: "{title}",
  description: "{description}",
  slug: "{slug}",
  h1: "{h1}",
  h2Subheading: "{h2}",
  tagline: "{tagline}",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "{svc["name"]} services in {loc["displayName"]}, Arizona",
  serviceName: "{svc["name"]}",
  category: "{svc["category"]}",
  highlights: {json.dumps(content_data["highlights"], indent=2)},
  content: {{
    mainHeading: "{h1}",
    sections: {json.dumps(content_data["contentSections"], indent=6)}
  }},
  faqs: {{
    category: "{svc["name"]} in {loc["displayName"]}",
    items: {json.dumps(content_data["faqs"], indent=4)}
  }},
  commonQuestions: {json.dumps(content_data["refinementQuestions"], indent=4)},
  serviceArea: {{
    primary: "{loc["displayName"]}",
    nearby: {json.dumps(loc.get("neighborhoods", []))}
  }}
}};

export default data;
'''
    with open(filepath, 'w') as f:
        f.write(ts)
    return filepath


async def process_batch(items):
    """Process a batch of service|location pairs."""
    tasks = []
    for item in items:
        service_key, location_key = item.split('|')
        tasks.append((service_key, location_key, generate_page(service_key, location_key)))
    
    results = {"success": 0, "failed": 0}
    
    for service_key, location_key, task in tasks:
        content = await task
        if content:
            write_ts_file(service_key, location_key, content)
            results["success"] += 1
            print(f"  ✓ {service_key}|{location_key}")
        else:
            results["failed"] += 1
            print(f"  ✗ {service_key}|{location_key}")
    
    return results


async def main():
    # Get remaining pages
    with open('/tmp/remaining_pages.json') as f:
        remaining = json.load(f)
    
    print(f"Processing {len(remaining)} remaining pages with 5 concurrent requests...")
    print(f"Estimated time: {len(remaining) * 15 / 5 / 60:.1f} minutes")
    print()
    
    # Process in batches of 10
    batch_size = 10
    total_success = 0
    total_failed = 0
    
    for i in range(0, len(remaining), batch_size):
        batch = remaining[i:i+batch_size]
        print(f"Batch {i//batch_size + 1}/{(len(remaining)+batch_size-1)//batch_size} ({len(batch)} items)...")
        results = await process_batch(batch)
        total_success += results["success"]
        total_failed += results["failed"]
        print(f"  Batch done: {results['success']} success, {results['failed']} failed")
        print(f"  Total progress: {total_success}/{len(remaining)} ({total_success*100//len(remaining)}%)")
        print()
    
    print(f"\n{'='*60}")
    print(f"COMPLETE: {total_success} success, {total_failed} failed out of {len(remaining)}")
    print(f"{'='*60}")


if __name__ == "__main__":
    asyncio.run(main())
