import heroImage from "../assets/images/hero_bg.jpg";
import { book1, book2, book3 } from "../assets/images/images";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroImage})` }}
      className="relative py-20 px-10 max-md:px-6 max-md:py-14 bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex max-lg:flex-col items-center gap-6 max-md:gap-8 max-lg:justify-center max-lg:text-center">
        <div className="max-md:space-y-8 max-lg:flex flex-col max-lg:items-center max-lg:justify-center">
          <h1 className="text-6xl font-bold text-white leading-tight max-w-2xl">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-xl text-gray-200 max-w-lg mt-6 ">
            Explore thousands of books across genres and find the perfect read
            for every mood at Bookis.
          </p>
          <button className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-linkHover transition duration-300 ease-in-out mt-6">
            Explore Books
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>

        <div
          className="
            flex
            h-full 
            w-2/4
            max-lg:w-full
            items-center
            justify-center
            gap-6
            max-lg:gap-10
            max-lg:mt-8
            max-md:hidden
          "
        >
          <img
            src={book1}
            alt="Book 1"
            className="w-1/3 h-[300px] object-cover rounded-lg hover:rotate-6 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
          <img
            src={book2}
            alt="Book 2"
            className="w-1/3 h-[320px] object-cover rounded-lg  hover:-rotate-6 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
          <img
            src={book3}
            alt="Book 3"
            className="w-1/3 h-[300px] object-cover rounded-lg  hover:rotate-6 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
