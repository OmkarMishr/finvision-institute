import { useNav } from "@/components/context/NavContext";

export default function AboutStorySection() {
  const { navigate } = useNav();
  return (
    <section>
      <div className="wrap">
        <div className="about-story-grid">
          <div>
            <div className="tag">The Beginning</div>
            <h2>Built to Fix<br /><span className="red">What Was Broken</span></h2>
            <div className="red-rule"></div>
            <p style={{ marginBottom: 18 }}>
              In 2018, after watching thousands of retail traders lose money — not because they lacked intelligence but because they were being taught indicators instead of understanding — Finvision was created.
            </p>
            <p style={{ marginBottom: 18 }}>
              Traders were overloaded with shortcuts, signals, and magic setups. None of it worked consistently because the foundation was wrong.
            </p>
            <p style={{ marginBottom: 32 }}>
              We built Finvision to change that. Not to sell strategies. Not to give signals. But to build clarity, logic, and real trading understanding — from the ground up.
            </p>
            <button className="btn btn-red" onClick={() => navigate("courses")}>See Our Programs →</button>
          </div>
          <div>
            <div className="timeline">
              <div className="tl-item"><div className="tl-year">2018</div><div className="tl-text">Founded in Raipur. First batch of 24 students. No ads — just word of mouth from real results.</div></div>
              <div className="tl-item"><div className="tl-year">2020</div><div className="tl-text">Launched online program. Reached 500+ trained traders across Chhattisgarh.</div></div>
              <div className="tl-item"><div className="tl-year">2022</div><div className="tl-text">Second centre operational. 2000+ traders trained. Advanced program launched.</div></div>
              <div className="tl-item"><div className="tl-year">2024</div><div className="tl-text">Mentorship batch launched. Bhilai, Bilaspur, Indore expansion underway.</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
