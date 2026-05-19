"use client";

import { useState } from "react";
import { COURSE_PLANS } from "@/lib/data";
import { CoursePlan } from "@/lib/types";
import CourseEnrollModal from "./CourseEnrollModal";

export default function CoursesPricingCards() {
  const [selected, setSelected] = useState<CoursePlan | null>(null);

  return (
    <section className="cp-section">
      <div className="wrap">

        <div className="cp-header">
          <div className="cp-header-mono">OUR COURSES</div>
          <h2 className="cp-header-title">Choose Your Program</h2>
          <p className="cp-header-sub">
            Secure your seat in the next batch with a simple 2-step enrollment
          </p>
        </div>

        <div className="cp-grid">
          {COURSE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`cp-card${plan.featured ? " cp-featured" : ""}`}
            >
              <div className="cp-ribbon">
                <div className="cp-ribbon-text">{plan.discount}</div>
              </div>

              <div className="cp-body">
                <div className="cp-plan-tag">{plan.tag}</div>
                <div className="cp-name">{plan.name}</div>
                <div className="cp-dur">{plan.duration}</div>

                <div className="cp-price-block">
                  <div className="cp-original">
                    ₹{plan.originalPrice.toLocaleString("en-IN")}
                  </div>
                  <div
                    className={`cp-price${plan.price === 0 ? " cp-price--free" : ""}`}
                  >
                    {plan.price === 0
                      ? "FREE"
                      : `₹${plan.price.toLocaleString("en-IN")}`}
                  </div>
                </div>

                <ul className="cp-features">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="cp-feature">
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  className="cp-cta"
                  onClick={() => setSelected(plan)}
                >
                  {plan.price === 0 ? "Enroll for Free →" : "Enroll Now →"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cp-secure-note">
          SECURE ADMISSION FLOW &nbsp;·&nbsp; YOUR DATA IS SAFE WITH US
        </div>

      </div>

      {selected && (
        <CourseEnrollModal
          plan={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
