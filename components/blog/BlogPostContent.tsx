"use client";

import Image from "next/image";
import type { Post, BlogBodyItem } from "@/lib/types";

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

function renderBodyItem(item: BlogBodyItem, i: number) {
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
  if (item.startsWith("### ")) return <div key={i} className="blog-modal-sub-head">{item.slice(4)}</div>;
  if (item.startsWith("## ")) return <div key={i} className="blog-modal-section-head">{item.slice(3)}</div>;
  return <p key={i} className="blog-modal-para">{renderBold(item)}</p>;
}

function getDisplayTitle(post: Post): string {
  if (post.title) return post.title;
  if (post.metaTitle) return post.metaTitle.replace(/\s*\|\s*FINVISION.*$/i, "");
  return post.excerpt.slice(0, 80);
}

export default function BlogPostContent({ post }: { post: Post }) {
  const displayTitle = getDisplayTitle(post);

  return (
    <main>
      {/* Fixed close button — top-right corner, redirects to /blog */}
      <a
        href="/blog"
        aria-label="Close article and return to blog"
        style={{
          position: "fixed",
          top: 18,
          right: 24,
          zIndex: 9999,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "var(--black2)",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          color: "var(--white)",
          fontSize: "1.1rem",
          lineHeight: 1,
          transition: "background 0.2s, border-color 0.2s",
        }}
        onMouseOver={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "var(--red)";
          (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--red)";
        }}
        onMouseOut={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "var(--black2)";
          (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
        }}
      >
        &#x2715;
      </a>

      {/* Banner */}
      <section
        style={{
          background: "var(--black2)",
          borderBottom: "1px solid var(--border)",
          paddingTop: "clamp(60px, 8vw, 80px)",
          paddingBottom: 20,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-0.05em",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "clamp(160px, 22vw, 280px)",
            fontFamily: "var(--ff-head)",
            fontWeight: 900,
            color: "rgba(192,51,77,0.05)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {post.cat.charAt(0)}
        </div>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
          <div className="tag">{post.cat.trim().toUpperCase()}</div>
          <h1
            style={{
              fontFamily: "var(--ff-head)",
              fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginTop: 10,
              color: "var(--white)",
            }}
          >
            {displayTitle}
          </h1>
          {post.subtitle && (
            <p
              style={{
                marginTop: 10,
                color: "var(--grey)",
                fontSize: "1rem",
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              {post.subtitle}
            </p>
          )}
          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 12,
              fontFamily: "var(--ff-mono)",
              fontSize: "0.78rem",
              color: "var(--grey2)",
              letterSpacing: "0.06em",
              flexWrap: "wrap",
            }}
          >
            <span>By {post.author}</span>
            <span>{post.date}</span>
            <span>{post.read} read</span>
          </div>
        </div>
      </section>

      {/* Hero image — constrained to content width */}
      {post.image && (
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "32px 24px 0" }}>
          <div style={{ position: "relative", height: "clamp(240px, 35vw, 420px)", maxHeight: 420, borderRadius: 4, overflow: "hidden" }}>
            <Image
              src={post.image}
              alt={displayTitle}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      )}

      {/* Body */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "56px 24px 80px" }}>
        <div className="blog-modal-body">
          {post.body.map((item, i) => renderBodyItem(item, i))}
        </div>
        <div
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <a href="/blog" className="btn btn-outline">← All Articles</a>
          <a href="/contact" className="btn btn-red">Enroll in a Program →</a>
        </div>
      </div>
    </main>
  );
}
