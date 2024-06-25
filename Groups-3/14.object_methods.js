// Object
let student={
    name:"sujan",
    age:20,
    education:"BSC.IT",
    Hobby:"Cricket"
};

//Keys
let key = Object.keys(student);
console.log("Keys:-",key);

//values
let values = Object.values(student);
console.log("values:-",values);

//entries
let entries = Object.entries(student);
console.log("entries:-",entries);

//assign
let a = {a:10,b:15};
let b = {b:20,c:30};
let result = Object.assign(a,b);
console.log("Assign:-",result);

//freeze
Object.freeze(student);
student.name = "sujan";
console.log(student.name);