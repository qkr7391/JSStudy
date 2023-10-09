//array's methods

const fruits = ["🍎", "🍐", "🍊", "🍋"];

// check the object is array or not
console.log(Array.isArray(fruits)); //true
console.log(Array.isArray({})); //false

// find the location index of specific item
console.log(fruits.indexOf("🍎")); // 0

// check the item is in the array or not
console.log(fruits.includes("🍎")); // true

// adding to the end of the array
let length = fruits.push("🍉"); // change/update the array
console.log(fruits);
console.log(length); // push return number of length

//adding to the front of the array
length = fruits.unshift("🍇"); // change/update the array
console.log(fruits);
console.log(length); // unshift return number of length

//remove item at the end of the array
let lastItem = fruits.pop(); // return removed item
console.log(fruits);
console.log(lastItem);

//remove item at the front of the array
let removed = fruits.shift(); //return removed item
console.log(fruits);
console.log(removed);

//add or remove inside array || change/update array
let deleted = fruits.splice(1, 1); // from 1 (index) remove 1 item
console.log(fruits);
console.log(deleted); // array state deleted item is returned
fruits.splice(1, 0, "🍓", "🫐"); // from 1 (index), delete 0, add  "🍓", "🫐"
console.log(fruits);
