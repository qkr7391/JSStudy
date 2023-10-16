//
const dog = {
	name: "dog",
	play: function () {
		console.log("play dog");
	},
};
dog.play();
const obj = new dog.play();
console.log(obj);

//method
const cat = {
	name: "cat",
	play() {
		//function method- method of object
		console.log("play cat");
	},
};

cat.play();
// const obj2 = new cat.play(); // error - can not us as a constructor function

/**
 * feature of arrow function
 * - simple
 * - can not use as a contructor function (hevay prototype ❌)
 * - function itself arguments
 * - The binding to this is statically determined.
            - The function is statically bound to this in the closest parent scope.
 */

function sum(a, b) {
	console.log(arguments);
}
sum(1, 2);

const add = (a, b) => {
	console.log(arguments); //print arguments outside of arrow function
};
add(1, 2);

const printArrow = () => {
	console.log(this); //global this, module
};
printArrow();

cat.printArrow = printArrow;
cat.printArrow();
