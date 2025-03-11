import { Link } from "react-router-dom";

const Home = () => {
    const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];
    const popularBooks = [
        { id: 1, title: "Dune", author: "Frank Herbert" },
        { id: 2, title: "1984", author: "George Orwell" },
    ];

    return (
        <div>
            <h1>Welcome to the Online Library</h1>
            <h2>Book Categories</h2>
            <ul>
                {categories.map((cat, index) => (
                    <li key={index}>{cat}</li>
                ))}
            </ul>

            <h2>Popular Books</h2>
            <ul>
                {popularBooks.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/details/${book.id}`}>{book.title}</Link> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
