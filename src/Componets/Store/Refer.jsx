import React from "react";
import { Link } from "react-router-dom";

const Refer = () => {
  return (
    <div className="relative capitalize w-full">
      <img
        src="/Images/User/background.png"
        alt="background"
        className="md:h-full h-28 w-full"
      />
      <div className="flex absolute top-1/3 md:left-1/3 sm:left-1/4">
        <Link
          to=""
          className="bg-F6F2EC xl:text-4xl md:text-xl text-sm text-BA570B font-bold sm:px-12 py-2"
        >
          refer & earn points
        </Link>
      </div>
    </div>
  );
};

export default Refer;
