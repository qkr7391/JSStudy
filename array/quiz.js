// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function changeItem(array) {
	let arr2 = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] === "🍓") {
			arr2.push("🥝");
		} else {
			arr2.push(array[i]);
		}
	}
	return arr2;
}

let arr1 = ["🍌", "🍓", "🍇", "🍓"];
console.log(changeItem(arr1));

// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
function counter(arr, input) {
	let cnt = 0;
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] === input) {
			cnt++;
		}
	}
	return cnt;
}

let arr3 = ["🍌", "🥝", "🍇", "🥝"];
let input = "🥝";
console.log(counter(arr3, input));

// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function sameItem(array1, array2) {
	let array3 = [];
	for (let index = 0; index < array1.length; index++) {
		for (let j = 0; j < array2.length; j++) {
			if (array1[index] === array2[j]) {
				array3.push(array1[index]);
			}
		}
	}
	return array3;
}

let arr4 = ["🍌", "🥝", "🍇"];
let arr5 = ["🍌", "🍓", "🍇", "🍓"];
console.log(sameItem(arr4, arr5));
