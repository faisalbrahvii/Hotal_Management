import React from 'react'
import HeroImage from '../../assets/img/imageone.jpg';
import HeroImage2 from '../../assets/img/Hero.jpeg';
import HeroImage1 from '../../assets/img/Hero.jpeg';
import { IoPeopleSharp } from "react-icons/io5";
import { FaBedPulse, FaBath, FaWifi, FaCalendarDays } from 'react-icons/fa6';
import { CiWifiOn } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { GiTunePitch } from "react-icons/gi";
import { IoBicycleOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { PiPersonSimpleSwimLight } from "react-icons/pi";
import { CiViewBoard } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay , EffectFade  } from "swiper/modules";
const Our_Amenities = () => {
  

  const images = [
    "https://source.unsplash.com/800x500/?hotel,room",
    "https://source.unsplash.com/800x500/?resort,pool",
    "https://source.unsplash.com/800x500/?spa,wellness",
    "https://source.unsplash.com/800x500/?luxury,hotel",
    "https://source.unsplash.com/800x500/?beach,resort",
  ];

  const heroImages = [
   "https://source.unsplash.com/800x500/?hotel,room",
    "https://source.unsplash.com/800x500/?resort,pool",
    "https://source.unsplash.com/800x500/?spa,wellness",
  ];

  return (
    <div>
      <div className="relative w-full min-h-screen">
      {/* Background Image Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 w-full h-full z-[-]"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Box */}
        <div className="relative flex items-center justify-center min-h-screen px-6">
          <div className="bg-black/50 backdrop-blur-md text-white text-center p-10 sm:p-14 rounded-2xl shadow-xl w-full">
            <h1 className="text-4xl sm:text-6xl font-serif font-bold">
              Find Your Peace 🕊
            </h1>
            <p className="text-lg sm:text-2xl font-sans mt-4">
              The Place where you are looking for
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all">
              Book Your Stay
            </button>
          </div>
        </div>
    </div>
  
           <div className="w-full flex justify-center bg-gray-100 p-6 sm:p-10">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section - Room Details */}
        <div className="p-6 sm:p-8 bg-gray-50 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Executive Room</h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Experience unmatched luxury in our Executive Room, featuring premium comfort and amenities.
          </p>

          {/* Features Icons */}
          <div className="flex items-center gap-5 text-green-600 text-xl mt-5">
            <IoPeopleSharp className="hover:text-green-700 transition duration-200" />
            <FaBedPulse className="hover:text-green-700 transition duration-200" />
            <FaBath className="hover:text-green-700 transition duration-200" />
            <FaWifi className="hover:text-green-700 transition duration-200" />
          </div>

          {/* Learn More Button */}
          <div className="mt-6">
            <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg text-sm sm:text-base px-6 py-3 transition duration-300 shadow-md">
              View More Details
            </button>
          </div>
        </div>

        {/* Right Section - Booking Details */}
        <div className="p-6 sm:p-8 bg-white">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Reserve Your Room</h2>
          <hr className="my-4 border-gray-300" />

          {/* Price */}
          <h1 className="text-3xl sm:text-4xl font-bold text-green-600">
            $280 <span className="text-lg text-gray-600">/ per night</span>
          </h1>

          {/* Booking Details */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center gap-2">
                <FaCalendarDays className="text-green-600" />
                <p className="font-medium">Check-in:</p>
              </div>
              <h1 className="text-lg font-semibold">24.01.2025</h1>
            </div>

            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center gap-2">
                <FaCalendarDays className="text-green-600" />
                <p className="font-medium">Check-out:</p>
              </div>
              <h1 className="text-lg font-semibold">28.01.2025</h1>
            </div>

            <div className="flex items-center justify-between text-gray-700">
              <p className="font-medium">Nights:</p>
              <h1 className="text-lg font-semibold">4</h1>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="flex items-center justify-between mt-8">
            <h1 className="text-lg font-bold text-gray-800">
              Total: <span className="text-green-600">$1120</span>
            </h1>
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-bold rounded-lg px-6 py-3 transition duration-300 shadow-md">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-center bg-gray-100 p-6 sm:p-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section - Image */}
        <div className="h-72 md:h-auto">
          <img
            src={HeroImage}
            alt="Hotel Room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide">
            About Us
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
            About the Rooms
          </h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Experience premium comfort with our well-furnished rooms, designed to provide a 
            relaxing and luxurious stay for our guests.
          </p>

          {/* Book Now Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-lg font-semibold rounded-lg px-6 py-3 mt-6 transition duration-300 shadow-md">
            Book A Stay
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-center w-full p-6 sm:p-10 bg-gray-100">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 bg-white shadow-lg rounded-lg overflow-hidden p-6 sm:p-8">
        
        {/* Left Section - Title & Description */}
        <div className="md:col-span-1 flex flex-col justify-center space-y-4">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide">
            Service
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Discover Our Resort-Style Amenities
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Enjoy top-tier services with luxurious amenities designed for your comfort. From high-speed Wi-Fi to spa treatments, we offer everything to make your stay unforgettable.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg px-6 py-3 transition duration-300 shadow-md">
            Book A Stay
          </button>
        </div>

        {/* Right Section - Amenities List */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {[
              { icon: <CiWifiOn size={28} className="text-green-600" />, text: "Free WiFi" },
              { icon: <CiShop size={28} className="text-green-600" />, text: "Shopping" },
              { icon: <GiTunePitch size={28} className="text-green-600" />, text: "Music Lounge" },
              { icon: <IoBicycleOutline size={28} className="text-green-600" />, text: "Bike Rentals" },
              { icon: <BsTelephone size={28} className="text-green-600" />, text: "24/7 Support" },
              { icon: <CiHome size={28} className="text-green-600" />, text: "Luxury Rooms" },
              { icon: <MdOutlineSportsGymnastics size={28} className="text-green-600" />, text: "Gym & Fitness" },
              { icon: <PiPersonSimpleSwimLight size={28} className="text-green-600" />, text: "Swimming Pool" },
              { icon: <CiViewBoard size={28} className="text-green-600" />, text: "Conference Rooms" },
            ].map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:scale-105">
                {amenity.icon}
                <span className="text-gray-700 text-sm sm:text-base font-medium">{amenity.text}</span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
    <div className="w-full bg-gray-100 py-12">
  {/* Header */}
  <div className="text-center px-4">
    <p className="font-semibold text-lg text-slate-500 uppercase tracking-wide">
      Amenities
    </p>
    <h1 className="text-2xl sm:text-3xl font-light text-gray-800 mt-2">
      Follow Us to Discover Amazing Stories
    </h1>
  </div>

  <div className="w-full mt-10 px-4 sm:px-6">
    <Swiper
      slidesPerView={1} 
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
      className="w-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center">
            <img
              src={img}
              alt={`Amenity ${index + 1}`}
              className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Follow Button */}
  <div className="flex justify-center mt-10">
    <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg px-16 sm:px-20 py-2 transition duration-300 shadow-md">
      Follow Us
    </button>
  </div>
</div>





    </div>
  )
}

export default Our_Amenities
