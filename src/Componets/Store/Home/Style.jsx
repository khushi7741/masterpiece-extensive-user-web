import React from "react";

const Style = ({ item }) => {
  return (
    <div className="capitalize font-semibold h-full">
      <div className="mb-4">
        <img src={item.img} alt="style1" className="w-full h-full" />
      </div>
      <div className="flex gap-3 text-BA570B mb-4">
        <div className="bg-white rounded-lg px-3 py-1">{item.topic}</div>
        <div className="bg-white rounded-lg px-3 py-1">{item.topic1}</div>
      </div>
      <div className="text-BA570B text-2xl md:w-56 mb-4">
        <h3 className="font-Mazaeni">{item.title}</h3>
      </div>
      <div className="text-black/70 mb-4">{item.date}</div>
      <div className="md:w-96 text-black/70">{item.content}</div>
    </div>
  );
};

export default Style;
