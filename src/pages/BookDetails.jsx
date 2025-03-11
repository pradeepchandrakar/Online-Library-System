import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
    const { id } = useParams();
    const book = useSelector((state) => state.books.find(b => b.id === Number(id)));

    if (!book) return <h2>Book not found</h2>;

    return (
        <div>
            <h1>{book.title}</h1>
            <h2>by {book.author}</h2>
            <p>{book.description}</p>
            <p>Rating: {book.rating}</p>
            <Link to="/books">Back to Browse</Link>
        </div>
    );
};

export default BookDetails;
