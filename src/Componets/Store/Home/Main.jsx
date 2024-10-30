import { IconArrowZigZag, IconSearch } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative w-full mb-2">
      <div className="">
        <img
          src="/Images/User/home/backimg.jpg"
          alt="backimg"
          className="w-full md:h-full h-96"
        />
      </div>
      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full text-white">
        <div className="flex flex-col items-center justify-center w-full lg:gap-10 md:gap-5 gap-3">
          <h1 className="w-1/2 text-xl font-bold text-center xl:text-7xl lg:text-5xl md:text-2xl font-Mazaeni">
            promoting custom fashion,for your perfect fits!
          </h1>
          <div className="relative w-4/5 lg:w-2/5">
            <input
              className="w-full md:px-12 pl-4 pr-12 py-2 rounded-lg lg:py-4 md:placeholder:text-base placeholder:text-sm placeholder:capitalize"
              placeholder="search for designs,patterns"
            />
            <IconSearch className="absolute w-6 h-6 text-brown lg:top-4 top-2 md:left-3 max-md:right-3" />
            <button className="absolute px-2 rounded-md md:px-6 lg:py-2 bg-brown right-3 top-2 max-md:hidden">
              search
            </button>
          </div>
          <div className="flex max-sm:flex-col items-center gap-2 text-sm md:flex-row md:gap-5">
            <div className="flex gap-1">
              <p className="text-lg font-semibold">Popular searches</p>
              <IconArrowZigZag className="w-6 h-6" />
            </div>
            <div className="grid sm:grid-cols-[auto_auto_auto_auto] grid-cols-2 justify-center gap-2 text-sm md:flex-row md:gap-5">
              <Link
                to=""
                className="px-4 py-2 border sm:w-fit max-sm:text-center bg-brown/20 rounded-3xl border-fill/30"
              >
                lehenga
              </Link>
              <Link
                to=""
                className="px-4 py-2 border sm:w-fit max-sm:text-center bg-brown/20 rounded-3xl border-fill/30"
              >
                formal wear
              </Link>
              <Link
                to=""
                className="px-4 py-2 border sm:w-fit max-sm:text-center bg-brown/20 rounded-3xl border-fill/30"
              >
                party wear
              </Link>
              <Link
                to=""
                className="px-4 py-2 border sm:w-fit max-sm:text-center bg-brown/20 rounded-3xl border-fill/30"
              >
                saree
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
