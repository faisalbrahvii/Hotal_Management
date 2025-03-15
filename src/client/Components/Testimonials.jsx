import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          What Our Guests Say
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Real experiences from our valued customers
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              name: "John Doe",
              review:
                "Amazing experience! The view and service were absolutely stunning.",
              rating: "⭐⭐⭐⭐⭐",
            },
            {
              name: "Sarah Williams",
              review:
                "Luxury at its finest! Everything was perfect, from rooms to food.",
              rating: "⭐⭐⭐⭐⭐",
            },
            {
              name: "David Smith",
              review:
                "Best stay ever! Highly recommended for anyone looking for a 5-star experience.",
              rating: "⭐⭐⭐⭐⭐",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              <p className="text-gray-700 italic">"{testimonial.review}"</p>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                {testimonial.name}
              </h3>
              <p className="text-yellow-500 text-lg">{testimonial.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
