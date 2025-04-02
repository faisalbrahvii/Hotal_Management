  import React, { useEffect, useState } from 'react';
  import HeroImage from '../../assets/img/Hero.jpeg';
  // import { IoIosArrowDown } from "react-icons/io";
  import {SearchData} from "../../Data/data"; 
  import { useParams } from 'react-router-dom';
  import { Link } from 'react-router-dom';
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";

  const CustomerInfo = () => {
    const [userData, setUserData] = useState({ name: "", email: "" });
    const [showForm, setShowForm] = useState(true);
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    
    // Getting query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const checkIn = queryParams.get("checkIn");
    const checkOut = queryParams.get("checkOut");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showForms, setShowForms] = useState(true);

    const handleBookings = () => {
      setShowForm(false); // Hide the form
      setLoading(true); // Show loading state

      setTimeout(() => {
        setLoading(false); // Hide loading
        setSuccess(true); // Show success message
      }, 2000); // 2 seconds delay
    };
    useEffect(() => {
      // Fetch Room Data
      const selectedRoom = SearchData.find((r) => r.id === Number(id));
      setRoom(selectedRoom);

      // Fetch User Data from Local Storage
      const storedUser = JSON.parse(localStorage.getItem("userData"));
      if (storedUser) {
        setUserData({
          name: storedUser.name || "Guest User",
          email: storedUser.email || "No Email Found",
        });
      }
    }, [id]); // Runs once when id changes

    if (!room) {
      return <div className="text-center mt-20 text-black font-bold p-10">Room not found!</div>;
    }

    

    // Validation Schema
    const validationSchema = Yup.object({
      firstName: Yup.string()
        .min(2, "First Name must be at least 2 characters")
        .required("First Name is required"),
      lastName: Yup.string()
        .min(2, "Last Name must be at least 2 characters")
        .required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email Address is required"),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref("email"), null], "Emails must match")
        .required("Confirm Email Address is required"),
      guestName: Yup.string(),
      specialRequest: Yup.string(), // Optional
    });

    const validationSchema2 = Yup.object({
      streetAddress: Yup.string()
        .min(3, "Street Address must be at least 3 characters")
        .required("Street Address is required"),
      city: Yup.string()
        .min(2, "City must be at least 2 characters")
        .required("City is required"),
      postalCode: Yup.string()
        .matches(/^\d+$/, "Postal Code must be a number")
        .required("Postal Code is required"),
      country: Yup.string()
        .required("Please select a country"),
      code: Yup.string()
        .required("Please select a code"),
    });
    

    

    const handleSubmit = (values) => {
      console.log("Form Submitted:", values);
      setShowForm(false); // Hide form on success
    };

    return (
      <div className="mt-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="w-full md:w-auto md:col-span-1 mb-10">
    <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col sm:flex-row">
      <img src={room.image} className="w-full sm:w-32 h-32 rounded-lg object-cover" alt="Hotel" />
      <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
        <h1 className="font-bold text-lg text-black/80">
        {room.name}
        </h1>
        <p className="text-gray-600 text-sm">Club Road</p>
        <p className="text-gray-600 text-sm">Karachi, 75530, Pakistan</p>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-lg mt-4 p-5">
      <div className="flex flex-col sm:flex-row justify-between border-b pb-3 text-center">
        <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
          <h2 className="text-orange-500 font-bold">Check In</h2>
          <p className="text-black font-semibold">{checkIn}</p>
        </div>
        <div className="w-full sm:w-1/2">
          <h2 className="text-orange-500 font-bold">Check Out</h2>
          <p className="text-black font-semibold">{checkOut}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between py-3 border-b">
        <Link to="/CheckoutRoom"> 
        <button className="border rounded-md text-black hover:bg-green-700 hover:text-white px-6 py-2 w-full sm:w-auto">
          Change
        </button>
        </Link>
        <p className="text-black/75 font-semibold mt-2 sm:mt-0">1 Night</p>
      </div>

      <div className="py-3 border-b flex justify-between">
        <p className="text-black/75 font-semibold">1 Room</p>
        <p className="text-black/75 font-semibold">USD {room.price}</p>
      </div>

      <div className="py-3 border-b flex justify-between">
        <p className="text-black/75 font-semibold">G.S.T</p>
        <p className="text-black/75 font-semibold">USD {(room.price * 0.15).toFixed(2)}</p>
      </div>

      <div className="flex justify-between bg-gray-100 p-4 mt-3 rounded-lg">
        <p className="text-black font-semibold">Total Price:</p>
        <p className="text-black font-semibold">USD {(room.price * 1.15).toFixed(2)}</p>
      </div>
    </div>

    <div className="mt-5 p-2">
      <h1 className="text-red-500 text-lg font-bold text-center sm:text-left">
        Read Me Important !
      </h1>
      
      <div className="mt-5 text-center sm:text-left">
        <h1 className="text-slate-700 text-lg font-serif">Accept Credit Cards :</h1>
        
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 p-4">
          <img src={HeroImage} className="w-16 sm:w-20" alt="Card 1" />
          <img src={HeroImage} className="w-16 sm:w-20" alt="Card 2" />
          <img src={HeroImage} className="w-16 sm:w-20" alt="Card 3" />
          <img src={HeroImage} className="w-16 sm:w-20" alt="Card 4" />
        </div>
      </div>
    </div>
  </div>

  <div className="w-full md:col-span-2 mb-10">
    {/* Booking Instruction */}
    <div className="bg-green-100 text-black font-semibold p-4 rounded-md">
      Please complete the below data to secure your booking
    </div>

    {showForm ? (
      <div className="bg-white shadow-lg rounded-lg mt-4 p-6">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          confirmEmail: "",
          guestName: "",
          specialRequest: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Form Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  className="w-full border-b border-gray-400 focus:border-gray-800 outline-none p-1"
                />
                <ErrorMessage name="firstName" component="p" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="w-full border-b border-gray-400 focus:border-gray-800 outline-none p-1"
                />
                <ErrorMessage name="lastName" component="p" className="text-red-500 text-sm" />
              </div>
            </div>

            {/* Email Inputs */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Field
                type="email"
                name="email"
                className="w-full border-b border-gray-400 focus:border-gray-800 outline-none p-1"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Email Address <span className="text-red-500">*</span>
              </label>
              <Field
                type="email"
                name="confirmEmail"
                className="w-full border-b border-gray-400 focus:border-gray-800 outline-none p-1"
              />
              <ErrorMessage name="confirmEmail" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Room Info */}
            <div className="mt-6 border p-4 rounded-md">
              <h3 className="font-semibold text-black">
                Room 1: <span className="text-blue-500">{room.name} - Best Available Rate</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Cancellation Policy: Modifications or cancellations are permitted 48 hours prior to arrival.
                If cancelled within 48 hours of arrival, one night's room rental will be charged.
              </p>
            </div>

            {/* Guest Name */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Guest Name <span className="text-black/45 text-sm">* Optional</span>
              </label>
              <Field
                type="text"
                name="guestName"
                className="w-full border-b border-gray-400 focus:border-gray-800 outline-none p-1"
              />
              <ErrorMessage name="guestName" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Special Request */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Special Request <span className="text-black/45 text-sm">* Optional</span></label>
              <Field
                as="textarea"
                name="specialRequest"
                className="w-full border border-gray-400 focus:border-gray-800 outline-none p-2 rounded-md"
                rows="3"
              />
            </div>

            {/* Continue Button */}
            <div className="mt-6 text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
              >
                Continue →
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    ) : (

      <div className="bg-white shadow-lg rounded-lg mt-4 p-6 text-black font-semibold text-2xl w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Side - Form Inputs */}
        <div>
          <div>
            <label className="block text-sm font-medium mt-2 text-gray-700">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input type="text" className="w-full border-b border-gray-400 text-sm text-gray-700 focus:border-gray-800 outline-none" required />
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-3 gap-5">
            <div className="w-full">
              <label className="block text-sm font-medium mt-2 text-gray-700">
                City or Town <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border-b border-gray-400 text-sm text-gray-700 focus:border-gray-800 outline-none" required />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium mt-2 text-gray-700">  
                Postal / Zip Code <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border-b text-sm text-gray-700 border-gray-400 focus:border-gray-800 outline-none" />
            </div>
          </div>

          <div className="mt-2">
            <label className="block text-sm font-medium mt-2 text-gray-700">
              Select Country <span className="text-red-500">*</span>
            </label>
            <select className="w-full border-b text-sm text-gray-700 border-gray-400 focus:border-gray-800 outline-none">
              <option value="">-- Select Country --</option>
              <option value="">USA</option>
              <option value="">PKR</option>
              <option value="">IND</option>
              <option value="">UAE</option>
              <option value="">IRAQ</option>
            </select>
          </div>

          <div className="mt-2">
            <label className="block text-sm font-medium mt-2 text-gray-700">
              Select Code <span className="text-red-500">*</span>
            </label>
            <select className="w-full border-b text-sm text-gray-700 border-gray-400 focus:border-gray-800 outline-none">
              <option value="">-- Select Code --</option>
              <option value="US">+1 (USA)</option>
              <option value="UK">+44 (UK)</option>
              <option value="IN">+91 (India)</option>
              <option value="AU">+61 (Australia)</option>
              <option value="JP">+81 (Japan)</option>
              <option value="FR">+33 (France)</option>
              <option value="DE">+49 (Germany)</option>
              <option value="CA">+1 (Canada)</option>
              <option value="BR">+55 (Brazil)</option>
              <option value="ZA">+27 (South Africa)</option>
              <option value="Pkr">+92 (Pakistan)</option>
            </select>
          </div>
        </div>

        {/* Right Side - User Info */}
        <div>
          <div className="border rounded-xl shadow-md p-4">
            <div className="flex justify-between">
              <div className="p-3">
                <h1 className="font-extrabold text-sm">Name:</h1>
                <p className="font-sans text-black/55 text-sm">{userData.name}</p>
              </div>
              <div className="p-3">
                <img src={HeroImage} className="w-10 rounded-full h-10" alt="User" />
              </div>
            </div>
            <div className="p-3">
              <h1 className="font-extrabold text-sm">Email:</h1>
              <p className="font-sans text-black/55 text-sm">{userData.email}</p>
            </div>
          </div>

          <div className="p-4 mt-8">
            <label className="block text-sm font-medium mt-2 text-gray-700">
              Postal / Zip Code <span className="text-red-500">*</span>
            </label>
            <input type="text" className="w-full border-b border-gray-400 focus:border-gray-800 outline-none" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex flex-col items-center sm:items-end">
        <button
          onClick={handleBookings}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-semibold flex items-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Loading...
            </>
          ) : (
            "Continue →"
          )}
        </button>

        {success && <h1 className="text-green-600 text-lg mt-2 sm:mt-0">Thanks for booking the room!</h1>}
      </div>
    </div>
    
            )}
          </div>
        </div>
      </div>
    );
  };

  export default CustomerInfo;