import React from "react";

const HomePageHeading = ({ title, Text }) => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="md:text-5xl text-3xl font-bold text-brown font-Mazaeni capitalize">
          {title}
        </h2>
        {Text && <p className="mt-3">{Text}</p>}
      </div>
    </div>
  );
};

export default HomePageHeading;
