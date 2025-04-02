  import React, { useRef, useState } from "react";
  import HeroImage from "../../assets/img/Hero.jpeg";
  import { FaArrowDown } from "react-icons/fa6";
  import { LuBed } from "react-icons/lu";
  import { CiUser } from "react-icons/ci";
  import { MdInbox } from "react-icons/md";
  import { DELUXE, PEARL, EXECUTIVE } from "../../Data/data.js";

  const Gallery = () => {
    const [selectedRate, setSelectedRate] = useState("");
    const gallery = useRef(null);

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
        <div ref={gallery} className="mx-auto py-12 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-4xl font-extrabold text-gray-800 text-center md:text-left">
              Our Gallery
            </h2>
            <select
              onChange={(e) => setSelectedRate(e.target.value)}
              className="mt-4 md:mt-0 border border-gray-300 rounded-md px-4 py-2 bg-gray-100 text-gray-700 focus:ring-2 focus:ring-blue-400 transition"
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
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">{name} Rooms</h3>
                  <div className="flex overflow-x-auto space-x-6 scrollbar-hide px-2">
                    {filteredRooms.map((room, index) => (
                      <div
                        key={index}
                        className="min-w-[320px] bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                      >
                        <img
                          src={room.image}
                          className="h-56 w-full object-cover rounded-t-xl"
                          alt={room.name}
                        />
                        <div className="p-6">
                          <h4 className="text-xl font-semibold text-gray-800">{room.name}</h4>
                          <div className="flex items-center justify-between text-gray-600 mt-2 text-sm">
                            <span className="flex items-center gap-2">
                              <LuBed /> {room.bed}
                            </span>
                            <span className="flex items-center gap-2">
                              <MdInbox /> {room.size}
                            </span>
                            <span className="flex items-center gap-2">
                              <CiUser /> {room.people}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <h5 className="text-lg font-bold text-red-500">${room.price}</h5>
                            <button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-semibold rounded-lg px-6 py-3 transition duration-300 shadow-md">
                              Book Now
                            </button>
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
