import { Outlet } from "react-router-dom"; // For rendering child components from routing
import { NavBar, Footer } from ".";
import Sidebar from "./SideBar";

const Layout = () => {
  return (
    <div className="min-h-screen h-full flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
