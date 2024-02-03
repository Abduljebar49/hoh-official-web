import { Outlet } from "react-router-dom";
import { useSnapshot } from "valtio";
import state from "../store";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Layout = () => {
  const snap = useSnapshot(state);

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
