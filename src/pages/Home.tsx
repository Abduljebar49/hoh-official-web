import { BgAboutUs } from "../assets/hero";
import { Moto } from "../assets/images";
import Card from "../components/product/Card";
import Hero from "../components/shared/Hero";
import { Product, products, slides } from "../config/constants";
import { FaCheck } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";

const Home = () => {

  const heroStyle = {
    width: "100%",
    backgroundImage: `url(${BgAboutUs})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="flex-col w-full">
        <Hero slides={slides} />
      </div>
      <section className="bg-[#BD8C3B] py-16">
        <div className="flex flex-col md:flex-row w-full justify-center gap-[10%]">
          <div className="flex text-center flex-col justify-center gap-4">
            <div className="flex w-full justify-center">
              <FaCheck className="text-white text-[80px] border-white border p-2 border-0.5 rounded-full" />
            </div>
            <div className="uppercase font-bold text-white text-[20px]">
              Quality guarantee
            </div>
          </div>
          <div className="flex text-center flex-col justify-center md:mt-0 mt-16 gap-4">
            <div className="flex w-full justify-center">
              <FaGears className="text-white text-[80px] border-white border p-2 border-0.5 rounded-full" />
            </div>
            <div className="uppercase font-bold text-white text-[20px]">
              Powerful Performance
            </div>
          </div>
          <div className="flex text-center flex-col justify-center md:mt-0 mt-16 gap-4">
            <div className="flex w-full justify-center">
              <FaLightbulb className="text-white text-[80px] border-white border p-2 border-0.5 rounded-full" />
            </div>
            <div className="uppercase font-bold text-white text-[20px]">
              Innovative technology
            </div>
          </div>
        </div>
      </section>
      <section style={heroStyle} className="py-40 flex flex-col w-full">
        <h1 className="leading-[100px] text-blck text-3xl md:text-4xl text-center">
          About
        </h1>
        <div className="flex w-full justify-center mb-6">
          <div className="flex w-20 px-20 h-0.5 bg-[#D7B867] my-8"></div>
        </div>
        <div className=" flex justify-center w-full">
          <p className="text-center max-w-[690px]">
            <span className="text-[#cb9f40;] uppercase">HOH Lubricant<sup>®</sup></span>
            &nbsp;Gold Performance is a leading name in the lubricant Industry. It offers a wide range of lubricants and grease products that caters to the demand of automotive, industrial, agricultural, transport, and mining sectors. Building on an experience spanning over two decades and research at our own laboratories, our team of qualified petroleum engineers work proactively to meet consumer needs and deliver quality products consistently.
          </p>
        </div>
      </section>
      
      {/* <Slider /> */}

      <section className="bg-primary text-white py-20">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="leading-[100px] text-white text-3xl md:text-4xl text-center">
            OUR PRODUCTS
          </h1>
          <div className="flex w-full justify-center mb-10">
            <div className="flex w-20 px-20 h-0.5 bg-[#D7B867] my-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.slice(0, 6).map((ele: Product, index: number) => (
              <Card {...ele} key={index}></Card>
            ))}
          </div>
        </div>
      </section>
      <div className="flex container max-w-screen-xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-white text-center lg:text-left mt-40 md:px-10 px-0">
            <div className="font-semibold text-2xl md:text-6xl leading-normal mb-6">
              Engine Oil gas for better future of your engine
            </div>

            <p className="font-light text-md md:text-lg leading-normal mb-12">
              We provide a trusted products for engines of
              <br />
              worldwide to support people and organizers
            </p>

            <button className="px-6 py-4 bg-info font-semibold text-white text-lg rounded-xl bg-blue-700 transition ease-in-out duration-500">
              Get started
            </button>
          </div>

          <div className="mt-24 w-full justify-center p-2">
            <img className="" src={Moto} alt="Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
