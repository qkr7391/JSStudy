//Spread operator
// Every Iterable can be Spread
function add(a, b, c) {
	return a + b + c;
}

const nums = [1, 2, 3];
// console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums)); //same with above

function sum(first, second, ...nums) {
	console.log(nums); //[0,1,2,4]
}
sum(1, 2, 0, 1, 2, 4);

//Array concat
const fruits1 = ["🍏", "🍐"];
const fruits2 = ["🍉", "🍓"];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1, ...fruits2];
console.log(arr);

arr = [...fruits1, "🥑", ...fruits2];
console.log(arr);

//Object
const leo = { name: "Leo", age: 20 };
const updated = {
	...leo,
	job: "developer",
}; //do not change origin object

console.log(leo);
console.log(updated);

// shallow copy in obj
const leo2 = {
	name: "Leo",
	age: 20,
	address: { home: "Toront", office: "Ottawa" },
};
const updated2 = {
	...leo2,
	job: "developer",
}; //do not change origin object

console.log(leo2);
console.log(updated2);
