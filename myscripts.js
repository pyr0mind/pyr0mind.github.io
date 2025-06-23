
// <!-- Cookie consent -->

window.addEventListener('DOMContentLoaded', () => {
    const consent = document.createElement('div');
    consent.style.position = 'fixed';
    consent.style.bottom = '0';
    consent.style.width = '100%';
    consent.style.background = '#1e293b';
    consent.style.color = '#fff';
    consent.style.padding = '1rem';
    consent.style.textAlign = 'center';
    consent.style.fontSize = '0.875rem';
    consent.innerHTML = `We use cookies for analytics. <button style="margin-left: 1rem; background: #3b82f6; color: #fff; padding: 0.5rem 1rem; border: none; border-radius: 5px; cursor: pointer;">Accept</button>`;
    document.body.appendChild(consent);
    consent.querySelector('button').onclick = () => consent.remove();
  });

// Email form submission handler with Formspree + toast
const form = document.querySelector('.waitlist form');
const toast = document.createElement('div');
toast.style.position = 'fixed';
toast.style.bottom = '20px';
toast.style.right = '20px';
toast.style.padding = '1rem 1.5rem';
toast.style.background = '#10b981';
toast.style.color = '#fff';
toast.style.borderRadius = '0.5rem';
toast.style.fontWeight = '600';
toast.style.boxShadow = '0 4px 14px rgba(0,0,0,0.2)';
toast.style.display = 'none';
document.body.appendChild(toast);

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = e.target.querySelector('input').value;
  try {
    const res = await fetch('https://formspree.io/f/mwkgrdka', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (res.ok) {
      toast.textContent = `✅ Thank you, ${email}! You're on the list.`;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 4000);
      form.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (err) {
    alert('Error sending request.');
  }
});

