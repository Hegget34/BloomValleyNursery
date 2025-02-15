console.log('Script connected');

// Newsletter subscription
document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email');
    if (!email.value) {
        alert('Please fill out this field.');
        return;
    }
    alert('Thank you for subscribing!');
    email.value = '';
});

document.querySelector('.newsletter button').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
});

// Shopping cart functionality
let cartItems = [];

// Add to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const itemName = this.closest('.product-card').querySelector('h3').textContent;
        cartItems.push(itemName);
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Item added to cart!');
    });
});

// View cart
document.getElementById('view-cart')?.addEventListener('click', () => {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        updateCartDisplay();
        modal.style.display = 'block';
    }
});

// Clear cart
document.getElementById('clear-cart')?.addEventListener('click', () => {
    if (!cartItems || cartItems.length === 0) {
        alert('No items to clear!');
    } else {
        cartItems = [];
        sessionStorage.removeItem('cartItems');
        alert('Cart cleared!');
        updateCartDisplay();
    }
});

// Process order
document.getElementById('process-order')?.addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert('Cart is empty!');
    } else {
        alert('Thank you for your order!');
        cartItems = [];
        sessionStorage.removeItem('cartItems');
        updateCartDisplay();
    }
});

// Contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const feedback = contactForm.querySelector('#message').value;
        const phone = contactForm.querySelector('#phone').value;

        const formData = {
            name: name,
            email: email,
            phone: phone,
            feedback: feedback,
            customOrder: contactForm.querySelector('#custom-order').checked
        };

        // Store in localStorage
        localStorage.setItem(name, JSON.stringify(formData));
    });
}