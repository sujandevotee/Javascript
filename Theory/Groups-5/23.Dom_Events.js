function color() {
  let e = document.querySelector("body");
  e.style.color = "white";
  e.style.backgroundColor = "red";
}

let s = document.getElementById("over");
s.addEventListener("mouseover",over);
s.addEventListener("mouseout",out);
s.style.fontSize = "30px";

function over(){
    document.getElementById("over").innerHTML = "Mouseover Done"
}
function out(){
    document.getElementById("over").innerHTML = "Mouseout Done" 
}

let btn = document.querySelector("#btn");
btn.ondblclick = () => {
  console.log("Double Click Event");
}