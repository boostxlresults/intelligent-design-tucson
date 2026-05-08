"""
Fast Service Map Sync - Batch approach
1. Fetch all recent completed jobs
2. Batch-fetch unique locations
3. Bulk insert to database
"""

import json
import time
import requests
from datetime import datetime, timedelta
import psycopg2

# ServiceTitan API Credentials
ST_CLIENT_ID = "cid.05yuzql8drftq70qsr0p92kv1"
ST_CLIENT_SECRET = "cs1.9493galthwyaggnfde4j2qn9iws6guwmjm65eatcg18n1c3dbw"
ST_APP_KEY = "ak1.pokzkxlhneuoybksiclx7s3ke"
ST_TENANT_ID = "227669022"
ST_AUTH_URL = "https://auth.servicetitan.io/connect/token"

# Neon Database
DATABASE_URL = "postgresql://neondb_owner:npg_8NFGXWZL3nSe@ep-floral-credit-ajcy34x0-pooler.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require"

BU_ID_MAP = {
    38050: "HVAC Sales",
    38177: "HVAC Install",
    38296: "Plumbing",
    38297: "G & A",
    38298: "HVAC Service Repair",
    100004: "HVAC Scheduled Service",
    63273843: "Electrical",
    63273971: "PV Solar",
    70034293: "Roofing",
}

BU_SERVICE_MAP = {
    "HVAC Sales": "HVAC Consultation",
    "HVAC Install": "HVAC Installation",
    "HVAC Service Repair": "AC Repair",
    "HVAC Scheduled Service": "AC Maintenance",
    "Plumbing": "Plumbing",
    "Electrical": "Electrical",
    "PV Solar": "Solar Installation",
    "Roofing": "Roofing",
}


def get_token():
    resp = requests.post(ST_AUTH_URL, data={
        "grant_type": "client_credentials",
        "client_id": ST_CLIENT_ID,
        "client_secret": ST_CLIENT_SECRET,
    })
    resp.raise_for_status()
    return resp.json()["access_token"]


def get_headers(token):
    return {"Authorization": f"Bearer {token}", "ST-App-Key": ST_APP_KEY}


def fetch_recent_jobs(token, days=30):
    """Fetch recent completed jobs."""
    headers = get_headers(token)
    start = (datetime.utcnow() - timedelta(days=days)).strftime("%Y-%m-%dT00:00:00Z")
    
    all_jobs = []
    page = 1
    while True:
        resp = requests.get(
            f"https://api.servicetitan.io/jpm/v2/tenant/{ST_TENANT_ID}/jobs",
            headers=headers,
            params={"completedOnOrAfter": start, "jobStatus": "Completed", "page": page, "pageSize": 100},
            timeout=30,
        )
        if resp.status_code != 200:
            print(f"Error page {page}: {resp.status_code}")
            break
        data = resp.json()
        jobs = data.get("data", [])
        all_jobs.extend(jobs)
        if not data.get("hasMore", False):
            break
        page += 1
        if page > 20:
            break
    
    # Filter out G&A
    all_jobs = [j for j in all_jobs if j.get("businessUnitId") != 38297]
    print(f"Fetched {len(all_jobs)} completed jobs (excluding G&A)")
    return all_jobs


