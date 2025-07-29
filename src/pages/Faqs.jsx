// @flow strict

import * as React from 'react';
import { Helmet } from 'react-helmet';

function Faqs() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-300 py-10 px-4 sm:px-6 lg:px-12">
      <Helmet>
        <title>FAQs | Happen Hub</title>
      </Helmet>

      {/* Heading Section */}
      <div className="w-full max-w-4xl text-center mb-10">
        <h1 className="secondary-font text-3xl sm:text-4xl font-bold text-amber-600 mb-2">
          Our FAQs
        </h1>
        <h2 className="text-xl sm:text-2xl text-black font-semibold">
          Have You any Questions?
        </h2>
      </div>

      {/* Accordion Section */}
      <div className="join join-vertical w-full max-w-4xl space-y-3">
        <div className="collapse collapse-arrow join-item border-2 border-cyan-800 bg-white">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold text-base sm:text-lg">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Click the <span className="font-bold">"Register"</span> button inside the{" "}
            <span className="font-bold">"Login"</span> section and follow the registration process.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-2 border-cyan-800 bg-white">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-base sm:text-lg">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Click on "Forgot Password" on the login page and follow the instructions sent to your email.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-2 border-cyan-800 bg-white">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-base sm:text-lg">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Go to "My Profile" settings and select "Edit Profile" to make changes.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-2 border-cyan-800 bg-white">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-base sm:text-lg">
            How do I reserve a seat for an upcoming event?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Go to the "View More" section and fill out the seat reservation form.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-2 border-cyan-800 bg-white mb-6">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-base sm:text-lg">
            How do I follow this site?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Go to the footer, explore our social media links, and follow us to stay updated.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
