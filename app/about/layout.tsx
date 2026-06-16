import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FINVISION | Financial Markets Education Institute in Raipur",
  description:
    "Learn about FINVISION — a Forex and financial markets education institute based in Raipur. Meet our founders, team, and explore our teaching philosophy.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
