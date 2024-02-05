import { useState, useEffect } from "react";
import { NextArrow, PrevArrow } from "../../assets/hero";
import Header from "./Header";

const Hero = ({ slides }: any) => {
  let [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const heroStyle = {
    width: "100%",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slides[current]})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="flex flex-col w-full jusify-center -pt-40">
        <div
          className="flex flex-col w-full bg-white justify-center inline-flex"
          style={heroStyle}
        >
          <div className="flex-col w-full justify-center container max-w-screen-xl mx-auto px-4 mb-20">
            <Header isMain={true} />
            <div className="flex w-full justify-center lx:w-[80%] items-center justify-center text-center">
              <div className="flex flex-col w-full  lg:w-[60%] justify-center leading-4 md:px-0 px-0">
                <div className="flex w-full justify-center xl:mt-40 lg:mt-40 md:mt-20 text-center md:px-10 lg:px-0 px-0 lx:px-0 mt-20 ">
                  <div className="leading-0 lg:leading-[90px] w-full justify-center">
                    <div className="flex w-full justify-center  lg:hidden mb-6 md:hidden">
                      <div className="w-[233px] h-12 text-[#278EC8] lx:text-8xl lg:text-7xl md:text-6xl text-4xl font-black font-['Inter'] border border-2 border-[#858585] p-2">
                        HOH
                      </div>
                    </div>
                    <span className="hidden leading-0 lg:leading-[90px] lg:inline md:inline text-[#278EC8] lx:text-8xl lg:text-7xl md:text-6xl text-4xl font-black font-['Inter'] border border-2 border-[#858585] p-2">
                      HOH
                    </span>
                    <span className="text-black leading-0 lg:leading-[90px] lx:text-8xl lg:text-7xl md:text-6xl text-4xl font-black font-['Inter']    ">
                      {" "}
                    </span>
                    <span className="text-white leading-0 lg:leading-[90px] lx:text-8xl lg:text-7xl md:text-6xl text-4xl font-black font-['Inter']    ">
                      Engine oil 
                    </span>
                  </div>
                </div>
                <div className="flex ">
                  <div className="relative cursor-pointer xl:-top-[150px] lg:-top-[80px] mt-20 hidden lg:block">
                    <img src={PrevArrow} alt="" onClick={previousSlide} />
                  </div>
                  <div className="relative cursor-pointer xl:left-[700px] lg:left-[500px] xl:-top-[170px] lg:-top-[80px] mt-20 hidden lg:block">
                    <img src={NextArrow} alt="" onClick={nextSlide} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-16 mb-16">
        {slides.map((_: any, i: number) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={i}
            className={`w-4 h-4 bg-white rounded-full  ${
              i === current ? "bg-white" : "bg-opacity-20 bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Hero;
