document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('book-container');
    const logoutBtn = document.getElementById("logout-btn");

    data.forEach(book => {
      const bookBox = document.createElement('div');
      bookBox.classList.add('book-box');
  
      bookBox.addEventListener('click', function() {
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
  
      //  price
      const price = document.createElement('p');
      price.textContent = `Price: $${book.price}`;
      details.appendChild(price);
  
      bookBox.appendChild(details);
  
      bookContainer.appendChild(bookBox);

      
    });
    logoutBtn.addEventListener("click", function (event) {
          event.preventDefault();
      
          localStorage.removeItem("login");
      
          window.location.href = "../form/Login/login.html";
        });
  });
  