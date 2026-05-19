"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

const faqItems = [
  {
    q: "Are you licensed and insured to do electrical work in New York City?",
    a: "Yes. H&A NYC Electrician holds a State of New York electrical contractor license and is fully insured. All technicians are licensed, drug-tested, and trained to work safely in residential and commercial buildings throughout Manhattan.",
  },
  {
    q: "Do you charge extra for evenings, weekends, or emergency calls?",
    a: "No. We are available Mon–Sun, 24 hours a day, and we do not charge overtime rates. The price we quote is the same whether you call at 9am on a Tuesday or 10pm on a Saturday.",
  },
  {
    q: "How does your free estimate work?",
    a: "We arrive, assess the job in front of you, and give you a written price before any work begins. No pressure, no hidden fees. What we quote is what you pay — our team will never increase the price after an estimate is given.",
  },
  {
    q: "Do I need a panel upgrade before adding an EV charger or new appliances?",
    a: "Often yes. Level 2 EV chargers, new HVAC units, and high-draw kitchen appliances typically require dedicated 240V circuits. If your panel is rated at 60 or 100 amps, it may not have the capacity. We assess your panel first and let you know exactly what's needed before any work begins.",
  },
  {
    q: "My home has knob-and-tube (or aluminum) wiring — is that dangerous?",
    a: "Both are recognized fire hazards that most insurance companies in New York City will flag or refuse to cover. Knob-and-tube lacks a ground wire and deteriorates over time. Aluminum wiring expands and contracts differently than copper, causing loose connections and overheating. We replace both types with modern copper wiring — fully permitted and inspected.",
  },
  {
    q: "Can you work in occupied apartments and multi-unit buildings?",
    a: "Yes. We work in apartments, co-ops, condos, and multi-family buildings throughout Manhattan every day. We coordinate with tenants and building managers to minimize disruption, use shoe covers and drop cloths in living spaces, and document all work for building records.",
  },
  {
    q: "Do you pull permits for your electrical work?",
    a: "Yes, for all work that requires a permit under NYC electrical code — including panel upgrades, new circuit installations, rewires, and EV charger installs. We handle the permit application and schedule the required inspections. All permitted work is signed off before we close the job.",
  },
  {
    q: "What's the difference between a GFI outlet and a regular outlet?",
    a: "A GFCI (Ground Fault Circuit Interrupter) outlet monitors current flow and cuts power instantly if it detects a ground fault — preventing electrocution. They're required by NYC code in all wet areas including bathrooms, kitchens within 6 feet of a sink, garages, and outdoor circuits. If your home was built before 1973, you may still have standard outlets in these locations that should be upgraded.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -60px 0px" });
  const vis = sectionInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      <CraftHero
        title="Frequently Asked Questions"
        bgImage="https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Why-Choose-Us-Photo.jpg"
        breadcrumbs={[{ label: "FAQs" }]}
      />

      <div ref={sectionRef} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s", marginBottom: "0.5rem" }}
          >
            Common Questions About Our Electrical Services
          </h2>
          <p
            className={`p2 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.15s", marginBottom: "3rem" }}
          >
            Don&rsquo;t see your question here? Call us at{" "}
            <strong>(646) 351-0882</strong> — we offer free over-the-phone help
            and can usually answer your question before you even schedule a visit.
          </p>

          <div
            className={`faq-list fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.2s" }}
          >
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="faq-item"
                style={{
                  borderBottom: "1px solid #e5e7eb",
                  paddingBottom: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span
                    className="p2 ia-medium"
                    style={{ fontSize: "1.7rem", lineHeight: 1.4 }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "2rem",
                      lineHeight: 1,
                      color: "#61CE70",
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    +
                  </span>
                </button>
                {openIndex === i && (
                  <div
                    className="content-entry"
                    style={{ marginTop: "1rem", paddingRight: "3rem" }}
                  >
                    <p style={{ fontSize: "1.5rem", lineHeight: 1.7 }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex-module ia-bg-sky" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="inner inner--slim-1172" style={{ textAlign: "center" }}>
          <div className="sub-heading">Still Have Questions?</div>
          <h2 className="h3" style={{ marginBottom: "1.5rem" }}>
            Call Us — We Offer Free Over-the-Phone Help
          </h2>
          <p className="p2" style={{ marginBottom: "2.5rem", maxWidth: "56rem", margin: "0 auto 2.5rem" }}>
            Licensed NYC electricians available Mon–Sun, 24 hours. Describe the issue and
            we&rsquo;ll tell you what you&rsquo;re dealing with before you book a visit.
          </p>
          <SecondaryButton label="Call (646) 351-0882" href="tel:6463510882" />
        </div>
      </div>

    </main>
  );
}
