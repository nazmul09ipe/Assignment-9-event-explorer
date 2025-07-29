// @flow strict

import * as React from 'react';
import { Helmet } from 'react-helmet';

function Terms() {
  return (
    <div className="w-full bg-gray-300 py-10 px-5 sm:px-10 lg:px-24">
      <Helmet>
        <title>Terms and Condition | Happen Hub</title>
      </Helmet>

      {/* Page Header */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-800 text-center mb-8">
        HappenHub – Terms and Conditions
      </h1>

      <div className="max-w-4xl mx-auto text-sm sm:text-base space-y-8">
        {/* Effective Date & Intro */}
        <section className="text-center">
          <p className="text-base font-medium mb-1">Effective Date: July 2025</p>
          <h2 className="text-xl font-bold mb-4">Welcome to HappenHub!</h2>
          <p className="text-left">
            By accessing or using HappenHub (the “Website”), you agree to be bound by these Terms and Conditions (“Terms”). Please read them carefully. If you do not agree with any part of these Terms, please do not use the Website.
          </p>
        </section>

        {/* Terms Sections */}
        <section>
          <h3 className="font-bold mb-2">1. About HappenHub</h3>
          <p>
            HappenHub is a platform that helps users discover events happening around them. We provide event listings, descriptions, and relevant details to help users explore entertainment, educational, and social opportunities.
          </p>
        </section>

        <section>
          <h3 className="font-bold mb-2">2. Use of the Website</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>You must be at least 13 years old to use HappenHub.</li>
            <li>You agree to use the Website only for lawful purposes.</li>
            <li>You may not use the Website to post or share harmful, offensive, or illegal content.</li>
            <li>You agree not to attempt to hack, disrupt, or misuse the platform.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold mb-2">3. User Accounts (if applicable)</h3>
          <p>If HappenHub allows users to create accounts:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>You are responsible for keeping your login credentials secure.</li>
            <li>You agree not to share your account or use someone else’s without permission.</li>
            <li>You are responsible for all activity under your account.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold mb-2">4. Event Information</h3>
          <p>
            Events listed on HappenHub are provided for informational purposes.
            <br />
            While we try to ensure accuracy, we do not guarantee that event details are always correct, up to date, or error-free.
            <br />
            We are not responsible for changes, cancellations, or the quality of third-party events.
          </p>
        </section>

        <section>
          <h3 className="font-bold mb-2">5. Third-Party Links</h3>
          <p>
            HappenHub may include links to third-party websites or ticketing platforms. We are not responsible for the content, policies, or actions of those sites. Use them at your own risk.
          </p>
        </section>

        <section>
          <h3 className="font-bold mb-2">6. Intellectual Property</h3>
          <p>
            All content on HappenHub, including logos, design, and text, is owned or licensed by us. You may not copy, distribute, or use any part of the Website for commercial purposes without permission.
          </p>
        </section>

        <section>
          <h3 className="font-bold mb-2">7. Limitation of Liability</h3>
          <p>
            To the fullest extent allowed by law:
            <br />
            HappenHub is provided “as is” without warranties of any kind.
            <br />
            We are not liable for any damages or losses resulting from your use of the Website or reliance on event information.
          </p>
        </section>

        <section>
          <h3 className="font-bold mb-2">8. Termination</h3>
          <p>
            We reserve the right to suspend or terminate your access to HappenHub at any time for violating these Terms or for any other reason deemed appropriate.
          </p>
        </section>

        <section>
          <h3 className="font-bold mb-2">9. Changes to These Terms</h3>
          <p>
            We may update these Terms occasionally. Changes will take effect when posted on this page. Continued use of HappenHub after changes means you accept the updated Terms.
          </p>
        </section>

        <section>
          <h3 className="font-bold mb-2">10. Contact Us</h3>
          <p>
            If you have any questions about these Terms, contact us:
            <br />
            📧 <a href="mailto:happenhub2025@gmail.com" className="text-blue-700 underline">happenhub2025@gmail.com</a>
            <br />
            🌐 <a href="https://www.happenhub.com" className="text-blue-700 underline">https://www.happenhub.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
