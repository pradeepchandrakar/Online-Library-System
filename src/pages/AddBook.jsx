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

  // ✅ Handle input changes
  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  // ✅ Handle image file upload
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

  // ✅ Handle manual URL input for image
  const handleImageUrlChange = (e) => {
    setBookData({ ...bookData, cover_image: e.target.value });
    setPreviewImage(e.target.value);
  };

  // ✅ Validate form fields
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

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(addBook({ ...bookData, id: Date.now() })); // Add unique ID
    navigate("/books"); // Redirect to Browse Books page
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["title", "author", "publish_date", "pages", "description", "category", "rating"].map((field) => (
          <div key={field}>
            <label className="block font-medium">{field.replace("_", " ").toUpperCase()}</label>
            <input
              type={field === "pages" || field === "rating" ? "number" : "text"}
              name={field}
              value={bookData[field]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors[field] && <p className="text-red-500">{errors[field]}</p>}
          </div>
        ))}

        {/* ✅ Image Upload and URL Input */}
        <div>
          <label className="block font-medium">Cover Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="block w-full border p-2 rounded mb-2" />
          <input
            type="text"
            placeholder="Paste image URL"
            value={bookData.cover_image}
            onChange={handleImageUrlChange}
            className="w-full border p-2 rounded"
          />
          {previewImage && <img src={previewImage} alt="Preview" className="mt-3 w-32 h-32 object-cover rounded-lg" />}
          {errors.cover_image && <p className="text-red-500">{errors.cover_image}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;

