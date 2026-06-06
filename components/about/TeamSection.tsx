export default function TeamSection() {
  return (
    <section className="team-sec">
      <div className="wrap">
        <div className="tag">Team</div>
        <h2>Built by Practitioners,<br /><span className="red">Not Theorists</span></h2>
        <div className="red-rule"></div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar-box">AK</div>
            <div className="team-name">Akshay Rathore</div>
            <div className="team-role">Founder &amp; Lead Mentor</div>
            <div className="team-desc">Specializes in price action, market structure, and building independent trader psychology.</div>
          </div>
          <div className="team-card">
            <div className="team-avatar-box">MS</div>
            <div className="team-name">Mahesh Sharma</div>
            <div className="team-role">Senior Mentor</div>
            <div className="team-desc">12+ years in commodity and currency markets. Expert in risk management frameworks and systematic trading approaches.</div>
          </div>
          <div className="team-card">
            <div className="team-avatar-box">VK</div>
            <div className="team-name">Vikas Kumar</div>
            <div className="team-role">Trainer &amp; Mentor</div>
            <div className="team-exp">3+ Years Experience</div>
            <div className="team-desc">Passionate Forex educator helping traders master market analysis, risk management, and profitable trading strategies through practical learning and mentorship.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
