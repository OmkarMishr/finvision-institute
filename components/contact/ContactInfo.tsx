import { useNav } from "@/components/context/NavContext";
import WAIcon from "@/components/ui/WAIcon";
import { openWA } from "@/lib/wa";

export default function ContactInfo() {
  const { navigate } = useNav();
  const dot = (bg: string) => ({ width: 8, height: 8, borderRadius: "50%", background: bg } as const);

  return (
    <div>
      <div className="contact-info">
        <div className="ci-block">
          <div className="ci-label">Office Address</div>
          <div className="ci-val">3024, Currency Tower, VIP Chowk<br />Raipur, Chhattisgarh – 492001</div>
          <div className="ci-note">Mon–Sat · 10:00 AM – 7:00 PM</div>
        </div>
        <div className="ci-block">
          <div className="ci-label">Phone</div>
          <div className="ci-val"><a href="tel:+918889199977">+91 88891 99977</a></div>
          <div className="ci-val"><a href="tel:+918889199933">+91 88891 99933</a></div>
        </div>
        <div className="ci-block">
          <div className="ci-label">Email</div>
          <div className="ci-val"><a href="mailto:finvisionofficial@gmail.com">finvisionofficial@gmail.com</a></div>
        </div>
        <div className="ci-block">
          <div className="ci-label">Response Time</div>
          <div className="ci-val" style={{ color: "var(--grey)" }}>Within 24 hours<br />(usually same day)</div>
          <div className="ci-note">WhatsApp preferred for fastest response</div>
        </div>
      </div>
      <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        <button className="btn btn-wapp" style={{ justifyContent: "center" }} onClick={openWA}>
          <WAIcon />
          Chat on WhatsApp (Fastest)
        </button>
        <button className="btn btn-outline" style={{ justifyContent: "center" }} onClick={() => navigate("courses")}>
          View All Programs First →
        </button>
      </div>
      <div className="map-box" style={{ marginTop: 24 }}>
        <div className="map-box-head">
          <div style={dot("#e05252")}></div>
          <div style={dot("#e0b552")}></div>
          <div style={dot("#52e052")}></div>
          <span style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "var(--grey2)", marginLeft: 8 }}>RAIPUR OFFICE</span>
        </div>
        <div style={{ padding: 28, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", minHeight: 140, justifyContent: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(192,51,77,1) 1px,transparent 1px),linear-gradient(90deg,rgba(192,51,77,1) 1px,transparent 1px)", backgroundSize: "28px 28px" }}></div>
          <div style={{ fontSize: 28, marginBottom: 8, position: "relative" }}>📍</div>
          <div style={{ fontFamily: "var(--ff-head)", fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", position: "relative" }}>
            Currency Tower, VIP Chowk
          </div>
          <div style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "var(--grey2)", marginTop: 4, position: "relative" }}>
            Raipur CG 492001
          </div>
        </div>
      </div>
    </div>
  );
}
