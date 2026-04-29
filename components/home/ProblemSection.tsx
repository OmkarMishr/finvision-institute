import { CANDLE_DATA } from "@/lib/data";

export default function ProblemSection() {
  return (
    <section className="problem-sec">
      <div className="wrap">
        <div className="problem-grid">
          <div>
            <div className="tag">The Real Problem</div>
            <h2>Why Most Traders<br /><span className="red">Never Succeed</span></h2>
            <div className="red-rule"></div>
            <div className="prob-items">
              <div className="prob-item"><span className="prob-num">01</span><span className="prob-text">Following indicators without understanding what price is actually doing</span></div>
              <div className="prob-item"><span className="prob-num">02</span><span className="prob-text">Entering trades based on emotion and impulse, not structured logic</span></div>
              <div className="prob-item"><span className="prob-num">03</span><span className="prob-text">Reacting to what already happened instead of anticipating what&apos;s next</span></div>
              <div className="prob-item"><span className="prob-num">04</span><span className="prob-text">Learning strategies by memory — not understanding why they work</span></div>
            </div>
            <div className="prob-close">
              The problem isn&apos;t the market.<br />
              <span>It&apos;s the approach.</span>
            </div>
          </div>
          <div>
            <div className="candle-chart">
              <div className="candle-row" id="candle-row">
                {CANDLE_DATA.map((d, i) => (
                  <div key={i} className={`candle ${d.up ? "up" : "down"}`} style={{ height: "100%" }}>
                    <div className="wick" style={{ height: `${d.h - d.b}%`, background: "currentColor" }}></div>
                    <div className="body" style={{ height: `${d.b - d.t}%`, background: "currentColor" }}></div>
                    <div className="wick" style={{ height: `${d.t}%`, background: "currentColor" }}></div>
                  </div>
                ))}
              </div>
              <div className="chart-note">
                Months of indicator-based reactive trading<br />
                <strong>Root cause: No price structure understanding.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
