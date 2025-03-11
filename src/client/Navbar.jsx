import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { RiMenu2Fill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => {
    navigate("/register"); 
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className='flex items-center justify-between p-4 md:p-6 border-b border-gray-700 rounded-b-xl shadow-md'>
        <Link to="/">
          <h1 className='text-2xl font-semibold text-white'>LuxuryStay Hospitality</h1>
        </Link>
        <div className='hidden md:flex'>
          <ul className='flex items-center gap-4 text-lg text-white'>
            <Link to="/"><li className='px-4 py-2 hover:bg-gray-700 transition'>Home</li></Link>
            <Link to="/Our_Amenities"><li className='px-4 py-2 hover:bg-gray-700 transition'>Our Amenities</li></Link>
            <Link to="/Gallery"><li className='px-4 py-2 hover:bg-gray-700 transition'>Gallery</li></Link>
            <Link to="/CheckoutRoom"><li className='px-4 py-2 hover:bg-gray-700 transition'>Rooms</li></Link>
            <Link to="/About"><li className='px-4 py-2 hover:bg-gray-700 transition'>Blog</li></Link>
            <button onClick={openModal} className="border px-5 py-1 hover:bg-gray-700 transition">Register</button>
          </ul>
        </div>
        <div className='text-white md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <RiMenu2Fill size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
