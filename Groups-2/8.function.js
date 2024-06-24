//function
// ---declaration function 
function dec(){
    console.log("Declartion Function");
}
dec();

//expression function
const express = function(){
    console.log("Expression Function");
}
express();

// Arrow function 
const arrow = ()=> {
    console.log("Arrow function");
}
arrow();

// Prameter & Arguments function 
function para(x,y){
    return x+y;
}
let sum = para(4,5);
console.log(sum);

//Return function
function multi(a,b){
    return a-b;
}
let add = multi(6,7);
console.log(add);
