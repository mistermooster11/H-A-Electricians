import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Electrical Services Manhattan | H&A NYC Electrician",
  description:
    "Panel upgrades, residential wiring, outlet repair, EV charger installation, and 24/7 emergency electrical service across Manhattan.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Services"
        subtitle="Licensed electrical services for Manhattan homes, apartments, and commercial properties — panel upgrades, wiring, EV chargers, and 24/7 emergency service."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
