import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FINVISION",
  description:
    "Learn how FINVISION collects, uses, and protects your personal information when you visit our website or enroll in our educational programs.",
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
