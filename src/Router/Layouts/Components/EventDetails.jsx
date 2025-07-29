import * as React from 'react';
import { useLoaderData, useParams } from 'react-router';
import bookingImg from '../../../assets/theatre.jpg';
import { toast } from 'react-toastify';
import { useState } from 'react';

function EventDetails() {
  const { id } = useParams();
  const event = useLoaderData();
  const singleEvent = event.find(item => item.id == id);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    toast.success('Congratulations! You have successfully reserved your seat.');
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat primary-font pb-20 px-4"
      style={{ backgroundImage: `url(${bookingImg})` }}
    >
      <div className="flex flex-col justify-center items-center w-full max-w-4xl mt-10 bg-white/10 backdrop-blur-md rounded-xl p-6">
        {/* Event Name & Image */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-5 secondary-font">
            {singleEvent.name}
          </h1>
          <img
            className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-2xl border-2 border-orange-800"
            src={singleEvent.thumbnail}
            alt={singleEvent.name}
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleClick}
          className="w-full max-w-lg mt-8 flex flex-col gap-4 items-center bg-white/90 p-6 rounded-3xl shadow-2xl"
        >
          <input
            className="w-full h-12 border-2 border-orange-600 rounded-xl px-4 bg-blue-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="text"
            placeholder="Type Your Name"
            required
          />
          <input
            className="w-full h-12 border-2 border-orange-600 rounded-xl px-4 bg-blue-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="email"
            placeholder="Email here"
            required
          />

          <button
            disabled={isSubmitting}
            type="submit"
            className={`w-full h-12 rounded-xl mt-2 text-white font-semibold transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-orange-800 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Reserved' : 'Reserve your Seat'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventDetails;
