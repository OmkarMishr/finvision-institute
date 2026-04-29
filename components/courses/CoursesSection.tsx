import { useNav } from "@/components/context/NavContext";
import { openWA } from "@/lib/wa";

const monoSmall = { fontFamily: "var(--ff-mono)", fontSize: 10, color: "var(--grey2)" } as const;
const monoRed = { fontFamily: "var(--ff-mono)", fontSize: 10, color: "var(--red)", letterSpacing: "0.12em", marginBottom: 8 } as const;
const headBig = { fontFamily: "var(--ff-head)", fontWeight: 800, textTransform: "uppercase" } as const;

export default function CoursesSection() {
  const { navigate } = useNav();
  return (
    <section>
      <div className="wrap">
        <div className="upgrade-box">
          <div>
            <div style={monoRed}>ALREADY A STUDENT?</div>
            <div style={{ ...headBig, fontSize: "1.4rem", marginBottom: 6 }}>Ready to Upgrade?</div>
            <p style={{ fontSize: 14, maxWidth: 480 }}>Existing Finvision students get priority enrollment and alumni consideration on higher programs. Talk to your mentor.</p>
          </div>
          <button className="btn btn-red" onClick={openWA}>Talk to Your Mentor →</button>
        </div>

        <div className="courses-all">
          {/* Foundation */}
          <div className="course-full">
            <div className="cf-head">
              <div className="cf-level">Program 01 · Beginner</div>
              <div className="cf-title">Foundation</div>
              <div className="cf-dur">8 Weeks · Online &amp; Offline</div>
            </div>
            <div className="cf-body">
              <div className="cf-for">For: Complete beginners and those stuck in indicator-based trading who want to restart correctly.</div>
              <div className="cf-modules-label">What You&apos;ll Learn</div>
              <div className="cf-module">How financial markets actually function</div>
              <div className="cf-module">Candlestick reading — without memorizing patterns</div>
              <div className="cf-module">Support &amp; resistance done right</div>
              <div className="cf-module">Trend identification and market context</div>
              <div className="cf-module">Basic risk and capital management</div>
              <div className="cf-module">Introduction to structured trade planning</div>
              <div className="cf-outcome">
                <div className="cf-outcome-label">After This Program</div>
                <div className="cf-outcome-text">You&apos;ll understand why price moves, read charts with real clarity, and have a foundation strong enough to build any strategy on.</div>
              </div>
              <div className="cf-price-row">
                <div>
                  <div style={{ ...monoSmall, marginBottom: 4 }}>PROGRAM FEE</div>
                  <div className="cf-price">₹8,000</div>
                </div>
                <div style={{ ...monoSmall, textAlign: "right" }}>EMI AVAILABLE<br />ON REQUEST</div>
              </div>
              <button className="btn btn-red" style={{ width: "100%" }} onClick={() => navigate("contact")}>Enroll in Foundation →</button>
            </div>
          </div>

          {/* Advanced */}
          <div className="course-full feat">
            <div className="cf-head">
              <div className="cf-level">Program 02 · Advanced · Most Popular</div>
              <div className="cf-title">Advanced</div>
              <div className="cf-dur">12 Weeks · Online &amp; Offline</div>
            </div>
            <div className="cf-body">
              <div className="cf-for">For: Students who&apos;ve done Foundation or have basic market knowledge and want to trade professionally.</div>
              <div className="cf-modules-label">What You&apos;ll Learn</div>
              <div className="cf-module">Advanced price action and order flow concepts</div>
              <div className="cf-module">Market structure — highs, lows, and shifts</div>
              <div className="cf-module">Institutional entry and exit behavior</div>
              <div className="cf-module">Multi-timeframe analysis and confluence</div>
              <div className="cf-module">Building your own personal trading system</div>
              <div className="cf-module">Live trade analysis and review sessions</div>
              <div className="cf-outcome">
                <div className="cf-outcome-label">After This Program</div>
                <div className="cf-outcome-text">You&apos;ll have a personal trading system, understand institutional behavior, and identify high-probability setups independently.</div>
              </div>
              <div className="cf-price-row">
                <div>
                  <div style={{ ...monoSmall, marginBottom: 4 }}>PROGRAM FEE</div>
                  <div className="cf-price">₹15,000</div>
                </div>
                <div style={{ ...monoSmall, textAlign: "right" }}>EMI AVAILABLE<br />ON REQUEST</div>
              </div>
              <button className="btn btn-red" style={{ width: "100%" }} onClick={() => navigate("contact")}>Enroll in Advanced →</button>
            </div>
          </div>

          {/* Mentorship */}
          <div className="course-full">
            <div className="cf-head">
              <div className="cf-level">Program 03 · Mentorship</div>
              <div className="cf-title">Mentorship</div>
              <div className="cf-dur">3 Months Live · 12 Seats/Batch</div>
            </div>
            <div className="cf-body">
              <div className="cf-for">For: Serious traders who want live guidance, personal trade feedback, and direct access to Akshay Sir.</div>
              <div className="cf-modules-label">What You&apos;ll Get</div>
              <div className="cf-module">Direct access to Akshay Sir for 3 months</div>
              <div className="cf-module">Weekly live trade review sessions</div>
              <div className="cf-module">Personal trade journal review and feedback</div>
              <div className="cf-module">Real-time market analysis guidance</div>
              <div className="cf-module">Trading psychology and mindset coaching</div>
              <div className="cf-module">Lifetime alumni group access</div>
              <div className="cf-outcome">
                <div className="cf-outcome-label">After This Program</div>
                <div className="cf-outcome-text">You&apos;ll trade with genuine confidence, have a refined personal system, and think like a professional every time you open a chart.</div>
              </div>
              <div className="cf-price-row">
                <div>
                  <div style={{ ...monoSmall, marginBottom: 4 }}>PROGRAM FEE</div>
                  <div className="cf-price">₹25,000</div>
                </div>
                <div style={{ ...monoSmall, textAlign: "right" }}>LIMITED TO<br />12 STUDENTS</div>
              </div>
              <button className="btn btn-red" style={{ width: "100%" }} onClick={() => navigate("contact")}>Apply for Mentorship →</button>
            </div>
          </div>
        </div>

        <div style={{ background: "var(--black3)", border: "1px solid var(--border)", borderLeft: "3px solid var(--red)", padding: 40, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={monoRed}>NOT SURE WHICH PROGRAM?</div>
            <div style={{ ...headBig, fontSize: "1.5rem", marginBottom: 8 }}>Attend a Free Demo Class First</div>
            <p style={{ fontSize: 14, maxWidth: 480 }}>60-minute session. Experience the teaching style. Decide which program fits your level. No commitment.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-red" onClick={() => navigate("contact")}>Book Free Demo →</button>
            <button className="btn btn-wapp" onClick={openWA}>WhatsApp to Book</button>
          </div>
        </div>
      </div>
    </section>
  );
}
