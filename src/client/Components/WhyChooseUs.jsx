import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Why Choose <span className="text-green-500">LuxuryStay?</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          We provide world-class services that make your stay unforgettable.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "5-Star Service",
              description: "Personalized and world-class hospitality.",
              icon: "🌟",
            },
            {
              title: "Prime Locations",
              description: "Stay at breathtaking locations with stunning views.",
              icon: "📍",
            },
            {
              title: "Exclusive Offers",
              description: "Get the best deals and discounts for your dream stay.",
              icon: "💎",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-all">
          Book Your Stay
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
