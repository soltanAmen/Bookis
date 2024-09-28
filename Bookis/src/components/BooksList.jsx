import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BooksList = ({ title, similer }) => {
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const setWishlistFromLocalStorage = () => {
      if (localStorage.getItem("wishlist")) {
        setWishlist(JSON.parse(localStorage.getItem("wishlist")));
      }
    };
    setWishlistFromLocalStorage();
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/top_rating");
        setBooks(similer ? res.data.slice(0, 6) : res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  const addToWishlist = (id) => {
    const updatedWishlist = wishlist.includes(id)
      ? wishlist.filter((item) => item !== id)
      : [...wishlist, id];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 max-mxd:text-center mb-5 mt-2 max-md:text-2xl max-sm:text-xl font-heading">
        {title}
      </h2>
      <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {books.map((book) => (
          <div
            key={book._id}
            className="relative rounded-lg overflow-hidden shadow-book shadow-shadow cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <Link to={`/book/${book._id}`}>
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="w-full h-72 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
                {book.bookTitle}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-1">
                {book.authorName}
              </p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-lg font-semibold text-gray-800">$10.99</p>
                <button
                  className={`px-3 py-1 rounded-md ${
                    wishlist.includes(book._id)
                      ? "text-red-500"
                      : "text-gray-400"
                  } hover:text-red-300 transition duration-300 ease-in-out`}
                  onClick={() => addToWishlist(book._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18l-1.45-1.32C4.4 13.35 1 10.11 1 6.5 1 4.02 3.02 2 5.5 2c1.54 0 3.04.99 3.57 2.36h1.87C11.46 2.99 12.96 2 14.5 2 16.98 2 19 4.02 19 6.5c0 3.61-3.4 6.85-7.55 10.18L10 18z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
