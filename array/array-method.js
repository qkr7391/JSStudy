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

//make new array || return new array
let newArr = fruits.slice(0, 2); //cut and copy array from o(index) to before 2(index) in fruits array to newArr
console.log(newArr); // copied
console.log(fruits); // nothing changed

newArr = fruits.slice();
console.log(newArr);

newArr = fruits.slice(-1);
console.log(newArr);

//concate array and array2 ...
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

const arr4 = arr3.reverse(); //copy reversed array
console.log(arr4);

console.clear();

let arr = [
	[1, 2, 3],
	[4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); // falt 1 stage array
console.log(arr.flat(2)); // flat 2 stage array
//flat did not change origin array. return new array.

arr = arr.flat(2);
arr.fill(0); // fill array with 0 || change origin array
console.log(arr);

arr.fill("s", 1, 3); //fill 's' from 1 (index) to before 3 (index)
console.log(arr);

arr.fill("s", 1); // fill 's' from 1 (index) to end
console.log(arr);

// items in array changed to string and combined
let txt = arr.join(); //basic using ','
console.log(txt);

txt = arr.join("|"); //using |
console.log(txt);
//join return string value, not change origin array
