import CraftHero from "@/components/custom/craft-catalog/CraftHero";

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      <CraftHero
        title="Privacy Policy"
        bgImage="https://www.bestnycelectricianmanhattan.com/wp-content/uploads/2025/05/Why-Choose-Us-Photo.jpg"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <div className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">
          <div className="content-entry" style={{ maxWidth: "80rem" }}>

            <p><strong>Effective Date:</strong> January 1, 2026</p>
            <p>
              H&amp;A NYC Electrician (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates this website. This Privacy Policy explains
              how we collect, use, and protect information when you visit our site
              or contact us for service.
            </p>

            <h3>Information We Collect</h3>
            <p>
              We collect information you provide directly — such as your name,
              phone number, email address, and service description — when you
              fill out a contact form or call us. We may also collect standard
              web analytics data (page views, browser type, approximate location)
              through third-party analytics tools.
            </p>

            <h3>How We Use Your Information</h3>
            <p>
              Information you provide is used solely to respond to your service
              inquiry, schedule estimates or appointments, and follow up on jobs
              we have completed. We do not sell, rent, or share your personal
              information with third parties for marketing purposes.
            </p>

            <h3>Cookies</h3>
            <p>
              This site may use standard browser cookies for analytics purposes.
              You can disable cookies in your browser settings. Disabling cookies
              does not affect your ability to use this site or contact us.
            </p>

            <h3>Data Retention</h3>
            <p>
              We retain contact information for as long as necessary to provide
              service and maintain business records. You may request deletion of
              your personal data at any time by contacting us directly.
            </p>

            <h3>Third-Party Links</h3>
            <p>
              This site may contain links to third-party websites (such as Google
              Maps or review platforms). We are not responsible for the privacy
              practices of those sites.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, contact us at:<br />
              <strong>H&amp;A NYC Electrician</strong><br />
              40 Fulton Street, New York, NY 10038<br />
              <a href="tel:6463510882">(646) 351-0882</a>
            </p>

            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised effective date.
            </p>

          </div>
        </div>
      </div>

    </main>
  );
}
