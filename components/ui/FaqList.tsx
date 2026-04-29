"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      {FAQS.map((f, i) => {
        const open = openIndex === i;
        return (
          <div key={i} className={`faq-item${open ? " open" : ""}`}>
            <div className="faq-q" onClick={() => toggle(i)}>
              {f.q}
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-a" style={{ maxHeight: open ? "500px" : "0" }}>
              <div className="faq-a-inner">{f.a}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
