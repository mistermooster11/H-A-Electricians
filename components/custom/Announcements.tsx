'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">Diagnosed, Quoted, and Fixed — Every Time</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage: 'url(https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Why-Choose-Us-Photo.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#ffffff',
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every call starts the same way: we arrive, assess the problem in
                front of you, explain exactly what needs to happen, and give you
                the price before a single tool touches your electrical system.
                No guessing. No surprise invoices. Just a straight answer and a plan.
              </p>
              <p>
                <strong>Step 1: Diagnose.</strong> Our licensed technician identifies
                the root cause of the issue and explains the right approach in plain
                language — panel issue, wiring problem, or a simple fix.
              </p>
              <p>
                <strong>Step 2: Free Quote.</strong> You get the price upfront. We
                don&apos;t start until you&apos;re ready. What we quote is what you pay.
              </p>
              <p>
                <strong>Step 3: Fix It &amp; Clean Up.</strong> We complete the job
                with quality materials and workmanship, test the result in front of
                you, and leave the work area clean before we leave.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
              <SecondaryButton
                href="tel:6463510882"
                label="Call (646) 351-0882"
                wow
              />
              <SecondaryButton
                href="/craft-catalog"
                label="See All Services"
                wow
                delay={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
