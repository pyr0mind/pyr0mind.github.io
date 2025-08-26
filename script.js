function openWhatsApp() {
  const phoneNumber = "919274050949"; // WhatsApp number with country code (no +)
  const message = "Hi, I'm interested in your AI services!";
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function openCalendly() {
  Calendly.initPopupWidget({ url: 'https://calendly.com/itachia755/30min' }); // Your actual Calendly link
  return false;
}

function sendToWhatsApp(event) {
  event.preventDefault(); // Prevent form submission

  const phoneNumber = "919274050949";

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (!nameInput || !emailInput || !messageInput) {
    alert("Form fields missing. Please check the HTML IDs.");
    return;
  }

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all the fields.");
    return;
  }

  const finalMessage = `Hello, my name is ${name}. My email is ${email}. ${message}`;
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`, "_blank");
}
