import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Electrical Panel Upgrade Manhattan | H&A NYC Electrician",
  description:
    "Licensed panel upgrade services for Manhattan homes and buildings. 100A to 200A or 400A upgrades. ConEd coordination, permits, same-day availability.",
};

export default function PanelUpgradePage() {
  return (
    <>
      <PageHeroSection
        title="Electrical Panel Upgrade"
        subtitle="Upgrade your Manhattan home or building to handle today's electrical demands. Licensed, insured, and permitted panel upgrades — completed on time."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Panel Upgrade" },
        ]}
      />
      <ServiceDetailSection
        activeService="Panel Upgrade"
        sidebarImage="/images/electrician-examining-circuit-breaker-panel.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Electrical Panel Upgrade in Manhattan"
        intro={[
          "An outdated or undersized electrical panel is one of the most common — and most dangerous — issues in Manhattan's older buildings and pre-war apartments. H&A NYC Electrician specializes in residential and commercial panel upgrades throughout Manhattan.",
          "Whether you need to upgrade from 100A to 200A service, or you're adding capacity for an EV charger or full kitchen renovation, we handle the entire process: assessment, permit filing, ConEd coordination, and final inspection.",
        ]}
        whatWeDo={[
          "Full electrical load assessment before any work begins",
          "100A to 200A or 400A service upgrades",
          "ConEd meter upgrade coordination",
          "NYC permit filing and inspection scheduling",
          "Breaker panel replacement and labeling",
          "GFCI and AFCI breaker installation where required",
          "Same-day and next-day scheduling available",
        ]}
        whyChooseUs={[
          "Licensed NYC electricians — all permits pulled and documented",
          "We coordinate directly with ConEd so you don't have to",
          "Upfront written estimates before any work begins",
          "Available 24/7 including weekends — no extra charge",
          "10+ years serving Manhattan homeowners and property managers",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
