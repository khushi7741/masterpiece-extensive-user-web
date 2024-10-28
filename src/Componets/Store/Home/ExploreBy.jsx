import React from "react";
import { Link } from "react-router-dom";

const ExploreBy = () => {
  return (
      <div className="flex md:flex-row flex-col items-center justify-center gap-8 mb-10">
        <h2 className="md:text-5xl text-4xl font-bold text-brown font-Mazaeni">
          Explore by
        </h2>
        <div className="flex sm:flex-row flex-col gap-4 text-brown">
          <Link
            to=""
            className="px-10 py-2 font-medium text-white rounded-md bg-brown"
          >
            outfit
          </Link>
          <Link
            to=""
            className="px-10 py-2 font-medium border rounded-md border-brown"
          >
            Price
          </Link>
          <Link
            to=""
            className="px-8 py-2 font-medium border rounded-md border-brown"
          >
            occasion
          </Link>
        </div>
      </div>
  );
};

export default ExploreBy;
