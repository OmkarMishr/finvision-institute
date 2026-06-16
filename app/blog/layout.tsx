import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Blog | FINVISION — Market Education & Insights",
  description:
    "Read FINVISION's latest articles on Forex trading, market analysis, trading psychology, and risk management. Educational content for traders at every level.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
