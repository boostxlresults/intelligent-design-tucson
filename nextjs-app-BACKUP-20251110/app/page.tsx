import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Intelligent Design provides expert HVAC, plumbing, solar, electrical, and roofing services in Tucson, AZ. Family and veteran-owned with 22,000+ 5-star reviews.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <main className="flex flex-col items-center gap-8 p-24">
        <h1 className="text-4xl font-bold text-foreground">
          Intelligent Design - Next.js Migration
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl text-center">
          Next.js project structure created successfully. This is a test page to verify the setup.
        </p>
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            ✅ Next.js 16.0.1 initialized<br />
            ✅ Tailwind CSS configured with brand colors<br />
            ✅ TypeScript configured<br />
            ✅ SEO utilities copied (7 files)<br />
            ✅ Global CSS with Intelligent Design branding
          </p>
        </div>
        <div className="mt-8 p-6 bg-card border border-card-border rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-card-foreground">Next Steps</h2>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Copy UI components (Day 2)</li>
            <li>• Copy custom components (Day 3)</li>
            <li>• Copy data files (Day 4)</li>
            <li>• Create page templates (Day 6-7)</li>
            <li>• Migrate all 153 pages (Day 8-19)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
