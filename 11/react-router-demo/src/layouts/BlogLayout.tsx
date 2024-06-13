import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogFooter from "../components/BlogFooter";
import Blog from "../pages/Blog";

const BlogLayout = () => {
  return (
    <>
      <BlogHeader />
      <Blog />
      <BlogFooter />
    </>
  );
};

export default BlogLayout;
