document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));

    const book = data.find(item => item.id === bookId);

    if (book) {
        const bookDetailsContainer = document.getElementById('book-details-container');
        const bookDetails = document.createElement('div');
        bookDetails.classList.add('book-details');

        const bookImage = document.createElement('div');
        bookImage.classList.add('book-image');
        const image = document.createElement('img');
        image.src = book.image;
        image.alt = book.title;
        bookImage.appendChild(image);

        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        const title = document.createElement('h2');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.Author}`;

        const price = document.createElement('p');
        price.textContent = `Price: $ ${book.price}`;

        const description = document.createElement('p');
        description.textContent = `Description: ${book.description}`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.classList.add('add-to-cart-btn');
        addToCartBtn.textContent = 'ADD TO CART';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('fas', 'fa-shopping-cart');
        addToCartBtn.appendChild(cartIcon);

        addToCartBtn.addEventListener('click', function (event) {
            event.stopPropagation();

            const isLoggedIn = JSON.parse(localStorage.getItem('login'));

            if (isLoggedIn) {
                // Create cart item object
                const cartItem = {
                    id: book.id,
                    image: book.image,
                    title: book.title,
                    price: book.price,
                    quantity: 1
                };

                const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

                cartItems.push(cartItem);

                localStorage.setItem('cart', JSON.stringify(cartItems));

                window.location.href = '../cart/cart.html';
            } else {
                window.location.href = '../form/Register/register.html';
            }
        });

        bookInfo.appendChild(title);
        bookInfo.appendChild(author);
        bookInfo.appendChild(price);
        bookInfo.appendChild(description);
        bookInfo.appendChild(addToCartBtn);

        bookDetails.appendChild(bookImage);
        bookDetails.appendChild(bookInfo);

        bookDetailsContainer.appendChild(bookDetails);
    } else {
        const bookDetailsContainer = document.getElementById('book-details-container');
        bookDetailsContainer.textContent = 'Book not found';
    }
});
