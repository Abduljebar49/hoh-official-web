import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Layout = () => {

  return (
    <>
      <div className="max-w-screen mx-auto">
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
