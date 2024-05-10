import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-8 xl:px-0">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
