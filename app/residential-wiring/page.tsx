import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Residential Wiring Manhattan | H&A NYC Electrician",
  description:
    "Full home rewiring and new circuit installation for Manhattan apartments and homes. Knob-and-tube removal, dedicated circuits, renovation wiring. Licensed & insured.",
};

export default function ResidentialWiringPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Wiring"
        subtitle="From full home rewires to single circuit additions — licensed residential electrical wiring services for Manhattan apartments and homes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Residential Wiring" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Wiring"
        sidebarImage="/images/electrician-installing-wiring-outlet.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Residential Electrical Wiring in Manhattan"
        intro={[
          "Manhattan's housing stock ranges from 1920s pre-war buildings to modern luxury condos — and each has unique wiring challenges. H&A NYC Electrician handles residential wiring for apartments, co-ops, condos, and townhomes across all Manhattan neighborhoods.",
          "Whether you're dealing with outdated knob-and-tube wiring, need circuits added for a renovation, or require a full home rewire after a failed inspection, our licensed team handles it all with proper permitting.",
        ]}
        whatWeDo={[
          "Knob-and-tube and aluminum wiring removal and replacement",
          "Full home rewires for pre-war and older buildings",
          "New circuit installation for kitchens, bathrooms, and home offices",
          "Dedicated circuits for appliances, HVAC, and EV chargers",
          "GFCI and AFCI outlet installation",
          "Smoke and CO detector wiring",
          "Renovation and new construction electrical rough-ins",
        ]}
        whyChooseUs={[
          "Experience with Manhattan's pre-war and landmarked building requirements",
          "All permits pulled — work documented for co-op board and city inspections",
          "Upfront written estimates — no hidden charges",
          "Available 24/7, no extra charge for nights or weekends",
          "Clean, professional work with full site cleanup after every job",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
