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
            <div className="team-name">Akshay Sir</div>
            <div className="team-role">Founder &amp; Lead Mentor</div>
            <div className="team-desc">15+ years in equity and F&amp;O. Specializes in price action, market structure, and building independent trader psychology.</div>
          </div>
          <div className="team-card">
            <div className="team-avatar-box">RG</div>
            <div className="team-name">Rohit Gupta</div>
            <div className="team-role">Senior Mentor</div>
            <div className="team-desc">8 years in commodity and currency markets. Expert in risk management frameworks and systematic trading approaches.</div>
          </div>
          <div className="team-card">
            <div className="team-avatar-box">NM</div>
            <div className="team-name">Neha Mishra</div>
            <div className="team-role">Mentor &amp; Student Success</div>
            <div className="team-desc">6 years trading equity derivatives. Focuses on options structure, discipline training, and beginner-to-intermediate transition.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
