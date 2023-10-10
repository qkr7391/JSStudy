// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function changeItem(array, from, to) {
	return array.map((item) => (item === from ? to : item));
}

const arr1 = ["🍌", "🍓", "🍇", "🍓"];
const result = changeItem(arr1, "🍓", "🥝");
console.log(result);

// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
function counter(arr, input) {
	return arr.filter((value) => value === input).length;
	// return arr.reduce((count, item) => {
	// 	if (item === input) {
	// 		count++;
	// 	}
	// 	return count;
	// }, 0);
}

let arr3 = ["🍌", "🥝", "🍇", "🥝"];
let input = "🥝";
console.log(counter(arr3, input));

// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function sameItem(array1, array2) {
	return array1.filter((item) => array2.includes(item));
}

let arr4 = ["🍌", "🥝", "🍇"];
let arr5 = ["🍌", "🍓", "🍇", "🍓"];
console.log(sameItem(arr4, arr5));

//
const nums = [3, 16, 5, 25, 4, 34, 21];
const result2 = nums
	.filter((item) => item > 5)
	.reduce((avg, num, _, array) => avg + num / array.length, 0);

console.log(result2);
