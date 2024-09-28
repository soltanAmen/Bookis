import discount from "../assets/images/discount.jpg";
const DiscountBanner = () => {
  return (
    <div
      className="relative py-16 px-8 max-md:px-4 max-md:py-12 bg-cover bg-center bg-no-repeat
      flex justify-center items-center
      text-center
        flex-col 
        max-lg:py-20 max-lg:px-16   
        rounded-lg
        h-[300px]
        md:h-[400px]
      
        overflow-hidden

       "
      style={{ backgroundImage: `url(${discount})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="
        relative
        w-full
        z-10
        max-md:space-y-6
        max-lg:space-y-8
        max-lg:w-2/4
        max-md:w-full
        font-heading

      "
      >
        <h2 className="text-3xl font-bold text-white max-md:text-2xl">
          Get 20% Off on Your First Order
        </h2>
        <p className="text-white text-lg max-md:text-base mt-4">
          Get your favorite books at discounted prices. Limited time offer.
        </p>
        <button className="bg-white text-accent px-6 py-3 rounded-full text-lg font-semibold hover:bg-linkHover transition duration-300 ease-in-out mt-6 hover:text-white">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
