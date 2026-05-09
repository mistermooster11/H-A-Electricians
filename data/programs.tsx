import type { ReactNode } from "react";

export type NavItem = { href: string; label: string };

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  href: string;
  imgSrc: string;
  alt: string;
};

export type ProgramsPageData = {
  navItems: NavItem[];
  hero: {
    bgImage: string;
    title: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

export const programsData: ProgramsPageData = {
  navItems: [
    { href: "#flex-module-3", label: "Service Details" },
    { href: "#flex-module-4", label: "Service Areas"   },
  ],

  hero: {
    bgImage: "/images/IMG_9750-1024x683.jpg",
    title: "Our Services",
    description: (
      <p>
        H&A NYC Electrician handles every type of residential and commercial
        electrical job in Manhattan — from panel upgrades and home rewires to
        EV charger installations, generator installs, and everything in between.
      </p>
    ),
    breadcrumbParentLabel: "Services",
    breadcrumbParentHref: "/craft-catalog/",
  },

  overview: {
    content: (
      <>
        <p>
          Every job starts the same way: we arrive, assess the problem or scope in
          front of you, explain exactly what needs to happen, and give you the price
          before a single tool is lifted. No mystery charges. No pressure. Just a
          straight answer and a plan.
        </p>
        <p>
          Licensed by the State of New York, fully insured, available Mon–Sun 24
          hours. Call <a href="tel:6463510882">(646) 351-0882</a> to get started.
        </p>
      </>
    ),
    quickLinks: [
      { label: "View All Services", href: "/craft-catalog/", icon: "icon-books" },
    ],
  },

  programs: [
    {
      title: "200 Amp Panel Upgrades",
      content: (
        <p>
          Older Manhattan homes run on panels that cannot support modern appliances,
          EV chargers, or new circuits. We upgrade to 200-amp service — pulling all
          necessary permits, completing to NYC electrical code, and passing inspection
          before we call the job done.
        </p>
      ),
      learnMoreHref: "/craft-catalog/panel-upgrades",
    },
    {
      title: "Home Rewires",
      content: (
        <p>
          Knob-and-tube, aluminum, and cloth-insulated wiring are hazards that
          modern insurers increasingly refuse to cover. We replace legacy wiring
          with modern copper throughout your home — fully permitted and inspected.
        </p>
      ),
      learnMoreHref: "/craft-catalog/home-rewires",
    },
    {
      title: "EV Charger Installation",
      content: (
        <p>
          A Level 2 charger requires a dedicated 240V circuit. We assess your
          panel capacity first, handle any necessary upgrade, then run the circuit
          and install the outlet or hardwired charger at your parking location.
          Same-day installation available in many cases.
        </p>
      ),
      learnMoreHref: "/craft-catalog/ev-charger-installation",
    },
    {
      title: "Generator Installation",
      content: (
        <p>
          Power outages in Manhattan can last hours or days. We install standby
          and portable generator systems with properly sized transfer switches —
          so your essential circuits stay live automatically or with a single
          manual connection, safely and to code.
        </p>
      ),
      learnMoreHref: "/craft-catalog/generator-installation",
    },
    {
      title: "Electrical Troubleshooting",
      content: (
        <p>
          Dead outlets, breakers that will not reset, flickering lights, or a
          burning smell near a panel — we diagnose the root cause before
          recommending any repair. No guesswork, no upselling. Free over-the-phone
          help available at (646) 351-0882.
        </p>
      ),
      learnMoreHref: "/craft-catalog/electrical-troubleshooting",
    },
    {
      title: "Home Safety Inspections",
      content: (
        <p>
          Our licensed technicians inspect your panel, wiring type, outlets,
          grounding, and visible electrical infrastructure — and give you a
          plain-language report on what needs attention. Free inspections,
          no pressure, no upselling. Available throughout Manhattan, Mon–Sun.
        </p>
      ),
      learnMoreHref: "/craft-catalog/home-safety-inspections",
    },
    {
      title: "Whole House Power Surge Protection",
      content: (
        <p>
          A panel-mounted surge protector intercepts voltage spikes before they
          reach your appliances and electronics. Manhattan aging grid
          infrastructure makes voltage fluctuations a real risk — installation
          typically takes under an hour.
        </p>
      ),
      learnMoreHref: "/craft-catalog/surge-protection",
    },
    {
      title: "Residential & Commercial Electrical",
      content: (
        <p>
          We handle the full range of residential and commercial electrical work
          throughout Manhattan — lighting, ceiling fans, circuits, GFI outlets,
          smoke detectors, grounding upgrades, remodel wiring, and property
          management electrical service. If it is electrical, we do it.
        </p>
      ),
      learnMoreHref: "/craft-catalog/residential-electrician",
    },
  ],

  partners: [],
};

export default programsData;
