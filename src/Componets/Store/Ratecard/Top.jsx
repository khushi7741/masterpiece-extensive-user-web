import React from "react";

const Top = () => {
  let top = [
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
    {
      img1: "/Images/User/top.png",
      topname: "blouson",
      img2: "/Images/User/stich.png",
      price: "₹1200",
      img3: "/Images/User/vector.png",
      time: "12 days",
    },
  ];
  return (
    <div className="capitalize font-semibold mb-5">
      <h1 className="text-center p-2 bg-E6C3AD text-brown text-2xl font-Mazaeni">
        top
      </h1>
      <div className="bg-EEF6F6 flex flex-wrap lg:justify-end justify-center p-2 gap-6 text-md">
        <div className="flex items-center gap-3">
          <img
            src="/Images/User/stich.png"
            alt="stich"
            className="h-4 w-5 bg-fill"
          />
          <p>- base stitching rate</p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/Images/User/vector.png"
            alt="stich"
            className="h-4 w-4 bg-fill"
          />
          <p>- approximate time</p>
        </div>
      </div>
      <div className="bg-fill">
        <div className="p-5 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 w-full gap-10">
          {top.map(({ img1, img2, img3, topname, price, time }, i) => (
            <div className="grid justify-center" key={i}>
              <img src={img1} alt="top" />
              <p className="text-center my-1">{topname}</p>
              <div className="flex bg-white rounded-lg px-3 gap-2">
                <div className="flex items-center gap-2 ">
                  <img src={img2} alt="stich" className="h-4 w-4" />
                  <p>{price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={img3} alt="vector" className="h-4 w-4" />
                  <p>{time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;
