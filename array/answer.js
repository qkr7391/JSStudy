// q1 >> more reuseable version
function replace(array, from, to) {
	const replaced = Array.from(array);
	for (let i = 0; i < replaced.length; i++) {
		if (replaced[i] === from) {
			replaced[i] = to;
		}
	}
	return replaced;
}

const array = ["🍌", "🍓", "🍇", "🍓"];
const result = replace(array, "🍓", "🥝");
console.log(result);

//q2
function count(array, item) {
	let counter = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === item) {
			counter++;
		}
	}
	return counter;
}

const array2 = ["🍌", "🥝", "🍇", "🥝"];
const item = "🥝";
console.log(count(array2, item));

//q3
function match(input, search) {
	const result = [];
	for (let i = 0; i < input.length; i++) {
		if (search.includes(input[i])) {
			result.push(input[i]);
		}
	}
	return result;
}
console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));
