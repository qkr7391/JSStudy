const fruits = ["🍌", "🍓", "🍇", "🍓"];
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// without using for statement
fruits.forEach(function (value, index, array) {
	console.log("------------");
	console.log(value); //items in the array
	console.log(index); // index of each items
	console.log(array); //array
});
//same
fruits.forEach(function (value) {
	console.log(value); //items in the array
});
//same
fruits.forEach((value) => console.log(value));

//***************/

const pizza = { name: "🍕", price: 2 };
const buger = { name: "🍔", price: 3 };
const taco = { name: "🌮", price: 1 };

const store = [pizza, buger, taco, buger];

//if you want to find "🍔"
// >> find : Return the first item that meets the condition
const found = store.find((value) => {
	return value.name === "🍔";
});
//same || simplify
const found2 = store.find((value) => value.name === "🍔");
console.log(found);
console.log(found2);

//findIndex : Return the first item's index that meets the condition
result = store.findIndex((value) => value.name === "🍔");
console.log(result);

//partially meets the condition(call back)
result = store.some((item) => item.name === "🍔");
console.log(result); //true

//everything meets the condition(call back)
result = store.every((item) => item.name === "🍔");
console.log(result); //false

//Return all items meeting the condition in a new array
result = store.filter((item) => item.name === "🍔");
console.log(result);

//************************* */
// console.clear();

//Map >> transform the items emitted by an Observable by applying a function to each item
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
	if (item % 2 === 0) {
		return item * 2;
	} else {
		return item;
	}
});
console.log(result);

//Flatmap : transform the items emitte by an Observable into Observables, then flatten the emissions from those into a single Observable
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ["semper", "coding"].map((text) => text.split(""));
console.log(result);

result = ["semper", "coding"].flatMap((text) => text.split(""));
console.log(result);

//sort : edit origin array
const texts = ["hi", "abd"];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // 10 is not correct
numbers.sort((a, b) => a - b); // < 0 : a, b ||| > 0 : b, a
console.log(numbers);

//reduce : apply a function to each item emitted by an Observable, sequentially, and emit the final value
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
	sum += value;
	return sum;
}, 0); // 0: initial value for sum
console.log(result);
//same /: simplify
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
