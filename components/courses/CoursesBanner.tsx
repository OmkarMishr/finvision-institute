import { useNav } from "@/components/context/NavContext";
import { openWA } from "@/lib/wa";

export default function CoursesBanner() {
  const { navigate } = useNav();
  return (
    <div className="page-banner" data-letter="C">
      <div className="wrap">
        <div className="tag">Programs</div>
        <h1>Learn the<br /><span className="red">Right Way.</span><br />From the Start.</h1>
        <div className="red-rule"></div>
        <p style={{ maxWidth: 520, marginBottom: 32 }}>
          Three structured programs to take you from zero understanding to confident, independent trading. Online and offline available.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button className="btn btn-wapp" onClick={openWA}>Ask Which Program Fits You</button>
          <button className="btn btn-outline" onClick={() => navigate("contact")}>Book Free Demo Class</button>
        </div>
      </div>
    </div>
  );
}
