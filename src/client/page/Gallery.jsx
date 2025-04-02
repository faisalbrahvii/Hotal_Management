  import React, { useEffect, useRef, useState } from "react";
  import HeroImage from "../../assets/img/Hero.jpeg";
  import { FaArrowDown } from "react-icons/fa6";
  import { LuBed } from "react-icons/lu";
  import { CiUser } from "react-icons/ci";
  import { MdInbox } from "react-icons/md";
  import { DELUXE, PEARL, EXECUTIVE } from "../../Data/data.js";
  import { Link, useNavigate } from 'react-router-dom';

  const Gallery = () => {
    const [selectedRate, setSelectedRate] = useState("");
    const gallery = useRef(null);
    const navigate = useNavigate();
      const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userData")); 
        if (user) {
          setIsLoggedIn(true);
        }
      }, []); 
    
    const scrollToGallery = () => {
      gallery.current.scrollIntoView({ behavior: "smooth" });
    };

    const filterRoomsByRate = (rooms) => {
      if (!selectedRate) return rooms;
      const [min, max] = selectedRate.split("-").map(Number);
      return rooms.filter((room) => room.price >= min && room.price <= max);
    };

    return (
      <div>
        {/* Hero Section */}
        <div
          className="w-full bg-zinc-200 pt-20 sm:pt-28 md:pt-32 lg:pt-40 overflow-hidden relative"
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/40 text-white text-center p-6 sm:p-10 rounded-lg mx-4 sm:mx-auto max-w-lg">
            <p className="font-serif text-3xl sm:text-5xl">Find Your Peace 🕊</p>
            <h1 className="text-lg sm:text-2xl font-sans mt-4">
              The Place where you are looking for
            </h1>
            <button
              ref={gallery}
              className="mt-6 border py-2 px-8 sm:px-16 bg-white text-black transition hover:bg-gray-600 hover:text-white rounded-lg flex items-center gap-2 mx-auto"
              onClick={scrollToGallery}
            >
              <FaArrowDown />
              Explore
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        <div ref={gallery} className="max-w-9xl mx-auto py-12 px-6 sm:px-8">
  {/* Header and Filter */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
  <h2 className="text-4xl sm:text-5xl font-bold text-gray-700 text-center md:text-left 
               relative before:absolute before:w-16 before:h-1 before:bg-green-600 
               before:-bottom-2 before:left-1/2 before:-translate-x-1/2 
               md:before:left-0 md:before:translate-x-0">
  Our <span className="text-green-600">Gallery</span>
</h2>

    <select
      onChange={(e) => setSelectedRate(e.target.value)}
      className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-700 focus:ring-2 focus:ring-blue-400 transition"
    >
      <option value="">Filter by Price</option>
      <option value="30-40">$30 - $40</option>
      <option value="40-50">$40 - $50</option>
      <option value="50-60">$50 - $60</option>
      <option value="60-70">$60 - $70</option>
    </select>
  </div>

  {/* Room Sections */}
  {[{ name: "DELUXE", rooms: DELUXE }, { name: "PEARL", rooms: PEARL }, { name: "EXECUTIVE", rooms: EXECUTIVE }].map(
    ({ name, rooms }, idx) => {
      const filteredRooms = filterRoomsByRate(rooms);
      return (
        <div key={idx} className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">{name} Rooms</h3>

          {/* Scrollable Container */}
          <div className="flex overflow-x-auto space-x-6 scrollbar-hide px-2 snap-x snap-mandatory">
            {filteredRooms.map((room, index) => (
              <div
                key={index}
                className="min-w-[90%] sm:min-w-[320px] bg-white rounded-lg shadow-md transform hover:scale-[1.02] transition duration-300 ease-in-out snap-center"
              >
                <img
                  src={room.image}
                  className="h-52 w-full object-cover rounded-t-lg"
                  alt={room.name}
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-800">{room.name}</h4>

                  {/* Features */}
                  <div className="flex justify-between text-gray-600 mt-3 text-sm">
                    <span className="flex items-center gap-1">
                      <LuBed size={18} /> {room.bed}
                    </span>
                    <span className="flex items-center gap-1">
                      <MdInbox size={18} /> {room.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <CiUser size={18} /> {room.people}
                    </span>
                  </div>

                  {/* Price & Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between mt-5 gap-3">
                    <h5 className="text-lg font-bold text-red-500">${room.price}</h5>
                    {isLoggedIn ? (
                      <Link to={`/CustomerInfo/${room.id}`}>
                        <button className="w-full sm:w-auto bg-black text-white font-semibold py-2 px-5 rounded-md transition hover:bg-gray-800 hover:shadow-md">
                          Book Now
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => navigate("/register")}
                        className="w-full sm:w-auto bg-red-600 text-white font-semibold py-2 px-5 rounded-md transition hover:bg-red-700 hover:shadow-md"
                      >
                        Register to Book
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  )}
</div>


      </div>
    );
  };

  export default Gallery;
