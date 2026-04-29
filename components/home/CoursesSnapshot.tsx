import { useNav } from "@/components/context/NavContext";
import WAIcon from "@/components/ui/WAIcon";
import { openWA } from "@/lib/wa";

export default function CoursesSnapshot() {
  const { navigate } = useNav();

  return (
    <section className="courses-sec">
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 0 }}>
          <div>
            <div className="tag">Programs</div>
            <h2>Designed for<br /><span className="red">Real Learning</span></h2>
          </div>
          <button className="btn btn-outline" onClick={() => navigate("courses")}>View All Programs</button>
        </div>
        <div className="courses-grid" style={{ background: "var(--border)" }}>
          <div className="course-card" onClick={() => navigate("courses")}>
            <div className="cc-level">Program 01 · Beginner</div>
            <div className="cc-name">Foundation</div>
            <div className="cc-desc">Build your foundation. Understand how the market truly moves before learning any strategy.</div>
            <div className="cc-price">₹8,000</div>
            <div className="cc-price-note">EMI AVAILABLE ON REQUEST</div>
            <div className="cc-arrow">Start Journey →</div>
          </div>
          <div className="course-card featured" onClick={() => navigate("courses")}>
            <div className="cc-level">Program 02 · Advanced · Popular</div>
            <div className="cc-name">Advanced</div>
            <div className="cc-desc">Master price action, institutional structure, strategy building and disciplined execution.</div>
            <div className="cc-price">₹15,000</div>
            <div className="cc-price-note">EMI AVAILABLE ON REQUEST</div>
            <div className="cc-arrow">Upgrade Skills →</div>
          </div>
          <div className="course-card" onClick={() => navigate("courses")}>
            <div className="cc-level">Program 03 · Mentorship</div>
            <div className="cc-name">Mentorship</div>
            <div className="cc-desc">Trade with live guidance. Real feedback on real trades. Direct access to Akshay Sir.</div>
            <div className="cc-price">₹25,000</div>
            <div className="cc-price-note">LIMITED TO 12 SEATS/BATCH</div>
            <div className="cc-arrow">Learn with Experts →</div>
          </div>
        </div>
        <div className="courses-footer">
          <button className="btn btn-wapp" onClick={openWA}>
            <WAIcon />
            Ask About Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
