import { Link } from "react-router-dom";
import { Logo } from "../../assets/products";
import { fbIcon, instaIcon, tgIcon, xIcon } from "../../assets/shared";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="space-y-7 mb-10 lg:mb-0">
              <div className="flex justify-center lg:justify-start">
                <img src={Logo} alt="Image" />
              </div>
              <div className="flex justify-center">
                <div className="text-3xl font-bold">HOH Engine Oil</div>
              </div>
              <p className="font-light text-gray-400 text-md md:text-lg text-center lg:text-left">
                shine With our engine oil <br />
                around the world
              </p>

              <div className="flex mt-3 w-full md:top-[239px] flex justify-start items-center gap-[17px] mx-auto">
                <img
                  className="w-[24px] h-[24px] mix-blend-luminosity rounded-full"
                  src={instaIcon}
                />

                <img
                  className="w-[24px] h-[24px] mix-blend-luminosity rounded-full"
                  src={xIcon}
                />
                <img
                  className="w-[24px] h-[24px] mix-blend-luminosity rounded-full"
                  src={fbIcon}
                />
                <img
                  className="w-[24px] h-[24px] mix-blend-luminosity rounded-full"
                  src={tgIcon}
                />
              </div>
            </div>

            <div className="text-center lg:text-left space-y-7 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl">
                Quick links
              </h4>
              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Our Products
              </a>
            </div>

            <div className="text-center lg:text-left space-y-7 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl">
                Company
              </h4>

              <Link
                to={'/about'}
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                About Us
              </Link>
              <Link
                to={'/contact'}
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Contact Us
              </Link>
            </div>

            <div className="text-center lg:text-left space-y-7 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl">
                Legal
              </h4>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                FAQ
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
