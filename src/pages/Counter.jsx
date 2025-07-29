// @flow strict

import * as React from 'react';
import CountUp from 'react-countup';
import { useLoaderData } from 'react-router';
import { useInView } from 'react-intersection-observer';

function Counter() {
  const data = useLoaderData();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="w-full h-[400px] flex justify-center items-center bg-gradient-to-b from-emerald-100 to-emerald-700 py-12 px-4 sm:px-6 lg:px-12">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl"
      >
        {data.map((item, i) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-white bg-emerald-950 rounded-3xl shadow-2xl shadow-blue-600 p-6 sm:p-8 text-4xl md:text-5xl font-extrabold hover:bg-orange-500 transition-colors duration-300 ease-in-out mb-7"
           
          >
            <h1>
              {inView ? <CountUp end={Math.ceil(item.Number)} duration={5} /> : '0'}+
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mt-2 text-center">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
