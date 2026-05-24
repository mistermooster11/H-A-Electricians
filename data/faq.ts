export type FaqItem = {
  q: string;
  a: string;
};

export const faqs: FaqItem[] = [
  {
    q: "Are you licensed to work in New York City?",
    a: "Yes. H&A NYC Electrician holds all required NYC Department of Buildings licenses and maintains full general liability and workers' compensation insurance. We pull permits on every job that legally requires one.",
  },
  {
    q: "Do you charge extra for nights, weekends, or emergencies?",
    a: "We operate 24 hours a day, 7 days a week. Emergency and after-hours calls are handled at straightforward rates — no hidden surcharges. You\'ll receive a clear quote before we begin any work.",
  },
  {
    q: "What is a panel upgrade and do I need one?",
    a: "A panel upgrade replaces your existing electrical service panel with a higher-capacity one — typically upgrading from 100A to 200A or 400A. You may need one if you\'re adding an EV charger, renovating, frequently tripping breakers, or your panel is older than 25 years.",
  },
  {
    q: "Can you install a Level 2 EV charger in a Manhattan apartment building?",
    a: "Yes. We handle EV charger installation for both residential units and building parking garages throughout Manhattan. We coordinate with building management, handle all permitting, and ensure ConEd compliance.",
  },
  {
    q: "What NYC neighborhoods do you serve?",
    a: "We serve all of Manhattan — from Inwood and Washington Heights in the north to the Financial District and Battery Park City in the south, including Midtown, Upper East Side, Upper West Side, Chelsea, Tribeca, and every neighborhood in between.",
  },
  {
    q: "How long does a typical panel upgrade take?",
    a: "Most residential panel upgrades are completed in one day. Larger commercial or multi-unit projects may require two days. We always confirm timing during your initial consultation and work to minimize disruption to your home or business.",
  },
  {
    q: "Do you provide written estimates before starting work?",
    a: "Always. We provide a detailed written estimate before any work begins. If unexpected issues arise once a job is open, we stop and inform you before proceeding — no surprise charges.",
  },
  {
    q: "What should I do in a residential electrical emergency?",
    a: "If you smell burning, see sparks, or have a complete power loss, call us immediately at (646) 351-0882. We answer 24/7. While waiting, avoid using any affected outlets or switches and locate your main breaker in case you need to shut off power.",
  },
];
