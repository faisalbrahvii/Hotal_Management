import React from "react";
import HeroImage from "../assets/img/Hero.jpeg";

const Blog = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen px-4 sm:px-8 lg:px-16">
      <div
        name="home"
        className="relative w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroImage})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Box */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center p-6 sm:p-10 lg:p-16">
          {/* Title & Description */}
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide">
            STORIES DELIVERED STRAIGHT
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mt-4 text-white drop-shadow-lg">
            Sign up for exclusive offers from us
          </h1>

          {/* Subscription Form */}
          <div className="mt-6 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-full shadow-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none text-gray-800 text-lg"
            />
            <button className="mt-4 w-full py-3 px-8 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all transform hover:scale-105">
              Subscribe Now
            </button>
          </div>

          {/* Additional Info */}
          <p className="mt-4 text-sm text-gray-300">
            No spam, only valuable content. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
