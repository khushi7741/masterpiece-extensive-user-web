import React from "react";
import {
  IconAdjustmentsHorizontal,
  IconChevronDown,
  IconSearch,
} from "@tabler/icons-react";
import Style from "../Home/Style";

const BlogPost = () => {
  const HandleAllFilter = () => {};
  let style = [
    {
      img: "/Images/User/home/style1.png",
      topic: "saree",
      topic1: "islamic clothing",
      title: "discovering your unique fashion story",
      date: "11th mar 2024 by jeet vora",
      content:
        "discoverles and self expressions,explore, embrace, and curate a wardr....",
      link: "read more",
    },
    {
      img: "/Images/User/home/style2.png",
      topic: "saree",
      topic1: "islamic clothing",
      title: "discovering your unique fashion story",
      date: "11th mar 2024 by jeet vora",
      content:
        "discoverles and self expressions,explore, embrace, and curate a wardr....",
      link: "read more",
    },
    {
      img: "/Images/User/home/style3.png",
      topic: "saree",
      topic1: "islamic clothing",
      title: "discovering your unique fashion story",
      date: "11th mar 2024 by jeet vora",
      content:
        "discoverles and self expressions,explore, embrace, and curate a wardr....",
      link: "read more",
    },
    {
      img: "/Images/User/home/style1.png",
      topic: "saree",
      topic1: "islamic clothing",
      title: "discovering your unique fashion story",
      date: "11th mar 2024 by jeet vora",
      content:
        "discoverles and self expressions,explore, embrace, and curate a wardr....",
      link: "read more",
    },
    {
      img: "/Images/User/home/style2.png",
      topic: "saree",
      topic1: "islamic clothing",
      title: "discovering your unique fashion story",
      date: "11th mar 2024 by jeet vora",
      content:
        "discoverles and self expressions,explore, embrace, and curate a wardr....",
      link: "read more",
    },
    {
      img: "/Images/User/home/style3.png",
      topic: "saree",
      topic1: "islamic clothing",
      title: "discovering your unique fashion story",
      date: "11th mar 2024 by jeet vora",
      content:
        "discoverles and self expressions,explore, embrace, and curate a wardr....",
      link: "read more",
    },
  ];
  return (
    <div className="m-8">
      <div className="container mx-auto flex flex-col gap-8"> 
        <div className=" flex lg:flex-row flex-col justify-between">
          <h1 className="text-3xl font-Mazaeni lg:mb-0 mb-4">All blog posts</h1>
          <div className="flex sm:flex-row flex-col gap-3 capitalize">
            <div className="relative">
              <input
                type="search"
                placeholder="search...."
                className="border border-brown rounded-lg px-10 py-1.5 w-full"
              />
              <IconSearch className="h-5 w-5 text-gray-500 absolute top-2 left-3" />
            </div>
            <div className="flex gap-2 border border-E8E8E8 rounded-3xl py-1 px-4 items-center w-fit">
              <button
                onClick={HandleAllFilter}
                className="capitalize text-gray-400 font-medium"
              >
                all filters
              </button>
              <IconAdjustmentsHorizontal className="h-5 w-5 text-brown" />
            </div>
            <div className="flex gap-2 border border-E8E8E8 rounded-3xl py-1 px-4 items-center w-fit">
              <button className="capitalize text-gray-400 font-medium">
                sort by: latest
              </button>
              <IconChevronDown className="h-5 w-5 text-brown" />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  w-full h-full mb-12 gap-9 ">
          {style.map((i) => (
            <Style item={i} tagCss/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
