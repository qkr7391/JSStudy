//callback function
const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

//action === function reference / callback function
function calculator(a, b, action) {
	let result = action(a, b);
	console.log(result);
	return result;
}

calculator(1, 2, add);
calculator(3, 4, multiply);
