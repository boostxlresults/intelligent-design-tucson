#!/usr/bin/env python3
"""
Fast sequential generator using gpt-5-mini for remaining pages.
Processes one at a time but with minimal latency.
"""
import json, os, sys, time, re
from openai import OpenAI
import signal

def timeout_handler(signum, frame):
    raise TimeoutError('API call timed out')


client = OpenAI()

with open('/home/ubuntu/intelligent-design-tucson/scripts/location_data.json') as f:
    LOCATION_DATA = json.load(f)

SERVICE_INFO = {
    "hvac": {"name": "HVAC", "cat": "HVAC", "svc": "AC repair, replacement, heating, ductwork, maintenance"},
    "roofing": {"name": "Roofing", "cat": "Roofing", "svc": "roof repair, replacement, tile, shingle, flat, coating (NO metal)"},
    "plumbing": {"name": "Plumbing", "cat": "Plumbing", "svc": "leak repair, water heater, repiping, filtration, slab leak"},
    "electrical": {"name": "Electrical", "cat": "Electrical", "svc": "panel upgrades, wiring, outlets, lighting, EV chargers, generators"},
    "solar": {"name": "Solar", "cat": "Solar", "svc": "solar panels, battery, maintenance, grid-tie"},
    "drain-clearing": {"name": "Drain Clearing", "cat": "Plumbing", "svc": "drain cleaning, hydro jetting, camera inspection, root removal"},
    "drain-sewer": {"name": "Drain & Sewer", "cat": "Plumbing", "svc": "sewer line repair/replacement, trenchless, camera inspection"},
    "heating": {"name": "Heating", "cat": "HVAC", "svc": "furnace, heat pump, installation, maintenance, ductwork"}
}

FILE_PREFIX = {
    "hvac": "hvac", "roofing": "roofing", "plumbing": "plumbing",
    "electrical": "electrical", "solar": "solarinstallation",
    "drain-clearing": "drainclearing", "drain-sewer": "drainsewer", "heating": "heating"
}

