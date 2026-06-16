"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function Navbar() {
  const { scrolled, mobileOpen, setMobileOpen, theme } = useNav();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">

        {/* ── LOGO ── */}
        <Link href="/">
          <Image
            className="brand-icon brand-icon--nav"
            src={theme === "dark" ? "/logo-nav-dark.svg" : "/logo-nav.svg"}
            alt="Finvision"
            width={636}
            height={817}
            style={{ width: "auto", height: "220px", marginTop: "-20px" }}
          />
        </Link>

        <div className="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
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
