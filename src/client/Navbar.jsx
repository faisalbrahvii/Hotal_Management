import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => {
    navigate("/register");
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-bold tracking-wide">
          LuxuryStay<span className="text-yellow-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/Our_Amenities" className="hover:text-yellow-400 transition">Amenities</Link>
          <Link to="/Gallery" className="hover:text-yellow-400 transition">Gallery</Link>
          <Link to="/CheckoutRoom" className="hover:text-yellow-400 transition">Rooms</Link>
          
          {/* Dropdown Menu */}
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              More <MdKeyboardArrowDown size={20} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md overflow-hidden w-40">
                <Link to="/About" className="block px-4 py-2 text-gray-800 hover:bg-yellow-100">About Us</Link>
                <Link to="/Blog" className="block px-4 py-2 text-gray-800 hover:bg-yellow-100">Blog</Link>
                <Link to="/Contact" className="block px-4 py-2 text-gray-800 hover:bg-yellow-100">Contact</Link>
              </div>
            )}
          </div>

          {/* Register Button */}
          <button onClick={openModal} className="bg-yellow-500 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
            Register
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RiCloseFill size={30} /> : <RiMenu3Fill size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 backdrop-blur-md text-white transition-all transform ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} md:hidden`}>
  <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-medium">
    <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">Home</Link>
    <Link to="/Our_Amenities" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">Amenities</Link>
    <Link to="/Gallery" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">Gallery</Link>
    <Link to="/CheckoutRoom" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">Rooms</Link>
    <Link to="/About" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">About Us</Link>
    <Link to="/Blog" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">Blog</Link>
    <Link to="/Contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">Contact</Link>

    <button 
      onClick={() => {
        openModal();
        setMenuOpen(false);
      }} 
      className="bg-yellow-500 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition"
    >
      Register
    </button>
  </div>
</div>

    </header>
  );
};

export default Navbar;
