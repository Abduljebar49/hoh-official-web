import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogoO } from "../../assets/shared";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);//#D7B867
  const [activeTab, setActiveTab] = useState('Home');

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <header
      className={`sticky uppercase top-0 z-50 lg:px-10 px-4 bg-primary w-full transition-all justify-between md:justify-center items-center 
      ${isSticky ? "h-20 opacity-80" : showMenu ? "h-64" : "h-[132px]"}
      `}
      style={{
        boxShadow: isSticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <nav className="flex sm:flex-row flex-col items-center justify-between w-full h-full">
        <div className="flex items-center lg:w-96 w-full justify-between lg:mb-0 gap-5 h-full">
          <Link to={"/"} className="flex items-center gap-4">
            <img src={LogoO} className="w-8 h-13" alt="Logo" />
            <div
              className={`cursor-pointer lg:text-3xl md:text-2xl text-xl text-white font-extrabold
                }`}
            >
              HOH Engine Oil
            </div>
          </Link>
          <button
            className="cursor-pointer lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-blue-500 rounded-md"
            onClick={toggleShowMenu}
          >
            <FiMenu width={25} height={25} className="text-default" />
          </button>
        </div>

        <div
          className={`lg:flex flex-col w-full md:w-[450px] md:flex-row md:items-center text-center md:space-x-6 gap-6`}
        >
          <ul
            className={`lg:flex flex-col justify-center lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14 ${!showMenu ? "hidden" : "flex"
              }`}
          >
            <li
              className={`font-semibold  md:w-[51px] w-full hover:text-[#D7B867] transition ease-in-out duration-300 mb-5 lg:mb-0 
              ${activeTab == 'Home' ? 'border-b-2 text-[#D7B867] border-b-[#D7B867]' : 'text-white'}
              ${showMenu && activeTab == 'Home' ? 'border-2 bg-gray-50 text-black':''}
              `}
            >
              <Link to="/" onClick={() => setActiveTab('Home')}>Home</Link>
            </li>
            <li
              className={`font-semibold md:w-[83px] w-full hover:text-[#D7B867] transition ease-in-out duration-300 mb-5 lg:mb-0 
              ${activeTab == 'About' ? 'border-b-2 text-[#D7B867] border-b-[#D7B867]' : 'text-white'}
              ${showMenu && activeTab == 'About' ? 'border-2 bg-gray-50 text-black':''}
              `}
            >
              <Link to="/about" onClick={() => setActiveTab('About')}>About us</Link>
            </li>
            <li
              className={`font-semibold  md:w-[108px] w-full hover:text-[#D7B867] transition ease-in-out duration-300 mb-5 lg:mb-0 
              ${activeTab == 'Contact' ? 'border-b-2 text-[#D7B867] border-b-[#D7B867]' : 'text-white'}
              ${showMenu && activeTab == 'Contact' ? 'border-2 bg-gray-50 text-black':''}
              `}
            >
              <Link to="/contact" onClick={() => setActiveTab('Contact')}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
