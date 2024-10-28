import React from "react";
import Explore from "../Componets/Store/Explore";
import Search from "../Componets/Store/Search";
import Card from "../Componets/Store/Card";
import More from "../Componets/Store/More";
import Refer from "../Componets/Store/Refer";

const Store = () => {
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
    {
      img1: "/Images/User/stree4.png",
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
      img1: "/Images/User/stree5.png",
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
  ];
  return (
    <div className="container mx-auto p-7">
      <Explore />
      <Search />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full h-full mb-12 gap-9">
        {card.map((i, index) => (
          <Card item={i} key={index} />
        ))}
      </div>
      <More />
      <Refer />
    </div>
  );
};

export default Store;
