import React, { useEffect, useState } from "react";
import HeroImage1 from "../../assets/img/h1.jpeg";
import HeroImage2 from "../../assets/img/h2.jpeg";
import HeroImage3 from "../../assets/img/h3.jpeg";
import { CiBoxList } from "react-icons/ci";
import { Link } from "react-router-dom";


const Hero = () => {
  const images = [HeroImage1, HeroImage2 , HeroImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen   bg-gray-900 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero background ${index + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 transform ${
              currentImageIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-4 sm:px-8 text-center mt-44 sm:text-left sm:mb-16 md:mb-4 xl:mb-1">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl leading-tight drop-shadow-lg">
          Enjoy Your Dream <span className="text-yellow-400">Vacation</span>
        </h1>
        <div className="mt-3 sm:mt-4">
          <p className="text-white text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga recusandae sint totam ratione! 
          </p>
        </div>
        <div className="mt-5 sm:mt-6">
          <Link to='/gallery'>
          <button className="flex  items-center justify-between gap-3 text-sm  text-white bg-green-600 hover:bg-green-700 px-4 py-3 font-medium rounded-md w-full sm:w-auto">
          <CiBoxList className="p-1 " size={25} />
          Click here to check all  rooms
          </button>

          </Link>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "bg-yellow-500 scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Booking Section */}
      
    </div>
  );
};

export default Hero;
