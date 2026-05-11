import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Tips & News — Manhattan Electrician Blog",
  description:
    "Electrical safety tips, industry news, and expert advice from H&A NYC Electrician — Manhattan's licensed electrical contractors.",
  alternates: {
    canonical: "https://www.bestnycelectricianmanhattan.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
