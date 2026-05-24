import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import FleetSection from "@/components/custom/fleet/FleetSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About H&A NYC Electrician | Licensed Manhattan Electricians",
  description:
    "Learn about H&A NYC Electrician — licensed, insured electrical contractors serving all of Manhattan 24/7 with upfront pricing and no hidden fees.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Us"
        subtitle="Licensed, insured electrical contractors serving all of Manhattan — from panel upgrades and home rewires to EV charger installation and 24/7 emergency service."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <FleetSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
