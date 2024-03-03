import PageHeader from "../components/product/PageHeader";
import { FaUserShield } from "react-icons/fa6";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center">
        <PageHeader title="About Us"></PageHeader>
        <div className="flex w-full justify-center container max-w-screen-xl mx-auto py-[5%]">
          <div className="flex w-full flex-col justify-center gap-10 px-8">
            <div className="text-white flex flex-col w-full justify-center rounded-lg border-[#D7B867] border-2 py-[5%]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10 px-6">
                <div className="flex flex-col gap-4 md:pl-4 pt-2 text-[#D7B867] text-3xl">
                  <div className="text-[40px]">
                    HOH®
                  </div>
                  <div className="text-white font-[46px]">
                    DELIVERING
                    GOLD
                    PERFORMANCE
                  </div>
                </div>
                <div className="flex text-[20px] leading-8 tracking-wide">
                  HOH LUBRICANT® Gold Performance is a leading name in the lubricant Industry. It offers a wide range of lubricants and grease products that caters to the demand of automotive, industrial, agricultural, transport, and mining sectors. Building on an experience spanning over two decades and research at our own laboratories, our team of qualified petroleum engineers work proactively to meet consumer needs and deliver quality products consistently. A global reach spanning over 70 countries and 5 continents with 200+ global partners makes BENZOL® a truly international brand.
                </div>
                <div className="flex text-[20px] leading-8 tracking-wide">
                  By having earned accreditations from The European Engine Lubricant Quality Management System (EELQMS), ISO 9001-2015, ISO 14001-2015, ISO 45001-2018 for our production, we are not only able to maintain and assure our quality, but also are able to realize our commitment towards a carbon neutral footprint through energy efficient manufacturing and maintaining a safe and healthy working environment at our Global Lubricant Industry plant.
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-10">
              <div className="text-white flex flex-col w-full justify-center rounded-lg border-[#D7B867] border-2">
                <div className="flex w-full justify-center pt-[10%]">
                  <div className="flex items-center text-3xl text-start font-bold">
                    <div className="flex w-16 bg-red-400 h-1 mr-3 text-[30px] leading-8 tracking-wide"></div>
                    Our Mission
                  </div>
                </div>
                <div className="flex flex-col px-[10%] pb-[10%] justify-center">
                  <div className="flex w-full justify-center">
                    <p className="text-[20px] leading-8 tracking-wide mt-10 w-full">
                      Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                      udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                      gravida. Risus commodo viverra sebfd dho eiusmod tempor
                      maecenas accumsan lacus. Risus commodo viverra sebfd dho
                      eiusmod tempor maecenas accumsan lacus.
                    </p>
                  </div>
                  <div className="flex w-full justify-center">
                    <p className="text-[20px] leading-8 tracking-wide mt-10 w-full">
                      Risus commodo viverra sebfd dho eiusmod tempor maecenas
                      accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
                      maecenas accumsan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-white flex flex-col w-full justify-center  rounded-lg shadow-lg border-[#D7B867] border-2">
                <div className="flex w-full justify-center pt-[10%]">
                  <div className="flex items-center text-3xl text-start font-bold">
                    <div className="flex w-16 bg-red-400 h-1 mr-3 text-[30px] leading-8 tracking-wide"></div>
                    Our Vision
                  </div>
                </div>
                <div className="flex flex-col px-[10%] pb-[10%] justify-center">
                  <div className="flex w-full justify-center">
                    <p className="text-[20px] leading-8 tracking-wide mt-10 w-full">
                      Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                      udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                      gravida. Risus commodo viverra sebfd dho eiusmod tempor
                      maecenas accumsan lacus. Risus commodo viverra sebfd dho
                      eiusmod tempor maecenas accumsan lacus.
                    </p>
                  </div>
                  <div className="flex w-full justify-center">
                    <p className="text-[20px] leading-8 tracking-wide mt-10 w-full">
                      Risus commodo viverra sebfd dho eiusmod tempor maecenas
                      accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
                      maecenas accumsan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="flex w-full">
          <section className="bg-[#BD8C3B] w-full py-16">
            <div className="flex flex-col w-full mb-16 gap-2">
              <div className="flex w-full justify-center">
                <div className="text-2xl text-white text-[26px] uppercase">Our Values</div>
              </div>
              <div className="flex w-full justify-center">
                <div className="flex w-4 px-8 h-0.5 bg-white"></div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-center gap-[15%]">
              <div className="flex text-center flex-col justify-center gap-4">
                <div className="flex w-full justify-center">
                  <FaUserShield className="text-white text-[100px] border-white border p-4 border-0.5 rounded-full" />
                </div>
                <div className="uppercase font-bold text-white text-[20px]">
                  Fidelity
                </div>
              </div>
              <div className="flex text-center flex-col justify-center md:mt-0 mt-16 gap-4">
                <div className="flex w-full justify-center">
                  <FaHandHoldingWater className="text-white text-[100px] border-white border p-4 border-0.5 rounded-full" />
                </div>
                <div className="uppercase font-bold text-white text-[20px]">
                  Integrity
                </div>
              </div>
              <div className="flex text-center flex-col justify-center md:mt-0 mt-16 gap-4">
                <div className="flex w-full justify-center">
                  <FaRecycle className="text-white text-[100px] border-white border p-4 border-0.5 rounded-full" />
                </div>
                <div className="uppercase font-bold text-white text-[20px]">
                  Sustainability
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
