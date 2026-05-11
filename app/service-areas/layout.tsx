import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas — Manhattan Electrician",
  description:
    "H&A NYC Electrician serves every neighborhood in Manhattan — from Inwood to the Financial District. Licensed, insured, and available 24/7. Call (646) 351-0882.",
  alternates: {
    canonical: "https://www.bestnycelectricianmanhattan.com/service-areas",
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
