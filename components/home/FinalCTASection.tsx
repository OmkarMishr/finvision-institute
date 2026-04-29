import { useNav } from "@/components/context/NavContext";
import { openWA } from "@/lib/wa";

export default function FinalCTASection() {
  const { navigate } = useNav();
  return (
    <div className="final-cta-sec">
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="tag" style={{ justifyContent: "center", color: "rgba(255,255,255,0.7)" }}>Ready?</div>
        <h2>Stop Guessing.<br />Start Understanding.</h2>
        <p>Join Finvision and learn how professional traders actually approach the market. Free demo class available.</p>
        <div className="final-cta-actions">
          <button className="btn btn-white" onClick={() => navigate("contact")}>Enroll Now →</button>
          <button className="btn btn-transparent btn-wapp" style={{ clipPath: "none" }} onClick={openWA}>WhatsApp Us</button>
          <button className="btn btn-transparent" style={{ clipPath: "none" }} onClick={() => navigate("courses")}>View Programs</button>
        </div>
      </div>
    </div>
  );
}
