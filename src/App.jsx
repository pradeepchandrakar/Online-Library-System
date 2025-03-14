import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import AddBookForm from "./pages/AddBook.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* ✅ Wrap Routes inside a div */}
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/books/details/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBookForm />} />
          {/* ✅ Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




