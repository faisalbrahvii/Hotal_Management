import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getPakistanTime = () => {
      const pakistanTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Karachi',
        hour: 'numeric',
        hour12: false,
      }).format(new Date());

      const hour = parseInt(pakistanTime, 10);
      if (hour >= 5 && hour < 12) {
        setGreeting("Good Morning! ☀️");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good Afternoon! 🌤");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Good Evening! 🌙");
      } else {
        setGreeting("Good Night! 🌌");
      }
    };

    getPakistanTime();
    const interval = setInterval(getPakistanTime, 60000); 
    return () => clearInterval(interval);
  }, []);

  const openModal = () => {
    navigate("/register");
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/CheckoutRoom" className="hover:text-yellow-400 transition">BookRooms</Link>
          <Link to="/Our_Amenities" className="hover:text-yellow-400 transition">Our Amenities</Link>
        </nav>

        <Link to="/" className="text-white text-3xl font-bold tracking-wide">
          LuxuryStay<span className="text-yellow-400">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About Us</Link>
          <button
            onClick={openModal}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg px-6 py-2 transition-all"
          >
            Register
          </button>
        </nav>

        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RiCloseFill size={30} /> : <RiMenu3Fill size={30} />}
          </button>
        </div>
      </div>

      <div
  className={`fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-lg text-white transform transition-transform duration-500 ease-in-out ${
    menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
  } md:hidden flex flex-col items-center justify-center`}
>
  <button
    onClick={() => setMenuOpen(false)}
    className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400 transition-all duration-300"
  >
    <RiCloseFill />
  </button>

  <h2 className="text-2xl font-semibold mb-4 animate-fadeIn">
    {greeting}
  </h2>

  <div className="flex flex-col items-center gap-4 text-2xl font-medium">
  {[
    { name: "Home", path: "/" },
    { name: "BookRooms", path: "/CheckoutRoom" },
    { name: "Our_Amenities", path: "/Our_Amenities" },
    { name: "Gallery", path: "/Gallery" },
    { name: "About Us", path: "/About" }
  ].map((item, index) => (
    <React.Fragment key={index}>
      <Link
        to={item.path}
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 animate-fadeIn relative group"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {item.name}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>

      {index !== 4 && <hr className="w-24 border-t border-white/30 animate-slideIn" />}
    </React.Fragment>
  ))}

  <button
    onClick={openModal}
    className="relative overflow-hidden bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg px-8 py-3 transition-all group mt-4 animate-fadeIn pulse-effect"
  >
    Register
    <span className="absolute inset-0 bg-yellow-400 opacity-10 group-hover:opacity-30 transition-all"></span>
  </button>
</div>

</div>

    </header>
  );
};

export default Navbar;
