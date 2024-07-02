// EventListener-use :- is the multiple event of one elements run 
let a = document
  .getElementById("mousemove")
  .addEventListener("mousemove", myfunction);

function myfunction() {
  document.getElementById("p").innerHTML =
    "MouseMove EventListeners";
}

let listener = document.querySelector("#listener");

listener.addEventListener("click",() => {
  console.log("btn-1");
});
listener.addEventListener("click",() => {
  console.log("btn-2");
});listener.addEventListener("click",() => {
  console.log("btn-3");
});

// light and dark mode theme
let mode = document.querySelector("#mode");
let curmode = "light";

mode.addEventListener("click",() => {
  if(curmode === "light"){
    curmode = "dark";
    document.querySelector("body").style.backgroundColor = "blue"
  }else{
    curmode = "light";
    document.querySelector("body").style.backgroundColor = "white"

  }
  console.log(curmode);
});