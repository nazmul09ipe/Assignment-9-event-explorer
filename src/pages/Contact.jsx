// @flow strict

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

function Contact() {
  const handleSendMessage = (e) => {
    e.preventDefault();
    toast.success("Thanks for messaging. We'll contact you within 48 hours. Stay connected!");
  };

  return (
    <>
      <Helmet>
        <title>Contact | Happen Hub</title>
      </Helmet>

      <div className="min-h-screen bg-gray-300 text-gray-800 flex flex-col justify-between">
        <section className="max-w-4xl w-11/12 mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-cyan-950">Contact- HappenHub</h1>
            <p className="mt-4 text-cyan-600 text-base sm:text-lg">We'd love to hear from you. Drop us a message!</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-950 text-white py-2 rounded-lg font-semibold hover:bg-cyan-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center text-cyan-700 space-y-2 text-sm sm:text-base">
            <p>📧 hello@happenhub.com</p>
            <p>📍 Jahangirnagor Housing Society, Radio Colony Road, Savar, Dhaka-1230</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
