import React from "react";
import { Link } from "react-router-dom";

const BooksSection = ({ popularBooks, title = "Popular Books" }) => {
  // ✅ अगर कोई बुक नहीं मिली, तो Placeholder दिखाएँ  
  if (!popularBooks || popularBooks.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg py-6">
        No books available 😞
      </div>
    );
  }

  return (
    <div className="mx-auto bg-white p-6 rounded-lg shadow-md mt-6 animate-fadeInUp">
      {/* ✅ Section Title */}
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">{title}</h2>

      {/* ✅ Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {popularBooks.map((book) => (
          <div
            key={book.id}
            className="bg-gray-100 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg hover:rotate-1 flex flex-col items-center text-center"
          >
            {/* ✅ Book Image */}
            <img
              src={book.cover_image}
              alt={book.title}
              className="w-full h-44 object-cover rounded-lg mb-3 transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-2"
            />
            {/* ✅ Book Title */}
            <h3 className="text-lg font-semibold text-blue-700 animate-fadeInUp">{book.title}</h3>
            {/* ✅ Book Author */}
            <p className="text-gray-600 animate-fadeInUp">by {book.author}</p>
            {/* ✅ Book Rating */}
            <p className="text-yellow-500 font-medium animate-fadeInUp">
              ⭐ {book.rating} / 5.0
            </p>
            {/* ✅ View Details Button */}
            <Link
              to={`/books/details/${book.id}`}
              className="mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out animate-fadeIn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;


