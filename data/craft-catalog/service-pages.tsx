import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  bgColor: string;
  navItems: ServiceNavItem[];
  overviewContent: ReactNode;
  overviewQuickLinks: { label: string; href: string }[];
  sections: { id: string; heading: string; content: ReactNode }[];
  relatedServices: { label: string; href: string }[];
};

const PHONE_DISPLAY = "(646) 351-0882";
const PHONE_HREF    = "tel:6463510882";

const defaultNav: ServiceNavItem[] = [
  { href: "#overview",         label: "Overview"         },
  { href: "#when_you_need_it", label: "When You Need It" },
  { href: "#our_process",      label: "Our Process"      },
  { href: "#related_services", label: "Related Services" },
];

const defaultLinks = [
  { label: `Call ${PHONE_DISPLAY}`, href: PHONE_HREF   },
  { label: "Contact Us Online",     href: "/contact-us" },
];

export const servicePages: Record<string, ServicePageData> = {

  /* ─── RESIDENTIAL ELECTRICIAN ──────────────────────────────────────────── */
  "residential-electrician": {
    title: "Residential Electrician",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          H&amp;A NYC Electrician provides licensed residential electrical service
          throughout Manhattan — from minor outlet repairs and switch replacements
          to full panel upgrades, home rewires, and new circuit installations.
        </p>
        <p>
          Every technician is State of New York licensed, insured, and drug-tested.
          We work in apartments, co-ops, condos, townhouses, and multi-family homes
          across all Manhattan neighborhoods.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need a Residential Electrician?",
        content: (
          <>
            <p>
              If you&rsquo;re experiencing flickering lights, frequently tripping
              breakers, dead outlets, or are adding new appliances or circuits to
              your home, it&rsquo;s time to call a licensed electrician. Attempting
              DIY electrical work in New York City carries significant safety and
              code compliance risks.
            </p>
            <p>
              H&amp;A NYC Electrician handles all residential electrical needs —
              routine and complex — with upfront pricing and no hidden fees.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Free Estimate.</strong> We assess the job and give you a clear, written price before any work begins.</p>
            <p><strong>Step 2 — You Approve.</strong> No work starts until you&rsquo;re ready. What we quote is what you pay.</p>
            <p><strong>Step 3 — Complete the Work.</strong> Our licensed tech handles the job efficiently, cleanly, and to NYC electrical code.</p>
            <p><strong>Step 4 — Test &amp; Clean Up.</strong> We verify everything is working correctly and clean up before leaving.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "200 Amp Panel Upgrades",     href: "/craft-catalog/panel-upgrades"            },
      { label: "Home Rewires",               href: "/craft-catalog/home-rewires"              },
      { label: "Electrical Troubleshooting", href: "/craft-catalog/electrical-troubleshooting"},
      { label: "Home Safety Inspections",    href: "/craft-catalog/home-safety-inspections"  },
    ],
  },

  /* ─── COMMERCIAL ELECTRICIAN ────────────────────────────────────────────── */
  "commercial-electrician": {
    title: "Commercial Electrician",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          H&amp;A NYC Electrician is fully equipped to handle commercial electrical
          projects throughout Manhattan — from retail fit-outs and restaurant wiring
          to office electrical upgrades and property management support.
        </p>
        <p>
          We accommodate commercial clients, building managers, and property owners
          with flexible scheduling, upfront pricing, and licensed, insured technicians
          familiar with NYC commercial electrical code requirements.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Commercial Electrical Services We Handle",
        content: (
          <>
            <p>
              Our commercial electrical scope includes new circuit installations,
              panel upgrades, lighting retrofits, emergency lighting, outlet and
              switch work, remodels and renovations, and ongoing property management
              electrical support.
            </p>
            <p>
              We work in occupied spaces and coordinate with building managers
              and tenants to minimize disruption throughout the job.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Site Assessment.</strong> We walk the space, identify the scope, and confirm code requirements.</p>
            <p><strong>Step 2 — Free Written Quote.</strong> Clear price before we begin — no surprise invoices after the fact.</p>
            <p><strong>Step 3 — Schedule &amp; Execute.</strong> We work around your business hours and complete the job efficiently.</p>
            <p><strong>Step 4 — Final Inspection.</strong> We test all work and confirm it meets NYC electrical code before sign-off.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Property Management Electrical Service", href: "/craft-catalog/property-management"   },
      { label: "200 Amp Panel Upgrades",                href: "/craft-catalog/panel-upgrades"        },
      { label: "Remodel and Renovation",                href: "/craft-catalog/remodel-renovation"    },
      { label: "Lighting Installation Service",         href: "/craft-catalog/lighting-installation" },
    ],
  },

  /* ─── 200 AMP PANEL UPGRADES ────────────────────────────────────────────── */
  "panel-upgrades": {
    title: "200 Amp Panel Upgrades",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Older Manhattan homes and apartments often run on 60-amp or 100-amp
          panels that can&rsquo;t safely support modern appliances, air conditioners,
          EV chargers, or additional circuits. H&amp;A NYC Electrician upgrades
          panels to 200-amp service — permitted, inspected, and done right.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Do You Need a Panel Upgrade?",
        content: (
          <>
            <p>
              Signs you need a panel upgrade include: breakers that trip frequently,
              flickering lights when large appliances run, inability to add new circuits,
              or an older fuse box that hasn&rsquo;t been updated in decades. If you&rsquo;re
              adding an EV charger, central AC, or a major kitchen appliance, a panel
              upgrade is almost always a prerequisite.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We evaluate your current panel capacity, load, and upgrade requirements.</p>
            <p><strong>Step 2 — Free Quote.</strong> Full written estimate covering labor, materials, and permit fees before we start.</p>
            <p><strong>Step 3 — Pull Permits.</strong> We handle all NYC permit requirements so the work is fully code-compliant.</p>
            <p><strong>Step 4 — Install &amp; Inspect.</strong> New 200-amp panel installed, inspected, and signed off before we leave.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Home Rewires",                     href: "/craft-catalog/home-rewires"            },
      { label: "EV Charger Installation",          href: "/craft-catalog/ev-charger-installation" },
      { label: "Grounding Electrical Service",     href: "/craft-catalog/grounding-service"       },
      { label: "Electrical Circuit Installations", href: "/craft-catalog/circuit-installations"   },
    ],
  },

  /* ─── HOME REWIRES ──────────────────────────────────────────────────────── */
  "home-rewires": {
    title: "Home Rewires",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Outdated wiring is one of the leading causes of residential electrical
          fires. Aluminum wiring, knob-and-tube systems, and cloth-insulated wire
          are fire hazards that modern insurers are increasingly unwilling to cover.
        </p>
        <p>
          H&amp;A NYC Electrician performs whole-home rewires throughout Manhattan —
          replacing hazardous legacy wiring with modern copper, fully permitted and
          inspected.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Is a Full Rewire Necessary?",
        content: (
          <>
            <p>
              A rewire is typically required when your home has knob-and-tube,
              aluminum, or cloth-insulated wiring; when you&rsquo;re doing a major
              renovation that exposes the walls; or when an insurance company flags
              the wiring as unacceptable for coverage. Pre-war Manhattan buildings
              frequently have wiring from the 1920s&ndash;1940s that has never been updated.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Full Assessment.</strong> We inspect the existing wiring, identify what needs to be replaced, and map the full scope.</p>
            <p><strong>Step 2 — Written Quote.</strong> Detailed estimate covering all labor and materials before work begins.</p>
            <p><strong>Step 3 — Permit &amp; Replace.</strong> Required permits pulled; all hazardous wiring replaced with modern copper throughout.</p>
            <p><strong>Step 4 — Final Inspection.</strong> Work inspected and signed off to NYC electrical code before the job closes.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Aluminum Wire Replacement",        href: "/craft-catalog/aluminum-wire-replacement" },
      { label: "Knob and Tube Replacement",        href: "/craft-catalog/knob-and-tube-replacement" },
      { label: "Cloth Insulated Wire Replacement", href: "/craft-catalog/cloth-wire-replacement"    },
      { label: "200 Amp Panel Upgrades",           href: "/craft-catalog/panel-upgrades"            },
    ],
  },

  /* ─── ALUMINUM WIRE REPLACEMENT ─────────────────────────────────────────── */
  "aluminum-wire-replacement": {
    title: "Aluminum Wire Replacement",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Aluminum wiring was commonly installed in Manhattan buildings during the
          1960s and 1970s. Over time it expands and contracts differently than copper,
          causing loose connections, overheating, and elevated fire risk.
        </p>
        <p>
          H&amp;A NYC Electrician replaces aluminum wiring with modern copper throughout
          Manhattan residences — eliminating the hazard and bringing your home up to
          current safety standards.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "How Do You Know You Have Aluminum Wiring?",
        content: (
          <>
            <p>
              Aluminum wiring is most common in homes built between 1965 and 1973.
              Signs include warm outlet covers, flickering lights, and circuit breakers
              that trip without obvious cause. A licensed electrician can confirm your
              wiring type during a free home safety inspection.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Inspection.</strong> We identify the scope of aluminum wiring and confirm the replacement approach.</p>
            <p><strong>Step 2 — Free Quote.</strong> Full written price before any work begins.</p>
            <p><strong>Step 3 — Replace.</strong> Aluminum wiring replaced with copper — connections, outlets, and switches included.</p>
            <p><strong>Step 4 — Test &amp; Inspect.</strong> All circuits tested and work signed off to code.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Home Rewires",                      href: "/craft-catalog/home-rewires"              },
      { label: "Knob and Tube Wiring Replacement",  href: "/craft-catalog/knob-and-tube-replacement" },
      { label: "Home Safety Inspections",           href: "/craft-catalog/home-safety-inspections"  },
      { label: "200 Amp Panel Upgrades",            href: "/craft-catalog/panel-upgrades"            },
    ],
  },

  /* ─── KNOB AND TUBE REPLACEMENT ─────────────────────────────────────────── */
  "knob-and-tube-replacement": {
    title: "Knob and Tube Wiring Replacement",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Knob-and-tube wiring was standard in American homes from the 1880s through
          the 1930s — which means much of Manhattan&rsquo;s pre-war housing stock
          still has it. This wiring lacks a ground wire, deteriorates with age, and
          poses a recognized fire risk.
        </p>
        <p>
          H&amp;A NYC Electrician replaces knob-and-tube systems with modern grounded
          copper wiring throughout Manhattan.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Why Replace Knob-and-Tube Wiring?",
        content: (
          <>
            <p>
              Most homeowner&rsquo;s insurance policies in New York either exclude
              or significantly raise premiums for properties with active knob-and-tube
              wiring. Beyond insurance, it&rsquo;s an inherent safety hazard — especially
              in older Manhattan apartments where wiring may have been partially modified
              over the decades without being fully upgraded.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Full Assessment.</strong> We trace the extent of the knob-and-tube system and confirm what&rsquo;s active vs. abandoned.</p>
            <p><strong>Step 2 — Quote Upfront.</strong> Written estimate before any demolition or wiring begins.</p>
            <p><strong>Step 3 — Replace.</strong> All active knob-and-tube replaced with modern copper wiring, grounded properly.</p>
            <p><strong>Step 4 — Inspect &amp; Sign Off.</strong> Final inspection confirms full code compliance.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Home Rewires",              href: "/craft-catalog/home-rewires"              },
      { label: "Aluminum Wire Replacement", href: "/craft-catalog/aluminum-wire-replacement" },
      { label: "Home Safety Inspections",   href: "/craft-catalog/home-safety-inspections"  },
      { label: "Grounding Electrical Service",href: "/craft-catalog/grounding-service"      },
    ],
  },

  /* ─── CLOTH WIRE REPLACEMENT ────────────────────────────────────────────── */
  "cloth-wire-replacement": {
    title: "Cloth Insulated Wire Replacement",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Cloth-insulated wiring was common in homes built through the 1950s. Over
          decades, the cloth insulation becomes brittle and crumbles, exposing bare
          wire that creates a serious fire and shock hazard.
        </p>
        <p>
          H&amp;A NYC Electrician replaces cloth-insulated wire with modern plastic-jacketed
          copper wiring throughout Manhattan residences.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs of Deteriorated Cloth Wiring",
        content: (
          <>
            <p>
              Crumbling insulation, burning smell near outlets, discolored switch
              plates, or a licensed inspector flagging cloth wiring during a home
              inspection are all reasons to act. Insurance companies commonly require
              replacement as a condition of coverage in older Manhattan buildings.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Inspection.</strong> We assess the extent of cloth wiring and identify the safest replacement path.</p>
            <p><strong>Step 2 — Written Quote.</strong> Full price — no surprises — before any work begins.</p>
            <p><strong>Step 3 — Replace.</strong> Cloth-insulated wire replaced with modern copper; connections and terminations included.</p>
            <p><strong>Step 4 — Test.</strong> All circuits verified and work signed off to current NYC electrical code.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Home Rewires",                     href: "/craft-catalog/home-rewires"              },
      { label: "Knob and Tube Replacement",        href: "/craft-catalog/knob-and-tube-replacement" },
      { label: "Aluminum Wire Replacement",        href: "/craft-catalog/aluminum-wire-replacement" },
      { label: "Home Safety Inspections",          href: "/craft-catalog/home-safety-inspections"  },
    ],
  },

  /* ─── EV CHARGER INSTALLATION ───────────────────────────────────────────── */
  "ev-charger-installation": {
    title: "Electric Vehicle (EV) Charger Installation",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          A Level 2 EV charger requires a dedicated 240V circuit. H&amp;A NYC
          Electrician installs EV chargers throughout Manhattan — in garages, parking
          spaces, and multi-unit buildings — safely and to NYC electrical code. Free
          estimates on all installations.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Level 1 vs. Level 2 — Which Do You Need?",
        content: (
          <>
            <p>
              Level 1 (120V) adds roughly 3–5 miles of range per hour — adequate only
              for plug-in hybrids. Level 2 (240V dedicated circuit) adds 15–30 miles
              per hour, which is practical for daily EV use. For most Manhattan residents
              with an EV, Level 2 is the right choice. We assess your panel capacity
              first and handle any necessary upgrade.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Panel Assessment.</strong> We check your panel capacity and identify if an upgrade is needed.</p>
            <p><strong>Step 2 — Free Quote.</strong> Full written estimate — circuit run, outlet or hardwired charger, and any panel work — before we start.</p>
            <p><strong>Step 3 — Install.</strong> Dedicated 240V circuit run; NEMA 14-50 outlet or hardwired charger installed to your location.</p>
            <p><strong>Step 4 — Test.</strong> We confirm the charge session is working correctly before we leave.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "200 Amp Panel Upgrades",           href: "/craft-catalog/panel-upgrades"          },
      { label: "Electrical Circuit Installations", href: "/craft-catalog/circuit-installations"   },
      { label: "Generator Installation",           href: "/craft-catalog/generator-installation"  },
      { label: "Residential Electrician",          href: "/craft-catalog/residential-electrician" },
    ],
  },

  /* ─── GENERATOR INSTALLATION ────────────────────────────────────────────── */
  "generator-installation": {
    title: "Generator Installation",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Power outages in Manhattan can last hours or days. A properly installed
          standby or portable generator keeps your essential systems running —
          refrigerator, medical equipment, lighting, and HVAC.
        </p>
        <p>
          H&amp;A NYC Electrician installs generators and the transfer switches
          required to safely connect them to your home&rsquo;s electrical system.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Standby vs. Portable Generators",
        content: (
          <>
            <p>
              Standby generators are permanently installed and activate automatically
              when power goes out — ideal for whole-home or critical-load coverage.
              Portable generators connect manually via a transfer switch. Both require
              a proper electrical hookup to avoid dangerous backfeed. We install both
              types with a correctly sized transfer switch.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We evaluate your load requirements and recommend the right generator size and type.</p>
            <p><strong>Step 2 — Free Quote.</strong> Full estimate including generator, transfer switch, and installation before we begin.</p>
            <p><strong>Step 3 — Install.</strong> Transfer switch and generator connected safely to your electrical panel.</p>
            <p><strong>Step 4 — Test.</strong> We run a full test cycle to confirm automatic or manual transfer is working correctly.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "200 Amp Panel Upgrades",           href: "/craft-catalog/panel-upgrades"          },
      { label: "Whole House Surge Protection",     href: "/craft-catalog/surge-protection"        },
      { label: "Electrical Circuit Installations", href: "/craft-catalog/circuit-installations"   },
      { label: "Residential Electrician",          href: "/craft-catalog/residential-electrician" },
    ],
  },

  /* ─── CIRCUIT INSTALLATIONS ─────────────────────────────────────────────── */
  "circuit-installations": {
    title: "Electrical Circuit Installations",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Adding a dedicated circuit is often required when installing new appliances,
          EV chargers, air conditioners, or home office equipment. H&amp;A NYC
          Electrician installs dedicated and general-purpose circuits throughout
          Manhattan homes, apartments, and commercial spaces.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need a New Circuit?",
        content: (
          <>
            <p>
              Tripped breakers when running multiple appliances, outlets that can&rsquo;t
              supply enough power for new equipment, or adding a major appliance like
              a dryer, dishwasher, or EV charger all typically require a dedicated circuit.
              We assess your panel and run the circuit cleanly to your location.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We confirm your panel has capacity and identify the cleanest route for the new circuit.</p>
            <p><strong>Step 2 — Quote.</strong> Written price before we begin — labor and materials included.</p>
            <p><strong>Step 3 — Install.</strong> Circuit run and terminated at the breaker panel and outlet or junction point.</p>
            <p><strong>Step 4 — Test.</strong> Load tested and confirmed working before we leave.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "200 Amp Panel Upgrades",    href: "/craft-catalog/panel-upgrades"          },
      { label: "EV Charger Installation",   href: "/craft-catalog/ev-charger-installation" },
      { label: "GFI Electrical Outlets",    href: "/craft-catalog/gfi-outlets"             },
      { label: "Residential Electrician",   href: "/craft-catalog/residential-electrician" },
    ],
  },

  /* ─── LIGHTING INSTALLATION ─────────────────────────────────────────────── */
  "lighting-installation": {
    title: "Lighting Installation Service",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          From recessed lighting and track lighting to chandeliers, sconces, and
          under-cabinet fixtures — H&amp;A NYC Electrician installs lighting throughout
          Manhattan homes, apartments, and commercial spaces. We handle all aspects:
          wiring, boxes, dimmer switches, and fixture mounting.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Lighting We Install",
        content: (
          <>
            <p>
              We install recessed (can) lights, pendant lights, chandeliers, track
              lighting, under-cabinet lighting, bathroom vanity fixtures, exterior
              lighting, and landscape lighting. Whether it&rsquo;s a single fixture
              replacement or a whole-home lighting upgrade, we handle it cleanly
              and to code.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Site Visit.</strong> We assess the location, existing wiring, and confirm what the installation requires.</p>
            <p><strong>Step 2 — Free Quote.</strong> Written price before any work begins.</p>
            <p><strong>Step 3 — Install.</strong> Fixture installed, wired, and secured — no exposed wiring, no shortcuts.</p>
            <p><strong>Step 4 — Test.</strong> Fixture and dimmer switches tested before we leave.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Ceiling Fan Installation",     href: "/craft-catalog/ceiling-fan-installation" },
      { label: "Landscaping Lighting Service", href: "/craft-catalog/landscaping-lighting"      },
      { label: "Circuit Installations",        href: "/craft-catalog/circuit-installations"     },
      { label: "Remodel and Renovation",       href: "/craft-catalog/remodel-renovation"        },
    ],
  },

  /* ─── CEILING FAN INSTALLATION ──────────────────────────────────────────── */
  "ceiling-fan-installation": {
    title: "Ceiling Fan Installation",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          In Manhattan apartments and older homes, the existing ceiling box is often
          not rated to support a fan&rsquo;s weight and motion. H&amp;A NYC Electrician
          installs ceiling fans correctly — replacing the box if needed and ensuring
          a safe, stable mount.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Why Hire an Electrician for Fan Installation?",
        content: (
          <>
            <p>
              A ceiling fan that wobbles, makes noise, or falls is almost always the
              result of an improper mount or an undersized ceiling box. Our techs inspect
              the existing box, upgrade to a fan-rated box if needed, and install the fan
              to manufacturer specs — with all wiring connected correctly and safely.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We check the existing ceiling box and wiring before the fan goes up.</p>
            <p><strong>Step 2 — Quote.</strong> Full price including any box upgrade needed.</p>
            <p><strong>Step 3 — Install.</strong> Fan-rated box installed if needed; fan assembled, mounted, and wired.</p>
            <p><strong>Step 4 — Test.</strong> All speeds and the light kit tested before we pack up.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Lighting Installation Service",    href: "/craft-catalog/lighting-installation"   },
      { label: "Electrical Circuit Installations", href: "/craft-catalog/circuit-installations"   },
      { label: "Residential Electrician",          href: "/craft-catalog/residential-electrician" },
      { label: "Service Calls",                    href: "/craft-catalog/service-calls"           },
    ],
  },

  /* ─── LANDSCAPING LIGHTING ──────────────────────────────────────────────── */
  "landscaping-lighting": {
    title: "Landscaping Lighting Service",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Outdoor and landscaping lighting adds curb appeal, security, and usability
          to exterior spaces. H&amp;A NYC Electrician installs pathway lights, accent
          lighting, security lighting, and outdoor fixtures for Manhattan homes,
          townhouses, and commercial properties.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Outdoor Lighting We Install",
        content: (
          <>
            <p>
              We install landscape and path lighting, security floodlights, step and
              riser lights, accent uplights, and exterior wall sconces. All outdoor
              wiring is installed in weatherproof conduit, rated for exterior use —
              built to code and built for New York&rsquo;s climate.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Plan.</strong> We assess the exterior space and confirm what circuits and conduit runs are needed.</p>
            <p><strong>Step 2 — Quote.</strong> Written estimate before any work begins.</p>
            <p><strong>Step 3 — Install.</strong> Weatherproof wiring run; fixtures mounted and connected to your electrical system.</p>
            <p><strong>Step 4 — Test.</strong> All fixtures tested before we wrap up.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Lighting Installation Service",    href: "/craft-catalog/lighting-installation"   },
      { label: "Electrical Circuit Installations", href: "/craft-catalog/circuit-installations"   },
      { label: "Residential Electrician",          href: "/craft-catalog/residential-electrician" },
      { label: "Remodel and Renovation",           href: "/craft-catalog/remodel-renovation"      },
    ],
  },

  /* ─── GFI OUTLETS ──────────────────────────────────────────────────────── */
  "gfi-outlets": {
    title: "GFI Electrical Outlets",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Ground Fault Circuit Interrupter (GFCI/GFI) outlets cut power instantly
          when they detect a ground fault, preventing electrocution. They&rsquo;re
          required by NYC code in all wet areas — bathrooms, kitchens, garages, and
          outdoor locations.
        </p>
        <p>
          H&amp;A NYC Electrician installs, replaces, and tests GFI outlets throughout
          Manhattan. If yours is tripping repeatedly or won&rsquo;t reset, call us for
          a same-day service call.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need GFI Outlets?",
        content: (
          <>
            <p>
              GFI outlets are required in all bathrooms, within 6 feet of kitchen
              sinks, in garages, on outdoor circuits, and near pools or wet bars.
              If your home was built before 1973, you likely have standard outlets
              in wet areas that should be upgraded. A failing or non-resetting GFI
              outlet should be replaced promptly.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We identify all locations requiring GFI protection and test any existing outlets.</p>
            <p><strong>Step 2 — Quote.</strong> Straightforward per-outlet pricing confirmed before we start.</p>
            <p><strong>Step 3 — Install.</strong> GFI outlets installed in all required locations with correct wiring.</p>
            <p><strong>Step 4 — Test.</strong> Every outlet tested — trip and reset confirmed before we leave.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Electrical Troubleshooting",       href: "/craft-catalog/electrical-troubleshooting"},
      { label: "Electrical Circuit Installations", href: "/craft-catalog/circuit-installations"     },
      { label: "Home Safety Inspections",          href: "/craft-catalog/home-safety-inspections"  },
      { label: "Residential Electrician",          href: "/craft-catalog/residential-electrician"  },
    ],
  },

  /* ─── GROUNDING SERVICE ─────────────────────────────────────────────────── */
  "grounding-service": {
    title: "Grounding Electrical Service",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Proper electrical grounding protects people and equipment from shock, surge
          damage, and electrical fire. Many older Manhattan homes have ungrounded
          two-prong outlets and wiring systems that predate modern grounding requirements.
        </p>
        <p>
          H&amp;A NYC Electrician upgrades ungrounded systems and installs proper ground
          conductors throughout residential and commercial properties in Manhattan.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Why Grounding Matters",
        content: (
          <>
            <p>
              An ungrounded electrical system provides no safe path for fault current
              to dissipate — putting people, appliances, and electronics at risk.
              Two-prong outlets are the most visible sign of an ungrounded system.
              Grounding also enables surge protection devices to work correctly; without
              a proper ground, a whole-house surge protector offers little real protection.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We evaluate your current grounding system and identify what needs to be upgraded.</p>
            <p><strong>Step 2 — Quote.</strong> Written estimate before we start — no surprise charges.</p>
            <p><strong>Step 3 — Install.</strong> Ground conductors installed and connected to the grounding electrode system at your panel.</p>
            <p><strong>Step 4 — Verify.</strong> Grounding tested with a meter to confirm proper resistance and connectivity.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "200 Amp Panel Upgrades",       href: "/craft-catalog/panel-upgrades"          },
      { label: "Whole House Surge Protection", href: "/craft-catalog/surge-protection"        },
      { label: "Home Safety Inspections",      href: "/craft-catalog/home-safety-inspections" },
      { label: "Home Rewires",                 href: "/craft-catalog/home-rewires"            },
    ],
  },

  /* ─── SURGE PROTECTION ──────────────────────────────────────────────────── */
  "surge-protection": {
    title: "Whole House Power Surge Protection",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          A whole-house surge protector installs at your electrical panel and
          intercepts voltage spikes before they reach your appliances, electronics,
          and HVAC systems. One lightning strike or utility event can destroy thousands
          of dollars of equipment.
        </p>
        <p>
          H&amp;A NYC Electrician installs whole-house surge protection throughout
          Manhattan. Free estimates — same-day installation available.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Who Needs Surge Protection?",
        content: (
          <>
            <p>
              Anyone with sensitive electronics, a home theater, medical equipment,
              smart home devices, or a modern HVAC system benefits from whole-house
              surge protection. Manhattan&rsquo;s aging grid infrastructure means voltage
              fluctuations are not uncommon — the cost of a surge protector is small
              compared to replacing damaged appliances.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We confirm your panel has the capacity and correct grounding for a whole-house unit.</p>
            <p><strong>Step 2 — Quote.</strong> Written price for the unit and installation before we start.</p>
            <p><strong>Step 3 — Install.</strong> Surge protection device installed at the main panel — typically a 30–60 minute job.</p>
            <p><strong>Step 4 — Test.</strong> Device verified active before we leave.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Generator Installation",      href: "/craft-catalog/generator-installation"  },
      { label: "200 Amp Panel Upgrades",      href: "/craft-catalog/panel-upgrades"          },
      { label: "Grounding Electrical Service",href: "/craft-catalog/grounding-service"       },
      { label: "Home Safety Inspections",     href: "/craft-catalog/home-safety-inspections" },
    ],
  },

  /* ─── HOME SAFETY INSPECTIONS ───────────────────────────────────────────── */
  "home-safety-inspections": {
    title: "Home Safety Inspections",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          H&amp;A NYC Electrician offers free home electrical safety inspections
          throughout Manhattan. Our licensed technicians assess your panel, wiring
          type, outlets, grounding, and visible electrical infrastructure — and give
          you an honest, plain-language report. No pressure, no upselling.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Should You Get an Inspection?",
        content: (
          <>
            <p>
              Schedule a home electrical inspection when purchasing a home, after a
              major storm, if you&rsquo;re experiencing unexplained electrical issues
              (tripping breakers, flickering lights, burning smells), or if your
              building is more than 25 years old and hasn&rsquo;t had a professional
              electrical review.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "What We Inspect",
        content: (
          <>
            <p><strong>Panel &amp; Breakers.</strong> Condition, capacity, and whether the panel is appropriate for current load.</p>
            <p><strong>Wiring Type.</strong> We identify knob-and-tube, aluminum, cloth-insulated, or other legacy wiring that poses risk.</p>
            <p><strong>Outlets &amp; Switches.</strong> We test for proper grounding, GFI protection, and any damaged devices.</p>
            <p><strong>Visible Infrastructure.</strong> Exposed wiring, improper connections, or code violations in accessible areas.</p>
            <p><strong>Report.</strong> Plain-language summary of findings — no jargon, just facts.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Home Rewires",              href: "/craft-catalog/home-rewires"              },
      { label: "200 Amp Panel Upgrades",    href: "/craft-catalog/panel-upgrades"            },
      { label: "Aluminum Wire Replacement", href: "/craft-catalog/aluminum-wire-replacement" },
      { label: "Knob and Tube Replacement", href: "/craft-catalog/knob-and-tube-replacement" },
    ],
  },

  /* ─── ELECTRICAL TROUBLESHOOTING ────────────────────────────────────────── */
  "electrical-troubleshooting": {
    title: "Electrical Troubleshooting",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Flickering lights, dead outlets, a circuit that keeps tripping, or a
          burning smell near a switch — these are signs of an underlying electrical
          issue that needs a licensed technician to diagnose properly.
        </p>
        <p>
          H&amp;A NYC Electrician troubleshoots residential and commercial electrical
          problems throughout Manhattan with precision, upfront pricing, and no-guesswork
          diagnosis before any repair begins.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Common Issues We Diagnose",
        content: (
          <>
            <p>
              Dead outlets, circuit breakers that won&rsquo;t reset, flickering or
              dimming lights, burning smell from an outlet or panel, outlets or
              switches that feel warm to the touch, and appliances that repeatedly
              trip the same breaker are all issues we diagnose and repair.
            </p>
            <p>
              We also offer free over-the-phone help to assess whether your issue
              requires a site visit or can be resolved remotely — just call{" "}
              <a href="tel:6463510882">(646) 351-0882</a>.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Diagnose.</strong> We identify the root cause — not just the symptom — before recommending any repair.</p>
            <p><strong>Step 2 — Explain.</strong> We show you what we found in plain language.</p>
            <p><strong>Step 3 — Quote.</strong> Written price before any repair work begins.</p>
            <p><strong>Step 4 — Fix &amp; Test.</strong> Repair completed and tested to confirm the issue is fully resolved.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Home Safety Inspections", href: "/craft-catalog/home-safety-inspections" },
      { label: "GFI Electrical Outlets",  href: "/craft-catalog/gfi-outlets"             },
      { label: "Service Calls",           href: "/craft-catalog/service-calls"           },
      { label: "Residential Electrician", href: "/craft-catalog/residential-electrician" },
    ],
  },

  /* ─── SMOKE DETECTOR INSTALLATION ──────────────────────────────────────── */
  "smoke-detector-installation": {
    title: "Smoke Detector Installation",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          NYC law requires working smoke detectors on every level of a home and
          in every sleeping area. H&amp;A NYC Electrician installs hardwired and
          combination smoke/CO detectors throughout Manhattan residences and
          commercial buildings.
        </p>
        <p>
          Hardwired detectors are interconnected — when one sounds, they all sound.
          Free estimates on all installations.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "NYC Smoke Detector Requirements",
        content: (
          <>
            <p>
              New York City requires smoke detectors within 10 feet of every sleeping
              room, on every level of the home, and in every room where people sleep.
              Buildings built after 2008 and renovated spaces require hardwired,
              interconnected detectors with battery backup. Combination smoke and carbon
              monoxide detectors are required in apartments with gas appliances or
              attached garages.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We confirm required locations per NYC code and check existing wiring for hardwired connections.</p>
            <p><strong>Step 2 — Quote.</strong> Written price before we begin.</p>
            <p><strong>Step 3 — Install.</strong> Detectors mounted, wired, and interconnected where required.</p>
            <p><strong>Step 4 — Test.</strong> Every detector tested — alarm confirmed working before we leave.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Home Safety Inspections",          href: "/craft-catalog/home-safety-inspections" },
      { label: "Electrical Circuit Installations", href: "/craft-catalog/circuit-installations"   },
      { label: "Residential Electrician",          href: "/craft-catalog/residential-electrician" },
      { label: "Service Calls",                    href: "/craft-catalog/service-calls"           },
    ],
  },

  /* ─── REMODEL AND RENOVATION ────────────────────────────────────────────── */
  "remodel-renovation": {
    title: "Remodel and Renovation",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Renovations in Manhattan almost always involve electrical work — relocating
          outlets and switches, running new circuits for a kitchen remodel, upgrading
          lighting in a bathroom renovation, or reconfiguring a panel for an addition.
        </p>
        <p>
          H&amp;A NYC Electrician handles all electrical scope within renovation
          projects, coordinating with contractors and building managers to keep
          your project on schedule.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "Renovation Electrical Work We Handle",
        content: (
          <>
            <p>
              Rough-in wiring for new walls and ceilings, outlet and switch relocation,
              lighting installation and dimmer setup, new circuit runs for major appliances,
              panel upgrades required by added load, and final electrical trim-out once
              construction is complete. We pull all required NYC permits and schedule
              inspections as needed.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Scope Review.</strong> We review the renovation plans and confirm all electrical requirements and permit needs.</p>
            <p><strong>Step 2 — Quote.</strong> Written estimate covering rough-in, finish, and any panel work before we begin.</p>
            <p><strong>Step 3 — Rough-In.</strong> All wiring run and boxes set before walls close.</p>
            <p><strong>Step 4 — Trim &amp; Inspect.</strong> Devices, fixtures, and cover plates installed after finishing; inspected and signed off.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Lighting Installation Service",    href: "/craft-catalog/lighting-installation"   },
      { label: "Electrical Circuit Installations", href: "/craft-catalog/circuit-installations"   },
      { label: "200 Amp Panel Upgrades",           href: "/craft-catalog/panel-upgrades"          },
      { label: "Commercial Electrician",           href: "/craft-catalog/commercial-electrician"  },
    ],
  },

  /* ─── PROPERTY MANAGEMENT ───────────────────────────────────────────────── */
  "property-management": {
    title: "Property Management Electrical Service",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          H&amp;A NYC Electrician works with property managers, building owners,
          and co-op boards throughout Manhattan to handle ongoing electrical
          maintenance, emergency repairs, and capital improvement projects.
        </p>
        <p>
          We communicate clearly with tenants, work within building access windows,
          and document every job for building records — exactly what property managers
          need from a reliable electrical partner.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "What We Handle for Property Managers",
        content: (
          <>
            <p>
              Tenant-reported electrical issues, common area lighting, panel maintenance
              and upgrades, building-wide rewires, new circuit installations, smoke and
              CO detector compliance, GFI upgrades, and capital improvement electrical
              scopes. We respond quickly to emergency calls and maintain a consistent
              point of contact for property management accounts.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Work with Property Managers",
        content: (
          <>
            <p><strong>Step 1 — Account Setup.</strong> We establish your building addresses, access protocols, and preferred contact method.</p>
            <p><strong>Step 2 — Fast Response.</strong> Maintenance requests and emergencies handled promptly.</p>
            <p><strong>Step 3 — Document.</strong> Every job completed with written documentation suitable for building records and insurance.</p>
            <p><strong>Step 4 — Consistent Pricing.</strong> Upfront estimates on every job, every time — no surprises.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Commercial Electrician",        href: "/craft-catalog/commercial-electrician"    },
      { label: "Home Safety Inspections",       href: "/craft-catalog/home-safety-inspections"  },
      { label: "Smoke Detector Installation",   href: "/craft-catalog/smoke-detector-installation"},
      { label: "Remodel and Renovation",        href: "/craft-catalog/remodel-renovation"        },
    ],
  },

  /* ─── SERVICE CALLS ─────────────────────────────────────────────────────── */
  "service-calls": {
    title: "Service Calls",
    bgColor: "#101d2b",
    navItems: defaultNav,
    overviewContent: (
      <>
        <p>
          Not every electrical issue requires a full project estimate. H&amp;A NYC
          Electrician handles service calls throughout Manhattan, Mon–Sun, 24 hours
          a day. Free estimates provided on-site. No overtime charges — same rate
          whether you call at 8am or 10pm.
        </p>
      </>
    ),
    overviewQuickLinks: defaultLinks,
    sections: [
      {
        id: "when_you_need_it",
        heading: "What Counts as a Service Call?",
        content: (
          <>
            <p>
              Dead outlets, a tripped breaker that won&rsquo;t reset, a light fixture
              that stops working, a switch that sparks, or any single-issue electrical
              problem. We diagnose, quote, and fix on the spot — no need to schedule
              a separate estimate appointment.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Arrive.</strong> Licensed technician dispatched — we give you an ETA and stick to it.</p>
            <p><strong>Step 2 — Diagnose.</strong> We identify the issue and explain it clearly before any work begins.</p>
            <p><strong>Step 3 — Quote &amp; Approve.</strong> You approve the price. What we quote is what you pay.</p>
            <p><strong>Step 4 — Fix &amp; Test.</strong> Issue resolved and tested before we leave.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Electrical Troubleshooting", href: "/craft-catalog/electrical-troubleshooting"},
      { label: "GFI Electrical Outlets",     href: "/craft-catalog/gfi-outlets"              },
      { label: "Residential Electrician",    href: "/craft-catalog/residential-electrician"  },
      { label: "Home Safety Inspections",    href: "/craft-catalog/home-safety-inspections"  },
    ],
  },

};
