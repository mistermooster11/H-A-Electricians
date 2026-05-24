import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Outlet & Switch Repair Manhattan | H&A NYC Electrician",
  description:
    "Dead outlets, flickering switches, and GFCI issues fixed fast in Manhattan. Licensed electricians available same-day. No-surprise pricing.",
};

export default function OutletRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Outlet & Switch Repair"
        subtitle="Dead outlets, faulty switches, and GFCI failures fixed same-day by licensed Manhattan electricians. Upfront pricing, no surprises."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Outlet & Switch Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Outlet & Switch Repair"
        sidebarImage="/images/electrician-installing-outlet-wall.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Outlet & Switch Repair in Manhattan"
        intro={[
          "A dead outlet or flickering switch is more than an inconvenience — it can signal underlying wiring problems or a fire hazard. H&A NYC Electrician diagnoses and repairs outlet and switch issues throughout Manhattan, typically same-day.",
          "We handle everything from simple outlet replacements to full circuit troubleshooting, GFCI upgrades, and USB outlet installation for modern homes.",
        ]}
        whatWeDo={[
          "Dead outlet diagnosis and replacement",
          "GFCI outlet installation in kitchens, bathrooms, and outdoor areas",
          "USB and USB-C combination outlet installation",
          "Dimmer switch installation and replacement",
          "Three-way and four-way switch wiring",
          "Loose outlet and switch box tightening",
          "Full circuit tracing for recurring outlet failures",
        ]}
        whyChooseUs={[
          "Same-day service available across all Manhattan neighborhoods",
          "Licensed NYC electricians — work done safely and to code",
          "We diagnose the root cause, not just replace the symptom",
          "Upfront written quote before any work begins",
          "Available 24/7 with no after-hours surcharge",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
