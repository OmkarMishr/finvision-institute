import { useNav } from "@/components/context/NavContext";

export default function SolutionSection() {
  const { navigate } = useNav();
  return (
    <section>
      <div className="wrap">
        <div className="solution-grid">
          <div>
            <div className="tag">Our Approach</div>
            <h2>We Don&apos;t Teach<br /><span className="red">Tricks.</span><br />We Build<br /><span className="red">Traders.</span></h2>
            <div className="red-rule"></div>
            <div className="sol-points">
              <div className="sol-point">
                <div className="sol-num">01</div>
                <div>
                  <div className="sol-title">Price Action &amp; Market Structure</div>
                  <div className="sol-desc">Understand what price is communicating — not what an indicator guesses it means.</div>
                </div>
              </div>
              <div className="sol-point">
                <div className="sol-num">02</div>
                <div>
                  <div className="sol-title">Institutional Thinking</div>
                  <div className="sol-desc">Learn how large players move markets and how to read their footprints in real time.</div>
                </div>
              </div>
              <div className="sol-point">
                <div className="sol-num">03</div>
                <div>
                  <div className="sol-title">Decision-Making Confidence</div>
                  <div className="sol-desc">Build a repeatable process so every trade comes from logic, not impulse.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sol-sidebar">
            <div className="sol-box">
              <div className="sol-box-label">What we never do</div>
              <p>No tips. No signals. No magic indicators. No false promises. We teach you to think like a professional trader — independently.</p>
            </div>
            <div className="sol-box">
              <div className="sol-box-label">What you walk away with</div>
              <p>A clear, structured understanding of why markets move. Trade any instrument, any market condition, with genuine confidence.</p>
            </div>
            <div style={{ marginTop: 24 }}>
              <p style={{ fontFamily: "var(--ff-head)", fontSize: "1.3rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--white)", fontStyle: "italic" }}>
                Because consistency comes from<br /><span className="red">clarity — not signals.</span>
              </p>
            </div>
            <div style={{ marginTop: 28 }}>
              <button className="btn btn-outline" onClick={() => navigate("about")}>Our Philosophy →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
