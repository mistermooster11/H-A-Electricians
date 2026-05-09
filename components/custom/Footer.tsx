"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const quickLinks = [
  { label: "Our Services",               href: "/craft-catalog",   external: false },
  { label: "Frequently Asked Questions", href: "/general-faqs",    external: false },
  { label: "Service Areas",              href: "/service-areas",   external: false },
  { label: "Before & After Gallery",     href: "/gallery",         external: false },
  { label: "Contact Us",                 href: "/contact-us",      external: false },
];

type SocialItem = { label: string; href: string } & (
  | { type: "icon"; icon: string }
  | { type: "svg"; svgPath: string }
);

const socials: SocialItem[] = [
  {
    type: "icon",
    icon: "icon-facebook",
    href: "https://www.facebook.com/HaNycElectrician",
    label: "Facebook",
  },
  {
    type: "icon",
    icon: "icon-twitter",
    href: "https://twitter.com/nyc_electrician",
    label: "Twitter / X",
  },
  {
    type: "svg",
    // Yelp burst logo path
    svgPath:
      "M10.098 12.112l-3.117.936a.63.63 0 01-.77-.836l1.477-3.43a.63.63 0 011.166.05l1.64 3.43a.63.63 0 01-.396.85zm-3.44-5.39L3.04 5.098a.63.63 0 01.05-1.166l3.43-1.64a.63.63 0 01.85.396l.936 3.117a.63.63 0 01-.836.77L6.658 6.722zm7.72 2.054l-3.117-.936a.63.63 0 01-.396-.85l1.64-3.43a.63.63 0 011.166-.05l1.62 3.622a.63.63 0 01-.913.644zm-.394 2.862l-3.43 1.64a.63.63 0 01-.85-.396l-.936-3.117a.63.63 0 01.836-.77l3.622 1.62a.63.63 0 01-.242.923zM8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm4.09 11.09c-.137.42-.51.667-.912.667a.93.93 0 01-.27-.04l-2.87-1.37-.36.838 2.87 1.37c.42.2.61.703.41 1.123a.87.87 0 01-.79.52.87.87 0 01-.37-.083l-2.87-1.37-.004.009-.895 2.08a.87.87 0 01-.793.524.87.87 0 01-.37-.083.87.87 0 01-.44-1.153l.895-2.08-.009-.004-2.87-1.37a.87.87 0 01-.44-1.153.87.87 0 011.153-.44l2.87 1.37.36-.838-2.87-1.37a.87.87 0 01-.44-1.153.87.87 0 011.153-.44l2.87 1.37.004-.009.895-2.08a.87.87 0 011.153-.44.87.87 0 01.44 1.153l-.895 2.08.009.004 2.87 1.37c.42.2.61.703.41 1.123z",
    href: "https://www.yelp.com/biz/h-and-a-nyc-electrician-new-york",
    label: "Yelp",
  },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const vis = isInView ? " is-visible" : "";

  return (
    <footer ref={ref} className={`footer wow${vis}`}>

      {/* ── Top area: logo + widgets ── */}
      <div className="inner inner--slim-1162">

        {/* Logo */}
        <div className={`footer__logo fadeInUpS wow${vis}`}>
          <a href="/">
            <span className="sr-only">H&amp;A NYC Electrician</span>
            {/* [TODO: Replace with H&A NYC Electrician logo file] */}
            <img
              src="/logos/logo-long.svg"
              alt="H&A NYC Electrician"
              width="220"
              height="48"
            />
          </a>
        </div>

        {/* Widgets */}
        <div className="footer__widgets">

          {/* Quick Links */}
          <div className={`footer__widget footer__widget-quick-links fadeInUpS wow${vis}`}>
            <h3 className="footer__heading">Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.external ? "_blank" : "_self"}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`footer__widget footer__widget-donation fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="footer__heading">Contact Us</h3>
            <div className="content-entry">
              <p>
                40 Fulton Street, New York, NY 10038<br />
                <strong>(646) 351-0882</strong><br />
                Mon–Sun: 24 Hours
              </p>
            </div>
            <a
              href="tel:6463510882"
              className={`ia-link ia-link--arrow ia-link--white wow${vis}`}
            >
              <i className="icon-arrow-right ia-orange" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Service Areas */}
          <div
            className={`footer__widget footer__widget-subscribe fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="footer__heading">Service Areas</h3>
            <div className="content-entry">
              <p>
                All of Manhattan — from Inwood &amp; Washington Heights
                to the Financial District &amp; Battery Park City.
                Every neighborhood, every ZIP code.
              </p>
            </div>
            <a
              href="/service-areas"
              className={`ia-link ia-link--arrow ia-link--white wow${vis}`}
            >
              <i className="icon-arrow-right ia-orange" />
              <span>View All Areas</span>
            </a>
          </div>

        </div>{/* /.footer__widgets */}
      </div>{/* /.inner.inner--slim-1162 */}

      {/* ── Bottom bar ── */}
      <div className="inner">
        <div className={`footer__bottom cleared fadeInUpS wow${vis}`}>

          <div className="footer__bottom__left">
            &copy;2026 H&amp;A NYC Electrician. All rights reserved.
          </div>

          <div className="footer__bottom__center">
            <div className="footer__bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>

          <div className="footer__bottom__right" id="footer__bottom__right">
            <ul className="footer__socials">
              {socials.map((s) => (
                <li key={s.label}>
                  <a rel="noopener noreferrer" href={s.href} target="_blank" aria-label={s.label}>
                    {s.type === "icon" ? (
                      <i className={s.icon} aria-hidden="true" />
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                        style={{ display: "block" }}
                      >
                        <path d={s.svgPath} />
                      </svg>
                    )}
                    <span className="sr-only">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </footer>
  );
}
