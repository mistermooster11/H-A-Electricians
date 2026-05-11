import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs — Electrical Services Manhattan",
  description:
    "Answers to common questions about H&A NYC Electrician's services, pricing, licensing, and availability. Licensed NYC electricians serving Manhattan 24/7.",
  alternates: {
    canonical: "https://www.bestnycelectricianmanhattan.com/general-faqs",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
