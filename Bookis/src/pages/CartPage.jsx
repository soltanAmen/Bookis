import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-heading mb-4 max-md:text-2xl">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-secondaryText">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 ">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center bg-white p-4 rounded shadow-book flex-wrap"
              >
                <div className="flex items-center">
                  <Link to={`/book/${item._id}`}>
                    <img
                      src={item.imageURL} // Make sure item.image is a valid URL
                      alt={item.title}
                      className="w-16 h-24 object-cover mr-4 rounded"
                    />
                  </Link>
                  <div>
                    <h2 className="text-xl font-body">{item.title}</h2>
                    <p className="text-lg text-secondaryText">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <span className="text-accent border pl-3 border-gray-300">
                  x
                  <input
                    type="number"
                    value={item.quantity}
                    className="w-8 text-center outline-none"
                  />
                </span>

                <FontAwesomeIcon
                  icon={faTrash}
                  className=" text-accent"
                  onClick={() => removeFromCart(item)}
                />
              </div>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="text-3xl font-heading">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <button
              className="mt-4 bg-accent text-buttonText px-4 py-2 rounded"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
