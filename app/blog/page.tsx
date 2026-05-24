import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Blog | H&A NYC Electrician — Electrical Tips for Manhattan",
  description:
    "Electrical guides, tips, and news from H&A NYC Electrician — licensed Manhattan electricians helping homeowners, tenants, and property managers stay informed.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Electrical Insights"
        subtitle="Tips, guides, and news from H&A NYC Electrician — licensed Manhattan electricians serving homeowners, property managers, and commercial clients."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <CTAFormSection />
    </>
  );
}
