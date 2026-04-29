import { useNav } from "@/components/context/NavContext";
import { openWA } from "@/lib/wa";

export default function InstituteSection() {
  const { navigate } = useNav();
  return (
    <section>
      <div className="wrap">
        <div className="inst-grid">
          <div>
            <div className="tag">Offline Institute</div>
            <h2>Real Classroom.<br /><span className="red">Real Market.</span></h2>
            <div className="red-rule"></div>
            <p>Not just online theory — structured learning at our Raipur institute with direct mentor access during live market hours.</p>
            <div className="inst-features">
              <div className="inst-feat">
                <span className="inst-icon">▸</span>
                <div>
                  <strong>Live Classroom Sessions</strong>
                  <p>Small batches, maximum mentor interaction every session.</p>
                </div>
              </div>
              <div className="inst-feat">
                <span className="inst-icon">▸</span>
                <div>
                  <strong>Direct Mentor Access</strong>
                  <p>Real-time guidance during market hours — ask while the market is live.</p>
                </div>
              </div>
              <div className="inst-feat">
                <span className="inst-icon">▸</span>
                <div>
                  <strong>Live Market Analysis</strong>
                  <p>Analyze real setups together. Learn from what&apos;s happening right now.</p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-red" onClick={() => navigate("centers")}>View Centers →</button>
              <button className="btn btn-outline" onClick={() => navigate("contact")}>Get Directions</button>
            </div>
          </div>
          <div>
            <div className="inst-map-box">
              <div className="inst-map-head">
                <div className="inst-map-dot" style={{ background: "#e05252" }}></div>
                <div className="inst-map-dot" style={{ background: "#e0b552" }}></div>
                <div className="inst-map-dot" style={{ background: "#52e052" }}></div>
                <span style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "var(--grey2)", marginLeft: 8, letterSpacing: "0.08em" }}>
                  FINVISION — RAIPUR HQ
                </span>
              </div>
              <div className="inst-map-body">
                <div className="inst-map-grid"></div>
                <div className="inst-map-pin">📍</div>
                <div className="inst-map-name">Finvision Institute</div>
                <div className="inst-map-addr">3024, Currency Tower, VIP Chowk<br />Raipur, Chhattisgarh – 492001</div>
                <div className="inst-map-hours">MON–SAT &nbsp;·&nbsp; 10:00 AM – 7:00 PM</div>
                <div className="inst-map-link" onClick={openWA}>→ CHAT TO CONFIRM TIMING</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
