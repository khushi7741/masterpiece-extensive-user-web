import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Data = () => {
  let data = [
    {
      img: "/Images/User/data/d1.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/d2.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/d3.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/d4.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/d5.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/d6.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/d7.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/d8.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/d9.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/s1.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/s2.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/s3.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/s4.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/s5.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
    {
      img: "/Images/User/data/s6.png",
      p1: "blouse",
      p2: "saree",
      p3: "bride",
      number: 123,
    },
  ];
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {data.map((item, i) => (
            <div key={i}>
              <img src={item.img} alt="d1" className="h-full w-full mb-4" />
              <div>fgf</div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Data;
