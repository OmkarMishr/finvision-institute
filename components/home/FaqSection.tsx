import FaqList from "@/components/ui/FaqList";

export default function FaqSection() {
  return (
    <section className="faq-sec">
      <div className="wrap">
        <div className="tag">FAQ</div>
        <h2>Common<br /><span className="red">Questions</span></h2>
        <div className="faq-container" id="faq-home">
          <FaqList />
        </div>
      </div>
    </section>
  );
}
