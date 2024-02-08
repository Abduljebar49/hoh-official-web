import { Link } from "react-router-dom";
import { Product } from "../../config/constants";

const card = ({ ...product }: Product) => {
  return (
    <>
      <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
        <img
          src={product.image}
          alt="Image"
          className="h-600 w-auto h-72 mb-6 hover:opacity-75 transition ease-in-out duration-500"
        />
        <div className="flex font-semibold text-white text-lg text-2xl mb-6">
          {product.title} <br />
        </div>

        <div className="text-xl">{product.location}</div>

        <p className="font-light text-white text-sm md:text-md lg:text-lg mb-10">
          {product.description}
        </p>

        <Link
          className="flex w-full justify-center items-center"
          to={`/product/${product.id}`}
        >
          <div className="flex w-full justify-center py-4 bg-info font-semibold text-white text-lg rounded-xl bg-blue-800 transition ease-in-out duration-500 my-2">
            Read More...
          </div>
        </Link>
      </div>
    </>
  );
};

export default card;
