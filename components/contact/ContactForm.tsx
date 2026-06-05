"use client";

import { useState } from "react";
import { openWAWithInquiry } from "@/lib/wa";

export default function ContactForm() {
  const [name, setName]         = useState("");
  const [phone, setPhone]       = useState("");
  const [email, setEmail]       = useState("");
  const [city, setCity]         = useState("");
  const [program, setProgram]   = useState("Foundation / Beginner Program");
  const [callTime, setCallTime] = useState("Morning (10am–12pm)");
  const [message, setMessage]   = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [crmError, setCrmError]     = useState(false);

  async function handleSubmit() {
    if (!name.trim() || !phone.trim()) {
      alert("Please fill in your name and phone number.");
      return;
    }

    setSubmitting(true);
    setCrmError(false);

    const data = { name, phone, email, city, program, callTime, message };

    // 1. Open WhatsApp immediately — must be before any `await` to stay in the
    //    user-gesture context and avoid browser popup blockers.
    openWAWithInquiry(data);

    // 2. Send to CRM in background — WhatsApp already fired so we never block on this.
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        console.error("CRM error:", errData.error || res.status, errData.detail || "");
        setCrmError(true);
      }
    } catch (err) {
      console.error("CRM unreachable:", err);
      setCrmError(true);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="contact-form" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16, minHeight: 320 }}>
        <div style={{ fontSize: "2.8rem" }}>✅</div>
        <div style={{ fontFamily: "var(--ff-head)", fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase" }}>
          Inquiry Sent!
        </div>
        <p style={{ fontSize: 14, color: "var(--grey2)", maxWidth: 320 }}>
          Your details have been saved and a WhatsApp chat has been opened. Our team will reach out shortly.
        </p>
        {crmError && (
          <p style={{ fontSize: 11, color: "#c00", maxWidth: 300 }}>
            Note: CRM sync failed — your WhatsApp message still went through.
          </p>
        )}
        <button
          className="btn btn-red"
          style={{ marginTop: 8 }}
          onClick={() => {
            setSubmitted(false);
            setCrmError(false);
            setName(""); setPhone(""); setEmail(""); setCity("");
            setProgram("Foundation / Beginner Program");
            setCallTime("Morning (10am–12pm)");
            setMessage("");
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

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
          <input className="form-input" type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label className="form-label">Phone Number *</label>
          <input className="form-input" type="tel" placeholder="+91 XXXXX XXXXX" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label className="form-label">Email (Optional)</label>
          <input className="form-input" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="form-label">Your City</label>
          <input className="form-input" type="text" placeholder="e.g. Raipur" value={city} onChange={e => setCity(e.target.value)} />
        </div>
      </div>
      <label className="form-label">Interested In</label>
      <select className="form-select" value={program} onChange={e => setProgram(e.target.value)}>
        <option>Foundation / Beginner Program</option>
        <option>Advanced Program</option>
        <option>Mentorship Program</option>
        <option>Free Demo Class</option>
        <option>Offline Classes (Raipur)</option>
        <option>Pre-register for Upcoming City</option>
        <option>General Inquiry</option>
      </select>
      <label className="form-label">Best Time to Call</label>
      <select className="form-select" value={callTime} onChange={e => setCallTime(e.target.value)}>
        <option>Morning (10am–12pm)</option>
        <option>Afternoon (12pm–3pm)</option>
        <option>Evening (5pm–7pm)</option>
        <option>Any Time</option>
      </select>
      <label className="form-label">Message (Optional)</label>
      <textarea className="form-textarea" placeholder="Your trading background, specific questions, or anything else..." value={message} onChange={e => setMessage(e.target.value)}></textarea>
      <button className="btn btn-red" style={{ width: "100%" }} onClick={handleSubmit} disabled={submitting}>
        {submitting ? "Sending…" : "Submit Inquiry →"}
      </button>
      <p style={{ fontFamily: "var(--ff-mono)", fontSize: 10, color: "var(--grey2)", marginTop: 12, textAlign: "center", letterSpacing: "0.08em" }}>
        AFTER SUBMITTING, OUR TEAM WILL WHATSAPP YOU TO CONFIRM
      </p>

      <div className="disclaimer-box">
        <div className="disclaimer-label">Disclaimer</div>
        <div className="disclaimer-text">
          Finvision is a trading Institute. We are not SEBI-registered advisors and do not provide investment advice, tips, or signals. All content is for educational purposes only. Trading involves risk. Past student results do not guarantee future outcomes.
        </div>
      </div>
    </div>
  );
}
