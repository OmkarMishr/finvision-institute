import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact FINVISION | Enquire About Our Trading Courses",
  description:
    "Get in touch with FINVISION to learn more about our trading programs. Fill out our inquiry form and our team will reach out to guide you to the right course.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
