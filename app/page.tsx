"use client";

import { useEffect, useState } from "react";
import { NavContext, type Theme } from "@/components/context/NavContext";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Footer from "@/components/layout/Footer";
import HomePage from "@/components/home/HomePage";
import AboutPage from "@/components/about/AboutPage";
import CoursesPage from "@/components/courses/CoursesPage";
import BlogPage from "@/components/blog/BlogPage";
import CentersPage from "@/components/centers/CentersPage";
import ContactPage from "@/components/contact/ContactPage";
import type { PageName } from "@/lib/types";

export default function Page() {
  const [page, setPage] = useState<PageName>("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const initial = (document.documentElement.getAttribute("data-theme") as Theme | null) ?? "dark";
    setTheme(initial);
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
    setPage(p);
    setMobileOpen(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavContext.Provider value={{ page, navigate, scrolled, mobileOpen, setMobileOpen, theme, toggleTheme }}>
      <Navbar />
      <MobileMenu />
      <WhatsAppFloat />
      <HomePage />
      <AboutPage />
      <CoursesPage />
      <BlogPage />
      <CentersPage />
      <ContactPage />
      <Footer />
    </NavContext.Provider>
  );
}
