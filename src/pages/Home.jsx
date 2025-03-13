import { useState } from "react";
import { categories, popularBooks } from "../utils/mockData.js";
import BooksSection from "./BooksSection.jsx";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // ✅ Filter books based on selected category
  const filteredBooks = popularBooks.filter(
    (book) => selectedCategory === "All" || book.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Full-Screen Welcome Section */}
      <div
        className="relative bg-cover bg-center text-white flex items-center justify-center h-screen w-full animate-fadeIn"
        style={{
          backgroundImage:
            "url('https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold text-center bg-black bg-opacity-50 p-4 rounded-lg animate-slideInDown">
          Welcome to the Online Library
        </h1>
      </div>

      {/* ✅ Category Selection Buttons (Including "All") */}
      <div className="mx-auto bg-white p-6 rounded-lg shadow-md mt-6 animate-fadeInUp">
        <h2 className="text-xl font-semibold text-gray-800 text-center">Book Categories</h2>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          {/* ✅ "All" Button to Reset */}
          <button
            onClick={() => handleCategorySelect("All")}
            className={`px-4 py-2 rounded-lg text-center transition duration-300 transform ${
              selectedCategory === "All" ? "bg-blue-700 text-white" : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
          >
            All
          </button>

          {/* ✅ Category Buttons */}
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleCategorySelect(cat)}
              className={`px-4 py-2 rounded-lg text-center transition duration-300 transform ${
                selectedCategory === cat ? "bg-blue-700 text-white" : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Books Section */}
      <BooksSection
        popularBooks={filteredBooks}
        title={selectedCategory === "All" ? "All Books" : `${selectedCategory} Books`}
      />
    </div>
  );
};

export default Home;


