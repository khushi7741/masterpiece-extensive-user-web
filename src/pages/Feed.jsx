import React from "react";
import Main from "../Componets/Store/Feed/Main";
import Popular from "../Componets/Store/Feed/Popular";
import Slide from "../Componets/Store/Feed/Slide";
import Data from "../Componets/Store/Feed/Data";

const Feed = () => {
  return (
    <div>
      <Main />
      <div className="container mx-auto">
        <Popular />
        <Slide />
        <Data />
      </div>
    </div>
  );
};

export default Feed;
