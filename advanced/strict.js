"use strict"; //strict mode

//can not do thin in this mode
// var x = 1;
// delete x;

//error - b is not defined
//If variavle is not declared, can not use it
function add(x) {
	var a = 2;
	b = a + x;
	console.log(this); // undefined. can not use
}
add(1);

//Error - num is not defined
const array = [1, 2, 3];
// for (num of array) { // -Error - num is not defined
for (const num of array) {
	console.log(num);
}
