import { useState, useEffect } from "react";
import { NextArrow, PrevArrow } from "../../assets/hero";
import { HeroBg } from "../../assets/images";

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
    backgroundImage: `url(${HeroBg})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="flex flex-col w-full jusify-center -pt-40">
        <div
          className="flex lg:h-screen sm:h-48 md:h-96 h-52 flex-col w-full bg-white justify-center inline-flex"
          style={heroStyle}
        >
          <div className="flex-col w-full justify-center container max-w-screen-xl mx-auto px-4 mb-20">
            <div className="flex w-full justify-center lx:w-[80%] items-center justify-center text-center">
              <div className="flex flex-col w-full  lg:w-[60%] justify-center leading-4 md:px-0 px-0">
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
    </>
  );
};

export default Hero;
