import { PhoneCall, CalendarClock, Wrench } from "lucide-react";

const STEPS = [
  { icon: PhoneCall, title: "1. You call, a real person answers", desc: "No phone tree. We confirm your address, the problem, and the soonest time we can be there." },
  { icon: CalendarClock, title: "2. We give you a real arrival window", desc: "Often same day. We text when the technician is on the way &mdash; no all-day waiting." },
  { icon: Wrench, title: "3. Diagnose, quote, then fix", desc: "The technician finds the problem and gives you the price up front. Nothing gets done until you say yes." },
];

export default function LpWhatHappens() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">What happens when you call</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <Icon className="h-7 w-7 text-[#C8101F]" />
                <h3 className="mt-3 text-[17px] font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 text-[15px] text-muted-foreground" dangerouslySetInnerHTML={{ __html: s.desc }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
