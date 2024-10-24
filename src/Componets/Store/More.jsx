import React from "react";
import { Link } from "react-router-dom";

const More = () => {
  const more = [
    "lehenga",
    "blouse",
    "fall",
    "party wear",
    "skirt",
    "sharara",
    "gown",
    "dress",
    "formal wear",
    "pants",
    "formal paint",
    "indian suit",
    "jump suit",
    "islamic clothing",
    "saree",
    "gharara",
    "shirt",
    "top",
    "kaftan",
  ];
  return (
    <div className="mb-10 capitalize">
      <h1 className="mb-8 text-2xl font-semibold">
        there's so much more for you to discover
      </h1>
      <div className="flex flex-wrap gap-4 text-lg text-BA570B">
        {more.map((v, i) => (
          <Link to="" className="px-3 py-1 rounded-md bg-BA570B/10" key={i}>
            {v}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default More;
