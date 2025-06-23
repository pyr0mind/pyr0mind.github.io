
    // Email form submission handler
    document.querySelector('.waitlist form').addEventListener('submit', function (e) {
      e.preventDefault();
      const email = e.target.querySelector('input').value;
      alert(`🎉 Thank you, ${email}! 🚀 We’re excited to launch on 20th October. Stay tuned! ✨`);
      e.target.reset();
    })