import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Gallery — Electrical Work Manhattan",
  description:
    "See H&A NYC Electrician's completed electrical projects across Manhattan — panel upgrades, home rewires, EV charger installations, and more.",
  alternates: {
    canonical: "https://www.bestnycelectricianmanhattan.com/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
