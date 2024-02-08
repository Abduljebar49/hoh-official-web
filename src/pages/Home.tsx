import { Moto } from "../assets/images";
import Card from "../components/product/Card";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import Slider from "../components/shared/Slider";
import { Product, products, slides } from "../config/constants";

const Home = () => {
  return (
    <>
      <Header isMain={false} />
      <div className="flex-col w-full">
        <Hero slides={slides} />
      </div>
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
      <Slider />
      <section className="bg-primary text-white py-20">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-semibold text-white text-xl md:text-4xl text-center mb-16">
            Latest products
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.map((ele: Product, index: number) => (
              <Card {...ele} key={index}></Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
