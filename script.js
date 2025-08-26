function openWhatsApp() {
  const phoneNumber = "919274050949"; // WhatsApp number with country code (no +)
  const message = "Hi, I'm interested in your AI services!";
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function openCalendly() {
  Calendly.initPopupWidget({ url: 'https://calendly.com/itachia755/30min' }); // Your actual Calendly link
  return false;
}

