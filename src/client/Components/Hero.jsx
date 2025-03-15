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
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Fade Effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      ></div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 max-w-3xl">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Experience True <span className="text-yellow-400">Luxury & Comfort</span>
        </h1>
        <p className="text-white/80 text-lg sm:text-xl mt-4">
          Indulge in an unforgettable stay at our premium hotels, where elegance meets relaxation.
        </p>
        <button className="mt-6 px-8 py-3 bg-yellow-500 text-white font-semibold text-lg rounded-full shadow-md hover:bg-yellow-600 transition-all">
          Book Your Stay
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all ${
              currentImageIndex === index ? "bg-yellow-500 scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
