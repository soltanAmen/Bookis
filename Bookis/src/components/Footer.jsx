import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8">
      <div className="container mx-auto grid  max-md:space-y-10 max-lg:grid-cols-2 grid-cols-4 gap-8 max-sm:grid-cols-1">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            About Bookis
          </h3>
          <p className="text-gray-400">
            Bookis is your go-to online bookstore with a wide variety of genres.
            Discover your next favorite book and indulge in endless reading.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="shop" className="hover:text-accent transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link to="about" className="hover:text-accent transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Book St, Reading City, 98765</p>
          <p className="text-gray-400 mt-2">Email: info@bookis.com</p>
          <p className="text-gray-400 mt-1">Phone: +123 456 789</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Bookis. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
