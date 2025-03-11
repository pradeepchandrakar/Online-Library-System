import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
    </nav>
);

export default Navbar;
