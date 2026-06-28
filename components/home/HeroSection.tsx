import WAIcon from "@/components/ui/WAIcon";
import { openWA } from "@/lib/wa";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg-letter">F</div>
      <div className="hero-scan"></div>
      <div className="wrap">
        <div className="hero-content">
          <div className="hero-eyebrow fu1">Raipur&apos;s Premier Trading Institute</div>
          <h1 className="fu2">
            Retail Traders<br />
            <em>React.</em><br />
            Professionals<br />
            <em>Anticipate.</em>
          </h1>
          <p className="hero-sub fu3">
            Learn how markets actually move — not indicators, not guesswork. Real price action and decision-making from practitioners who trade every day.
          </p>
          <div className="hero-actions fu4">
            <a href="/courses" className="btn btn-red">
              Start Learning →
            </a>
            <a href="/centers" className="btn btn-outline">
              Visit Raipur Center
            </a>
            <button className="btn btn-wapp" onClick={openWA}>
              <WAIcon />
              WhatsApp
            </button>
          </div>
          <div className="hero-free-note fu5">FREE DEMO CLASS AVAILABLE · NO PRIOR EXPERIENCE NEEDED</div>
        </div>
      </div>
    </section>
  );
}
