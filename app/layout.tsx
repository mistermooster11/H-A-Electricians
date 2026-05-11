import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://www.bestnycelectricianmanhattan.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "H&A NYC Electrician — Licensed Manhattan Electrical Contractors",
    template: "%s | H&A NYC Electrician",
  },
  description:
    "H&A NYC Electrician is a licensed, insured electrical contracting firm serving all of Manhattan 24/7. Panel upgrades, home rewires, EV charger installation, generator installation & more. Free quotes. No hidden charges.",
  keywords: [
    "electrician Manhattan",
    "NYC electrician",
    "licensed electrician New York",
    "panel upgrade Manhattan",
    "home rewire NYC",
    "EV charger installation Manhattan",
    "generator installation NYC",
    "emergency electrician Manhattan",
    "24 hour electrician NYC",
    "electrical contractor New York City",
  ],
  authors: [{ name: "H&A NYC Electrician" }],
  creator: "H&A NYC Electrician",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "H&A NYC Electrician",
    title: "H&A NYC Electrician — Licensed Manhattan Electrical Contractors",
    description:
      "Licensed, insured electrical contractors serving all of Manhattan 24/7. Panel upgrades, home rewires, EV chargers, generators & more. Free quotes, upfront pricing.",
    images: [
      {
        url: "/images/IMG_9688-1024x682.jpg",
        width: 1024,
        height: 682,
        alt: "H&A NYC Electrician — Manhattan Licensed Electrical Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "H&A NYC Electrician — Licensed Manhattan Electrical Contractors",
    description:
      "Licensed, insured electrical contractors serving all of Manhattan 24/7. Panel upgrades, home rewires, EV chargers & more. Free quotes.",
    images: ["/images/IMG_9688-1024x682.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "H&A NYC Electrician",
  image: `${BASE_URL}/images/IMG_9688-1024x682.jpg`,
  "@id": BASE_URL,
  url: BASE_URL,
  telephone: "+16463510882",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manhattan",
    addressRegion: "NY",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7549,
    longitude: -73.984,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/HaNycElectrician",
    "https://www.yelp.com/biz/h-and-a-nyc-electrician-new-york",
  ],
  areaServed: {
    "@type": "City",
    name: "Manhattan, New York City",
  },
  description:
    "H&A NYC Electrician is a licensed, insured electrical contracting firm based in Manhattan, serving all of New York City 24 hours a day, 7 days a week.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
