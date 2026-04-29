import { useNav } from "@/components/context/NavContext";
import type { PageName } from "@/lib/types";

const LINKS: { id: PageName; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "courses", label: "Courses" },
  { id: "blog", label: "Blog" },
  { id: "centers", label: "Centers" },
  { id: "contact", label: "Contact" },
];

export default function MobileMenu() {
  const { navigate, mobileOpen } = useNav();

  return (
    <div className={`mobile-menu${mobileOpen ? " open" : ""}`} id="mobile-menu">
      {LINKS.map((l) => (
        <a key={l.id} onClick={() => navigate(l.id)}>
          {l.label}
        </a>
      ))}
      <div style={{ marginTop: 28 }}>
        <button className="btn btn-red" onClick={() => navigate("contact")}>
          Enroll Now →
        </button>
      </div>
    </div>
  );
}
