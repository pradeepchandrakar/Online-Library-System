import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const BookDetails = () => {
    const { id } = useParams();
    const books = useSelector((state) => state.books.books || []);
    const book = books.find((b) => String(b.id) === id);

    if (!book) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-[#1E293B]">
                <h2 className="text-2xl text-red-500 font-bold animate-pulse">🚫 Book not found</h2>
            </div>
        );
    }

    return (
        <div className="bg-[#1E293B] min-h-screen flex items-center justify-center mt-16">
            <motion.div 
                className="max-w-5xl w-full bg-[#1E293B] text-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6">
                    
                    {/* Left Side - Book Image */}
                    <motion.div 
                        className="w-full md:w-1/3 mb-6 md:mb-0 "
                        whileHover={{ scale: 1.05 }}
                    >
                        <img 
                            src={book.cover_image} 
                            alt={book.title} 
                            className="w-full h-3/4 object-cover rounded-lg shadow-xl border-4 border-cyan-400 transition-transform duration-300"
                        />
                    </motion.div>

                    {/* Right Side - Book Details */}
                    <div className="w-full md:w-2/3 p-6 rounded-lg shadow-md">
                        <h1 className="text-3xl font-extrabold text-cyan-400">{book.title}</h1>
                        <h2 className="text-xl text-gray-300 mb-4">by <span className="font-semibold">{book.author}</span></h2>
                        
                        <p className="text-lg text-gray-300 leading-relaxed mb-4">{book.description}</p>

                        <div className="space-y-2 text-lg">
                            <p>📝 <span className="font-semibold">Publish Date:</span> {book.publish_date}</p>
                            <p>📖 <span className="font-semibold">Pages:</span> {book.pages}</p>
                            <p className="text-yellow-300 font-semibold text-xl">⭐ Rating: {book.rating} / 5.0</p>
                        </div>

                        {/* Back Button with Glow Effect */}
                        <motion.div 
                            className="mt-6"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link
                                to="/books"
                                className="bg-yellow-500 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg"
                            >
                                🔙 Back to Browse
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default BookDetails;






