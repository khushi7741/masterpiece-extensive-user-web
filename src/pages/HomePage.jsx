import React from "react";
import Card from "../Componets/Store/Card";
import Style from "../Componets/Store/Home/Style";
import Refer from "../Componets/Store/Refer";
import Main from "../Componets/Store/Home/Main";
import Explore from "../Componets/Store/Explore";
import Popular from "../Componets/Store/Home/Popular";
import Real from "../Componets/Store/Home/Real";
import StyleJournal from "../Componets/Store/Home/StyleJournal";
import Footer from "../Componets/Store/Footer/Footer";

const HomePage = () => {
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
    <div className="capitalize">
      <Main />
      <div className="md:p-16 p-8 bg-E6C3AD/20 mb-4">
        <Explore />
        <div className="flex flex-wrap justify-center gap-9">
          {explore.map(({ img, code }, i) => (
            <div key={i}>
              <img src={img} alt="dress" className="mb-4" />
              <p className="text-2xl font-semibold">{code}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8 bg-white mb-4">
        <Popular />
        <div>
          <div className="flex flex-wrap justify-center w-full h-full mb-12 gap-9">
            {card.map((i) => (
              <Card item={i} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-BA570B font-semibold border border-BA570B rounded-md px-4 py-1 capitalize">
              view all
            </button>
          </div>
        </div>
      </div>
      <div className="md:p-16 p-8 bg-E6C3AD/20 mb-4">
        <Popular />
        <div className="flex flex-wrap justify-center gap-9">
          {popular.map(({ img, code }, i) => (
            <div key={i}>
              <img src={img} alt="formal" className="mb-4" />
              <p className="text-2xl font-semibold">{code}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:p-16 p-8 bg-white mb-4">
        <Real />
        <div className="flex flex-wrap justify-center gap-9 mb-14">
          {real.map((v, i) => (
            <div key={i}>
              <img src={v} alt="real1" />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-BA570B font-semibold border border-BA570B rounded-md px-4 py-1 capitalize">
            view all
          </button>
        </div>
      </div>
      <div className="p-8 bg-E6C3AD/20">
        <StyleJournal />
        <div className="flex flex-wrap justify-center w-full h-full mb-12 gap-9">
          {style.map((i) => (
            <Style item={i} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-BA570B font-semibold border border-BA570B rounded-md px-4 py-1 capitalize">
            view all
          </button>
        </div>
      </div>
      <Refer />
      <Footer />
    </div>
  );
};

export default HomePage;
