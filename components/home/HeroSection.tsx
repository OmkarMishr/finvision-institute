import { useNav } from "@/components/context/NavContext";
import WAIcon from "@/components/ui/WAIcon";
import { openWA } from "@/lib/wa";

export default function HeroSection() {
  const { navigate } = useNav();

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
            <button className="btn btn-red" onClick={() => navigate("courses")}>
              Start Learning →
            </button>
            <button className="btn btn-outline" onClick={() => navigate("centers")}>
              Visit Raipur Center
            </button>
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
