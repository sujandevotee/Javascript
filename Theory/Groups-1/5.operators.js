let x=10;
let y=10;

// Arithmetic Operators
console.log("==========Arithmetic Operators===========");
console.log("Arithmetic Operators(+):-",x+y);
console.log("Arithmetic Operators(-):-",x-y);
console.log("Arithmetic Operators(*):-",x*y);
console.log("Arithmetic Operators(/):-",x/y);
console.log("Arithmetic Operators(%):-",x%y);
console.log("Arithmetic Operators(++):-",x++);
console.log("Arithmetic Operators(--):-",x--);
console.log("Arithmetic Operators(**):-",x**y);

// Assignment Operators 
console.log("==========Assignment Operators===========");
console.log("Assignment Operators(+=):-",x+=10);
console.log("Assignment Operators(-=):-",y-=5);
console.log("Assignment Operators(=):-",x=5);
console.log("Assignment Operators(*=):-",y*=5);
console.log("Assignment Operators(/=):-",y/=5);
console.log("Assignment Operators(%=):-",x%=5);
console.log("Assignment Operators(**=):-",x**=5);

// Comparison Operators
let a=10;
let b=12;
console.log('Comparison(==)',a==b);
console.log('Comparison(==)',a<b);
console.log('Comparison(==)',a>b);
console.log('Comparison(>=)',a>=b);
console.log('Comparison(<=)',a<=b);
console.log('Comparison(!=)',a!=b);
console.log('Comparison(!==)',a!==b);

// Logical operators
let m = 9;
let n = 8;
console.log('Logical Operators(&&)',m < 10 && n > 2 );
console.log('Logical Operators(!)',!(m>n));
console.log('Logical Operators(||)',m == 9 || n == 8 );

// Bitwise Operators
console.log('Bitwise Operators(&)',m & n);
console.log('Bitwise Operators(|)',m | n);
console.log('Bitwise Operators(^)',m ^ n);
console.log('Bitwise Operators(~)',~ n);
console.log('Bitwise Operators(<<)',m << n);
console.log('Bitwise Operators(>>)',m >> n);
console.log('Bitwise Operators(>>>)',m >>> n);

// Special Operators
let P = (10 > 9) ? true : false;
console.log(P);
let Q = (10 < 9) ? true : false;
console.log(Q);