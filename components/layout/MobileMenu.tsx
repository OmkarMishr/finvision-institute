"use client";

import { useNav } from "@/components/context/NavContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

const LINKS = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Blog",    href: "/blog" },
  { label: "Centers", href: "/centers" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const { mobileOpen, setMobileOpen } = useNav();

  return (
    <div className={`mobile-menu${mobileOpen ? " open" : ""}`} id="mobile-menu">
      {LINKS.map((l) => (
        <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
          {l.label}
        </a>
      ))}
      <div style={{ marginTop: 28 }}>
        <button
          className="btn btn-red"
          onClick={() => window.open("https://www.crm.myfinvision.com/", "_blank", "noopener,noreferrer")}
        >
          Log In / Sign Up
        </button>
      </div>
      <div style={{ marginTop: 16 }}>
        <ThemeToggle />
      </div>
    </div>
  );
}
