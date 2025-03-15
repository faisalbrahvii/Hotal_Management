import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Our Rooms</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Reservation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Reservations</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Request Invoice</a></li>
              <li><a href="#" className="hover:text-white">Find a Reservation</a></li>
              <li><a href="#" className="hover:text-white">Accommodation</a></li>
              <li><a href="#" className="hover:text-white">Destination Guides</a></li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Mon – Fri: 12AM – 10PM</li>
              <li>Saturday: 9AM – 5PM</li>
              <li>Sunday: 11AM – 3PM</li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p className="text-gray-400">
              Unit 7 / 91-93 Macleay St.<br />
              Potts Point, New South Wales,<br />
              Australia 2011
            </p>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-10 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} LuxuryStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
