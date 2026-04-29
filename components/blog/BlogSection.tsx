import { useNav } from "@/components/context/NavContext";
import { POSTS } from "@/lib/data";
import { openWA } from "@/lib/wa";

export default function BlogSection({ blogCat }: { blogCat: string }) {
  const { navigate } = useNav();
  const posts = blogCat === "All" ? POSTS : POSTS.filter((p) => p.cat === blogCat);

  return (
    <section>
      <div className="wrap">
        <div className="blog-grid" id="blog-grid">
          {posts.map((p, i) => (
            <div key={i} className="blog-card">
              <div className="blog-thumb">
                <div className="blog-thumb-bg"></div>
                <span className="blog-thumb-text">{p.cat}</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-cat">{p.cat.toUpperCase()}</div>
                <div className="blog-title">{p.title}</div>
                <div className="blog-excerpt">{p.excerpt}</div>
                <div className="blog-meta-row">
                  <span>By {p.author}</span>
                  <span>{p.read} read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lead-magnet">
          <div className="tag" style={{ justifyContent: "center" }}>Free Resource</div>
          <h3>Download Your Free<br /><span className="red">Trading Guide</span></h3>
          <p>
            Get our PDF: <strong style={{ color: "var(--white)" }}>&ldquo;5 Price Action Patterns Every Serious Trader Should Know&rdquo;</strong> — used in our Foundation program, no cost.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-red" onClick={() => navigate("contact")}>Download Free PDF →</button>
            <button className="btn btn-wapp" onClick={openWA}>Send via WhatsApp</button>
          </div>
        </div>
      </div>
    </section>
  );
}
