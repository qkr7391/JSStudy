// The default value for the parameter is undefined
// The parameter's information is stored in an arguments object that can be accessed from inside the function
// The default value for the parameter >> function add(a=1, b=2){}

function add(a, b) {
	console.log(a);
	console.log(b);
	console.log(arguments);
	return a + b;
}

add();
add(1, 2);
add(2, 3, 4);

//Rest parameters
function sum1(...numbers) {
	console.log(numbers);
}

sum1(1, 2, 3, 4, 5, 6, 7);

function sum2(a, b, ...numbers) {
	console.log(a);
	console.log(b);
	console.log(numbers);
}

sum2(1, 2, 3, 4, 5, 6, 7);
