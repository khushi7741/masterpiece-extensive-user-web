import { IconStarFilled } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="h-full capitalize bg-white shadow-md">
      <img src={item.img1} alt="stree" className="w-full h-full" />
      <div className="w-full p-5">
        <div className="flex flex-wrap justify-between border-b">
          <div className="flex gap-3 mb-4">
            <img src={item.img2} alt="man" className="w-16 h-16" />
            <div>
              <p className="mb-1 text-lg font-semibold 2xl:text-2xl">
                {item.heading}
              </p>
              <p className="text-base font-medium 2xl:text-lg">
                {item.address}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1 px-3 bg-green-500 2xl:py-1 rounded-xl">
              <p className="text-base text-white 2xl:text-xl">{item.rate}</p>
              <IconStarFilled className="w-3 h-3 text-white 2xl:h-5 2xl:w-5" />
            </div>
            <div className="text-lg text-gray-500 2xl:text-2xl">
              <p>{item.number}</p>
            </div>
          </div>
        </div>
        <div className="border-b">
          <div className="flex flex-wrap justify-between my-4">
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
              <div className="p-3 rounded-full bg-BA570B/10">
                <img
                  src={item.img3}
                  alt="stich"
                  className="w-5 h-5 2xl:h-full 2xl:w-full"
                />
              </div>
              <div>
                <p className="mb-1 text-lg text-gray-500 2xl:text-xl">
                  {item.type}
                </p>
                <p className="text-lg font-normal 2xl:text-2xl">{item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-BA570B/10">
                <img
                  src={item.img4}
                  alt="stich"
                  className="w-5 h-5 2xl:h-full 2xl:w-full"
                />
              </div>
              <div>
                <p className="mb-1 text-lg text-gray-500 2xl:text-xl">
                  {item.time}
                </p>
                <p className="text-lg font-normal 2xl:text-2xl">
                  {item.timelimit}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 ">
          <div className="mb-4 text-lg font-medium 2xl:text-2xl">
            {item.info}
          </div>
          <div className="flex flex-wrap gap-4 text-base font-medium text-BA570B 2xl:text-lg">
            {item.outfits.map((e, i) => (
              <Link key={i} to="" className="px-3 py-1 rounded-lg bg-BA570B/10">
                {e}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
