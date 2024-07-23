const nav = () => {
    let nav = document.querySelector('.nav');

    nav.innerHTML = `
        <div class="topbar">
      <div class="topbar-container">
        <div class="left">
          <small
            ><i class="fa fa-map-marker-alt text-primary me-2"></i>Find A
            Location</small
          >
          <small
            ><i class="fa-solid fa-envelope"></i>sujan.devotee@gmail.com</small
          >
        </div>
        <div class="right">
          <div class="social-icons">
            <a href="javascript:void(0);"><i class="fab fa-facebook-f"></i></a>
            <a href="javascript:void(0);"><i class="fab fa-twitter"></i></a>
            <a href="javascript:void(0);"><i class="fab fa-linkedin-in"></i></a>
            <a href="javascript:void(0);"><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fa-solid fa-earth-americas"></i>English</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar Start -->
    <nav class="navbar">
      <div class="navbar-container">
        <a class="navbar-brand" href="../Home/home.html">
          <i class="fab fa-slack"></i>
          <h2>knowledge world</h2>
        </a>
        <ul class="nav-list">
          <li><a href="../Home/home.html" class="active">Home</a></li>
          <li><a href="../Product/product.html">Product</a></li>
          <li><a href="../Contact/contact.html">Contact</a></li>
        </ul>
        <div class="right">
          <div class="social-icons">
            <div class="dropdown">
              <a href="#"><i class="fas fa-user"></i></a>
              <div class="dropdown-content" id="myDropdown">
                <a href="../form/reset/reset.html" id="reset-btn"
                  ><i class="fas fa-sync-alt"></i> Reset</a
                >
                <a href="#" id="logout-btn"><i class="fas fa-sign-out-alt"></i> Logout</a>
              </div>
            </div>
            <a href="../cart/cart.html"
              ><i class="fa-solid fa-cart-shopping"></i
            ></a>
            <a href="../form/login/login.html" class="">login</a>
            <a href="../form/Register/register.html" class="">register</a>
          </div>
        </div>
      </div>
    </nav>
    `
}
nav();
