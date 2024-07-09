let cart = [];

// Función para añadir productos al carrito
function addToCart(name, price, imgSrc, quantity = 1) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ name, price, imgSrc, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartModal();

    // Abre el modal del carrito automáticamente
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();

    // Actualiza el contador del carrito
    updateCartCount();
}

// Función para actualizar el modal del carrito
function updateCartModal() {
    const cartItemsContainer = document.getElementById('cart-items-modal');
    const totalContainer = document.getElementById('cart-total-modal');
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItemsContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <img src="${item.imgSrc}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
                ${item.name} (x${item.quantity})
                <span>S/ ${itemTotal.toFixed(2)}</span>
            </li>
        `;
    });

    totalContainer.textContent = `Total: S/ ${total.toFixed(2)}`;
}

// Evento para los botones de añadir al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const imgSrc = button.getAttribute('data-img');
        addToCart(name, price, imgSrc);
    });
});

// Evento para actualizar el modal del carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCartModal();
    updateCartCount();
    if (window.location.pathname.includes('checkout.html')) {
        updateCheckoutPage();
    }
});

// Función para actualizar la página de checkout
function updateCheckoutPage() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('cart-total');
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItemsContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <img src="${item.imgSrc}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
                ${item.name}
                <span>S/ ${itemTotal.toFixed(2)}</span>
                <div class="input-group">
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity('${item.name}', -1)">-</button>
                    <input type="text" class="form-control text-center" value="${item.quantity}" disabled style="width: 40px;">
                    <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity('${item.name}', 1)">+</button>
                </div>
            </li>
        `;
    });

    totalContainer.textContent = `Total: S/ ${total.toFixed(2)}`;
}

// Función para actualizar la cantidad de productos en el carrito
function updateQuantity(name, change) {
    const product = cart.find(item => item.name === name);
    if (product) {
        product.quantity += change;
        if (product.quantity <= 0) {
            cart = cart.filter(item => item.name !== name);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        if (window.location.pathname.includes('checkout.html')) {
            updateCheckoutPage();
        } else {
            updateCartModal();
        }
    }
}

// Evento para el formulario de pago en la página de checkout
document.getElementById('payment-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Pago realizado con éxito');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCheckoutPage();
    updateCartModal();
});

// Función para actualizar el contador del carrito
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');

    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.display = cartCount > 0 ? 'inline-block' : 'none';
    }
}
