//example w
function add(a, b) {
	// const result = a + b;
	// return result;

	console.log("function");
	return a + b;
}

const result = add(2, 3);
console.log(result);

// example 2 >> Iterative operations
// let lastName = "Park";
// let firstName = "Leo";
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);

// let lastName2 = "You";
// let firstName2 = "Bella";
// let fullName2 = `${lastName2} ${firstName2}`;
// console.log(fullName2);

function fullName(firstName, lastName) {
	return `${lastName} ${firstName}`;
}

let lastName = "Park";
let firstName = "Leo";
console.log(fullName(firstName, lastName));

let lastName2 = "You";
let firstName2 = "Bella";
console.log(fullName(firstName2, lastName2));
