//delete repeat items
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
console.log(fruits);

const set = new Set();
fruits.forEach((item) => set.add(item));
console.log(set);

//
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

const set3 = new Set();
set1.forEach((item) => {
	if (set2.has(item)) {
		set3.add(item);
	}
});
console.log(set3);
