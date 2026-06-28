export default function PhilosophySection() {
  return (
    <section className="phil-sec">
      <div className="wrap">
        <div className="tag">Philosophy</div>
        <h2>Simple in Principle.<br /><span className="red">Powerful in Practice.</span></h2>
        <div className="red-rule"></div>
        <div className="phil-grid">
          <div className="phil-card">
            <div className="phil-num">01</div>
            <div className="phil-title">Clarity Over Complexity</div>
            <div className="phil-desc">We remove noise and focus on what actually matters. If a concept can&apos;t be explained simply, it hasn&apos;t been understood deeply enough.</div>
            <a href="/blog" className="phil-link" style={{ textDecoration: "none" }}>→ READ: HOW MARKET STRUCTURE WORKS</a>
          </div>
          <div className="phil-card">
            <div className="phil-num">02</div>
            <div className="phil-title">Understanding Over Memorization</div>
            <div className="phil-desc">No strategy without logic. You learn why price moves — not just what to do when a pattern appears. Understanding builds real adaptability.</div>
            <a href="/blog" className="phil-link" style={{ textDecoration: "none" }}>→ READ: WHAT IS PRICE ACTION TRADING</a>
          </div>
          <div className="phil-card">
            <div className="phil-num">03</div>
            <div className="phil-title">Process Over Profit</div>
            <div className="phil-desc">We focus on the right approach first. When the process is correct and consistent, results follow. Not the other way around.</div>
            <a href="/blog" className="phil-link" style={{ textDecoration: "none" }}>→ READ: DISCIPLINE IN TRADING</a>
          </div>
          <div className="phil-card">
            <div className="phil-num">04</div>
            <div className="phil-title">Discipline Over Emotion</div>
            <div className="phil-desc">Trading is structured decision-making — not guessing. We train traders to respond to data, not react to fear or greed.</div>
            <a href="/blog" className="phil-link" style={{ textDecoration: "none" }}>→ READ: WHY YOU PANIC IN TRADES</a>
          </div>
        </div>
        <p style={{ fontFamily: "var(--ff-head)", fontSize: "1.4rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--red)", marginTop: 40, fontStyle: "italic" }}>
          We don&apos;t create followers. We build independent traders.
        </p>
      </div>
    </section>
  );
}
