import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/products";
import { Menu } from "../../assets/images";

interface HeaderProps {
  isMain: boolean;
}

const Header = ({ isMain }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 0 && !isSticky) {
      setIsSticky(true);
    } else if (window.scrollY === 0 && isSticky) {
      setIsSticky(false);
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <header
      className={`sticky uppercase top-0 z-50 px-10 bg-primary w-full h-full transition-all justify-between md:justify-center items-center ${
        isSticky ? "h-auto" : "h-28"
      }
        ${showMenu ? "h-64" : ""}
      `}
      style={{
        boxShadow: isSticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <nav className="flex sm:flex-row flex-col items-center justify-center w-full h-full">
        <div className="flex items-center lg:w-96 w-full justify-between lg:mb-0 gap-5 h-full">
          <div className="flex items-center gap-4">
            <img src={Logo} className="w-8 h-13" alt="Logo" />
            <div
              className={`cursor-pointer lg:text-3xl md:text-2xl text-xl text-white font-bold ${
                isMain ? "text-white" : "text-black"
              }`}
            >
              HOH Engine Oil
            </div>
          </div>
          <button
            className="cursor-pointer lg:hidden w-10 h-10 ml-auto flex items-center justify-center border border-blue-500 text-blue-500 rounded-md"
            onClick={toggleShowMenu}
          >
            <img className="cursor-pointer p-2" src={Menu} alt="" />
          </button>
        </div>

        <ul
          className={`lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14 ${
            !showMenu ? "hidden" : "flex"
          }`}
        >
          <li
            className={`font-semibold text-white hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0 ${
              isMain ? "text-white" : "text-black"
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`font-semibold text-white hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0 ${
              isMain ? "text-white" : "text-black"
            }`}
          >
            <Link to="/about">About us</Link>
          </li>
          {showMenu && (
            <li
              className={`font-semibold text-white transition ease-in-out duration-300  ${
                isMain ? "text-white" : "text-black"
              }`}
            >
              <Link to="/contact">Contact us</Link>
            </li>
          )}
        </ul>

        <div
          className={`lg:flex flex-col md:flex-row md:items-center text-center md:space-x-6 gap-6`}
        >
          <Link
            to="/contact"
            className={`lg:inline hidden px-6 py-4 border-2 border-white-500 text-white font-semibold text-lg rounded-xl hover:bg-white-700 transition ease-linear duration-500 ${
              isMain ? "text-white" : "text-white-500"
            }
              ${showMenu ? "inline" : ""}
            `}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
