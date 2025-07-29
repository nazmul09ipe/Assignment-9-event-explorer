// @flow strict

import * as React from 'react';
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { toast } from 'react-toastify';
import { useState } from 'react';

function OnlineEvent({ item }) {
  const [buying, setBuying] = useState(false);

  const handleBuy = () => {
    toast.success(
      "Thanks for buying this event. Transaction and joining details will be sent to your email."
    );
    setBuying(true);
  };

  return (
    <div className="w-11/12 mx-auto bg-gray-300 shadow-2xl shadow-blue-600 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-6 md:gap-8 primary-font">
      {/* Event Image */}
      <div className="w-full md:w-[200px] flex justify-center md:justify-start">
        <img
          className="w-full max-w-[200px] h-[200px] object-cover object-center rounded-md"
          src={item.pic}
          alt={item.name}
        />
      </div>

      {/* Event Info */}
      <div className="w-full text-center md:text-left">
        <h1 className="font-bold text-lg sm:text-xl mb-2">{item.name}</h1>

        <div className="flex justify-center md:justify-start items-center gap-2 text-sm mb-1">
          <CiCalendarDate size={20} />
          <span>{item.date}</span>
        </div>

        <div className="flex justify-center md:justify-start items-center gap-2 text-sm mb-3">
          <CiLocationOn size={20} />
          <span>{item.location}</span>
        </div>

        <div className="mb-4">
          <h2 className="font-medium text-sm sm:text-base">Organized By</h2>
          <p className="text-sm">{item.organizer}</p>
        </div>

        <div className="flex justify-center md:justify-start">
          <button
            disabled={buying}
            onClick={handleBuy}
            className={`w-[110px] h-[42px] rounded-md transition-all duration-300 font-semibold ${
              buying
                ? "bg-emerald-500 text-black cursor-not-allowed"
                : "bg-emerald-900 text-white hover:bg-amber-600"
            }`}
          >
            {buying ? "Bought" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnlineEvent;
