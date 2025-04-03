import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const RoomBooking = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle the button click and navigate to the checkout page
  const handleBookNow = () => {
    navigate('/CheckoutRoom'); // Redirect to the checkout page
  };

  return (
    <div>
      <div onClick={handleBookNow}  className="absolute bottom-[-15px] w-full px-3 sm:px-4 animate-fadeIn">
        <div className="container mx-auto border h-auto flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 bg-gray-100 rounded-lg gap-4 shadow-lg">
          {/* Check-in Field */}
          <div className="flex flex-col items-start w-full sm:w-1/5">
            <label htmlFor="checkIn" className="text-xs sm:text-sm font-semibold mb-1">
              Check-in <span className="text-gray-400">(i)</span>
            </label>
            <input
              type="date"
              id="checkIn"
              className="border rounded-md w-full p-2 text-xs sm:text-sm focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Check-out Field */}
          <div className="flex flex-col items-start w-full sm:w-1/5">
            <label htmlFor="checkOut" className="text-xs sm:text-sm font-semibold mb-1">
              Check-out
            </label>
            <input
              type="date"
              id="checkOut"
              className="border rounded-md w-full p-2 text-xs sm:text-sm focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Guests Field */}
          <div className="flex flex-col items-start w-full sm:w-1/5">
            <label htmlFor="guests" className="text-xs sm:text-sm font-semibold mb-1">
              Guests
            </label>
            <input
              type="number"
              id="guests"
              min="1"
              className="border rounded-md w-full p-2 text-xs sm:text-sm focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Promo Code Field */}
          <div className="flex flex-col items-start w-full sm:w-1/5">
            <label htmlFor="promo" className="text-xs sm:text-sm font-semibold mb-1">
              Promo
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter promo code"
              className="border rounded-md w-full p-2 text-xs sm:text-sm focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Book Now Button */}
          <button
            // Handle the button click
            className="bg-green-600 text-white font-semibold py-2 px-5 sm:mt-4 rounded-lg hover:bg-green-700 w-full sm:w-auto focus:ring-2 focus:ring-green-400"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomBooking;
