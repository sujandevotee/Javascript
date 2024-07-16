document.addEventListener("DOMContentLoaded", function () {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const addBtn = document.getElementById("addBtn");
  const subtractBtn = document.getElementById("subtractBtn");
  const multiplyBtn = document.getElementById("multiplyBtn");
  const divideBtn = document.getElementById("divideBtn");
  const resultDisplay = document.getElementById("result");

  addBtn.addEventListener("click", function () {
    calculateResult("+");
  });

  subtractBtn.addEventListener("click", function () {
    calculateResult("-");
  });

  multiplyBtn.addEventListener("click", function () {
    calculateResult("*");
  });

  divideBtn.addEventListener("click", function () {
    calculateResult("/");
  });

  function calculateResult(operator) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
      resultDisplay.textContent = "Please enter valid numbers";
      return;
    }

    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          resultDisplay.textContent = "Cannot divide by zero";
          return;
        }
        result = num1 / num2;
        break;
      default:
        result = "Error";
    }

    resultDisplay.textContent = `Result: ${result}`;
  }
});
