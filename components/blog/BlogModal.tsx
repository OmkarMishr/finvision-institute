"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Post } from "@/lib/types";

type Props = {
  post: Post;
  onClose: () => void;
};

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function BlogModal({ post, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      <button className="blog-modal-close" onClick={onClose} aria-label="Close">
        &#x2715;
      </button>
      <div className="blog-modal" onClick={(e) => e.stopPropagation()}>

        <div className="blog-modal-hero">
          {post.image ? (
            <Image src={post.image} alt={post.title} fill className="blog-modal-hero-img" />
          ) : (
            <>
              <div className="blog-thumb-bg" style={{ opacity: 0.06 }}></div>
              <div className="blog-modal-hero-letter">{post.cat.charAt(0)}</div>
            </>
          )}
          <div className="blog-modal-hero-content">
            <div className="blog-modal-hero-cat">{post.cat.toUpperCase()}</div>
            <div className="blog-modal-hero-title">{post.title}</div>
            {post.subtitle && (
              <div className="blog-modal-hero-subtitle">{post.subtitle}</div>
            )}
          </div>
        </div>

        <div className="blog-modal-meta">
          <span>By {post.author}</span>
          <span>{post.date}</span>
          <span>{post.read} read</span>
        </div>

        <div className="blog-modal-body">
          {post.body.map((item, i) => {
            if (typeof item === "object") {
              return (
                <div key={i} className="blog-modal-img-wrap">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={760}
                    height={428}
                    style={{ width: "100%", height: "auto" }}
                    className="blog-modal-inline-img"
                  />
                </div>
              );
            }
            if (item.startsWith("### ")) {
              return <div key={i} className="blog-modal-sub-head">{item.slice(4)}</div>;
            }
            if (item.startsWith("## ")) {
              return <div key={i} className="blog-modal-section-head">{item.slice(3)}</div>;
            }
            return <p key={i} className="blog-modal-para">{renderBold(item)}</p>;
          })}
        </div>

      </div>
    </div>
  );
}
