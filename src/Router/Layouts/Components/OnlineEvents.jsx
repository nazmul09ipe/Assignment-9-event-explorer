// @flow strict

import * as React from 'react';
import OnlineEvent from './OnlineEvent';
import { use } from 'react';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function OnlineEvents({ onlinePromise }) {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const event = use(onlinePromise);
  const [showAll, setShowAll] = useState(false);
  const displayedData = showAll ? event : event.slice(0, 6);

  return (
    <div className="bg-gradient-to-b from-[#60c8c1] to-[#b9e3e3] w-full mx-auto py-10 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-center">
          <h1
            data-aos="flip-left"
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-10 text-center secondary-font"
          >
            Online Events
          </h1>
        </div>

        {/* Grid of Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedData.map((item) => (
            <OnlineEvent key={item.id} item={item} />
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-12">
          <button
            className="btn w-full max-w-xs sm:w-52 h-14 bg-emerald-950 text-white border-blue-600 rounded-3xl font-bold text-lg sm:text-xl transition mt-5 duration-300 hover:bg-blue-700 cursor-pointer primary-font mb-5"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All Events'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnlineEvents;
