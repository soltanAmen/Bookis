import { useEffect, useRef, useState } from "react";

const Login = ({ onClose, setShowSignUp, setShowLogin }) => {
  const modalRef = useRef(null);
  const [animationClass, setAnimationClass] = useState("book-open");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Start closing animation
        setAnimationClass("book-close");
        setTimeout(onClose, 500); // Adjust timeout to match animation duration
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 z-50">
      <div
        ref={modalRef}
        className={`container max-w-md w-11/12 sm:w-3/4 md:w-2/4 lg:w-1/3 bg-white rounded-xl shadow-lg p-6 transition-transform duration-500 ${animationClass}`}
      >
        <h1 className="text-3xl font-heading text-text mb-6 text-center">
          Login
        </h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded-full mt-4"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-accent font-semibold cursor-pointer"
            onClick={() => {
              setShowLogin(false);
              setShowSignUp(true);
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
