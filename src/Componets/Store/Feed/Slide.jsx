import React from "react";

const Slide = () => {
  const slide = [
    "/Images/User/feed/m1.png",
    "/Images/User/feed/m3.png",
    "/Images/User/feed/m4.png",
    "/Images/User/feed/m5.png",
    "/Images/User/feed/m6.png",
    "/Images/User/feed/m7.png",
    "/Images/User/feed/m1.png",
    "/Images/User/feed/m3.png",
    "/Images/User/feed/m5.png",
  ];
  return (
    <div className="flex justify-center w-full gap-5 mb-10">
      {slide.map((v, i) => (
        <img src={v} alt="m3" key={i} />
      ))}
    </div>
  );
};

export default Slide;
