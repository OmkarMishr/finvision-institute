import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Centers | FINVISION — Trading Education Across India",
  description:
    "FINVISION operates from Raipur with plans to expand across India. Find the nearest FINVISION center for in-person trading education and mentorship.",
};

export default function CentersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
