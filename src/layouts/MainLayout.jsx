import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
