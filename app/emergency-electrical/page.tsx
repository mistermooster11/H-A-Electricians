import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Emergency Electrician Manhattan | H&A NYC Electrician — 24/7",
  description:
    "24/7 emergency electrical service in Manhattan. No after-hours surcharge. Burning smells, power outages, tripped breakers, sparking outlets — we respond fast.",
};

export default function EmergencyElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Emergency Electrical Service"
        subtitle="24/7 emergency electricians in Manhattan. We answer every call — nights, weekends, holidays — at no extra charge. Fast response, licensed professionals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Emergency Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Emergency Electrical"
        sidebarImage="/images/electrician-testing-electrical-panel-multimeter.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="24/7 Emergency Electrical Service in Manhattan"
        intro={[
          "Electrical emergencies don't happen on a schedule. Whether it's a burning smell in your walls, a complete power outage, or an outlet that's sparking — H&A NYC Electrician responds 24 hours a day, 7 days a week across all of Manhattan.",
          "We charge no extra fees for after-hours, weekend, or holiday calls. When you reach us, you reach a licensed electrician — not an answering service.",
        ]}
        whatWeDo={[
          "Immediate response to burning smells, sparking outlets, and smoke",
          "Complete power outage diagnosis and restoration",
          "Tripped breaker reset and root cause investigation",
          "Emergency panel repair and breaker replacement",
          "Flooding and water damage electrical safety assessment",
          "Emergency lighting circuit repair",
          "After-hours service for landlords, building managers, and tenants",
        ]}
        whyChooseUs={[
          "True 24/7 availability — we answer every call, any time",
          "No after-hours, weekend, or holiday surcharge",
          "Licensed NYC electricians dispatched on every call",
          "Fast response across all Manhattan neighborhoods",
          "Upfront pricing before any emergency work begins",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
