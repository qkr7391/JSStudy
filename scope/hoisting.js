print(); //Hello - available because of HOISTING

function print() {
	console.log("Hello");
}
print(); //Hello

// variable(let, const) and class can be hoisting when declared only
// initialze variable and class will not be hoisting
// console.log(hi); //crash - Cannot access 'hi' before initialization
let hi = "hi";
console.log(hi);

let func1 = function () {};

// const cat = new Cat(); //crash
class Cat {}
const cat = new Cat();

let x = 1;
{
	console.log(x); // 1
	// let x = 2; // crash error : Cannot access 'x' before initialization
}
