//can create uniqe key

const map = new Map();
const key1 = "key";
const key2 = "key";
map.set(key1, "Hello");
console.log(map.get(key2)); //Hello
console.log(key1 === key2); //true

///////////////
const key3 = Symbol("key");
const key4 = Symbol("key");
map.set(key3, "Hello");
console.log(map.get(key4)); //undefined
console.log(key3 === key4); //false

//When you want to use one key with the same name
//Symbol.for
//gloal symbol registry
const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(k1 === k2); //true

console.log(Symbol.keyFor(k1)); //key
console.log(Symbol.keyFor(key3)); //undefined

const obj = { [k1]: "Hello", [Symbol("key")]: 1 };
console.log(obj);
console.log(obj[k1]); //Hello
console.log(obj[Symbol("key")]); //undefined
