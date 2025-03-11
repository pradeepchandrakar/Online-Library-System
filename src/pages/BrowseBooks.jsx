import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const BrowseBooks = () => {
    const { category } = useParams();
    const books = useSelector((state) => state.books);
    const [search, setSearch] = useState("");

    const filteredBooks = books
        .filter(book => category ? book.category === category : true)
        .filter(book => book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <h1>Browse Books {category && `in ${category}`}</h1>
            <input 
                type="text"
                placeholder="Search by title or author..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredBooks.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/details/${book.id}`}>{book.title}</Link> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseBooks;
