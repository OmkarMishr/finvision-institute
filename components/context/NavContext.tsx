"use client";

import { createContext, useContext } from "react";
import type { PageName } from "@/lib/types";

export type Theme = "dark" | "light";

type NavCtx = {
  page: PageName;
  navigate: (p: PageName) => void;
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  theme: Theme;
  toggleTheme: () => void;
};

export const NavContext = createContext<NavCtx | null>(null);

export function useNav(): NavCtx {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used inside NavContext.Provider");
  return ctx;
}
