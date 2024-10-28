import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandPinterest,
} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import SvgPlayStore from "../../../Svg/SvgPlayStore";
import SvgApple from "../../../Svg/SvgApple";

const Footer = () => {
  const linkdata = [
    {
      link_name: "stores",
      link: "/user/stores",
    },
    {
      link_name: "inspirations",
      link: "/user/stores",
    },
    {
      link_name: "planner",
      link: "/user/stores",
    },
    {
      link_name: "journal",
      link: "/user/stores",
    },
    {
      link_name: "about us",
      link: "/user/stores",
    },
    {
      link_name: "feedback",
      link: "/user/stores",
    },
  ];
  return (
    <div className="bg-E6D7D7 md:px-16 px-8 py-10">
      <div className="mt-8 flex flex-col gap-10 justify-center items-center border-b-2 border-b-brown">
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <img src="/Images/User/logo.png" alt="logo" />
          <h2 className="font-Mazaeni text-4xl text-black/80">masterpiece</h2>
        </div>
        <div className="flex flex-wrap mb-10">
          {linkdata.map(({ link_name, link }, i) => (
            <Link
              key={i}
              to={link}
              className={`px-7 lg:mb-0 mb-2 ${
                i === linkdata.length - 1 ? "" : "border-r border-r-gray-400"
              } font-semibold`}
            >
              {link_name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-5 flex xl:flex-row flex-col justify-between font-medium text-black/90 text-nowrap items-center">
        <div className="flex md:flex-row flex-col gap-6 xl:mb-0 mb-3">
          <div className="text-wrap">
            © 2024 masterpiece. all rights reserved.
          </div>
          <Link to="" className="underline">
            privacy policy
          </Link>
          <Link to="" className="underline">
            Terms of service
          </Link>
        </div>
        <div className="flex flex-wrap !items-center md:gap-7 gap-4 xl:mb-0 mb-3">
          <div>download app</div>
          <div className="flex flex-wrap !items-center gap-4">
            <SvgPlayStore />
            <SvgApple />
          </div>
        </div>
        <div className="flex gap-7">
          <IconBrandFacebookFilled className="h-8 w-8" />
          <IconBrandInstagram className="h-8 w-8" />
          <IconBrandPinterest className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
