import { openWA } from "@/lib/wa";

export default function ContactForm() {
  return (
    <div className="contact-form">
      <div style={{ fontFamily: "var(--ff-head)", fontSize: "1.5rem", fontWeight: 800, textTransform: "uppercase", marginBottom: 8 }}>
        Send Us an Inquiry
      </div>
      <p style={{ fontSize: 13, marginBottom: 28 }}>
        We&apos;ll get back to you within 24 hours and guide you to the right program for your level.
      </p>
      <div className="form-row">
        <div>
          <label className="form-label">Full Name *</label>
          <input className="form-input" type="text" placeholder="Your full name" />
        </div>
        <div>
          <label className="form-label">Phone Number *</label>
          <input className="form-input" type="tel" placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label className="form-label">Email (Optional)</label>
          <input className="form-input" type="email" placeholder="your@email.com" />
        </div>
        <div>
          <label className="form-label">Your City</label>
          <input className="form-input" type="text" placeholder="e.g. Raipur" />
        </div>
      </div>
      <label className="form-label">Interested In</label>
      <select className="form-select" defaultValue="Foundation / Beginner Program">
        <option>Foundation / Beginner Program</option>
        <option>Advanced Program</option>
        <option>Mentorship Program</option>
        <option>Free Demo Class</option>
        <option>Offline Classes (Raipur)</option>
        <option>Pre-register for Upcoming City</option>
        <option>General Inquiry</option>
      </select>
      <label className="form-label">Best Time to Call</label>
      <select className="form-select" defaultValue="Morning (10am–12pm)">
        <option>Morning (10am–12pm)</option>
        <option>Afternoon (12pm–3pm)</option>
        <option>Evening (5pm–7pm)</option>
        <option>Any Time</option>
      </select>
      <label className="form-label">Message (Optional)</label>
      <textarea className="form-textarea" placeholder="Your trading background, specific questions, or anything else..."></textarea>
      <button className="btn btn-red" style={{ width: "100%" }} onClick={openWA}>Submit Inquiry →</button>
      <p style={{ fontFamily: "var(--ff-mono)", fontSize: 10, color: "var(--grey2)", marginTop: 12, textAlign: "center", letterSpacing: "0.08em" }}>
        AFTER SUBMITTING, OUR TEAM WILL WHATSAPP YOU TO CONFIRM
      </p>

      <div className="disclaimer-box">
        <div className="disclaimer-label">Disclaimer</div>
        <div className="disclaimer-text">
          Finvision is a trading education company. We are not SEBI-registered advisors and do not provide investment advice, tips, or signals. All content is for educational purposes only. Trading involves risk. Past student results do not guarantee future outcomes.
        </div>
      </div>
    </div>
  );
}
