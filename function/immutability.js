// Changing the value of a given argument from inside a function to outside is not a good example
// If you need to change state, you should create and return a new stare
function display(num) {
	num = 5; //bad
	console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
	obj.name = "Bob"; // Bad
	console.log(obj);
}
const leo = { name: "Leo" };
displayObj(leo);
console.log(leo);

function changeName(obj) {
	//make a function that change obj
	return { ...obj, name: "Bob" };
	//make new object for changing
}
