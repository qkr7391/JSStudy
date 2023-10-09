//shallow copy >> object get memory address
// when copy in JavaScript, always do shallow copy
//Array.from, concat, slice, spread(...), Object.assign >> shallow copy
//when you copy or send object, always save or send address of it.

const pizza = { name: "🍕", price: 2 };
const buger = { name: "🍔", price: 3 };
const taco = { name: "🌮", price: 1 };

const store1 = [pizza, buger]; //point addresses each pizza and buger
const store2 = Array.from(store1); //copy store1 to store2
console.log("store1", store1);
console.log("store2", store2);

store2.push(taco);
console.log("store1", store1);
console.log("store2", store2);

pizza.price = 4;
console.log("store1", store1);
console.log("store2", store2);
