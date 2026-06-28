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

export default function BlogPostContent({ post }: { post: Post }) {
  return (
    <div style={{ paddingTop: "80px", paddingBottom: "60px" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px" }}>
        <a
          href="/blog"
          style={{
            display: "inline-block",
            marginBottom: 32,
            color: "var(--red)",
            textDecoration: "none",
            fontFamily: "var(--ff-head)",
            fontWeight: 700,
            textTransform: "uppercase" as const,
            letterSpacing: "0.1em",
            fontSize: "0.85rem",
          }}
        >
          ← BACK TO BLOG
        </a>
      </div>

      <div className="blog-modal-hero" style={{ position: "relative", minHeight: 320 }}>
        {post.image ? (
          <Image src={post.image} alt={post.title || post.excerpt} fill className="blog-modal-hero-img" />
        ) : (
          <>
            <div className="blog-thumb-bg" style={{ opacity: 0.06 }}></div>
            <div className="blog-modal-hero-letter">{post.cat.charAt(0)}</div>
          </>
        )}
        <div className="blog-modal-hero-content">
          <div className="blog-modal-hero-cat">{post.cat.toUpperCase()}</div>
          <div className="blog-modal-hero-title">{post.title || post.metaTitle}</div>
          {post.subtitle && <div className="blog-modal-hero-subtitle">{post.subtitle}</div>}
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px" }}>
        <div className="blog-modal-meta">
          <span>By {post.author}</span>
          <span>{post.date}</span>
          <span>{post.read} read</span>
        </div>
        <div className="blog-modal-body">
          {post.body.map((item, i) => renderBodyItem(item, i))}
        </div>
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
          <a href="/blog" className="btn btn-outline" style={{ marginRight: 12 }}>← All Articles</a>
          <a href="/contact" className="btn btn-red">Enroll in a Program →</a>
        </div>
      </div>
    </div>
  );
}
