import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice"; // Import action

const AddBookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publish_date: "",
    pages: "",
    cover_image: "",
    description: "",
    category: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState("");

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBookData({ ...bookData, cover_image: reader.result });
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (e) => {
    setBookData({ ...bookData, cover_image: e.target.value });
    setPreviewImage(e.target.value);
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(bookData).forEach((key) => {
      if (!bookData[key]) {
        newErrors[key] = `${key.replace("_", " ")} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(addBook({ ...bookData, id: Date.now() }));
    navigate("/books");
  };

  return (
    <div className="bg-[#1E293B] min-h-screen flex items-center justify-center mt-16">
      <div className=" mx-auto p-8 text-white shadow-2xl rounded-2xl bg-[#1E293B]">
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
          📚 Add New Book
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {['title', 'author', 'publish_date', 'pages', 'category', 'rating'].map(field => (
              <div key={field}>
                <label className="block font-medium text-lg">{field.replace("_", " ").toUpperCase()}*</label>
                <input
                  type={field === "pages" || field === "rating" ? "number" : field === "publish_date" ? "date" : "text"}
                  name={field}
                  value={bookData[field]}
                  onChange={handleChange}
                  className="w-full bg-white/20 backdrop-blur-md border-none p-3 rounded-lg text-white focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block font-medium text-lg">Description*</label>
            <textarea
              name="description"
              value={bookData.description}
              onChange={handleChange}
              className="w-full bg-white/20 backdrop-blur-md border-none p-3 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 h-32"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-lg">Upload Cover Image*</label>
              <input type="file" accept="image/*" onChange={handleFileChange} className="w-full bg-white/20 backdrop-blur-md border-none p-3 rounded-lg text-white focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div>
              <label className="block font-medium text-lg">Paste Image URL*</label>
              <input type="text" name="cover_image" value={bookData.cover_image} onChange={handleImageUrlChange} className="w-full bg-white/20 backdrop-blur-md border-none p-3 rounded-lg text-white focus:ring-2 focus:ring-yellow-400" required />
            </div>
          </div>

          {previewImage && (
            <img src={previewImage} alt="Preview" className="mt-3 w-32 h-32 object-cover rounded-lg shadow-lg border-2 border-yellow-400" />
          )}
          
          <button type="submit" className="w-full bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 shadow-lg">
            📖 Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;



