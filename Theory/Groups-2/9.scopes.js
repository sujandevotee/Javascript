//Scope
// 1.Global Scope
let global = "This is global Scope";
function gl(){
    console.log(global);
}
gl();

//2.Local Scope
function log() {
    let local = "This is Local Scope";
    console.log(local);
}
log();

//3.Block Scope
function bl(){
    if(true){
        var block = "This is block Function";
    }
    console.log(block);
}
bl();

//4.function scope
function fun(){
    if(1){
        var funcscope = "This is Function Scope";
    }
    console.log(funcscope);
}
fun();