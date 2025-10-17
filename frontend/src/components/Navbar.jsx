import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // <-- Update this path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Brand New Machines",
    "Used Machines",
    "Tools",
    "Spare Parts",
    "Blogs",
  ];

  return (
    <nav className="bg-[#ff6600] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-30 p-2">
          
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="MachineStore Logo"
              className="w-50 h-20 object-contain"
            />
           
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-lg md:text-xl hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Login Button (Desktop) */}
          <div className="hidden md:flex">
            <button className="bg-white text-[#ff6600] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-lg md:text-xl">
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#ff6600] px-4 pb-4 space-y-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-white hover:text-black transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-white text-[#ff6600] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
