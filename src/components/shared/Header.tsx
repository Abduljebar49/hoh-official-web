import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/products";

interface HeaderProps {
  isMain: boolean;
}
const Header = ({ isMain }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="flex-wrap lg:flex items-center bg-transparent">
        <div className="flex items-center mb-10 lg:mb-0">
          <img src={Logo} className="w-20" alt="Logo" />
          <div
            className={`lg:text-3xl md:text-2xl text-xl font-bold ${
              isMain ? "text-white" : "text-black"
            }`}
          >
            HOH Engine Oil
          </div>
          <button
            className="cursor-pointer lg:hidden w-10 h-10 ml-auto flex items-center justify-center border border-blue-500 text-blue-500 rounded-md"
            onClick={() => toggleShowMenu()}
          >
            <Link to={"/"}>
              <img
                className="cursor-pointer p-2"
                src="assets/images/menu.png"
                alt=""
              />
            </Link>
          </button>
        </div>

        <ul
          className={`lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14 ${
            !showMenu ? "hidden" : "flex"
          }`}
        >
          <li
            className={`font-semibold hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0 ${
              isMain ? "text-white" : "text-black"
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`font-semibold hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0 ${
              isMain ? "text-white" : "text-black"
            }`}
          >
            <Link to="/about">About us</Link>
          </li>
        </ul>

        <div className="lg:flex flex-col md:flex-row md:items-center text-center md:space-x-6 gap-6">
          <Link
            to="/contact"
            className={`px-6 py-4 border-2 border-blue-500 font-semibold text-lg rounded-xl hover:bg-blue-700 transition ease-linear duration-500 ${
              isMain ? "text-white" : "text-blue-500"
            }`}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
