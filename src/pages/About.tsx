import PageHeader from "../components/product/PageHeader";
import Header from "../components/shared/Header";

const About = () => {
  return (
    <>
      <div className="flex flex-col container max-w-screen-xl mx-auto px-4">
        <Header isMain={false} />
        <PageHeader title="Contact Us"></PageHeader>
        <div className="flex flex-col w-full justify-center">
          <div className="flex w-full justify-center">
            <div className="w-full mb-50 mt-10 justify-center">
              <div className="flex items-center text-3xl text-start font-bold">
                <div className="flex w-16 bg-red-400 h-1 mr-3"></div>
                Our Mission
              </div>
              <p className="leading-5 mt-10 lg:w-[40%] w-full">
                Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas
                accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
                maecenas accumsan lacus.
              </p>
              <p className="leading-5 lg:w-[40%] w-full">
                Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
                lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
                accumsan.
              </p>
            </div>
          </div>
          <div className="flex items-center text-3xl text-start font-bold mt-10">
            <div className="flex w-16 bg-red-400 h-1 mr-3"></div>
            Our Vision
          </div>
          <div className="mt-10">
            <p className="leading-5 mt-10 lg:w-[40%] w-full">
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
              labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan lacus.
            </p>
            <p className="leading-5 lg:w-[40%] w-full">
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
