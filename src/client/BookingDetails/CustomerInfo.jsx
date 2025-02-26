import React, { useState } from 'react';
import HeroImage from '../../assets/img/Hero.jpeg';

const CustomerInfo = () => {
    const [showForm, setShowForm] = useState(true);

  return (
    <div className="mt-20 px-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-5 flex">
            <img src={HeroImage} className="w-32 h-32 rounded-lg" alt="Hotel" />
            <div className="ml-4">
              <h1 className="font-bold text-lg text-black/80">Pearl Continental Hotel Karachi</h1>
              <p className="text-gray-600 text-sm">Club Road</p>
              <p className="text-gray-600 text-sm">Karachi, 75530, Pakistan</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg mt-4 p-5">
            <div className="flex justify-between border-b pb-3">
              <div className="text-center">
                <h2 className="text-orange-500 font-bold">Check In</h2>
                <p className="text-black font-semibold">Thu Feb 27, 2025</p>
              </div>
              <div className="text-center">
                <h2 className="text-orange-500 font-bold">Check Out</h2>
                <p className="text-black font-semibold">Fri Feb 28, 2025</p>
              </div>
            </div>

            <div className="flex  items-center  justify-between py-3 border-b">
              <button className="border rounded-md text-black hover:bg-gray-100 px-6 py-2">
                Change
              </button>
              <p className="text-black/75 font-semibold mt-2">1 Night</p>
            </div>

            <div className="py-3 border-b flex justify-between">
              <p className="text-black/75 font-semibold">1 Room</p>
              <p className="text-black/75 font-semibold">USD 160.00</p>
            </div>

            <div className="py-3 border-b flex justify-between">
              <p className="text-black/75 font-semibold">G.S.T</p>
              <p className="text-black/75 font-semibold">USD 24.00</p>
            </div>

            <div className="flex justify-between bg-gray-100 p-4 mt-3 rounded-lg">
              <p className="text-black font-semibold">Total Price:</p>
              <p className="text-black font-semibold">USD 184.00</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-green-100 text-black font-semibold p-4 rounded-md">
            Please complete the below data to secure your booking
          </div>
          {showForm ?(
            <div  className="bg-white shadow-lg rounded-lg mt-4 p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 focus:border-gray-800 outline-none p-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 focus:border-gray-800 outline-none p-1"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:border-gray-800 outline-none p-1"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:border-gray-800 outline-none p-1"
              />
            </div>
            <div className="mt-6 border p-4 rounded-md">
              <h3 className="font-semibold text-black">Room 1: <span className="text-blue-500">Deluxe Twin - Best Available Rate</span></h3>
              <p className="text-sm text-gray-600 mt-2">
                Cancellation Policy: Modifications or cancellations are permitted 48 hours prior to arrival.
                If cancelled within 48 hours of arrival, one night's room rental will be charged.
              </p>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Guest Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:border-gray-800 outline-none p-1"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Special Request</label>
              <textarea
                className="w-full border border-gray-400 focus:border-gray-800 outline-none p-2 rounded-md"
                rows="3"
              ></textarea>
            </div>

            <div className="mt-6 text-right">
              <button  onClick={() => setShowForm(false)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-semibold">
                Continue →
              </button>
            </div>
          </div>
          ):(
            <div className="bg-white shadow-lg rounded-lg mt-4 p-6 text-center text-black font-semibold text-2xl">
              Hello
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
