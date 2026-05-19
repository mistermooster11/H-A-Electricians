import type { ChannelPageData } from "@/components/custom/channel/types";

const haNycElectrician: ChannelPageData = {
  slug: "ha-nyc-electrician",

  navItems: [
    { href: "#learn-more",   label: "About Us"      },
    { href: "#crafts",       label: "Our Services"  },
    { href: "#flex-feature", label: "Emergency"     },
    { href: "#get-in-touch", label: "Contact"       },
  ],

  hero: {
    title: "H&A NYC Electrician — Manhattan's Licensed Electrical Contractors",
    breadcrumbLabel: "About Us",
    imageBg: `url(https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2020/03/long_island_electricians.jpg) no-repeat center/cover`,
    description: (
      <p>
        H&amp;A NYC Electrician is a licensed, insured electrical contracting firm
        based out of Manhattan, serving all of New York City&rsquo;s neighborhoods
        24 hours a day, 7 days a week. From panel upgrades and home rewires to EV
        charger installations and generator installs — we handle it all with
        upfront pricing and zero surprises.
      </p>
    ),
  },

  learnMore: {
    title: "Manhattan's Most Versatile Electrical Contractors",
    content: (
      <>
        <p>
          H&amp;A NYC Electrician is staffed by professionals right out of New York
          City — licensed by the State of New York, fully insured, and deeply
          familiar with the electrical infrastructure found in Manhattan&rsquo;s pre-war
          walk-ups, high-rise residential buildings, and commercial spaces.
        </p>
        <p>
          We serve the entire island of Manhattan — from Inwood and Washington
          Heights in the north to the Financial District, Battery Park City, and
          Tribeca in the south. Every ZIP code, every neighborhood. If
          you&rsquo;re in Manhattan, we cover your area.
        </p>
        <p>
          What sets us apart is our commitment to honest, transparent service.
          We provide free quotes on all jobs, and we mean it — our team will never
          increase the price after an estimate is given. Every technician is
          extensively trained and drug-tested before working in the field, because
          we know you&rsquo;re letting us into your home or business.
        </p>
        <h5>Licensed, Insured &amp; Upfront</h5>
        <p>
          Our electrical work covers the full spectrum: residential, commercial,
          and property management. Whether you need a 200-amp panel upgrade to
          support modern appliances, aluminum or knob-and-tube wiring replaced to
          meet code, or a whole-house power surge protection system installed —
          H&amp;A NYC Electrician has the expertise and equipment to get it done
          correctly, the first time.
        </p>
        <p>
          We are available 24 hours a day, Mon through Sun. Emergency or
          scheduled — call us and we&rsquo;ll take care of it.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "View All Services",        href: "/craft-catalog",     icon: "icon-books"     },
      { title: "Frequently Asked Questions", href: "/general-faqs",    icon: "icon-message"   },
      { title: "Before & After Gallery",   href: "/gallery",           icon: "icon-calendar"  },
      { title: "Contact Us",               href: "/contact-us",        icon: "icon-paper-plan"},
    ],
  },

  crafts: {
    description: (
      <p>
        H&amp;A NYC Electrician handles every type of residential and commercial
        electrical job in Manhattan — from routine service calls and outlet repairs
        to full home rewires, panel upgrades, and EV charger installations.
      </p>
    ),
    craftLinks: [
      { label: "Residential Electrician",          href: "/craft-catalog/residential-electrician"   },
      { label: "Commercial Electrician",           href: "/craft-catalog/commercial-electrician"    },
      { label: "200 Amp Panel Upgrades",           href: "/craft-catalog/panel-upgrades"            },
      { label: "Home Rewires",                     href: "/craft-catalog/home-rewires"              },
      { label: "EV Charger Installation",          href: "/craft-catalog/ev-charger-installation"   },
      { label: "Generator Installation",           href: "/craft-catalog/generator-installation"    },
      { label: "Electrical Troubleshooting",       href: "/craft-catalog/electrical-troubleshooting"},
      { label: "Home Safety Inspections",          href: "/craft-catalog/home-safety-inspections"   },
      { label: "Whole House Surge Protection",     href: "/craft-catalog/surge-protection"          },
      { label: "Knob and Tube Replacement",        href: "/craft-catalog/knob-and-tube-replacement" },
      { label: "Aluminum Wire Replacement",        href: "/craft-catalog/aluminum-wire-replacement" },
      { label: "Lighting Installation",            href: "/craft-catalog/lighting-installation"     },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      // [TODO: Replace with real Google review from H&A NYC Electrician]
      text: "Called H&A NYC Electrician for a panel upgrade in our Manhattan apartment building. They arrived on time, explained everything clearly before starting, and had the job done same day. Pricing was exactly what they quoted — no hidden charges. Highly recommend.",
      name: "Google Reviewer",
      position: "Manhattan Building Owner",
    },
  },

  flexFeature: {
    imageSrc: "https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Panel-Breaker-Replacement.jpg",
    title: "24/7 Electrical Service — No Overtime Charges",
    body: (
      <p>
        Electrical emergencies don&rsquo;t wait for business hours. H&amp;A NYC
        Electrician is available around the clock — Mon through Sun, 24 hours —
        with the same upfront pricing regardless of when you call.
      </p>
    ),
    buttonLabel: "Call (646) 351-0882",
    buttonHref: "tel:6463510882",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule service or get a free estimate? Call us at{" "}
        <strong>(646) 351-0882</strong> or fill out our contact form and we&rsquo;ll
        follow up fast. Available Mon–Sun, 24 hours.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref: "/contact-us",
  },
};

export default haNycElectrician;
