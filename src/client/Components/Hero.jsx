import React, { useEffect, useState } from "react";
import HeroImage1 from '../../assets/img/Hero.jpeg';
import HeroImage2 from '../../assets/img/Hero.jpeg';

const Hero = () => {
  const images = [HeroImage1, HeroImage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 transform ${
              currentImageIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-6 sm:px-12">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Welcome to <span className="text-green-400">Paradise</span>
        </h1>
        <p className="text-white/80 text-lg sm:text-xl mt-4">
          Escape to luxury with breathtaking views and five-star services.
        </p>
        <button className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300">
          Reserve Now
        </button>
      </div>

      <div className="absolute bottom-0 w-full">
        <svg className="w-full h-24 sm:h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="white"
            d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,122.7C672,96,768,96,864,101.3C960,107,1056,117,1152,149.3C1248,181,1344,235,1392,261.3L1440,288V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
          />
        </svg>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "bg-yellow-500 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
