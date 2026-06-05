import Image from "next/image";
import { useNav } from "@/components/context/NavContext";
import ThemeToggle from "@/components/ui/ThemeToggle";
import type { PageName } from "@/lib/types";

const LINKS: { id: PageName; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "courses", label: "Courses" },
  { id: "blog", label: "Blog" },
  { id: "centers", label: "Centers" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { page, navigate, scrolled, mobileOpen, setMobileOpen } = useNav();

  return (
    <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">

        {/* ── LOGO ── */}
        <Image
          className="brand-icon brand-icon--nav"
          src="/fin-logo.svg"
          alt="Finvision"
          width={400}
          height={200}
          objectFit="contain"
          style={{ width: 'auto', height: 'auto', maxHeight: '200px' }}
        />

        <div className="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.id}
              id={`nav-${l.id}`}
              className={page === l.id ? "active" : ""}
              onClick={() => navigate(l.id)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <ThemeToggle />

        <a href="https://www.crm.myfinvision.com/" className="nav-cta">
          LOG-IN / SIGN-UP
        </a>

        <button
          className="hamburger"
          id="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}