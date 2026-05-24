import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "EV Charger Installation Manhattan | H&A NYC Electrician",
  description:
    "Level 2 EV charger installation for Manhattan apartments, garages, and buildings. Permit handling, ConEd coordination, and board approval support included.",
};

export default function EvChargerPage() {
  return (
    <>
      <PageHeroSection
        title="EV Charger Installation"
        subtitle="Level 2 home and building EV charger installation across Manhattan. We handle permitting, ConEd coordination, and building management communication."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "EV Charger Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="EV Charger Installation"
        sidebarImage="/images/electric-vehicle-charging-home-driveway.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="EV Charger Installation in Manhattan"
        intro={[
          "Installing an EV charger in Manhattan involves more than running a circuit — it requires navigating building management, co-op boards, ConEd requirements, and NYC permit processes. H&A NYC Electrician handles all of it.",
          "We install Level 2 (240V) EV chargers for individual apartment units, building garages, and commercial parking facilities. Our team is experienced with all major charger brands and NYC's specific installation requirements.",
        ]}
        whatWeDo={[
          "Level 2 (240V, 40A–80A) EV charger installation",
          "NYC DOB permit filing and ConEd service upgrade coordination",
          "Dedicated circuit installation from panel to parking spot",
          "Smart charger setup including app connectivity and scheduling",
          "Multi-unit building and garage EV charging station installation",
          "NEMA 14-50 outlet installation for portable EVSE",
          "Load management systems for buildings with multiple chargers",
        ]}
        whyChooseUs={[
          "Full permit handling — DOB, ConEd, and building board documentation",
          "Experience with NYC co-op and condo board approval processes",
          "Compatible with all major EV charger brands",
          "Upfront written estimates with no hidden installation fees",
          "Fast scheduling — most installations completed within 2-3 business days",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
