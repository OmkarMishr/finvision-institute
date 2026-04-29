export function openWA() {
  const msg = encodeURIComponent(
    "Hi Finvision! I want to learn more about your trading programs. Can you help me choose the right one?"
  );
  window.open("https://wa.me/918889199977?text=" + msg, "_blank");
}
