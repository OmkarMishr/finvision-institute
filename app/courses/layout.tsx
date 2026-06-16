import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Courses | FINVISION — Learn Forex & Market Trading",
  description:
    "Explore FINVISION's structured trading programs — from a free Demo class to Advanced and Mentorship tracks. Learn Forex and financial markets with real practitioners.",
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
