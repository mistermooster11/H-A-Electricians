"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

const galleryItems = [
  {
    label: "200 Amp Panel Upgrade",
    image: "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Panel-Breaker-Replacement.jpg",
  },
  {
    label: "Home Rewire — Pre-War Manhattan Apartment",
    image: "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Residential-Electrical-Rewiring.png",
  },
  {
    label: "EV Charger Installation",
    image: "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Electric-Charging-at-home.png",
  },
  {
    label: "Lighting Installation & Dimmer Setup",
    image: "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Lighting-Installation-Service.png",
  },
];

export default function GalleryPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      <CraftHero
        title="Before & After Gallery"
        bgImage="https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Why-Choose-Us-Photo.jpg"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <div ref={ref} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">
          <h2 className={`h3 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s", marginBottom: "0.5rem" }}>
            Our Work Across Manhattan
          </h2>
          <p className={`p2 fadeInUpS wow${vis}`} style={{ animationDelay: "0.15s", marginBottom: "3rem" }}>
            Panel upgrades, home rewires, EV charger installs, lighting projects — every job
            completed by licensed H&amp;A NYC Electrician technicians with upfront pricing and
            no hidden fees.
          </p>

          <div
            className={`fadeInUpS wow${vis}`}
            style={{
              animationDelay: "0.2s",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
            }}
          >
            {galleryItems.map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div
                  style={{
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    borderRadius: "6px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <p className="p3 ia-medium" style={{ fontSize: "1.4rem" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </main>
  );
}
