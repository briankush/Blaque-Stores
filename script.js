// Show/hide back to top button
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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
    const phone = document.getElementById('phone').value;
    const statusDiv = document.getElementById('paymentStatus');
    
    if (!/^07\d{8}$/.test(phone)) {
        statusDiv.innerHTML = '<p style="color: red">Invalid phone number format</p>';
        return;
    }

    // Simulated payment processing
    statusDiv.innerHTML = `
        <p style="color: green">
            Initiating M-Pesa payment to ${phone} for KSH ${selectedProduct.price}...
            <br>(This is a simulation)
        </p>
    `;

    // Reset after 3 seconds
    setTimeout(() => {
        document.getElementById('purchaseModal').style.display = 'none';
        statusDiv.innerHTML = '';
        document.getElementById('paymentForm').reset();
    }, 3000);
}

// Modal close functionality
document.querySelector('.close').onclick = function() {
    document.getElementById('purchaseModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('purchaseModal')) {
        document.getElementById('purchaseModal').style.display = 'none';
    }
}
function closeModal() {
    document.getElementById('purchaseModal').style.display = 'none';
    document.getElementById('paymentForm').reset();
    document.getElementById('paymentStatus').innerHTML = '';
}

// Close modal when clicking X
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.close').addEventListener('click', closeModal);
});

// Close when clicking outside modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('purchaseModal');
    if (event.target === modal) {
        closeModal();
    }
});