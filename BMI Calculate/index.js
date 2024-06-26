const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please valid Weight ${weight}`;
  } else {
    const bmi = height / ((height * height) / 10000);
    // result.innerHTML = ` BMI Value :- ${bmi}`;
    if (bmi < 18.6) {
        document.getElementById("under").innerHTML = `Under Weight:- ${bmi}`
    } else if (bmi < 24.9) {
      document.getElementById("range").innerHTML = `Normal Range:- ${bmi}`
    } else {
      document.getElementById("over").innerHTML = `Overweight:- ${bmi}`
    }
  }
});
