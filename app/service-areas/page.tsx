"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

type AreaSection = {
  slug: string;
  region: string;
  headline: string;
  description: string;
  callouts: string[];
  neighborhoods: string[];
};

const areas: AreaSection[] = [
  {
    slug: "upper-manhattan",
    region: "Upper Manhattan",
    headline: "Licensed Electrical Service — Washington Heights, Harlem & Inwood",
    description:
      "H&A NYC Electrician serves all of Upper Manhattan — from Inwood and Fort George in the north to Harlem, East Harlem, and Morningside Heights. We work in pre-war buildings, multi-family homes, and commercial spaces throughout the area.",
    callouts: [
      "24/7 availability — no overtime charges",
      "Panel upgrades common in pre-war walk-ups",
      "Knob-and-tube and cloth wire replacement specialists",
    ],
    neighborhoods: [
      "Inwood", "Fort George", "Washington Heights", "Hudson Heights",
      "Hamilton Heights", "Sugar Hill", "West Harlem", "Harlem",
      "Central Harlem", "East Harlem", "Manhattanville", "Marble Hill",
      "Morningside Heights", "St. Nicholas Historic District",
      "Marcus Garvey Park", "LePetit Senegal", "Mount Morris Historical District",
    ],
  },
  {
    slug: "midtown-manhattan",
    region: "Midtown Manhattan",
    headline: "Licensed Electrical Service — Midtown, Hell's Kitchen & Murray Hill",
    description:
      "From Hell's Kitchen and Chelsea to Midtown, Murray Hill, and Kips Bay — H&A NYC Electrician handles residential and commercial electrical work throughout the heart of Manhattan. We serve apartment buildings, commercial offices, restaurants, and retail spaces.",
    callouts: [
      "Commercial and residential work",
      "Flexible scheduling around business hours",
      "EV charger installations and panel upgrades",
    ],
    neighborhoods: [
      "Hudson Yards", "Hell's Kitchen", "Chelsea", "Flatiron District",
      "NoMad", "Gramercy Park", "Stuyvesant Square", "Union Square",
      "Stuyvesant Town", "Peter Cooper Village", "Kips Bay", "Rose Hill",
      "Murray Hill", "Midtown West", "Midtown East", "Turtle Bay",
      "Tudor City", "Waterside Plaza", "Lincoln Square", "Manhattan Valley",
      "Lenox Hill", "Carnegie Hill", "Yorkville", "Upper East Side",
      "Upper West Side",
    ],
  },
  {
    slug: "lower-manhattan",
    region: "Lower Manhattan",
    headline: "Licensed Electrical Service — SoHo, Tribeca, Financial District & Beyond",
    description:
      "H&A NYC Electrician serves all of Lower Manhattan — from SoHo, Tribeca, and the Financial District to the Lower East Side, Chinatown, and Battery Park City. We handle residential lofts, commercial buildings, and everything in between.",
    callouts: [
      "Loft and converted commercial space experience",
      "Financial District commercial and residential work",
      "Battery Park City and Tribeca specialists",
    ],
    neighborhoods: [
      "SoHo", "Nolita", "Little Italy", "Chinatown", "Lower East Side",
      "East Village", "West Village", "Greenwich Village", "NoHo",
      "Bowery", "Two Bridges", "Tribeca", "Financial District",
      "Civic Center", "South Street Seaport", "Battery Park City",
      "Little Syria", "Cooperative Village", "Alphabet City", "Loisaida",
      "Meatpacking District", "Toy District", "Photo District",
    ],
  },
];

function AreaSection({ area, vis }: { area: AreaSection; vis: string }) {
  return (
    <div
      style={{ paddingBottom: "3rem", marginBottom: "3rem", borderBottom: "1px solid #e5e7eb" }}
    >
      <div className="sub-heading">{area.region}</div>
      <h2 className={`h3 fadeInUpS wow${vis}`} style={{ marginBottom: "1rem" }}>
        {area.headline}
      </h2>
      <p className={`p2 fadeInUpS wow${vis}`} style={{ marginBottom: "1.5rem", maxWidth: "72rem" }}>
        {area.description}
      </p>
      <ul className={`fadeInUpS wow${vis}`} style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
        {area.callouts.map((c) => (
          <li key={c} className="p3" style={{ marginBottom: "0.4rem" }}>{c}</li>
        ))}
      </ul>
      <div className={`fadeInUpS wow${vis}`}>
        <p className="p3 ia-medium" style={{ marginBottom: "0.5rem" }}>
          Neighborhoods served:
        </p>
        <p className="p3" style={{ lineHeight: 1.8 }}>
          {area.neighborhoods.join(" • ")}
        </p>
      </div>
    </div>
  );
}

export default function ServiceAreasPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      <CraftHero
        title="Service Areas"
        bgImage="/images/IMG_9688-1024x682.jpg"
        breadcrumbs={[{ label: "Service Areas" }]}
      />

      <div ref={ref} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2 className={`h3 fadeInUpS wow${vis}`} style={{ marginBottom: "0.5rem" }}>
            We Cover All of Manhattan
          </h2>
          <p className={`p2 fadeInUpS wow${vis}`} style={{ marginBottom: "3rem", maxWidth: "68rem" }}>
            H&amp;A NYC Electrician serves every neighborhood in Manhattan — from Inwood
            in the north to Battery Park City in the south. If you&rsquo;re in Manhattan
            and have an electrical issue, we cover your area. Available Mon&ndash;Sun,
            24 hours, with no overtime charges.
          </p>

          {areas.map((area) => (
            <AreaSection key={area.slug} area={area} vis={vis} />
          ))}

          <div style={{ paddingTop: "2rem", textAlign: "center" }}>
            <SecondaryButton label="Call (646) 351-0882" href="tel:6463510882" />
          </div>

        </div>
      </div>

    </main>
  );
}
