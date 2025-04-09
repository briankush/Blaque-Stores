// Show/hide back to top button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Purchase functionality
let selectedProduct = null;
function showPurchaseModal(productName, price) {
  selectedProduct = { productName, price };
  document.getElementById('productDetails').textContent =
    `Confirm purchase of: ${productName} at KSH ${price}`;
  document.getElementById('purchaseModal').style.display = 'block';
}

function processPayment() {
  const phone = document.getElementById('phone').value.trim();
  const statusDiv = document.getElementById('paymentStatus');

  if (!/^07\d{8}$/.test(phone)) {
    statusDiv.innerHTML = '<p style="color: red">Invalid phone number format</p>';
    return;
  }

  // Simulated payment processing
  statusDiv.innerHTML = `
    <p style="color: green">
      Initiating M-Pesa payment from ${phone} for KSH ${selectedProduct.price}...
    </p>
  `;

  // Auto‑close after 3 seconds
  setTimeout(closeModal, 3000);
}

// Centralized close/reset function
function closeModal() {
  const modal = document.getElementById('purchaseModal');
  const statusDiv = document.getElementById('paymentStatus');
  const form = document.getElementById('paymentForm');

  modal.style.display = 'none';
  statusDiv.innerHTML = '';
  if (form) form.reset();
}

// Wire up buttons once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // back-to-top click
  if (backToTop) {
    backToTop.addEventListener('click', scrollToTop);
  }

  // “×” button
  const closeBtn = document.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // click outside modal
  const modal = document.getElementById('purchaseModal');
  if (modal) {
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // ensure modal starts hidden
  closeModal();
});

// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  
  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove('active');
  }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('active');
  });
});
