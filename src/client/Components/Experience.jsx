import React from "react";
import HeroImage from "../../assets/img/Hero.jpeg";

const Experience = () => {
  return (
    <section className="relative w-full py-16 bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Experience Luxury Like Never Before
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          With our years of expertise, we provide you with the finest hospitality, breathtaking views, and world-class service.
        </p>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { number: "800+", label: "Cities Covered" },
            { number: "3500+", label: "Luxury Hotels" },
            { number: "2M+", label: "Exclusive Stays" }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-5xl font-bold text-green-400">{stat.number}</h3>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <button className="mt-10 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-full transition-all shadow-lg">
          Book Your Stay Now
        </button>
      </div>
    </section>
  );
};

export default Experience;
