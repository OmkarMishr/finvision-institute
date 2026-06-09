import Image from "next/image";
import { useNav } from "@/components/context/NavContext";
import { openWA } from "@/lib/wa";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/919630840305",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/121054360/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Myfinvision",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@finvisionofficial",
    icon: (
      <svg viewBox="0 0 192 192" fill="currentColor" width="18" height="18">
        <path d="M141.537 88.988a66.667 66.667 0 00-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.05l13.378 9.177c5.806-8.805 14.93-10.686 21.742-10.686h.23c8.412.054 14.757 2.5 18.862 7.27 2.981 3.437 4.977 8.196 5.95 14.168-7.422-1.261-15.452-1.648-24.03-1.157-24.174 1.39-39.727 15.401-38.71 34.895.516 9.856 5.277 18.354 13.403 23.912 6.878 4.75 15.752 7.108 24.99 6.605 12.2-.657 21.775-5.316 28.457-13.846 5.108-6.457 8.34-14.833 9.793-25.456 5.875 3.546 10.223 8.221 12.638 13.82 4.047 9.466 4.268 25.004-8.498 37.719-11.014 11.009-24.132 15.78-44.012 15.926-22.07-.165-38.834-7.239-49.828-21.025C38.471 136.866 33.825 118.082 33.667 96c.158-22.082 4.804-40.866 13.796-55.864C58.457 26.453 75.221 19.38 97.291 19.214c22.24.166 38.795 7.27 49.267 21.114 5.145 6.774 8.98 15.272 11.402 25.126l15.44-4.12c-2.888-11.783-7.659-22.033-14.23-30.498C143.65 12.84 123.085 3.148 97.374 3.003h-.08C71.62 3.148 51.006 12.87 37.029 29.987 24.531 45.463 18.07 67.16 17.892 96c.178 28.84 6.639 50.537 19.137 66.013C50.928 179.188 71.542 188.907 97.294 189.012h.08c22.916-.141 39.35-6.158 52.829-19.617 17.384-17.354 16.866-39.21 11.13-52.539-4.14-9.666-12.2-17.352-19.796-21.868zm-47.941 43.337c-10.586.59-21.552-4.158-22.082-14.355-.394-7.502 5.33-15.873 22.63-16.874 1.983-.114 3.93-.169 5.841-.169 6.137 0 11.882.601 17.156 1.778-1.95 24.294-13.47 29.013-23.545 29.62z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/FinVisionLearn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { navigate, theme } = useNav();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-wrap">
              <Image
                className="brand-icon brand-icon--footer"
                src={theme === "dark" ? "/fin-logo-dark.svg" : "/fin-logo.svg"}
                alt="Finvision"
                width={400}
                height={200}
                objectFit="contain"
                style={{ width: "auto", height: "auto", maxHeight: "200px" }}
              />
            </div>
            <p>Real market education from practitioners who trade. Based in Raipur, expanding across India.</p>
            <div style={{ marginTop: 20 }}>
              <button className="btn btn-wapp" style={{ fontSize: 13, padding: "10px 20px" }} onClick={openWA}>
                WhatsApp Us
              </button>
            </div>
            <div className="footer-social">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-col-title">Programs</div>
            <div className="footer-links">
              <a onClick={() => navigate("contact")}>Free Demo Class</a>
              <a onClick={() => navigate("courses")}>Advanced Program</a>
              <a onClick={() => navigate("courses")}>Mentorship</a>
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
              <a href="tel:+918889199933">+91-88891 99933</a>
              <a href="mailto:support@myfinvision.com">support@myfinvision.com</a>
              <a>Currency Tower, Raipur</a>
              <a>Mon–Sat · 10am–7pm</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 FINVISION. ALL RIGHTS RESERVED.</div>
          <div className="footer-disc">EDUCATION ONLY · NOT SEBI REGISTERED · NOT INVESTMENT ADVICE</div>
        </div>
      </div>
    </footer>
  );
}
