import { useNav } from "@/components/context/NavContext";

export default function JourneySection() {
  const { navigate } = useNav();
  const goCourses = () => navigate("courses");

  return (
    <section className="journey-sec">
      <div className="wrap">
        <div className="tag">Your Path</div>
        <h2>From Zero to<br /><span className="red">Independent Trader</span></h2>
        <div className="red-rule"></div>
        <div className="journey-steps">
          <div className="j-step">
            <div className="j-step-num">01</div>
            <div className="j-step-label">Step 01</div>
            <div className="j-step-name">Foundation</div>
            <div className="j-step-desc">How markets function. Why price moves. Read charts with clarity before learning any strategy.</div>
            <div className="j-step-link" onClick={goCourses}>→ FOUNDATION PROGRAM</div>
          </div>
          <div className="j-step">
            <div className="j-step-num">02</div>
            <div className="j-step-label">Step 02</div>
            <div className="j-step-name">Clarity</div>
            <div className="j-step-desc">Price action, market structure, support &amp; resistance — the way professionals actually see them.</div>
            <div className="j-step-link" onClick={goCourses}>→ ADVANCED PROGRAM</div>
          </div>
          <div className="j-step">
            <div className="j-step-num">03</div>
            <div className="j-step-label">Step 03</div>
            <div className="j-step-name">Strategy</div>
            <div className="j-step-desc">Build your own trading system. One that makes sense to you — not someone else&apos;s copied setup.</div>
            <div className="j-step-link" onClick={goCourses}>→ ADVANCED PROGRAM</div>
          </div>
          <div className="j-step">
            <div className="j-step-num">04</div>
            <div className="j-step-label">Step 04</div>
            <div className="j-step-name">Execution</div>
            <div className="j-step-desc">Trade with logic and discipline. Refine under live guidance until confidence is real.</div>
            <div className="j-step-link" onClick={goCourses}>→ MENTORSHIP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
