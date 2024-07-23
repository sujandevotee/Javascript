document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("submit-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    //   validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Create object form data
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    alert("Form submitted successfully!");
  });
});
