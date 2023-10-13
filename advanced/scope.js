// code block : { },  if() { }, for() { }, function(){ } ...
// You can't reference variables inside a block from outside the block
{
	const a = "a";
	console.log(a);
}
const b = "b";
// console.log(a); // "a is not a defined" >> crash

//You can't reference variables inside a function from outside the function
function print() {
	const msg = "Hello World";
	console.log(msg);
}
// console.log(msg); // "nsg is not defined" >> crash

//You can't reference a function's parameters from outside the function
function sum(a, b) {
	console.log(a, b);
}
// console.log(a, b); //a is not defined
