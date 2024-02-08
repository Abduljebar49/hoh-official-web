import { Outlet } from "react-router-dom";
import { Footer } from "../components/shared/Footer";
import ScrollToTopOnMount from "../components/shared/ScrollToTop";

const Layout = () => {
  return (
    <>
      <div className="max-w-screen mx-auto bg-primary">
        <ScrollToTopOnMount />
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
