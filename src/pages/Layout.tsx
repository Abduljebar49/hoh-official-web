import { Outlet } from "react-router-dom";
import { Footer } from "../components/shared/Footer";
import ScrollToTopOnMount from "../components/shared/ScrollToTop";
import Header from "../components/shared/Header";

const Layout = () => {
  return (
    <>
      <div className="max-w-screen mx-auto bg-primary">
        <ScrollToTopOnMount />
        <Header/>
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
