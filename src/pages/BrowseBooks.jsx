import { useState } from "react";
import { useSelector } from "react-redux";
import BooksSection from "./BooksSection";
import CategorySection from "./CategorySection";

const BrowseBooks = () => {
  const booksData = useSelector((state) => state.books);
  const books = Array.isArray(booksData.books) ? booksData.books : [];

  const categories = ["All", "Fiction", "Non-Fiction", "Sci-Fi" , "Mystery"]; // ✅ Categories
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // ✅ Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    
  };

  // ✅ Filter books based on category & search query
  const filteredBooks = books.filter((book) => {
    

    const isCategoryMatch = selectedCategory === "All" || 
      (book.category && book.category.toLowerCase() === selectedCategory.toLowerCase());

    

    const isSearchMatch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return isCategoryMatch && isSearchMatch;
  });

  

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-6">
      {/* ✅ Pass category selection handler */}
      <CategorySection 
        categories={categories} 
        onCategorySelect={handleCategorySelect} 
        selectedCategory={selectedCategory} 
      />

      {/* ✅ Search Input */}
      <div className="flex justify-center mb-4 mt-6">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ✅ Show Filtered Books or Message */}
      {filteredBooks.length > 0 ? (
        <BooksSection
          popularBooks={filteredBooks}
          title={selectedCategory === "All" ? "All Books" : `${selectedCategory} Books`}
        />
      ) : (
        <p className="text-center text-gray-600 text-lg mt-6">
          No books found in this category. 😞
        </p>
      )}
    </div>
  );
};

export default BrowseBooks;



