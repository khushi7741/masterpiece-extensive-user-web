import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ className, children }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className={`${dropDown && "overflow-y-hidden max-h-screen"}`}>
      <Header dropDown={dropDown} setDropDown={setDropDown} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
