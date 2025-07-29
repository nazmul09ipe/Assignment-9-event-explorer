import * as React from 'react';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from "../../../assets/hero.jpg";
import movingImg from "../../../assets/music-concert2.jpg"

function Banner() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2;
    const y = ((e.clientY - top) / height - 0.5) * 2;
    setOffset({ x, y });
  };

  const translateX = offset.x * 15;
  const translateY = offset.y * 15;

  return (
    <div
      className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
      onMouseMove={handleMouseMove}
    >
      {/* Moving image */}
      <img
        src={movingImg}
        alt="Hero"
        className="hidden sm:block absolute w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 object-cover pointer-events-none"
        style={{
          top: '30%',
          left: '75%',
          transform: `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
          borderRadius: '50%',
          border: '4px solid rgba(255,255,255,0.4)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(6px)',
          zIndex: 1,
        }}
      />

      {/* Text content */}
      <div className="flex flex-col justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <h1
          data-aos="flip-left"
          className="font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-emerald-950 mb-4 primary-font text-center sm:text-left"
        >
          Discover and Enjoy <br className="hidden sm:block" />
          the Upcoming Events around You.
        </h1>

        <h2
          data-aos="flip-right"
          data-aos-delay="300"
          className="text-pink-800 font-bold text-lg sm:text-xl md:text-2xl secondary-font text-center sm:text-left"
        >
          Life’s an Event — Explore It .....
        </h2>
      </div>
    </div>
  );
}

export default Banner;
