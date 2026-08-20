"use client";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// The 10 headline checks shown first (scannable), then the full grouped 86 on toggle.
const HEADLINE = [
  "Refrigerant charge level",
  "Capacitor test",
  "Coil condition",
  "Condensate drain",
  "Thermostat calibration",
  "Electrical connections",
  "Blower assembly",
  "Airflow measurement",
  "Safety controls",
  "Filter inspection",
];

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Cooling system",
    items: [
      "Refrigerant charge level", "Suction line temperature", "Liquid line temperature", "Superheat reading",
      "Subcooling reading", "Compressor amp draw", "Compressor start/run capacitor", "Contactor condition",
      "Condenser fan motor amps", "Condenser fan blade balance", "Evaporator coil condition", "Condenser coil condition",
      "Coil cleaning as needed", "System cooling split (supply vs return)", "Refrigerant leak check", "Service valve condition",
      "Line-set insulation", "Cooling cycle test", "TXV / metering device operation", "Accumulator / receiver check",
    ],
  },
  {
    title: "Heating system",
    items: [
      "Heat exchanger inspection", "Burner condition", "Burner ignition test", "Flame sensor cleaning",
      "Gas pressure check", "Gas valve operation", "Pilot / igniter operation", "Heating cycle test",
      "Heat pump reversing valve", "Defrost cycle operation", "Auxiliary / emergency heat", "Heat strip operation",
      "Flue / venting inspection", "Heating temperature rise", "Inducer motor operation", "High-efficiency condensate drainage",
    ],
  },
  {
    title: "Electrical",
    items: [
      "Disconnect condition", "Whip and conduit condition", "Voltage at unit", "Control voltage (24V)",
      "Wire connection tightness", "Wire insulation condition", "Fuse / breaker condition", "Relay operation",
      "Transformer condition", "Grounding check", "Amp draw within spec", "Low-voltage wiring inspection", "Surge protection check", "Capacitor microfarad reading",
    ],
  },
  {
    title: "Airflow & ducts",
    items: [
      "Airflow measurement", "Blower motor amps", "Blower wheel condition", "Blower belt (if applicable)",
      "Return air inspection", "Supply air inspection", "Visible duct connections", "Register / grille condition",
      "Static pressure reading", "Air filter inspection", "Evaporator airflow balance",
    ],
  },
  {
    title: "Thermostat & controls",
    items: [
      "Thermostat calibration", "Thermostat mounting / level", "Thermostat batteries", "Programming / schedule check",
      "Fan operation (auto/on)", "System changeover test", "Sensor readings", "Control board inspection", "Smart thermostat connectivity",
    ],
  },
  {
    title: "Safety controls",
    items: [
      "High-pressure safety switch", "Low-pressure safety switch", "Float / overflow safety switch", "Limit switch operation",
      "Rollout switch (gas)", "Pressure switch (gas)", "Carbon monoxide spot check", "Emergency shutoff operation", "Door / panel safety switch",
    ],
  },
  {
    title: "Condensate & drainage",
    items: [
      "Primary drain line clear", "Secondary / overflow drain", "Drain pan condition", "Condensate pump operation",
      "Drain line treatment", "Trap condition", "Condensate pan float test",
    ],
  },
];

export default function Checklist86() {
  const [open, setOpen] = useState(false);
  const total = GROUPS.reduce((n, g) => n + g.items.length, 0); // 86

  return (
    <div>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {HEADLINE.map((c) => (
          <li key={c} className="flex items-start gap-2 text-[17px]">
            <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#C8101F]" />
            <span>{c}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-[17px] font-bold text-primary hover:bg-muted/50"
        data-testid="toggle-86"
      >
        {open ? "Hide the full checklist" : `See the full ${total}-point checklist`}
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h4 className="mb-2 text-[15px] font-extrabold uppercase tracking-wide text-primary">
                {g.title} <span className="text-muted-foreground">({g.items.length})</span>
              </h4>
              <ul className="space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[15px] text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
