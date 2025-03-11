import React, { useEffect, useState } from "react";
import HeroImage2 from '../assets/img/Hero.jpeg';
import HeroImage1 from '../assets/img/Hero.jpeg';

const Hero = () => {
  const images = [HeroImage1, HeroImage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Smooth 5-sec transition
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden transition-all duration-1000">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: 1,
        }}
      ></div>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 sm:px-8 lg:px-16 text-center">
        <div className="bg-white/10 backdrop-blur-md text-white p-10 sm:p-14 rounded-2xl shadow-xl max-w-3xl w-full">
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide">
            Discover the Luxury of
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-2 leading-tight">
            Comfort & Elegance
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mt-4 leading-relaxed">
            Enjoy a premium experience with our finest accommodations, tailored for your relaxation and comfort.
          </p>
          <button className="mt-6 py-3 px-12 sm:px-16 md:px-20 bg-yellow-500 text-white font-semibold transition-all hover:bg-yellow-600 hover:shadow-lg transform hover:scale-105 rounded-full text-lg sm:text-xl">
            Book Your Stay
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-500 ${
              currentImageIndex === index ? "bg-yellow-500 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
