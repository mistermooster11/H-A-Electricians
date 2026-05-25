"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let tl: any;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return; // StrictMode unmounted before import resolved

      gsap.set([titleRef.current, dividerRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
      });

      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(titleRef.current,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, clearProps: "all" }
        )
        .fromTo(dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "left center", clearProps: "all" },
          "-=0.4"
        )
        .fromTo(descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "all" },
          "-=0.3"
        )
        .fromTo(buttonsRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, clearProps: "all" },
          "-=0.4"
        );
    })();

    return () => {
      cancelled = true;
      tl?.kill();
    };
  }, []);

  return (
    <section className="hero">
      {/* Video background */}
      <div className="hero__video-bg">
        <video
          autoPlay
          muted
          playsInline
          loop
          poster="/images/title-bg.jpg"
          aria-hidden="true"
        >
          <source
            src="https://customer-ip9lnkk65px0t3ak.cloudflarestream.com/10a72254efd26e29a46c14bb30b6c180/downloads/default.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title" ref={titleRef}>
          Manhattan&apos;s Licensed
          <br />
          Electricians — Available
          <br />
          24/7
        </h1>

        <hr className="hero__divider" ref={dividerRef} />

        <p className="hero__description" ref={descRef}>
          Panel upgrades, residential wiring, EV charger installation,
          <br />
          and emergency electrical service across all of Manhattan —
          <br />
          upfront pricing, no hidden fees, Mon–Sun 24 hours.
        </p>

        <div className="hero__buttons" ref={buttonsRef}>
          <Link href="tel:6463510882" className="hero__btn-primary">
            Call (646) 351-0882
          </Link>
          <Link href="/contact-us" className="hero__btn-secondary">
            Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}