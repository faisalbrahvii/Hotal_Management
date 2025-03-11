import React from 'react'
import HeroImage from '../../assets/img/imageone.jpg';
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
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Our_Amenities = () => {

  const images = [
    "https://source.unsplash.com/800x500/?hotel,room",
    "https://source.unsplash.com/800x500/?resort,pool",
    "https://source.unsplash.com/800x500/?spa,wellness",
    "https://source.unsplash.com/800x500/?luxury,hotel",
    "https://source.unsplash.com/800x500/?beach,resort",
  ];


  return (
    <div>
      <div
             name="home"
             className="min-h-screen bg-zinc-200 pt-[80px] overflow-hidden"
             style={{
               backgroundImage: `url(${HeroImage})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
             }}
           >
             <div className="mt-24 sm:mt-36 h-full">
               <div className="bg-black/40 text-white text-center p-6 sm:p-8 rounded-lg mx-4 sm:mx-auto">
                 <p className="font-serif text-4xl sm:text-6xl">Find Your Peace 🕊</p>
                 <h1 className="text-lg sm:text-2xl font-sans mt-4">
                   The Place where you are looking for
                 </h1>
                
               </div>
             </div>
           </div>
  
    <div className='w-full flex justify-center bg-gray-100 p-10'>     
    <div className="  flex items-center  justify-center ">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-lg overflow-hidden grid grid-cols-2 gap-10">
        <div className="p-8 bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-800">Executive Room</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod sapiente deleniti provident!
          </p>

          <div className="flex items-center gap-6 text-green-600 text-xl mt-4">
            <IoPeopleSharp className="hover:text-green-700 transition duration-200" />
            <FaBedPulse className="hover:text-green-700 transition duration-200" />
            <FaBath className="hover:text-green-700 transition duration-200" />
            <FaWifi className="hover:text-green-700 transition duration-200" />
          </div>

          <div className="mt-6">
            <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg text-sm px-6 py-3 transition duration-300">
              Click here to check more!
            </button>
          </div>
        </div>

        <div className="p-8 bg-white">
          <h2 className="text-xl font-semibold text-gray-700">Reserve Your Room</h2>
          <hr className="my-4 border-gray-300" />

          <h1 className="text-3xl font-bold text-green-600">$280 <span className="text-lg text-gray-600">/ per day</span></h1>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center gap-2">
                <FaCalendarDays className="text-green-600" />
                <p className="font-medium">Start Date:</p>
              </div>
              <h1 className="text-lg font-semibold">24.01.2025</h1>
            </div>

            <div className="flex items-center justify-between text-gray-700">
              <div className="flex items-center gap-2">
                <FaCalendarDays className="text-green-600" />
                <p className="font-medium">End Date:</p>
              </div>
              <h1 className="text-lg font-semibold">28.01.2025</h1>
            </div>

            <div className="flex items-center justify-between text-gray-700">
              <p className="font-medium">Booked:</p>
              <h1 className="text-lg font-semibold">28.01.2025</h1>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <h1 className="text-lg font-bold text-gray-800">DAYS: <span className="text-green-600">3</span></h1>
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg px-10 py-3 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='w-full flex justify-center bg-gray-100'>
    <div className=" container   flex items-center justify-center ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="h-full">
          <img src={HeroImage} alt="Hotel Room" className="w-full h-full object-cover rounded-l-lg" />
        </div>

        <div className="p-8">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide">
            About Us
          </p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            About the Rooms
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero odit 
            consequatur labore, facere aperiam vitae sunt repellat numquam amet corrupti.
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg px-8 py-3 mt-6 transition duration-300 shadow-md">
            Book A Stay
          </button>
        </div>
      </div>
    </div>
    </div>
    <div className="flex justify-center w-full p-10 bg-gray-100">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 bg-white shadow-lg rounded-lg overflow-hidden p-8">
        
        <div className="md:col-span-1 flex flex-col justify-center space-y-4">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide">
            Service
          </p>
          <h1 className="text-3xl font-bold text-gray-800">
            Discover Our Resort-Style Amenities
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Enjoy top-tier services with luxurious amenities designed for your comfort. Whether it's high-speed Wi-Fi, fitness centers, or spa services, we have everything to make your stay memorable.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg px-6 py-3 transition duration-300 shadow-md">
            Book A Stay
          </button>
        </div>

        <div className="md:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {[
              { icon: <CiWifiOn size={25} />, text: "Free WiFi" },
              { icon: <CiShop size={25} />, text: "Shopping" },
              { icon: <GiTunePitch size={25} />, text: "Music Lounge" },
              { icon: <IoBicycleOutline size={25} />, text: "Bike Rentals" },
              { icon: <BsTelephone size={25} />, text: "24/7 Support" },
              { icon: <CiHome size={25} />, text: "Luxury Rooms" },
              { icon: <MdOutlineSportsGymnastics size={25} />, text: "Gym & Fitness" },
              { icon: <PiPersonSimpleSwimLight size={25} />, text: "Swimming Pool" },
              { icon: <CiViewBoard size={25} />, text: "Conference Rooms" },
            ].map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                {amenity.icon}
                <span className="text-gray-700 text-sm font-medium">{amenity.text}</span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
          <div className="w-full bg-gray-100 py-12">
      
      <div className="text-center">
        <p className="font-semibold text-lg text-slate-500 uppercase tracking-wide">
          Amenities
        </p>
        <h1 className="text-3xl font-light text-gray-800 mt-2">
          Follow Us to Discover Amazing Stories
        </h1>
      </div>

      <div className="w-full mt-10 px-6">
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
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex justify-center mt-10 '>
      <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg px-20 py-2 transition duration-300 shadow-md">
            Follow Us
          </button>
      </div>
    </div>




    </div>
  )
}

export default Our_Amenities
