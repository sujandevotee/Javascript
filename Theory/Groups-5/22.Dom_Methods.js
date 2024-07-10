// click Methods
function changeText(){
   document.getElementById("intro").innerHTML = "Dom Methods!";
   let a = document.querySelector("body");
    a.style.backgroundColor = "orange";
}

// concat
let add = document.querySelector("h1");
add.innerHTML = add.innerHTML + " (Introduction)";
console.dir(add.innerHTML);