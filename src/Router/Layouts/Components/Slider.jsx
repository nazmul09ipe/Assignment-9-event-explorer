// @flow strict

import * as React from 'react';
import musicImg from '../../../assets/mic-special.jpg';
import conferencImg from '../../../assets/conference speaker.jpg';
import seminerImg from '../../../assets/int-seminer2.jpg';
import lightImg from '../../../assets/lighting-2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Slider() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 via-gray-100 to-gray-900 pt-5 pb-10 primary-font px-4">
      {/* Heading */}
      <div className="p-6">
        <p
          data-aos="flip-right"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-950 mb-10 text-center secondary-font"
        >
          Browse by Category
        </p>
      </div>

      {/* Carousel */}
      <div className="carousel w-full max-w-6xl rounded-3xl mb-7">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <img src={musicImg} className="w-full object-cover rounded-3xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-semibold bg-black/40 px-4 py-2 rounded-2xl">
              Music
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <img src={conferencImg} className="w-full object-cover rounded-3xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-semibold bg-black/40 px-4 py-2 rounded-2xl">
              Seminar
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <img src={seminerImg} className="w-full object-cover rounded-3xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-semibold bg-black/40 px-4 py-2 rounded-2xl">
              Conference
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <img src={lightImg} className="w-full object-cover rounded-3xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-semibold bg-black/40 px-4 py-2 rounded-2xl">
              Stage Program
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