def generate_page(service_key, location_key):
    loc = LOCATION_DATA[location_key]
    svc = SERVICE_INFO[service_key]
    issue_map = {"hvac": "hvac", "roofing": "roofing", "plumbing": "plumbing",
                 "electrical": "electrical", "solar": "solar",
                 "drain-clearing": "drain", "drain-sewer": "drain", "heating": "hvac"}
    issues = loc["commonIssues"].get(issue_map[service_key], "")
    
    prompt = f"""Write unique {svc['name']} service page content for {loc['displayName']}, AZ.
Company: Intelligent Design (46+ yrs, 4.97★, 3600+ reviews, (520) 333-2665)
Services: {svc['svc']}
Location: {loc['displayName']} | Zips: {', '.join(loc['zipCodes'])} | Pop: {loc['population']} | Elev: {loc['elevation']}
Homes: {loc['medianHomeAge']} old, {loc['medianHomeValue']}, {loc['housingStock']}
Climate: {loc['climateNotes']} | Issues: {issues}
Landmarks: {', '.join(loc['landmarks'][:3])} | Areas: {', '.join(loc['neighborhoods'][:3])}

Return ONLY JSON:
{{"title":"SEO title 60ch max with {loc['displayName']} + {svc['name']}",
"description":"Meta desc 155ch with location+service+CTA",
"h1":"H1 heading with location+service",
"h2Subheading":"Unique subheading for this location",
"tagline":"Brief tagline",
"highlights":[{{"title":"T1","description":"2 sentences unique to {loc['displayName']}"}},{{"title":"T2","description":"D2"}},{{"title":"T3","description":"D3"}},{{"title":"T4","description":"D4"}},{{"title":"T5","description":"D5"}},{{"title":"T6","description":"D6"}}],
"contentSections":[{{"type":"heading","heading":"Unique H2","level":2,"content":"same"}},{{"type":"paragraph","content":"150 words about local {svc['name']} conditions"}},{{"type":"paragraph","content":"150 words about specific local challenges"}},{{"type":"cta","heading":"CTA","content":"text","buttonText":"Call (520) 333-2665","buttonLink":"tel:+15203332665"}},{{"type":"heading","heading":"2nd H2","level":2,"content":"same"}},{{"type":"paragraph","content":"150 words"}},{{"type":"paragraph","content":"150 words community focus"}},{{"type":"cta","heading":"Final CTA","content":"text","buttonText":"Schedule Service","buttonLink":"/contact"}}],
"faqs":[{{"question":"Q1 mentioning {loc['displayName']}","answer":"80 word answer"}},{{"question":"Q2","answer":"A2"}},{{"question":"Q3","answer":"A3"}},{{"question":"Q4","answer":"A4"}},{{"question":"Q5","answer":"A5"}},{{"question":"Q6","answer":"A6"}}],
"refinementQuestions":[{{"question":"RQ1","answer":"60 words"}},{{"question":"RQ2","answer":"A2"}},{{"question":"RQ3","answer":"A3"}},{{"question":"RQ4","answer":"A4"}}]}}"""

    for attempt in range(5):
        try:
            signal.signal(signal.SIGALRM, timeout_handler)
            signal.alarm(90)  # 90 second timeout
            response = client.chat.completions.create(
                model="gpt-5-mini",
                messages=[
                    {"role": "system", "content": "SEO content writer for local home services. Return valid JSON only, no markdown."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.9,
                max_tokens=3500
            )
            signal.alarm(0)  # Cancel alarm
            raw = response.choices[0].message.content
            if raw is None:
                print(f"    Empty response attempt {attempt+1}", flush=True)
                time.sleep(3)
                continue
            content = raw.strip()
            if content.startswith("```"):
                content = re.sub(r'^```(?:json)?\s*', '', content)
                content = re.sub(r'\s*```$', '', content)
            return json.loads(content)
        except TimeoutError:
            signal.alarm(0)
            print(f"    Timeout attempt {attempt+1}", flush=True)
            time.sleep(5)
        except json.JSONDecodeError as e:
            signal.alarm(0)
            print(f"    JSON error attempt {attempt+1}: {e}", flush=True)
            time.sleep(2)
        except Exception as e:
            signal.alarm(0)
            print(f"    API error attempt {attempt+1}: {e}", flush=True)
            time.sleep(5 * (attempt + 1))
    return None


def write_ts_file(service_key, location_key, content_data):
    loc = LOCATION_DATA[location_key]
    svc = SERVICE_INFO[service_key]
    prefix = FILE_PREFIX[service_key]
    
    slug = f"solar-installation-{location_key}" if service_key == "solar" else f"{service_key}-{location_key}"
    filename = f"{prefix}{location_key.replace('-','')}.ts"
    filepath = f"/home/ubuntu/intelligent-design-tucson/data/pages/services/{filename}"
    
    def esc(s): return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')
    
    ts = f'''import type {{ ServicePageData }} from "@/types/services";

// Unique location-specific content for {svc["name"]} in {loc["displayName"]}
// Generated with location-specific data - NOT a template swap

const data: ServicePageData = {{
  title: "{esc(content_data.get('title',''))}",
  description: "{esc(content_data.get('description',''))}",
  slug: "{slug}",
  h1: "{esc(content_data.get('h1',''))}",
  h2Subheading: "{esc(content_data.get('h2Subheading',''))}",
  tagline: "{esc(content_data.get('tagline',''))}",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "{svc["name"]} services in {loc["displayName"]}, Arizona",
  serviceName: "{svc["name"]}",
  category: "{svc["cat"]}",
  highlights: {json.dumps(content_data.get("highlights",[]), indent=2)},
  content: {{
    mainHeading: "{esc(content_data.get('h1',''))}",
    sections: {json.dumps(content_data.get("contentSections",[]), indent=4)}
  }},
  faqs: {{
    category: "{svc["name"]} in {loc["displayName"]}",
    items: {json.dumps(content_data.get("faqs",[]), indent=4)}
  }},
  commonQuestions: {json.dumps(content_data.get("refinementQuestions",[]), indent=4)},
  serviceArea: {{
    primary: "{loc["displayName"]}",
    nearby: {json.dumps(loc.get("neighborhoods", [])[:5])}
  }}
}};

export default data;
'''
    with open(filepath, 'w') as f:
        f.write(ts)
    return filepath


def main():
    with open('/tmp/remaining_pages.json') as f:
        remaining = json.load(f)
    
    print(f"Processing {len(remaining)} remaining pages with gpt-5-mini...", flush=True)
    
    success = 0
    failed = 0
    start = time.time()
    
    for i, item in enumerate(remaining):
        service_key, location_key = item.split('|')
        print(f"  [{i+1}/{len(remaining)}] {item}...", end=" ", flush=True)
        
        data = generate_page(service_key, location_key)
        if data:
            write_ts_file(service_key, location_key, data)
            success += 1
            elapsed = time.time() - start
            rate = success / (elapsed / 60) if elapsed > 0 else 0
            remaining_est = (len(remaining) - i - 1) / rate if rate > 0 else 999
            print(f"✓ ({rate:.1f}/min, ~{remaining_est:.0f}min left)", flush=True)
        else:
            failed += 1
            print("✗ FAILED", flush=True)
    
    print(f"\nDONE: {success} success, {failed} failed", flush=True)


if __name__ == "__main__":
    main()
