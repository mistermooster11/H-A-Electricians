import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with H&A NYC Electrician. Call (646) 351-0882 for same-day scheduling across Manhattan, or send us a message online. Free quotes. Available 24/7.",
  alternates: {
    canonical: "https://www.bestnycelectricianmanhattan.com/contact-us",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
