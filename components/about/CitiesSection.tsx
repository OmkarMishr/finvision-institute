export default function CitiesSection() {
  return (
    <section className="cities-sec">
      <div className="wrap">
        <div className="tag">Presence</div>
        <h2>Growing Across<br /><span className="red">Cities</span></h2>
        <div className="red-rule"></div>
        <div className="cities-grid">
          <div className="city-card main">
            <div className="city-name">Raipur</div>
            <div className="city-state">Chhattisgarh · Head Office</div>
            <div className="city-badge op">Fully Operational</div>
          </div>
          <div className="city-card">
            <div className="city-name">Bhilai</div>
            <div className="city-state">Chhattisgarh</div>
            <div className="city-badge up">Opening Q3 2026</div>
          </div>
          <div className="city-card">
            <div className="city-name">Bilaspur</div>
            <div className="city-state">Chhattisgarh</div>
            <div className="city-badge up">Opening Q4 2026</div>
          </div>
          <div className="city-card">
            <div className="city-name">Indore</div>
            <div className="city-state">Madhya Pradesh</div>
            <div className="city-badge up">Opening 2027</div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="/contact" className="btn btn-red">Start Your Learning Journey →</a>
        </div>
      </div>
    </section>
  );
}
