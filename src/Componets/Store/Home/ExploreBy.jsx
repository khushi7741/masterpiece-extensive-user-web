import React from "react";
import { Link } from "react-router-dom";

const ExploreBy = ({ exploreBy, setExploreBy }) => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-8 mb-10">
      <h2 className="md:text-5xl text-4xl font-bold text-brown font-Mazaeni">
        Explore by
      </h2>
      <div className="flex sm:flex-row flex-col gap-4 text-brown font-medium">
        <div
          onClick={() => setExploreBy("outfit")}
          className={`px-10 py-2  rounded-md  ${
            exploreBy === "outfit"
              ? "bg-brown text-white"
              : "border border-brown"
          }`}
        >
          outfit
        </div>
        <div
          onClick={() => setExploreBy("price")}
          className={`px-10 py-2 border rounded-md ${
            exploreBy === "price"
              ? "bg-brown text-white"
              : "border border-brown"
          }`}
        >
          Price
        </div>
        <div
          onClick={() => setExploreBy("occasion")}
          className={`px-8 py-2 border rounded-md ${
            exploreBy === "occasion"
              ? "bg-brown text-white"
              : "border border-brown"
          }`}
        >
          occasion
        </div>
      </div>
    </div>
  );
};

export default ExploreBy;
