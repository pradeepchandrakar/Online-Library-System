import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import BooksSection from "./BooksSection.jsx";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Get books data from Redux store
  const books = useSelector((state) => state.books.books || []);

  // ✅ Extract unique categories from books
  const categories = ["All", ...new Set(books.map((book) => book.category))];

  // ✅ Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // ✅ Filter books based on selected category
  const filteredBooks = books.filter(
    (book) => selectedCategory === "All" || book.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#1E293B] text-white">
      {/* ✅ Full-Screen Welcome Section */}
      <motion.div
        className="relative bg-cover bg-center flex items-center justify-center h-screen w-full text-white"
        style={{
          backgroundImage:
            "url('https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center bg-black bg-opacity-60 p-6 rounded-xl shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          📚 Welcome to the Online Library
        </motion.h1>
      </motion.div>

      {/* ✅ Category Selection Buttons */}
      <motion.div
        className="mx-auto bg-[#334155] p-6 rounded-xl shadow-lg mt-6 text-white w-[90%] max-w-3xl animate-fadeInUp"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-cyan-400 text-center">📂 Book Categories</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              onClick={() => handleCategorySelect(cat)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`px-5 py-2 rounded-full text-lg font-semibold transition-all duration-300 
                shadow-md bg-opacity-20 backdrop-blur-md ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-cyan-500 hover:text-white"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* ✅ Books Section */}
      <BooksSection
        popularBooks={filteredBooks}
        title={selectedCategory === "All" ? "📖 All Books" : `📚 ${selectedCategory} Books`}
      />
    </div>
  );
};

export default Home;



