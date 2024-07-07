document.addEventListener('DOMContentLoaded', () => {
    // Clear the cart on page load
    localStorage.removeItem('cart');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');

    function addToCart(name, price) {
        const item = { name, price };
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        cartCountElement.textContent = cart.length;
    }

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productElement = e.target.closest('.product');
            const name = productElement.querySelector('h3').textContent;
            const price = productElement.querySelector('.price').textContent.replace('$', '');
            addToCart(name, price);
        });
    });

    // Initial cart count update
    updateCartCount();
});
