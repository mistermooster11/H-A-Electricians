export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/signs-your-electrical-panel-needs-an-upgrade/",
    image: "/images/service-1.jpg",
    date: "15",
    monthYear: "May \'26",
    category: "Panel Upgrades",
    categoryHref: "/blog/",
    title: "5 Signs Your Manhattan Apartment Needs an Electrical Panel Upgrade",
    excerpt:
      "Frequently tripping breakers, flickering lights, or a panel older than 25 years are all warning signs. Here\'s what to look for and when to call a licensed electrician.",
  },
  {
    slug: "/blog/ev-charger-installation-nyc-guide/",
    image: "/images/service-4.jpg",
    date: "02",
    monthYear: "Apr \'26",
    category: "EV Chargers",
    categoryHref: "/blog/",
    title: "Installing a Level 2 EV Charger in a NYC Apartment Building: What You Need to Know",
    excerpt:
      "From board approval to ConEd permits, installing an EV charger in Manhattan requires more steps than a typical home. This guide walks you through the full process.",
  },
];
