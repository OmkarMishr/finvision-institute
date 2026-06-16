"use client";

import { useState, useEffect } from "react";
import { NavContext, type Theme } from "@/components/context/NavContext";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import type { PageName } from "@/lib/types";

const ROUTES: Record<PageName, string> = {
  home: "/",
  about: "/about",
  courses: "/courses",
  blog: "/blog",
  centers: "/centers",
  contact: "/contact",
};

type Props = {
  page: PageName;
  children: React.ReactNode;
};

export default function PageWrapper({ page, children }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    return (document.documentElement.getAttribute("data-theme") as Theme | null) ?? "dark";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch {}
      return next;
    });
  };

  const navigate = (p: PageName) => {
    setMobileOpen(false);
    window.location.href = ROUTES[p] ?? "/";
  };

  return (
    <NavContext.Provider value={{ page, navigate, scrolled, mobileOpen, setMobileOpen, theme, toggleTheme }}>
      <Navbar />
      <MobileMenu />
      {children}
      <Footer />
    </NavContext.Provider>
  );
}
