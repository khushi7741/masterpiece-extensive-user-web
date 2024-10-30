import React from "react";
import HomePageHeading from "../Componets/Reusable/HomePageHeading";
import BlogPost from "../Componets/Store/Blog/BlogPost";
import ReadCategory from "../Componets/Store/Blog/ReadCategory";
import Refer from "../Componets/Store/Refer";
import Footer from "../Componets/Store/layout/Footer";

const Blog = () => {
  return (
    <div className="bg-white my-8">
      <HomePageHeading
        title={"style journal"}
        Text={
          "it's a sanctuary where trends meet personal flair, offering inspiration and guidance to all who seek to curate their unique fashion narrative."
        }
      />
      <ReadCategory />
      <BlogPost />
      <Refer />
      <Footer />
    </div>
  );
};

export default Blog;
