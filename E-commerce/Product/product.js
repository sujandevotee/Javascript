document.addEventListener('DOMContentLoaded', function () {
  const bookContainer = document.getElementById('book-container');
  const filterButtons = document.querySelectorAll('.filter-button');

  function renderBooks(category) {
    bookContainer.innerHTML = '';

    // Filter data to category
    const filteredBooks = category === 'All Product' ? data : data.filter(book => book.category === category);

    filteredBooks.forEach(book => {
      const bookBox = document.createElement('div');
      bookBox.classList.add('book-box');

      // click to open details page
      bookBox.addEventListener('click', function () {
        window.location.href = `../Product_detail/details.html?id=${book.id}`;
      });

      // image
      const image = document.createElement('img');
      image.classList.add('book-image');
      image.src = book.image;
      image.alt = book.title;
      bookBox.appendChild(image);

      // details
      const details = document.createElement('div');
      details.classList.add('details');

      // title
      const title = document.createElement('h3');
      title.textContent = book.title;
      details.appendChild(title);

      // author
      const author = document.createElement('p');
      author.textContent = `Author: ${book.Author}`;
      details.appendChild(author);

      // price
      const price = document.createElement('p');
      price.textContent = `Price: $${book.price}`;
      details.appendChild(price);

      bookBox.appendChild(details);

      bookContainer.appendChild(bookBox);
    });
  }

  // filter 
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const category = button.getAttribute('category');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      renderBooks(category);
    });
  });

  renderBooks('All Product');
});
