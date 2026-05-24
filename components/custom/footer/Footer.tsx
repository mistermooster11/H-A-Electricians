import Image from "next/image";
import Link from "next/link";
import { quickLinks, servicesLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top section */}
      <div className="footer__top">
        <div className="footer__brand">
          <Link href="/">
            <Image
              src="/logos/H-A_logo-redesign.png"
              alt="H&A NYC Electrician"
              width={200}
              height={44}
              className="footer__logo"
              style={{ height: "auto" }}
            />
          </Link>
          <p className="footer__desc">
            <strong>H&amp;A NYC Electrician</strong> is a licensed, insured electrical contracting firm
            serving all of Manhattan 24/7 — panel upgrades, residential wiring, EV charger installation,
            and emergency electrical service.
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/HaNycElectrician" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
              <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
            </a>
            <a href="https://www.yelp.com/biz/h-and-a-nyc-electrician-new-york" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="footer__social-link">
              <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor"><path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <div className="footer__divider" />
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <div className="footer__divider" />
          <ul className="footer__links">
            {servicesLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">Copyright 2026 H&amp;A NYC Electrician. All rights reserved.</p>
        <div className="footer__legal">
          <Link href="/privacy-policy/" className="footer__legal-link">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
