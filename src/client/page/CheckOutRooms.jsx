import React, { useState, useEffect } from 'react';
import HeroImage from '../../assets/img/Hero.jpeg';
import { IoClose } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { SearchData } from '../../Data/data';

const CheckOutRooms = () => {
  const [todayDate, setTodayDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guests, setGuests] = useState(""); // State for user input of guests
  const [filteredRooms, setFilteredRooms] = useState([]); // State for filtered rooms
  const [selectedRoom, setSelectedRoom] = useState(null); // State for the selected room
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [promo, setPromo] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setTodayDate(`${year}-${month}-${day}`);
  }, []);

  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  const handleBookNow = () => {
    if (!checkIn || !checkOut || !guests) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    const numGuests = Number(guests);
    if (!isNaN(numGuests) && numGuests > 0) {
      const filtered = SearchData.filter(
        (room) => Number(room.Guests) === numGuests
      );
      setFilteredRooms(filtered);
    } else {
      setFilteredRooms([]);
    }

   
  };

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData")); 
    if (user) {
      setIsLoggedIn(true);
    }
  }, []); 
  
  return (
    <div>
      <div
        name="home"
        className="w-full bg-zinc-200 pt-[80px] overflow-hidden"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="mt-24 sm:mt-36 h-full">
          <div className="bg-black/40 text-white text-center p-6 sm:p-8 rounded-lg mx-4 sm:mx-auto">
            <p className="font-serif text-4xl sm:text-6xl">Welcome to Hotel</p>
            <h1 className="text-lg sm:text-2xl font-sans mt-4">
              The Place where you are looking for
            </h1>
            <Link to="/Gallery">
              <button className="mt-6 border py-2 px-10 sm:px-20 bg-white text-black transition-all hover:bg-slate-400 hover:text-white rounded-lg">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10 px-4">
      <div className="container mx-auto border h-auto flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-100 rounded-lg gap-4">
        {/* Check-in Field */}
        <div className="flex flex-col items-start w-full sm:w-1/5">
          <label htmlFor="checkIn" className="text-sm font-semibold mb-1">
            Check-in <span className="text-gray-400">(i)</span>
          </label>
          <input
            type="date"
            id="checkIn"
            className="border rounded-md w-full p-2 text-sm"
            min={todayDate}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        {/* Check-out Field */}
        <div className="flex flex-col items-start w-full sm:w-1/5">
          <label htmlFor="checkOut" className="text-sm font-semibold mb-1">
            Check-out
          </label>
          <input
            type="date"
            id="checkOut"
            className="border rounded-md w-full p-2 text-sm"
            min={checkIn || todayDate}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        {/* Guests Field */}
        <div className="flex flex-col items-start w-full sm:w-1/5">
          <label htmlFor="guests" className="text-sm font-semibold mb-1">
            Guests
          </label>
          <input
            type="number"
            id="guests"
            placeholder="1"
            className="border rounded-md w-full p-2 text-sm"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        {/* Promo Code Field */}
        <div className="flex flex-col items-start w-full sm:w-1/5">
          <label htmlFor="promo" className="text-sm font-semibold mb-1">
            Promo
          </label>
          <input
            type="text"
            id="promo"
            className="border rounded-md w-full p-2 text-sm"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
          />
        </div>

        {/* Book Now Button */}
        <button
          onClick={handleBookNow}
          className="bg-green-600 text-white font-semibold py-2 px-6 sm:mt-6 rounded-lg hover:bg-green-700 w-full sm:w-auto"
        >
          Book Now
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

      
      </div>

      <section className="py-10 px-4 bg-gray-100">
  {/* Show only filtered rooms after clicking the button */}
  {filteredRooms.length > 0 &&
    filteredRooms.map((room) => (
      <div
        key={room.id}
        className="container mx-auto border rounded-lg shadow-xl overflow-hidden mb-6 bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Room Image Section */}
          <div className="lg:col-span-2 relative">
            <img
              src={room.image}
              alt="Room"
              className="w-full h-64 object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
            />
            <button
              onClick={() => openModal(room)}
              className="absolute bottom-3 right-3 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition shadow-lg"
            >
              📷
            </button>
          </div>

          {/* Room Details Section */}
          <div className="lg:col-span-3 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-xl font-bold text-gray-900 tracking-wide">
                Best Available Rate
              </h2>
              <p className="text-xl text-gray-700 font-semibold">
                USD {room.price}
              </p>
            </div>

            {/* Room Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
              {/* Guests */}
              <div>
                <p className="text-sm font-semibold text-gray-700">Guests</p>
                <div className="flex items-center mt-2 text-xl font-semibold text-gray-900">
                  👤 {room.Guests}
                </div>
              </div>

              {/* Booking Policy */}
              <div>
                <p className="text-sm font-semibold text-gray-700">Booking Policy</p>
                <a href="#" className="text-blue-600 mt-2 block font-medium hover:underline">
                  View Details
                </a>
              </div>

              {/* Price Breakdown */}
              <div>
                <p className="text-sm text-gray-600">475.00 Avg/night</p>
                <p className="text-sm text-gray-600">+ 123.50 taxes & fees</p>
              </div>

              {/* Room Selection */}

            </div>

            {/* Book Now Button */}
           {isLoggedIn ? (
        <Link to={`/CustomerInfo/${room.id}?checkIn=${checkIn}&checkOut=${checkOut}`}>
          <button className="mt-6 w-full sm:w-auto bg-black text-white font-semibold py-2 px-6 rounded-lg transition hover:bg-gray-800 hover:shadow-lg">
            Book Now
          </button>
        </Link>
      ) : (
        <button
          onClick={() => navigate("/register")}
          className="mt-6 w-full sm:w-auto bg-red-500 text-white font-semibold py-2 px-6 rounded-lg transition hover:bg-red-700 hover:shadow-lg"
        >
          Register to Book
        </button>
      )}
    


          </div>
        </div>

        {/* Room Name */}
        <div className="p-4 bg-gray-50 border-t">
          <h3 className="text-lg font-bold text-gray-800">{room.name}</h3>
        </div>
      </div>
    ))}
</section>


      {/* Modal to display selected room details */}
      {isModalOpen && selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500"
            >
              <IoClose />
            </button>

            <div className="max-h-[80vh] overflow-y-auto scroll-hidden">
              <div className="w-full">
                <img
                  src={selectedRoom.image}
                  alt="Room"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedRoom.name}</h1>
          <p className="text-gray-600 text-sm mb-8">
            Experience the ultimate luxury and comfort in our Deluxe Suite King. 
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Description</h2>
            <p className="text-gray-600">
            {selectedRoom.Description}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Bed Type</h2>
            <p className="text-gray-600 flex items-center gap-2">
              <FaBed className="text-lg text-gray-800" /> {selectedRoom.bed}
            </p>
            <p className="text-gray-600 text-sm mt-2">Prices are per room. ${selectedRoom.price}</p>
          </div>
~
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <p className="text-gray-600 flex items-center gap-2">✔ King Bed</p>
              <p className="text-gray-600 flex items-center gap-2">✔ Minibar</p>
              <p className="text-gray-600 flex items-center gap-2">✔ Free Breakfast</p>
              <p className="text-gray-600 flex items-center gap-2">✔ Safe in Room</p>
              <p className="text-gray-600 flex items-center gap-2">✔ Free Wifi</p>
              <p className="text-gray-600 flex items-center gap-2">✔ Telephone</p>
              <p className="text-gray-600 flex items-center gap-2">✔ Air Conditioning</p>
              <p className="text-gray-600 flex items-center gap-2">✔ Desk</p>
              <p className="text-gray-600 flex items-center gap-2">✔ LCD/Plasma TV</p>
              <p className="text-gray-600 flex items-center gap-2">✔ Electronic Key Card</p>
              <p className="text-gray-600 flex items-center gap-2">✔ Safety Deposit Box</p>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutRooms;
