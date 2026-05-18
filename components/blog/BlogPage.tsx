"use client";

import { useState } from "react";
import { useNav } from "@/components/context/NavContext";
import { Post } from "@/lib/types";
import BlogBanner from "./BlogBanner";
import BlogSection from "./BlogSection";
import BlogModal from "./BlogModal";

export default function BlogPage() {
  const { page } = useNav();
  const [blogCat, setBlogCat] = useState("All");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div className={`page${page === "blog" ? " active" : ""}`} id="page-blog">
      <BlogBanner blogCat={blogCat} setBlogCat={setBlogCat} />
      <BlogSection blogCat={blogCat} onPostClick={setSelectedPost} />
      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}
