import { useNav } from "@/components/context/NavContext";
import { openWA } from "@/lib/wa";

export default function CentersSection() {
  const { navigate } = useNav();
  const upcomingBtn = { padding: "10px 20px", fontSize: 13 } as const;

  return (
    <section>
      <div className="wrap">
        <div className="centers-grid">
          <div className="main-center-card">
            <div className="mc-head">
              <div className="mc-badge">Fully Operational</div>
              <div className="mc-city">Raipur</div>
              <div className="mc-state">Chhattisgarh · Head Office</div>
            </div>
            <div className="mc-body">
              <div className="mc-feat">Full classroom facility — daily batches available</div>
              <div className="mc-feat">Direct access to Akshay Sir and all mentors</div>
              <div className="mc-feat">Live market analysis sessions during market hours</div>
              <div className="mc-feat">3024, Currency Tower, VIP Chowk, Raipur – 492001</div>
              <div className="mc-feat">Mon–Sat · 10:00 AM – 7:00 PM</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
                <button className="btn btn-red" onClick={() => navigate("contact")}>Enroll in Raipur →</button>
                <button className="btn btn-wapp" onClick={openWA}>WhatsApp Us</button>
              </div>
            </div>
          </div>
          <div className="upcoming-stack">
            <div className="upcoming-card">
              <div className="uc-city">Bhilai</div>
              <div className="uc-badge">Coming Soon</div>
              <div className="uc-launch">Est. Launch: Q3 2025 · Pre-registrations open</div>
              <button className="btn btn-outline" style={upcomingBtn} onClick={() => navigate("contact")}>Pre-Register →</button>
            </div>
            <div className="upcoming-card">
              <div className="uc-city">Bilaspur</div>
              <div className="uc-badge">Coming Soon</div>
              <div className="uc-launch">Est. Launch: Q4 2025 · Pre-registrations open</div>
              <button className="btn btn-outline" style={upcomingBtn} onClick={() => navigate("contact")}>Pre-Register →</button>
            </div>
            <div className="upcoming-card">
              <div className="uc-city">Indore</div>
              <div className="uc-badge">Coming Soon</div>
              <div className="uc-launch">Est. Launch: 2026 · Register interest</div>
              <button className="btn btn-outline" style={upcomingBtn} onClick={() => navigate("contact")}>Register Interest →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
