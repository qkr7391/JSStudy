/**
 * gloval context this
 * - browser : Window
 * - node : module
 */
// this --> module
console.log(this); //{}

const x = 0;
module.exports.x = x;
console.log(this); // {x : 0}

console.log(globalThis); //global object
// globalThis.setTimeout(); === setTimeout();

console.clear();

/**
 * this inside function
 *  'use strict' --> undefined
 *  generally --> global object
 */
function fun() {
	console.log(this);
}
fun(); // global object

/**
 * this in the constructor function or class
 * --> instance (will be made)
 */

function Cat(name) {
	this.name = name;
	this.printName = function () {
		console.log(this.name);
	};
}
const cat1 = new Cat("Leo");
const cat2 = new Cat("Dubu");
cat1.printName();
cat2.printName();
