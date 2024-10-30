import {
  IconChevronDown,
  IconDeviceMobileDown,
  IconMapPin,
  IconMenu2,
  IconMessageStar,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ dropDown, setDropDown }) => {
  return (
    <div className="relative">
      <div className="w-full bg-B7AEAE">
        <div className="container mx-auto">
          <div className="py-4">
            <div className="flex justify-between max-lg:flex-col">
              <div className="">
                <p className="font-semibold max-sm:text-center">
                  Elevating Your Style, Tailoring Dreams into Wearable Art with
                  Skilled Artisans and Designers.
                </p>
              </div>
              <div className="flex justify-start gap-8 font-semibold capitalize lg:justify-between max-lg:mt-5 max-xs:gap-4 max-xs:justify-between">
                <div className="flex items-center gap-2">
                  <IconMessageStar className="w-7 h-7" />
                  <p>write a review</p>
                </div>
                <div className="flex items-center gap-2">
                  <IconDeviceMobileDown className="w-7 h-7" />
                  <p>download app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-1400px mx-auto">
          <nav className="flex items-center justify-between py-2">
            <IconMenu2
              className="w-8 h-8 lg:hidden"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            />
            <div className="flex items-center gap-2 max-lg:hidden">
              <div className="w-12 h-12">
                <img src="/Images/User/logo.png" alt="" />
              </div>
              <h1 className="text-3xl font-semibold font-Mazaeni">
                Masterpiece
              </h1>
            </div>
            <div className="space-x-6 text-xl font-semibold md:flex text-brown max-lg:hidden">
              <Link to="#" className="">
                Stores
              </Link>
              <Link to="#" className="">
                Feed
              </Link>
              <Link to="#" className="">
                Planner
              </Link>
              <Link to="#" className="">
                Journal
              </Link>
            </div>
            <div className="flex items-center space-x-4 max-lg:justify-end">
              <div className="items-center hidden space-x-2 md:flex">
                <IconSearch size={20} className="w-6 h-6 text-brown" />
                <span>Search</span>
              </div>
              <div className="flex items-center space-x-1">
                <IconMapPin size={20} className="w-6 h-6 text-brown" />
                <span>Mumbai</span>
                <IconChevronDown size={16} className="w-6 h-6 text-brown" />
              </div>
              <div className="w-8 h-8 overflow-hidden rounded-full">
                <img
                  src="/Images/User/logo.png"
                  alt="User profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {dropDown && (
              <div className="absolute top-0 left-0 bg-gray-500/40 w-full h-screen z-50">
                <div className="w-72 h-screen bg-fill p-2">
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12">
                        <img src="/Images/User/logo.png" alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-2xl font-semibold font-Mazaeni">
                          Masterpiece
                        </h1>
                      </div>
                    </div>
                    <div className="">
                      <IconX
                        className="w-8 h-8"
                        onClick={() => {
                          setDropDown(!dropDown);
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-5 text-xl font-semibold flex flex-col text-brown ml-4 mt-7">
                    <Link to="#" className="">
                      Stores
                    </Link>
                    <Link to="#" className="">
                      Feed
                    </Link>
                    <Link to="#" className="">
                      Planner
                    </Link>
                    <Link to="#" className="">
                      Journal
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
