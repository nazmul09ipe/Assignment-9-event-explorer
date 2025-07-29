// @flow strict

import * as React from 'react';
import { Helmet } from 'react-helmet';

function Privacy() {
  return (
    <div className="w-full bg-gray-300 py-10 px-5 sm:px-10 lg:px-24">
      <Helmet>
        <title>Privacy-Policy | Happen Hub</title>
      </Helmet>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-800 text-center mb-8">
        HappenHub – Privacy Policy
      </h1>

      {/* Effective Date & Intro */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-base sm:text-lg font-medium mb-2">
          Effective Date: July 2025
        </p>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Welcome to HappenHub!</h2>
        <p className="text-sm sm:text-base text-left">
          At HappenHub, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website (<a className="text-blue-700 underline" href="https://www.happenhub.com">https://www.happenhub.com</a> or related domains).
          <br /><br />
          By using HappenHub, you agree to the practices described below.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto space-y-8 text-sm sm:text-base text-justify">
        <section>
          <h3 className="text-lg font-bold mb-2">1. Information We Collect</h3>
          <p>
            <strong>a. Personal Information:</strong> We collect personal data when you:
            <ul className="list-disc list-inside ml-4">
              <li>Sign up for an account</li>
              <li>Subscribe to a newsletter</li>
              <li>Contact us via forms or email</li>
            </ul>
            This may include name, email address, location (optional), and login credentials.
            <br /><br />
            <strong>b. Usage Data:</strong> We may automatically collect IP address, browser type/version, visited pages, device info, and clickstream data.
            <br /><br />
            <strong>c. Cookies and Tracking:</strong> We use cookies to improve site functionality, understand user behavior, and save preferences. You can manage cookies through your browser.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">2. How We Use Your Information</h3>
          <p>
            We use your information to:
            <ul className="list-disc list-inside ml-4">
              <li>Provide and maintain HappenHub</li>
              <li>Personalize event recommendations</li>
              <li>Respond to inquiries and support</li>
              <li>Send updates and marketing (if opted-in)</li>
              <li>Monitor and improve performance</li>
              <li>Prevent fraud or misuse</li>
            </ul>
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">3. Sharing Your Information</h3>
          <p>
            We do not sell your personal data. We may share it with:
            <ul className="list-disc list-inside ml-4">
              <li>Service providers (hosting, analytics)</li>
              <li>Legal authorities (when required)</li>
              <li>Event partners (with prior notice)</li>
            </ul>
            All third parties are required to use your data securely and for intended purposes only.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">4. Data Retention</h3>
          <p>
            We retain data only as long as necessary or legally required. You may request to delete your data or account at any time.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">5. Security</h3>
          <p>
            We use reasonable security practices (encryption, access control, etc.), but no system is 100% secure.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">6. Your Rights</h3>
          <p>
            Depending on your location, you may have the right to:
            <ul className="list-disc list-inside ml-4">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Object to certain uses</li>
              <li>Withdraw consent</li>
            </ul>
            Contact us at <a href="mailto:happenhub2025@gmail.com" className="text-blue-700 underline">happenhub2025@gmail.com</a> to exercise your rights.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">7. Third-Party Links</h3>
          <p>
            Our platform may link to external sites. We are not responsible for their privacy policies. Review theirs independently.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">8. Children’s Privacy</h3>
          <p>
            HappenHub is not intended for children under 13. We do not knowingly collect their data. If we find such data, it will be deleted.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">9. Changes to This Privacy Policy</h3>
          <p>
            We may revise this policy. Updates will be reflected here with a new effective date. Please review regularly.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">10. Contact Us</h3>
          <p>
            Have questions? Contact us at:<br />
            📧 <a href="mailto:happenhub2025@gmail.com" className="text-blue-700 underline">happenhub2025@gmail.com</a><br />
            🌐 <a href="https://www.happenhub.com" className="text-blue-700 underline">https://www.happenhub.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
