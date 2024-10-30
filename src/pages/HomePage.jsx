import React, { useState } from "react";
import HomePageHeading from "../Componets/Reusable/HomePageHeading";
import Card from "../Componets/Store/Card";
import Footer from "../Componets/Store/layout/Footer";
import ExploreBy from "../Componets/Store/Home/ExploreBy";
import Main from "../Componets/Store/Home/Main";
import Style from "../Componets/Store/Home/Style";
import Refer from "../Componets/Store/Refer";
import Layout from "../Componets/Store/layout/Layout";

const HomePage = () => {
  const [exploreBy, setExploreBy] = useState("outfit");
  const explore = [
    {
      img: "/Images/User/home/dress.png",
      code: "dress",
    },
    {
      img: "/Images/User/home/gown.png",
      code: "gown",
    },
    {
      img: "/Images/User/home/blouse.png",
      code: "blouse",
    },
    {
      img: "/Images/User/home/islamic.png",
      code: "islamic clothing",
    },
    {
      img: "/Images/User/home/dress.png",
      code: "dress",
    },
    {
      img: "/Images/User/home/gown.png",
      code: "gown",
    },
  ];
  let popular = [
    {
      img: "/Images/User/home/formal.png",
      code: "formal wear",
    },
    {
      img: "/Images/User/home/ethnic.png",
      code: "ethnic wear",
    },
    {
      img: "/Images/User/home/blouse2.png",
      code: "blouse",
    },
    {
      img: "/Images/User/home/islamic2.png",
      code: "islamic clothing",
    },
    {
      img: "/Images/User/home/formal.png",
      code: "formal wear",
    },
    {
      img: "/Images/User/home/ethnic.png",
      code: "ethnic wear",
    },
  ];
  let card = [
    {
      img1: "/Images/User/stree.png",
      img2: "/Images/User/man.png",
      heading: "etiquette tailors",
      address: "andheri,mumbai",
      rate: 4.8,
      number: "(51)",
      img3: "/Images/User/stich.png",
      type: "base stitching",
      price: "₹1000",
      img4: "/Images/User/vector.png",
      time: "approx.time",
      timelimit: "10 days",
      info: "known for",
      outfits: ["blouse", "lahenga", "embroidery", "beeding"],
    },
    {
      img1: "/Images/User/stree2.png",
      img2: "/Images/User/man.png",
      heading: "etiquette tailors",
      address: "andheri,mumbai",
      rate: 4.8,
      number: "(51)",
      img3: "/Images/User/stich.png",
      type: "base stitching",
      price: "₹1000",
      img4: "/Images/User/vector.png",
      time: "approx.time",
      timelimit: "10 days",
      info: "known for",
      outfits: ["blouse", "lahenga", "embroidery", "beeding"],
    },
    {
      img1: "/Images/User/stree3.png",
      img2: "/Images/User/man.png",
      heading: "etiquette tailors",
      address: "andheri,mumbai",
      rate: 4.8,
      number: "(51)",
      img3: "/Images/User/stich.png",
      type: "base stitching",
      price: "₹1000",
      img4: "/Images/User/vector.png",
      time: "approx.time",
      timelimit: "10 days",
      info: "known for",
      outfits: ["blouse", "lahenga", "embroidery", "beeding"],
    },
  ];
  let real = [
    "/Images/User/home/real1.png",
    "/Images/User/home/real2.png",
    "/Images/User/home/real1.png",
    "/Images/User/home/real2.png",
  ];
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
  ];
  return (
    <Layout>
      <div className="capitalize">
        <Main />
        <div className="p-8 mb-4 md:p-16 bg-E6C3AD/20">
          <ExploreBy exploreBy={exploreBy} setExploreBy={setExploreBy} />
          <div className="flex flex-wrap justify-start gap-9">
            {explore.map(({ img, code }, i) => (
              <div key={i} className="flex flex-col gap-3">
                <img src={img} alt="dress" />
                <p className="text-2xl font-semibold">{code}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8 bg-white">
          <HomePageHeading title={"popular stores"} />
          <div className="">
            <div className="flex flex-wrap justify-center w-full h-full mb-12 gap-9">
              {card.map((i, index) => (
                <Card item={i} index={index} />
              ))}
            </div>
            <div className="flex justify-center">
              <button className="px-4 py-1 font-semibold capitalize border rounded-md text-brown border-brown">
                view all
              </button>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-16 bg-E6C3AD/20">
          <HomePageHeading title={"trending picks"} />
          <div className="flex flex-wrap justify-center gap-9">
            {popular.map(({ img, code }, i) => (
              <div key={i} className="flex flex-col gap-4">
                <img src={img} alt="formal" />
                <p className="text-2xl font-semibold">{code}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8 bg-white md:p-16">
          <HomePageHeading title={"real creations"} />
          <div className="flex flex-wrap justify-center gap-9 mb-14">
            {real.map((v, i) => (
              <div key={i}>
                <img src={v} alt="real1" />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="px-4 py-1 font-semibold capitalize border rounded-md text-brown border-brown">
              view all
            </button>
          </div>
        </div>
        <div className="p-8 bg-E6C3AD/20">
          <HomePageHeading
            title={"style journal"}
            Text={
              "it's a sanctuary where trends meet personal flair, offering inspiration and guidance to all who seek to curate their unique fashion narrative."
            }
          />
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-start w-full h-full mb-12 gap-9">
            {style.map((i) => (
              <Style item={i} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="px-4 py-1 font-semibold capitalize border rounded-md text-brown border-brown">
              view all
            </button>
          </div>
        </div>
        <Refer />
      </div>
    </Layout>
  );
};

export default HomePage;
