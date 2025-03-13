import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Online Library</h1>
        
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-300 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-300 transition duration-200"
            >
              Browse Books
            </Link>
          </li>
          <li>
            <Link
              to="/add-book"
              className="block py-2 md:py-0 px-4 md:px-0 hover:text-gray-300 transition duration-200"
            >
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
