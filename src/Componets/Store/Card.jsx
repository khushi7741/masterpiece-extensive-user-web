import { IconStarFilled } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({item}) => {
  return (
    <div className="bg-white shadow-md h-full">
      <img src={item.img1} alt="stree" className="h-full w-full" />
      <div className="p-5 w-full">
        <div className="flex flex-wrap justify-between border-b">
          <div className="flex mb-4">
            <img src={item.img2} alt="man" className="h-16 w-16 mr-4" />
            <div className="capitalize">
              <p className="2xl:text-2xl text-lg font-semibold mb-1">{item.heading}</p>
              <p className="2xl:text-lg text-base font-medium">{item.address}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex bg-green-500 items-center 2xl:py-1 px-3 rounded-xl mr-2">
              <p className="text-white 2xl:text-xl text-base mr-1.5">{item.rate}</p>
              <IconStarFilled className="2xl:h-5 h-3 2xl:w-5 w-3 text-white" />
            </div>
            <div className="text-gray-500 2xl:text-2xl text-lg">
              <p>{item.number}</p>
            </div>
          </div>
        </div>
        <div className="border-b">
          <div className="my-4 flex flex-wrap justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="bg-brown/10 p-3 rounded-full mr-2">
                <img
                  src={item.img3}
                  alt="stich" 
                  className="2xl:h-full h-5 2xl:w-full w-5"
                />
              </div>
              <div className="capitalize">
                <p className="text-gray-500 2xl:text-xl text-lg mb-1">{item.type}</p>
                <p className="2xl:text-2xl text-lg font-normal">{item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-brown/10 p-3 rounded-full mr-2">
                <img
                  src={item.img4}
                  alt="stich"
                  className="2xl:h-full h-5 2xl:w-full w-5"
                />
              </div>
              <div className="capitalize">
                <p className="text-gray-500 2xl:text-xl text-lg mb-1">{item.time}</p>
                <p className="2xl:text-2xl text-lg font-normal">{item.timelimit}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 capitalize">
          <div className="mb-4 2xl:text-2xl text-lg font-medium">{item.info}</div>
          <div className="flex flex-wrap gap-4">
            <Link
              to=""
              className="bg-brown/10 text-brown rounded-lg py-1 px-3 2xl:text-lg text-base font-medium"
            >
              {item.p1}
            </Link>
            <Link
              to=""
              className="bg-brown/10 text-brown rounded-lg py-1 px-3 2xl:text-lg text-base font-medium"
            >
              {item.p2}
            </Link>
            <Link
              to=""
              className="bg-brown/10 text-brown rounded-lg py-1 px-3 2xl:text-lg text-base font-medium"
            >
              {item.p3}
            </Link>
            <Link
              to=""
              className="bg-brown/10 text-brown rounded-lg py-1 px-3 2xl:text-lg text-base font-medium"
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
