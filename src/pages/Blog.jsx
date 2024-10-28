import React from "react";
import StyleJournal from "../Componets/Store/Home/StyleJournal";
import ReadCategory from "../Componets/Store/Blog/ReadCategory";
import BlogPost from "../Componets/Store/Blog/BlogPost";
import Refer from "../Componets/Store/Refer";
import Footer from "../Componets/Store/Footer/Footer";

const Blog = () => {
  return (
    <div className="bg-white">
      <StyleJournal />
      <ReadCategory />
      <BlogPost />
      <Refer />
      <Footer />
    </div>
  );
};

export default Blog;
