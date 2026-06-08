// Smooth scroll for nav links & buttons
document.querySelectorAll('.nav-links a, .btn[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#') {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Copy functionality for contact info
const copyButtons = document.querySelectorAll('.copy-btn');
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 2600);
}
copyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-copy');
    const textElem = document.getElementById(targetId);
    if (textElem) {
      const text = textElem.innerText;
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied: ${text}`);
      }).catch(() => alert("Manual copy: " + text));
    }
  });
});

// contact form simulation
const form = document.getElementById('contactForm');
const feedbackDiv = document.getElementById('formFeedback');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    if (!name || !email) {
      feedbackDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please fill in name and email.';
      feedbackDiv.style.color = '#ffbcbc';
      setTimeout(() => { feedbackDiv.innerHTML = ''; }, 3000);
      return;
    }
    feedbackDiv.innerHTML = '<i class="fas fa-check-circle"></i> ✨ Message delivered! Kremier will reply within 24h.';
    feedbackDiv.style.color = '#bbf0bb';
    form.reset();
    setTimeout(() => { feedbackDiv.innerHTML = ''; }, 4500);
  });
}

console.log("%c🔥 Kremier Rosina Portfolio — Separated files ready", "color: #c084fc; font-size: 14px;");