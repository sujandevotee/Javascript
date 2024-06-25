// =====================Array Methods=====================

let car = [["BMW","Audi","Fortuner","Creta","Kia","Ferrari"],["Pearl"]];
let num = [1,2,20,24,19];
//length
console.log("length:-",car.length);

//ToString
console.log("tostring:-",car.toString());

//Array at
console.log("at:-",car.at(2));

//Array join
console.log("join:-",car.join(" || "));

//Array pop
console.log(car.pop());
console.log("pop:-",car);

//Array Push
console.log(car.push("Bentley"));
console.log("push:-",car);

// Array unshift
console.log(car.unshift("MG Hector"));
console.log("unshift:-",car);

// Array shift
console.log(car.shift());
console.log("shift:-",car);

// Array Splice
console.log(car.splice(2,0,"MG Hector"));
console.log("splice:-",car);

// Array slice
console.log(car.slice(0));
console.log("slice:-",car);

//Array Flat
console.log(car.flat());
console.log("flat:-",car);

// Array Sort
console.log("sort:-",car[0].sort());

//Reverse
console.log("reverse:-",car[0].reverse());

//reverse String
console.log("reverse:-",car[1].split("").sort().join());

// map
console.log("map:-",num.map(Math.pow));

// filter
console.log("filter:-",num.filter(checkvote));
function checkvote(num){
    return num >= 18;
}

// reduce
let sujan = [1,2,3,4]
let result = sujan.reduce((first,second )=>{
    return first + second;
})
console.log("reduce:-",result);

// reduceRight
let a = sujan.reduceRight((first,second)=>{
    return first + second;
})
console.log("reduceright:-",a);

//fill
console.log("fill:-",car.fill("Ferrari"));

// indexof
let fruit = ["Apple","Banana","Orange","Manogo"];

console.log("indexOf:-",fruit.indexOf("Orange"));

// Copywithin
console.log("Copywithin:-",fruit.copyWithin(1,2));

//includes
console.log("includes:-",fruit.includes("Apple",0));

// findindex
let age = [2,5,23];

console.log("findindex:-",age.findIndex(check));
function check(age){
    return age > 18;
}

//lastindexof
console.log("Lastindexof:-",age.lastIndexOf(5));

// flatmap
console.log("flatmap:-",age.flatMap((a) => a * 4 ));

// some
console.log("Some:-",age.some(check));
function check(age){
    return age > 24;
}

// every
console.log("Every:-",age.every(eve));
function eve(age){
    return age < 24;
}

// form
let f = "sujan"
let k = Array.from(f);
console.log("Form:-",k);

//isArray
let d = 1;
let e = Array.isArray(d);
console.log("isArray:-",e);

console.log("=====================String Methods=====================");
// =====================String Methods=====================
// CharAt
let text = "Sujan"
console.log("ChartAt:-",text.charAt(2));

//concat
let str1 = "Sujan ";
let str2 = "Butani";
console.log("Concat:-",str1.concat(str2));

//indexof
let ind = "How are you";
console.log("indexof:-",ind.indexOf("are"));

//lastindexof
let las = "JavaScript Documentation";
console.log("lastindexof:-",las.lastIndexOf("fine"));

//replace
let rep = "Node.js Designer";
console.log("replace:-",rep.replace("Designer","Developer"));

//search
let sea = "Create a List of Words Related to Your Industry"
console.log("search:-",sea.search("of"));

// slice
let sli = "Web developer";
console.log("Slice:-",sli.slice(2,5));

//substring(start,end)
let x = "how are you!"
console.log("substring:-",x.substring(4,7));

//trim
let tr = "   how are you !   ";
console.log("trim:-",tr.trim());

//touppercase
let up = "sujan";
console.log("ToUppercase:-",up.toUpperCase());

//tolowercase
let lo = "SUJAN";
console.log("tolowercase:-",lo.toLowerCase());

//valueof
let jay = new String('xyz');
jay.valueOf();
console.log(jay);

//tostring
let number = 10;
console.log("tostring:-",number.toString());

//includes
let inc = "my name is";
console.log("includes:-",inc.includes("is"));

//charcodeAt
let cha = "Sujan";
console.log("CharCodeAt:-",cha.charCodeAt(0));

//match
let mat = "lname fname uname";
console.log("match:-",mat.match(/name/g));

//split
let sp = "1,2,3,4,5,6,7";
console.log("Split:-",sp.split(","));