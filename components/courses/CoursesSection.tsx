import { COURSE_PLANS } from "@/lib/data";
import { CoursePlan } from "@/lib/types";

const monoSmall = { fontFamily: "var(--ff-mono)", fontSize: 10, color: "var(--grey2)" } as const;

type Props = {
  onEnroll: (plan: CoursePlan) => void;
};

export default function CoursesSection({ onEnroll }: Props) {
  const demo = COURSE_PLANS.find((p) => p.id === "demo")!;
  const advance = COURSE_PLANS.find((p) => p.id === "advance")!;
  const advanceLive = COURSE_PLANS.find((p) => p.id === "advance-live")!;

  return (
    <section>
      <div className="wrap">
        <div className="courses-all">

          {/* ── DEMO COURSE ── */}
          <div className="course-full">
            <div className="cf-head">
              <div className="cf-level">Program 01 · Beginner</div>
              <div className="cf-title">DEMO COURSE</div>
              <div className="cf-dur">5 Days · Online &amp; Offline</div>
            </div>
            <div className="cf-body">
              <div className="cf-for">For: Complete beginners and those stuck in indicator-based trading who want to restart correctly.</div>
              <div className="cf-modules-label">What You&apos;ll Learn</div>
              <div className="cf-module">How financial markets actually function</div>
              <div className="cf-module">Candlestick reading — without memorizing patterns</div>
              <div className="cf-module">Support &amp; resistance done right</div>
              <div className="cf-module">Trend identification and market context</div>
              <div className="cf-module">Introduction to Fundamental Analysis</div>
              <div className="cf-module">Introduction to structured trade planning</div>
              <div className="cf-outcome">
                <div className="cf-outcome-label">After This Program</div>
                <div className="cf-outcome-text">You&apos;ll understand why price moves, read charts with real clarity, and have a foundation strong enough to build any strategy on.</div>
              </div>
              <div className="cf-price-row">
                <div>
                  <div style={{ ...monoSmall, marginBottom: 4 }}>PROGRAM FEE</div>
                  <div className="cf-price">FREE</div>
                </div>
              </div>
              <button className="btn btn-red" style={{ width: "100%" }} onClick={() => onEnroll(demo)}>
                GET FOR FREE →
              </button>
            </div>
          </div>

          {/* ── ADVANCE COURSE ── */}
          <div className="course-full feat">
            <div className="cf-head">
              <div className="cf-level">Program 02 · Advanced · Most Popular</div>
              <div className="cf-title">ADVANCE COURSE</div>
              <div className="cf-dur">4 Weeks · Online &amp; Offline</div>
            </div>
            <div className="cf-body">
              <div className="cf-for">For: Students who&apos;ve done the Demo or have basic market knowledge and want to trade professionally.</div>
              <div className="cf-modules-label">What You&apos;ll Learn</div>
              <div className="cf-module">Advanced price action and order flow concepts</div>
              <div className="cf-module">Market structure — highs, lows, and shifts</div>
              <div className="cf-module">Breakout Models</div>
              <div className="cf-module">Multi-timeframe analysis and confluence</div>
              <div className="cf-module">Building your own personal trading system</div>
              <div className="cf-module">Live trade analysis and review sessions</div>
              <div className="cf-outcome">
                <div className="cf-outcome-label">After This Program</div>
                <div className="cf-outcome-text">You&apos;ll have a personal trading system, understand institutional behaviour, and identify high-probability setups independently.</div>
              </div>
              <div className="cf-price-row">
                
              </div>
              <button className="btn btn-red" style={{ width: "100%" }} onClick={() => onEnroll(advance)}>
                BUY COURSE NOW →
              </button>
            </div>
          </div>

          {/* ── ADVANCE + LIVE MARKET SESSIONS ── */}
          <div className="course-full">
            <div className="cf-head">
              <div className="cf-level">Program 03 · Mentorship</div>
              <div className="cf-title">ADVANCE + LIVE MARKET SESSIONS</div>
              <div className="cf-dur">6 Weeks · 12 Seats/Batch</div>
            </div>
            <div className="cf-body">
              <div className="cf-for">For: Serious traders who want live guidance, personal trade feedback, and direct access to Akshay Sir.</div>
              <div className="cf-modules-label">What You&apos;ll Get</div>
              <div className="cf-module">Live Trade Management and Position Handling</div>
              <div className="cf-module">Weekly live trade review sessions</div>
              <div className="cf-module">Personal trade journal review and feedback</div>
              <div className="cf-module">Real-time market analysis guidance</div>
              <div className="cf-module">Trading psychology and mindset coaching</div>
              <div className="cf-outcome">
                <div className="cf-outcome-label">After This Program</div>
                <div className="cf-outcome-text">You&apos;ll trade with genuine confidence, have a refined personal system, and think like a professional every time you open a chart.</div>
              </div>
              <div className="cf-price-row">
                <div style={{ ...monoSmall, textAlign: "right" }}>LIMITED TO<br />12 STUDENTS</div>
              </div>
              <button className="btn btn-red" style={{ width: "100%" }} onClick={() => onEnroll(advanceLive)}>
                BUY COURSE NOW →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
