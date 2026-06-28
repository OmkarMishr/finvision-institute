import Image from "next/image";
import { POSTS } from "@/lib/data";
import { openWA } from "@/lib/wa";

type Props = {
  blogCat: string;
};

export default function BlogSection({ blogCat }: Props) {
  const posts = blogCat === "All" ? POSTS : POSTS.filter((p) => p.cat === blogCat);

  return (
    <section>
      <div className="wrap">
        <div className="blog-grid" id="blog-grid">
          {posts.map((p, i) => (
            <a key={i} href={`/blog/${p.id}`} className="blog-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div className="blog-thumb">
                {p.image
                  ? <Image src={p.image} alt={p.title || p.excerpt} fill className="blog-thumb-img" />
                  : <div className="blog-thumb-bg"></div>
                }
                <span className="blog-thumb-text">{p.cat}</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-cat">{p.cat.toUpperCase()}</div>
                <div className="blog-title">{p.title || p.excerpt.slice(0, 60)}</div>
                <div className="blog-excerpt">{p.excerpt}</div>
                <div className="blog-meta-row">
                  <span>By {p.author}</span>
                  <span>{p.read} read</span>
                </div>
                <div className="blog-card-read-link">READ ARTICLE &rarr;</div>
              </div>
            </a>
          ))}
        </div>
        <div className="lead-magnet">
          <div className="tag" style={{ justifyContent: "center" }}>Free Resource</div>
          <h3>Download Your Free<br /><span className="red">Trading Guide</span></h3>
          <p>
            Get our PDF: <strong style={{ color: "var(--white)" }}>&ldquo;5 Price Action Patterns Every Serious Trader Should Know&rdquo;</strong> — used in our Foundation program, no cost.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn btn-red">Download Free PDF →</a>
            <button className="btn btn-wapp" onClick={openWA}>Send via WhatsApp</button>
          </div>
        </div>
      </div>
    </section>
  );
}
