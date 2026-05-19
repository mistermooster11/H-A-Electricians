export type AccordionStep = { label: string; body: string };

export type AccordionItem = {
  id: string;
  title: string;
  image: string;
  description: string;
  learnHref: string;
  steps: AccordionStep[];
};

export const accordionItems: AccordionItem[] = [
  {
    id: "accordion-0",
    title: "200 Amp Panel Upgrades",
    image: "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Panel-Breaker-Replacement.jpg",
    description:
      "Older Manhattan homes run on 60–100 amp panels that can't keep up with modern appliances, AC units, or EV chargers. We upgrade to 200-amp service with all permits pulled and inspections passed.",
    learnHref: "/craft-catalog/panel-upgrades",
    steps: [
      { label: "Assess Your Panel", body: "We evaluate your current capacity and confirm the upgrade path — including any service entry work required." },
      { label: "Free Written Quote", body: "Full price covering labor, materials, and permit fees before we schedule a start date." },
      { label: "Pull Permits & Install", body: "We handle all NYC permit requirements and install the new 200-amp panel to code." },
      { label: "Inspection & Sign-Off", body: "We schedule and pass the required inspection before considering the job complete." },
    ],
  },
  {
    id: "accordion-1",
    title: "Home Rewires",
    image: "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Residential-Electrical-Rewiring.png",
    description:
      "Knob-and-tube, aluminum, and cloth-insulated wiring are fire hazards that insurers increasingly refuse to cover. We replace legacy wiring with modern copper throughout Manhattan homes — fully permitted and inspected.",
    learnHref: "/craft-catalog/home-rewires",
    steps: [
      { label: "Full Wiring Assessment", body: "We identify all active legacy wiring and map the full replacement scope before quoting." },
      { label: "Written Estimate", body: "Detailed price — labor and materials — agreed before any walls open." },
      { label: "Replace & Re-Run", body: "All hazardous wiring replaced with modern copper; we work cleanly and patch as we go." },
      { label: "Final Inspection", body: "All work inspected and signed off to current NYC electrical code." },
    ],
  },
  {
    id: "accordion-2",
    title: "EV Charger Installation",
    image: "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Electric-Charging-at-home.png",
    description:
      "A Level 2 charger needs a dedicated 240V circuit — we assess your panel first, handle any necessary upgrade, then install the circuit and charger at your parking location. Same-day installation available in many cases.",
    learnHref: "/craft-catalog/ev-charger-installation",
    steps: [
      { label: "Panel Capacity Check", body: "We confirm your panel can support a 240V dedicated circuit — or identify what upgrade is needed." },
      { label: "Free Quote", body: "Full written estimate covering the circuit run, outlet or hardwired charger, and any panel work." },
      { label: "Install the Circuit", body: "Dedicated 240V circuit run cleanly to your parking location; NEMA 14-50 or hardwired charger installed." },
      { label: "Test the Charge Session", body: "We initiate a charge and confirm everything is working correctly before we leave." },
    ],
  },
  {
    id: "accordion-3",
    title: "Electrical Troubleshooting",
    image: "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Electrical-troubleshooting.png",
    description:
      "Dead outlets, breakers that won't reset, flickering lights, or a burning smell near a panel — we diagnose the root cause and fix it right the first time. Free over-the-phone help available before you book.",
    learnHref: "/craft-catalog/electrical-troubleshooting",
    steps: [
      { label: "Diagnose the Root Cause", body: "We identify the actual problem — not just the symptom — before recommending any repair." },
      { label: "Explain in Plain Language", body: "We show you what we found and walk you through the fix before picking up a tool." },
      { label: "Quote Before Starting", body: "Written price confirmed. What we quote is what you pay — no additions after the fact." },
      { label: "Fix & Test", body: "Repair completed and tested to confirm the issue is fully resolved." },
    ],
  },
];
