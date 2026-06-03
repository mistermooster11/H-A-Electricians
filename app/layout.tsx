import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SalePopup from "@/components/custom/popup/SalePopup"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "H&A NYC Electrician — Licensed Manhattan Electrical Contractors",
    template: "%s | H&A NYC Electrician",
  },
  description:
    "H&A NYC Electrician is a licensed, insured electrical contracting firm serving all of Manhattan 24/7. Panel upgrades, residential wiring, EV charger installation, emergency electrical & more. Free quotes. No hidden charges.",
  metadataBase: new URL("https://www.bestnycelectricianmanhattan.com"),
  openGraph: {
    type: "website",
    url: "https://www.bestnycelectricianmanhattan.com",
    siteName: "H&A NYC Electrician",
    title: "H&A NYC Electrician — Licensed Manhattan Electrical Contractors",
    description:
      "H&A NYC Electrician is a licensed, insured electrical contracting firm serving all of Manhattan 24/7. Panel upgrades, residential wiring, EV charger installation, emergency electrical & more. Free quotes. No hidden charges.",
  },
  twitter: {
    card: "summary_large_image",
    title: "H&A NYC Electrician — Licensed Manhattan Electrical Contractors",
    description:
      "H&A NYC Electrician is a licensed, insured electrical contracting firm serving all of Manhattan 24/7. Panel upgrades, residential wiring, EV charger installation, emergency electrical & more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: "H&A NYC Electrician",
    telephone: "+1-212-000-0000",
    url: "https://www.bestnycelectricianmanhattan.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    areaServed: "Manhattan, NY",
    description:
      "Licensed, insured electrical contracting firm serving all of Manhattan 24/7. Panel upgrades, residential wiring, EV charger installation, emergency electrical & more.",
  };

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PageTransition />
        <SalePopup businessName="H&A NYC Electrician" expiryDate="June 15, 2026" trade="electricians" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
