import { motion } from "framer-motion"; // Optional animation library
import Kids from "../assets/images/Kids.jpg";
import Novel from "../assets/images/Novel.jpg";
import Sci_fi from "../assets/images/Sci_fi.jpg";

const categories = [
  {
    title: "Kids & Children",
    img: Kids,
    desc: "Perfect stories for young readers.",
  },
  {
    title: "Science Fiction & Fantasy",
    img: Sci_fi,
    desc: "Adventure into imaginative worlds.",
  },
  {
    title: "Novels & Stories",
    img: Novel,
    desc: "Diverse novels from various genres.",
  },
  {
    title: "Biographies & Memoirs",
    img: Novel,
    desc: "Inspiring life stories and memoirs.",
  },
  {
    title: "Historical Fiction",
    img: Sci_fi,
    desc: "Explore captivating historical tales.",
  },
  {
    title: "Mystery & Thriller",
    img: Kids,
    desc: "Thrilling mysteries and suspenseful reads.",
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-12 px-8 max-md:px-4">
      <h2
        className="text-3xl font-bold text-gray-800 max-mxd:text-center mb-5
      max-md:text-2xl max-sm:text-xl font-heading
      "
      >
        Shop By Category
      </h2>

      <div
        className="
        grid grid-cols-6
        gap-4
        max-lg:grid-cols-3
        max-md:gap-2
      "
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-book cursor-pointer parent"
          >
            <img
              src={category.img}
              alt={category.title}
              className="object-contain w-full h-auto"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="hover-overlay flex flex-col items-center justify-center gap-3">
                <h3
                  className="text-white text-xl font-semibold font-heading text-center
                  max-md:text-lg max-sm:text-base"
                >
                  {category.title}
                </h3>
                <p className="text-white text-center text-base max-md:text-sm max-sm:text-xs px-4">
                  {category.desc}
                </p>
                <button className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-linkHover transition duration-300 ease-in-out mt-4">
                  Explore
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
