let array = new Array(2); // 2 === size
console.log(array);

array = new Array(1, 2, 3); // values
console.log(array);

array = Array.of(1, 2); // static function
console.log(array);

const array2 = [1, 2, 3, 4]; // array literal
console.log(array2);

array = Array.from(array2);
console.log(array);

// Generally, array has same size of memory and should be saved Consecutively
// In javascript, array is kind of similar with object [it's not saved Consecutively]
// Type Collection ... >> for support these

array = Array.from({
	0: "H",
	1: "i",
	length: 2,
});
console.log(array);
