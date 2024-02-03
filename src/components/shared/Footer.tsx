import { Logo } from "../../assets/products";

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

              <div className="flex items-center justify-center lg:justify-start space-x-5">
                <a
                  href="#"
                  className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-info hover:text-white transition ease-in-out duration-500"
                >
                  <i data-feather="facebook"></i>
                </a>

                <a
                  href="#"
                  className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-info hover:text-white transition ease-in-out duration-500"
                >
                  <i data-feather="twitter"></i>
                </a>

                <a
                  href="#"
                  className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-info hover:text-white transition ease-in-out duration-500"
                >
                  <i data-feather="linkedin"></i>
                </a>
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

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                About Us
              </a>
              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Contact Us
              </a>
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
