import React from "react";
import { motion } from "framer-motion";

const CategorySection = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <motion.div
      className="mx-auto bg-[#1E293B] p-6 rounded-xl shadow-lg mt-6 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ✅ Title */}
      <h2 className="text-2xl font-bold text-center text-cyan-400">📚 Book Categories</h2>

      {/* ✅ Category Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        {categories.map((cat, index) => (
          <motion.button
            key={index}
            onClick={() => onCategorySelect(cat)}
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
  );
};

export default CategorySection;



