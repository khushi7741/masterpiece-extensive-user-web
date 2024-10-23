import React from "react";

const Slide = () => {
  const slide = [
    {
      img: "/Images/User/feed/m1.png",
    },
    {
      img: "/Images/User/feed/m3.png",
    },
    {
      img: "/Images/User/feed/m4.png",
    },
    {
      img: "/Images/User/feed/m5.png",
    },
    {
      img: "/Images/User/feed/m6.png",
    },
    {
      img: "/Images/User/feed/m7.png",
    },
    {
      img: "/Images/User/feed/m1.png",
    },
    {
      img: "/Images/User/feed/m3.png",
    },
    {
      img: "/Images/User/feed/m5.png",
    },
  ];
  return (
    <div className="flex gap-5 justify-center w-full mb-10">
      {slide.map(({ img }, i) => (
        <img src={img} alt="m3" key={i} />
      ))}
    </div>
  );
};

export default Slide;
