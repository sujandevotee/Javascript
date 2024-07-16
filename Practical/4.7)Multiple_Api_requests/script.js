let product = document.getElementById("products");
let carts = document.getElementById("carts");
let users = document.getElementById("users");
let userdata, productdata, cartdata;

async function getUser() {
  const url = "https://dummyjson.com/users";
  const response = await fetch(url);
  const Data = await response.json();
  userdata = Data.users.slice(10, 15); 
  console.log(userdata,"user");
  displayUserData();
}

async function getProduct() {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  const Data = await response.json();
  productdata = Data.products.slice(10,15); 
  console.log(productdata,"product");
  displayProducts();
}

async function getCart() {
  const url = "https://dummyjson.com/carts";
  const response = await fetch(url);
  const Data = await response.json();
  cartdata = Data.carts.slice(2, 3); 
  console.log(cartdata,"cart");
  displayCarts();
}

getUser();
getProduct();
getCart();

function displayProducts() {
  let productHTML = "";
  productdata.forEach((data) => {
    productHTML += `
      <div class="Product-card">
        <img src=${data.thumbnail}>
        <h3>Title : ${data.title}</h3>
        <h4>Category : ${data.category}</h4>
        <p>Description : ${data.description}</p>
        <h3>Price : $${data.price}</h3>
      </div>`;
  });
  document.getElementById("products").innerHTML = productHTML;
}

function displayCarts() {
  let cartsHTML = "";
  cartdata.forEach((cart) => {
    cart.products.forEach((pro) => {
      cartsHTML += `
        <div class="cart-card">
          <img src=${pro.thumbnail}>
          <h3>Title : ${pro.title}</h3>
          <h4> Price : ${pro.price}</h4>
        </div>`;
    });
  });
  document.getElementById("carts").innerHTML = cartsHTML;
}

function displayUserData() {
  let usersHTML = "";
  userdata.forEach((data) => {
    usersHTML += `
      <div class="user-card">
        <img src=${data.image}>
        <h3>FirstName : ${data.firstName}</h3>
        <h3>LastName : ${data.lastName}</h3>
        <h3>Email : ${data.email}</h3>
      </div>`;
  });
  document.getElementById("users").innerHTML = usersHTML;
}
