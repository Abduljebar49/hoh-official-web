import { FaFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fbLink, tgLink } from "../../config/constants";

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      <Link
        target="_blank"
        to={fbLink}
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition duration-300"
      >
        <FaFacebook />
      </Link>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-2 transition duration-300"
      >
        <FaTwitter />
      </a>
      <Link
        target="_blank"
        to={tgLink}
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 transition duration-300"
      >
        <FaTelegram />
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
