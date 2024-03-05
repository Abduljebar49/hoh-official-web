import { Link } from "react-router-dom";
import PageHeader from "../components/product/PageHeader";
import SocialMediaLinks from "../components/shared/SocialMediaLinks";
import { email, phoneNumber } from "../config/constants";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col bg-primary">
        <PageHeader title="Contact Us"></PageHeader>
        <div className="bg-primary text-white px-6 py-24 sm:py-32 lg:px-8 container max-w-screen-xl mx-auto">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex flex-col w-full lg:w-2/3 px-10 justify-end">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-white leading-10 uppercase text-[30px] tracking-tight text-white sm:text-4xl">
                  Get in touch
                </h2>
                <div className="flex w-full justify-center">
                  <div className="flex w-20 px-20 h-0.5 bg-[#D7B867] my-8"></div>
                </div>
                <p className="text-white mt-2 text-lg leading-8 text-gray-600 uppercase">
                HOH LUBRICANT LUBRICANTS – WE DEAL WITH A WIDE RANGE OF LUBRICANTS & GREASE
                </p>
              </div>
              <form
                action="#"
                method="POST"
                className="mt-16"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="text-white block text-sm font-semibold leading-6 text-white"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-primary border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-primary border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Company
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full rounded-md bg-primary border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-primary border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Phone number
                    </label>
                    <div className="relative mt-2.5">
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="country" className="sr-only">
                          Country
                        </label>
                      </div>
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md bg-primary border-0 px-3.5 py-2 pl-20 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md bg-primary border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-primary bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
                <div className="flex w-full justify-center mt-10 gap-10">
                  <div className="flex text-xl">Follow Us On Social Media!</div>
                  <div className="flex justify-center items-center">
                    <SocialMediaLinks />
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-col lg:w-1/3 w-full gap-10">
              <div className="flex flex-col p-4 border-2 border-[#D7B867] border rounded-lg w-full gap-4">
                <p className="text-xl font-bold text-red-400">Ethiopia</p>
                <div className="flex flex-col gap-2">
                  <p>Address 1</p>
                  <p>Address 2</p>
                  <div className="flex flex-col">
                    <span className="text-red-400">Tel: </span>
                    {phoneNumber.map((ele: string, i: number) => (
                      <div className="flex ml-10" key={i}>
                        <Link
                          to={`tel:${ele}`}
                          aria-label="Our phone"
                          title="Our phone"
                          className="text-white transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                          {ele}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-4 border-2 border-[#D7B867] border rounded-lg w-full gap-3">
                <div className="flex">
                  <span className="text-red-400">Email: </span>&nbsp;
                  {email}
                </div>
                <div className="flex">
                  <span className="text-red-400">Website: </span>&nbsp;
                  www.hohlubricant.com
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
