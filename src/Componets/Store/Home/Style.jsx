import React from "react";

const Style = ({ item,tagCss }) => {
  return (
    <div className="capitalize font-semibold h-full flex flex-col gap-4">
      <div className="">
        <img src={item.img} alt="style1" className="w-full h-full" />
      </div>
      <div className="gap-4 flex flex-col">
        <div className="flex gap-3 text-brown">
          <div className={`${tagCss ? 'bg-F6F2EC' : 'bg-white'} rounded-lg px-3 py-1`}>{item.topic}</div>
          <div className={`${tagCss ? 'bg-F6F2EC' : 'bg-white'} rounded-lg px-3 py-1`}>{item.topic1}</div>
        </div>
        <div className="text-brown text-2xl md:w-56">
          <h3 className="font-Mazaeni">{item.title}</h3>
        </div>
        <div className="text-black/70">{item.date}</div>
        <div className="md:w-96 text-black/70">{item.content}</div>
      </div>
    </div>
  );
};

export default Style;
