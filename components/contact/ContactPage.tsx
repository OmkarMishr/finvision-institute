import { useNav } from "@/components/context/NavContext";
import ContactBanner from "./ContactBanner";
import ContactSection from "./ContactSection";

export default function ContactPage() {
  const { page } = useNav();
  return (
    <div className={`page${page === "contact" ? " active" : ""}`} id="page-contact">
      <ContactBanner />
      <ContactSection />
    </div>
  );
}
