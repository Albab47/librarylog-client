import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../pages/shared/Footer/Footer";

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
