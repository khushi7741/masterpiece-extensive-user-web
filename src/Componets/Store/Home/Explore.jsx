import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
      <div className="flex md:flex-row flex-col items-center justify-center gap-8 mb-10">
        <h2 className="md:text-5xl text-4xl font-bold text-BA570B font-Mazaeni">
          Explore by
        </h2>
        <div className="flex sm:flex-row flex-col gap-4 text-BA570B">
          <Link
            to=""
            className="px-10 py-2 font-medium text-white rounded-md bg-BA570B"
          >
            outfit
          </Link>
          <Link
            to=""
            className="px-10 py-2 font-medium border rounded-md border-BA570B"
          >
            Price
          </Link>
          <Link
            to=""
            className="px-8 py-2 font-medium border rounded-md border-BA570B"
          >
            occasion
          </Link>
        </div>
      </div>
  );
};

export default Explore;
