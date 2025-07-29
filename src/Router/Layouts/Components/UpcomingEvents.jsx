// @flow strict

import * as React from 'react';
import { use } from 'react';
import EventContent from './EventContent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function UpcomingEvents({ eventPromise }) {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  const event = use(eventPromise);

  return (
    <div className="bg-gradient-to-b from-[#60c8c1] to-[#b9e3e3] w-full mx-auto py-10 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-center">
          <h1
            data-aos="flip-left"
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-10 text-center secondary-font"
          >
            Upcoming Events
          </h1>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {event.map((item) => (
            <div key={item.id}>
              <EventContent item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
