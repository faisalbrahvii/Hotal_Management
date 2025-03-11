import React from "react";
import HeroImage from "../assets/img/Hero.jpeg";

const Experience = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[HeroImage, HeroImage, HeroImage].map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={image}
                alt="Luxury Room"
                className="w-full h-80 object-cover rounded-lg transition-transform transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="relative mt-[-40px] bg-gray-800 p-8 sm:p-12 lg:p-16 rounded-lg shadow-2xl text-white">
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            {/* Left Text */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-4xl sm:text-5xl font-serif mb-2">
                With our experience,
              </h2>
              <h2 className="text-3xl sm:text-4xl font-serif">we will serve you</h2>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              {[
                { value: "800+", label: "Cities" },
                { value: "3500+", label: "Exclusive Hotels" },
                { value: "2M", label: "Exclusive Rooms" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-5xl font-bold text-green-400 drop-shadow-lg">
                    {item.value}
                  </h3>
                  <p className="text-lg">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
