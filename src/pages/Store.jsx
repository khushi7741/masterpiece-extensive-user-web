import React from "react";
import Explore from "../Componets/Store/Explore";
import Search from "../Componets/Store/Search";
import Card from "../Componets/Store/Card";
import More from "../Componets/Store/More";
import Refer from "../Componets/Store/Refer";

const Store = () => {
  let card = [
    {
      img1: "/images/stree.png",
      img2: "/images/man.png",
      heading: "etiquette tailors",
      address: "andheri,mumbai",
      rate: 4.8,
      number: "(51)",
      img3: "/images/stich.png",
      type: "base stitching",
      price: "₹1000",
      img4: "/images/vector.png",
      time: "approx.time",
      timelimit: "10 days",
      info: "known for",
      p1: "blouse",
      p2: "lahenga",
      p3: "embroidery",
      p4: "beeding",
    },
    {
      img1: "/images/stree2.png",
      img2: "/images/man.png",
      heading: "etiquette tailors",
      address: "andheri,mumbai",
      rate: 4.8,
      number: "(51)",
      img3: "/images/stich.png",
      type: "base stitching",
      price: "₹1000",
      img4: "/images/vector.png",
      time: "approx.time",
      timelimit: "10 days",
      info: "known for",
      p1: "blouse",
      p2: "lahenga",
      p3: "embroidery",
      p4: "beeding",
    },
    {
      img1: "/images/stree3.png",
      img2: "/images/man.png",
      heading: "etiquette tailors",
      address: "andheri,mumbai",
      rate: 4.8,
      number: "(51)",
      img3: "/images/stich.png",
      type: "base stitching",
      price: "₹1000",
      img4: "/images/vector.png",
      time: "approx.time",
      timelimit: "10 days",
      info: "known for",
      p1: "blouse",
      p2: "lahenga",
      p3: "embroidery",
      p4: "beeding",
    },
    {
      img1: "/images/stree4.png",
      img2: "/images/man.png",
      heading: "etiquette tailors",
      address: "andheri,mumbai",
      rate: 4.8,
      number: "(51)",
      img3: "/images/stich.png",
      type: "base stitching",
      price: "₹1000",
      img4: "/images/vector.png",
      time: "approx.time",
      timelimit: "10 days",
      info: "known for",
      p1: "blouse",
      p2: "lahenga",
      p3: "embroidery",
      p4: "beeding",
    },
    {
      img1: "/images/stree5.png",
      img2: "/images/man.png",
      heading: "etiquette tailors",
      address: "andheri,mumbai",
      rate: 4.8,
      number: "(51)",
      img3: "/images/stich.png",
      type: "base stitching",
      price: "₹1000",
      img4: "/images/vector.png",
      time: "approx.time",
      timelimit: "10 days",
      info: "known for",
      p1: "blouse",
      p2: "lahenga",
      p3: "embroidery",
      p4: "beeding",
    },
    {
      img1: "/images/stree.png",
      img2: "/images/man.png",
      heading: "etiquette tailors",
      address: "andheri,mumbai",
      rate: 4.8,
      number: "(51)",
      img3: "/images/stich.png",
      type: "base stitching",
      price: "₹1000",
      img4: "/images/vector.png",
      time: "approx.time",
      timelimit: "10 days",
      info: "known for",
      p1: "blouse",
      p2: "lahenga",
      p3: "embroidery",
      p4: "beeding",
    },
  ];
  return (
    <div className="container mx-auto p-7">
      <Explore />
      <Search />
      <div className="flex flex-wrap w-full h-full gap-9 justify-center mb-12">
        {card.map((i) => <Card item={i}/>)}
      </div>
      <More />
      <Refer />
    </div>
  );
};

export default Store;
