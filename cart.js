document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    function displayCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsElement.appendChild(li);
            total += parseFloat(item.price);
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    // Display cart items on page load
    displayCart();
});
