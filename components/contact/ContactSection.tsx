import FaqList from "@/components/ui/FaqList";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section>
      <div className="wrap">
        <div className="contact-layout">
          <ContactInfo />
          <ContactForm />
        </div>

        <div style={{ marginTop: 56 }}>
          <div className="tag">Quick Answers</div>
          <h3 style={{ marginBottom: 32 }}>Common Questions</h3>
          <div className="faq-container" id="faq-contact">
            <FaqList />
          </div>
        </div>
      </div>
    </section>
  );
}
