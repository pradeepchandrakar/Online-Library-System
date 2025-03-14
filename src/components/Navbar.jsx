import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/books", label: "Browse Books" },
    { path: "/add-book", label: "Add Book" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-lg">
          📚 Online Library
        </h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none transition-transform transform hover:scale-110"
        >
          {isOpen ? <X size={30} className="text-white" /> : <Menu size={30} className="text-white" />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block px-5 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-white text-[#2C3E50] shadow-md shadow-blue-500/50 scale-105"
                    : "hover:bg-white hover:text-[#2C3E50] hover:shadow-md hover:shadow-blue-500/50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute left-0 top-16 w-full bg-[#2C3E50] shadow-lg rounded-b-lg p-6 space-y-4 text-center backdrop-blur-lg bg-opacity-80"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <motion.li key={link.path} whileHover={{ scale: 1.05 }}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-6 text-lg font-semibold rounded-lg transition duration-300 ${
                    location.pathname === link.path
                      ? "bg-white text-[#2C3E50] shadow-md shadow-blue-500/50 scale-105"
                      : "hover:bg-white hover:text-[#2C3E50] hover:shadow-md hover:shadow-blue-500/50"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;



