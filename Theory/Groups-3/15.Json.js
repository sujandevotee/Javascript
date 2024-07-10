let student={
    name:"sujan",
    age:20,
    education:"BSC.IT",
    Hobby:"Cricket"
};

//JSON.stringify
let jsonstring = JSON.stringify(student);
console.log("JSON.stringify",jsonstring);

//JSON.parse
let a = JSON.parse(jsonstring);
console.log("JSON.parse",a);