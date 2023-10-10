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
