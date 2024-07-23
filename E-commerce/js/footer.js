const footer = () => {
    let footer = document.querySelector('.import');

    footer.innerHTML = `
        <footer>
      <div class="footer">
        <div class="footer-container">
          <div class="left"><i class="fab fa-slack"></i>knowledge world</div>
          <div class="right">
            <div class="social-icons">
              <a href="javascript:void(0);"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a href="javascript:void(0);"><i class="fab fa-twitter"></i></a>
              <a href="javascript:void(0);"
                ><i class="fab fa-linkedin-in"></i
              ></a>
              <a href="javascript:void(0);"><i class="fab fa-instagram"></i></a>
              <a href=""><i class="fa-solid fa-earth-americas"></i>English</a>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text"
              >Copyright © 2024 <a href="#">BBC</a>The BBC is not responsible
              for the content of external sites. Read about our approach to
              external linking.</span
            >
            <span class="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
    `
}
footer();