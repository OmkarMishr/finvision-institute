import { useNav } from "@/components/context/NavContext";

export default function CentersFinalCTA() {
  const { navigate } = useNav();
  return (
    <div className="final-cta-sec" style={{ padding: "80px 0" }}>
      <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>Start Learning from<br />the Right Place.</h2>
        <p style={{ marginBottom: 32 }}>Whether online or at our Raipur institute, Finvision gives you a structured path.</p>
        <div className="final-cta-actions">
          <button className="btn btn-white" onClick={() => navigate("contact")}>Enroll Now →</button>
          <button className="btn btn-transparent" style={{ clipPath: "none" }} onClick={() => navigate("courses")}>View Programs</button>
        </div>
      </div>
    </div>
  );
}
