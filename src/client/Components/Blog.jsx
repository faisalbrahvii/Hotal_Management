import React from "react";
import HeroImage from "../../assets/img/Hero.jpeg";

const Blog = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Get Exclusive Deals & Updates
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mt-4">
          Subscribe to our newsletter and stay updated with our latest offers and news.
        </p>

        {/* Email Subscription Form */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 text-gray-800 rounded-full outline-none"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
