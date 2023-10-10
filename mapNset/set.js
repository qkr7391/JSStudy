//Set
const set = new Set();
const set2 = new Set([1, 2, 3]);
console.log(set2);

console.log(set2.size);

console.log(set2.has(2)); //true
console.log(set.has(1)); // false

set2.forEach((item) => console.log(item));
for (const value of set2.values()) {
	console.log(value);
}

//add
set2.add(6);
console.log(set2);
set2.add(6); //ignored - no repeat
console.log(set2);

//delete
set2.delete(6);
console.log(set2);

//remove all
set2.clear();
console.log(set2);

//object set
const obj1 = { name: "🍎", price: 3 };
const obj2 = { name: "🍌", price: 2 };
const objs = new Set([obj1, obj2]);
console.log(objs);

//quiz >> obj -> shallow copy
obj1.price = 10;
objs.add(obj1);
console.log(objs);

//quiz
const obj3 = { name: "🍌", price: 2 };
objs.add(obj3);
console.log(objs);
