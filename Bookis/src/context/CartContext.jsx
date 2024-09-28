import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [cartCount, setCartCount] = useState(cart.length);

  const addToCart = (product) => {
    const existed = cart.find((item) => item._id === product._id);
    if (existed) {
      existed.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart([...cart]);
      console.log(cart);
      return;
    }
    const newCart = [
      ...cart,
      { ...product, quantity: 1, price: Math.floor(Math.random() * 300) },
    ];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    setCartCount(newCart.length);
    console.log(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item._id !== product._id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    setCartCount(newCart.length);
  };
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
    setCartCount(0);
  };
  const minesFromCart = (product) => {
    const existed = cart.find((item) => item._id === product._id);
    if (existed.quantity === 1) {
      removeFromCart(product);
      return;
    }
    existed.quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart([...cart]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        clearCart,
        addToCart,
        removeFromCart,
        minesFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
