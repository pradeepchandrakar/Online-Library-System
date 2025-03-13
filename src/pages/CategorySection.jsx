import React from "react";

const CategorySection = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <div className="mx-auto bg-white p-6 rounded-lg shadow-md mt-6 animate-fadeInUp">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Book Categories</h2>
      <div className="flex justify-center space-x-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => onCategorySelect(cat)} // ✅ Updates selected category
            className={`px-4 py-2 rounded-lg transition duration-300 transform hover:scale-110 
              ${selectedCategory === cat ? "bg-blue-700 text-white" : "bg-blue-500 text-white hover:bg-blue-700"}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;


