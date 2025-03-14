import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1E293B] text-white">
      <motion.div
        className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg text-center w-[90%] max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-red-500">404</h1>
        <p className="text-xl font-semibold mt-2 text-gray-200">
          Oops! Page Not Found
        </p>
        <p className="text-gray-400 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full shadow-md transition duration-300 hover:from-blue-500 hover:to-cyan-400"
          >
            🔙 Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;

  