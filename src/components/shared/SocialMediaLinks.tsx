import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition duration-300"
      >
        <FaFacebook />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-2 transition duration-300"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 transition duration-300"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
