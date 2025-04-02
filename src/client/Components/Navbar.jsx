import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // ✅ Check Login Status on Load
  useEffect(() => {
    const checkLoginStatus = () => {
      const user = JSON.parse(localStorage.getItem("currentUser")); // Parse stored data
      setIsLoggedIn(!!user);
    };

    checkLoginStatus();

    // ✅ Listen for localStorage changes (for multi-tab sync)
    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  // ✅ Logout Handler
  const handleLogout = () => {
    localStorage.clear(); // ✅ Clears all local storage
    setIsLoggedIn(false);
    setMenuOpen(false); // Close menu if open
    navigate("/"); // Redirect to home
    window.location.reload(); // ✅ Ensures UI updates properly
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        {/* Left Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/CheckoutRoom" className="hover:text-yellow-400 transition">BookRooms</Link>
          <Link to="/Our_Amenities" className="hover:text-yellow-400 transition">Our Amenities</Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-bold tracking-wide">
          LuxuryStay<span className="text-yellow-400">.</span>
        </Link>

        {/* Right Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About Us</Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-6 py-2 transition-all"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-600 text-white  rounded px-7 py-1 transition-all"
            >
              register
            </Link>
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RiCloseFill size={30} /> : <RiMenu3Fill size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-lg text-white flex flex-col items-center justify-center transition-all duration-500">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400 transition-all duration-300"
          >
            <RiCloseFill />
          </button>

          {/* Mobile Nav Links */}
          {[
            { name: "Home", path: "/" },
            { name: "BookRooms", path: "/CheckoutRoom" },
            { name: "Our Amenities", path: "/Our_Amenities" },
            { name: "Gallery", path: "/Gallery" },
            { name: "About Us", path: "/About" }
          ].map((item, index) => (
            <React.Fragment key={index}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
              >
                {item.name}
              </Link>
              {index !== 4 && <hr className="w-24 border-t border-white/30" />}
            </React.Fragment>
          ))}

          {/* Login/Logout Buttons */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-8 py-3 transition-all mt-4"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-green-500 hover:bg-green-600 text-white  rounded px-7 py-1 transition-all mt-4"
            >
              register
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
