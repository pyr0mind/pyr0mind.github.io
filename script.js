function openWhatsApp() {
  const phoneNumber = "919274050949"; // Replace with your WhatsApp number (with country code, no +)
  const message = "Hi, I'm interested in your AI services!";
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function sendToWhatsApp(event) {
  event.preventDefault();

  const phoneNumber = "919274050949"; // Replace with your WhatsApp number
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const finalMessage = `Hello, my name is ${name}. My email is ${email}. ${message}`;

  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`, "_blank");
}