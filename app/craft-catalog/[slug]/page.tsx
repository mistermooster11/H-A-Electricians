import { notFound } from "next/navigation";
import CraftHero      from "@/components/custom/craft-catalog/CraftHero";
import ChannelSidebar from "@/components/custom/channel/ChannelSidebar";
import CraftOverview  from "@/components/custom/craft-catalog/CraftOverview";
import RelatedCrafts  from "@/components/custom/craft-catalog/RelatedCrafts";
import { servicePages } from "@/data/craft-catalog/service-pages";

// Per-service background images sourced from bestnycelectricianmanhattan.com
const SERVICE_BG: Record<string, string> = {
  "panel-upgrades":            "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Panel-Breaker-Replacement.jpg",
  "home-rewires":              "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Residential-Electrical-Rewiring.png",
  "ev-charger-installation":   "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Electric-Charging-at-home.png",
  "generator-installation":    "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Generator-Installation.png",
  "electrical-troubleshooting":"https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Electrical-troubleshooting.png",
  "home-safety-inspections":   "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Home-Safety-Inspection.jpg",
  "surge-protection":          "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Power-Surge-Protector.png",
  "knob-and-tube-replacement": "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Knob-and-Tubing-Replacement.png",
  "aluminum-wire-replacement": "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Aluminum-Wiring-Replacement.png",
  "lighting-installation":     "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Lighting-Installation-Service.png",
  "residential-electrician":   "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Residential-Electrical-Rewiring.png",
  "commercial-electrician":    "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Commercial-Electrical-Services.jpg",
};
const PLACEHOLDER_BG = "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Why-Choose-Us-Photo.jpg";

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
  return {
    title: `${data.title} — H&A NYC Electrician`,
    description: `Licensed ${data.title.toLowerCase()} service throughout Manhattan. Upfront pricing, free estimates, available Mon–Sun 24 hours.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title={data.title}
        bgImage={SERVICE_BG[slug] ?? PLACEHOLDER_BG}
        breadcrumbs={[
          { label: "Services", href: "/craft-catalog" },
          { label: data.title },
        ]}
      />

      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={data.navItems} />

          <div className="channel-container">

            {/* ── Overview ── */}
            <div id="overview">
              <CraftOverview
                overviewContent={data.overviewContent}
                quickLinks={data.overviewQuickLinks}
              />
            </div>

            {/* ── Middle sections ── */}
            {data.sections.map((section) => (
              <div key={section.id} id={section.id} className="section-page">
                <div className="content-block">
                  <div className="inner inner--slim-1172 cleared">
                    <h2 className="h3 fadeInUpS wow is-visible">
                      {section.heading}
                    </h2>
                    <div className="cleared">
                      <div className="content-entry p2 fadeInUpS wow is-visible">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ── CTA banner ── */}
            <div className="banner-craft ia-bg-sky fadeInUp wow is-visible">
              <div className="inner">
                <div className="content-entry p3">
                  <p>
                    <strong>Ready to book?</strong>{" "}
                    Call{" "}
                    <a href="tel:6463510882">(646) 351-0882</a>{" "}
                    for a free estimate, or{" "}
                    <a href="/contact-us">send us a message online</a>.
                    We give you the price before we start — no surprises.
                    Available Mon&ndash;Sun, 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Related Services ── */}
            <div id="related_services">
              <RelatedCrafts
                description={
                  <p>
                    H&amp;A NYC Electrician handles every type of residential and
                    commercial electrical job throughout Manhattan. Explore our
                    other services below.
                  </p>
                }
                crafts={data.relatedServices}
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
