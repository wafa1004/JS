console.log("Unary operator (one operand): ")
let x = 1;
x = -x;
console.log(x);
console.log("Binary operator (two operands): ");
let x1 = 4, y = 7;
console.log(x1*y);
console.log("String Binary +");
let s = "My"+ " String";
console.log(s);
let apples = "6";
let bananas = "8";
console.log("apples and bananas : "+apples+bananas);


console.log("If one operand is a string the other is converted to a string:");
console.log("5"+3);

console.log("Numeric conversion, unary + : ");
let num = 5;
console.log(+num);
console.log(+true);
console.log(+"");
console.log("the sum of apples and bananas: ");
console.log(+apples + +bananas);

console.log("Assignment: ");
 let assign = 6+6/2;
 console.log(assign);

 let a = 4, b = 5;
 let assign1 = 3-(a=b+2);
console.log(a);
console.log(assign1);

console.log("Exponentiation ** : ");
// console.log(2 ** 2); --> 4
// console.log(2 ** 3); --> 8
// console.log(2 ** 4); --> 16

console.log("Increment/decrement : only applied to variables. ");
let counter = 6;
counter++;
console.log(counter);

console.log("The comma operator : it is used to evaluate several expressions but only the last one is returned ");
let eve = (3+4, 6-3);
console.log(eve);




        