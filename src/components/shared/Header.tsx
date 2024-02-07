import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/products";

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
      className={`sticky top-0 z-50 mt-2 px-10 bg-white w-full transition-all ${
        isSticky ? "h-auto" : "h-20"
      }`}
      style={{
        boxShadow: isSticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <nav className="flex-wrap lg:flex items-center">
        <div className="flex items-center mb-10 lg:mb-0 gap-5">
          <img src={Logo} className="w-8 h-13" alt="Logo" />
          <div
            className={`lg:text-3xl md:text-2xl text-xl font-bold ${
              isMain ? "text-white" : "text-black"
            }`}
          >
            HOH Engine Oil
          </div>
          <button
            className="cursor-pointer lg:hidden w-10 h-10 ml-auto flex items-center justify-center border border-blue-500 text-blue-500 rounded-md"
            onClick={toggleShowMenu}
          >
            <img
              className="cursor-pointer p-2"
              src="assets/images/menu.png"
              alt=""
            />
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
          {
            showMenu && (
              <li
                className={`font-semibold hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0 ${
                  isMain ? "text-white" : "text-black"
                }`}
              >
                <Link to="/contact">Contact us</Link>
              </li>
            )
          }
        </ul>

        <div className={`lg:flex flex-col md:flex-row md:items-center text-center md:space-x-6 gap-6`}>
          <Link
            to="/contact"
            className={`lg:inline hidden px-6 py-4 border-2 border-blue-500 font-semibold text-lg rounded-xl hover:bg-blue-700 transition ease-linear duration-500 ${
              isMain ? "text-white" : "text-blue-500"
            }
              ${
                showMenu? "inline": ""
              }
            `}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
