"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

// TODO: Replace all posts with real content before launch.
const posts = [
  {
    slug: "do-i-need-200-amp-panel-upgrade",
    title: "Do I Need a 200-Amp Panel Upgrade? A Manhattan Homeowner's Guide",
    excerpt:
      "Older Manhattan apartments and co-ops often run on 60- or 100-amp panels installed decades ago. If you're adding an EV charger, central AC, or a major appliance and your breakers keep tripping, here's how to know if an upgrade is the right call.",
    date: "May 2026",
  },
  {
    slug: "knob-tube-wiring-manhattan",
    title: "Knob-and-Tube Wiring in Manhattan: What Pre-War Building Owners Need to Know",
    excerpt:
      "Manhattan's pre-war housing stock — brownstones, walk-ups, and co-ops built before 1940 — frequently still has active knob-and-tube wiring. We explain the risks, insurance implications, and what a full replacement actually involves.",
    date: "April 2026",
  },
  {
    slug: "ev-charger-installation-nyc",
    title: "Installing an EV Charger in a Manhattan Apartment Building: What's Involved",
    excerpt:
      "Level 2 EV charger installation in a Manhattan building is more involved than in a suburban garage. We walk through the panel assessment, dedicated circuit requirements, building approval, and what the job looks like from start to finish.",
    date: "March 2026",
  },
  {
    slug: "electrical-troubleshooting-dead-outlets",
    title: "Dead Outlet in Your Manhattan Apartment? Here's What's Actually Wrong",
    excerpt:
      "A dead outlet is rarely the outlet itself. It's usually a tripped GFCI on a different circuit, a loose connection, or a failing breaker. We walk through the most common causes and when you need a licensed electrician to take a look.",
    date: "February 2026",
  },
  {
    slug: "whole-house-surge-protection-nyc",
    title: "Why Whole-House Surge Protection Matters in Manhattan",
    excerpt:
      "Manhattan's aging grid infrastructure means voltage fluctuations are more common than most residents realize. One power surge can destroy thousands of dollars of electronics and appliances. Here's what panel-mounted surge protection actually does and why it's worth installing.",
    date: "January 2026",
  },
  {
    slug: "generator-installation-manhattan",
    title: "Generator Installation in Manhattan: Standby vs. Portable and What NYC Code Requires",
    excerpt:
      "A generator without a properly sized transfer switch is a danger to utility workers and your own wiring. We cover the difference between standby and portable generators, NYC electrical code requirements, and what the installation process looks like.",
    date: "December 2025",
  },
];

export default function BlogPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      <CraftHero
        title="Electrical Tips & Insights"
        bgImage="https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Why-Choose-Us-Photo.jpg"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <div ref={ref} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2 className={`h3 fadeInUpS wow${vis}`} style={{ marginBottom: "0.5rem" }}>
            Electrical Guides for Manhattan Homeowners &amp; Property Managers
          </h2>
          <p className={`p2 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s", marginBottom: "3rem" }}>
            Practical information from H&amp;A NYC Electrician — licensed Manhattan
            electricians with experience in pre-war buildings, residential apartments,
            and commercial spaces throughout the island.
          </p>

          <div
            className={`fadeInUpS wow${vis}`}
            style={{
              animationDelay: "0.15s",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2.5rem",
            }}
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                style={{
                  borderBottom: "2px solid #e5e7eb",
                  paddingBottom: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <span className="p3" style={{ color: "#888", fontSize: "1.3rem" }}>{post.date}</span>
                <h3 className="h5" style={{ fontSize: "1.8rem", lineHeight: 1.35, marginBottom: 0 }}>
                  {/* TODO: Add real blog post links */}
                  {post.title}
                </h3>
                <p className="p3" style={{ lineHeight: 1.7, fontSize: "1.4rem", color: "#555" }}>
                  {post.excerpt}
                </p>
                <span style={{ fontSize: "1.3rem", color: "#61CE70", fontWeight: 600 }}>
                  [TODO: Link to full article]
                </span>
              </article>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </main>
  );
}
