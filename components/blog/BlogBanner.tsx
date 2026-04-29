import { CATS } from "@/lib/data";

type Props = {
  blogCat: string;
  setBlogCat: (c: string) => void;
};

export default function BlogBanner({ blogCat, setBlogCat }: Props) {
  return (
    <div className="page-banner" data-letter="B">
      <div className="wrap">
        <div className="tag">Learning Hub</div>
        <h1>Learn Trading.<br /><span className="red">The Right Way.</span></h1>
        <div className="red-rule"></div>
        <p style={{ maxWidth: 480 }}>
          Insights, market understanding, and trading psychology — built for serious learners, not casual scrollers.
        </p>
        <div className="blog-cats" id="blog-cats" style={{ marginTop: 32 }}>
          {CATS.map((c) => (
            <button
              key={c}
              className={`cat-btn${c === blogCat ? " active" : ""}`}
              onClick={() => setBlogCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
