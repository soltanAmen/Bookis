import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import BooksList from "../components/BooksList";
import { CartContext } from "../context/CartContext";

const SingleBookPage = () => {
  const { id } = useParams();
  const rating = 4;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book data: ", error);
        setLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/3 w-full">
          <img
            src={book.imageURL}
            alt={book.bookTitle}
            className="w-full h-auto rounded-lg shadow-book shadow-gray-400 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:rotate-3"
          />
        </div>
        <div className="lg:w-2/3 w-full">
          <h1 className="text-5xl font-heading text-text mb-4">
            {book.bookTitle}
          </h1>
          <div className="rating flex items-center gap-2 mb-4">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <label key={index} className="cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    className="hidden"
                  />
                  <FaStar
                    size={24}
                    color={
                      ratingValue <= rating ? "#FFC107" : "rgba(0, 0, 0, 0.2)"
                    }
                  />
                </label>
              );
            })}
          </div>

          <p className="text-xl font-body text-secondaryText mb-2">
            by {book.authorName}
          </p>
          <p className="text-lg font-body text-text mb-6">
            {book.bookDescription}
          </p>
          <div className="flex items-center gap-4">
            <button
              className="bg-accent text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-linkHover transition-colors duration-300 ease-in-out"
              onClick={() => addToCart(book)}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="font-semibold max-sm:hidden">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
      <BooksList title="Similar Books" similer={true} />
    </div>
  );
};

export default SingleBookPage;
