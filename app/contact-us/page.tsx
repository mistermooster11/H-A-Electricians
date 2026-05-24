import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact H&A NYC Electrician | Free Electrical Quote",
  description:
    "Contact H&A NYC Electrician for a free electrical quote in Manhattan. Available 24/7, no extra charge for emergencies. Call (646) 351-0882 or fill out our form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Call (646) 351-0882 or fill out the form below. Available 24/7, no extra charge for emergency calls."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="H&A NYC Electrician — Manhattan"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8!2d-74.0061!3d40.7073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2s40+Fulton+St%2C+New+York%2C+NY+10038!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
