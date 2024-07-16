let slideIndex = 0;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
        slideIndex++;
      }
      setInterval(showSlides, 5000);

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }