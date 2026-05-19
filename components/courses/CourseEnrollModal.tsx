"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CoursePlan } from "@/lib/types";

type Props = {
  plan: CoursePlan;
  onClose: () => void;
};

type Form = {
  name: string;
  fatherName: string;
  whatsapp: string;
  profession: string;
  address: string;
};

export default function CourseEnrollModal({ plan, onClose }: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<Form>({
    name: "",
    fatherName: "",
    whatsapp: "",
    profession: "",
    address: "",
  });

  const isFree = plan.price === 0;
  const priceLabel = isFree
    ? "FREE"
    : `₹${plan.price.toLocaleString("en-IN")}`;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const update =
    (field: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="enroll-overlay" onClick={onClose}>
      <button className="enroll-close" onClick={onClose} aria-label="Close">
        &#x2715;
      </button>
      <div className="enroll-modal" onClick={(e) => e.stopPropagation()}>

        {/* Step progress */}
        <div className="enroll-steps">
          <div className={`enroll-step${step >= 1 ? " active" : ""}`}>
            <div className="enroll-step-dot">{step > 1 ? "✓" : "1"}</div>
            <div className="enroll-step-label">Student Details</div>
          </div>
          <div className="enroll-step-line" />
          <div className={`enroll-step${step === 2 ? " active" : ""}`}>
            <div className="enroll-step-dot">2</div>
            <div className="enroll-step-label">
              {isFree ? "Confirmation" : "Payment"}
            </div>
          </div>
        </div>

        {/* Course banner */}
        <div className="enroll-course-banner">
          <div className="enroll-banner-plan">{plan.name}</div>
          <div className="enroll-banner-price">{priceLabel}</div>
        </div>

        {/* Step 1: Form */}
        {step === 1 && (
          <form className="enroll-form" onSubmit={handleSubmit}>
            <div className="enroll-form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Your full name"
                required
                value={form.name}
                onChange={update("name")}
              />
            </div>
            <div className="enroll-form-group">
              <label className="form-label">Father&apos;s Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Father's full name"
                required
                value={form.fatherName}
                onChange={update("fatherName")}
              />
            </div>
            <div className="enroll-form-group">
              <label className="form-label">WhatsApp Number</label>
              <div className="enroll-phone-wrap">
                <span className="enroll-phone-prefix">+91</span>
                <input
                  className="form-input enroll-phone-input"
                  type="tel"
                  placeholder="98765 43210"
                  required
                  pattern="[0-9]{10}"
                  value={form.whatsapp}
                  onChange={update("whatsapp")}
                />
              </div>
            </div>
            <div className="enroll-form-group">
              <label className="form-label">Profession</label>
              <select
                className="form-select"
                required
                value={form.profession}
                onChange={update("profession")}
              >
                <option value="">Select your profession</option>
                <option value="student">Student</option>
                <option value="employed">Working Professional</option>
                <option value="business">Business Owner</option>
                <option value="trader">Trader</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="enroll-form-group">
              <label className="form-label">City / Address</label>
              <input
                className="form-input"
                type="text"
                placeholder="City, State"
                required
                value={form.address}
                onChange={update("address")}
              />
            </div>
            <button type="submit" className="enroll-submit-btn">
              {isFree ? "Enroll Now →" : "Proceed to Payment →"}
            </button>
          </form>
        )}

        {/* Step 2: Success (Free) */}
        {step === 2 && isFree && (
          <div className="enroll-success">
            <div className="enroll-success-icon">✓</div>
            <div className="enroll-success-title">Enrollment Successful!</div>
            <p className="enroll-success-text">
              Welcome to Finvision, {form.name}! Our team will WhatsApp you on{" "}
              <strong>+91 {form.whatsapp}</strong> within a few hours to share
              batch timings and next steps.
            </p>
            <a
              className="btn btn-wapp"
              href="https://wa.me/918889199977"
              target="_blank"
              rel="noreferrer"
            >
              Message Us on WhatsApp
            </a>
          </div>
        )}

        {/* Step 2: Payment (Paid) */}
        {step === 2 && !isFree && (
          <div className="enroll-payment">
            <div className="enroll-payment-title">Complete Your Payment</div>
            <p className="enroll-payment-note">
              Scan the QR code below to pay{" "}
              <strong>{priceLabel}</strong> for{" "}
              <strong>{plan.name}</strong>
            </p>
            <div className="enroll-qr-wrap">
              <Image
                src="/payment-qr.png"
                alt="UPI QR Code"
                width={200}
                height={200}
                className="enroll-qr-img"
              />
            </div>
            <div className="enroll-upi-row">
              <span className="enroll-upi-label">UPI ID</span>
              <span className="enroll-upi-val">finvision@ybl</span>
            </div>
            <p className="enroll-payment-after">
              After payment, send your screenshot on WhatsApp to confirm
              enrollment.
            </p>
            <a
              className="btn btn-wapp enroll-wa-btn"
              href={`https://wa.me/918889199977?text=Hi%2C+I+have+paid+for+${encodeURIComponent(plan.name)}+course`}
              target="_blank"
              rel="noreferrer"
            >
              Send Payment Confirmation →
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
