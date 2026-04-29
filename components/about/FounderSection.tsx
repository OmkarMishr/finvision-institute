import Image from "next/image";
import { useNav } from "@/components/context/NavContext";
import { openWA } from "@/lib/wa";

export default function FounderSection() {
  const { navigate } = useNav();
  return (
    <section style={{ background: "var(--black2)" }}>
      <div className="wrap">
        <div className="tag">Founder</div>
        <div className="founder-grid">
          <div>
            <div className="founder-card-box">

              {/* ── PHOTO ── */}
              <div className="founder-avatar-wrap">
                <Image
                  src="/Akshay sir.jpeg"
                  alt="Akshay Sir — Founder & Lead Mentor, Finvision"
                  width={300}
                  height={400}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                  priority
                />
              </div>

              <div className="founder-info">
                <div className="founder-name">Akshay Sir</div>
                <div className="founder-role">Founder &amp; Lead Mentor</div>
              </div>
            </div>
          </div>

          <div>
            <div className="tag">A Message from the Founder</div>
            <div className="founder-quote">
              <blockquote>
                &ldquo;When I started trading, I made the same mistakes most traders
                make — chasing indicators, following tips, and reacting emotionally.
                Over time, I realized the problem wasn&apos;t the market. It was the
                lack of real understanding. Finvision was created to simplify trading
                — to help people see the market clearly, think logically, and make
                decisions with confidence. If you&apos;re willing to learn the right
                way, the market will start making sense.&rdquo;
              </blockquote>
              <cite>— Akshay Sir, Founder · Finvision</cite>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-red" onClick={() => navigate("contact")}>
                Learn with Akshay Sir →
              </button>
              <button className="btn btn-outline" onClick={openWA}>
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}