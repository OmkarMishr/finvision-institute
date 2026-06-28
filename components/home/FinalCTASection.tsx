import { openWA } from "@/lib/wa";

export default function FinalCTASection() {
  return (
    <div className="final-cta-sec">
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="tag" style={{ justifyContent: "center", color: "rgba(255,255,255,0.7)" }}>Ready?</div>
        <h2>Stop Guessing.<br />Start Understanding.</h2>
        <p>Join Finvision and learn how professional traders actually approach the market. Free demo class available.</p>
        <div className="final-cta-actions">
          <a href="/contact" className="btn btn-white">Enroll Now →</a>
          <button className="btn btn-transparent btn-wapp" style={{ clipPath: "none" }} onClick={openWA}>WhatsApp Us</button>
          <a href="/courses" className="btn btn-transparent" style={{ clipPath: "none" }}>View Programs</a>
        </div>
      </div>
    </div>
  );
}
