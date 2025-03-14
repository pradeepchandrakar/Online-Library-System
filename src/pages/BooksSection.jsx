import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BooksSection = ({ popularBooks, title = "Popular Books" }) => {
  if (!popularBooks || popularBooks.length === 0) {
    return (
      <div className="text-center text-gray-400 text-lg py-6">
        No books available 😞
      </div>
    );
  }

  return (
    <motion.div
      className="mx-auto p-6 rounded-lg shadow-xl mt-6 bg-[#1E293B] text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">
        {title}
      </h2>

      {/* ✅ Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {popularBooks.map((book) => (
          <motion.div
            key={book.id}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-500 border border-gray-700"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* ✅ Book Image */}
            <motion.img
              src={book.cover_image}
              alt={book.title}
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transition-all duration-500 border border-gray-600"
              whileHover={{ scale: 1.1, rotate: 2 }}
            />

            <h3 className="text-xl font-semibold text-yellow-300">{book.title}</h3>
            <p className="text-gray-300">by {book.author}</p>
            <p className="text-yellow-400 font-medium text-lg mb-5">⭐ {book.rating} / 5.0</p>

            {/* ✅ View Details Button with Glow Effect */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                to={`/books/details/${book.id}`}
                className=" px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-yellow-400"
              >
                View Details
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BooksSection;


