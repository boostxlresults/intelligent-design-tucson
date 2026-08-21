import { SERVICE_ZIP_CODES } from "@/lib/seo/zipCodes";

const AREAS = "Tucson, Marana, Oro Valley, Catalina Foothills, Sahuarita, Vail, Green Valley, SaddleBrooke, Catalina, Casas Adobes, Flowing Wells & Tanque Verde";

export default function LpServiceArea() {
  return (
    <section className="border-t border-border bg-muted/30 px-4 py-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-primary">Local, Tucson-based &mdash; here fast</h2>
        <p className="mt-3 text-[17px] text-muted-foreground">
          We serve {AREAS} and the surrounding metro, including ZIP codes:
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          {SERVICE_ZIP_CODES.join(" · ")}
        </p>
      </div>
    </section>
  );
}
