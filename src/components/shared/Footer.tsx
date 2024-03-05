import { Link } from "react-router-dom";
import { email, phoneNumber } from "../../config/constants";
import SocialMediaLinks from "./SocialMediaLinks";
import { LogoN } from "../../assets/shared";

export const Footer = () => {
  let date = new Date().getFullYear();
  const heroStyle = {
    width: "100%",
    backgroundImage: ` url(https://benzollubricants.de/wp-content/uploads/2021/01/bottle_bg.jpg)`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="px-4 pt-16 lg:px-8" style={heroStyle}>
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 flex flex-col lg:justify-start justify-center">
          <Link
            to={"/home"}
            aria-label="Go home"
            title="Company"
            className="inline-flex flex-col gap-4 items-center"
          >
            <div className="flex w-full lg:justify-start justify-center lg:justify-start">
              <img src={LogoN} className="w-32 h-24" alt="Logo" />
            </div>
            <span className="flex w-full lg:justify-start justify-center ml-2 text-xl font-bold tracking-wide text-white uppercase text-white">
              HOH Engine Oil
            </span>
          </Link>
          <div className="mt-6 lg:max-w-sm flex w-full lg:justify-start justify-center">
            <p className="text-sm text-white">
              shine With our engine oil around the world
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm flex flex-col w-full lg:justify-start justify-center">
          <div className="text-base font-bold tracking-wide text-white lg:text-start text-center">
            Contacts
          </div>
          <div className="flex flex-col lg:text-start text-center lg:justify-start justify-center">
            <div className="flex mr-1 text-white mb-4 lg:justify-start justify-center">
              Phone:
            </div>
            {phoneNumber.map((ele: string, i: number) => (
              <div
                key={i}
                className="flex flex-col ml-10 lg:text-start text-center"
              >
                <Link
                  to={`tel:${ele}`}
                  aria-label="Our phone"
                  title="Our phone"
                  className="text-white transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  {ele}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex lg:justify-start justify-center">
            <p className="mr-1 text-white">Email:</p>
            <a
              href={`mailto:${email}`}
              aria-label="Our email"
              title="Our email"
              className="text-white transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              {email}
            </a>
          </div>
          <div className="flex lg:justify-start justify-center">
            <p className="mr-1 text-white">Address:</p>
            <a
              aria-label="Our email"
              title="Our email"
              className="text-white transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Ethiopia
            </a>
          </div>
        </div>
        <div className="flex justif-center flex-col gap-4 w-full lg:text-start text-center">
          <span className="text-base font-bold tracking-wide text-white uppercase">
            Social media
          </span>
          <div className="flex lg:justify-start justify-center items-center mt-1 space-x-3">
            <SocialMediaLinks />
          </div>
          <p className="text-white mt-4 text-sm text-gray-500">
            follow us on social media
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">
          © Copyright {date} HOH Lubricants. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
