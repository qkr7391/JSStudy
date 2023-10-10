//Map
const map = new Map();
const map2 = new Map([
	["key1", "🍎"],
	["key2", "🍌"],
]);
console.log(map2);

console.log(map2.size);

console.log(map2.has("key1")); //true
console.log(map2.has("key6")); //false

map2.forEach((value, key) => console.log(key, value));
console.log(map2.keys());
console.log(map2.values());
console.log(map2.entries());

//find
console.log(map2.get("key1"));
console.log(map2.get("key6")); //undefind

//add
map2.set("key3", "🥑");
console.log(map2);

//delete
map2.delete("key3");
console.log(map2);

//remove all
map2.clear();
console.log(map2);

//map is similar with obj
//but difference ?
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, desc: "drink" };
const obj = {
	[key]: milk,
};
console.log(obj);

const map3 = new Map([[key, milk]]);
console.log(map3);

console.log(obj[key]);
console.log(map3.get(key));
