import {
  CategoriesGrid,
  BooksList,
  DiscountBanner,
  Hearo,
  NavBar,
  Footer,
} from "../components";
const Home = () => {
  return (
    <div>
      <Hearo />
      <CategoriesGrid />
      <div className="px-8 max-md:px-4 pb-5 ">
        <BooksList title={"New Collection"} />
      </div>

      <div className="px-8 max-md:px-4 pb-5 ">
        <DiscountBanner />
      </div>
      <div className="px-8 max-md:px-4 pb-5 ">
        <BooksList title="Top Rated" />
      </div>
    </div>
  );
};

export default Home;
