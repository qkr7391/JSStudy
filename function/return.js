function add(a, b) {
	return a + b;
}

const result = add(1, 2);
console.log(result);

// If no return is explicitly given, undefined is automatically returned.

//There is no need to set return because the function only executes without returning a value.
function print(text) {
	console.log(text);
}
print("text");

function print(num) {
	if (num < 0) {
		return;
		//Terminate depends on the num (condition)
	}

	console.log(num);
}
print(12);
print(-12);
