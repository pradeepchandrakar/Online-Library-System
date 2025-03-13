import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
    const { id } = useParams(); // Get book ID from URL

    // Ensure books exist before accessing them
    const books = useSelector((state) => state.books.books || []);
    const book = books.find((b) => String(b.id) === id); // Match as string

    if (!book) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-2xl text-red-500">Book not found</h2>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-16 flex items-center space-x-6">
            {/* Left Side - Book Image */}
            <div className="w-1/3">
                <img 
                    src={book.cover_image} 
                    alt={book.title} 
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>

            {/* Right Side - Book Details */}
            <div className="w-2/3">
                <h1 className="text-3xl font-bold text-blue-700">{book.title}</h1>
                <h2 className="text-lg text-gray-600 mb-2">by {book.author}</h2>
                <p className="text-gray-800 leading-relaxed">{book.description}</p>
                
                <p className="text-gray-800 leading-relaxed text-lg">📝 Publish Date: {book.publish_date}</p>

                <p className="text-gray-800 leading-relaxed text-lg">📖 Pages: {book.pages}</p>

                {/* ✅ Book Rating */}
                <p className="text-yellow-500 text-lg font-semibold">⭐ Rating: {book.rating} / 5.0</p>

                <div className="mt-6">
                    <Link
                        to="/books"
                        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Back to Browse
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;



