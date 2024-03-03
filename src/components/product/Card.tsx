import { Link } from "react-router-dom";
import { Product } from "../../config/constants";

const card = ({ ...product }: Product) => {
  const getGeneralDes = (desc: string) => {
    if (desc.length < 120) return desc;
    return desc.substring(0, 120) + "...";
  };

  return (
    <>
      <div className="px-6 py-6 w-full rounded-3xl">
        <div className="flex justify-center w-full">
          <img
            src={product.image}
            alt="Image"
            className="h-600 w-auto h-72 mb-6 hover:opacity-75 transition ease-in-out duration-500"
          />
        </div>
        <div className="flex text-center font-work tracking-wide justify-center font-semibold text-white text-lg text-2xl mb-6">
          {product.title} <br />
        </div>

        <div className="text-xl">{product.location}</div>
        <div className="flex w-full justify-center">
          <p className="font-light font-work text-[#adadad] max-w-96 text-center text-sm md:text-md lg:text-lg mb-10">
            {getGeneralDes(product.generalProfile)}
          </p>
        </div>

        <Link
          className="flex w-full justify-center items-center"
          to={`/product/${product.id}`}
        >
          <div className="flex justify-center py-2 text-white bg-[#AF7A33] px-3 transition ease-in-out duration-500 my-2">
            Read More...
          </div>
        </Link>
      </div>
    </>
  );
};

export default card;
