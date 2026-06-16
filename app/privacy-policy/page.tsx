"use client";

import { useState, useEffect } from "react";
import { NavContext, type Theme } from "@/components/context/NavContext";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";

const sectionHeading: React.CSSProperties = {
  fontFamily: "var(--ff-head)",
  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--white)",
  marginBottom: "16px",
  paddingLeft: "16px",
  borderLeft: "3px solid var(--red)",
};

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--ff-mono)",
  fontSize: "11px",
  letterSpacing: "0.15em",
  color: "var(--red)",
  marginBottom: "10px",
  display: "block",
};

const bodyText: React.CSSProperties = {
  color: "var(--grey)",
  fontWeight: 300,
  lineHeight: 1.8,
  marginBottom: "14px",
};

const listStyle: React.CSSProperties = {
  color: "var(--grey)",
  fontWeight: 300,
  lineHeight: 1.8,
  paddingLeft: "20px",
  marginBottom: "14px",
};

const subheading: React.CSSProperties = {
  fontFamily: "var(--ff-head)",
  fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "var(--white)",
  marginTop: "24px",
  marginBottom: "10px",
};

const divider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid var(--border)",
  margin: "48px 0",
};

export default function PrivacyPolicyPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    return (document.documentElement.getAttribute("data-theme") as Theme | null) ?? "dark";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch {}
      return next;
    });
  };

  const navigate = () => {
    window.location.href = "/";
  };

  return (
    <NavContext.Provider value={{ page: "home", navigate, scrolled, mobileOpen, setMobileOpen, theme, toggleTheme }}>
      <Navbar />
      <MobileMenu />

      <div style={{ minHeight: "100vh", background: "var(--black)", color: "var(--white)", paddingTop: "var(--nav-h)" }}>

        {/* ── Hero ── */}
        <div style={{
          background: "var(--black3)",
          borderBottom: "1px solid var(--border)",
          padding: "72px 0 60px",
        }}>
          <div className="wrap">
            <span style={{
              fontFamily: "var(--ff-mono)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--red)",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}>
              <span style={{ width: "24px", height: "2px", background: "var(--red)", display: "inline-block" }} />
              Legal
            </span>
            <h1 style={{
              fontFamily: "var(--ff-head)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: 1.05,
              marginBottom: "20px",
              color: "var(--red)",
            }}>
              Privacy Policy
            </h1>
            <p style={{ maxWidth: "560px", color: "var(--grey)", fontWeight: 300, lineHeight: 1.7, marginBottom: "28px" }}>
              At FINVISION, your privacy matters. This policy explains what information we collect,
              how we use it, and the rights you have over your personal data.
            </p>
            <span style={{
              fontFamily: "var(--ff-mono)",
              fontSize: "11px",
              color: "var(--grey3)",
              letterSpacing: "0.08em",
            }}>
              Last Updated: June 16, 2026
            </span>
          </div>
        </div>

        {/* ── Content ── */}
        <main style={{ padding: "80px 0 100px" }}>
          <div className="wrap" style={{ maxWidth: "820px" }}>

            {/* 01 · Introduction */}
            <section style={{ marginBottom: "56px" }}>
              <span style={sectionLabel}>01</span>
              <h2 style={sectionHeading}>Introduction</h2>
              <p style={bodyText}>
                Welcome to FINVISION — a financial markets education institute based in Raipur,
                Chhattisgarh, India. This Privacy Policy describes how we collect, use, disclose,
                and safeguard your information when you visit{" "}
                <span style={{ color: "var(--white)" }}>www.myfinvision.com</span> or enroll in
                our educational programs.
              </p>
              <p style={bodyText}>
                By using our website or services, you consent to the data practices described in
                this policy. If you disagree with any part of this policy, please discontinue use
                of our website and services.
              </p>
            </section>

            <hr style={divider} />

            {/* 02 · Information We Collect */}
            <section style={{ marginBottom: "56px" }}>
              <span style={sectionLabel}>02</span>
              <h2 style={sectionHeading}>Information We Collect</h2>
              <p style={bodyText}>
                We collect two categories of information: personal information you voluntarily
                provide, and technical information collected automatically.
              </p>

              <p style={subheading}>Personal Identification Information</p>
              <ul style={listStyle}>
                <li style={{ marginBottom: "8px" }}>
                  <span style={{ color: "var(--white)" }}>Full Name</span> — collected when you
                  submit course inquiry or enrollment forms
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <span style={{ color: "var(--white)" }}>Phone Number</span> — used to contact you
                  about programs, batch schedules, and enrollment details via WhatsApp or call
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <span style={{ color: "var(--white)" }}>Email Address</span> — used for enrollment
                  confirmations, educational updates, and relevant communications
                </li>
              </ul>

              <p style={subheading}>Technical Information</p>
              <p style={bodyText}>
                When you visit our website, we automatically collect browser type and version,
                operating system, IP address, referring URLs, and pages visited. This data is
                collected through cookies and analytics tools and is used solely to improve website
                performance and user experience.
              </p>
            </section>

            <hr style={divider} />

            {/* 03 · How We Use Your Information */}
            <section style={{ marginBottom: "56px" }}>
              <span style={sectionLabel}>03</span>
              <h2 style={sectionHeading}>How We Use Your Information</h2>
              <p style={bodyText}>
                We use the information we collect for the following purposes:
              </p>
              <ul style={listStyle}>
                <li style={{ marginBottom: "8px" }}>To respond to course inquiries and guide you to the right program</li>
                <li style={{ marginBottom: "8px" }}>To process enrollments and communicate batch schedules and logistics</li>
                <li style={{ marginBottom: "8px" }}>To send educational content, course updates, and relevant communications</li>
                <li style={{ marginBottom: "8px" }}>To improve our website experience, content, and service quality</li>
                <li style={{ marginBottom: "8px" }}>To analyze website usage patterns and optimize performance</li>
                <li style={{ marginBottom: "8px" }}>To comply with applicable legal and regulatory obligations</li>
              </ul>
              <p style={{ ...bodyText, fontStyle: "italic", color: "var(--grey2)" }}>
                We do not sell, rent, or trade your personal information to third parties for
                commercial purposes.
              </p>
            </section>

            <hr style={divider} />

            {/* 04 · Cookies & Analytics */}
            <section style={{ marginBottom: "56px" }}>
              <span style={sectionLabel}>04</span>
              <h2 style={sectionHeading}>Cookies & Site Analytics</h2>
              <p style={bodyText}>
                Our website uses cookies and similar tracking technologies to enhance your browsing
                experience and analyze site performance.
              </p>

              <p style={subheading}>Types of Cookies We Use</p>
              <ul style={listStyle}>
                <li style={{ marginBottom: "8px" }}>
                  <span style={{ color: "var(--white)" }}>Essential Cookies</span> — required for
                  core website functionality such as session management and security
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <span style={{ color: "var(--white)" }}>Analytics Cookies</span> — help us
                  understand how visitors interact with our website so we can improve it
                </li>
              </ul>

              <p style={subheading}>Analytics Tools We Use</p>
              <p style={bodyText}>
                <span style={{ color: "var(--white)" }}>Google Analytics</span> — We use Google
                Analytics to track and report website traffic, user behavior, and engagement
                patterns. Google Analytics collects anonymized data including page views, session
                duration, and approximate geographic location. You can opt out using the{" "}
                <span style={{ color: "var(--grey)" }}>Google Analytics Opt-out Browser Add-on</span>.
              </p>
              <p style={bodyText}>
                <span style={{ color: "var(--white)" }}>Microsoft Clarity</span> — We use
                Microsoft Clarity to record anonymized behavioral data including mouse movements,
                clicks, and scrolling patterns. This helps us identify usability issues and improve
                the user experience. No personally identifiable information is captured by Clarity.
              </p>
              <p style={bodyText}>
                By continuing to use our website, you consent to our use of cookies. You can manage
                or disable cookies through your browser settings; however, disabling cookies may
                limit certain features of the website.
              </p>
            </section>

            <hr style={divider} />

            {/* 05 · Data Security */}
            <section style={{ marginBottom: "56px" }}>
              <span style={sectionLabel}>05</span>
              <h2 style={sectionHeading}>Data Security</h2>
              <p style={bodyText}>
                We take the security of your personal information seriously and implement appropriate
                technical and organizational measures to protect it against unauthorized access,
                loss, disclosure, or destruction.
              </p>
              <p style={bodyText}>Our security practices include:</p>
              <ul style={listStyle}>
                <li style={{ marginBottom: "8px" }}>Secure data transmission via HTTPS (SSL/TLS encryption)</li>
                <li style={{ marginBottom: "8px" }}>Restricted access to personal data on a strict need-to-know basis</li>
                <li style={{ marginBottom: "8px" }}>Regular review of our data collection, storage, and handling practices</li>
                <li style={{ marginBottom: "8px" }}>Use of reputable, security-audited third-party services for data processing</li>
              </ul>
              <p style={{ ...bodyText, padding: "16px 20px", background: "var(--black4)", borderLeft: "3px solid var(--red)", borderRadius: "4px" }}>
                While we strive to protect your information using commercially acceptable means,
                no method of transmission over the internet or electronic storage is 100% secure.
                We cannot guarantee absolute security and encourage you to take personal precautions
                when sharing data online.
              </p>
            </section>

            <hr style={divider} />

            {/* 06 · User Rights */}
            <section style={{ marginBottom: "56px" }}>
              <span style={sectionLabel}>06</span>
              <h2 style={sectionHeading}>Your Rights</h2>
              <p style={bodyText}>
                You have the following rights regarding your personal information held by FINVISION:
              </p>
              <ul style={listStyle}>
                <li style={{ marginBottom: "12px" }}>
                  <span style={{ color: "var(--white)" }}>Right to Access</span> — You may request
                  a copy of the personal information we hold about you
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span style={{ color: "var(--white)" }}>Right to Correction</span> — You may
                  request that we correct inaccurate or incomplete personal information
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span style={{ color: "var(--white)" }}>Right to Deletion</span> — You may
                  request that we delete your personal data, subject to applicable legal requirements
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span style={{ color: "var(--white)" }}>Right to Withdraw Consent</span> — You
                  may withdraw your consent to receive marketing communications at any time
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <span style={{ color: "var(--white)" }}>Right to Restrict Processing</span> — You
                  may request that we limit how we process your personal data in certain circumstances
                </li>
              </ul>
              <p style={bodyText}>
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:support@myfinvision.com" style={{ color: "var(--red)", textDecoration: "none" }}>
                  support@myfinvision.com
                </a>
                . We will respond to your request within a reasonable timeframe.
              </p>
            </section>

            <hr style={divider} />

            {/* 07 · Third-Party Links */}
            <section style={{ marginBottom: "56px" }}>
              <span style={sectionLabel}>07</span>
              <h2 style={sectionHeading}>Third-Party Links</h2>
              <p style={bodyText}>
                Our website may contain links to third-party websites including our CRM portal,
                social media platforms, and payment providers. We are not responsible for the
                privacy practices or content of these external websites. We encourage you to review
                the privacy policies of any third-party sites you visit before providing personal
                information.
              </p>
            </section>

            <hr style={divider} />

            {/* 08 · Data Retention */}
            <section style={{ marginBottom: "56px" }}>
              <span style={sectionLabel}>08</span>
              <h2 style={sectionHeading}>Data Retention</h2>
              <p style={bodyText}>
                We retain your personal information for as long as necessary to fulfill the purposes
                outlined in this policy, or as required by applicable law. Inquiry and enrollment
                data is typically retained for the duration of our business relationship and a
                reasonable period thereafter.
              </p>
              <p style={bodyText}>
                If you request deletion of your data, we will remove it from active systems within
                a reasonable timeframe unless we are legally required to retain it.
              </p>
            </section>

            <hr style={divider} />

            {/* 09 · Children's Privacy */}
            <section style={{ marginBottom: "56px" }}>
              <span style={sectionLabel}>09</span>
              <h2 style={sectionHeading}>Children&apos;s Privacy</h2>
              <p style={bodyText}>
                Our services are intended for individuals who are 18 years of age or older. We do
                not knowingly collect personal information from anyone under 18. If you believe a
                minor has provided us with personal information, please contact us immediately at{" "}
                <a href="mailto:support@myfinvision.com" style={{ color: "var(--red)", textDecoration: "none" }}>
                  support@myfinvision.com
                </a>{" "}
                and we will take steps to remove such information.
              </p>
            </section>

            <hr style={divider} />

            {/* 10 · Changes to Policy */}
            <section style={{ marginBottom: "56px" }}>
              <span style={sectionLabel}>10</span>
              <h2 style={sectionHeading}>Changes to This Policy</h2>
              <p style={bodyText}>
                We may update this Privacy Policy periodically to reflect changes in our practices,
                technology, or legal requirements. We will notify users of material changes by
                updating the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage
                you to review this policy regularly to stay informed about how we protect your
                information.
              </p>
              <p style={bodyText}>
                Continued use of our website after changes are posted constitutes your acceptance
                of the revised policy.
              </p>
            </section>

            <hr style={divider} />

            {/* 11 · Contact */}
            <section style={{
              background: "var(--black4)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "40px",
            }}>
              <span style={sectionLabel}>11</span>
              <h2 style={{ ...sectionHeading, borderLeft: "none", paddingLeft: 0 }}>Contact Us</h2>
              <p style={{ ...bodyText, marginBottom: "24px" }}>
                If you have any questions, concerns, or requests regarding this Privacy Policy or
                how your data is handled, please reach out to us:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "Institute", value: "FINVISION — Financial Markets Education" },
                  { label: "Address", value: "Currency Tower, Raipur, Chhattisgarh, India" },
                  { label: "Phone", value: "+91 88891 99977 · +91 88891 99933" },
                  { label: "Email", value: "support@myfinvision.com", href: "mailto:support@myfinvision.com" },
                  { label: "Hours", value: "Monday – Saturday · 10:00 AM – 7:00 PM" },
                ].map(({ label, value, href }) => (
                  <div key={label} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span style={{
                      fontFamily: "var(--ff-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--grey3)",
                      minWidth: "72px",
                      paddingTop: "2px",
                    }}>
                      {label}
                    </span>
                    {href ? (
                      <a href={href} style={{ color: "var(--red)", fontWeight: 300, textDecoration: "none" }}>
                        {value}
                      </a>
                    ) : (
                      <span style={{ color: "var(--grey)", fontWeight: 300 }}>{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>

        {/* ── Footer ── */}
        <footer style={{
          background: "var(--black2)",
          borderTop: "1px solid var(--border)",
          padding: "28px 0",
        }}>
          <div className="wrap" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}>
            <span style={{ fontFamily: "var(--ff-mono)", fontSize: "11px", color: "var(--grey2)" }}>
              © 2026 FINVISION. ALL RIGHTS RESERVED.
            </span>
            <span style={{ fontFamily: "var(--ff-mono)", fontSize: "11px", color: "var(--grey3)" }}>
              EDUCATION ONLY · NOT SEBI REGISTERED · NOT INVESTMENT ADVICE
            </span>
          </div>
        </footer>

      </div>
    </NavContext.Provider>
  );
}
