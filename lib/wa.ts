export function openWA() {
  const msg = encodeURIComponent(
    "Hi Finvision! I want to learn more about your trading programs. Can you help me choose the right one?"
  );
  window.open("https://wa.me/918889199977?text=" + msg, "_blank");
}

export interface InquiryData {
  name: string;
  phone: string;
  email: string;
  city: string;
  program: string;
  callTime: string;
  message: string;
}

export function openWAWithInquiry(data: InquiryData) {
  const lines = [
    " *New Inquiry – Finvision Institute*",
    "",
    ` Name: ${data.name}`,
    ` Phone: ${data.phone}`,
    data.email   ? ` Email: ${data.email}`            : null,
    data.city    ? ` City: ${data.city}`              : null,
    ` Interested In: ${data.program}`,
    ` Best Time to Call: ${data.callTime}`,
    data.message ? ` Message: ${data.message}`        : null,
  ]
    .filter(Boolean)
    .join("\n");

  window.open(
    "https://wa.me/918889199977?text=" + encodeURIComponent(lines),
    "_blank"
  );
}
