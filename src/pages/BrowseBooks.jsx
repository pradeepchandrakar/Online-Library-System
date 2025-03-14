import { useState } from "react";
import { useSelector } from "react-redux";
import BooksSection from "./BooksSection";
import CategorySection from "./CategorySection";
import { motion } from "framer-motion";

const BrowseBooks = () => {
  const booksData = useSelector((state) => state.books);
  const books = Array.isArray(booksData.books) ? booksData.books : [];

  const categories = ["All", "Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // ✅ Filter books based on category & search query
  const filteredBooks = books.filter((book) => {
    const isCategoryMatch =
      selectedCategory === "All" ||
      (book.category && book.category.toLowerCase() === selectedCategory.toLowerCase());

    const isSearchMatch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return isCategoryMatch && isSearchMatch;
  });

  return (
    <motion.div
      className="min-h-screen bg-[#1E293B] text-white p-6 mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ✅ Category Section with Smooth Entry */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <CategorySection
          categories={categories}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      </motion.div>

      {/* ✅ Search Input */}
      <motion.div
        className="flex justify-center mb-6 mt-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="🔍 Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-3 border border-gray-600 rounded-lg w-full max-w-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
        />
      </motion.div>

      {/* ✅ Show Filtered Books or Message */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {filteredBooks.length > 0 ? (
          <BooksSection
            popularBooks={filteredBooks}
            title={selectedCategory === "All" ? "📚 All Books" : `📖 ${selectedCategory} Books`}
          />
        ) : (
          <p className="text-center text-gray-400 text-lg mt-6">
            No books found in this category. 😞
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BrowseBooks;




