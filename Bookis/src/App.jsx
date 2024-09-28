import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleBook from "./pages/SingleBook";
import Layout from "./components/Layout";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/book/:id" element={<SingleBook />} />
        <Route path="/book-cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default App;
