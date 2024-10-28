import React from "react";
import { Link } from "react-router-dom";

const Refer = () => {
  return (
    <div className="relative capitalize w-full">
        <img
          src="/Images/User/home/refer.png"
          alt="refer"
          className="md:h-full h-28 w-full"
        />
        <div className="flex justify-center items-center absolute top-0 h-full w-full">
          <Link
            to=""
            className="bg-F6F2EC xl:text-4xl md:text-xl text-sm text-brown font-bold px-12 py-2 font-Mazaeni flex justify-center items-center"
          >
            refer & earn points
          </Link>
        </div>
      </div>
  );
};

export default Refer;
