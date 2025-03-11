import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const [form, setForm] = useState({ title: "", author: "", description: "", category: "", rating: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.author || !form.category) return alert("Please fill all fields!");
        dispatch(addBook({ id: Date.now(), ...form }));
        navigate("/books");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange} required />
            <input name="author" placeholder="Author" onChange={handleChange} required />
            <input name="category" placeholder="Category" onChange={handleChange} required />
            <textarea name="description" placeholder="Description" onChange={handleChange} />
            <input name="rating" type="number" placeholder="Rating" onChange={handleChange} />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;
