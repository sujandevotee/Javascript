setTimeout(function(){
    console.log("Settime");
});

console.log("log");

let a = new Promise(function(resolve,reject){
    let x = 20;

    if(x >= 18){
        resolve("There Are Voter Now");
    }
    else{
        reject("Not For Voter");
    }
});
a.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})
