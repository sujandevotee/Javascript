let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let container = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let namevalue = name.value.trim();
  let emailvalue = email.value.trim();
  let passwordvalue = password.value;
  let password2value = password2.value;

  // Validate name
  if (namevalue === "") {
    errorMessage(name, "Name Is Empty");
  } else if (namevalue.length < 3) {
    errorMessage(name, "Name should be at least 3 characters long");
  } else {
    successMessage(name);
  }

  // Validate email
  if (emailvalue === "") {
    errorMessage(email, "Email Is Empty");
  } else if (!validateEmail(emailvalue)) {
    errorMessage(email, "Email Is Invalid");
  } else {
    successMessage(email);
  }

  // Validate password
  if (passwordvalue === "") {
    errorMessage(password, "Password Is Empty");
  } else if (!validatePassword(passwordvalue)) {
    errorMessage(password, "Password is Not Valid");
  } else {
    successMessage(password);
  }

  // Validate confirm password
  if (password2value === "") {
    errorMessage(password2, "Confirm password is empty");
  } else if (password2value !== passwordvalue) {
    errorMessage(password2, "Passwords do not match");
  } else {
    successMessage(password2);
  }

  // Check all fields are successfully validation
  if (
    name.parentElement.classList.contains("success") &&
    email.parentElement.classList.contains("success") &&
    password.parentElement.classList.contains("success") &&
    password2.parentElement.classList.contains("success")
  ) {
    container.classList.add("complete");

    Swal.fire({
      title: "Success!",
      text: "Well Done, you Pressed a Button",
      icon: "success",
    }).then(() => {
      clearForm();
    });
  }
});

function errorMessage(value, message) {
  const formControl = value.parentElement;

  if (formControl.classList.contains("success")) {
    formControl.classList.remove("success");
    formControl.classList.add("error");
  } else {
    formControl.classList.add("error");
  }
  formControl.querySelector(".errorMessage").textContent = message;
}

function successMessage(value) {
  const formControl = value.parentElement;

  if (formControl.classList.contains("error")) {
    formControl.classList.remove("error");
    formControl.classList.add("success");
  } else {
    formControl.classList.add("success");
  }
}

//Email Validation
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Password Validation
function validatePassword(password) {
  var passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  return passwordRegex.test(password);
}

//Submit to data Clear
function clearForm() {
  name.value = "";
  email.value = "";
  password.value = "";
  password2.value = "";

  name.parentElement.classList.remove("success", "error");
  email.parentElement.classList.remove("success", "error");
  password.parentElement.classList.remove("success", "error");
  password2.parentElement.classList.remove("success", "error");

  container.classList.remove("complete");
}
