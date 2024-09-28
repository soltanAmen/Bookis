import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ setToggeleMenu }) => {
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white h-full transform transition-transform duration-300 ease-in-out p-4 ml-0">
        <div className="text-3xl max-md:text-2xl max-sm:text-xl uppercase font-bold flex items-center justify-between">
          <Link to="/" className="hover:text-accent">
            Bookis
          </Link>
          <div className="flex justify-end">
            <button onClick={() => setToggeleMenu(false)}>
              <FontAwesomeIcon icon={faX} className="text-white w-6 h-6" />
            </button>
          </div>
        </div>

        <ul className="mt-8">
          <li className="p-4 border-b border-gray-700">
            <Link to="/categories" className="hover:text-accent">
              Categories
            </Link>
          </li>
          <li className="p-4 border-b border-gray-700">
            <Link to="/bestsellers" className="hover:text-accent">
              Bestsellers
            </Link>
          </li>
          <li className="p-4 border-b border-gray-700">
            <Link to="/new-arrivals" className="hover:text-accent">
              New Arrivals
            </Link>
          </li>
          <li className="p-4 border-b border-gray-700">
            <Link to="/contact" className="hover:text-accent">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      <div
        className="flex-1 bg-black opacity-50"
        onClick={() => setToggeleMenu(false)}
      ></div>
    </div>
  );
};

export default SideBar;
