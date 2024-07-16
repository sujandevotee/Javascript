let input = document.getElementById("input");
let btn = document.getElementById("check");
let print = document.getElementById("print");
let attempt = 0;
let number;
math();

function math() {
  number = Math.floor(Math.random() * 100) + 1;
}

function numbercheck() {
  if (isNaN(input.value) || input.value < 1 || input.value > 100) {
    alert("Please enter a valid number between 1 and 100.");
    input.value = "";
    math();
    attempt = 0;
    return;
  }
  attempt++;
  if (number > input.value) {
    print.innerText = "Number is greater than " + input.value;
  } else if (number < input.value) {
    print.innerText = "Number is less than " + input.value;
  } else {
    print.innerText =
      "Congratulations! You guessed the number in " + attempt + " attempts.";
    attempt = 0;
  }
}

btn.addEventListener("click", numbercheck);
