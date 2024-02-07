import { useState } from "react";
import { products } from "../config/constants";
import { useParams } from "react-router-dom";
import Header from "../components/shared/Header";

const Detail = () => {
  let { id } = useParams();
  const [product] = useState(products[parseInt(id!) - 1]);

  return (
    <>
      <Header isMain={false} />
      <div className="flex w-full container max-w-screen-xl mx-auto px-4 mb-20">
        <div className="flex flex-col w-full justify-center">
          <div className="flex justify-center w-full ">
            <img className="p-4 my-10 rounded-lg" src={product.image} alt="" />
          </div>
          <div className="flex w-full justify-center mt-10">
            <div className="flex flex-col w-full justify-center  gap-10">
              <div className="uppercase font-bold xl:text-6xl lg:text-5xl md:4xl text-3xl text-center">
                {product.title}
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center mt-10">
            <div className="flex flex-col lg:w-96 w-full justify-center  gap-10">
              <div className="uppercase font-bold text-2xl text-center">
                general profile
              </div>
              <div className="flex">{product.generalProfile}</div>
            </div>
          </div>
          <div className="flex w-full justify-center mt-10">
            <div className="flex flex-col lg:w-96 w-full justify-center  gap-10">
              <div className="uppercase font-bold text-2xl text-center">meet& exceeds</div>
              <div className="flex text-center">{product.meetsExceeds}</div>
            </div>
          </div>
          <div className="flex w-full justify-center mt-10">
            <div className="flex flex-col lg:w-96 w-full justify-center  gap-10">
              <div className="uppercase font-bold text-2xl text-center">
                features & benefits
              </div>
              <div className="flex flex-col">
                {product.benefits.map((ele: string, index: number) => (
                  <div className="flex" key={index}>
                    {ele}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
