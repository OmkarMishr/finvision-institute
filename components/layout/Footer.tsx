import { useNav } from "@/components/context/NavContext";
import LogoSVG from "@/components/ui/LogoSVG";
import { openWA } from "@/lib/wa";

export default function Footer() {
  const { navigate } = useNav();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-wrap">
              <LogoSVG />
              <div className="logo-text">
                <span className="f">F</span>
                <span className="rest">INVISION</span>
              </div>
            </div>
            <p>Real market education from practitioners who trade. Based in Raipur, expanding across India.</p>
            <div style={{ marginTop: 20 }}>
              <button className="btn btn-wapp" style={{ fontSize: 13, padding: "10px 20px" }} onClick={openWA}>
                WhatsApp Us
              </button>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Programs</div>
            <div className="footer-links">
              <a onClick={() => navigate("courses")}>Foundation Program</a>
              <a onClick={() => navigate("courses")}>Advanced Program</a>
              <a onClick={() => navigate("courses")}>Mentorship</a>
              <a onClick={() => navigate("contact")}>Free Demo Class</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <a onClick={() => navigate("about")}>About Us</a>
              <a onClick={() => navigate("blog")}>Blog</a>
              <a onClick={() => navigate("centers")}>Our Centers</a>
              <a onClick={() => navigate("contact")}>Contact</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-links">
              <a href="tel:+918889199977">+91 88891 99977</a>
              <a href="mailto:finvisionofficial@gmail.com">finvisionofficial@gmail.com</a>
              <a>Currency Tower, Raipur</a>
              <a>Mon–Sat · 10am–7pm</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 FINVISION. ALL RIGHTS RESERVED.</div>
          <div className="footer-disc">EDUCATION ONLY · NOT SEBI REGISTERED · NOT INVESTMENT ADVICE</div>
        </div>
      </div>
    </footer>
  );
}
