export default function CentersFinalCTA() {
  return (
    <div className="final-cta-sec" style={{ padding: "80px 0" }}>
      <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>Start Learning from<br />the Right Place.</h2>
        <p style={{ marginBottom: 32 }}>Whether online or at our Raipur institute, Finvision gives you a structured path.</p>
        <div className="final-cta-actions">
          <a href="/contact" className="btn btn-white">Enroll Now →</a>
          <a href="/courses" className="btn btn-transparent" style={{ clipPath: "none" }}>View Programs</a>
        </div>
      </div>
    </div>
  );
}
