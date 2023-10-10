//
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
console.log(new Set(fruits)); // >> ser
console.log([...new Set(fruits)]); // >> array

function removeDuplication(array) {
	return [...new Set(array)];
}
console.log(removeDuplication(fruits));

//
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
	// const array = [...set1].filter((item) => set2.has(item));
	// return new Set(array);
	return new Set([...set1].filter((item) => set2.has(item)));
}

console.log(findIntersection(set1, set2));
