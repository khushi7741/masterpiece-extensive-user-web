import { IconStarFilled } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({item}) => {
  return (
    <div className="bg-white shadow-md h-full capitalize">
      <img src={item.img1} alt="stree" className="h-full w-full" />
      <div className="p-5 w-full">
        <div className="flex flex-wrap justify-between border-b">
          <div className="flex gap-3 mb-4">
            <img src={item.img2} alt="man" className="h-16 w-16" />
            <div>
              <p className="2xl:text-2xl text-lg font-semibold mb-1">{item.heading}</p>
              <p className="2xl:text-lg text-base font-medium">{item.address}</p>
            </div>
          </div>
          <div className="flex items-center mb-4 gap-2">
            <div className="flex bg-green-500 items-center 2xl:py-1 px-3 rounded-xl gap-1">
              <p className="text-white 2xl:text-xl text-base">{item.rate}</p>
              <IconStarFilled className="2xl:h-5 h-3 2xl:w-5 w-3 text-white" />
            </div>
            <div className="text-gray-500 2xl:text-2xl text-lg">
              <p>{item.number}</p>
            </div>
          </div>
        </div>
        <div className="border-b">
          <div className="my-4 flex flex-wrap justify-between">
            <div className="flex items-center mb-4 sm:mb-0 gap-3">
              <div className="bg-BA570B/10 p-3 rounded-full">
                <img
                  src={item.img3}
                  alt="stich" 
                  className="2xl:h-full h-5 2xl:w-full w-5"
                />
              </div>
              <div>
                <p className="text-gray-500 2xl:text-xl text-lg mb-1">{item.type}</p>
                <p className="2xl:text-2xl text-lg font-normal">{item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-BA570B/10 p-3 rounded-full">
                <img
                  src={item.img4}
                  alt="stich"
                  className="2xl:h-full h-5 2xl:w-full w-5"
                />
              </div>
              <div>
                <p className="text-gray-500 2xl:text-xl text-lg mb-1">{item.time}</p>
                <p className="2xl:text-2xl text-lg font-normal">{item.timelimit}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 ">
          <div className="mb-4 2xl:text-2xl text-lg font-medium">{item.info}</div>
          <div className="flex flex-wrap gap-4 text-BA570B text-base font-medium 2xl:text-lg">
            <Link
              to=""
              className="bg-BA570B/10 rounded-lg py-1 px-3"
            >
              {item.p1}
            </Link>
            <Link
              to=""
              className="bg-BA570B/10 rounded-lg py-1 px-3"
            >
              {item.p2}
            </Link>
            <Link
              to=""
              className="bg-BA570B/10 rounded-lg py-1 px-3"
            >
              {item.p3}
            </Link>
            <Link
              to=""
              className="bg-BA570B/10 rounded-lg py-1 px-3"
            >
              {item.p4}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
