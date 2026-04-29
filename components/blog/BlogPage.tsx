"use client";

import { useState } from "react";
import { useNav } from "@/components/context/NavContext";
import BlogBanner from "./BlogBanner";
import BlogSection from "./BlogSection";

export default function BlogPage() {
  const { page } = useNav();
  const [blogCat, setBlogCat] = useState("All");

  return (
    <div className={`page${page === "blog" ? " active" : ""}`} id="page-blog">
      <BlogBanner blogCat={blogCat} setBlogCat={setBlogCat} />
      <BlogSection blogCat={blogCat} />
    </div>
  );
}
