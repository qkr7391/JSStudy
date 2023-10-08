const num1 = 123;
const num2 = new Number(123); //waste of memory

console.log(num1);
console.log(num2);

console.log(Number.MAX_VALUE); //Max num in integer
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

//ex1
if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}
if (num1 < Number.MAX_VALUE) {
}

//10n >> Exponential Notation
const num3 = 102;
console.log(num3.toExponential());

//round
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString("ar-EG"));

//Round to the desired number of digits
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // Exponential notation is used when there is a limit to the representation.

//EPSILON -The smallest number that can be represented between 0 and 1.
console.log(Number.EPSILON);
if (Number.EPSILON > 0 || Number.EPSILON < 1) {
	console.log("EPSILON");
}

const num = 0.1 + 0.2 - 0.2;
console.log(num);

function isEqual(origin, expect) {
	// return origin === expect; //Minor errors
	// return origin - expect < Number.EPSILON; //change
	return Math.abs(origin - expect) < Number.EPSILON;
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1)); //false - Minor errors
