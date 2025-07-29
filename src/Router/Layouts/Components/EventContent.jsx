// @flow strict

import * as React from 'react';
import { Link } from 'react-router';
import EventDetails from './EventDetails';

function EventContent({ item }) {
  return (
    <div className="my-6 px-4 sm:px-6 md:px-8 lg:px-10 primary-font w-full flex justify-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-gray-900 rounded-3xl shadow-2xl shadow-blue-950 py-6 px-4 sm:px-6">
        {/* Event Image */}
        <div className="mb-4">
          <img
            className="rounded-2xl w-full h-48 object-cover"
            src={item.thumbnail}
            alt={item.name}
          />
        </div>

        {/* Event Info */}
        <div className="space-y-2 text-white text-sm sm:text-base">
          <p className="font-medium">
            Name: <span className="font-light ml-1">{item.name}</span>
          </p>
          <p className="font-medium">
            Category: <span className="font-light ml-1">{item.category}</span>
          </p>
          <p className="font-medium">
            Date: <span className="font-light ml-1">{item.date}</span>
          </p>
          <p className="font-medium">
            Location: <span className="font-light ml-1">{item.location}</span>
          </p>
          <p className="font-medium mb-2">
            Entry Fee: <span className="font-light ml-1">{item.entry_fee}</span>
          </p>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-6">
          <Link to={`/eventDetails/${item.id}`}>
            <button className="text-orange-700 font-bold btn border border-orange-700 hover:bg-amber-700 hover:text-white px-4 py-2 rounded-lg transition">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventContent;
