import { IconAdjustmentsHorizontal, IconSearch } from "@tabler/icons-react";
import React from "react";

const Search = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full justify-between mb-6">
      <div className="flex flex-wrap capitalize gap-3 mb-4">
        <div className="flex border border-light-gray rounded-3xl py-1 px-4 items-center">
          <p className="mr-2 text-gray-600">filter & sort</p>
          <IconAdjustmentsHorizontal className="h-5 w-5 text-brown" />
        </div>
        <div className="flex border border-light-gray rounded-3xl py-1 px-4 items-center">
          <p className="text-gray-600">distance</p>
        </div>
        <div className="flex border border-light-gray rounded-3xl py-1 px-4 items-center">
          <p className="text-gray-600">rating: high to low</p>
        </div>
        <div className="flex border border-light-gray rounded-3xl py-1 px-4 items-center">
          <p className="text-gray-600">rate: low to high</p>
        </div>
        <div className="flex border border-light-gray rounded-3xl py-1 px-4 items-center">
          <p className="text-gray-600">trending</p>
        </div>
      </div>
      <div className="relative">
        <input type="search" placeholder="search...." className="border border-brown rounded-lg px-10 py-1.5 w-full" />
        <IconSearch className="h-5 w-5 text-gray-500 absolute top-2 left-3"/>
      </div>
    </div>
  );
};

export default Search;
