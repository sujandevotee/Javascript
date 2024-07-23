document.addEventListener('DOMContentLoaded', function () {
  const cartItemsContainer = document.getElementById('cart-items');
  const checkoutButton = document.getElementById('checkout-btn');
  const subtotalElement = document.querySelector('.subtotal');

  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;
    
    cartItems.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td><img src="${item.image}" style="max-width: 100px;"></td>
          <td>${item.title}</td>
          <td>$${item.price}</td>
          <td>
            <button class="quantity-btn decrease" data-index="${index}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn increase" data-index="${index}">+</button>
          </td>
          <td>$${item.price * item.quantity}</td>
          <td><button class="remove-btn" data-index="${index}">Remove</button></td>
        `;
      cartItemsContainer.appendChild(row);

      subtotal += item.price * item.quantity;
    });

    subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  }

  renderCart();

  // Quantity Update
  cartItemsContainer.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('quantity-btn')) {
      const action = target.classList.contains('increase') ? 'increase' : 'decrease';
      const index = parseInt(target.getAttribute('data-index'));

      if (action === 'decrease') {
        cartItems[index].quantity = Math.max(1, cartItems[index].quantity - 1);
      } else if (action === 'increase') {
        cartItems[index].quantity++;
      }

      updateCart(cartItems);
    }
  });

  // Remove from cart
  cartItemsContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-btn')) {
      const index = parseInt(event.target.getAttribute('data-index'));
      cartItems.splice(index, 1);
      updateCart(cartItems);
    }
  });

  // Checkout button click
  checkoutButton.addEventListener('click', function () {
    localStorage.removeItem('cart');
    cartItems = [];
    renderCart();
  });
});