def batch_fetch_locations(token, location_ids):
    """Fetch locations in batches using the locations list endpoint."""
    headers = get_headers(token)
    locations = {}
    
    # ServiceTitan supports fetching locations by IDs
    unique_ids = list(set(location_ids))
    print(f"Resolving {len(unique_ids)} unique locations...")
    
    # Fetch in batches of 50
    for i in range(0, len(unique_ids), 50):
        batch = unique_ids[i:i+50]
        ids_param = ",".join(str(lid) for lid in batch)
        
        resp = requests.get(
            f"https://api.servicetitan.io/crm/v2/tenant/{ST_TENANT_ID}/locations",
            headers=headers,
            params={"ids": ids_param, "pageSize": 50},
            timeout=30,
        )
        
        if resp.status_code == 200:
            data = resp.json()
            for loc in data.get("data", []):
                addr = loc.get("address", {}) or {}
                locations[loc["id"]] = {
                    "city": addr.get("city", ""),
                    "state": addr.get("state", "AZ"),
                    "zip": addr.get("zip", ""),
                    "street": addr.get("street", "").strip(),
                    "latitude": addr.get("latitude"),
                    "longitude": addr.get("longitude"),
                }
        else:
            print(f"  Batch error: {resp.status_code} - {resp.text[:100]}")
        
        time.sleep(0.3)
        
        if (i // 50) % 5 == 0 and i > 0:
            print(f"  Resolved {i}/{len(unique_ids)} locations...")
    
    print(f"  Resolved {len(locations)} locations total")
    return locations


def categorize_service(job):
    """Determine service type."""
    bu_id = job.get("businessUnitId")
    bu_name = BU_ID_MAP.get(bu_id, "")
    summary = (job.get("summary", "") or "").lower()
    
    if "install" in summary or "replacement" in summary:
        if bu_id in [38298, 100004, 38050, 38177]:
            return "HVAC Installation"
        elif bu_id == 38296:
            return "Plumbing Installation"
        elif bu_id == 63273843:
            return "Electrical Installation"
    if "tune" in summary or "maintenance" in summary or "pma" in summary:
        return "AC Maintenance"
    if "drain" in summary or "sewer" in summary:
        return "Drain & Sewer"
    if "water heater" in summary:
        return "Water Heater Service"
    if "solar" in summary or "panel" in summary:
        return "Solar Installation"
    if "roof" in summary or "coating" in summary:
        return "Roofing"
    
    return BU_SERVICE_MAP.get(bu_name, bu_name or "General Service")


def clean_summary(summary):
    """Clean up job summary for display."""
    if not summary:
        return ""
    # Remove internal notes
    text = summary.split("Notes added by")[0].strip()
    text = text.replace("***do not move these calls****", "").strip()
    text = text.replace("\r\n", " ").replace("\n", " ")
    # Remove multiple spaces
    while "  " in text:
        text = text.replace("  ", " ")
    return text[:500]


def bulk_insert(jobs, locations):
    """Insert all jobs into database."""
    conn = psycopg2.connect(DATABASE_URL)
    cur = conn.cursor()
    
    # Get existing IDs
    cur.execute("SELECT servicetitan_job_id FROM job_checkins")
    existing = set(row[0] for row in cur.fetchall())
    
    inserted = 0
    skipped = 0
    
    for job in jobs:
        job_id = str(job.get("id", ""))
        if job_id in existing:
            skipped += 1
            continue
        
        loc_id = job.get("locationId")
        loc = locations.get(loc_id)
        if not loc or not loc.get("city"):
            skipped += 1
            continue
        
        service_type = categorize_service(job)
        bu_id = job.get("businessUnitId")
        bu_name = BU_ID_MAP.get(bu_id, "")
        completed_at = job.get("completedOn") or job.get("modifiedOn")
        summary = clean_summary(job.get("summary", ""))
        short_desc = summary if summary else f"{service_type} completed in {loc['city']}, AZ"
        address_full = f"{loc['street']} {loc['city']}, {loc['state']} {loc['zip']}".strip()
        
        try:
            cur.execute("""
                INSERT INTO job_checkins 
                (servicetitan_job_id, service_type, business_unit, short_description,
                 address_full, city, state, zip, latitude, longitude,
                 technician_name, customer_first_name, customer_last_initial,
                 completed_at, images, tags)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                ON CONFLICT (servicetitan_job_id) DO NOTHING
            """, (
                job_id, service_type, bu_name, short_desc,
                address_full, loc["city"], loc["state"], loc["zip"],
                loc.get("latitude"), loc.get("longitude"),
                "", "", "",
                completed_at, json.dumps([]), json.dumps([service_type, bu_name])
            ))
            inserted += 1
        except Exception as e:
            if inserted < 3:
                print(f"  Error: {e}")
            conn.rollback()
            continue
    
    conn.commit()
    cur.close()
    conn.close()
    
    print(f"Inserted {inserted}, skipped {skipped}")
    return inserted


def main():
    print(f"=== Fast Service Map Sync - {datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')} ===")
    
    token = get_token()
    print("✓ Authenticated")
    
    # Step 1: Fetch jobs
    jobs = fetch_recent_jobs(token, days=30)
    if not jobs:
        return
    
    # Step 2: Batch resolve locations
    location_ids = [j.get("locationId") for j in jobs if j.get("locationId")]
    locations = batch_fetch_locations(token, location_ids)
    
    # Step 3: Bulk insert
    print("Inserting into database...")
    inserted = bulk_insert(jobs, locations)
    
    print(f"\n=== Done! {inserted} check-ins added ===")


if __name__ == "__main__":
    main()
