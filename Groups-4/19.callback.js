// task-1
function my(name){
    console.log(name);
}
function myf(){
    my("hi");
}
function myb(){
    my("hello");
}
myf();
myb();

// task-2
function fun1(name,call){
    console.log("name:-" + name);
    call()
}
function fun2(){
    console.log("butani");
}
fun1("sujan",fun2);

//task-3
function age1(age,call1){
    console.log("sujan" + age);
    call1()
}
function age2(){
    console.log("--");
}
age1(20,age2);